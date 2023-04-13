const https = require('https');

function makeHttpPostCall(varHttpRequest, varToken, varMethod, varBody) {
  const postData = JSON.stringify(varBody);
  const options = {
    method: varMethod,
    headers: {
      'Authorization': `Bearer ${varToken}`,
      'Content-Type': 'application/json'
    },
    body:postData

    
  };

  //const postData = JSON.stringify(varBody);
  console.log("PostData: "+postData);
  return new Promise((resolve, reject) => {
    const req = https.request(varHttpRequest, options, (res) => {
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

    req.write(postData);
    req.end();
  });
}

// Example usage
const url = 'https://example.com/api';
const token = 'abc123';
const method = 'POST';
const body = {
  name: 'John Doe',
  email: 'john.doe@example.com'
};

makeHttpPostCall(url, token, method, body)
  .then((data) => {
    console.log(data); // Response body from the API endpoint
  })
  .catch((error) => {
    console.error(error);
  });




  