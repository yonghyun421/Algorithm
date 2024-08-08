function solution(n, control) {
    let result = n
    for(let i = 0; i < control.length; i++) {   
        if(control[i] === 'w') {
            result = result + 1
        }else if(control[i] === 's') {
            result = result - 1
        }else if(control[i] === 'd') {
            result = result + 10
        }else if(control[i] === 'a') {
            result = result - 10
        }
    }
    return result;
}