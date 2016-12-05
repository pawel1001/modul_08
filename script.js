var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';

var animal = 'zielone słonie';
var newAnimal = animal.toUpperCase();

console.log(newAnimal)

var newText = text.replace('Papugi', newAnimal);
console.log(newText)

var partOfMotto = newText.slice(0,newText.length / 2);

console.log(partOfMotto);