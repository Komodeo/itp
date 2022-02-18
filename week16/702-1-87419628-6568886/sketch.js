/*

Officer: 6568886
CaseNum: 702-1-87419628-6568886

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthPI_carObject and the cars in
vehicles_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveCar() {
	/*
	This function should do the following: 
	 - increment sleuthPI_carObject's kms_amnt property by its gas_val property 
	 - add a random amount between -0.1 and 0.1 to sleuthPI_carObject's engineShudder_value property
	 - use the constrain function to constrain sleuthPI_carObject's engineShudder_value property to values between 0.02 and 1.14
	 - call the TurnCarEngine function passing sleuthPI_carObject as an argument
	*/
	sleuthPI_carObject.kms_amnt += sleuthPI_carObject.gas_val;
	sleuthPI_carObject.engineShudder_value += random(-0.1, 0.1);
	sleuthPI_carObject.engineShudder_value = constrain(sleuthPI_carObject.engineShudder_value, 0.02, 1.14);
	TurnCarEngine(sleuthPI_carObject);
}


function ChangeLanes(target_vehicle) {
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePos_a and LanePos_b to effect the change.
	 hint: You will need to modify the x property of target_vehicle.
	*/
	if (target_vehicle.x == LanePos_a) {
		target_vehicle.x = LanePos_b;
	}
	else {
		target_vehicle.x = LanePos_a;
	}
}


function SearchIsAhead(target_car_a, target_car_b) {
	/*
	This function should do the following: 
	 - determine if target_car_a is in the same lane and less than 200px behind target_car_b.
	 - do this by comparing the two cars' kms_amnt properties
	 - if these requirements are met then return the number_plate property for target_car_b. Otherwise return false.
	*/
	if (target_car_a.x == target_car_b.x && target_car_b.kms_amnt - target_car_a.kms_amnt < 200) {
		return target_car_b.number_plate;
	}
	else {
		return false;
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_carObject;

var roadWidth;
var roadLeftEdge;
var LanePos_a;
var LanePos_b;
var carImages = {};

var vehicles_array = [
	{ x: 500, y: 0, kms_amnt: -200, car_variety: 'greenCar', number_plate: 'TUHHD8', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 200, car_variety: 'redCar', number_plate: 'YOVN58', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 600, car_variety: 'whiteCar', number_plate: '5FUJBX', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 1000, car_variety: 'blueCar', number_plate: '0714ZB', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 1400, car_variety: 'greenCar', number_plate: 'HCFR2X', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 1800, car_variety: 'blueCar', number_plate: 'XL8DMF', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 2200, car_variety: 'whiteCar', number_plate: 'JUFFWO', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 2600, car_variety: 'whiteCar', number_plate: 'JHUSN0', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 3000, car_variety: 'blueCar', number_plate: '8DPTF3', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 3400, car_variety: 'whiteCar', number_plate: 'VWI05G', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 3800, car_variety: 'redCar', number_plate: 'DKL6SV', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 4200, car_variety: 'redCar', number_plate: 'C2AK9O', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 4600, car_variety: 'whiteCar', number_plate: 'LEWAI4', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 5000, car_variety: 'whiteCar', number_plate: 'BEVR6G', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 5400, car_variety: 'redCar', number_plate: 'NQH74E', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 5800, car_variety: 'blueCar', number_plate: '2S9AMT', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 6200, car_variety: 'whiteCar', number_plate: 'QQ7VAV', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 6600, car_variety: 'whiteCar', number_plate: 'PI4GQ3', gas_val: 2, exhaust: [] }, { x: 300, y: 0, kms_amnt: 7000, car_variety: 'whiteCar', number_plate: 'UDILIX', gas_val: 2, exhaust: [] }, { x: 500, y: 0, kms_amnt: 7400, car_variety: 'whiteCar', number_plate: 'WB794V', gas_val: 2, exhaust: [] }
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

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePos_a = 300;
	LanePos_b = 500;

	sleuthPI_carObject =
	{
		x: roadLeftEdge + roadWidth / 4,
		y: 550,
		kms_amnt: 0,
		gas_val: 3,
		engineShudder_value: 0,
		car_variety: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	DriveCar();
	for (var i = 0; i < vehicles_array.length; i++) {
		var b2b = SearchIsAhead(sleuthPI_carObject, vehicles_array[i]);
		if (b2b) ChangeLanes(sleuthPI_carObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < vehicles_array.length; i++) {
		vehicles_array[i].kms_amnt += vehicles_array[i].gas_val;
		vehicles_array[i].y = sleuthPI_carObject.y - vehicles_array[i].kms_amnt + sleuthPI_carObject.kms_amnt;
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
			roadLeftEdge + roadWidth / 2, i * 100 + (sleuthPI_carObject.kms_amnt % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (sleuthPI_carObject.kms_amnt % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(sleuthPI_carObject);
	image
		(
			carImages["detective"],
			sleuthPI_carObject.x - carImages["detective"].width / 2 + random(-sleuthPI_carObject.engineShudder_value, sleuthPI_carObject.engineShudder_value),
			sleuthPI_carObject.y + random(-sleuthPI_carObject.engineShudder_value, sleuthPI_carObject.engineShudder_value)
		);

	//draw all other cars

	for (var i = 0; i < vehicles_array.length; i++) {
		if (vehicles_array[i].y < height && vehicles_array[i].y > -height / 2) {
			image(
				carImages[vehicles_array[i].car_variety],
				vehicles_array[i].x - carImages[vehicles_array[i].car_variety].width / 2,
				vehicles_array[i].y
			);
			TurnCarEngine(vehicles_array[i]);

			drawExhaust(vehicles_array[i]);
		}
	}

}

function TurnCarEngine(car) {

	car.exhaust.push({ size: 2, x: car.x, y: car.y + carImages[car.car_variety].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.gas_val / 3);
		if (car.car_variety != "detective") car.exhaust[i].y += (sleuthPI_carObject.gas_val - car.gas_val);
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
