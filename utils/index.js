const statusCode = {
    200: "OK",
    201: "Created",
    400: "Bad Request",
    401: "Unauthorized",
    404: "Not Found",
    409: "Conflict",
    500: "Internal Server Error",
    503: "Service Unavailable",
};

const _res = (res, code, message, data) => {
    return res.status(code).json({ info: { status: statusCode[code], message: message }, data: data });
};

module.exports = { _res };
