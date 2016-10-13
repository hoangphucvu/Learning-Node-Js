/**
 * Created by phuc.ngo on 13/10/2016.
 */
var express = require("express");
var app = express();
var port = 8000;
app.listen(port,function(error){
    console.log("Running on port " + port);
});