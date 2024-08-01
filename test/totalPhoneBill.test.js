import assert from 'assert';
import totalPhoneBill from '../totalPhoneBill.js'; // Assuming totalPhoneBill.js is in the parent directory

describe('totalPhoneBill function', () => {
  it('should calculate the total cost of calls and sms', () => {
    const bill = 'call, sms, call';
    const total = totalPhoneBill(bill);
    assert.equal(total, 'R6.15');
  });

  it('should handle an empty string', () => {
    const bill = '';
    const total = totalPhoneBill(bill);
    assert.equal(total, 'R0.00');
  });

  it('should handle only sms', () => {
    const bill = 'sms, sms';
    const total = totalPhoneBill(bill);
    assert.equal(total, 'R1.30');
  });

  it('should handle only calls', () => {
    const bill = 'call, call, call';
    const total = totalPhoneBill(bill);
    assert.equal(total, 'R8.25');
  });

  it('should handle mixed calls and sms', () => {
    const bill = 'sms, call, sms, call, sms';
    const total = totalPhoneBill(bill);
    assert.equal(total, 'R7.45');
  });

  // ... other test cases

it('should handle invalid input', () => {
    const bill = 'invalid';
    const total = totalPhoneBill(bill);
    assert.equal(total, 'R0.00'); // Or handle it differently based on your requirements
  });
  
  it('should handle multiple spaces in input', () => {
    const bill = 'call,   sms, call';
    const total = totalPhoneBill(bill);
    assert.equal(total, 'R6.15');
  });
  
});

//});
