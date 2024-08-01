
  

// import assert from 'assert';
// import transportFee from './transportFee.js'; // Assuming transportFee.js is in the same directory

// describe('transportFee function', () => {
//     it('should return R20 for morning shift', () => {
//         const fee = transportFee('morning');
//         assert.equal(fee, 'R20');
//       });
    
//       it('should return R10 for afternoon shift', () => {
//         const fee = transportFee('afternoon');
//         assert.equal(fee, 'R10');
//       });
    
//       it('should return free for nightshift', () => {
//         const fee = transportFee('nightshift');
//         assert.equal(fee, 'free');
//       });
    
//       it('should return undefined for invalid shift', () => {
//         const fee = transportFee('loadshedding');
//         assert.equal(fee, undefined);
//       });
//     });
//     // ... your test cases
// // });

import assert from "assert";
import transportFee from '../transportFee.js'; // Assuming transportFee.js is in the parent directory

describe('transportFee function', () => {
  it('should return R20 for morning shift', () => {
    const fee = transportFee('morning');
    assert.equal(fee, 'R20');
  });

  it('should return R10 for afternoon shift', () => {
    const fee = transportFee('afternoon');
    assert.equal(fee, 'R10');
  });

  it('should return free for nightshift', () => {
    const fee = transportFee('nightshift');
    assert.equal(fee, 'free');
  });

  it('should return undefined for invalid shift', () => {
    const fee = transportFee('loadshedding');
    assert.equal(fee, undefined);
  });
});
