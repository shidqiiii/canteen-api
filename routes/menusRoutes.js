const express = require("express");

const { UploadImage } = require("../middlewares/uploadPhoto");
const {
    getAllMenu,
    getDetailMenu,
    createNewMenu,
    updateMenu,
    deleteMenu,
    getMenuByCanteen,
} = require("../controllers/menus.controller");
const router = express.Router();

router.get("/list", getAllMenu);
router.get("/list/:canteen_id", getMenuByCanteen);
router.get("/detail/:menu_id", getDetailMenu);
router.post("/new", UploadImage.single("photo"), createNewMenu);
router.post("/update/:menu_id", UploadImage.single("photo"), updateMenu);
router.post("/delete/:menu_id", deleteMenu);

module.exports = router;
