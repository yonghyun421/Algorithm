function solution(array) {
    let idx = Math.trunc(array.length / 2)
    return array.sort((a,b) => a-b)[idx]
}