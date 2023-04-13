var express = require('express');
var router = express.Router();
const http = require('https');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//http post call
const http = require('https');






function makeHttpPostCall(varHttpRequest,varToken, varBody) {
 // const postData = JSON.stringify(varBody);
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${varToken}`,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(varBody)

    
  };

  //const postData = JSON.stringify(varBody);
  console.log("PostData: "+options.body);
  return new Promise((resolve, reject) => {
    const req = http.request(varHttpRequest, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      
      });

      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (error) => {
      reject(error);
    });
    //console.log('data',data)
       
        req.write(data);
        req.end();
   
  });
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('empadd', { title: 'Products Are Us Employee Add' });

}); 

  
  router.post('/', urlencodedParser, async (req, res, next)  => {

    console.log("Post",req.body)
  // Example usage
  const url = 'https://bdpamkedev.com/api/v3/employees';
  const token = global.DB_token;
  const method = 'POST';
  const body = req.body
  console.log("body", req.body.empnumber);
  makeHttpPostCall(url,token, body)
    .then((data) => {
      console.log(data); // Response body from the API endpoint
    })
    .catch((error) => {
      console.error(error);
    });
  
  
  
  
    






});



module.exports = router;