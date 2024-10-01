function solution(myString, pat) {
    let result = []
    myString.split('').map((ele) => ele ==='A' ? result.push('B') : result.push('A'))
    return result.join('').indexOf(pat) < 0 ? 0 : 1;
}