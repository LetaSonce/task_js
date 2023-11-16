// import encrypt from './encrypt.js';
//import quarterOf from './quarterOf.js';
const jest = require('./node_modules/@jest');
const quarterOf = require('./js/quarterOf');


/*test('test', () => {
    expect(quarterOf(2)).toEqual(1);
    expect(quarterOf(5)).toEqual(2);
    expect(quarterOf(8)).toEqual(3);
    expect(quarterOf(11)).toEqual(4);
  });*/

  test('test', () => {
    expect(quarterOf(2)).toBe(1);
  });