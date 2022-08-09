var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")


const valores1 = valores.shift().split(" ")
const valores2 = valores.shift().split(" ")


const codigoProduto = parseInt(valores1.shift())
const numerosPecas = parseInt(valores1.shift())
const valorProduto = parseFloat(valores1.shift())

const codigoProduto2 = parseInt(valores2.shift())
const numerosPecas2 = parseInt(valores2.shift())
const valorProduto2 = parseFloat(valores2.shift())

const resultado = (numerosPecas * valorProduto) + (numerosPecas2 * valorProduto2)

console.log(`VALOR A PAGAR: R$ ${(resultado).toFixed(2)}`)