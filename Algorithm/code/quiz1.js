let arr = [3, 6, [['S', 'A', 'S', 'S', 'W', 'S'], ['S', 'W', 'A', 'S', 'C', 'S'], ['S', 'W', 'S', 'W', 'S', 'S'], ['S', 'W', 'S', 'S', 'W', 'S'], ['S', 'B', 'S', 'S', 'W', 'S'], ['S', 'S', 'S', 'S', 'S', 'S']], 3, [['S', 'S', 'A'], ['B', 'W', 'W'], ['S', 'W', 'C']], 10, [['C', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'C'], ['S', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'S'], ['S', 'S', 'W', 'S', 'S', 'S', 'S', 'W', 'S', 'S'], ['A', 'S', 'S', 'W', 'S', 'S', 'W', 'S', 'S', 'A'], ['S', 'S', 'S', 'S', 'S', 'B', 'S', 'S', 'S', 'S'], ['S', 'S', 'S', 'S', 'B', 'S', 'S', 'S', 'S', 'S'], ['A', 'S', 'S', 'W', 'S', 'S', 'W', 'S', 'S', 'A'], ['S', 'S', 'W', 'S', 'S', 'S', 'S', 'W', 'S', 'S'], ['S', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'S'], ['C', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'C']]];
let distance = (arr) => {
    let index = 0;
    let answer = [];
    while (index <= arr.length) {
        if(typeof arr[index]!=='object') {
            index++;
            continue;
        }
        let padding = [];
        let stack = 0;
        for (let i = 0; i < arr[index].length; i++) {
            // arr[index][i] = ['W'].concat(arr[index][i].concat(['W']));
            arr[index][i].push('W');
            arr[index][i].unshift('W');
        }
        for (let i = 0; i < arr[index].length + 2; i++) {
            padding.push('W');
        }
        console.log(padding);
        // arr[index] = [padding].concat(arr[index].concat([padding]));
        arr[index].push(padding);
        arr[index].unshift(padding);
        console.log(arr[index]);
        for (let i = 0; i < arr[index].length; i++) {
            for (let j = 0; j < arr[index].length; j++) {
                if (arr[index][i][j] === 'W' || arr[index][i][j] === 'S') continue;
                else if (arr[index][i][j] === 'A') {
                    let k = 1;
                    while (1) {
                        if (arr[index][i][j + k] === 'S') k++;
                        else {
                            k--;
                            stack += k;
                            break;
                        }
                    }
                }
                else if (arr[index][i][j] === 'B') {
                    let k = 1;
                    while (1) {
                        if (arr[index][i][j + k] === 'S') k++;
                        else {
                            k--;
                            stack += k;
                            k = 1;
                            break;
                        }
                    }
                    while (1) {
                        if (arr[index][i][j - k] === 'S') k++;
                        else {
                            k--;
                            stack += k;
                            k = 1;
                            break;
                        }
                    }
                }
                else {
                    let k = 1;
                    while (1) {
                        if (arr[index][i][j + k] === 'S') k++;
                        else {
                            k--;
                            stack += k;
                            k = 1;
                            break;
                        }
                    }
                    while (1) {
                        if (arr[index][i][j - k] === 'S') k++;
                        else {
                            k--;
                            stack += k;
                            k = 1;
                            break;
                        }
                    }
                    while (1) {
                        if (arr[index][i + k][j] === 'S') k++;
                        else {
                            k--;
                            stack += k;
                            k = 1;
                            break;
                        }
                    }
                    while (1) {
                        if (arr[index][i - k][j] === 'S') k++;
                        else {
                            k--;
                            stack += k;
                            k = 1;
                            break;
                        }
                    }
                }
            }
        }
        answer.push(stack);
        index++;
    }
    for(let i=0; i<answer.length; i++){
        console.log(`#${i+1} ${answer[i]}`);
    }
}
distance(arr);