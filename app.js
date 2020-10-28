require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Router
const apiRouter = require('./router/api.router');

const app = express();

// DB Connect
mongoose.connection.once('open', () => console.log('DataBase is Connect') );
mongoose.connect( process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.use(express.static('public'));

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use('/api', apiRouter);

app.listen( PORT, () => {
    console.log(`Srver Work in Port ${PORT}`);
});