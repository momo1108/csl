// if(2>1){
//     var i = 1;
// }
// while(1){
//     var j = 1;
//     break;
// }
// for(let k = 0 ; k < 3; k ++){
//     var h = k;
// }
// console.log(i, j, h);
// var a = "(())((()()(()()((())))))";
// var a=1, b=0;
// b += (a--);
// console.log(a,b);
var a = [[0,0], [0,1], [0,2]];
a.forEach(value=>{
    value[1]++;
});
console.log(a);