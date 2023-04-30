const express = require("express");

const {
    getAllOrder,
    getOrderByUser,
    getOrderByCanteen,
    createNewOrder,
    getDetailOrder,
    updateOrder,
    deleteOrder,
} = require("../controllers/orders.controllers");
const router = express.Router();

router.get("/list", getAllOrder);
router.get("/list/:user_id", getOrderByUser);
router.get("/list/:canteen_id", getOrderByCanteen);
router.get("/detail/:order_id", getDetailOrder);
router.post("/create", createNewOrder);
router.post("/update/:order_id", updateOrder);
router.post("/delete/:order_id", deleteOrder);

module.exports = router;
