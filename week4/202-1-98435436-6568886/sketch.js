/*

Officer: 6568886
CaseNum: 202-1-98435436-6568886

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Spring Green filled text with a Sea Green outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(617,536);
	textFont(letterFont);
	textSize(32);
}

function draw()
{
	background(255);

	fill(139,0,0);
	stroke(0,0,205);
	//text("your", 229,280);
	fill(218,112,214);
	stroke(148,0,211);
	//text("I", 223,136);
	fill(176,224,230);
	stroke(255,165,0);
	//text("think", 263,170);
	fill(135,206,235);
	stroke(128,0,0);
	//text("?", 553,205);
	fill(255,0,255);
	stroke(34,139,34);
	//text("return.", 334,280);
	fill(220,20,60);
	stroke(255,0,255);
	//text("since", 11,136);
	fill(124,252,0);
	stroke(0,128,128);
	//text("to", 77,205);
	fill(165,42,42);
	stroke(153,50,204);
	//text("I", 51,96);
	fill(186,85,211);
	stroke(25,25,112);
	//text("the", 81,241);
	stroke(0,0,128);
	//text("this", 162,205);
	fill(50,205,50);
	stroke(107,142,35);
	//text("we", 381,205);
	fill(138,43,226);
	stroke(160,82,45);
	//text("you", 264,241);
	fill(255,140,0);
	stroke(0,0,255);
	//text("arms.", 441,136);
	fill(75,0,130);
	stroke(0,206,209);
	//text("x", 63,408);
	fill(0,100,0);
	stroke(255,0,255);
	//text("How", 368,96);
	fill(173,255,47);
	stroke(127,255,0);
	//text("?", 205,136);
	fill(0,250,154);
	stroke(255,0,0);
	//text("ging", 228,205);
	fill(127,255,0);
	stroke(165,42,42);
	//text("I'm", 97,280);
	fill(184,134,11);
	stroke(0,255,255);
	//text("it", 559,96);
	fill(250,128,114);
	stroke(128,0,0);
	//text("having", 117,96);
	fill(186,85,211);
	stroke(0,139,139);
	//text("Forever", 8,344);
	fill(0,206,209);
	stroke(0,206,209);
	//text("to", 281,136);
	fill(0,255,0);
	stroke(0,250,154);
	//text("dar", 44,32);
	fill(147,112,219);
	stroke(128,0,128);
	//text("be", 416,205);
	fill(222,184,135);
	stroke(255,255,0);
	//text("long", 240,136);
	fill(34,139,34);
	stroke(0,0,128);
	//text("the", 38,170);
	fill(0,0,255);
	stroke(255,0,255);
	//text("many", 411,96);
	//text("in", 387,136);
	fill(127,255,0);
	//text("How", 8,96);
	fill(106,90,205);
	stroke(0,100,0);
	//text("kissed", 141,136);
	fill(186,85,211);
	stroke(139,69,19);
	//text("I", 496,136);
	fill(205,133,63);
	stroke(255,69,0);
	//text("stare", 513,136);
	fill(240,230,140);
	stroke(178,34,34);
	//text("I", 209,170);
	fill(128,0,128);
	stroke(0,255,0);
	//text("store", 105,205);
	fill(160,82,45);
	stroke(255,215,0);
	//text("again", 502,205);
	fill(123,104,238);
	stroke(34,139,34);
	//text("yours,", 82,344);
	fill(184,134,11);
	stroke(255,0,0);
	//text("ling", 72,32);
	fill(139,0,0);
	stroke(0,255,0);
	//text("this", 410,241);
	fill(0,128,128);
	stroke(128,0,0);
	//text("Even", 11,241);
	fill(0,128,0);
	stroke(34,139,34);
	//text("my", 408,136);
	fill(0,255,127);
	stroke(46,139,87);
	text("place", 315,96);
	text("the", 277,96);
	text("small", 453,241);
	fill(153,50,204);
	stroke(0,0,128);
	//text("sky,", 127,170);
	fill(65,105,225);
	stroke(0,139,139);
	//text("and", 172,170);
	fill(0,100,0);
	stroke(154,205,50);
	//text("s", 119,241);
	fill(0,191,255);
	stroke(255,255,0);
	//text("my", 328,241);
	fill(222,184,135);
	stroke(154,205,50);
	//text("miss", 68,96);
	fill(255,105,180);
	stroke(46,139,87);
	//text("desolate.", 11,280);
	fill(255,99,71);
	stroke(0,128,128);
	//text("we", 63,136);
	fill(218,165,32);
	//text("without", 186,241);
	fill(240,230,140);
	stroke(124,252,0);
	//text("longer", 516,170);
	fill(0,191,255);
	stroke(0,206,209);
	//text("ited", 460,205);
	fill(0,255,255);
	stroke(255,0,0);
	//text("can", 226,170);
	fill(218,165,32);
	stroke(178,34,34);
	//text("last", 98,136);
	fill(222,184,135);
	stroke(128,0,128);
	//text("you", 351,136);
	fill(148,0,211);
	stroke(0,191,255);
	//text("My", 8,32);
	fill(25,25,112);
	stroke(255,215,0);
	//text("you", 178,96);
	fill(147,112,219);
	stroke(128,0,0);
	//text("hold", 309,136);
	fill(199,21,133);
	stroke(148,0,211);
	//text("months", 463,96);
	stroke(0,191,255);
	//text("much", 465,170);
	fill(238,130,238);
	stroke(46,139,87);
	//text("of", 355,170);
	fill(64,224,208);
	stroke(220,20,60);
	//text("in", 60,241);
	fill(0,206,209);
	stroke(0,255,255);
	//text("swift", 273,280);
	fill(139,0,139);
	stroke(0,206,209);
	//text("have", 29,205);
	fill(205,133,63);
	stroke(0,0,255);
	//text("pring,", 130,241);
	fill(219,112,147);
	stroke(124,252,0);
	//text("you.", 383,170);
	fill(65,105,225);
	stroke(0,255,0);
	//text("only", 314,170);
	fill(255,215,0);
	stroke(0,255,255);
	//text("Bob,", 107,32);
	fill(255,140,0);
	stroke(178,34,34);
	//text("do", 575,170);
	fill(0,255,127);
	stroke(255,0,255);
	//text("When", 287,205);
	fill(128,128,0);
	stroke(25,25,112);
	//text("up", 570,136);
	fill(218,112,214);
	stroke(0,100,0);
	//text("night", 76,170);
	fill(0,0,205);
	stroke(165,42,42);
	//text("sy", 34,408);
	fill(0,100,0);
	stroke(153,50,204);
	//text("I", 12,205);
	fill(255,255,0);
	stroke(255,0,255);
	//text("on", 202,280);
	fill(199,21,133);
	stroke(0,139,139);
	//text("at", 10,170);
	fill(205,133,63);
	stroke(255,255,0);
	//text("will", 343,205);
	fill(0,250,154);
	stroke(0,128,0);
	//text("feels", 556,241);
	fill(25,25,112);
	stroke(160,82,45);
	//text("How", 422,170);
	fill(255,0,255);
	stroke(32,178,170);
	//text("ing", 171,280);
	fill(100,149,237);
	stroke(0,100,0);
	//text("?", 269,205);
	//text("Dai", 8,408);
	fill(0,255,127);
	stroke(46,139,87);
	text("bank", 133,280);
	text("is", 536,96);
	fill(165,42,42);
	stroke(127,255,0);
	//text("side,", 361,241);
	fill(218,112,214);
	stroke(34,139,34);
	//text("lon", 205,205);
	fill(50,205,50);
	stroke(127,255,0);
	//text("un", 443,205);
	fill(255,69,0);
	stroke(255,0,255);
	//text("at", 300,241);
	fill(0,255,127);
	stroke(46,139,87);
	text("town", 505,241);
	fill(0,128,128);
	stroke(139,0,0);
	//text("around", 214,96);



}
