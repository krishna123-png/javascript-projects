/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
      return true;
  }
  else {
      let chars1 = [...str1]
      let chars2 = [...str2]
      return chars1.length >= chars2.length ? 
      
      chars1.every((char) => chars2.some((ch) => ch.toLowerCase() === char || ch === char || ch.toUpperCase() === char)) : 
      chars2.every((char) => chars1.some((ch) => ch.toLowerCase() === char || ch === char || ch.toUpperCase() === char))
  }
}

module.exports = isAnagram;
