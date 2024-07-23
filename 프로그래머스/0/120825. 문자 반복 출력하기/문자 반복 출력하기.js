function solution(my_string, n) {
    let arr1 = my_string.split('')
    let result = []
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < n; j++) {
            result.push(arr1[i])
        }
    }
    return result.join('')
}