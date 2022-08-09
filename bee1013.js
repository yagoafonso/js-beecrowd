var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var [a, b, c]  = input.split(" ").map(item => parseInte(item))
 

    var maiorAB = (a  + b + Math.abs(a-b)) / 2
    var resultado = (maiorAB + c + Math.abs(maiorAB - c)) / 2

console.log(`eh o maior ${resultado}`)