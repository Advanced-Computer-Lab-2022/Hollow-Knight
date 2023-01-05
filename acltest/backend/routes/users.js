const express = require("express");
const router = express.Router();
const {
  updateCountry,
  changePassword,
  changePassword1,
  forgotPassword,
  sendEmail,
  fetchUser,
} = require("../controllers/userController");
const { loginUser } = require("../controllers/userController");
const { signupUser } = require("../controllers/userController");
const {getUserType} = require('../controllers/userController')
const  requireAuth = require("../middleware/requireAuth");


router.patch("/", updateCountry);

router.post("/changepassword", changePassword);
//login route
router.post("/login", loginUser);
//signup route
router.post("/signup", signupUser);

router.post("/forgotpassword", forgotPassword);
router.post("/changepassword/:token", changePassword1);
router.post("/sendmail", sendEmail);
router.get("/:id", fetchUser);

router.use(requireAuth);
router.get("/usertype", getUserType);

module.exports = router;
