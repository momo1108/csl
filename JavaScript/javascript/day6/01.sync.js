function foo(){
    console.log('foo');
};
function hoo(){
    foo();
    console.log('hoo');
};
function ha(){
    hoo();
    console.log('ha');
};

console.log('start');
ha();
console.log('end');