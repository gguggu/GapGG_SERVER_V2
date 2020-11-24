const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');
const PORT = 5000;
const DB = mongoose.connection;

mongoose.Promise = global.Promise;

DB.on('error', console.error);
DB.once('open', () => {
  console.log('connected to DB');
});

mongoose.connect('mongodb://')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const server = app.listen(PORT, () => {
  console.log('server on');
})