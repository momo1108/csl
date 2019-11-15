const get6 = require('./get6');
const randomNumbers = require('./pick6');

get6(80)
    .then(data=>{
        count = 0;
        bonus = false;
        // console.log(data.realNumber)
        // console.log(randomNumbers)
        randomNumbers.forEach(e=>{
            data.realNumber.includes(e)? count++: e===data.bnusNo? bonus = true: '';
        })
        console.log(`${count}개 맞음`);
        console.log(`bonus 유무 : ${bonus}`);
    })
    .catch(err=>console.log(err))