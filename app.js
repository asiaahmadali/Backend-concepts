// const CatMe = require('cat-me') ;
// console.log(CatMe()  );

const http = require('http') ;
const server = http.createServer((req, res)=>{
    res.end('server')
})
// run the server
server.listen(3000,()=>{
     
})

