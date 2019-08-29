// function solution(numbers) {
//     var answer = '';
//     let max = 0;
//     numbers.forEach((e,i)=>{
//         if(`${e[0]}`)
//     })
//     return answer;
// }
function solution(n)
{
    var ans = 0;
    while(1){
        if(n%2===0) {
            n=n/2
            if(n===1) {
                return ++ans;
            }
        } else {
            ans++;
            n--;
        }
    }
}
solution(1)