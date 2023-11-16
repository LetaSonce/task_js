/*

Task 03

Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. 
Assume that the argument is an integer.

Return -1 if the argument is not valid
Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

maxRedigit(123); // returns 321

*/

var maxRedigit = function(num) {
    const res = Number(Array.from(num.toString())
                       .sort((a, b) => a - b)
                       .reverse()
                       .join()
                       .replace(/[\s,]/g, ''));
    if (Number.isNaN(res) || res === 0 ||  res < 100 || res > 999) {
      return null;
    }
    return res;
  };

export default maxRedigit;