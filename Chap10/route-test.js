/*
 * @Author: phuc.ngo
 * @Date:   2016-09-26 07:51:43
 * @Last Modified by:   phuc.ngo
 * @Last Modified time: 2016-09-26 09:09:31
 */

var app = require('express')();
app.use(function(req, res, next) {
    console.log('\n\nAlways');
    next();
});

app.get('/a', function(req, res) {
    console.log('/a :route terminated');
    res.send('a');
});

app.get('/a', function(req, res) {
    console.log('/a :never call');
});

app.get('/b', function(req, res) {
    console.log('/b:route not terminated');
});

//run when a or b is call

app.use(function(req, res, next) {
    console.log('Some time');
    next();
});

app.get('/b', function(req, res, next) {
    console.log('/b (part2) :error thrown');
    throw new Error('b failed');
});

app.use('/b', function(err, req, res, next) {
    console.log('/b error detected and passed on');
    next(err);
});

app.get('/c', function(err, req) {
    console.log('/c: error thrown');
    throw new Error('c failed');
});

app.use('/c', function(err, req, res, next) {
    console.log('/c: error deteccted but not passed on');
    next();
});

app.use(function(err, req, res, next) {
    console.log('unhandled error detected: ' + err.message);
    res.send('500 - server error');
});
app.use(function(req, res) {
    console.log('route not handled');
    res.send('404 - not found');
});
app.listen(3000, function() {
    console.log('listening on 3000');
});
