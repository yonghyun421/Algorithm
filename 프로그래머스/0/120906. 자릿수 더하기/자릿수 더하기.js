function solution(n) {
    let array = n.toString().split('')
    let sum = 0;
    array.map(ele => sum += ele * 1)
    return sum;
}