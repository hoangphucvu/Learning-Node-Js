/**
 * Created by phuc.ngo on 13/10/2016.
 */
var express = require('express');
var app = express();
var port = 8000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/',function (req,res) {
    res.send('main');
});

app.listen(port,function(error){
    console.log('Running on port ' + port);
});