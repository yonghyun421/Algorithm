function solution(array) {
    let origin = [...array]
    let result = array.sort((a,b) => a-b)
    for(let i = 0; i < array.length; i++) {
        if(origin[i] == result[array.length -1]) return [result[array.length -1], i]
    }
}