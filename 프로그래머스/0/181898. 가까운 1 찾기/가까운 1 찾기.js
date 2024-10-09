function solution(arr, idx) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1 & i >= idx) result.push(i)
    }
    console.log(result)
    return result.length !== 0 ? result[0] : -1;
}