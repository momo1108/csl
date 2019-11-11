// ES5
const addNumbers = (a,b,c,d,e) => {
    const numbers = [a,b,c,d,e];
    return numbers.reduce((acc,num)=>acc+=num,0);
}

// ES6
const addNumbers2 = (...numbers) => {
    return numbers.reduce((acc,num)=>acc+=num,0);
}

console.log(addNumbers2(1,4,2,3,4,5));

const defaultColors = ['red','blue','green'];
const addColors = ['orange','yellow'];

const sumColors = defaultColors.concat(addColors);
console.log(sumColors);

const es6SumColors = [...defaultColors, ...addColors];
console.log(es6SumColors);

function logging() {
    console.log(arguments);
    console.log(...arguments);

    [a,b,...rest] = arguments;
    [, ,...rest2] = arguments;

    console.log(rest);
    console.log(rest2);
}

logging(1,2,3,4)