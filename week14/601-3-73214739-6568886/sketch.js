/*
Officer: 6568886
CaseNum: 601-3-73214739-6568886

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DarkGoldenrod stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, SeaGreen fill rectangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 52 pixels of any of the crimes within no more than 1 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke()
- beginShape(), endShape(), vertex()

- fill
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Fugitive_Sightings = {
	locX: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	locY: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	recordedDay: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var Murderscene_Log_Pos_X = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var Murderscene_Log_Pos_Y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var Murderscene_Log_recordedDay = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var Murderscene_Log_Killed_ = ['DRUSILLA WARMAN', 'ERMELINDA OORIN', 'JESSIA PORTOS', 'NICOLE ASHELY', 'JULIANA ADVERSANE', 'LESLEY MONKSFORD', 'JENIFFER DEAUVILLE', 'LOUISE ZETLAND', 'TU DAVISWOOD', 'MALINDA GOODBURY', 'LAVERNE JACQUELIN', 'MAJORIE JENI', 'LINETTE MOHWAWK', 'DARBY MYRLE', 'DEEDEE PHINNEY'];


function preload() {
	countyMap = loadImage("map.png");
}

function setup() {
	createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0, 0);

	//add your code below here

	// draw a DarkGoldenrod stroke vertex at each sighting location
	stroke(184, 134, 11);
	noFill();
	beginShape();
	for (i = 0; i < Fugitive_Sightings.locX.length; i++) {
		vertex(Fugitive_Sightings.locX[i], Fugitive_Sightings.locY[i]);
	}
	endShape();

	// draw SeaGreen fill rectangles centered over each crime location
	noStroke();
	fill(46, 139, 87);
	for (i = 0; i < Murderscene_Log_Pos_X.length; i++) {
		rect(Murderscene_Log_Pos_X[i] - 3, Murderscene_Log_Pos_Y[i] - 3, 6, 6);
	}

	// code to draw the matches ( if any)
	for (let i = 0; i < possibleMatches.length; i++) {
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
