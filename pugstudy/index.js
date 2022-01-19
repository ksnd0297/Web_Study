const express = require('express');
const pug = require('pug');
const app = express();
app.set('view engine','pug');


app.get('/', function (req, res) {
    res.render('template.pug',{
      title : 'Yes'
    });
  })
  

app.listen(3000, ()=> {console.log('connect')});