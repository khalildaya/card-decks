const CardDeck = require("./card-deck");

c = new CardDeck();
c.shuffle();
for (let i = 0; i < 20; i++) {
	c.dealCard();
}
c.print();
c.shuffle();
c.print();
c.dealAllCards();
c.print();