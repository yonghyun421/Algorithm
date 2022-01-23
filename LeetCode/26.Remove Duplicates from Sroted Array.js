// Ex 1
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }
  return ++i;
};

// 첫번째 내풀이
// 왜 안되는지 의문

var removeDuplicates = function (nums) {
  let newNums = new Set(nums);
  let newArr = [...newNums];
  console.log(newArr);
  return newArr;
};
