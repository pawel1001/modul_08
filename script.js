var a, b, wynik;
	
function getTriangleArea(a, h) {
	
	if (a<=0 || h<=0) {
		return 'Nieprawidłowe dane';
	}
	
	var wynik = a*h/2;
	return wynik;
}

console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(5, 6);
var triangle2Area = getTriangleArea(8, 11);
var triangle3Area = getTriangleArea(12, 10);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);