/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 6568886
CaseNum: 802-3-89336875-6568886

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.
The card you are looking for is stored in the cut_point object. Cut the deck at this exact location and they will give up their secrets.

* Using a for loop search for the card represented by cut_point in the playingCards array.
* Do this in a function called deckCut and call it from setup.
* We need to be quick to not be spotted. Make sure you use a for loop and the break statement when you find a match in the deck.
* Store the cut card and all the elements after from the playingCards array in the topOfDeck array. Do this using the JavaScript splice() function
* You’ll then need to reverse the elements in topOfDeck so that the card we cut the deck at is the last element and not the first. Unfortunatly, if we use the JavaScript inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. Do this in the deckCut after you have filled topOfDeck.


*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 3 and end at 60.
Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

*/

var playingCards = [{"type":"Spades","n":"A"},{"type":"Spades","n":"2"},{"type":"Spades","n":"3"},{"type":"Spades","n":"4"},{"type":"Spades","n":"5"},{"type":"Spades","n":"6"},{"type":"Spades","n":"7"},{"type":"Spades","n":"8"},{"type":"Spades","n":"9"},{"type":"Spades","n":"10"},{"type":"Spades","n":"J"},{"type":"Spades","n":"Q"},{"type":"Spades","n":"K"},{"type":"Clubs","n":"A"},{"type":"Clubs","n":"2"},{"type":"Clubs","n":"3"},{"type":"Clubs","n":"4"},{"type":"Clubs","n":"5"},{"type":"Clubs","n":"6"},{"type":"Clubs","n":"7"},{"type":"Clubs","n":"8"},{"type":"Clubs","n":"9"},{"type":"Clubs","n":"10"},{"type":"Clubs","n":"J"},{"type":"Clubs","n":"Q"},{"type":"Clubs","n":"K"},{"type":"Hearts","n":"A"},{"type":"Hearts","n":"2"},{"type":"Hearts","n":"3"},{"type":"Hearts","n":"4"},{"type":"Hearts","n":"5"},{"type":"Hearts","n":"6"},{"type":"Hearts","n":"7"},{"type":"Hearts","n":"8"},{"type":"Hearts","n":"9"},{"type":"Hearts","n":"10"},{"type":"Hearts","n":"J"},{"type":"Hearts","n":"Q"},{"type":"Hearts","n":"K"},{"type":"Diamonds","n":"A"},{"type":"Diamonds","n":"2"},{"type":"Diamonds","n":"3"},{"type":"Diamonds","n":"4"},{"type":"Diamonds","n":"5"},{"type":"Diamonds","n":"6"},{"type":"Diamonds","n":"7"},{"type":"Diamonds","n":"8"},{"type":"Diamonds","n":"9"},{"type":"Diamonds","n":"10"},{"type":"Diamonds","n":"J"},{"type":"Diamonds","n":"Q"},{"type":"Diamonds","n":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var cut_point = {"type":"Hearts","n":"9"};
var topOfDeck = [];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.

	//call your deckCut function here

}

//write your deckCut function here

//write your shuffleSeed() function here.

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if(i < topOfDeck.length)
		{
			drawCard(topOfDeck[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.n == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
