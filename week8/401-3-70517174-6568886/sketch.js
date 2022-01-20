/*

Officer: 6568886
CaseNum: 401-3-70517174-6568886

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When either insecticide dips below 0.44, strychnine goes above 0.27, or perhaps ricin dips below 0.51, reduce antibodies by 0.01
	- If formaldehyde dips below 0.57 or amanitaMushrooms dips below 0.66, whilst at the same time, chlorine dips below 0.66 and methanol goes above 0.64, try increasing antibodies by 0.05
	- If snake_venom dips below 0.32 and ricin dips below 0.6, or on the other hand, insecticide goes above 0.6, decrement antitoxin by 0.03
	- If strychnine goes above 0.64 or chlorine dips below 0.63, whilst at the same time, formaldehyde goes above 0.73 or amanitaMushrooms goes above 0.47, increment antitoxin by 0.01
	- If chlorine dips below 0.3 and snake_venom dips below 0.35, or on the other hand, insecticide goes above 0.56 and methanol dips below 0.5, decrease sulphates by 0.04
	- If amanitaMushrooms dips below 0.59 or formaldehyde dips below 0.45, whilst at the same time, strychnine dips below 0.47 and ricin goes above 0.42, increment sulphates by 0.03
	- When snake_venom goes above 0.55 or methanol goes above 0.43, whilst at the same time, insecticide dips below 0.51 or ricin dips below 0.62, reduce SodiumBicarbonate by 0.01
	- When either chlorine goes above 0.73, amanitaMushrooms goes above 0.5, or perhaps formaldehyde dips below 0.33, increment SodiumBicarbonate by 0.01
	- When formaldehyde goes above 0.29, methanol dips below 0.43, chlorine dips below 0.48, and also snake_venom dips below 0.62, try decreasing calciumGluconate by 0.05
	- If ricin dips below 0.72 or strychnine goes above 0.73, whilst at the same time, amanitaMushrooms dips below 0.4 or insecticide goes above 0.55, try increasing calciumGluconate by 0.03


Your conditional statements should:

consider the following poisons:

	- insecticide
	- chlorine
	- strychnine
	- amanitaMushrooms
	- formaldehyde
	- methanol
	- ricin
	- snake_venom


and modify the following antidotes:

	- antibodies
	- antitoxin
	- sulphates
	- SodiumBicarbonate
	- calciumGluconate


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var insecticide;
var chlorine;
var strychnine;
var amanitaMushrooms;
var formaldehyde;
var methanol;
var ricin;
var snake_venom;


//Declare the antidote variables
var antibodies;
var antitoxin;
var sulphates;
var SodiumBicarbonate;
var calciumGluconate;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	chlorine = 0.5;
	strychnine = 0.5;
	amanitaMushrooms = 0.5;
	formaldehyde = 0.5;
	methanol = 0.5;
	ricin = 0.5;
	snake_venom = 0.5;
	antibodies = 0.5;
	antitoxin = 0.5;
	sulphates = 0.5;
	SodiumBicarbonate = 0.5;
	calciumGluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 8; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	if (insecticide < 0.44 || strychnine > 0.27 || ricin < 0.51) {
		antibodies -= 0.01;
	}

	if ((formaldehyde < 0.57 || amanitaMushrooms < 0.66) && (chlorine < 0.66 && methanol > 0.64)) {
		antibodies += 0.05;
	}

	if ((snake_venom < 0.32 && ricin < 0.6) || insecticide > 0.6) {
		antitoxin -= 0.03;
	}

	if ((strychnine > 0.64 || chlorine < 0.63) && (formaldehyde > 0.73 || amanitaMushrooms > 0.47)) {
		antitoxin += 0.01;
	}

	if ((chlorine < 0.3 && snake_venom < 0.35) || (insecticide > 0.56 && methanol < 0.5)) {
		sulphates -= 0.04;
	}

	if ((amanitaMushrooms < 0.59 || formaldehyde < 0.45) && (strychnine < 0.47 && ricin > 0.42)) {
		sulphates += 0.03;
	}

	if ((snake_venom > 0.55 || methanol > 0.43) && (insecticide < 0.51 || ricin < 0.62)) {
		SodiumBicarbonate -= 0.01;
	}

	if (chlorine > 0.73 || amanitaMushrooms > 0.5 || formaldehyde < 0.33) {
		SodiumBicarbonate += 0.01;
	}

	if (formaldehyde > 0.29 && methanol < 0.43 && chlorine < 0.48 && snake_venom < 0.62) {
		calciumGluconate -= 0.05;
	}

	if ((ricin < 0.72 || strychnine > 0.73) && (amanitaMushrooms < 0.4 || insecticide > 0.55)) {
		calciumGluconate += 0.03;
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0], insecticide);
	chlorine = nextValue(graphs[1], chlorine);
	strychnine = nextValue(graphs[2], strychnine);
	amanitaMushrooms = nextValue(graphs[3], amanitaMushrooms);
	formaldehyde = nextValue(graphs[4], formaldehyde);
	methanol = nextValue(graphs[5], methanol);
	ricin = nextValue(graphs[6], ricin);
	snake_venom = nextValue(graphs[7], snake_venom);


	antibodies = constrain(antibodies, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	calciumGluconate = constrain(calciumGluconate, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for (var i = 0; i < graphs.length; i++) {
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('insecticide: ' + nf(insecticide, 1, 2), 20, 20);
	fill(colors[1]);
	text('chlorine: ' + nf(chlorine, 1, 2), 20, 40);
	fill(colors[2]);
	text('strychnine: ' + nf(strychnine, 1, 2), 20, 60);
	fill(colors[3]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms, 1, 2), 20, 80);
	fill(colors[4]);
	text('formaldehyde: ' + nf(formaldehyde, 1, 2), 20, 100);
	fill(colors[5]);
	text('methanol: ' + nf(methanol, 1, 2), 20, 120);
	fill(colors[6]);
	text('ricin: ' + nf(ricin, 1, 2), 20, 140);
	fill(colors[7]);
	text('snake_venom: ' + nf(snake_venom, 1, 2), 20, 160);


	//draw the antidotes bar chart
	drawBar(antibodies, 50, 'antibodies');
	drawBar(antitoxin, 200, 'antitoxin');
	drawBar(sulphates, 350, 'sulphates');
	drawBar(SodiumBicarbonate, 500, 'SodiumBicarbonate');
	drawBar(calciumGluconate, 650, 'calciumGluconate');


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
