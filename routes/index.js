var express = require('express');
var router = express.Router();
var request = require('request');

var intervalCount = 1;

function getData(req, res) {
    request.get('http://dummy.restapiexample.com/api/v1/employees', function(err, response, body) {
        if (!err && response.statusCode == 200) {
            var locals = JSON.parse(body);
            /* GET home page. */
            router.get('/', function(req, res, next) {
              res.render('index', {
                    'locals': locals
              });
            });
        }
    });
}

getData();

module.exports = router;
