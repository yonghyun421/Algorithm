function solution(n) {
    let sum = 0;
    for(let i = 0; i < n+1; i++) {
        if(i%2 === 0) sum += i
    } 
    return sum;
}