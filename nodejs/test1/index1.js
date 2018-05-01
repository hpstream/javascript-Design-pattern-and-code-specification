let http = require('http')
let url = require('url')
let fs = require('fs')
let path = require('path');
let queryString = require('querystring')
let port = 3000
const ROOT = __dirname;
let server = http.createServer((req, res) => {
    handle(req,res)
})

server.listen(port);
console.log(`server run ${port} port`)

let handle = function (req, res){
    res.writeHead(200,{'Content-type':'text/html'})
    // res.writeHead(200,{'Content-type':'text/plain'})
    // res.writeHead(200,{'Content-type':'application/json'})
    // res.end(JSON.stringify(url.parse(req.url)));
    // res.end(req.url);
    let cleintPath = url.parse(req.url)
    fs.readFile(path.join(ROOT,cleintPath.pathname), function(err,data){
        if(err) {
            HTML404(req,res,cleintPath)
            return;
        }
        let query = JSON.stringify(queryString.parse(cleintPath.query))
        console.log(req.headers)
        res.writeHead(200,{'Content-tyoe':"text/html",'Set-Cookie':'123456789'})
        res.end(JSON.stringify(req.headers))
    })
}
function HTML404(req,res,cleintPath){
    fs.readFile(path.join(ROOT, '/404.html'), function(err,data){
        if(err) throw err;
        res.writeHead(404,{'Content-tyoe':"text/html"})
        res.end(data)
    })
}
//一种解决请求的方式

function reqMethods(req, res){
    switch (res.method){
        case POST:m_updata(req, res);break;
        case PUT:m_put(res,res);break;
        case DELETE:m_delete(res,res);break;
        case GET:
        default:m_get(res,res)
    }
}
function m_updata(req, res){
    // todo
    console.log(req.method)
}

function m_delete(res,res){
    console.log(req.method)
    
}
function m_put(res,res){
    console.log(req.method)
    
}
function m_get(res,res){
    console.log(req.method)
    
}