var express = require('express');
var router = express.Router();
const http = require('http');
var bodyParser = require('body-parser');
const { Console } = require('console');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

async function makeHttpPostCall(varHttpRequest, varBody, varResult) {
    const fetch = require('node-fetch');
    await fetch(varHttpRequest, {
      
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + global.DB_token,
       'Content-Type': 'application/json'    
       },
  body: varBody
    
  })
.then(response => response.json())
.then(data => {
  console.log("this is data", data);
  varResult = data;
  return varResult;
})
.catch(error => {
  console.error(error);
  return "error";
});
    
  }
 



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('empadd', { title: 'Products Are Us Employee Add' });

}); 

  
  router.post('/', urlencodedParser, async (req, res, next)  => {

    //console.log("Post",req.body)
  // Example usage
  const varHttpRequest = 'https://bdpamkedev.com/api/v5/employees';
  const varToken = global.DB_token;
  
  
  const varBody = JSON.stringify({
    "employeeNumber": "1385767",
    "lastName": "test",
    "firstName": "tester",
    "extension": "1234",
    "email": "tester@gmai.com",
    "officeCode": "1",
    "reportsTo": "1002",
    "jobTitle": "cvb",
    "phone": "1234561234",
    "createdBy": "lxd",
    "modifiedBy": "lxd"
})
  //console.log("body", varBody);
  var varResult =''
  await   makeHttpPostCall(varHttpRequest, varBody, varResult)
      .then ((data) => {
 console.log("message", (data));
console.log("at data", );
 //console.log ("data", makeHttpPostCall);
 res.render('empadd', { title: 'Products Are Us Employee Add' });
      }) ;






});



module.exports = router;