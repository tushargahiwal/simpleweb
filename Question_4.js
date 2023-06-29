var h= require('http');
 var u=require('url');

var server=h.createServer(function(req,res){
var p=u.parse(req.url,true)
var nm=p.query.name;
var cl=p.query.cl;
res.writeHead(200,{'content-type':'text/html'});
res.write("<h1 style='color:"+cl+"'>welcome "+nm+"</h1>");
// res.write("<h1 style='color:"+cl+"'>);
// res.write("welcome "+nm);
// res.write("</h1>");
res.end();
});

server.listen(9000,function(){
console.log("server is ready")
});
