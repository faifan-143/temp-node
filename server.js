const http = require('http');
const server = http.createServer(
    (req , res)=>{
        if(req.url === '/'){
            res.end('<h1> welcome to our homepage </h1>');
        }else if(req.url === '/about'){
            res.end('welcome to our about page');
        }else{
            res.end(`
                <h1>Oops !!</h1>
                <p>maybe you're lost</p>
                <a href="/">back to homepage</a>
            `);
        }
    }
);
server.listen(5000);