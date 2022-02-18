/*

Officer: 6568886
CaseNum: 701-3-36437373-6568886

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from bridget dorcey.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspectTraits function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They wore light tan glasses. They seemed to be between the age of 38 and 72 years old. They were fairly tall, I think between a height of 151 and 190 cm. They had red hair. It's so hard to remember right now. They brobably weigh between 69 and 72 kg. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. It's so hard to remember right now. I remember they had a dark black tattoo. It's hard to say. Their expression seemed empty. They were carrying a big black envelope. I hope I never have to go through that again. 

*/

var suspectList = [
	{ 
		"name": "TAMICA JOYER",
		"item": "dotted necktie",
		"tattoo": "chinese lettering",
		"hair": "dark brown",
		"expression": "nerveous",
		"age": 46,
		"weight": 81,
		"height": 152
	},
	{ 
		"name": "NICOLE OORIN",
		"item": "orange socks",
		"tattoo": "big arrow",
		"hair": "shaved",
		"expression": "menacing",
		"age": 42,
		"weight": 78,
		"height": 183
	},
	{ 
		"name": "SUMMER SYMMES",
		"item": "pink scarf",
		"tattoo": "anchor",
		"hair": "long white",
		"expression": "confused",
		"age": 48,
		"weight": 69,
		"height": 177
	},
	{ 
		"name": "LINETTE MONKSFORD",
		"item": "net weave shirt",
		"tattoo": "jellyfish",
		"hair": "ginger",
		"expression": "sad",
		"age": 37,
		"weight": 54,
		"height": 178
	},
	{ 
		"name": "LOUISE DEAUVILLE",
		"item": "fur vest",
		"tattoo": "dragon",
		"hair": "white",
		"expression": "menacing",
		"age": 21,
		"weight": 70,
		"height": 181
	},
	{ 
		"name": "RANDEE MAUBERT",
		"item": "red necktie",
		"tattoo": "dark black",
		"hair": "red",
		"expression": "empty",
		"age": 40,
		"weight": 70,
		"height": 154
	},
	{ 
		"name": "JESUS MYRLE",
		"item": "purple hat",
		"tattoo": "facial",
		"hair": "short black",
		"expression": "angry",
		"age": 46,
		"weight": 74,
		"height": 178
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare both your functions here

function checkSuspectTraits(suspectObj){
	var matches;
	if (suspectObj.age >= 38 && suspectObj.age <= 72) {
		matches++;
	}
	if (suspectObj.height >= 151 && suspectObj.height <= 190) {
		matches++;
	}
	if (suspectObj.hair == "red") {
		matches++;
	}
	if (suspectObj.weight >= 69 && suspectObj.weight <= 72) {
		matches++;
	}
	if (suspectObj.item == "red necktie") {
		matches++;
	}
	if (suspectObj.tattoo == "dark black") {
		matches++;
	}
	if (suspectObj.expression == "empty") {
		matches++;
	}
	return matches;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(findGuilty().name + " is guilty!", 60, 80);
}
