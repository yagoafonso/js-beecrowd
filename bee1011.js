var input = require('fs').readFileSync('stdin', 'utf8')


const raio = parseFloat(input).toFixed(2)
const pi = 3.14159

const volume =(4.0/3) * pi * Math.pow(raio, 3)

console.log(`VOLUME = ${(volume).toFixed(3)}`)