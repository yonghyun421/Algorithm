function solution(cipher, code) {
    let new_arr = []
    for(let i = 1; i < Math.trunc(cipher.length/code)+1; i++) {
        new_arr.push(cipher[i*code - 1])
    }
    return new_arr.join('')
}