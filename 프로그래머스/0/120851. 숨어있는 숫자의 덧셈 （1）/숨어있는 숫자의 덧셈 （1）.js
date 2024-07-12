function solution(my_string) {
    let new_arr = my_string.split('')
    let sum = 0;
    for(let i = 0; i < new_arr.length; i++) {
        if(new_arr[i] * 1 > 0) sum += new_arr[i] * 1
    }
    return sum;
}