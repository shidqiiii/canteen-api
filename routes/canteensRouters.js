const express = require("express");
const {
    getAllCanteeen,
    createNewCanteen,
    getDetailCanteen,
    updateCanteen,
    deleteCanteen,
} = require("../controllers/canteens.controller");
const { UploadImage } = require("../middlewares/uploadPhoto");
const router = express.Router();

router.get("/list", getAllCanteeen);
router.get("/detail/:canteen_id", getDetailCanteen);
router.post("/new", UploadImage.single("photo"), createNewCanteen);
router.put("/update/:canteen_id", UploadImage.single("photo"), updateCanteen);
router.post("/delete/:canteen_id", deleteCanteen);

module.exports = router;
