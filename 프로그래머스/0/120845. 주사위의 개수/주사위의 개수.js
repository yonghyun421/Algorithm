function solution(box, n) {
    let result = box.map(ele => Math.trunc(ele / n))
    return result.reduce((a,b) => a*b)   
}