function solution(my_string, k) {
    let result = []
    for(let i = 0; i < k; i++) {
        result.push(my_string)
    }
    return result.join('')
}