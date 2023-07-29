// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

let nums = [1, 1, 1, 2, 2, 3]
let k = 2

const topKFrequent = (nums, k) => {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i]
    if (hash[currNum]) {
          hash[currNum]++
        } else {
          hash[currNum] = 1
        }
  }
  // console.log(hash)

  let arr = []
  for (let key in hash) {
    let count = hash[key]
    // console.log(count)
    // console.log(key)
    if (hash[key] >= k) {
      arr.push(key)
    }
  }
  // console.log(arr)
  return arr
};

topKFrequent(nums, k)
