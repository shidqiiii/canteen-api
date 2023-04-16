var express = require("express");
const {
    getAllCanteeen,
    createNewCanteen,
    getDetailCanteen,
    updateCanteen,
    deleteCanteen,
} = require("../controllers/canteens.controller");
const { UploadImage } = require("../middlewares/uploadPhoto");
var router = express.Router();

router.get("/list", getAllCanteeen);
router.post("/new", UploadImage.single("photo"), createNewCanteen);
router.get("/detail/:canteen_id", getDetailCanteen);
router.post("/:canteen_id", updateCanteen);
router.delete("/delete/:canteen_id", deleteCanteen);

module.exports = router;
