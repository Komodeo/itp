/*

Officer: 6568886
CaseNum: 502-3-76313354-6568886

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_paper = [
{
	part_0: ["succeed", "tug", "charge", "charge"], 
	part_1: ["bake", "charge", "bake", "fence"], 
	part_2: ["protect", "rejoice", "bake", "smile"]
},
{
	part_0: ["stuff", "Governor Zuckerberg", "tug", "tug"], 
	part_1: ["protect", "tug", "meddle", "sneeze"], 
	part_2: ["fence", "mend", "tug", "clip"]
},
{
	part_0: ["sneeze", "succeed", "consider", "succeed"], 
	part_1: ["sneeze", "start", "COBOL", "rejoice"], 
	part_2: ["ALGOL", "consider", "charge", "protect"]
},
{
	part_0: ["$200,000", "plug", "consider", "radiate"], 
	part_1: ["sail", "plug", "rejoice", "plug"], 
	part_2: ["charge", "rejoice", "consider", "play"]
},
{
	part_0: ["smile", "start", "Edsger", "protect"], 
	part_1: ["hurry", "syndicate", "sneeze", "start"], 
	part_2: ["stuff", "mend", "charge", "consider"]
}];

var B_paper = [
{
	part_0: ["mend", "succeed", "protect", "smile"], 
	part_1: ["sail", "radiate", "charge", "meddle"], 
	part_2: ["radiate", "stuff", "sail", "development"]
},
{
	part_0: ["sneeze", "radiate", "tug", "mend"], 
	part_1: ["hurry", "charge", "clip", "mend"], 
	part_2: ["hurry", "donation", "stuff", "start"]
},
{
	part_0: ["smile", "smile", "plug", "mend"], 
	part_1: ["clip", "tug", "mend", "rejoice"], 
	part_2: ["succeed", "smile", "meddle", "meddle"]
},
{
	part_0: ["clip", "play", "sail", "consider"], 
	part_1: ["sail", "succeed", "mend", "bake"], 
	part_2: ["rejoice", "radiate", "ALGOL fish wholesalers", "stuff"]
},
{
	part_0: ["sail", "you", "stuff", "tug"], 
	part_1: ["hurry", "stuff", "meddle", "fence"], 
	part_2: ["start", "hurry", "clip", "succeed"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest " + A_paper[4].part_0[2] + ", I have just received your very generous " + B_paper[1].part_2[1] + " of " + A_paper[3].part_0[0] + ". Thank you. This will be invaluable to our campaign. " + A_paper[2].part_2[0] + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + B_paper[4].part_0[1] + " or " + B_paper[3].part_2[2] + " to the " + A_paper[4].part_1[1] + ". Your new " + B_paper[0].part_2[3] + " at the " + A_paper[2].part_1[2] + " can now proceed without impediment. Yours sincerely, " + A_paper[1].part_0[1] + "";

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
