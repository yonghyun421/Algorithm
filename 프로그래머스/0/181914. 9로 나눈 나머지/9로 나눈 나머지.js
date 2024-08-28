function solution(number) {
    let result = 0;
    for(let i = 0; i < number.length; i++) {
        result += number[i] * 1
    }
    return result % 9;
}