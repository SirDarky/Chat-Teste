'use strict';

module.exports = class Sala{
  constructor(chatid, author, atendente){
    this.chatid = chatid;
    this.author = author;
    this.atendente = atendente;
  
    console.log('Objeto Criado')
  }
}