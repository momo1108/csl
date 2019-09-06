function solution(jobs) {
    // 앞선 작업이 끝나고 여러 작업이 대기중일 때 가장 짧은 작업이 먼저 실행되어야 한다.
    let time = 0;
    let min1; // 시작시간, 수행시간, index
    let min2; // 시작시간, 수행시간, index
    let sum = [];
    // // 맨 처음 가장 먼저 실행될 작업의 시작시간과 index를 찾는다.
    // jobs.forEach((e,i) => {
    //     if(e[0]<min1[0]){
    //         min1=[e[0], e[1], i];
    //     }
    // });
    // // 맨 처음 작업이 실행된 후 현재 시간을 구하고 배열에서 삭제한다.
    // time = time + jobs[min1[2]][0] + jobs[min1[2]][1];
    // sum.push(jobs[min1[2]][1]);
    // jobs.splice(min1[2],1);
    // 반복
    while(1){
        min1 = [1001, 1001, 0];
        min2 = [1001, 1001, 0];
        // 현재시간보다 먼저 요청이 들어온 작업 중 가장 수행시간이 짧은 작업은 min1에,
        // 현재시간보다 나중에 들어온 작업 중 가장 먼저 들어온 작업은 min2에 저장
        jobs.forEach((e,i) => {
            if(e[0]<time) {
                if(e[1]<min1[1]){
                    min1=[e[0], e[1], i];
                } else if(e[1]===min1[1]) {
                    if(e[0]<min1[0]) min1=[e[0], e[1], i];
                }
            } else {
                if(e[0]<min2[0]){
                    min2=[e[0], e[1], i];
                }
            }
        });
        if(min1[0]!==1001){
            time += min1[1];
            sum.push(time-min1[0]);
            jobs.splice(min1[2],1);
        } else {
            time = min2[0]+min2[1];
            sum.push(min2[1]);
            jobs.splice(min2[2],1);
        }
        if(jobs.length===0) {
            const acc = (accumulator, currentValue) => accumulator + currentValue;
            console.log(sum);
            console.log(sum.reduce(acc));
            console.log(sum.reduce(acc)/sum.length);
            return sum.reduce(acc)/sum.length;
        }
    }
}
solution([[0, 3], [1, 9], [2, 6], [4, 14], [3, 18], [6, 3]]);