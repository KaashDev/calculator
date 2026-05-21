const app = require('./app');

describe('add', () => {
   test('1+1', () =>{
    expect(app.add(1,1)).toBe(1);
   });
});