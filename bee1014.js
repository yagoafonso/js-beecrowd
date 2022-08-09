var input = require('fs').readFileSync('/dev/stdin', 'utf8')

const valores = input.split("\n")

const x = parseInt(valores.shift())
const y = parseFloat(valores.shift())
 
var resultado = (x / y)

console.log(`${resultado.toFixed(3)} km/l`)