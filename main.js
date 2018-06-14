var container = document.querySelector('.container');
var change = document.querySelector('.change');
var mobilenav = document.querySelector('.mobilenav');

container.addEventListener('click', function() {
	mobilenav.classList.toggle('mobilenav--isactive');
	if (mobilenav.style.display = 'block') {
		document.body.style.overflow = 'hidden';
	} else if (mobilenav.style.display = 'none') {
		document.body.style.overflow = 'visible';
	}
});

change.addEventListener('click', function() {
	mobilenav.style.display = 'none';
});

var scroll = window.scrollY;
var header = document.getElementById("navbar");

var toggle = function() {
  header.classList.toggle('navbar--hidden', scroll < scrollY);
  scroll = scrollY;
}

window.onscroll = toggle;
window.onload = toggle;
window.onrisize = toggle;
