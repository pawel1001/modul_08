var a = 1;
var b = 1;
var value = (a*a) + (2 * a * b) - (b*b);
a = prompt('Podaj wartosc a');
b = prompt('Podaj wartosc b');
alert('Wynik kalkulacji to: ' + value);
console.log(value);
if (value >=0) {
	console.log('Wynik dodatni!');
} else if (value < 0) {
	console.log('Wynik ujemny!');
} else {
	console.log('Wynik rowny zero!');
}
