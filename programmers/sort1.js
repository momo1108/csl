function solution(array, commands) {
    var answer = [];
    commands.forEach(e => {
        answer.push(array.slice(e[0]-1, e[1]-1)[e[2]-1]);
    });
    console.log(answer);
    return answer;
}