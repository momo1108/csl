// ES5
function add(a,b) {
    return a + b;
}

// ES6
const add2 = (a,b)=>{
    return a+b;
}
const add3 = (a,b)=>a+b;
const square = a=>a**2;
console.log(add(1,2));
console.log(add2(1,2));
console.log(add3(1,2));
console.log(square(2))

const obj = {
    name: 'tony',
    sayHi: function(){
        console.log('hi');
    },
    sayHi2(){
        console.log('hi');
    },
    square
}

obj.sayHi();
obj.sayHi2();
console.log(obj.square(2));