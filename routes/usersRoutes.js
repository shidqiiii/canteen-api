var express = require("express");
const { RegisterUser } = require("../controllers/users.controller");
var router = express.Router();

/* GET users listing. */
router.post("/register", RegisterUser);

module.exports = router;
