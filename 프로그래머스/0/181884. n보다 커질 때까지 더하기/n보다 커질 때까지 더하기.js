function solution(numbers, n) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(sum + numbers[i] > n) return sum + numbers[i];
        sum += numbers[i]
    }
    return sum;
}