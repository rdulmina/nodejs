var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var sessions=require('express-session');
var session;
app.use(bodyparser());
app.use(sessions({
	secret:'ffkgfkg434$%%$232'
})); 
app.get('/',function(req,res){
	session=req.session;
	if(session.userid){
		res.send("Welcome admin <a href=\'/logout'>click to logout</a>");
	}
	else
	res.sendFile('login.html',{root:__dirname});
});
app.get('/logout',function(req,res){
	req.session.destroy();
	res.redirect('/');
});
app.post('/login',function(req,res){
	console.log(req.body.username);
	if(req.body.username=='admin' && req.body.password=='admin'){
		session=req.session;
		session.userid=req.body.username;
		res.send("Welcome admin <a href=\'/logout'>click to logout</a>");
		
	}
	else{
		res.end('Invalid username or pass');
	}
})
app.listen(8080,function(){
		  console.log('woowww');
	});