process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    let row = '*'.repeat(n[0]);

    // 직사각형을 출력
    for (let i = 0; i < n[1]; i++) {
        console.log(row);
    }
});