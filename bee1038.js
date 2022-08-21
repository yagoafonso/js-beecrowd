var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split("\n")

const codigo = parseInt(valores.shift())
const quantidade = parseInt(valores.shift())
let valor = 0

switch (codigo) {
  
  case 1:
    valor = 4.00
    console.log(`Total: R$ ${(valor * quantidade).toFixed(2)}`)
    break;
  case 2:
    valor = 4.50
    console.log(`Total: R$ ${(valor * quantidade).toFixed(2)}`)
    break;
  case 3:
    valor = 5.00
    console.log(`Total: R$ ${(valor * quantidade).toFixed(2)}`)
    break;
  case 4:
    valor = 2.00
    console.log(`Total: R$ ${(valor * quantidade).toFixed(2)}`)
    break;
  case 5:
    valor = 1.50
    console.log(`Total: R$ ${(valor * quantidade).toFixed(2)}`)
    break;
  }