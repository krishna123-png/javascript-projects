/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const arrayOfAlphabets = str.split('').filter((char) => /[a-zA-z]/.test(char))
  const reverseArrayOfAlphabets = arrayOfAlphabets.map((alphabet, index, array) => {
      return array[array.length - 1 - index]
  })
  
  //console.log(arrayOfAlphabets)
  //console.log(reverseArrayOfAlphabets)
  
  let isPalindrome = false;
  for (let i = 0; i <= arrayOfAlphabets.length; i++) {
      isPalindrome = arrayOfAlphabets[i] === reverseArrayOfAlphabets[i] || arrayOfAlphabets[i].toLowerCase() === reverseArrayOfAlphabets[i] || arrayOfAlphabets[i].toUpperCase() === reverseArrayOfAlphabets[i];
      if (!isPalindrome) {
          return isPalindrome
      }
  }
  return isPalindrome
}

module.exports = isPalindrome;
