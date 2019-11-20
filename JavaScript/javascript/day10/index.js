const express = require('express');
const app = express();

const data = {
    name: 'tony',
    age: 32,
}

app.get('/', (req, res) => {
    console.log('home 요청 확인');
    res.send('ㅎㅇ용')
})
app.get('/api', (req, res) => {
    console.log('api 요청 확인');
    // res.send(JSON.stringify(data));
    res.send({
        name: 'hyechan',
        age: 27,
        home: 'Incheon'
    });
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`${PORT}번 포트 연결...`)
})