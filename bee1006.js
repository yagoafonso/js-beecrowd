var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")
const a = parseFloat(valores.shift()).toFixed(1) * 2
const b = parseFloat(valores.shift()).toFixed(1) * 3
const c = parseFloat(valores.shift()).toFixed(1) * 5 

const media = (a + b + c) / 10

console.log('MEDIA = ' + media.toFixed(1))