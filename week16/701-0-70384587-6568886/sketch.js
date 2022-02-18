/*

Officer: 6568886
CaseNum: 701-0-70384587-6568886

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist louise crome and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. It's hard to say. They were wearing a green army coat. They had thick black hair. I'll never forget their grey eyes. It was so scary! That's all I know officer. 

*/

var suspectsLog = [
	{ 
		"name": "DRUSILLA DORCEY",
		"coat": "black overcoat",
		"hair": "dark brown",
		"eyes": "green"
	},
	{ 
		"name": "LESLEY PEGORD",
		"coat": "green army coat",
		"hair": "thick black",
		"eyes": "grey"
	},
	{ 
		"name": "BRAD MONKSFORD",
		"coat": "red parka",
		"hair": "short black",
		"eyes": "blue"
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

function matchSuspect(suspectObj) {
	if (suspectObj.coat == "green army coat" && suspectObj.hair == "thick black" && suspectObj.eyes == "grey") {
		return true;
	}
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsLog.length; i++){
    if(matchSuspect(suspectsLog[i]) == true){
      fill(255,0,0);
      text(suspectsLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
