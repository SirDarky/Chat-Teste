const express = require('express');
//const socketio = require('socket.io');
//const http = require('http');
//const Sala = require('./src/newSala');
const app = express()
//const server = http.createServer(app);
/*const io = new socketio.Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

let salas = []
*/
app.get('/hello', function (req, res) {
  res.send('hello world')
})

/*
io.on('connection', (socket) =>{
  socket.on('conexao', (chat)=>{
    let chatid = Number(chat.chatId);
    let author = chat.author;
    let atendente = chat.atendente;

    if (!salas[chatid]) {
      salas[chatid] = new Sala(chatid, author, atendente);
    }

    if (!salas[chatid].atendente) {
      salas[chatid].atendente = atendente;
    }

    socket.join(chatid)
  })

  socket.on('sendMessage', data =>{
    io.to(Number(data.chat_id)).emit('mensagem', data)
  })

  socket.on('encerrado', data=>{
    io.to(Number(data.chat_id)).emit('encerrado_client', data)
    console.log('O chat '+ data.chat_id+' foi encerrado as '+ data.time)
  })

  socket.on('arquivos', data=>{
    console.log('Arquivos do chat: ', data)
    io.to(Number(data)).emit('recebido_arquivo')
  })

  socket.on('digitando', digitando => {
    io.to(Number(digitando.chat)).emit('digitandoUser', digitando);
  })

  socket.on('parou_digitar', parou =>{
    io.to(Number(parou.chat)).emit('parouUser', parou);
  })
})
*/
server.listen(process.env.PORT || 8080);
console.log('Servidor iniciado')