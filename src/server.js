const express = require('express')
const router = require('./routes')
const PORTA = 3333
const app = express()
app.use(express.json())
app.use(router)
app.listen(PORTA, () =>{
    console.log('Aplicação rodando na porta',PORTA)
})