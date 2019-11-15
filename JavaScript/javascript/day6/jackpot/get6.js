const request = require('request');

function getLottoData(drwNo) {
    const url = `https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;
    return new Promise((resolve,reject)=>{
        request.get(url,(err,res,body)=>{
            // console.log(body)
            const lottoData = JSON.parse(body);
            if(lottoData.returnValue==='fail') reject(new Error('없는 회차입니다.'))
            // console.log(lottoData);
            const realNumber = [];
            for(const [key, value] of Object.entries(lottoData)){
                // console.log(key,value);
                if(key.includes('drwt')) realNumber.push(value);
                else if (key==='bnusNo') bnusNo = value;
            }
            realNumber.sort((a,b)=>a-b);
            resolve({bnusNo, realNumber});
            // console.log(bnusNo,realNumber)
        })
    })
};
getLottoData(800)
// getLottoData 만 써주면 함수 자체를 의미하고, getLottoData()를 써주면 함수를 실행해서 받은 리턴값을 의미합니다.
module.exports = getLottoData;
