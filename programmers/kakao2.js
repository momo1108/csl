// function solution(p) {
//     var answer = '';
//     let sum=0;
//     for(let i=0; i<p.length; i++){
//         if(p[i]==="(") {
//             sum+=1;
//             if(sum===0){
//                 u = p.substring(0,i+1);
//                 if(u.length===2) answer = answer.concat(`(${solution(p.substring(i+1,p.length))})`);
//                 else {
//                     for(let j=1; j<u.length-1; j++){
//                         if(u[j]==='(') u[j]=')';
//                         else u[j]='(';
//                     }
//                     answer = answer.concat(`(${solution(p.substring(i+1,p.length))})${u.substring(1,u.length-1)}`);
//                 }
//                 break;
//             }
//         }
//         else {
//             sum-=1;
//             if(sum===0){
//                 u = p.substring(0,i+1);
//                 answer = answer.concat(`${u}${solution(p.substring(i+1,p.length))}`)
//                 break;
//             }
//         }
//     }
//     console.log(answer);
//     return answer;
// }
// solution("()))((()");
function solution(p) {
    var answer = '';
    let sum=0;
    let u="";
    for(let i=0; i<p.length; i++){
        if(p[i]==="(") {
            sum+=1;
            if(sum===0){
                u = p.substring(0,i+1);
                if(i+1===p.length) {
                    for(let j=1; j<u.length-1; j++){
                        if(u[j]==='(') u[j]=')';
                        else u[j]='(';
                    }
                    return `()${u.substring(1,u.length-1)}`;
                }else {
                    if(u.length===2) return `(${solution(p.substring(i+1,p.length))})`;
                    for(let j=1; j<u.length-1; j++){
                        if(u[j]==='(') u[j]=')';
                        else u[j]='(';
                    }
                    return `(${solution(p.substring(i+1,p.length))})${u.substring(1,u.length-1)}`;
                }
            }
        }
        else {
            sum-=1;
            if(sum===0){
                u = p.substring(0,i+1);
                if(i+1===p.length) return u;
                return `${u}${solution(p.substring(i+1,p.length))}`;
            }
        }
    }
}
solution("()))((()");