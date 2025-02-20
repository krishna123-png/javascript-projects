/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const characters = [...str]
    let numOfVowels = characters.reduce((accumulator, character) => {
      if (vowels.some((vowel) => vowel === character.toLowerCase())) {
        return accumulator + 1;
      }
      else {
        return accumulator;
      }
    }, 0)
    return numOfVowels
}

module.exports = countVowels;