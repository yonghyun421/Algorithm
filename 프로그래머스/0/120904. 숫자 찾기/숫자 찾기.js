function solution(num, k) {
    return num.toString().split('').indexOf(k.toString()) >= 0 ? num.toString().split('').indexOf(k.toString()) + 1 : num.toString().split('').indexOf(k.toString());
}