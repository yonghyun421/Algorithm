function solution(arr, n) {
    let result = []
    if(arr.length % 2 === 1 ) {
        for(let i = 0; i < arr.length; i++) {
            result.push(i % 2 === 0 ? arr[i] + n : arr[i])
        }
    }else {
        for(let i = 0; i < arr.length; i++) {
            result.push(i % 2 === 1 ? arr[i] + n : arr[i])
        }
    }
    return result;
}