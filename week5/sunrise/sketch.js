var groundHeight;
var mountain1;
var mountain2;
var mountain3;

var tree;

var moon;
var sun;
var darkness;
var darknessMax;

var star1;
var star2;
var star3;
var star4;
var star5;

function setup() {
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 525,
		y: groundHeight,
		height: 200,
		width: 130
	};
	mountain3 = {
		x: 550,
		y: groundHeight,
		height: 250,
		width: 250
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

	//initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};

	//TASK: intialise a moon object with an extra property for brightness
	moon = {
		x: 700,
		y: 70,
		diameter: 80,
		brightness: 0,
		brightnessMax: 400,
	};

	//initialise some stars

	star1 = {
		x: 500,
		y: 100,
		diameter: 5,
	};

	star2 = {
		x: 300,
		y: 200,
		diameter: 10,
	};

	star3 = {
		x: 100,
		y: 300,
		diameter: 3,
	};

	star4 = {
		x: 650,
		y: 150,
		diameter: 7,
	};

	star5 = {
		x: 75,
		y: 125,
		diameter: 8,
	};

	//set the initial darkness
	darkness = 0;
	darknessMax = 200;
}



function draw() {
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.

	darkness = constrain(mouseX / width * darknessMax, 0, darknessMax);
	brightness = constrain(mouseX / width * moon.brightnessMax, 0, moon.brightnessMax);
	sun.y = 70 + darkness * 3;

	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);

	triangle(mountain3.x, mountain3.y,
		mountain3.x + mountain3.width, mountain3.y,
		mountain3.x + (mountain3.width / 2), mountain3.y - mountain3.height);

	//TASK: You can draw the tree yourself

	//draw trunk
	fill(144, 97, 51);
	rect(tree.x, tree.y - tree.trunkHeight, tree.trunkWidth, tree.trunkHeight);

	//draw canopy
	fill(70, 200, 0);
	ellipse(tree.x + (tree.trunkWidth / 2), tree.y - tree.trunkHeight, tree.canopyWidth, tree.canopyHeight);

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it

	fill(0, 0, 0, darkness);
	rect(0, 0, width, height);

	//TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
	fill(brightness, brightness, brightness * 0.8, brightness);
	ellipse(moon.x, moon.y, moon.diameter);
	//draw the stars
	ellipse(star1.x, star1.y, star1.diameter);
	ellipse(star3.x, star3.y, star3.diameter);
	ellipse(star4.x, star4.y, star4.diameter);
	ellipse(star5.x, star5.y, star5.diameter);

	fill(brightness * 2, brightness * 0.2, brightness * 0.2, brightness);
	ellipse(star2.x, star2.y, star2.diameter);
}