/*
801
Stage 4: The Marriage of Figaro

Officer: 6568886
CaseNum: 801-3-12918189-6568886

One last chance to record the Cooley gang before the curtain comes down on the Marriage of Figaro. They might be the most influential group in console city but they still have their quirks and will be spotable thanks their trademark bobbed hair.

Our guy on the inside has only been able to provide us with the ticket stubs, they are in order and marked with true if they are in the gang. It’ll be tough but I’m sure you are up to it kid!

You’ll want to set the located property of the audience array to true when the equivalent element of the mobster is also true.

Complete the case using
For
audience[ ][ ]
You can create an additional variable if it helps.


*/

var crowdImg;
var spotlight;

var audience = [[{ "x": 50, "y": 50, "located": false }, { "x": 150, "y": 50, "located": false }, { "x": 250, "y": 50, "located": false }, { "x": 350, "y": 50, "located": false }, { "x": 450, "y": 50, "located": false }, { "x": 550, "y": 50, "located": false }, { "x": 650, "y": 50, "located": false }, { "x": 750, "y": 50, "located": false }, { "x": 850, "y": 50, "located": false }, { "x": 950, "y": 50, "located": false }], [{ "x": 50, "y": 130, "located": false }, { "x": 150, "y": 130, "located": false }, { "x": 250, "y": 130, "located": false }, { "x": 350, "y": 130, "located": false }, { "x": 450, "y": 130, "located": false }, { "x": 550, "y": 130, "located": false }, { "x": 650, "y": 130, "located": false }, { "x": 750, "y": 130, "located": false }, { "x": 850, "y": 130, "located": false }, { "x": 950, "y": 130, "located": false }], [{ "x": 50, "y": 210, "located": false }, { "x": 150, "y": 210, "located": false }, { "x": 250, "y": 210, "located": false }, { "x": 350, "y": 210, "located": false }, { "x": 450, "y": 210, "located": false }, { "x": 550, "y": 210, "located": false }, { "x": 650, "y": 210, "located": false }, { "x": 750, "y": 210, "located": false }, { "x": 850, "y": 210, "located": false }, { "x": 950, "y": 210, "located": false }], [{ "x": 50, "y": 290, "located": false }, { "x": 150, "y": 290, "located": false }, { "x": 250, "y": 290, "located": false }, { "x": 350, "y": 290, "located": false }, { "x": 450, "y": 290, "located": false }, { "x": 550, "y": 290, "located": false }, { "x": 650, "y": 290, "located": false }, { "x": 750, "y": 290, "located": false }, { "x": 850, "y": 290, "located": false }, { "x": 950, "y": 290, "located": false }], [{ "x": 50, "y": 370, "located": false }, { "x": 150, "y": 370, "located": false }, { "x": 250, "y": 370, "located": false }, { "x": 350, "y": 370, "located": false }, { "x": 450, "y": 370, "located": false }, { "x": 550, "y": 370, "located": false }, { "x": 650, "y": 370, "located": false }, { "x": 750, "y": 370, "located": false }, { "x": 850, "y": 370, "located": false }, { "x": 950, "y": 370, "located": false }], [{ "x": 50, "y": 450, "located": false }, { "x": 150, "y": 450, "located": false }, { "x": 250, "y": 450, "located": false }, { "x": 350, "y": 450, "located": false }, { "x": 450, "y": 450, "located": false }, { "x": 550, "y": 450, "located": false }, { "x": 650, "y": 450, "located": false }, { "x": 750, "y": 450, "located": false }, { "x": 850, "y": 450, "located": false }, { "x": 950, "y": 450, "located": false }], [{ "x": 50, "y": 530, "located": false }, { "x": 150, "y": 530, "located": false }, { "x": 250, "y": 530, "located": false }, { "x": 350, "y": 530, "located": false }, { "x": 450, "y": 530, "located": false }, { "x": 550, "y": 530, "located": false }, { "x": 650, "y": 530, "located": false }, { "x": 750, "y": 530, "located": false }, { "x": 850, "y": 530, "located": false }, { "x": 950, "y": 530, "located": false }], [{ "x": 50, "y": 610, "located": false }, { "x": 150, "y": 610, "located": false }, { "x": 250, "y": 610, "located": false }, { "x": 350, "y": 610, "located": false }, { "x": 450, "y": 610, "located": false }, { "x": 550, "y": 610, "located": false }, { "x": 650, "y": 610, "located": false }, { "x": 750, "y": 610, "located": false }, { "x": 850, "y": 610, "located": false }, { "x": 950, "y": 610, "located": false }], [{ "x": 50, "y": 690, "located": false }, { "x": 150, "y": 690, "located": false }, { "x": 250, "y": 690, "located": false }, { "x": 350, "y": 690, "located": false }, { "x": 450, "y": 690, "located": false }, { "x": 550, "y": 690, "located": false }, { "x": 650, "y": 690, "located": false }, { "x": 750, "y": 690, "located": false }, { "x": 850, "y": 690, "located": false }, { "x": 950, "y": 690, "located": false }], [{ "x": 50, "y": 770, "located": false }, { "x": 150, "y": 770, "located": false }, { "x": 250, "y": 770, "located": false }, { "x": 350, "y": 770, "located": false }, { "x": 450, "y": 770, "located": false }, { "x": 550, "y": 770, "located": false }, { "x": 650, "y": 770, "located": false }, { "x": 750, "y": 770, "located": false }, { "x": 850, "y": 770, "located": false }, { "x": 950, "y": 770, "located": false }]];
var mobster = [false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, true, false, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function setup() {
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw() {
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////

	//loop through first row of audience members, compare against first ten mobster tickets
	//then loop through second row, compare against second ten mobster tickets, and so on
	for (row = 0; row < audience.length; row++) {
		var startTicket = row * 10;
		for (ticket = 0; ticket < 10; ticket++) {
			if (mobster[startTicket + ticket] == true) {
				audience[row][ticket].located = true;
			}
		}
	}

	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight() {
	fill(255, 0, 0, 100);

	for (var i = 0; i < audience.length; i++) {
		for (var j = 0; j < audience[i].length; j++) {
			if (audience[i][j].located) {
				image(spotlight, audience[i][j].x, audience[i][j].y, 100, 100);
			}
		}
	}
}
