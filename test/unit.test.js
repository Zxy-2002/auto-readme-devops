const assert = require('assert');

console.log('Running unit test...');
console.log('TEST_ENV:', process.env.TEST_ENV || 'not set');

assert.strictEqual(1 + 1, 2);

console.log('✅ Unit test passed');
