/*

Officer: 6568886
CaseNum: 702-1-95645988-6568886

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

HINT: make sure you take a look at the initialisation of investigator_vehicleObject and the cars in
carObjectsList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_car()
{
	/*
	This function should do the following: 
	 - increment investigator_vehicleObject's kms_amnt property by its accel_amt property 
	 - add a random amount between -0.02 and 0.02 to investigator_vehicleObject's engineVibrate_amt property
	 - use the constrain function to constrain investigator_vehicleObject's engineVibrate_amt property to values between 0.08 and 0.92
	 - call the run_motor function passing investigator_vehicleObject as an argument
	*/
}


function change_lanes(target_vehicle)
{
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lanePositionA and lanePositionB to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the x property of target_vehicle.
	*/
}


function vehicle_ahead( targetCarA, targetCarB )
{
	/*
	This function should do the following: 
	 - determine if targetCarA is in the same lane and less than 200px behind targetCarB.
	 - do this by comparing the two cars' kms_amnt properties
	 - if these requirements are met then return targetCarB. Otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigator_vehicleObject;

var roadWidth;
var roadLeftEdge;
var lanePositionA;
var lanePositionB;
var carImages = {};

var carObjectsList = [
{ x: 500, y: 0, kms_amnt: -200, vehicle_category: 'greenCar', number_plate: 'ZFXD29', accel_amt: 2, exhaust: [  ]} , { x: 500, y: 0, kms_amnt: 200, vehicle_category: 'blueCar', number_plate: '5YMD5S', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 600, vehicle_category: 'blueCar', number_plate: '4S5L1H', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 1000, vehicle_category: 'blueCar', number_plate: 'PUAMOB', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 1400, vehicle_category: 'greenCar', number_plate: '3KWSMX', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 1800, vehicle_category: 'redCar', number_plate: '55H96F', accel_amt: 2, exhaust: [  ]} , { x: 500, y: 0, kms_amnt: 2200, vehicle_category: 'whiteCar', number_plate: '9ENHTT', accel_amt: 2, exhaust: [  ]} , { x: 500, y: 0, kms_amnt: 2600, vehicle_category: 'whiteCar', number_plate: '2XXOM6', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 3000, vehicle_category: 'whiteCar', number_plate: 'YS6J8R', accel_amt: 2, exhaust: [  ]} , { x: 500, y: 0, kms_amnt: 3400, vehicle_category: 'redCar', number_plate: 'EXTQ32', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 3800, vehicle_category: 'whiteCar', number_plate: '4KWNQR', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 4200, vehicle_category: 'greenCar', number_plate: 'XWA0RQ', accel_amt: 2, exhaust: [  ]} , { x: 500, y: 0, kms_amnt: 4600, vehicle_category: 'blueCar', number_plate: 'WROBUJ', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 5000, vehicle_category: 'greenCar', number_plate: '53TDK1', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 5400, vehicle_category: 'blueCar', number_plate: 'D2JBK5', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 5800, vehicle_category: 'greenCar', number_plate: 'J3JBPG', accel_amt: 2, exhaust: [  ]} , { x: 300, y: 0, kms_amnt: 6200, vehicle_category: 'blueCar', number_plate: 'VRLRP0', accel_amt: 2, exhaust: [  ]} , { x: 500, y: 0, kms_amnt: 6600, vehicle_category: 'redCar', number_plate: 'PUSN4I', accel_amt: 2, exhaust: [  ]} , { x: 500, y: 0, kms_amnt: 7000, vehicle_category: 'whiteCar', number_plate: 'I12O11', accel_amt: 2, exhaust: [  ]} , { x: 500, y: 0, kms_amnt: 7400, vehicle_category: 'whiteCar', number_plate: '6W5Z5Y', accel_amt: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	lanePositionA = 300;
	lanePositionB = 500;

	investigator_vehicleObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		kms_amnt: 0,
		accel_amt: 3,
		engineVibrate_amt: 0,
		vehicle_category: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	drive_car();
	for(var i = 0; i < carObjectsList.length; i++)
	{
var b2b = vehicle_ahead(investigator_vehicleObject, carObjectsList[i]);
		if(b2b)change_lanes(investigator_vehicleObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjectsList.length; i++)
	{
		carObjectsList[i].kms_amnt += carObjectsList[i].accel_amt;
		carObjectsList[i].y = investigator_vehicleObject.y - carObjectsList[i].kms_amnt + investigator_vehicleObject.kms_amnt;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (investigator_vehicleObject.kms_amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigator_vehicleObject.kms_amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigator_vehicleObject);
	image
	(
		carImages["detective"],
		investigator_vehicleObject.x - carImages["detective"].width/2 + random(-investigator_vehicleObject.engineVibrate_amt, investigator_vehicleObject.engineVibrate_amt),
		investigator_vehicleObject.y + random(-investigator_vehicleObject.engineVibrate_amt, investigator_vehicleObject.engineVibrate_amt)
	);

	//draw all other cars

	for(var i = 0; i < carObjectsList.length; i ++)
	{
		if(carObjectsList[i].y < height && carObjectsList[i].y > -height/2)
		{
			image(
			carImages[carObjectsList[i].vehicle_category],
			carObjectsList[i].x - carImages[carObjectsList[i].vehicle_category].width/2,
			carObjectsList[i].y
			);
			run_motor(carObjectsList[i]);

			drawExhaust(carObjectsList[i]);
		}
	}

}

function run_motor(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.vehicle_category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accel_amt/3);
		if(car.vehicle_category != "detective")car.exhaust[i].y += (investigator_vehicleObject.accel_amt - car.accel_amt);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
