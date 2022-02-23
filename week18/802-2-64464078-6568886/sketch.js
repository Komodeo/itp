/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 6568886
CaseNum: 802-2-64464078-6568886

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in hand_to_win from the deck and store it in the hand array.

*Write a function called buildWinningHand and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in hand_to_win add it to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 1 and end at 63.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var playing_cards = [{"type":"Spades","no":"A"},{"type":"Spades","no":"2"},{"type":"Spades","no":"3"},{"type":"Spades","no":"4"},{"type":"Spades","no":"5"},{"type":"Spades","no":"6"},{"type":"Spades","no":"7"},{"type":"Spades","no":"8"},{"type":"Spades","no":"9"},{"type":"Spades","no":"10"},{"type":"Spades","no":"J"},{"type":"Spades","no":"Q"},{"type":"Spades","no":"K"},{"type":"Clubs","no":"A"},{"type":"Clubs","no":"2"},{"type":"Clubs","no":"3"},{"type":"Clubs","no":"4"},{"type":"Clubs","no":"5"},{"type":"Clubs","no":"6"},{"type":"Clubs","no":"7"},{"type":"Clubs","no":"8"},{"type":"Clubs","no":"9"},{"type":"Clubs","no":"10"},{"type":"Clubs","no":"J"},{"type":"Clubs","no":"Q"},{"type":"Clubs","no":"K"},{"type":"Hearts","no":"A"},{"type":"Hearts","no":"2"},{"type":"Hearts","no":"3"},{"type":"Hearts","no":"4"},{"type":"Hearts","no":"5"},{"type":"Hearts","no":"6"},{"type":"Hearts","no":"7"},{"type":"Hearts","no":"8"},{"type":"Hearts","no":"9"},{"type":"Hearts","no":"10"},{"type":"Hearts","no":"J"},{"type":"Hearts","no":"Q"},{"type":"Hearts","no":"K"},{"type":"Diamonds","no":"A"},{"type":"Diamonds","no":"2"},{"type":"Diamonds","no":"3"},{"type":"Diamonds","no":"4"},{"type":"Diamonds","no":"5"},{"type":"Diamonds","no":"6"},{"type":"Diamonds","no":"7"},{"type":"Diamonds","no":"8"},{"type":"Diamonds","no":"9"},{"type":"Diamonds","no":"10"},{"type":"Diamonds","no":"J"},{"type":"Diamonds","no":"Q"},{"type":"Diamonds","no":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var hand_to_win = [{"suit":"Spades","n":"K"},{"suit":"Spades","n":"J"},{"suit":"Diamonds","n":"K"},{"suit":"Hearts","n":"J"},{"suit":"Spades","n":"10"}];
var hand =[];

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

	//call your buildWinningHand function here

}

//write your buildWinningHand function here

//write your shuffleSeed() function here.

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playing_cards.length; j++)
	   {
		  var tempCard = playing_cards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playing_cards.splice(newLoc, 0, tempCard[0]);
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
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
			if (card.no == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
