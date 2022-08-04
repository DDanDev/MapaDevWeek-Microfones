let cardselect = 0;
const cards = document.querySelectorAll("li");

document.getElementById("btnforw").addEventListener("click", function () {
	if (cardselect == cards.length - 1) {
		return;
	}
	document.querySelector(".select").classList.remove("select");
	cardselect++;
	cards[cardselect].classList.add("select");
});

document.getElementById("btnback").addEventListener("click", function () {
	if (cardselect == 0) {
		return;
	}
	document.querySelector(".select").classList.remove("select");
	cardselect--;
	cards[cardselect].classList.add("select");
});
