// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Ex
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

var romanToInt = function (s) {
  const list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
      sum -= list[s[i]];
    } else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
      sum -= list[s[i]];
    } else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
      sum -= list[s[i]];
    } else {
      sum += list[s[i]];
    }
  }
  return sum;
};

// 매우 비효율적인 방법으로 푼것 같다...
// map을 이용하는게 best인듯
