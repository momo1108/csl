const products = [
    { name: '사과', type: '과일' },
    { name: '포도', type:'과일'},
    { name: '당근', type: '채소' },
    { name: '김씨', type:'사람'},
    { name: '이씨', type:'사람'},
    { name: '박씨', type:'사람'},
];

const fruits = [];
for(var i=0; i<products.length; i++){
    if(products[i].type === '과일') fruits.push(products[i]);
}
console.log(fruits);

const human = products.filter(e=>{
    return e.type === '사람'
})

console.log(human);

// 실습1 : filter사용해서 3< x <7 모두 뽑기
const numbers = [1,2,3,4,5,6,7,8,9];

const targetN = numbers.filter(e=>e>3&&e<7)
console.log(targetN);