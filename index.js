"use strict";
/**
 * Below are some examples of using the CardDeck class
 */
const CardDeck = require("./card-deck");

/**
 * Exposes card deck by printing cards in deck and dealt cards
 * @param {CardDeck} cardDeck instance of CardDeck class
 */
function printCardDeck(cardDeck) {
	const cardsInDeck = cardDeck.getCardsInDeck();
	console.log("*****Cards In Deck*****");
	for (let i = 0; i < cardsInDeck.length; i++) {
		console.log(cardsInDeck[i]);
	}

	const dealtCards = cardDeck.getDealtCards();
	console.log("*****Dealt Cards*****");
	for (let i = 0; i < dealtCards.length; i++) {
		console.log(dealtCards[i]);
	}
}


/**
 * Example1
 * Create a card deck based on default config of CardDeck class
 * will create a card deck of 52 cards
 * card suits will be SPADES, DIAMONDS, HEARTS, CLUBS
 * face cards will be KING, QUEEN, JACK
 * and number cards are from 1 to 10
*/
let cardDeck = new CardDeck();

// Print card deck before shuffling
printCardDeck(cardDeck);
console.log("----------------------------------------");

// Shuffle card deck
cardDeck.shuffle();
printCardDeck(cardDeck);
console.log("----------------------------------------");

// deal 10 cards
for (let i = 0; i < 10; i++) {
	const card = cardDeck.dealCard();
	console.log(`Dealt card is ${card}`);
}
console.log("----------------------------------------");
printCardDeck(cardDeck);
console.log("----------------------------------------");

// shuffle cards, this brings the dealt cards back to original deck. Dealt cards will be empty
cardDeck.shuffle();
printCardDeck(cardDeck);
console.log("----------------------------------------");


/**
 * Example2
 * Example of creating your own card deck based on the following config
 * card suits will be EARTH, WATER, FIRE, WIND
 * face cards will be CARD, BOAT, AIRPLANE
 * and number cards are from 1 to 5
*/
const config = {
	cardSuits: [
		"EARTH",
		"WATER",
		"FIRE",
		"WIND",
	],
	faceCards: [
		"CARD",
		"BOAT",
		"AIRPLANE",
	],
	cardNumbers: [1, 2, 3, 4, 5],
}
cardDeck = new CardDeck(config);

// Print card deck before shuffling
printCardDeck(cardDeck);
console.log("----------------------------------------");

// Shuffle card deck
cardDeck.shuffle();
printCardDeck(cardDeck);
console.log("----------------------------------------");

// deal 15 cards
for (let i = 0; i < 15; i++) {
	const card = cardDeck.dealCard();
	console.log(`Dealt card is ${card}`);
}
console.log("----------------------------------------");
printCardDeck(cardDeck);
console.log("----------------------------------------");

// shuffle cards, this brings the dealt cards back to original deck. Dealt cards will be empty
cardDeck.shuffle();
printCardDeck(cardDeck);
console.log("----------------------------------------");


