/*

Officer: 6568886
CaseNum: 502-1-91704078-6568886

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var Listing_A = [
	{Element_0: "start", Element_1: "sneeze", Element_2: "charge"}, 
	{Element_0: "charge", Element_1: "consider", Element_2: "mend"}, 
	{Element_0: "protect", Element_1: "rejoice", Element_2: "sail"}, 
	{Element_0: "radiate", Element_1: "Governor Zuckerberg", Element_2: "smile"}, 
	{Element_0: "Hopper’s", Element_1: "sail", Element_2: "protect"}, 
	{Element_0: "meddle", Element_1: "fence", Element_2: "charge"}, 
	{Element_0: "succeed", Element_1: "romantic", Element_2: "protect"}, 
	{Element_0: "charge", Element_1: "protect", Element_2: "consider"}, 
	{Element_0: "smile", Element_1: "consider", Element_2: "delicate"}, 
	{Element_0: "sail", Element_1: "tug", Element_2: "mend"}
];

var Listing_B = [
	{Element_0: "hurry", Element_1: "play", Element_2: "tug"}, 
	{Element_0: "sneeze", Element_1: "protect", Element_2: "tug"}, 
	{Element_0: "hurry", Element_1: "fence", Element_2: "rejoice"}, 
	{Element_0: "a donation", Element_1: "succeed", Element_2: "stuff"}, 
	{Element_0: "she has", Element_1: "clip", Element_2: "plug"}, 
	{Element_0: "succeed", Element_1: "capital", Element_2: "consider"}, 
	{Element_0: "plug", Element_1: "COBOL", Element_2: "syndicate"}, 
	{Element_0: "tug", Element_1: "meddle", Element_2: "protect"}, 
	{Element_0: "protect", Element_1: "Edsger", Element_2: "mend"}, 
	{Element_0: "meddle", Element_1: "fence", Element_2: "stuff"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest " + Listing_B[8].Element_1 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + Listing_A[4].Element_0 + " intervention. I suspect that " + Listing_B[4].Element_0 + " a " + Listing_A[6].Element_1 + " interest at the " + Listing_B[6].Element_1 + ". I and the " + Listing_B[6].Element_2 + " appreciate your many contributions over the years. However, this is a most " + Listing_A[8].Element_2 + " matter which would require significant " + Listing_B[5].Element_1 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + Listing_B[3].Element_0 + " to my forthcoming campaign would help. Yours sincerely, " + Listing_A[3].Element_1 + "";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
