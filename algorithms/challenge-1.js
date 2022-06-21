function secondLargest(arr) {
  let sortedArray = arr.sort(function(a, b) {return b-a})
  return sortedArray[1];
}
module.exports = secondLargest
console.log(secondLargest([6, 3, 0, 30, 7]));