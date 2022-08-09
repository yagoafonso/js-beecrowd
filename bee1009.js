var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")
const nome = (valores.shift())
const salario = parseFloat(valores.shift())
const totalVendas = parseFloat(valores.shift())


const salarioFinal = salario + (totalVendas * 0.15)

console.log(`TOTAL = R$ ${(salarioFinal).toFixed(2)}`)