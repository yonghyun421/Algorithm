// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Ex

// Input: nums = [3,2,3]
// Output: 3

var majorityElement = function (nums) {
  const newNums = [...new Set(nums)];
  const result = [];
  for (let i = 0; i < newNums.length; i++) {
    let a = 0;
    nums.filter((x) => {
      if (x === newNums[i]) {
        a++;
      }
    });
    result.push(a);
  }
  return newNums[result.indexOf(Math.max(...result))];
};

// 진짜 너무너무 비효율적인 코드...심각쓰....

// 다른사람 풀이

var majorityElement = function (nums) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};
