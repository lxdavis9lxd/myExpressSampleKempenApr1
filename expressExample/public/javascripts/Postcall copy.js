
  const fetch = require('node-fetch');
  const varHttpRequest = 'https://bdpamkedev.com/api/v5/employees';
  await fetch(varHttpRequest, {
    
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + global.DB_token,
     'Content-Type': 'application/json'    
     },
body: JSON.stringify(req.body)
  
})
.then(response => response.json())
.then(data => {
console.log("Message & Data ", data);
res.render('empadd', { title: 'Products Are Us Employee Add', message: data.message, data: data.data });
})
.catch(error => {
console.error(error);
res.render('empadd', { title: 'Products Are Us Employee Add', message: error.message, data: error.data });
return "error";
});
  