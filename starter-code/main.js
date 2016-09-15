var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again")
}

var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    board.appendChild(cardElement);
  }
}

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = []

var board = document.getElementById('game-board');
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.setAttribute('data-card', cards[i]);
	}
}

function isTwoCards() {
	for (var i = 0; i < cards.length; i++) {
		cardElement.addEventListener('click', isTwoCards)
	}
}

function isMatch () {
	for (var i = 0; i < cards.length; i++) {
		cardElement.addEventListener('click', isMatch)
	}
}

function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://cdn.bulbagarden.net/upload/thumb/c/c6/034Nidoking.png/250px-034Nidoking.png'>";
	}	else {
		this.innerHTML = "<img src='http://cdn.bulbagarden.net/upload/thumb/b/bf/031Nidoqueen.png/250px-031Nidoqueen.png'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch (cardsInPlay);
		cardsinPlay = [];
	}
}