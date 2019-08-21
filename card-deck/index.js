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

	// build an ordered deck
	this.deck = buildDeck(finalConfig.cardSuits, finalConfig.faceCards, finalConfig.cardNumbers);

	// Initialize dealt cards
	this.dealtCards = [];
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

/**
 * Shuffles the deck
*/
CardDeck.prototype.shuffle = function() {

	/**
	 * Shuffles the deck by randomly picking a card from
	 * original deck, adding it to a temp deck as long as the original
	 * deck wis not empty. Once it is, swaps the temp deck with the original one
	 */
	const tempDeck = [];

	// Return all dealt cards back to deck and re-initiailze dealt cards
	this.deck = this.deck.concat(this.dealtCards);
	this.dealtCards = [];

	while(this.deck.length > 0) {
		// Pick a random card
		const nextCardIndex = Math.floor(Math.random() * this.deck.length);
		
		// Remove the chosen card from the original deck and put it temp deck
		const nextCard = this.deck.splice(nextCardIndex, 1)[0];
		tempDeck.push(nextCard);
	}
	
	// swap temp deck with original deck
	this.deck = tempDeck;
}

/**
 * Deals a card. Removes a card from the deck and adds
 * it to the dealt cards
 * @return {string} the dealt card
*/
CardDeck.prototype.dealCard = function() {
	// Remove card from the deck
	const card = this.deck.pop();

	// Add card to dealt cards
	this.dealtCards.push(card);

	return card;
}

/**
 * Deals all cards. Deck will be emptied.
 * @return {array} array of string representing all dealt cards
*/
CardDeck.prototype.dealAllCards = function() {
	// Array of dealt cards to return
	const result = [];

	/**
	 * Loop through all cards in the deck and
	 * pop them out of the deck until deck is empty.
	 * Teh reason to return the array "result" instead of this.dealtCards
	 * is to avoid returning a reference to an internal property of the CardDeck object
	*/
	while(this.deck.length > 0) {
		const card = this.deck.pop(); 
		result.push(card);
		this.dealtCards.push(card);
	}

	return result;
}

/**
 * Exposes the cards in deck and the dealt cards
*/
CardDeck.prototype.print = function() {
	console.log("******Cards in Deck******");
	for (let i = 0; i < this.deck.length; i++) {
		console.log(this.deck[i]);
	}
	console.log("******Dealt Cards******");
	for (let i = 0; i < this.dealtCards.length; i++) {
		console.log(this.dealtCards[i]);
	}
}