function solution(num_list, n) {
    let result = []
    for(let i = 0; i < num_list.length; i = i+n) {
        result.push(num_list[i])
    }
    return result;
}