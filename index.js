const express = require('express');
const app = express()

app.get('/', function(req, res){
  console.log('chegou')
  res.send("hello")
})

server.listen(process.env.PORT || 3000);
console.log('Servidor iniciado')