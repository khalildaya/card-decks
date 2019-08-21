"use strict";
const {
	CARD_SUITS,
	FACE_CARDS,
} = require("../constants");

module.exports = Object.freeze({
	cardSuits: [
		CARD_SUITS.CLUBS,
		CARD_SUITS.DIAMONDS,
		CARD_SUITS.HEARTS,
		CARD_SUITS.SPADES,
	],
	faceCards: [
		FACE_CARDS.JACK,
		FACE_CARDS.KING,
		FACE_CARDS.QUEEN,
	],
	cardNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});