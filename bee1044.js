const input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")
const A = parseInt(valores.shift())
const B = parseInt(valores.shift())


if ((A % B == 0) || (B % A == 0)) {
  console.log("Sao Multiplos")
}else {
  console.log("Nao sao Multiplos")
}