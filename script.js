var licznik = 0;
var addItem = document.getElementById('addItem');
	
addItem.addEventListener('click', function(e) {
  licznik += 1;
var list = document.getElementById('lista');
var newElement = document.createElement('li');
newElement.innerHTML = 'Item ' + licznik;
list.appendChild(newElement);
});

