var http= require('http');
http.createServer(function(req,res){
	res.end("heddddllo world");
	
}).listen(8080);
console.log("nodejs server is listning");