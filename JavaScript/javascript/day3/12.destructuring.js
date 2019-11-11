// ES5
const computer = {
    model: 'mac',
    year: 2019,
    price: 1000000
}
// const model = computer.model;
// const year = computer.year;
// const price = computer.price;

const {model, year, price} = computer;

console.log(model)

// 사용
const labtops = [
    {
        model: 'mac',
        year: 2019,
        price: 1000000
    },
    {
        model: 'gram',
        year: 2019,
        price: 1500000
    },
    {
        model: 'samsung',
        year: 2019,
        price: 1300000
    }
];

const arr1 = labtops.map(e => {
    return `<h1>${e.model}</h1>`
})
const arr2 = labtops.map(({model}) => {
    return `<h1>${model}</h1>`
})
console.log(arr1,arr2)