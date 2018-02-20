const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project1');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3001;

const app = express();
const user = require('./routes/user');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',user)

app.listen(port ,() => {
  console.log('ayo jalan port 3001');
});
