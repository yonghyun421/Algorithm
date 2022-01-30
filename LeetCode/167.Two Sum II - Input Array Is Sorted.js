// 주어진 배열에서 두개의 요소를 합한 값이 주어진  target이 되는
// 요소의 index+1 값이 들어있는 배열을 return

// Ex
// const numbers = [2,7,11,15]
// const target = 9

var twoSum = function (numbers, target) {
  let newArr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        newArr.push(i + 1);
        newArr.push(j + 1);
      }
    }
  }
  return newArr;
};

// but 매우 길고 느리고 필요없는 부분이 많은 코드.
// 다시 한번 생각해봐야할듯.
