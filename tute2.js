var http= require('http');
http.createServer(function(req,res){
	res.end("heggggggggggggggggggllo world");
	
}).listen(8080);
console.log("nodejs server is listning");