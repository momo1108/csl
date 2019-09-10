function solution(baseball) {
    var answer = 0;
    const check = (a,b) => {
        let strike = 0, ball = 0;
        let astr = a.toString(), bstr = b[0].toString();
        if(astr[0]===bstr[0]) strike++;
        else if(astr[0]===bstr[1]||astr[0]===bstr[2])ball++;
        if(astr[1]===bstr[1]) strike++;
        else if(astr[1]===bstr[0]||astr[1]===bstr[2])ball++;
        if(astr[2]===bstr[2]) strike++;
        else if(astr[2]===bstr[0]||astr[2]===bstr[1])ball++;
        if(strike===b[1]&&ball===b[2]) return true;
        else return false;
    }
    for(let i=111; i<1000; i++){
        let num = i.toString(), match = true;
        if(num[0]===num[1]||num[0]===num[2]||num[1]===num[2]) continue;
        baseball.forEach(e=>{
            if(!check(i,e)) {
                match = false;
            }
            if(!match) return;
        })
        if(match) answer++;
    }
    return answer;
}
solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]);