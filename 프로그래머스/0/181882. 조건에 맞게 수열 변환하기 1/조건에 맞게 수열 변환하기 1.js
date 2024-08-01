function solution(arr) {
    return arr.map(ele => ele >=  50 && ele % 2 === 0 ? Math.trunc(ele/2) : ele < 50 && ele%2 === 1 ? ele * 2 : ele )
}