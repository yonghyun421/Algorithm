function solution(numLog) {
    let result = [];
    for(let i = 1; i < numLog.length; i++) {
        if(numLog[i] - numLog[i-1] === 1) {
            result.push('w')
        } else if(numLog[i] - numLog[i-1] === -1) {
            result.push('s')
        } else if(numLog[i] - numLog[i-1] === 10) {
            result.push('d')
        } else {
            result.push('a')
        }
    }
    return result.join('')
}