const { User } = require("../db/models");
const bcrypt = require("bcrypt");
const { _res } = require("../utils");
const createError = require("http-errors");

const RegisterUser = async (req, res, next) => {
    const { name, password, email, role } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        const existingEmail = await User.findOne({ where: { email: email } });
        if (existingEmail) {
            next(createError(409, "Email telah terdaftar"));
        }

        await User.create({ name, password: hashPassword, email, role });
        return _res(res, 201);
    } catch (error) {
        next(createError(500));
    }
};

module.exports = { RegisterUser };
