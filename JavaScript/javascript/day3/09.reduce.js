const numbers = [1, 2, 3, 4];
let sum =0;

for(var i=0; i< numbers.length; i++){
    sum += numbers[i];
}

//console.log(sum)


sum = numbers.reduce((acc, number)=>{
    return acc + number;
}, 0);

console.log(sum);

let multiply = numbers.reduce((acc, number)=>{
    return acc * number;
}, 1);

console.log(multiply)

// 알고리즘 () 검사하는 함수 만들기
//

let soga = [];
function checks(text){
    let arr = text.split('');
    let sum = 0;
    let check = true;
    arr.forEach(t => {
        if(t === "(" )sum++
        else if(t === ')'){
            if(sum==0){
                check = false
                sum--
            } else {
                sum--
            }
        }
    });
    check? sum>0? console.log("틀림"):console.log("맞음"):console.log("틀림")
}
const text = "(()"
checks(text)

const users = [
    {id: 1, type: 'sitting'},
    {id: 2, type: 'sitting'},
    {id: 3, type: 'standing'},
    {id: 4, type: 'sitting'},
    {id: 5, type: 'standing'},
]

let stand = users.reduce((acc,user)=>{
    console.log('acc',acc)
    if (user.type=='sitting') {return acc+1;}
    return acc;
},0)
console.log(stand)

const samples = [1,2,3,4,5,6,1,2,3,4]

let numarr = samples.reduce((acc,num)=>{
    if(!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
},[])
console.log(numarr)