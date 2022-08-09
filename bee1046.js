var input = require('fs').readFileSync('stdin', 'utf8')


const valores  = input.split("\n")

const horaInicial = parseInt(valores.shift())
const horaFinal = parseInt(valores.shift())

const duracao = 24 - (24  + horaInicial - horaFinal) % 24

if (horaInicial == horaFinal)
    console.log('O jogo durou 24 hora(s)')    

else
    console.log("O jogo durou " + duracao + " hora(s)")

   

    