function solution(todo_list, finished) {
    let result = []
    for(let i = 0; i < finished.length; i++) {
        if(!finished[i]) {
            result.push(todo_list[i])
        }
    }
    return result;
}