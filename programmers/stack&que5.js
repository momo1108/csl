function solution(progresses, speeds) {
    var answer = [];
    var temp = [];
    while(1){
        progresses.forEach((e,i) => {
            if(e<100){
                e += speeds[i];
                if(e>=100) temp.push(i);
            }
        });
        console.log(temp);
    }
    return answer;
}