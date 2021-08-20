// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
  let uniqueNums = {};
  let increments = 0;

  for (var i = 0; i < nums.length; i++) {
    while (uniqueNums[nums[i]] === true) {
      nums[i] += 1;
      increments++;
    }

    uniqueNums[nums[i]] = true;
  }

  return increments;
};
