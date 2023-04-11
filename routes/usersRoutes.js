var express = require("express");
const { RegisterUser, LoginUser, LoginAdmin } = require("../controllers/users.controller");
var router = express.Router();

router.post("/user/register", RegisterUser);
router.post("/user/login", LoginUser);
router.post("/bo/login", LoginAdmin);

module.exports = router;
