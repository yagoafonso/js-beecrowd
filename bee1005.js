var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")
const a = parseFloat(valores.shift()).toFixed(1)
const b = parseFloat(valores.shift()).toFixed(1)

const media = ((3.5 * a) + (7.5 * b)) / 11

console.log('MEDIA = ' + media.toFixed(5))