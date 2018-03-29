// JavaScript Document
var express= require('express');
var app =express();
var fs=require('fs');
var path =require('path');

app.use('/mycssfiles',express.static(__dirname+'/css'));
		
app.get("/",function(request,response){
	response.sendFile('home.html',{root:__dirname});
	
});
app.get(/^(.+)/,function(request,response){
	response.end(JSON.stringify(request.query.name));
//	try{
//		if(fs.statSync(path.join(__dirname,'views',request.params[0]+'.html'))){
//			responce.sendFile(request.params[0]+'.html',{root:path.join(__dirname,'views')});
//		}
//		
//	}
//	catch(error){
//		responce.sendFile('404.html',{root:path.join(__dirname,'views')});
//	}
});
app.listen(8080,function(){
	console.log("server is up");
});