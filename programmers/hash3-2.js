function solution(genres, plays) {
    var obj = {};
    
    for(let i=0; i<genres.length; i++){
        // console.log(typeof(plays[i]), plays[i]);
        // 합은 배열의 첫번째 element에 남겨두고 두 세번째 element에 상위 두개의 곡의 idx를 남겨둔다.
        // 상위 두개는 비교문을 사용해 저장하는 방식을 사용한다.
        if(obj[genres[i]]) {
            obj[genres[i]][0] += plays[i];
            if(plays[i] < obj[genres[i]][2]){}
            else if(plays[i] < obj[genres[i]][1]) {
                obj[genres[i]][2] = i
            } else if(plays[i] > obj[genres[i]][1]){
                obj[genres[i]][2] = obj[genres[i]][1];
                obj[genres[i]][1] = i;
            }
            // if(plays[i] < obj[genres[i]][2]){
            //     obj[genres[i]][2] = obj[genres[i]][1];
            //     obj[genres[i]][1] = i;
            // } else if(plays[i] > obj[genres[i]][1])
        }
        else obj[genres[i]] = [plays[i], i, 0];
    }
    console.log(obj);
}
solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);