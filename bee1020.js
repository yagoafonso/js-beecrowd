var input = require('fs').readFileSync('stdin', 'utf8')

let idade = parseInt(input)

const anos = parseInt( idade / 365)
console.log(anos + " ano(s)")
idade = parseInt(idade % 365)

const meses = parseInt(idade / 30)
console.log(meses + " mes(es)")
idade = parseInt(idade % 30)

console.log(idade + " dia(s)")