// function solution(bridge_length, weight, truck_weights) {
//     var answer = 0, stack = [], sum, diff;
//     트럭이 저장될 스택 생성 후 한번에 길이만큼 answer 더하고 스택에서 제거
//     스택에 마지막으로 나갈때 길이만큼 더하고 아니면 +1
//     while (1) {
//         stack.push(truck_weights[0]);
//         truck_weights.shift();
//         stack.forEach(value => {
//             sum += value;
//         });
//         if(sum>weight) stack.pop();
//     }
//     return answer;
// }

function solution(bridge_length, weight, truck_weights) {
    var answer = 0, stack = [], index = 0;
    while (1) {
        for (let j = index; j < weight.length; j++) {
            var sum = 0;
            stack.push([truck_weights[j], 0]);
            answer++;
            stack.forEach(value => {
                sum += value[0];
                value[1]++;
            });
            if (sum > weight) {
                stack.pop();
                stack.forEach(value => {
                    value[1]--;
                })
                answer--;
                stack
                break;
            } else {
                if (stack[0][1] > 100) stack.shift();
                index++;
            }
        }
    }
    return answer;
}