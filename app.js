// const CatMe = require('cat-me') ;
// console.log(CatMe()  );
// call me is a package
const http = require('http') ;
const server = http.createServer((req, res)=>{
    res.end('server')
})
// run the server
server.listen(3000,()=>{
     console.log("server is listening at port no 3000");
     
})

