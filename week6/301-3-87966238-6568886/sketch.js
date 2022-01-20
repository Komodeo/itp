/*
The case of the Python Syndicate
Stage 4

Officer: 6568886
CaseNum: 301-3-87966238-6568886

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;

var bonesKarpinskiObj;


//declare your new objects below

var annaKarpinskiObj;
var pawelKarpinskiObj;
var rockyKrayObj;
var cecilKarpinskiObj;
var linaLovelaceObj;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	linaLovelaceImage = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: 408,
		y: 309,
		image: bonesKarpinskiImage
	};



	//define your new objects below

	annaKarpinskiObj = {
		x: 115,
		y: 40,
		image: annaKarpinskiImage
	};

	pawelKarpinskiObj = {
		x: 408,
		y: 40,
		image: pawelKarpinskiImage
	};

	rockyKrayObj = {
		x: 701,
		y: 40,
		image: rockyKrayImage
	};

	cecilKarpinskiObj = {
		x: 115,
		y: 309,
		image: cecilKarpinskiImage
	};

	linaLovelaceObj = {
		x: 701,
		y: 309,
		image: linaLovelaceImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(rockyKrayObj.image, rockyKrayObj.x, rockyKrayObj.y);
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	image(linaLovelaceObj.image, linaLovelaceObj.x, linaLovelaceObj.y);


}