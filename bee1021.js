var input = require('fs').readFileSync('stdin', 'utf8')

var valor = parseFloat(input) + 0.001

console.log("NOTAS:")
let qtdNotas = parseInt(valor / 100)
console.log( qtdNotas + " nota(s) de R$ 100.00")
valor = valor % 100

qtdNotas = parseInt(valor / 50)
console.log(qtdNotas + " nota(s) de R$ 50.00")
valor = valor % 50

qtdNotas = parseInt(valor / 20)
console.log(qtdNotas + " nota(s) de R$ 20.00")
valor = valor % 20

qtdNotas = parseInt(valor / 10)
console.log(qtdNotas + " nota(s) de R$ 10.00")
valor = valor % 10

qtdNotas = parseInt(valor / 5)
console.log(qtdNotas + " nota(s) de R$ 5.00")
valor = valor % 5

qtdNotas = parseInt(valor / 2)
console.log(qtdNotas + " nota(s) de R$ 2.00")
valor = valor % 2

console.log("MOEDAS:")
qtdNotas = parseInt(valor / 1)
console.log(qtdNotas + " moeda(s) de R$ 1.00")
valor = valor % 1

qtdNotas = parseInt(valor / 0.50)
console.log(qtdNotas + " moeda(s) de R$ 0.50")
valor = valor % 0.50

qtdNotas = parseInt(valor / 0.25)
console.log(qtdNotas + " moeda(s) de R$ 0.25")
valor = valor % 0.25

qtdNotas = parseInt(valor / 0.10)
console.log(qtdNotas + " moeda(s) de R$ 0.10")
valor = valor % 0.10

qtdNotas = parseInt(valor / 0.05)
console.log(qtdNotas + " moeda(s) de R$ 0.05")
valor = valor % 0.05

qtdNotas = parseInt(valor / 0.01)
console.log(qtdNotas + " moeda(s) de R$ 0.01")



