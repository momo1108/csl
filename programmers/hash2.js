function solution(clothes) {
    var answer = 1;
    var sort = {};
    clothes.forEach(e=>{
        if(!sort[e[1]]) sort[e[1]]=1;
        else sort[e[1]]++;
    })
    for(var x in sort){
        console.log(sort);
        answer *= (sort[x]+1);
    }
    console.log(answer-1);
    return answer-1;
}
solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])