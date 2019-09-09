function solution(answers) {
    var answer = [];
    let result = [0, 0, 0];
    let pattern = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    answers.forEach((e, i) => {
        if (e === pattern[0][i % 5]) result[0]++;
        if (e === pattern[1][i % 8]) result[1]++;
        if (e === pattern[2][i % 10]) result[2]++;
    })
    result.forEach((e, i) => {
        if (i === 0) answer.push(i + 1);
        else {
            if (e > result[answer[0] - 1]) answer[0] = i + 1;
            else if (e === result[answer[0] - 1]) answer.push(i + 1);
        }
    })
    console.log(answer);
    return answer;
}
solution([2, 5, 3, 2, 1])