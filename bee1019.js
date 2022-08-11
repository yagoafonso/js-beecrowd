var input = require('fs').readFileSync('stdin', 'utf8')

let tempo = parseInt(input)

const horas = parseInt( tempo / 3600)
tempo = parseInt(tempo % 3600)

const mins = parseInt( tempo / 60)
tempo = parseInt(tempo % 60)

console.log(`${horas}:${mins}:${tempo}`)