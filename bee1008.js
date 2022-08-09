var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")

const numero = parseInt(valores.shift())
const qtdHorasTrab = parseInt(valores.shift())
const horaValor = parseFloat(valores.shift()).toFixed(2)

const salario = qtdHorasTrab * horaValor

console.log(`NUMBER = ${numero}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)