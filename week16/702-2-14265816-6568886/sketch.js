/*

Officer: 6568886
CaseNum: 702-2-14265816-6568886

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a red car with a licence_plate of QJXZE5. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detective_car and the cars in
carObjectData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle() {
	/*
	This function should do the following: 
	 - increment detective_car's dist_amnt property by its speed_amt property 
	 - add a random amount between -0.05 and 0.05 to detective_car's engineShudder_amount property
	 - use the constrain function to constrain detective_car's engineShudder_amount property to values between 0.01 and 1.25
	 - call the Turnover_Motor function passing detective_car as an argument
	*/
	detective_car.dist_amnt += detective_car.speed_amt;
	detective_car.engineShudder_amount += random(-0.05, 0.05);
	detective_car.engineShudder_amount = constrain(detective_car.engineShudder_amount, 0.01, 1.25);
	Turnover_Motor(detective_car);
}


function Swap_Lanes(car) {
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_posA and lane_posB to effect the change.
	 hint: You will need to modify the pos_x property of car.
	*/
}


function SearchCar_Ahead(vehicleA, vehicleB) {
	/*
	This function should do the following: 
	 - determine if vehicleA is in the same lane and less than 200px behind vehicleB.
	 - do this by comparing the two cars' dist_amnt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
}


function Car_IsAtSide(target_vehicle) {
	/*
	This function should do the following: 
	 - determine if target_vehicleis parallel with detective_car.
	 - if target_vehicle is found to be parallel to detective_car then return target_vehicle.
	 - cars are considered parallel if the absolute difference between their dist_amnt properties is less than 25 px and they have non-matching pos_x properties	*/
}


function Detect_Assailant() {
	/*
	This function should do the following: 
	 - Check cars passing parallel to detective_car to see if they match the licence_plate property in the assailant description.
	 - it does this by traversing carObjectData and calling Car_IsAtSide for each car
.	 - if a positive result is returned then the licence_plate property of the found car is then checked against the assailant description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detective_car;

var roadWidth;
var roadLeftEdge;
var lane_posA;
var lane_posB;
var carImages = {};
var assailant;

var carObjectData = [
	{ pos_x: 500, pos_y: 0, dist_amnt: -200, car_variety: 'blueCar', licence_plate: 'OEVWPX', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 200, car_variety: 'redCar', licence_plate: 'LKAX52', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 600, car_variety: 'greenCar', licence_plate: 'BD21ED', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 1000, car_variety: 'greenCar', licence_plate: 'Y82DUM', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 1400, car_variety: 'redCar', licence_plate: 'QJXZE5', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 1800, car_variety: 'greenCar', licence_plate: 'N4CCGT', speed_amt: 2, exhaust: [] }, { pos_x: 500, pos_y: 0, dist_amnt: 2200, car_variety: 'whiteCar', licence_plate: 'V5WS5A', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 2600, car_variety: 'whiteCar', licence_plate: '2CSSBN', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 3000, car_variety: 'blueCar', licence_plate: 'S4KJW2', speed_amt: 2, exhaust: [] }, { pos_x: 500, pos_y: 0, dist_amnt: 3400, car_variety: 'redCar', licence_plate: 'U5DWN8', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 3800, car_variety: 'blueCar', licence_plate: 'GUQMUM', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 4200, car_variety: 'blueCar', licence_plate: '0ZB7W5', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 4600, car_variety: 'redCar', licence_plate: '9YSLQX', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 5000, car_variety: 'whiteCar', licence_plate: 'ZCK6GM', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 5400, car_variety: 'blueCar', licence_plate: 'Y1WBEI', speed_amt: 2, exhaust: [] }, { pos_x: 500, pos_y: 0, dist_amnt: 5800, car_variety: 'greenCar', licence_plate: 'ZV160S', speed_amt: 2, exhaust: [] }, { pos_x: 500, pos_y: 0, dist_amnt: 6200, car_variety: 'blueCar', licence_plate: 'MFT9LG', speed_amt: 2, exhaust: [] }, { pos_x: 500, pos_y: 0, dist_amnt: 6600, car_variety: 'redCar', licence_plate: 'HJ5KN8', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 7000, car_variety: 'redCar', licence_plate: 'R2MV3J', speed_amt: 2, exhaust: [] }, { pos_x: 300, pos_y: 0, dist_amnt: 7400, car_variety: 'blueCar', licence_plate: 'M4M653', speed_amt: 2, exhaust: [] }
];



function preload() {

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for (var i = 0; i < carTypes.length; i++) {
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup() {
	createCanvas(800, 800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_posA = 300;
	lane_posB = 500;

	detective_car =
	{
		pos_x: roadLeftEdge + roadWidth / 4,
		pos_y: 550,
		dist_amnt: 0,
		speed_amt: 3,
		engineShudder_amount: 0,
		car_variety: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	if (assailant) {
		fill(255);

		text("assailant found !", width / 2, height / 2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	Drive_Vehicle();
	for (var i = 0; i < carObjectData.length; i++) {
		var b2b = SearchCar_Ahead(detective_car, carObjectData[i]);
		if (b2b) Swap_Lanes(detective_car);
	}
	var a = Detect_Assailant();
	if (a != false) assailant = a;


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < carObjectData.length; i++) {
		carObjectData[i].dist_amnt += carObjectData[i].speed_amt;
		carObjectData[i].pos_y = detective_car.pos_y - carObjectData[i].dist_amnt + detective_car.dist_amnt;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
	stroke(100);
	fill(50);
	rect(roadLeftEdge, 0, roadWidth, 800);
	stroke(255);

	for (var i = -1; i < 20; i++) {
		line(
			roadLeftEdge + roadWidth / 2, i * 100 + (detective_car.dist_amnt % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (detective_car.dist_amnt % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(detective_car);
	image
		(
			carImages["detective"],
			detective_car.pos_x - carImages["detective"].width / 2 + random(-detective_car.engineShudder_amount, detective_car.engineShudder_amount),
			detective_car.pos_y + random(-detective_car.engineShudder_amount, detective_car.engineShudder_amount)
		);

	//draw all other cars

	for (var i = 0; i < carObjectData.length; i++) {
		if (carObjectData[i].pos_y < height && carObjectData[i].pos_y > -height / 2) {
			image(
				carImages[carObjectData[i].car_variety],
				carObjectData[i].pos_x - carImages[carObjectData[i].car_variety].width / 2,
				carObjectData[i].pos_y
			);
			Turnover_Motor(carObjectData[i]);

			drawExhaust(carObjectData[i]);
		}
	}

}

function Turnover_Motor(car) {

	car.exhaust.push({ size: 2, x: car.pos_x, y: car.pos_y + carImages[car.car_variety].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.speed_amt / 3);
		if (car.car_variety != "detective") car.exhaust[i].y += (detective_car.speed_amt - car.speed_amt);
		car.exhaust[i].x += random(-1, 1);
		car.exhaust[i].size += 0.5;

		if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
			car.exhaust.splice(i, 1);
		}
	}
}


function drawExhaust(car) {
	noStroke();
	for (var i = 0; i < car.exhaust.length; i++) {
		var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
		fill(125, alpha);
		ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);

	}
}
