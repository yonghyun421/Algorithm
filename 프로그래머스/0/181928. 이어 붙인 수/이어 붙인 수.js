function solution(num_list) {
    let a = []
    let b = []
    for(let i = 0; i < num_list.length; i++){
        num_list[i] % 2 === 1 ? a.push(num_list[i]) : b.push(num_list[i])
    }
    return a.join('') * 1 + b.join('') * 1
}