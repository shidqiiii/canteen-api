const createError = require("http-errors");
const { Order, MenuOrder } = require("../db/models");
const { _res } = require("../utils");

const getAllOrder = async (req, res, next) => {
    try {
        const allOrder = await Order.findAll({});
        _res(res, 200, "OK", allOrder);
    } catch (error) {
        next(createError(500));
    }
};

const getOrderByUser = async (req, res, next) => {
    const { user_id } = req.params;

    try {
        const orderByUser = await Order.findAll({ where: { user_id: user_id } });
        _res(res, 200, "OK", orderByUser);
    } catch (error) {
        next(createError(500));
    }
};

const getOrderByCanteen = async (req, res, next) => {
    const { canteen_id } = req.params;

    try {
        const orderByUser = await Order.findAll({ where: { canteen_id: canteen_id } });
        _res(res, 200, "OK", orderByUser);
    } catch (error) {
        next(createError(500));
    }
};

const createNewOrder = async (req, res, next) => {};
const getDetailOrder = async (req, res, next) => {};
const updateOrder = async (req, res, next) => {};
const deleteOrder = async (req, res, next) => {};

module.exports = {
    getAllOrder,
    getOrderByUser,
    getOrderByCanteen,
    createNewOrder,
    getDetailOrder,
    updateOrder,
    deleteOrder,
};
