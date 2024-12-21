// const CatMe = require('cat-me') ;
// console.log(CatMe()  );
// call-me is a package that give code for cat
const http = require('http') ;
const server = http.createServer((req, res)=>{
    if(req.url=='/about'){
        res.end('about page is here')
    }
    if(req.url=='/profile'){
        res.end('profile page is here')
    }
    res.end('default page')
})
// run the server on port no 3000
server.listen(3000,()=>{
     console.log("server is listening at port no 3000");
     
})

