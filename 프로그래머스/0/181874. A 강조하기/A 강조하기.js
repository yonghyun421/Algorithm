function solution(myString) {
    return myString.toLowerCase().split('').map(ele => ele == 'a' ? ele.toUpperCase(): ele).join('')
}