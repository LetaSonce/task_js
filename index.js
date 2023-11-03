import encrypt from './encrypt.js';
import quarterOf from './quarterOf.js';

console.log('move => ' + encrypt('move'));
console.log('attack => ' + encrypt('attack'));
console.log('moves => ' + encrypt('moves'));

console.log('Month 1',  quarterOf(1));
console.log('Month 2', quarterOf(2));
console.log('Month 3', quarterOf(3));
console.log('Month 4', quarterOf(4));
console.log('Month 5', quarterOf(5));
console.log('Month 6', quarterOf(6));
console.log('Month 7', quarterOf(7));
console.log('Month 8', quarterOf(8));
console.log('Month 9', quarterOf(9));
console.log('Month 10', quarterOf(10));
console.log('Month 11', quarterOf(11));
console.log('Month 12', quarterOf(12));