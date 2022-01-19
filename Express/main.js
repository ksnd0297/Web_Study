const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');
var readRouter = require('./routes/read');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('*',readRouter);
app.use('/',indexRouter);
app.use('/topic', topicRouter);

app.listen(3000, () => { console.log(`Example app listening at http://localhost:3000`) })