const _res = (res, code, message, data) => {
    return res.status(code).json({ info: { status: code, message: message }, data: data });
};

module.exports = { _res };
