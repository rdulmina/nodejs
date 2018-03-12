var mod=require('./modules');
var http= require('http');
http.createServer(function(req,res){
	res.end("heddddllo world");
	
}).listen(8080);
console.log("nodejs server is listning");
mod.func1();
console.log(mod.myvar);
console.log(mod);