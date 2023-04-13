var express = require('express');
var router = express.Router();
const request = require('request');

function makeHttpGetCall(varHttpRequest, varToken) {
  const options = {
    uri: varHttpRequest,
    headers: {
      'Authorization': `Bearer ${varToken}`
    }
  };

  return new Promise((resolve, reject) => {
    request.get(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else if (response.statusCode !== 200) {
        reject(`HTTP status code ${response.statusCode}`);
      } else {
        resolve(JSON.parse(body));
       //console.log('Response: ', body); //debugging code to test
        return body;
      }
    });
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {


const varHttpRequest = 'http://bdpamkedev.com/api/v5/employees/?pageNo=1&pageSize=100';
const varToken = global.DB_token;

makeHttpGetCall(varHttpRequest, varToken)
  .then(data => {
    console.log(data);
    //console.log('Response: ', responseArray.Records); //debugging code to test
    res.render('emplistall', { title: 'Products R Us Employee List' , resultarray: data.records});
  })
  .catch(error => {
    console.error(error);
  });
});

module.exports = router;
