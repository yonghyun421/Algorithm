function solution(num_list) {
    let result = 1;
    if(num_list.length > 10) {
        for(let i = 0; i < num_list.length; i++) {
            result += num_list[i]
        }
        return result - 1;
    } else {
        for(let j = 0; j < num_list.length; j++) {
            result = result * num_list[j]
        }
        return result;
    }
}