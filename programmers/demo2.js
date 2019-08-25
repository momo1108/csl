process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let c = "";
    for(let i=0; i<b; i++){
        for(let j=0; j<a; j++){
            // concat보다는 += 연산자를 쓰는게 더 빠르다.
            // c = c.concat('*');
            c += '*';
        };
        // c = c.concat('\n');
        c += '\n';
    };
    return(console.log(c));
});