function solution(a, b) {
    let result = 0;
    if(a % 2 === 1) {
        if(b % 2 === 1) {
            result = a**2 + b**2
        }else {
            result = 2 * (a + b)
        }
    }else {
        if(b % 2 === 1) {
            result = 2 * (a + b)
        }else {
            if(a -b >= 0) {
                result = a - b
            }else {
                result = b - a
            }
        }
    }
    return result;
}