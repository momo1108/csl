// ES5
const computers = [
    {name: 'mac-air', ram:4},
    {name: 'mac-pro', ram:16},
    {name: 'gram', ram:8},
]

let everyComputer = true;
let someComputer = false;

for(var i=0; i<computers.length; i++){
    const computer = computers[i];
    if (computer.ram<10){
        everyComputer=false;
        break;
    }
    if (computer.ram>10) {
        someComputer=true;
        break;
    }
}
console.log(everyComputer, someComputer)

// ES6

everyComputer = computers.every(computer => computer.ram < 10);
someComputer = computers.some(computer => computer.ram > 10);

console.log(everyComputer, someComputer)

// 실습
const users = [
    { id: 1, submit: true },
    { id: 2, submit: true },
    { id: 3, submit: true },
    { id: 4, submit: false },
];
// submit 유무
// every : 모두가 submit 했는가?
console.log(users.every(user=>user.submit));
// some : 한사람이라도 not submit?
console.log(users.some(user=>!user.submit));

// 실습2
// some
console.log("실습2")
function mySome(arr, callback){
    let isSome = false;
    arr.forEach(element => {
        if(callback(element)) isSome=true;
    });
    return isSome;
};

function mySome2(arr, callback){
    return !arr.every(e => !callback(e));
}

console.log(mySome(users, e => e.submit))
console.log(mySome2(users, e => e.submit))
