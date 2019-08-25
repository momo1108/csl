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
        for (let j = index; j < truck_weights.length; j++) {
            console.log('for문');
            var sum = 0;
            stack.push([truck_weights[j], 0]);
            answer++;
            stack.forEach(value => {
                sum += value[0];
                value[1]++;
            });
            if (stack[0][1] > bridge_length) {
                sum -= stack[0][0];
                stack.shift();
            }
            
            console.log('무게 계산 전 stack : '+stack);
            if (sum > weight) {
                stack.pop();
                console.log('무게 넘침 stack : '+stack);
                console.log('index : ', index, 'answer : ', answer);
                break;
            } else {
                if (stack[0][1] > bridge_length) stack.shift();
                index++;
                console.log('무게 안넘침 stack : '+stack);
                console.log('index : ', index, 'answer : ', answer);
            }
            if(index===truck_weights.length) {
                answer+=bridge_length;
                return answer;
            }
        }
    }
}

console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));