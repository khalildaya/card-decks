const CardDeck = require("./card-deck");

c = new CardDeck();
c.shuffle();
for (let i = 0; i < 20; i++) {
	c.dealCard();
}
console.log(c);
c.shuffle();
console.log(c);
c.dealAllCards();
console.log(c);