function solution(priorities, location) {
    // priorities와 같은 길이를 가지고 0부터 시작해서 1씩 증가하는 순서배열 order = [0, 1, 2...]을 생성한다.
    // 진행과정에서 priorities에 따라 order의 순서를 변경한다. order[location]을 +1해서 출력해주면 그 값이
    // 처음 order에서 있었던 위치가 된다.
    // filter나 found를 이용해서 조건을 반복문 대신 짧게 쓸수도 있을듯.
    // push는 되고 왜 concat은 안될까?
    var order = [];
    var count = 0;
    for(let i=0; i<priorities.length; i++)order.push([priorities[i],i]);
    console.log(order);
    while(1){
        console.log("while문");
        let top = true;
        for(let i=1; i<order.length; i++){
            console.log("for문");
            if(order[0][0]>order[i][0]) {
                if(!top){}
                else top=true;
                console.log(i,"번째 : ",order[0], " > ", order[i]);
            }else if(order[0][0]===order[i][0]){console.log(i,"번째 : ",order[0], " = ", order[i])}
            else if(order[0][0]<order[i][0]){
                top=false;
                console.log(i,"번째 : ",order[0], " < ", order[i]);
            }
        }
        console.log(top);
        if(top){
            if(location===order[0][1]){
                order.shift();
                count++;
                console.log("리턴 완료 : ",count);
                return count;
            }
            else{
                order.shift();
                count++;
                console.log("출력 완료. 현재 카운트 : ",count);
            }
        } else{
            order.push(order[0]);
            order.shift();
        }
        console.log(order);
    }
}
console.log(solution([2,1,4,5,2,6], 0));