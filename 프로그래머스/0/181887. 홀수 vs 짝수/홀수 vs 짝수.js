function solution(num_list) {
    let resultA = 0;
    let resultB = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if((i+1) % 2 === 1) {
            resultA += num_list[i]
        }else {
            resultB += num_list[i]
        }
    }
    return resultA > resultB ? resultA : resultB
}