function solution(a, b) {
    if((a.toString() + b.toString()) * 1 > (b.toString() + a.toString()) * 1) {
        return (a.toString() + b.toString()) * 1
    }else {
        return (b.toString() + a.toString()) * 1
    }
}