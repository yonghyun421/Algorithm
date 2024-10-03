function solution(myString) {
    let result = [];
    console.log(myString.split('x'))
    myString.split('x').map(ele => result.push(ele.length))
    return result;
}