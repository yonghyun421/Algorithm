function solution(n) {
    for(let i = 0; i < n; i++) {
        if(n % i === 0 && n / i === i) return 1;
    }
    return 2;
}