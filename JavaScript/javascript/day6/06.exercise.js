const customers = [
    { id: 1, name: '방혜찬', isGold: true, email: 'gkdlfn@naver.com'},
    { id: 2, name: '안동원', isGold: false, email: 'wefin@nate.com'},
    { id: 3, name: '황상욱', isGold: false, email: 'f23f8@google.com'},
]

// 1. customer를 찾고
function getCustomer(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const customer = customers.find(customer=>customer.id === id);
            customer? resolve(customer):reject(new Error('customer가 없음'));
        },2000)
    })
}

// 2. gold인지 확인하고
function checkTier(customer) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            customer.isGold===true? resolve(customer): reject(new Error('골드 회원 아님'))
        })
    })
}

//  3. 맞으면, console.log(email)
function sendEmail(customer) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('sending email to '+customer.email);
        },2000)
    })
}

// (익명함수)(); 단 1번 실행됩니다.
(async function() {
    const customer = await getCustomer(1);
    const isGold = await checkTier(customer);
    const email = await sendEmail(isGold);
    console.log(email);
})();