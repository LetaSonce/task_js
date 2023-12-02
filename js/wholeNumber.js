/**
 * 
 * @description 
 * Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.
 * @param {*} a 
 * @returns 
 */

function wholeNumber(a) {
    return a - Math.floor(a) === 0
  }