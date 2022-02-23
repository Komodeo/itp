/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 6568886
CaseNum: 802-0-18486234-6568886

Time to pull on your best threads kid, grab a martini prepare for an evening at the Monte Carlo casino.

Our targets for this op are a gang of high rolling statisticians. They maintain an air of respectability as the board of Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are. They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

* Write a function called  selectCards.
* Using a for loop to set the marked property of the cardDeck array elements to true when the suit is Clubs or the value is 9
* Call the function from within setup

*/

var cardDeck = [{ "marked": false, "s": "Spades", "v": "A" }, { "marked": false, "s": "Spades", "v": "2" }, { "marked": false, "s": "Spades", "v": "3" }, { "marked": false, "s": "Spades", "v": "4" }, { "marked": false, "s": "Spades", "v": "5" }, { "marked": false, "s": "Spades", "v": "6" }, { "marked": false, "s": "Spades", "v": "7" }, { "marked": false, "s": "Spades", "v": "8" }, { "marked": false, "s": "Spades", "v": "9" }, { "marked": false, "s": "Spades", "v": "10" }, { "marked": false, "s": "Spades", "v": "J" }, { "marked": false, "s": "Spades", "v": "Q" }, { "marked": false, "s": "Spades", "v": "K" }, { "marked": false, "s": "Clubs", "v": "A" }, { "marked": false, "s": "Clubs", "v": "2" }, { "marked": false, "s": "Clubs", "v": "3" }, { "marked": false, "s": "Clubs", "v": "4" }, { "marked": false, "s": "Clubs", "v": "5" }, { "marked": false, "s": "Clubs", "v": "6" }, { "marked": false, "s": "Clubs", "v": "7" }, { "marked": false, "s": "Clubs", "v": "8" }, { "marked": false, "s": "Clubs", "v": "9" }, { "marked": false, "s": "Clubs", "v": "10" }, { "marked": false, "s": "Clubs", "v": "J" }, { "marked": false, "s": "Clubs", "v": "Q" }, { "marked": false, "s": "Clubs", "v": "K" }, { "marked": false, "s": "Hearts", "v": "A" }, { "marked": false, "s": "Hearts", "v": "2" }, { "marked": false, "s": "Hearts", "v": "3" }, { "marked": false, "s": "Hearts", "v": "4" }, { "marked": false, "s": "Hearts", "v": "5" }, { "marked": false, "s": "Hearts", "v": "6" }, { "marked": false, "s": "Hearts", "v": "7" }, { "marked": false, "s": "Hearts", "v": "8" }, { "marked": false, "s": "Hearts", "v": "9" }, { "marked": false, "s": "Hearts", "v": "10" }, { "marked": false, "s": "Hearts", "v": "J" }, { "marked": false, "s": "Hearts", "v": "Q" }, { "marked": false, "s": "Hearts", "v": "K" }, { "marked": false, "s": "Diamonds", "v": "A" }, { "marked": false, "s": "Diamonds", "v": "2" }, { "marked": false, "s": "Diamonds", "v": "3" }, { "marked": false, "s": "Diamonds", "v": "4" }, { "marked": false, "s": "Diamonds", "v": "5" }, { "marked": false, "s": "Diamonds", "v": "6" }, { "marked": false, "s": "Diamonds", "v": "7" }, { "marked": false, "s": "Diamonds", "v": "8" }, { "marked": false, "s": "Diamonds", "v": "9" }, { "marked": false, "s": "Diamonds", "v": "10" }, { "marked": false, "s": "Diamonds", "v": "J" }, { "marked": false, "s": "Diamonds", "v": "Q" }, { "marked": false, "s": "Diamonds", "v": "K" }];
var deck_img;
var table_img;
var drawCounter = 0;

function preload() {
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup() {
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your selectCards function here
	selectCards();
}

//write your selectCards function here
function selectCards() {
	for (i = 0; i < cardDeck.length; i++) {
		if (cardDeck[i].s == "Clubs" || cardDeck[i].v == "9") {
			cardDeck[i].marked = true;
		}
	}
}

function draw() {
	image(table_img, 0, 0);

	if (frameCount % 7 == 0) {
		drawCounter++;
		if (drawCounter == 52) {
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++) {
		if (cardDeck[i].marked) {
			drawCard(cardDeck[i], 400 + i * 18, 230);
		}
		else {
			drawCard(cardDeck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y) {

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++) {
		for (var j = 0; j < values.length; j++) {
			if (card.v == values[j] && card.s == suits[i]) {
				//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
