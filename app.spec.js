const app = require('./app');

describe('basic functions', () => {
   test('add', () =>{
    expect(app.add(1,1)).toBe(2);
   });
   
   test('subtract', () =>{
    expect(app.subtract(10,1)).toBe(9);
   });

   test('multiply', () =>{
    expect(app.multiply(15,2)).toBe(30);
   });

   test('division', () =>{
    expect(app.divide(15,3)).toBe(5);
   });
});