let arr = [3, 6, [['S', 'A', 'S', 'S', 'W', 'S'], ['S', 'W', 'A', 'S', 'C', 'S'], ['S', 'W', 'S', 'W', 'S', 'S'], ['S', 'W', 'S', 'S', 'W', 'S'], ['S', 'B', 'S', 'S', 'W', 'S'], ['S', 'S', 'S', 'S', 'S', 'S']], 3, [['S', 'S', 'A'], ['B', 'W', 'W'], ['S', 'W', 'C']], 10, [['C', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'C'], ['S', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'S'], ['S', 'S', 'W', 'S', 'S', 'S', 'S', 'W', 'S', 'S'], ['A', 'S', 'S', 'W', 'S', 'S', 'W', 'S', 'S', 'A'], ['S', 'S', 'S', 'S', 'S', 'B', 'S', 'S', 'S', 'S'], ['S', 'S', 'S', 'S', 'B', 'S', 'S', 'S', 'S', 'S'], ['A', 'S', 'S', 'W', 'S', 'S', 'W', 'S', 'S', 'A'], ['S', 'S', 'W', 'S', 'S', 'S', 'S', 'W', 'S', 'S'], ['S', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'S'], ['C', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'C']]];
let robotdistance = (array, x, y) => {
    let k = 1;
    let sumarr = [[0,true],[0,true],[0,true],[0,true]];
    let sum = 0;
    while (1) {
        if (sumarr[0][1] === true && array[x][y + k] !== 'S') sumarr[0] = [k-1,false];
        if (sumarr[1][1] === true && array[x][y - k] !== 'S') sumarr[1] = [k-1,false];
        if (sumarr[2][1] === true && array[x + k][y] !== 'S') sumarr[2] = [k-1,false];
        if (sumarr[3][1] === true && array[x - k][y] !== 'S') sumarr[3] = [k-1,false];
        if(sumarr.every((e)=>!e[1])) break;
        else k++;
    }
    if(array[x][y] === 'A') sum = sumarr[0][0];
    else if(array[x][y] === 'B') sum = sumarr[0][0] + sumarr[1][0];
    else sumarr.forEach(e=>{sum += e[0]});
    return sum;
}
async function distance(arr){
    let index = 0;
    let answer = [];
    while (index <= arr.length) {
        if (typeof arr[index] !== 'object') {
            index++;
            continue;
        }
        let padding = [];
        let stack = 0;
        console.log(arr[index]);
        for (let i = 0; i < arr[index].length; i++) {
            arr[index][i].push('W');
            arr[index][i].unshift('W');
        }
        for (let i = 0; i < arr[index].length + 2; i++) {
            padding.push('W');
        }
        arr[index].push(padding);
        arr[index].unshift(padding);
        console.log(arr[index]);
        for (let i = 0; i < arr[index].length; i++) {
            for (let j = 0; j < arr[index].length; j++) {
                if (arr[index][i][j] === 'W' || arr[index][i][j] === 'S') continue;
                else stack += robotdistance(arr[index], i, j, stack);
            }
        }
        answer.push(stack);
        index++;
    }
    for (let i = 0; i < answer.length; i++) {
        console.log(`#${i + 1} ${answer[i]}`);
    }
}
distance(arr);