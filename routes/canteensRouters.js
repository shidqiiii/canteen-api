var express = require("express");
const {
    getAllCanteeen,
    createNewCanteen,
    getDetailCanteen,
    updateCanteen,
} = require("../controllers/canteens.controller");
var router = express.Router();

router.get("/list", getAllCanteeen);
router.post("/new", createNewCanteen);
router.get("/detail/:id", getDetailCanteen);
router.post("/:id", updateCanteen);

module.exports = router;
