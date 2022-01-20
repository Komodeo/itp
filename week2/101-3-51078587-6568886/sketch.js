/*

Officer: 6568886
CaseNum: 101-3-51078587-6568886

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Goldenrod filled rectangle with a Medium Blue outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Medium Aquamarine filled
rectangle with a Green outline around him.

Identify the man reading the newspaper by drawing a Olive filled rectangle
with a Chartreuse outline around him.

Identify the woman with the dog by drawing a Aqua filled rectangle with a
Saddle Brown outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
	img = loadImage('img.jpg');
}

function setup() {
	createCanvas(img.width, img.height);
	strokeWeight(2);
}

function draw() {
	image(img, 0, 0);

	//Write your code below here ...

	//Anna
	fill(184, 134, 11, 100);
	stroke(0, 0, 205);
	rect(1013, 190, 321, 663);

	//monocle
	fill(102, 205, 170, 100);
	stroke(0, 128, 0);
	rect(180, 339, 163, 213);

	//newspaper
	fill(128, 128, 0, 100);
	stroke(127, 255, 0);
	rect(596, 284, 290, 565);

	//woman with dog
	fill(0, 255, 255, 100);
	stroke(139, 69, 19);
	rect(8, 198, 162, 345);

}
