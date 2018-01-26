require('dotenv').load();
require('dotenv').config();

const express = require('express');
const path = require('path');
const { urlencoded, json } = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
const router = require('./routes/master');

app
  .use(urlencoded({ extended: true }))
  .use(json())
  .use(router)

app.listen(port, err => {
  if (err) throw `could not connect on port ${port}`;
  console.log(`listening on port ${port}`);
});