function solution(clothes) {
    var count = 0;
    var sort = {};
    for(let i=0;i<clothes.length;i++){
        if(!sort[clothes[i][1]]) sort[clothes[i][1]] = 1;
        sort[clothes[i][1]]++;
    }
    for(let i = 1;i<=Object.keys(sort).length;i++){
        
    }
    console.log(Object.keys(sort).length);
}
solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])