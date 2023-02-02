var input = require('fs').readFileSync('stdin', 'utf8');

// var [p1, p2, p3] = input.split("\n").map(palavra => palavra.toString());
const palavras = input.split('\r\n')
const p1 = palavras.shift()
const p2 = palavras.shift()
const p3 = palavras.shift()


if (p1 == 'vertebrado') {
  if (p2 == 'ave') {
    if (p3 == 'carnivoro') {
      console.log('aguia')
    } else if (p3 == 'onivoro') {
      console.log('pomba')
    }
  } else if (p2 == 'mamifero') {
    if (p3 == 'onivoro') {
      console.log('homem')
    } else if (p3 == 'herbivoro') {
      console.log('vaca')
    }
  }
} else if (p1 == 'invertebrado') {
  if (p2 == 'inseto') {
    if (p3 == 'hematofago') {
      console.log('pulga')
    } else if (p3 == 'herbivoro') {
      console.log('lagarta')
    }
  } else if (p2 == 'anelideo') {  
    if (p3 == 'hematofago') {
      console.log('sanguessuga')
    } else if (p3 == 'onivoro') {
      console.log('minhoca')
    }
  }
}


