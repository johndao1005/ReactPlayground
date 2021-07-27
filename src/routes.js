const fs = require('fs'); // contruct file system
//sending request to server
//using ES6 with 2 para which is request and respond
const requestHandler = (req,res)=>{
    //storing the url and method from url
    const url = req.url 
    const method = req.method
    //working with respond
    if (url === '/'){
        res.setHeader('Content-type',"text/html")
        res.write('<html>')
        res.write('<head><title>Enter a message</title></head>')
        res.write('<body><form action="/message" method"POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()    
    }
    
    if (url ==='/message' && method ==='POST'){
        const body = []
        req.on('data',chunk => {
            console.log(chunk)
            body.push(chunk)})
    }
    // parser the body to string to save as text
    if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
}
exports.handler = requestHandler

