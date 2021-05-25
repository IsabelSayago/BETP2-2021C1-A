import http from 'http';

const people = [
    {
        first: 'Isabel',
        last: 'Sayago'
    },
    {
        first: 'Jorge',
        last: 'Sayago'
    }
];

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type': 'application/json'})
    response.write(JSON.stringify(people,null,' '))
    response.end();
}).listen(3000,'127.0.0.1',()=>{
    console.log("This is a server that returns a JSON!")
})
