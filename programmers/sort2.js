function solution(numbers) {
    var answer = '';
    let zero=true;
    if(numbers.length===1) return numbers[0];
    numbers.forEach(e=>{
        if(e!==0) zero=false;
    })
    if(zero) return "0";
    numbers.sort((a,b)=>{
        if((`${a}${b}`)>`${b}${a}`) return -1;
        else return 1;
    });
    numbers.forEach(element => {
        answer = answer.concat(element);
    });
    // console.log(answer);
    return answer;
}
solution([3, 30, 34, 5, 9])