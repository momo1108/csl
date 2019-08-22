function solution(heights) {
    return heights.map((v, i, e) => {
        for (i--; i > -1; i--) {
            if (e[i] > v) break;
        }
        return ++i;
    });
}

function solution(heights) {
    return heights.map((v, i) => {
        while (i) {
            i--;
            if (heights[i] > v) {
                return i + 1;
            }
        }
        return 0;
    });
}