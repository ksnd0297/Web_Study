var express = require('express');
var router = express.Router();

var fs = require('fs');

router.get('*', function (req, res, next) {
    fs.readdir('./data', function (error, filelist) {
        res.list = filelist;
        next();
    });
});
module.exports = router;