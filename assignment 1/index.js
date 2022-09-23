const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("Hello world")
    res.end()

})

server.listen(5000,()=>{
    console.log('Connected to server ')
})