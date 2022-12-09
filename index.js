function hasTargetSum(array, target) {
  // Write your algorithm here

  
  for (let i = 0;i <array.length; i++) {
    const complementaryNumber = target - array[i];
    for (let j = i + 1; j < array.length;j++) {
      if(array[j] === complementaryNumber){
        return true;
      }
    }

  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  
  // iterate over the array of numbers, for the current number, ind the complementary number that, when added together it equals to our target sumnumber example: if our number is three and our target sum is 10 then complementary number is 7
  // iterate over the array to check for complementary nunber , if present return true
  // if we reach the end of the array and there is no complementary  number , return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
