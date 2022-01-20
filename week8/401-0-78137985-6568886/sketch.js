/*

Officer: 6568886
CaseNum: 401-0-78137985-6568886

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If hemlock dips below 0.36, decrement sulphates by 0.03
	- When sarin dips below 0.31, increment sulphates by 0.01
	- When sarin dips below 0.36, decrement plasma by 0.05
	- When hemlock dips below 0.33, raise plasma by 0.01
	- If sarin goes above 0.62, reduce chalk by 0.03
	- When ricin goes above 0.66, try increasing chalk by 0.04


Your conditional statements should:

consider the following poisons:

	- hemlock
	- ricin
	- sarin


and modify the following antidotes:

	- sulphates
	- plasma
	- chalk


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var hemlock;
var ricin;
var sarin;


//Declare the antidote variables
var sulphates;
var plasma;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	hemlock = 0.5;
	ricin = 0.5;
	sarin = 0.5;
	sulphates = 0.5;
	plasma = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 3; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	if (hemlock < 0.36) {
		sulphates -= 0.03;
	}

	if (sarin < 0.31) {
		sulphates += 0.01;
	}

	if (sarin < 0.36) {
		plasma -= 0.05;
	}

	if (hemlock < 0.33) {
		plasma += 0.01;
	}

	if (sarin > 0.62) {
		chalk -= 0.03;
	}

	if (ricin > 0.66) {
		chalk += 0.04;
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	hemlock = nextValue(graphs[0], hemlock);
	ricin = nextValue(graphs[1], ricin);
	sarin = nextValue(graphs[2], sarin);


	sulphates = constrain(sulphates, 0, 1);
	plasma = constrain(plasma, 0, 1);
	chalk = constrain(chalk, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(255, 0, 255),
		color(255, 255, 0),
		color(0, 255, 255)
	];

	for (var i = 0; i < graphs.length; i++) {
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('hemlock: ' + nf(hemlock, 1, 2), 20, 20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin, 1, 2), 20, 40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin, 1, 2), 20, 60);


	//draw the antidotes bar chart
	drawBar(sulphates, 50, 'sulphates');
	drawBar(plasma, 200, 'plasma');
	drawBar(chalk, 350, 'chalk');


}

function nextValue(graph, val) {
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03, 0.03);

	val += delta;
	if (val > 1 || val < 0) {
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph) {
	//draws an array as a graph
	beginShape();
	for (var i = 0; i < graph.length; i++) {
		vertex(width * i / 512, height * 0.5 - graph[i] * height / 3)
	}
	endShape();
}


function drawBar(val, x, name) {
	//draws the bars for bar chart
	noStroke();
	fill(0, 100, 100);
	var mh = height * 0.4 - 50;
	rect(x, (height - 50) - val * mh, 100, val * mh);
	fill(255);
	text(name + ": " + val, x, height - 20);
}
