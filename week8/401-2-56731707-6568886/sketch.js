/*

Officer: 6568886
CaseNum: 401-2-56731707-6568886

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When polonium dips below 0.46 and methanol goes above 0.61, reduce antibodies by 0.01
	- If arsenic goes above 0.4, whilst at the same time, warfarin goes above 0.34 or mercury dips below 0.75, increase antibodies by 0.01
	- When methanol dips below 0.36 and Nerve_Gas goes above 0.51, decrement Beta_Blocker by 0.02
	- When mercury goes above 0.52, whilst at the same time, polonium goes above 0.56 or warfarin dips below 0.69, increment Beta_Blocker by 0.05
	- When mercury dips below 0.29, arsenic goes above 0.46, and also warfarin goes above 0.4, reduce calciumChloride by 0.04
	- If Nerve_Gas goes above 0.38 and methanol dips below 0.26, or on the other hand, polonium goes above 0.52, raise calciumChloride by 0.05
	- When arsenic dips below 0.37, or on the other hand, Nerve_Gas dips below 0.73 and polonium goes above 0.31, reduce Hydrochloric_Acid by 0.02
	- When methanol goes above 0.63, mercury goes above 0.75, and also warfarin dips below 0.32, raise Hydrochloric_Acid by 0.01


Your conditional statements should:

consider the following poisons:

	- mercury
	- methanol
	- arsenic
	- polonium
	- Nerve_Gas
	- warfarin


and modify the following antidotes:

	- antibodies
	- Beta_Blocker
	- calciumChloride
	- Hydrochloric_Acid


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var mercury;
var methanol;
var arsenic;
var polonium;
var Nerve_Gas;
var warfarin;


//Declare the antidote variables
var antibodies;
var Beta_Blocker;
var calciumChloride;
var Hydrochloric_Acid;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	mercury = 0.5;
	methanol = 0.5;
	arsenic = 0.5;
	polonium = 0.5;
	Nerve_Gas = 0.5;
	warfarin = 0.5;
	antibodies = 0.5;
	Beta_Blocker = 0.5;
	calciumChloride = 0.5;
	Hydrochloric_Acid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 6; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	if (polonium < 0.46 && methanol > 0.61) {
		antibodies -= 0.01;
	}

	if (arsenic > 0.4 && (warfarin > 0.34 || mercury < 0.75)) {
		antibodies += 0.01;
	}

	if (methanol < 0.36 && Nerve_Gas > 0.51) {
		Beta_Blocker -= 0.02;
	}

	if (mercury > 0.52 && (polonium > 0.56 || warfarin < 0.69)) {
		Beta_Blocker += 0.05;
	}

	if (mercury < 0.29 && arsenic > 0.46 && warfarin > 0.4) {
		calciumChloride -= 0.04;
	}

	if (Nerve_Gas > 0.38 && methanol < 0.26 || polonium > 0.52) {
		calciumChloride += 0.05;
	}

	if (arsenic < 0.37 || Nerve_Gas < 0.73 && polonium > 0.31) {
		Hydrochloric_Acid -= 0.02;
	}

	if (methanol > 0.63 && mercury > 0.75 && warfarin < 0.32) {
		Hydrochloric_Acid += 0.01;
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	mercury = nextValue(graphs[0], mercury);
	methanol = nextValue(graphs[1], methanol);
	arsenic = nextValue(graphs[2], arsenic);
	polonium = nextValue(graphs[3], polonium);
	Nerve_Gas = nextValue(graphs[4], Nerve_Gas);
	warfarin = nextValue(graphs[5], warfarin);


	antibodies = constrain(antibodies, 0, 1);
	Beta_Blocker = constrain(Beta_Blocker, 0, 1);
	calciumChloride = constrain(calciumChloride, 0, 1);
	Hydrochloric_Acid = constrain(Hydrochloric_Acid, 0, 1);


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
	text('mercury: ' + nf(mercury, 1, 2), 20, 20);
	fill(colors[1]);
	text('methanol: ' + nf(methanol, 1, 2), 20, 40);
	fill(colors[2]);
	text('arsenic: ' + nf(arsenic, 1, 2), 20, 60);
	fill(colors[3]);
	text('polonium: ' + nf(polonium, 1, 2), 20, 80);
	fill(colors[4]);
	text('Nerve_Gas: ' + nf(Nerve_Gas, 1, 2), 20, 100);
	fill(colors[5]);
	text('warfarin: ' + nf(warfarin, 1, 2), 20, 120);


	//draw the antidotes bar chart
	drawBar(antibodies, 50, 'antibodies');
	drawBar(Beta_Blocker, 200, 'Beta_Blocker');
	drawBar(calciumChloride, 350, 'calciumChloride');
	drawBar(Hydrochloric_Acid, 500, 'Hydrochloric_Acid');


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
