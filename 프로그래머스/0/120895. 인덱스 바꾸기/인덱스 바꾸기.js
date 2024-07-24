function solution(my_string, num1, num2) {
    let result = my_string.split('')
    let change_1 = result.splice(num1,1)
    result.splice(num2,0,...change_1)
    let change_2 = result.splice(num2 - 1,1)
    result.splice(num1,0,...change_2)
    return result.join('')
}