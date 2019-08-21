function solution(genres, plays) {
    var obj = {};
    
    for(let i=0; i<genres.length; i++){
        // console.log(typeof(plays[i]), plays[i]);
        if(!obj[genres[i]]) obj[genres[i]] = plays[i];
        else obj[genres[i]] = obj[genres[i]] + plays[i];
    }
    // console.log(obj);
}
solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);