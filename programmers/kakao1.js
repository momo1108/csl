function solution(s) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/ 참조
    // 문자열을 자를 수 있는 최대 길이는 string의 길이를 2로 나눈 값에 소수점을 버린 숫자이다. Math.floor()를 사용하자.
    // 문자열을 자를 수 있는 길이를 1~최대길이까지 반복문을 돌려서 가장 짧은 경우를 찾아낸다.
    let Max_length = Math.floor(s.length / 2); // 나눌 수 있는 최대 길이
    let Length = 1; // 현재 나눌 길이
    let answer = []; // 압축문 길이들을 저장
    if(s.length===1) return 1; // 예외사항 명시
    while (Length<=Max_length) {
        // 자를 길이를 늘려가면서 중복 문자열을 찾을 수 있는 반복문
        // 같은 문자열의 개수와 그 문자열을 저장할 array를 선언해주자.
        // Same = [[Num, String], [Num, String], [Num, String], ...]
        let Same = [];
        let Count = 1; // 문자열 연속 횟수, for 문 후엔 압축 후 길이로 사용
        // 문자열 비교에는 String.substring(from,to)을 사용하자
        // 문자열 비교 회수는 (전체 문자열 길이 / 나눌 문자열 길이)를 내림해준 값이다. Math.floor()을 사용하자.
        for (let i = 0; i < Math.floor(s.length / Length); i++) {
            if (s.substring(Length * i, Length * (i + 1)) === s.substring(Length * (i + 1), Length * (i + 2))) {
                Count++;
            } else {
                Same.push([Count, s.substring(Length * i, Length * (i + 1))]);
                Count=1;
                if(i === Math.floor(s.length / Length)-1) {
                    Same.push([Count, s.substring(Length * (i + 1), Length * (i + 2))]);
                }
            }
        }
        Count = 0;
        Same.forEach(e=>{
            if(e[0]===1){
                Count+=e[1].length;
            } else {
                Count+=(e[0].toString().length+e[1].length);
            }
        })
        answer.push(Count);
        Length++;
    }
    console.log(Math.min(...answer));
    return Math.min(...answer);
}
solution("abcabcabcabcdededededede");