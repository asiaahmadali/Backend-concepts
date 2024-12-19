// const CatMe = require('cat-me') ;
// console.log(CatMe()  );
// call-me is a package that give code for cat
const http = require('http') ;
const server = http.createServer((req, res)=>{
    res.end('server')
})
// run the server on port no 3000
server.listen(3000,()=>{
     console.log("server is listening at port no 3000");
     
})

