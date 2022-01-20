/*
The case of the Python Syndicate
Stage 1

Officer: 6568886
CaseNum: 301-0-75324797-6568886

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var bonesKarpinskiImg;
var linaLovelaceImg;
var cecilKarpinskiImg;
var annaKarpinskiImg;
var rockyKrayImg;
var robbieKrayImg;


//declare your new variables below
var bonesKarpinskiLocX = 115;
var bonesKarpinskiLocY = 40;

var linaLovelaceLocX = 408;
var linaLovelaceLocY = 40;

var cecilKarpinskiLocX = 701;
var cecilKarpinskiLocY = 40;

var annaKarpinskiLocX = 115;
var annaKarpinskiLocY = 309;

var rockyKrayLocX = 408;
var rockyKrayLocY = 309;

var robbieKrayLocX = 701;
var robbieKrayLocY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	linaLovelaceImg = loadImage("lina.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	robbieKrayImg = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImg, cecilKarpinskiLocX, cecilKarpinskiLocY);
	image(bonesKarpinskiImg, bonesKarpinskiLocX, bonesKarpinskiLocY);
	image(linaLovelaceImg, linaLovelaceLocX, linaLovelaceLocY);
	image(annaKarpinskiImg, annaKarpinskiLocX, annaKarpinskiLocY);
	image(rockyKrayImg, rockyKrayLocX, rockyKrayLocY);
	image(robbieKrayImg, robbieKrayLocX, robbieKrayLocY);

}