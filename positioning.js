function countLetters(str) {
  var newStr = str.split(" ").join("").split("");

  for (var x = 0; x < newStr.length; x++) {
      update(newStr[x],x);
  }
  //return memo;
}
var memo = {};
function update(x, num ) {
  if (memo[x] !== undefined) {
    memo[x] = memo[x] + "," + [num]
  } else {
    memo[x] = num
  }
}
//split string into array
//loop through arr indexs
//declare empty object to push out put too
// return object - no. of instances is value
//console log “” arr “:” output”


countLetters("lighthouse in the house");
console.log(memo)
