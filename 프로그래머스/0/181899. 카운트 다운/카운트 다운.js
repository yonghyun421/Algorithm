function solution(start_num, end_num) {
    let result = [];
    for(let i = start_num; i > end_num - 1; i--) {
        result.push(i)
    }
    return result;
}