/*

Officer: 6568886
CaseNum: 401-1-70639470-6568886

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If snakeVenom dips below 0.3, decrement hydrochloric_acid by 0.01
	- When DeadlyNightshade goes above 0.38, try increasing hydrochloric_acid by 0.04
	- If snakeVenom goes above 0.47 or hemlock goes above 0.61, decrease paracetamol by 0.01
	- When DeadlyNightshade goes above 0.44, try increasing paracetamol by 0.04
	- If ricin goes above 0.7, reduce methylene by 0.01
	- When snakeVenom dips below 0.37 or hemlock goes above 0.75, raise methylene by 0.02
	- If DeadlyNightshade goes above 0.37, decrease glucagon by 0.05
	- When hemlock goes above 0.72 or ricin goes above 0.41, increase glucagon by 0.05


Your conditional statements should:

consider the following poisons:

	- snakeVenom
	- hemlock
	- ricin
	- DeadlyNightshade


and modify the following antidotes:

	- hydrochloric_acid
	- paracetamol
	- methylene
	- glucagon


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var snakeVenom;
var hemlock;
var ricin;
var DeadlyNightshade;


//Declare the antidote variables
var hydrochloric_acid;
var paracetamol;
var methylene;
var glucagon;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	snakeVenom = 0.5;
	hemlock = 0.5;
	ricin = 0.5;
	DeadlyNightshade = 0.5;
	hydrochloric_acid = 0.5;
	paracetamol = 0.5;
	methylene = 0.5;
	glucagon = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 4; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	if (snakeVenom < 0.3) {
		hydrochloric_acid -= 0.01;
	}

	if (DeadlyNightshade > 0.38) {
		hydrochloric_acid += 0.04;
	}

	if (snakeVenom > 0.47 || hemlock > 0.61) {
		paracetamol -= 0.01;
	}

	if (DeadlyNightshade > 0.44) {
		paracetamol += 0.04;
	}

	if (ricin > 0.7) {
		methylene -= 0.01;
	}

	if (snakeVenom < 0.37 || hemlock > 0.75) {
		methylene += 0.02;
	}

	if (DeadlyNightshade > 0.37) {
		glucagon -= 0.05;
	}

	if (hemlock > 0.72 || ricin > 0.41) {
		glucagon += 0.05;
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	snakeVenom = nextValue(graphs[0], snakeVenom);
	hemlock = nextValue(graphs[1], hemlock);
	ricin = nextValue(graphs[2], ricin);
	DeadlyNightshade = nextValue(graphs[3], DeadlyNightshade);


	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	methylene = constrain(methylene, 0, 1);
	glucagon = constrain(glucagon, 0, 1);


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
	text('snakeVenom: ' + nf(snakeVenom, 1, 2), 20, 20);
	fill(colors[1]);
	text('hemlock: ' + nf(hemlock, 1, 2), 20, 40);
	fill(colors[2]);
	text('ricin: ' + nf(ricin, 1, 2), 20, 60);
	fill(colors[3]);
	text('DeadlyNightshade: ' + nf(DeadlyNightshade, 1, 2), 20, 80);


	//draw the antidotes bar chart
	drawBar(hydrochloric_acid, 50, 'hydrochloric_acid');
	drawBar(paracetamol, 200, 'paracetamol');
	drawBar(methylene, 350, 'methylene');
	drawBar(glucagon, 500, 'glucagon');


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
