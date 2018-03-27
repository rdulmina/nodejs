var express= require('express');
var app =express();

app.get("/",function(request,responce){
	responce.send("hello from express");
})
app.listen(8080,function(){
	console.log("server is up");
});