/*

Officer: 6568886
CaseNum: 701-1-58145177-6568886

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. I remember they had a anchor tattoo. They were quite big, they probably weigh more than 68 Kg. I'm not quite sure. It's hard to say. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. They were wearing a white fur coat. I'm pretty sure they were above the age of 38. Their expression seemed depressed. That's all I can remember about them. 

*/

var suspectsArray = [
	{ 
		"name": "KITTY MYRLE",
		"tattoo": "dragon",
		"coat": "green jacket",
		"expression": "menacing",
		"weight": 68,
		"age": 42
	},
	{ 
		"name": "NICOLE WILLMAR",
		"tattoo": "anchor",
		"coat": "white fur coat",
		"expression": "depressed",
		"weight": 71,
		"age": 43
	},
	{ 
		"name": "JULIANA TINTLE",
		"tattoo": "chinese lettering",
		"coat": "blue overcoat",
		"expression": "blank",
		"weight": 73,
		"age": 45
	},
	{ 
		"name": "TAMICA SYMMES",
		"tattoo": "ox",
		"coat": "green army coat",
		"expression": "confused",
		"weight": 100,
		"age": 63
	},
	{ 
		"name": "MALINDA MOHWAWK",
		"tattoo": "jellyfish",
		"coat": "black overcoat",
		"expression": "empty",
		"weight": 69,
		"age": 38
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

  for(let i = 0 ; i < suspectsArray.length; i++){
    if(checkSuspectTraits(suspectsArray[i]) == true){
      fill(255,0,0);
      text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
