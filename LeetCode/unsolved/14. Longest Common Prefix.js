// Ex
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].slice(0, j) === strs[0].slice(0, j)) {
        continue;
      } else {
        if (j === 0) {
          return "";
        } else {
          return strs[0].slice(0, j - 1);
        }
      }
    }
  }
  if (strs.length === 1) {
    return strs[0];
  }
  if (!strs[0].length) {
    return "";
  }
};

// strs = ['ab', 'a'] 케이스 에러발생
// 케이스를 다 따로 나누는 방법 말고 다른방법이 있을것 같은데...
