const udm = require('./userDefinedModule');
const http = require('http');
const port = 3000;
const server = http.createServer(function(req,res){
    let a = 100;
    let b = 19;
    res.write("Addition of a and b: "+udm.add(a,b));
    res.end();
})
server.listen(port,function(error){
    if(error){
        console.log("Error Occured " + error);
    }else{
        console.log("Server Listening at port "+port);
    }
})