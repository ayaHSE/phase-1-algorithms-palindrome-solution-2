function isPalindrome(word) {
  // Iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // Compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // If the letters don't match, return false
      return false;
    }
  }

  // If we reach the middle and all the letters match, return true
  return true;
}

/* 
  Pseudocode:
  - Iterate from the beginning of the string to the middle of the string
  - Compare the letter we're iterating over to the corresponding letter at the end of the string
  - If the letters don't match, return false
  - If we reach the middle and all the letters match, return true
*/

/*
  Written explanation of the solution:
  - We iterate from the beginning of the string to the middle of the string, comparing each letter to its corresponding letter at the end of the string.
  - If any letters don't match, we return false immediately.
  - If we reach the middle of the string and all the letters match, we return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
