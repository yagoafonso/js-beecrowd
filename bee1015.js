const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const valores = input.split('\n')

const valores1 = valores.shift().split(' ')
const x1 = parseFloat(valores1[0])
const y1 = parseFloat(valores1[1])


const valores2 = valores.input.shift().split(' ')
const x2 = parseFloat(valores2[0])
const y2 = parseFloat(valores2[1])
const result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

console.log(result.toFixed(4))