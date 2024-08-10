function solution(numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length -1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(result < numbers[i] * numbers[j]) result = numbers[i] * numbers[j]
        }
    }
    
    return result;
}