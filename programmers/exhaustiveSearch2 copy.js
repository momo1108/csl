function solution(numbers) {
    var answer = 0;
    let maxnum = "";
    let maxarr = numbers.toString().split("").sort((a,b)=>b-a);
    maxarr.forEach(e=>{
        maxnum += e;
    });
    // maxnum = parseInt(maxnum);
    if(maxarr.includes("2")) answer++;
    if(maxarr.includes("3")) answer++;
    for(let i=4; i<=maxnum; i++){
        let sosu1 = true, sosu2 = true;
        for(let j=2; j<=Math.ceil(i/2); j++){
            if(i%j===0) {
                sosu1 = false;
                break;
            }
        }
        if(sosu1){
            let checkarr = maxarr.slice();
            i.toString().split("").forEach(e=>{
                if(checkarr.indexOf(e)!=-1){
                    checkarr.splice(checkarr.indexOf(e),1);
                } else {
                    sosu2 = false;
                }
            })
            if(sosu2) answer++;
        }
    }
    console.log(answer);
    return answer;
}
solution(15649)