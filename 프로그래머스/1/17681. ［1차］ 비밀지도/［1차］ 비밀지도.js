function solution(n, arr1, arr2) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
        let binaryString = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        
        let mapLine = '';
        for (let j = 0; j < n; j++) {
            mapLine += binaryString[j] === '1' ? '#' : ' ';
        }
        result.push(mapLine);
    }
    return result;
}