function solution(progresses, speeds) {
    var answer = [];
    var temp = [];
    while(1){
        progresses.forEach((e,i) => {
            if(progresses[i]<100){
                progresses[i] += speeds[i];
                if(progresses[i]>=100) temp.push(i);
            }
        });
        if(temp.length===progresses.length) {
            console.log('첫번째 끝');
            break;
        }
    }
    while(1){
        let min = [200, 0];
        temp.forEach((e,i)=>{
            if(e<min[0]) min = [e,i];
        })
        temp.splice(0, min[1]+1);
        answer.push(min[1]+1);
        console.log('min : ', min, 'answer : ', answer, 'temp : ', temp);
        if(temp.length===0) {
            console.log('두번째 끝');
            break;
        }
    }
    return answer;
}
solution([93, 30, 55], [1, 30, 5]);