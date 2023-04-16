const multer = require("multer");
const createError = require("http-errors");

// config upload file
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, path.join(__dirname, "/public/images"));
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        // cb(null, false);
        cb(createError(400, "Ekstensi image tidak sesuai"));
    }
};

const UploadImage = multer({ storage: fileStorage, fileFilter: fileFilter });

module.exports = { UploadImage };
