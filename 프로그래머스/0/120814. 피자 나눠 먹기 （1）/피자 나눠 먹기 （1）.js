function solution(n) {
    return n % 7 !== 0 ? Math.trunc(n/7) + 1 : Math.trunc(n/7)
}