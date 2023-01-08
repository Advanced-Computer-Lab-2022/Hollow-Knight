const Users = require("../models/userModel");

const Trainee = require("../models/Trainees");
const Instructor = require("../models/Instructors");

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const process = require("process");
var nodeoutlook = require("nodejs-nodemailer-outlook");
const Admins = require("../models/Admins");
const updateCountry = async (req, res) => {
  console.log("cdcd");
  const instructor = await Users.findOneAndUpdate(
    { username: req.body.name },
    { country: req.body.country, countryAbb: req.body.countryAbb }
  );
  const trainee = await Users.findOneAndUpdate(
    { username: req.body.name },
    { country: req.body.country, countryAbb: req.body.countryAbb }
  );
  if (instructor != null) {
    return res.status(200).json(instructor);
  }
  if (trainee != null) {
    return res.status(200).json(trainee);
  }
  return res.status(404).json("Not found");
};
const fetchUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }
  const user = await Users.findById(id);
  console.log(user);
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(404).json("Not found");
};

const createtoken = async (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// receive an email to change a forgotten password
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const token = await createtoken(user._id);

    const url = `http://localhost:5000/api/users/changepassword/` + token;
    const url2 = `http://localhost:3000/forgotpassword/` + token;
    nodeoutlook.sendEmail({
      auth: {
        user: process.env.EMAIL, // Your email must be same outlook email
        pass: process.env.PASSWORD,
      },
      from: process.env.EMAIL,
      to: email,
      subject: "Reset Password",
      html: `<h1>DONOT FORGOT PASSWORD AGAIN</h1>
          <p>Click on the link below to reset your password</p>
          <a href=${url2}>${url2}</a>`,
      onError: (e) => console.log(e),
      onSuccess: (i) => console.log(i),
    });

    res.status(200).json({ url });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//change password without old password
const changePassword1 = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  console.log(token);
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    console.log(_id);
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// change password
const changePassword = async (req, res) => {
  const { email, password, newPassword } = req.body;
  try {
    if (!validator.isStrongPassword(newPassword)) {
      throw Error("Password not strong enough");
    }
    const user = await User.login(email, password);
    const token = await createtoken(user._id);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    const user1 = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        password: hash,
      }
    );
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = await createtoken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const {
    email,
    password,
    type,
    first_name,
    last_name,
    country,
    countryAbb,
    gender,
  } = req.body;

  try {
    const user = await User.signup(
      email,
      password,
      type,
      first_name,
      last_name,
      country,
      countryAbb,
      gender
    );
    const token = await createtoken(user._id);
    const userid = user._id;
    console.log(type)
    if(type=="trainee"||type=="corporate trainee"){
    const trainee = await Trainee.create({ userid: userid });
    }
    if(type=="admin"){
      const admin = await Admins.create({ userid: userid });
    }
    if(type=="instructor"){
      const instructor = await Instructor.create({ userid: userid });
    }

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Q:send Email to the user by using gmail api

const sendEmail = async (req, res) => {
  const { email, subject, message } = req.body;
  try {
    nodeoutlook.sendEmail({
      auth: {
        user: process.env.EMAIL, // Your email must be same outlook email
        pass: process.env.PASSWORD,
      },
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      html: message,

      onError: (e) => console.log(e),
      onSuccess: (i) => console.log(i),
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTokenFromHeader = (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

function getUserIdFromToken(token) {
  const decoded = jwt.verify(token, process.env.SECRET);
  console.log(decoded);
  return decoded._id;
}

const getUserType = async (req, res) => {

  const token = getTokenFromHeader(req);
  const id = getUserIdFromToken(token);
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }
  const user = await Users.findById(id);
  console.log
  if (user) {
    return res.status(200).json(user.type);
  }
  return res.status(404).json("Not found");
};


module.exports = {
  updateCountry,
  fetchUser,
  loginUser,
  signupUser,
  forgotPassword,
  changePassword,
  changePassword1,
  getUserType,
  sendEmail,
};
