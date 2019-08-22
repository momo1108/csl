function solution(heights) {
    var answer = [0];
    for(let i=1; i<heights.length; i++){
        for(let j=i-1; j>=0; j--){
            if(heights[j]>heights[i]) {
                answer.push(j+1);
                break;
            }
        }
        if(answer.length===i)answer.push(0);
    }
    return answer;
}