/**
 * 
 * @description Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

function containTimes (a, b) {
    return b.split(a).length - 1;
}