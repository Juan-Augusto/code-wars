// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
function findOutlier(integers){
    const arr = []
    const arr2 =[]
    integers.map((i) => i%2 === 0 ? arr.push(i) : arr2.push(i))
    if(arr.length === 1){
      console.log(arr[0])
      return arr[0]
    }else{
      console.log(arr2[0])
      return arr2[0]
    }
  }
    findOutlier([160, 3, 1719, 19, 11, 13, -21])
    findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
    findOutlier([2,6,8,10,3])    
    findOutlier([1, 2, 3])    