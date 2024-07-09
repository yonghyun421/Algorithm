function solution(array, n) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] == n) sum++;
    }
    return sum
}