/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1400, function(){
				window.location.hash = hash;
			});
      	} 
    });
});




function reveal() {
	var reveals = document.querySelectorAll(".reveal");
  
	for (var i = 0; i < reveals.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 400;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("activein");
	  } else {
		reveals[i].classList.remove("activein");
	  }
	}
  }
window.addEventListener("scroll", reveal);


// function revealup() {
// 	var reveals = document.querySelectorAll(".revealup");
  
// 	for (var i = 0; i < reveals.length; i++) {
// 	  var windowHeight = window.innerHeight;
// 	  var elementTop = reveals[i].getBoundingClientRect().top;
// 	  var elementVisible = 150;
  
// 	  if (elementTop < windowHeight - elementVisible) {
// 		reveals[i].classList.add("activein");
// 	  } else {
// 		reveals[i].classList.remove("activein");
// 	  }
// 	}
//   }
// window.addEventListener("scroll", revealup);
function sync(animationName) {
	function animationEnd(event) {
	  console.log(event.animationName);
	  if (event.animationName === animationName) {
		const el = event.target;
		el.classList.remove("run");
		if (el.nextElementSibling) {
		  el.nextElementSibling.classList.add("run");
		} else if (el.parentElement && el.parentElement.children && el.parentElement.children[0]) {
		  el.parentElement.children[0].classList.add("run");
		}
	  }
	}
	
	window.addEventListener('animationend', animationEnd, true);
  
	const firstEl = document.querySelector(".hi");
	if (firstEl) {
	  firstEl.classList.add("run");
	}
  }
  
  const animationController = sync("play");