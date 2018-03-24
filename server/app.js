const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const index       = require('./routes/index');
const cors        = require('cors');
const app         = express();

require('dotenv').config()
mongoose.connect('mongodb://reynaldi:12345@ds117719.mlab.com:17719/tdd')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/', index);

module.exports = app;
