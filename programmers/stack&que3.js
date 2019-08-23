function solution(arrangement) {
    var answer = 0, count = 0, high = 0;
    for(let i=0; i<arrangement.length; i++){
        if(arrangement[i]==="(") high++, count++;
        else {
            if(arrangement[i-1]===")") count--;
            else{
                if(count>=1) answer += --count, high--;
                else count--;
            }
        }
        console.log("answer : "+answer+"\nhigh : "+high+"\ncount : "+count+"\n-----------------");
    }
    if(count===0) {
        if(high > 0) answer += high;
        high = 0;
    }
    return answer;
}
console.log(solution("()(((()())(())()))(())"));