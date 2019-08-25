function solution(v) {
    var answer = [];
    var x=[],y=[];
    // x,y에 push를 하고 같은게 들어오면 삭제되도록한다
    v.forEach(element => {
        if(x.indexOf(element[0])!=-1) x.splice(x.indexOf(element[0]),1);
        else x.push(element[0]);
        if(y.indexOf(element[1])!=-1) y.splice(y.indexOf(element[1]),1);
        else y.push(element[1]);
    });
    answer.push(x[0]);
    answer.push(y[0]);
    return answer;
}
console.log(solution([[1, 1], [2, 2], [1, 2]]));