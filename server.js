var http = require('http');
var fs = require('fs');
var path = require('path');
var files = {};
var port = 9000;
var host = '127.0.0.1';

var asset = function(req, res) {
	//if can't find a file return 404 code
    var sendError = function(message, code) {
        if (code === undefined) {
            code = 404;
        }
        res.writeHead(code, {
            'Content-Type': 'text/html'
        });
        res.end(mesage);
    }
    //serve different type of file
    var serve = function(file) {
        var contentType;
        switch (file.ext.toLowerCase()) {
            case 'css':
                contentType = 'text/css';
                break;
            case "html":
                contentType = "text/html";
                break;
            case "js":
                contentType = "application/javascript";
                break;
            case "ico":
                contentType = "image/ico";
                break;
            case "json":
                contentType = "application/json";
                break;
            case "jpg":
                contentType = "image/jpeg";
                break;
            case "jpeg":
                contentType = "image/jpeg";
                break;
            case "png":
                contentType = "image/png";
                break;
            default:
                contentType = "text/plain";
        }
        res.writeHead(200, {
            'Cotentn-Type': cotentType
        });
        res.end(file.content);
    }
    //accepts the path and opens the file. 
    //If the file is missing or there is a problem reading it,
    // it sends an error to the user.
    var readFile = function(filePath) {
    	if (files[filePath]) {
    		serve(files[filePath]);
    	} else {
    		fs.readFile(filePath, function(err,data){
    			if (err) {
    				sendError('Error reading' + filePath + '.');
    				return;
    			}
    			files[filePath] = {
    				ext: filePath.split('.').pop(),
    				content:data
    			};
    			serve(files[filePath]);
    		});
    	}
    }

    readFile(path.normalize(_dirname + req.url));
 }




var app = http.createServer(asset).listen(port, host);
console.log('Listening on ' + host + ':' + port);