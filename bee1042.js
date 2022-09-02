const input = require('fs').readFileSync('stdin', 'utf8')

var numeros = input.split('\n').map(item => parseFloat(item));
var numerosOrdenados = [...numeros]

for(i = 0; i < numerosOrdenados.length; i++){
  numerosOrdenados.sort((x, y) => x - y);
  console.log(numerosOrdenados[i])
}
console.log();
for (i = 0; i < numeros.length; i++ ) {
  console.log(numeros[i])
}
