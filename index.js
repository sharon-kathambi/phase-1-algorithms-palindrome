function isPalindrome(word) {
  // Write your algorithm here
  // using split() to turn string to array
  // using reverse() to reverse array
  //using join() to return array to string

 let wordReverse = word.toLowerCase().split("").reverse().join("")
  //create a condition
    if(word === wordReverse){
      return true;
    } else{
      return false;
    }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
