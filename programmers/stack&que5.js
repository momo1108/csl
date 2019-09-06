// function solution(progresses, speeds) {
//     var answer = [];
//     var temp = [];
//     while(1){
//         progresses.forEach((e,i) => {
//             if(progresses[i]<100){
//                 progresses[i] += speeds[i];
//                 if(progresses[i]>=100) temp.push(i);
//             }
//         });
//         if(temp.length===progresses.length) {
//             console.log('첫번째 끝');
//             break;
//         }
//     }
//     while(1){
//         let min = [200, 0];
//         temp.forEach((e,i)=>{
//             if(e<min[0]) min = [e,i];
//         })
//         temp.splice(0, min[1]+1);
//         answer.push(min[1]+1);
//         console.log('min : ', min, 'answer : ', answer, 'temp : ', temp);
//         if(temp.length===0) {
//             console.log('두번째 끝');
//             break;
//         }
//     }
//     return answer;
// }
// solution([93, 30, 55, 80], [1, 30, 5, 10]);
// 위의 풀이의 경우 앞의 progress가 완료가 되면 그 뒤에 존재하는 progress들을 모두 뽑아와서 배포를 한다.
// 정답의 경우 앞의 progress가 완료가 되면 바로 뒤의 progress의 완료 유무로 배포 개수를 판단하기 때문에
// 위의 풀이와 결과값이 다르게 나올 것이다.
function solution(progresses, speeds) {
    let answer = [];
    while (1) {
        let temp = [];
        let index = 0;
        progresses.forEach((e, i) => {
            progresses[i] += speeds[i];
        });
        while (progresses[index] >= 100) {
            temp.push(index);
            index++;
        }
        progresses.splice(0,index);
        speeds.splice(0,index);
        console.log(`temp: ${temp}`);
        if(temp.length>0) answer.push(temp.length);
        console.log(`answer: ${answer}`);
        if (progresses.length === 0) return answer;
    }
}
solution([93,30,55],[1,30,5]);