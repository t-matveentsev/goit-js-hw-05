'use strict';
function changeEven(numbers, value) {
  const newArrea = []
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArrea.push(numbers[i] + value)
    } else {
      newArrea.push(numbers[i])
    }
  }
  return newArrea
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));