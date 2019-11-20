require('dotenv').config();
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require("body-parser");
const urlparser = require('url');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const csrf = require('csurf'); 
const upload = require('multer')(); 
const config = require('./utils/config.js');
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });
const parseJSONBody = bodyParser.json();
const parseBody = [parseJSONBody, parseForm];
const Content = require('./server/models/content.js');
const staticPath = path.join(__dirname, '.', 'client', 'build');
app.use(require('express').static(staticPath));

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  response.header('Access-Control-Allow-Methods', 'GET, POST');
  response.header('Accept', '*/*');
  next();
});

const htmlpath = path.join(__dirname, './client/build/index.html');
app.get('*', (req, res) => res.sendFile(htmlpath));

app.post('/', upload.array(), parseBody
// , csrfProtection
, async (req, res, next) => {
  const body = req.body;
  console.log(body);
  const content = new Content(body);
  await content.save((err)=>next(err));
  return res.sendFile(htmlpath);
});

const send = require('gmail-send')({
  user: 'mmcrmsn@gmail.com',
  pass: process.env.GMAILPASSWORD,
  to:   'saltlakedsa.housing@gmail.com',
  subject: 'SLCRentersTogether - Someone is interested!',
});

app.post('/newsletter', upload.array(), parseBody, async(req, res, next) => {
  const body = req.body;
  console.log(body);
  send({
    text:    `Their name is ${body.name} and their email is ${body.email}.`,  
  }, (error, result, fullResult) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    }
    else {
      console.log(result);
      res.sendStatus(200);
    }
  });
});

app.use(function (req, res, next) {
  if (req.url) console.log(req.url)
  var err = new Error('Not Found');
  err.status = 404;
  return next(err);
})
.use(function (err, req, res, next) {
  console.log(err)
  return res.sendFile(htmlpath);
});

if (mongoose.connection.readyState === 0) {
  // connect to mongo db
  const mongoUri = config.mongourl;

  const promise = mongoose.connect(
    mongoUri, { useNewUrlParser: true }
  );
  promise
    .then(() => {
      console.log('MongoDB is connected');
    })
    .catch(err => {
      console.log(err);
      console.log('MongoDB connection unsuccessful');
    });
}

app
.listen(process.env.PORT, function () {
  console.log('Using Node Version: ' + process.version);
  (process.version == 'v10.15.3') ? console.log('..up-to-date') : console.log('expecting v10.15.3');
  console.log('Web server listening on port: ' + process.env.PORT);
});