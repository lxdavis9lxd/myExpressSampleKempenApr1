//Generate Key
const crypto = require('crypto');

const password = 'password123';
const salt = crypto.randomBytes(16);
const iterations = 1000;
const keylen = 64;
const digest = 'sha512';

crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
  if (err) throw err;
  console.log('encrypted Key', derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
// Decrypt password
