/*

Officer: 6568886
CaseNum: 502-2-89557940-6568886

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_censored = {
	redactedWord_0: [ "tug", "radiate", "protect"], 
	redactedWord_1: [ "hit", "charge", "clip"], 
	redactedWord_2: [ "hurry", "Hopper", "bake"], 
	redactedWord_3: [ "radiate", "campaign", "succeed"], 
	redactedWord_4: [ "Edsger", "sail", "mend"], 
	redactedWord_5: [ "charge", "rejoice", "consider"], 
	redactedWord_6: [ "stuff", "hurry", "a donation"], 
	redactedWord_7: [ "sail", "succeed", "start"], 
	redactedWord_8: [ "clip", "consider", "hurry"], 
	redactedWord_9: [ "sail", "charge", "stuff"]
};

var B_censored = {
	redactedWord_0: [ "clip", "radiate", "meddle"], 
	redactedWord_1: [ "stuff", "sneeze", "protect"], 
	redactedWord_2: [ "protect", "start", "$200,000"], 
	redactedWord_3: [ "protect", "sneeze", "protect"], 
	redactedWord_4: [ "Governor Zuckerberg", "tug", "meddle"], 
	redactedWord_5: [ "play", "bake", "ALGOL"], 
	redactedWord_6: [ "tug", "fence", "start"], 
	redactedWord_7: [ "stuff", "plug", "succeed"], 
	redactedWord_8: [ "syndicate", "rejoice", "play"], 
	redactedWord_9: [ "rejoice", "start", "play"]
};

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

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear " + B_censored.redactedWord_4[0] + ", I am sure that something could be worked out in terms of " + A_censored.redactedWord_6[2] + " for your " + A_censored.redactedWord_3[1] + ". How does " + B_censored.redactedWord_2[2] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + A_censored.redactedWord_2[1] + " needs to be out of the picture. She’s caused enough trouble. Get the " + B_censored.redactedWord_8[0] + " to organise the " + A_censored.redactedWord_1[0] + " but I’d prefer it you don’t mention me or " + B_censored.redactedWord_5[2] + ". I owe them enough favours already. Your old friend, " + A_censored.redactedWord_4[0] + "";

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
