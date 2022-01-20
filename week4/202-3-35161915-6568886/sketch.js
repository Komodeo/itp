/*

Officer: 6568886
CaseNum: 202-3-35161915-6568886

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Red filled text with a Dark Cyan outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(522,342);
	textSize(22);
}

function draw()
{
	background(255);

	push();
	fill(0,0,139);
	stroke(255,0,255);
	textFont(Diggity);
	//text("Is", 363,66);
	pop();
	fill(124,252,0);
	stroke(0,128,0);
	textFont(Melissa);
	//text("you", 104,89);
	push();
	fill(75,0,130);
	stroke(139,0,139);
	textFont(RonsFont);
	//text("darling", 36,22);
	pop();
	textFont(RonsFont);
	//text("you", 275,112);
	fill(0,0,139);
	stroke(160,82,45);
	//text("much", 88,163);
	fill(30,144,255);
	stroke(0,139,139);
	//text("break", 12,112);
	fill(255,69,0);
	stroke(128,0,128);
	textFont(Melissa);
	//text("so", 233,136);
	fill(238,232,170);
	stroke(0,255,127);
	textFont(Diggity);
	//text("?", 202,89);
	push();
	fill(124,252,0);
	stroke(25,25,112);
	//text("sure", 12,163);
	pop();
	stroke(0,255,255);
	textFont(Melissa);
	//text("are", 208,136);
	fill(0,255,0);
	stroke(0,0,128);
	textFont(Diggity);
	//text("?", 430,112);
	fill(0,255,255);
	stroke(0,255,255);
	//text("x", 44,251);
	fill(210,105,30);
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("all", 180,112);
	fill(255,127,80);
	textFont(Diggity);
	//text("away", 392,89);
	fill(50,205,50);
	stroke(148,0,211);
	//text("continual", 251,66);
	fill(255,69,0);
	stroke(75,0,130);
	textFont(Melissa);
	//text("If", 447,112);
	fill(100,149,237);
	textFont(Diggity);
	//text("guarded", 253,136);
	fill(0,0,205);
	stroke(0,100,0);
	textFont(Melissa);
	//text("My", 12,22);
	fill(255,140,0);
	stroke(0,0,128);
	//text("the", 408,163);
	push();
	fill(184,134,11);
	stroke(46,139,87);
	textFont(Diggity);
	//text("Bob,", 106,22);
	pop();
	fill(0,0,139);
	stroke(75,0,130);
	textFont(RonsFont);
	//text("I", 186,163);
	push();
	fill(219,112,147);
	stroke(128,128,0);
	textFont(Melissa);
	//text("Daisy", 5,251);
	pop();
	fill(72,209,204);
	stroke(139,0,139);
	textFont(Diggity);
	//text("Are", 240,112);
	fill(218,165,32);
	stroke(0,191,255);
	textFont(RonsFont);
	//text("I'm", 400,136);
	fill(255,0,255);
	stroke(210,105,30);
	//text("not", 440,136);
	fill(128,0,0);
	stroke(0,255,255);
	textFont(Diggity);
	//text("a", 477,89);
	fill(240,128,128);
	stroke(128,128,0);
	textFont(Ballpointprint);
	//text("this", 141,112);
	fill(255,0,0);
	stroke(0,255,0);
	textFont(RonsFont);
	//text("these", 200,66);
	fill(128,0,0);
	stroke(25,25,112);
	//text("send", 77,136);
	fill(219,112,147);
	stroke(46,139,87);
	textFont(Diggity);
	//text("Are", 69,89);
	fill(135,206,250);
	stroke(0,100,0);
	//text("The", 303,163);
	fill(127,255,212);
	stroke(0,255,255);
	textFont(Melissa);
	//text("short", 313,112);
	fill(218,112,214);
	stroke(128,0,0);
	textFont(Ballpointprint);
	//text("I", 12,136);
	push();
	fill(255,165,0);
	stroke(0,0,205);
	//text("can", 205,163);
	pop();
	stroke(255,0,0);
	textFont(Melissa);
	//text("our", 381,66);
	fill(0,255,255);
	stroke(165,42,42);
	textFont(Ballpointprint);
	//text("should", 312,89);
	fill(128,0,128);
	stroke(128,128,0);
	textFont(Diggity);
	//text("silence.", 434,163);
	fill(135,206,250);
	stroke(255,255,0);
	textFont(Ballpointprint);
	//text("can", 36,66);
	fill(139,0,0);
	stroke(0,250,154);
	textFont(Diggity);
	//text("s", 318,136);
	fill(128,128,0);
	stroke(148,0,211);
	//text("no", 71,66);
	fill(250,128,114);
	stroke(255,0,255);
	textFont(RonsFont);
	//text("relationship", 404,66);
	push();
	fill(128,128,0);
	stroke(220,20,60);
	textFont(Diggity);
	//text("out.", 206,112);
	pop();
	stroke(107,142,35);
	//text("take", 240,163);
	push();
	fill(139,69,19);
	stroke(128,128,0);
	textFont(Melissa);
	//text("and", 70,112);
	pop();
	stroke(255,255,0);
	textFont(Diggity);
	//text("how", 51,163);
	fill(220,20,60);
	stroke(128,128,0);
	textFont(Melissa);
	//text("of", 353,112);
	fill(255,0,0);
	stroke(0,139,139);
	textFont(RonsFont);
	text("go", 367,89);
	text("safe", 9,89);
	text("ignore", 140,66);
	fill(0,0,205);
	stroke(127,255,0);
	textFont(Melissa);
	//text("delays.", 318,66);
	fill(65,105,225);
	stroke(0,128,128);
	textFont(Diggity);
	//text("ometimes.", 325,136);
	fill(250,128,114);
	stroke(46,139,87);
	textFont(Ballpointprint);
	//text("s,", 386,163);
	fill(0,255,127);
	stroke(255,140,0);
	textFont(Melissa);
	//text("?", 291,163);
	fill(0,100,0);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("You", 171,136);
	fill(255,0,0);
	stroke(0,139,139);
	textFont(RonsFont);
	text("for", 439,89);
	text("cash", 127,136);
	push();
	fill(160,82,45);
	stroke(255,0,255);
	//text("?", 53,89);
	pop();
	fill(0,0,255);
	stroke(50,205,50);
	textFont(Melissa);
	//text("avoiding", 128,89);
	fill(199,21,133);
	stroke(107,142,35);
	textFont(RonsFont);
	//text("can", 39,136);
	fill(255,127,80);
	stroke(255,0,255);
	//text("Perhaps", 219,89);
	fill(0,255,127);
	stroke(0,255,255);
	textFont(Ballpointprint);
	//text("secret", 338,163);
	push();
	fill(218,165,32);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("so,", 465,112);
	pop();
	fill(0,128,0);
	stroke(0,100,0);
	textFont(RonsFont);
	//text("Forever", 9,207);
	push();
	fill(0,128,128);
	stroke(0,0,139);
	//text("money", 372,112);
	pop();
	fill(25,25,112);
	stroke(139,69,19);
	textFont(Diggity);
	//text("longer", 94,66);
	fill(135,206,250);
	stroke(0,255,255);
	textFont(Melissa);
	//text("we", 288,89);
	fill(107,142,35);
	stroke(153,50,204);
	//text("me", 180,89);
	fill(240,230,140);
	stroke(127,255,0);
	textFont(Ballpointprint);
	//text("I", 9,66);
	fill(138,43,226);
	stroke(210,105,30);
	textFont(Melissa);
	//text("yours,", 81,207);
	fill(123,104,238);
	stroke(0,0,205);
	textFont(RonsFont);
	//text("sort", 95,112);
	fill(50,205,50);
	stroke(165,42,42);
	textFont(Ballpointprint);
	//text("more", 140,163);



}
