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