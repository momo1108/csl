function solution(array, commands) {
    var answer = [];
    commands.forEach(e => {
        answer.push(array.slice(e[0]-1, e[1]).sort((a,b)=>{ return a-b;})[e[2]-1]);
    });
    console.log(answer);
    return answer;
}
solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]);