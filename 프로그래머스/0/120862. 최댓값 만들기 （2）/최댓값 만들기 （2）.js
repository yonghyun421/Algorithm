function solution(numbers) {
    let answer = 0;
    for(let i = 0; i < numbers.length-1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
                if(numbers.length == 2 && numbers[i] * numbers[j] < 0) return numbers[i] * numbers[j];
            if(answer < numbers[i] * numbers[j]) answer = numbers[i] * numbers[j]
        }
    }
    return answer;
}