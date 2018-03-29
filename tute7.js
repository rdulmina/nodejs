var express= require('express');
var app =express();

app.use('/mycssfiles',express.static(__dirname+'/css'));
		
app.get("/",function(request,responce){
	responce.sendFile('home.html',{root:__dirname});
	
});
app.listen(8080,function(){
	console.log("server is up");
});