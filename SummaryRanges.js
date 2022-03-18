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
            continue
          }
          if (nums[i] === start) {
            result.push(nums[i].toString())
            start = null
          } else {
            result.push(`${start}->${nums[i]}`)
            start = null
          }
      }
      return result
  };

  /**
   * Initialize a start variable to null.
   * Loop through the nums array.
   * If start is null, we set start to the current value of nums[i].
   * If nums[i] is equal to nums[i + 1] - 1, we continue to the next iteration.
   * If nums[i] is equal to start, we push the value of start to the result array.
   * If nums[i] is not equal to start, we push the string representation of the range of start to nums[i] to the result array.
   * 
   */
  