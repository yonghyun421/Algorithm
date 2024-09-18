function solution(a, b) {
    return (a.toString()+b.toString())*1 >= 2*a*b ? (a.toString()+b.toString())*1 : 2*a*b
}