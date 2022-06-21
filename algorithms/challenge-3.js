function sumMix(arr) {
//    convert the strings in the arrays to numbers
//    sum the array

    let sum = 0;
    let numOnlyArr = arr.map((item)=>{return parseInt(item)});

    for(let i = 0; i < numOnlyArr.lenght; i++) {
        sum += numOnlyArr;
    }
    return sum;
 }
console.log( sumMix([10, 60, '80', 10]));
  module.exports = sumMix