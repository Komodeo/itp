/*

Officer: 6568886
CaseNum: 202-0-60913428-6568886

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Salmon text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(627,616);
	textFont(letterFont);
	textSize(31);
}

function draw()
{
	background(255);

	fill(238,130,238);
	//text("since", 17,232);
	fill(255,0,255);
	//text("May", 139,198);
	//text("darlin", 23,266);
	fill(218,165,32);
	//text("?", 444,198);
	//text("From", 395,93);
	fill(127,255,212);
	//text("are", 70,93);
	fill(107,142,35);
	//text("sunny", 168,93);
	fill(152,251,152);
	//text("I", 171,125);
	fill(128,128,0);
	//text("were", 426,164);
	//text("Bob", 17,491);
	fill(165,42,42);
	//text("Oh", 17,31);
	fill(34,139,34);
	//text("the", 60,300);
	fill(186,85,211);
	//text("quiet", 114,300);
	fill(199,21,133);
	//text("I", 249,232);
	//text("g,", 81,266);
	//text("true", 17,198);
	fill(135,206,250);
	//text("voice", 405,300);
	fill(186,85,211);
	//text("one", 543,164);
	fill(0,139,139);
	//text("ely", 342,125);
	//text("my", 497,164);
	fill(128,0,128);
	//text("the", 499,333);
	fill(127,255,0);
	//text("love.", 76,198);
	fill(65,105,225);
	//text("your", 348,300);
	fill(135,206,235);
	//text("I", 425,266);
	//text("I", 199,198);
	fill(0,0,128);
	//text("you", 377,164);
	fill(218,165,32);
	//text("the", 532,300);
	//text("think", 391,232);
	fill(173,216,230);
	//text("x", 77,491);
	fill(255,215,0);
	//text("of", 459,232);
	fill(218,112,214);
	//text("blessed", 21,333);
	//text("that", 320,164);
	fill(238,232,170);
	//text("Ever", 478,198);
	fill(135,206,250);
	//text("I", 468,125);
	fill(255,255,0);
	//text("last", 131,232);
	fill(144,238,144);
	//text("your", 404,367);
	fill(139,69,19);
	//text("alive", 198,367);
	fill(65,105,225);
	//text("first", 516,93);
	fill(173,216,230);
	//text("I", 322,367);
	fill(255,69,0);
	//text("I", 353,333);
	fill(219,112,147);
	//text("our", 87,232);
	//text("and", 84,429);
	fill(210,105,30);
	//text("in", 296,93);
	fill(139,69,19);
	//text("eyes.", 199,266);
	fill(148,0,211);
	//text("kisses,", 139,429);
	//text("knew", 506,125);
	//text("am", 463,266);
	fill(255,69,0);
	//text("that", 188,300);
	fill(255,140,0);
	//text("face,", 393,125);
	fill(154,205,50);
	//text("can", 287,232);
	fill(0,250,154);
	//text("harp.", 289,333);
	fill(135,206,235);
	//text("those", 88,164);
	fill(0,0,205);
	//text("am", 360,367);
	fill(128,0,0);
	//text("from", 22,164);
	//text("moment", 21,125);
	fill(0,191,255);
	//text("person", 118,367);
	fill(0,128,128);
	//text("s", 294,164);
	fill(100,149,237);
	//text("your", 501,232);
	fill(72,209,204);
	//text("luckiest", 24,367);
	//text("Daisy,", 140,31);
	fill(0,206,209);
	//text("your", 260,125);
	fill(255,127,80);
	//text("hear", 283,300);
	fill(255,105,180);
	//text("like", 475,300);
	fill(250,128,114);
	text("date", 181,232);
	text("is", 321,266);
	text("April", 331,93);
	fill(0,255,127);
	//text("must", 391,333);
	fill(205,133,63);
	//text("the", 235,333);
	//text("when", 354,266);
	fill(0,100,0);
	//text("the", 462,93);
	//text("day", 239,93);
	fill(186,85,211);
	//text("only", 336,232);
	fill(50,205,50);
	//text("make", 237,198);
	fill(148,0,211);
	//text("that", 114,125);
	fill(250,128,114);
	text("chosen", 461,367);
	text("second", 223,164);
	text("a", 292,198);
	fill(72,209,204);
	//text("of", 193,333);
	fill(0,206,209);
	//text("alone", 507,266);
	fill(0,128,128);
	//text("Love", 17,429);
	fill(0,0,205);
	//text("green", 117,266);
	//text("music", 124,333);
	fill(139,0,0);
	//text("lovely", 64,31);
	//text("in", 25,300);
	fill(0,128,0);
	//text("be", 451,333);
	fill(0,0,139);
	//text("that", 265,367);
	fill(25,25,112);
	//text("You", 17,93);
	fill(0,191,255);
	//text("lov", 317,125);
	fill(123,104,238);
	//text("few", 160,164);
	//text("my", 122,93);
	fill(0,128,0);
	//text("saw", 209,125);
	fill(0,128,128);
	//text("confession", 320,198);
	fill(222,184,135);
	//text("I", 245,300);
	//text("It", 275,266);



}
