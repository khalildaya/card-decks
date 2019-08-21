"use strict";

const defaultConfig = require("./default");

module.exports = CardDeck;

/**
 * CardDeck class constructor
 */
function CardDeck(cardConfig) {
	/**
	 * override default card suits, face cards and card numbers
	 * with the ones provided in constructor config
	 */
	const finalConfig = Object.assign(defaultConfig, cardConfig);
	this.deck = buildDeck(finalConfig.cardSuits, finalConfig.faceCards, finalConfig.cardNumbers);
}


/**
 * Builds an ordered card deck based on provided card suits, face cards and number cards
 * @param {array} cardSuits array of strings representing card suits
 * @param {array} faceCards array of strings representing all face cards
 * @param {array} cardNumbers array of strings representing number cards
 * @return {array} array of strings holding an ordered unshuffled card deck
 */
function buildDeck(cardSuits, faceCards, cardNumbers) {
	// Holds the resulting array
	const result = [];

	// Add numbers and face card for each card suit
	for (let i = 0; i < cardSuits.length; i++) {

		// Add numbers to the card deck
		for (let j = 0; j < cardNumbers.length; j++) {
			result.push(`${cardSuits[i]} ${cardNumbers[j]}`); 
		}

		// Add face cards to card deck
		for (let k = 0; k < faceCards.length; k++) {
			result.push(`${cardSuits[i]} ${faceCards[k]}`);
		}
	}

	return result;
}