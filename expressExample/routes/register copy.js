var express = require('express');
var router = express.Router();
//var crypto = require('@trust/webcrypto');
const crypto = require('crypto');
const webcrypto = require('@trust/webcrypto');

// Use the Web Crypto API
const subtleCrypto = webcrypto.subtle;





/* GET home page. */
router.get('/', function(req, res, next) {
//javascript
const crypto = require('crypto');

const password = 'password123';
var salt = webcrypto.randomBytes(16);
const iterations = 1000;
const keylen = 64;
const digest = 'sha512';

webcrypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
  if (err) throw err;
  console.log('encrypted Key', derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

//decrpt
subtleCrypto.importKey(
  'raw',
  new TextEncoder().encode(password),
  { name: 'PBKDF2' },
  false,
  ['deriveBits']
).then(key => {
  SubtleCrypto.deriveBits()(
    {
      name: 'PBKDF2',
      salt,
      iterations,
      hash: digest
    },
    key,
    keylen * 8
  ).then(derivedKey => {
    console.log("decrypted value" ,new Uint8Array(derivedKey).toString());
  });
});




  res.render('register', { title: 'Products R Us Register' });


});

module.exports = router;
