var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")
const a = parseInt(valores.shift())
const b = parseInt(valores.shift())


const produto = a * b

console.log(`PROD = ${produto}`)