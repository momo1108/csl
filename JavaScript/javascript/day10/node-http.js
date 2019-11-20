const http = require('http');

const data = {
    name: 'tony',
    age: 32,
}

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        console.log('home 요청 확인');
        res.write('ㅎㅇ용');
        res.end();
    };
    if(req.url==='/api'){
        console.log('api 요청 확인');
        res.write(JSON.stringify(data));
        res.end();
    };
});

server.listen(3000);

console.log("포트 번호 3000....");