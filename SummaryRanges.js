/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    let start = null
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (start === null) {
            start = nums[i]
          }
          if (nums[i] === nums[i + 1] - 1) {
            
          }
      }
  };
  