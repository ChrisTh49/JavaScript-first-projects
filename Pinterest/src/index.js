const express = require('express');
const path = require('path');

const morgan = require('morgan');
const multer = require('multer');
const { v4 } = require('uuid');

const { format } = require('timeago.js');

const app = express();
require('./database');

// SETTINGS

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES

app.use(morgan('dev'));

app.use(express.urlencoded({
    extended: false
}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, v4() + path.extname(file.originalname));
    }
});

app.use(multer({
    storage: storage
}).single('image'));

// GLOBAL VARIABLES

app.use((req, res, next) => {
    app.locals.format = format;

    next();
});

//ROUTES

app.use(require('./routes/index.routes'));

// STATIC FILES

app.use(express.static(path.join(__dirname, 'public')));

// START SERVER

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});