var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines.shift());
let reajuste = 0;

if(salario <= 400){
  reajuste = salario * 0.15;
  console.log(`Novo salario: ${(salario + reajuste).toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 15 %`); 
}

else if(salario <= 800){
  reajuste = salario * 0.12;
  console.log(`Novo salario: ${(salario + reajuste).toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 12 %`);
}

else if(salario <= 1200){
  reajuste = salario * 0.10;
  console.log(`Novo salario: ${(salario + reajuste).toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 10 %`);
}

else if(salario <= 2000){
  reajuste = salario * 0.07;
  console.log(`Novo salario: ${(salario + reajuste).toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 7 %`);
}

else{
  reajuste = salario * 0.04;
  console.log(`Novo salario: ${(salario + reajuste).toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 4 %`);
}

