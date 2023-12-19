const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
  
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Home Page</h1>')
    res.end() // this method always needs to be called
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h2>This is the about page</h2>')
        res.end()

    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h3>Page Not Found</h3>')
        res.end()

        
    }

})

server.listen(5000)

//In every response we should have a res.end() which signals that communication is over.