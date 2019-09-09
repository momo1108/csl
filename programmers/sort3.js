function solution(citations) {
    var answer = 0;
    for(let h=1; h<=citations.length; h++){
        // h = 인용 횟수
        let count=0;
        citations.forEach(e=>{
            // 인용 횟수 이상이면 인용논문개수 +1
            if(e>=h)count++;
        })
        if(count>=h)if(h>answer)answer=h;
    }
    console.log(answer);
    return answer;
}
solution([3, 0, 6, 1, 5,4,8,6,6,54,4,2,2])