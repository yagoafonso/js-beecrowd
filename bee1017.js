var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")
const tempo = valores.shift()
const velocidade = valores.shift()

const distancia = tempo * velocidade

const consumo = distancia / 12

console.log(consumo.toFixed(3))