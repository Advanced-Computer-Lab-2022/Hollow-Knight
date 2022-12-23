const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: false,
  },
  last_name: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  countryAbb: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
});

// static signup method
userSchema.statics.signup = async function (
  email,
  password,
  type,
  first_name,
  last_name,
  country,
  countryAbb,
  gender
) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
  console.log(type,first_name,country)
  if (!type) {
    type = "individual trainee";
  }
console.log(type)
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    type,
    first_name,
    last_name,
    country,
    countryAbb,
    gender,
  });

  return user;
};
// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};
module.exports = mongoose.model("User", userSchema);
