var express = require("express");
const { RegisterUser, LoginUser } = require("../controllers/users.controller");
var router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);

module.exports = router;
