const { Menu } = require("../db/models");
const { _res } = require("../utils");
const createError = require("http-errors");
const fs = require("fs");

const getAllMenu = async (req, res, next) => {
    try {
        const allMenu = await Menu.findAll({});
        _res(res, 200, "OK", allMenu);
    } catch (error) {
        next(createError(500));
    }
};

const getMenuByCanteen = async (req, res, next) => {
    const { canteen_id } = req.params;
    try {
        const MenuByCanteen = await Menu.findAll({ where: { canteen_id: canteen_id } });
        _res(res, 200, "OK", MenuByCanteen);
    } catch (error) {
        next(createError(500));
    }
};

const createNewMenu = async (req, res, next) => {
    const { name, description, price, rate, canteen_id } = req.body;

    if (!req.file) {
        next(createError(422, "Image harus diupload"));
    }

    try {
        const newMenu = await Menu.create({
            name,
            description,
            price,
            rate,
            canteen_id,
            photo: req.file.path.replace(/\\/g, "/"),
        });
        _res(res, 201, "Created", newMenu);
    } catch (error) {
        next(createError(500));
    }
};

const getDetailMenu = async (req, res, next) => {
    const { menu_id } = req.params;

    try {
        const findMenu = await Menu.findOne({ where: { menu_id: menu_id } });
        _res(res, 200, "OK", findMenu);
    } catch (error) {
        next(createError(500));
    }
};

const updateMenu = async (req, res, next) => {
    const { menu_id } = req.params;
    const { name, description, price, rate, canteen_id } = req.body;
    let new_image;

    try {
        // find menu
        const findMenu = await Menu.findOne({ where: { menu_id: menu_id } });
        if (!findMenu) {
            next(createError(400, "Menu tidak ditemukan"));
        }

        if (req.file) {
            new_image = req.file.path.replace(/\\/g, "/");
            fs.unlinkSync(findMenu.photo);
        } else {
            new_image = findMenu.photo;
        }

        const updateMenu = await findMenu.update(
            { name, description, price, rate, canteen_id, photo: new_image },
            { where: { menu_id: menu_id } }
        );

        if (updateMenu) {
            return _res(res, 200, updateMenu);
        }
    } catch (error) {
        next(createError(500));
    }
};

const deleteMenu = async (req, res, next) => {
    const { menu_id } = req.params;
    try {
        // find menu
        const findMenu = await Menu.findOne({ where: { menu_id: menu_id } });
        if (!findMenu) {
            next(createError(400, "Menu tidak ditemukan"));
        }

        const deleteMenu = await findMenu.destroy({});
        if (deleteMenu) {
            fs.unlinkSync(deleteMenu.photo);
            _res(res, 200, "Berhasil Menghapus Menu");
        }
    } catch (error) {
        next(createError(500));
    }
};

module.exports = { getAllMenu, getMenuByCanteen, createNewMenu, getDetailMenu, updateMenu, deleteMenu };
