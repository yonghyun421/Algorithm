function solution(my_string) {
    let result = my_string.split('')
    let test = my_string.toUpperCase().split('')
    for(let i = 0; i < result.length; i++) {
        if(result[i] !== test[i]) {
            result[i] = result[i].toUpperCase();
        } else {
            result[i] = result[i].toLowerCase();
        }
    }
    return result.join('')
}