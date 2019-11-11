// ES5
const numbers = [1,2,3];
const doubleN = [];

for(let i=0; i<numbers.length; i++){
    doubleN.push(numbers[i]*2);
}

// ES6
const doubleN2 = numbers.map(num=>num*2);
console.log(doubleN2)

data = [1,2,3,4];

data = data.map(e=>{
    return `<h1>${e}</h1>`
})
console.log(data);

const images = [
    {
        h:5,
        w:5,
    },
    {
        h:15,
        w:15,
    },
    {
        h:25,
        w:25,
    },
]

const heights = images.map(e=>e.h);
console.log(heights)

function plunk(arr,key){
    let res = [];
    for(let i=0; i<arr.length; i++){
        res[i] = arr[i][key];
    }
    return res;
}

const result = plunk(images,'w');
console.log(result);