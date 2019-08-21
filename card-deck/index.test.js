"use strict";
				
const CardDeck = require("./index");
const defaultCardDeck = {
	"_deck": ["CLUBS 1", "CLUBS 2", "CLUBS 3", "CLUBS 4", "CLUBS 5", "CLUBS 6", "CLUBS 7", "CLUBS 8", "CLUBS 9", "CLUBS 10", "CLUBS JACK", "CLUBS KING", "CLUBS QUEEN", "DIAMONDS 1", "DIAMONDS 2", "DIAMONDS 3", "DIAMONDS 4", "DIAMONDS 5", "DIAMONDS 6", "DIAMONDS 7", "DIAMONDS 8", "DIAMONDS 9", "DIAMONDS 10", "DIAMONDS JACK", "DIAMONDS KING", "DIAMONDS QUEEN", "HEARTS 1", "HEARTS 2", "HEARTS 3", "HEARTS 4", "HEARTS 5", "HEARTS 6", "HEARTS 7", "HEARTS 8", "HEARTS 9", "HEARTS 10", "HEARTS JACK", "HEARTS KING", "HEARTS QUEEN", "SPADES 1", "SPADES 2", "SPADES 3", "SPADES 4", "SPADES 5", "SPADES 6", "SPADES 7", "SPADES 8", "SPADES 9", "SPADES 10", "SPADES JACK", "SPADES KING", "SPADES QUEEN"],
	"_dealtCards": []
};

describe("CardDeck", () => {
	test("Successfully create a CardDeck object based on default config", () => {
		const cardDeck = new CardDeck();
		expect(cardDeck).toMatchObject(defaultCardDeck);
	});

	test("Successfully create a CardDeck object based on custom config", () => {
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
		const cardDeck = new CardDeck(config);
		const expectedResult = {"_deck": ["EARTH 1", "EARTH 2", "EARTH 3", "EARTH 4", "EARTH 5", "EARTH CARD", "EARTH BOAT", "EARTH AIRPLANE", "WATER 1", "WATER 2", "WATER 3", "WATER 4", "WATER 5", "WATER CARD", "WATER BOAT", "WATER AIRPLANE", "FIRE 1", "FIRE 2", "FIRE 3", "FIRE 4", "FIRE 5", "FIRE CARD", "FIRE BOAT", "FIRE AIRPLANE", "WIND 1", "WIND 2", "WIND 3", "WIND 4", "WIND 5", "WIND CARD", "WIND BOAT", "WIND AIRPLANE"], "_dealtCards": []};
		expect(cardDeck).toMatchObject(expectedResult);
	});

	test("Successfully create a CardDeck object based on partial custom config", () => {
		const config = {
			cardSuits: [
				"EARTH",
				"WATER",
				"FIRE",
				"WIND",
			]
		}
		const cardDeck = new CardDeck(config);
		const expectedResult = {"_deck":["EARTH 1","EARTH 2","EARTH 3","EARTH 4","EARTH 5","EARTH 6","EARTH 7","EARTH 8","EARTH 9","EARTH 10","EARTH JACK","EARTH KING","EARTH QUEEN","WATER 1","WATER 2","WATER 3","WATER 4","WATER 5","WATER 6","WATER 7","WATER 8","WATER 9","WATER 10","WATER JACK","WATER KING","WATER QUEEN","FIRE 1","FIRE 2","FIRE 3","FIRE 4","FIRE 5","FIRE 6","FIRE 7","FIRE 8","FIRE 9","FIRE 10","FIRE JACK","FIRE KING","FIRE QUEEN","WIND 1","WIND 2","WIND 3","WIND 4","WIND 5","WIND 6","WIND 7","WIND 8","WIND 9","WIND 10","WIND JACK","WIND KING","WIND QUEEN"],"_dealtCards":[]};
		expect(cardDeck).toMatchObject(expectedResult);
	});

	test("Successfully shuffle a CardDeck object", () => {
		const cardDeck = new CardDeck();
		expect(cardDeck).toMatchObject(defaultCardDeck);
		// Take a snapshot of cards in deck before shuffling
		let cardsInDeckBeforeShuffle = cardDeck.getCardsInDeck();
		let beforeShuffle = JSON.stringify(cardsInDeckBeforeShuffle);
		cardDeck.shuffle();
		// Take a snapshot of cards in deck after shuffling
		let cardsInDeckAfterShuffle = cardDeck.getCardsInDeck();
		let afterShuffle = JSON.stringify(cardsInDeckAfterShuffle);

		// Expect too deck snapshots to be different but have same number of cards
		expect(beforeShuffle).not.toMatch(afterShuffle);
		expect(cardsInDeckBeforeShuffle.length).toEqual(cardsInDeckAfterShuffle.length);
	});

	test("Successfully deal cards", () => {
		const cardDeck = new CardDeck();
		expect(cardDeck).toMatchObject(defaultCardDeck);
		cardDeck.shuffle();
		
		// Deal 20 cards
		const dealtCards = [];
		for (let i = 0; i < 20; i++) {
			dealtCards.push(cardDeck.dealCard());
		}

		// Expect not to find any of the dealt cards among the remaining cards in deck
		const cardsInDeck = cardDeck.getCardsInDeck();
		for (let i = 0; i < dealtCards.length; i++) {
			expect(cardsInDeck.indexOf(dealtCards[i])).toEqual(-1);
		}

		// Expect to find all dealt cards
		const dealtCardsInDeck = cardDeck.getDealtCards();
		for (let i = 0; i < dealtCards.length; i++) {
			expect(dealtCardsInDeck.indexOf(dealtCards[i])).not.toEqual(-1);
		}

		// Expect dealt cards number to match exactly the dealt cards stored in CardDeck object
		expect(dealtCardsInDeck.length).toEqual(dealtCards.length);
	});

	test("Successfully deal some cards then shuffle", () => {
		const cardDeck = new CardDeck();
		expect(cardDeck).toMatchObject(defaultCardDeck);
		cardDeck.shuffle();
		for (let i = 0; i < 15; i++) {
			cardDeck.dealCard();
		}
		let dealtCards = cardDeck.getDealtCards();
		expect(dealtCards.length).toEqual(15);

		// Expect dealt cards to go back to original deck
		cardDeck.shuffle();
		dealtCards = cardDeck.getDealtCards();
		expect(dealtCards.length).toEqual(0);
	});

	test("Successfully deal all cards", () => {
		const cardDeck = new CardDeck();
		expect(cardDeck).toMatchObject(defaultCardDeck);
		cardDeck.shuffle();
		cardDeck.dealAllCards();
		const card = cardDeck.dealCard();
		
		// Expect not to have any more cards to deal
		expect(card).toBeUndefined();
	});
});