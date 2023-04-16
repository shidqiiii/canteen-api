const { Canteen } = require("../db/models");
const { _res } = require("../utils");
const createError = require("http-errors");
const fs = require("fs");

const getAllCanteeen = async (req, res, next) => {
    try {
        const allCanteen = await Canteen.findAll({});
        _res(res, 200, "OK", allCanteen);
    } catch (error) {
        next(createError(500));
    }
};

const createNewCanteen = async (req, res, next) => {
    const { name, address, rate } = req.body;

    if (!req.file) {
        next(createError(422, "Image harus diupload"));
    }

    try {
        const newCanteen = await Canteen.create({ name, address, photo: req.file.path.replace(/\\/g, "/"), rate });
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

const deleteCanteen = async (req, res, next) => {
    const { canteen_id } = req.params;
    try {
        // find canteen
        const findCanteen = await Canteen.findOne({ where: { canteen_id: canteen_id } });
        if (!findCanteen) {
            next(createError(400, "Kantin tidak ditemukan"));
        }

        const deleteCanteen = await findCanteen.destroy({});
        if (deleteCanteen) {
            fs.unlinkSync(deleteCanteen.photo);
            return _res(res, 200, "Berhasil Menghapus Kantin");
        }
    } catch (error) {
        next(createError(500));
    }
};

module.exports = { getAllCanteeen, createNewCanteen, getDetailCanteen, updateCanteen, deleteCanteen };
