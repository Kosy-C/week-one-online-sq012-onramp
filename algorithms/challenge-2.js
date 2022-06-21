function filterArray(arr) {


   return arr.filter(function(elem){
        return typeof elem === "number"
    });
 }

module.exports = filterArray

console.log(filterArray([4, "z", "f", 5]));

