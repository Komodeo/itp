/*
The case of the Python Syndicate
Stage 3


Officer: 6568886
CaseNum: 301-2-47321610-6568886

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Cecil karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rockyKrayImage;
var countessHamiltonImage;
var bonesKarpinskiImage;
var pawelKarpinskiImage;
var cecilKarpinskiImage;
var linaLovelaceImage;

var cecilKarpinskiObject;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObject = {
		x: 408,
		y: 309,
		image: cecilKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(rockyKrayImage, cecilKarpinskiObject.x - 293, cecilKarpinskiObject.y - 269);
	image(countessHamiltonImage, cecilKarpinskiObject.x, cecilKarpinskiObject.y - 269);
	image(bonesKarpinskiImage, cecilKarpinskiObject.x + 293, cecilKarpinskiObject.y - 269);
	image(pawelKarpinskiImage, cecilKarpinskiObject.x - 293, cecilKarpinskiObject.y);
	image(linaLovelaceImage, cecilKarpinskiObject.x + 293, cecilKarpinskiObject.y);

}