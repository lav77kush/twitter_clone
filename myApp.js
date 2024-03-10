

const http=require("http");
const server=http.createServer((req,res)=>{
res.write("Cheese burgers");
res.end();
});
server.listen(3001);
