var a = 1;
var b = 1;

function rysujChoinke (a) {
	var star = "";

	for (var k = 0; k < a; k++) {
	star += '*';
	console.log(star)
	}	
	
}

rysujChoinke(3);
rysujChoinke(5);

//Dla ambitnych: Na każdym z poziomów dodaj spacje tak, aby choinka stała prosto.

function rysujChoinke2(b) {
	
	var star = '';

	for (var k = 0; k < 2*b; k++) {
	
	if (k==0) {
		star+='*';
	} else {
			star += '**';
		}

	
	var space = '';

		for (var n = k; n <2*b-1; n++) {
			space += ' ';
		}
	console.log(space + star)
	}	
	

}

rysujChoinke2(5);