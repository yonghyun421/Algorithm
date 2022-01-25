// Ex
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
  let i = 0;
  let elementRemove = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1 - elementRemove];
      nums[nums.length - 1 - elementRemove] = "_";
      elementRemove++;
    } else {
      i++;
    }
  }
  return i;
};
