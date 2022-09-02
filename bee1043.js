const input = require('fs').readFileSync('stdin', 'utf8')

var [A, B, C] = input.split('\n').map(item => parseFloat(item));
var ladoA = (A + B) > C
var ladoB = (A + C) > B 
var ladoC = (B + C) > A

if ( ladoA && ladoB && ladoC){
  resultado = A + B + C
  console.log("Perimetro = " + resultado.toFixed(1) )
}else {
  resultado = ((A + B) * C)/2
 console.log("Area = " + resultado.toFixed(1) )
}