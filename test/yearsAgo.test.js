// // import yearsAgo from '../yearsAgo.js';
// // // Import the function

// // describe('yearsAgo', () => {
// //   it('should calculate the correct number of years ago', () => {
// //     const currentYear = new Date().getFullYear();
// //     const testYear = 1990;
// //     const expectedYears = currentYear - testYear;

// //     const result = yearsAgo(testYear);

// //     expect(result).toBe(expectedYears);
// //   });
// // });


// // yearsAgo.test.js
// import yearsAgo from '../yearsAgo.js';  // No curly braces needed for default
// ; // Import the named export

// describe('yearsAgo'), () => {
//     it('should calculate the correct number of years ago', () => {
//         const currentYear = new Date().getFullYear();
//         const testYear = 1990;
//         const expectedYears = currentYear - testYear;
    
//         const result = yearsAgo(testYear);
    
//         expect(result).toBe(expectedYears);// ... rest of your test code
//     }
// )};
//import assert from 'assert';
// yearsAgo.test.js
import assert from 'assert';
import yearsAgo from '../yearsAgo.js';

describe('yearsAgo function', () => {
  it('should calculate the correct number of years ago', () => {
    const year = 1990;
    const expectedYears = new Date().getFullYear() - year;
    const result = yearsAgo(year);
    assert.equal(result, expectedYears);
  
  });
});

