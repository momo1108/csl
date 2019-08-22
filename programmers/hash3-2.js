function solution(genres, plays) {
    var obj = {};
    var answer = [];
    for(let i=0; i<genres.length; i++){
        // console.log(typeof(plays[i]), plays[i]);
        // 합은 배열의 첫번째 element에 남겨두고 두 세번째 element에 상위 두개의 곡의 idx를 남겨둔다.
        // 상위 두개는 비교문을 사용해 저장하는 방식을 사용한다.
        // 새로운 장르가 들어왔을 때만 고려했으나 초기값을 0으로 설정해버려서 두번째 들어온 값이
        // plays[0]과 비교되어버리는 상황이 발생했다.
        
        if(obj[genres[i]]) {
            obj[genres[i]][0] += plays[i];
            if (obj[genres[i]][2] != -1) {
                if (plays[i] <= plays[obj[genres[i]][2]]) { }
                else if (plays[i] <= plays[obj[genres[i]][1]]) {
                    obj[genres[i]][2] = i
                } else if (plays[i] > plays[obj[genres[i]][1]]) {
                    obj[genres[i]][2] = obj[genres[i]][1];
                    obj[genres[i]][1] = i;
                }
            } else {
                if (plays[i] > plays[obj[genres[i]][1]]) {
                    obj[genres[i]][2] = obj[genres[i]][1];
                    obj[genres[i]][1] = i;
                }
                else obj[genres[i]][2] = i;
            }            
        } else obj[genres[i]] = [plays[i], i, -1];
    }
    var list = Object.keys(obj).slice();
    for(let i=0; i<list.length-1; i++){
        let tmp;
        for(let j=i+1; j<list.length; j++){
            if(obj[list[i]][0] < obj[list[j]][0]){
                tmp = list[i];
                list[i] = list[j];
                list[j] = tmp;
            }
        }
    }
    console.log(obj);
    console.log(list);
    for(let i=0; i<list.length; i++){
        answer.push(obj[list[i]][1]);
        if(obj[list[i]][2] != -1)answer.push(obj[list[i]][2]);
    }
    console.log(answer);
}
// solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
solution(["classic", "pop", "classic", "classic", "pop", "classic", "classic", "pop", "jazz", "jazz", "rock", "rock", "rock", "swing"], [1000, 600, 150, 800, 2500, 850, 1000, 1000, 400, 860, 1200, 3000, 250, 700]);