var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")

const a = parseInt(valores.shift())
const b = parseInt(valores.shift())
const c = parseInt(valores.shift())
const d = parseInt(valores.shift())

const diferenca = (a * b - c * d)

console.log(`DIFERENCA = ${diferenca}`)