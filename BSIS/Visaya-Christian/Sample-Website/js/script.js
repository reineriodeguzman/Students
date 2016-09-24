document.firstElementChild.style.zoom = "reset";

var ypos,image;
		function parallex () {
			title = document.getElementById('artisttitle');
			ypos = window.pageYOffset;
			image = document.getElementById('image');
			image.style.top = ypos * .5 + 'px';
		}
		window.addEventListener('scroll',parallex);


