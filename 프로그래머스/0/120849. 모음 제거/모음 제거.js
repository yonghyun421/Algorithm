function solution(my_string) {
    let arr = ['a','e','i','o','u']
    let new_arr = my_string.split('')
    for(let i = 0; i < arr.length; i++) {
        new_arr = new_arr.filter(ele => ele !== arr[i])
    }
    return new_arr.join('')
}