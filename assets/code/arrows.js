//setup
let cardselect = 0;
const cards = document.querySelectorAll("li");

// swipe setup
var touchx = 0;
var touchendx = 0;
var touchy = 0;
var touchendy = 0;
var treshold = 50;
var tresholdy = 100;

//actions
function cardforw() {
	if (cardselect == cards.length - 1) {
		return;
	}
	document.querySelector(".select").classList.remove("select");
	cardselect++;
	cards[cardselect].classList.add("select");
}

function cardrew() {
	if (cardselect == 0) {
		return;
	}
	document.querySelector(".select").classList.remove("select");
	cardselect--;
	cards[cardselect].classList.add("select");
}

//buttons
document.getElementById("btnforw").addEventListener("click", function () {
	console.log("oi");
	cardforw();
});

document.getElementById("btnback").addEventListener("click", function () {
	cardrew();
});

// swipe
document.getElementById("cards").addEventListener("touchstart", function (touchevent) {
	touchx = touchevent.touches[0].screenX;
	touchy = touchevent.touches[0].screenY;
	console.log(touchevent.touches);
});

document.getElementById("cards").addEventListener("touchmove", function (touchevent) {
	touchendx = touchevent.touches[0].screenX;
	touchendy = touchevent.touches[0].screenY;
});

document.getElementById("cards").addEventListener("touchend", function (touchevent) {
	if ((touchendy < touchy - tresholdy && touchendy < touchy) || (touchendy > touchy + tresholdy && touchendy > touchy)) return;
	if ((touchendx > touchx - treshold && touchendx < touchx) || (touchendx < touchx + treshold && touchendx > touchx)) return;
	if (touchendx < touchx) cardforw();
	if (touchendx > touchx) cardrew();
});
