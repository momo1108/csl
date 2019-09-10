function solution(numbers) {
    var answer = 0;
    let maxnum = "";
    let maxarr = numbers.split("").sort((a, b) => b - a);
    maxarr.forEach(e => {
        maxnum += e;
    });
    if (maxarr.includes("2")) answer++;
    if (maxarr.includes("3")) answer++;
    for (let i = 4; i <= maxnum; i++) {
        let exist = true, sosu = true;
        let checkarr = maxarr.slice();
        i.toString().split("").forEach(e => {
            if (checkarr.indexOf(e) != -1) {
                checkarr.splice(checkarr.indexOf(e), 1);
            } else {
                exist = false;
                return;
            }
        })
        if(exist){
            for(let j=2; j<=Math.ceil(i/2); j++){
                if(i%j===0) {
                    sosu = false;
                    break;
                }
            }
        } else continue;
        if(sosu){
            answer++;
        }
    }
    console.log(answer);
    return answer;
}
solution("6156439")