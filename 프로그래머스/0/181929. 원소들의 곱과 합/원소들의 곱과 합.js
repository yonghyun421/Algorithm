function solution(num_list) {
    let sum = num_list.reduce((a,b) => a+b)
    let multiple = num_list.reduce((a,b) => a*b)
    return sum*sum > multiple ? 1 : 0;
}