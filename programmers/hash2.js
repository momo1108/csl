var arr = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
var arr2=[];
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i][1]);
}
var arr3 = arr2.sort();
console.log(arr3);