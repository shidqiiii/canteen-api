const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const multer = require("multer");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRoutes");
const canteensRouter = require("./routes/canteensRouters");
const { _res } = require("./utils");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// config upload file
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "/public/images"));
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).single("photo");

app.use("/", indexRouter);
app.use("/auth", usersRouter);
app.use("/canteen", upload, canteensRouter);

// catch 404 and forward to error handler
app.use(async function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    _res(res, err.status || 500, err.message);
});

module.exports = app;
