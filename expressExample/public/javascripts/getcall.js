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
      }
    });
  });
}
