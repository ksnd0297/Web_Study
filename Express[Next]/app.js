//app.js
const express = require('express');
const app = express();

var step1 = require('./routes/step1');
var step2 = require('./routes/step2');

app.use('/', step1, step2);

app.listen(3000, () => { console.log(`Example app listening at http://localhost:3000`) })