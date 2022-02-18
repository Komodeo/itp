/*

Officer: 6568886
CaseNum: 701-2-73352171-6568886

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from lakesha niemela. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. I remember they had a bull tattoo. They had ginger hair. They seemed to be between the age of 36 and 72 years old. They wore black glasses. They were fairly tall, I think between a height of 165 and 192 cm. It was so scary! The person I saw was male. They brobably weigh between 78 and 85 kg. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. It was so scary! Can I go home now Sir? 

*/

var suspectList = [
	{ 
		"name": "RANDEE PHINNEY",
		"gender": "male",
		"tattoo": "dark black",
		"hair": "long white",
		"glasses": "red",
		"age": 39,
		"weight": 66,
		"height": 155
	},
	{ 
		"name": "LINETTE MAUBERT",
		"gender": "male",
		"tattoo": "chinese lettering",
		"hair": "white",
		"glasses": "light tan",
		"age": 41,
		"weight": 79,
		"height": 181
	},
	{ 
		"name": "JESUS JACQUELIN",
		"gender": "female",
		"tattoo": "ox",
		"hair": "red",
		"glasses": "very thick",
		"age": 39,
		"weight": 73,
		"height": 170
	},
	{ 
		"name": "PIERRE SYMMES",
		"gender": "female",
		"tattoo": "facial",
		"hair": "thin blond",
		"glasses": "very thin",
		"age": 22,
		"weight": 71,
		"height": 162
	},
	{ 
		"name": "BRIDGET TINTLE",
		"gender": "male",
		"tattoo": "bull",
		"hair": "ginger",
		"glasses": "black",
		"age": 38,
		"weight": 82,
		"height": 176
	},
	{ 
		"name": "DRUSILLA DAVISWOOD",
		"gender": "female",
		"tattoo": "jellyfish",
		"hair": "thick black",
		"glasses": "blue",
		"age": 40,
		"weight": 69,
		"height": 165
	},
	{ 
		"name": "LESLEY FORSLIN",
		"gender": "female",
		"tattoo": "big arrow",
		"hair": "no",
		"glasses": "cheap plastic",
		"age": 39,
		"weight": 74,
		"height": 167
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

// Declare your function here



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    let matchingProperties = matchSuspect(suspectList[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectList[i].name, 60, 60 + i * 20);
  }
}
