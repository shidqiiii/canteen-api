const { Canteen } = require("../db/models");
const { _res } = require("../utils");
const createError = require("http-errors");

const getAllCanteeen = async (req, res, next) => {
    console.log("get All Canteen list");
};

const createNewCanteen = async (req, res, next) => {
    console.log(req.file);
    const { name, address, rate } = req.body;

    if (!req.file) {
        next(createError(422, "Image harus diupload"));
    }

    try {
        const newCanteen = await Canteen.create({ name, address, photo: req.file.path, rate });
        _res(res, 201, "Created", newCanteen);
    } catch (error) {
        next(createError(500));
    }
};

const getDetailCanteen = async (req, res, next) => {
    console.log("detail");
};

const updateCanteen = async (req, res, next) => {
    console.log("update");
};

module.exports = { getAllCanteeen, createNewCanteen, getDetailCanteen, updateCanteen };
