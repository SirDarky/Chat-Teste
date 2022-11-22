const express = require('express')
const path = require('path')

const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', (req, res)=>{
    res.render('index.html')
})
 
let messages = []
let id = 0
io.on('connection', socket =>{
    socket.emit('idUser', id)
    console.log('Socket conectado:'+socket.id);

    socket.emit('previousMessages', messages)

    socket.on('sendMessage', data=>{
        messages.push(data)
        console.log(data)
        socket.broadcast.emit('receivedMessage', data)
    })

    id++
})

server.listen(3000)
console.log('Servidor está rodando em http://localhost:3000/')