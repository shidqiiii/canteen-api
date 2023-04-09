const { User } = require("../db/models");
const bcrypt = require("bcrypt");
const { _res } = require("../utils");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const RegisterUser = async (req, res, next) => {
    const { name, password, email, role } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        // Check Email
        const existingEmail = await User.findOne({ where: { email: email } });
        if (existingEmail) {
            next(createError(409, "Email telah terdaftar"));
        }

        await User.create({ name, password: hashPassword, email, role });
        _res(res, 201, "Created");
    } catch (error) {
        next(createError(500));
    }
};

const LoginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check Email
        const findEmail = await User.findOne({ where: { email: email } });
        if (!findEmail) {
            next(createError(404, "User tidak ditemukan"));
        }

        // Check Password
        const validPassword = bcrypt.compareSync(password, findEmail.password);
        if (!validPassword) {
            next(createError(401, "Email dan password tidak sesuai"));
        }

        const token = jwt.sign(
            { id: findEmail.id, name: findEmail.name, email: findEmail.email, role: findEmail.role },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );
        _res(res, 200, "Success", { token: token });
    } catch (error) {
        next(createError(500));
    }
};

module.exports = { RegisterUser, LoginUser };
