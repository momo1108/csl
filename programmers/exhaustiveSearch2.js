function solution(numbers) {
    var answer = 0;
    let numstr = numbers.toString();
    let arr = numstr.split("");
    arr.sort((a,b)=>b-a);
    console.log(arr);
    return answer;
}
solution(1564981651)