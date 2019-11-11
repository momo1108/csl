// ES5
const users = [
    {name: 'john'},
    {name: 'james'},
    {name: 'jason'},
    {name: 'jacob'},
    {name: 'jack'},
];

let user = null;

for(let i=0; i<users.length; i++){
    if(users[i].name === 'jason'){
        user = users[i];
        break;
    }
}
console.log(user);

// ES6

let user2 = users.find(user=>{
    console.log(user.name === 'jason');
    return user.name === 'jason';
});

console.log(user2);

