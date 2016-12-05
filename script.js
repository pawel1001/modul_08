var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);

console.log(allNames);  


var newName ='Marian';

if (allNames.indexOf(newName) == -1) {
	var x = allNames.push(newName);
} else {
	console.log("Wartosc znajduje sie juz w tablicy");  
}

console.log(allNames);  