/*
Officer: 6568886
CaseNum: 601-2-16124461-6568886

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing SeaGreen stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkOrange fill ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 44 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke()
- beginShape(), endShape(), vertex()

- fill
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var fry_data_Coord_X = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var fry_data_Coord_Y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var murder_logbook = {
	locationX: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	locationY: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	fatalityDetails: ['SUMMER CASIMERE', 'DEEDEE PHINNEY', 'LINETTE MOHWAWK', 'ERMELINDA OORIN', 'JESUS FORSLIN', 'RANDEE CROME', 'LOUISE ZETLAND', 'TU DAVISWOOD', 'PIERRE DORCEY', 'MAJORIE JENI', 'LESLEY MONKSFORD', 'JAUNITA JOYER', 'JESSIA PORTOS', 'LAVERNE JACQUELIN'],
};

function preload() {
	countyMap = loadImage("map.png")
}

function setup() {
	createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0, 0);

	//add your code below here

	//draw SeaGreen stroke vertexes at each sighting location
	stroke(46, 139, 87);
	noFill();
	beginShape();
	for (i = 0; i < fry_data_Coord_X.length; i++) {
		vertex(fry_data_Coord_X[i], fry_data_Coord_Y[i]);
	}
	endShape();

	//draw DarkOrange fill ellipses at each crime location
	noStroke();
	fill(255, 140, 0);
	for (i = 0; i < murder_logbook.locationX.length; i++) {
		ellipse(murder_logbook.locationX[i], murder_logbook.locationY[i], 5);
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
