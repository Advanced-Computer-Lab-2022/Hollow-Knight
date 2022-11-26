const express = require("express");
const router = express.Router();
const { updateCountry, fetchUser } = require("../controllers/userController");

router.patch("/", updateCountry);
router.get("/:id", fetchUser);
module.exports = router;
