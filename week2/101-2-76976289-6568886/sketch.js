/*

Officer: 6568886
CaseNum: 101-2-76976289-6568886

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Dark Red filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Royal Blue filled
rectangle around him.

Identify the man in the striped top by drawing a Dark Blue filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload() {
	img = loadImage('img.jpg');
}

function setup() {
	createCanvas(img.width, img.height);
	noStroke();
}

function draw() {
	image(img, 0, 0);

	//Write your code below here ...

	//Anna
	fill(139, 0, 0, 100);
	rect(168, 360, 287, 583);

	//overalls
	fill(65, 105, 225, 100);
	rect(688, 406, 489, 520);

	//stripes
	fill(0, 0, 139, 100);
	rect(1124, 103, 69, 185);


}
