var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")
const a = parseInt(valores.shift())
const b = parseInt(valores.shift())

const soma = a + b

console.log(`SOMA = ${soma}`)