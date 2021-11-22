const https = require('https');
https.get('https://jsonplaceholder.typicode.com/users',function(res){
    res.on('data',function(data){
        console.log(data);
    })
})