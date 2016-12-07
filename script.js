var licznik = 0;
var addItem = document.getElementById('addItem');
var list = document.getElementById('lista');
	
addItem.addEventListener('click', function(e) {
  licznik += 1;
var newElement = document.createElement('li');
newElement.innerText = 'Item ' + licznik;
list.appendChild(newElement);
});

