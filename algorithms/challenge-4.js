function sumTwoSmallestNums(arr) {
    let sum = 0;
    let newFilteredarr = arr.filter(function(elem) {return elem > 0;});
    newFilteredarr.sort(function(a, b) {return a-b;});
    sum = newFilteredarr[0] + newFilteredarr[1];

    return sum;
 }
 console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));
 console.log(sumTwoSmallestNums([2, 9, 6, -1]));

  module.exports =sumTwoSmallestNums