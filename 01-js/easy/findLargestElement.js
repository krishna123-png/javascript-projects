/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.some((number) => typeof(number) !== 'number')) {
        console.log("The array elements are not of type number")
    }
    else {
        return numbers.reduce((accumulator, number) => {
            if (accumulator >= number) {
                return accumulator
            }

            else {
                return number
            }
        })
    }
    
}

module.exports = findLargestElement;