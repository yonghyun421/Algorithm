function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let filteredAlphabet = '';
    for (let char of alphabet) {
        if (!skip.includes(char)) {
            filteredAlphabet += char;
        }
    }
    
    let result = '';
    for (let char of s) {
        let currentIndex = filteredAlphabet.indexOf(char);
        let newIndex = (currentIndex + index) % filteredAlphabet.length;
        
        result += filteredAlphabet[newIndex];
    }   
    return result;
}