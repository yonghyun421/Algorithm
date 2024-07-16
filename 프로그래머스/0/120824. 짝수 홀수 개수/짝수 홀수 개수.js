function solution(num_list) {
    let jjak = 0;
    let hol = 0;
    num_list.map(ele => ele % 2 === 0 ? jjak++ : hol++)
    return [jjak, hol]
}