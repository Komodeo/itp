/*

Officer: 6568886
CaseNum: 702-1-17565253-6568886

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

HINT: make sure you take a look at the initialisation of investigatorVehicleObject and the cars in
vehiclesList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_vehicle()
{
	/*
	This function should do the following: 
	 - increment investigatorVehicleObject's distanceAmount property by its accelValue property 
	 - add a random amount between -0.07 and 0.07 to investigatorVehicleObject's rumbleVal property
	 - use the constrain function to constrain investigatorVehicleObject's rumbleVal property to values between 0.1 and 0.84
	 - call the turn_car_motor function passing investigatorVehicleObject as an argument
	*/
	investigatorVehicleObject.distanceAmount += investigatorVehicleObject.accelValue;
	investigatorVehicleObject.rumbleVal += random(-0.07, 0.07);
	investigatorVehicleObject.rumbleVal = constrain(investigatorVehicleObject.rumbleVal, 0.1, 0.84);
	turn_car_motor(investigatorVehicleObject);
}


function move_lanes(car_obj)
{
	/*
	This function should do the following: 
	 - move car_obj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use laneCoordinateA and laneCoordinateB to effect the change.
	 hint: You will need to modify the xPos property of car_obj.
	*/
	if (car_obj.xPos == laneCoordinateA) {
		car_obj.xPos = laneCoordinateB;
	}
	else {
		car_obj.xPos = laneCoordinateA;
	}
}


function check_infront( vehicle )
{
	/*
	This function should do the following: 
	 - determine if vehicle is in the same lane and less than 200px behind any of the cars in vehiclesList.
	 - do this by traversing vehiclesList and comparing each car's distanceAmount property to that of vehicle.
	 - if you find a car that matches these requirements then return the index representing the car's position in vehiclesList. Otherwise return false.
	*/
	for (i = 0; i < vehiclesList.length; i++) {
		if (vehicle.xPos == vehiclesList[i].xPos && vehiclesList[i].distanceAmount - vehicle.distanceAmount > 0 && vehiclesList[i].distanceAmount - vehicle.distanceAmount < 200) {
			return i;
		}
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigatorVehicleObject;

var roadWidth;
var roadLeftEdge;
var laneCoordinateA;
var laneCoordinateB;
var carImages = {};

var vehiclesList = [
{ xPos: 500, yPos: 0, distanceAmount: -200, vehicleType: 'blueCar', licencePlate: 'MUSIFJ', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 200, vehicleType: 'blueCar', licencePlate: 'HHF9RA', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 600, vehicleType: 'greenCar', licencePlate: 'HRH8H7', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 1000, vehicleType: 'redCar', licencePlate: '0R2FHC', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 1400, vehicleType: 'blueCar', licencePlate: 'QB348C', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 1800, vehicleType: 'whiteCar', licencePlate: '2KZT2R', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 2200, vehicleType: 'blueCar', licencePlate: 'VIF2D1', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 2600, vehicleType: 'blueCar', licencePlate: 'E6N6OH', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 3000, vehicleType: 'greenCar', licencePlate: 'ZWRTRR', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 3400, vehicleType: 'greenCar', licencePlate: 'IH2PHH', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 3800, vehicleType: 'greenCar', licencePlate: 'FJMOB3', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 4200, vehicleType: 'whiteCar', licencePlate: 'M1T5VH', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 4600, vehicleType: 'blueCar', licencePlate: '79SAIK', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 5000, vehicleType: 'blueCar', licencePlate: 'B9QLQ5', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 5400, vehicleType: 'redCar', licencePlate: 'FZZ7N4', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 5800, vehicleType: 'redCar', licencePlate: 'F8ZPIA', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 6200, vehicleType: 'blueCar', licencePlate: 'AHYUJD', accelValue: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distanceAmount: 6600, vehicleType: 'redCar', licencePlate: '8PIN4X', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 7000, vehicleType: 'greenCar', licencePlate: 'CI7T03', accelValue: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distanceAmount: 7400, vehicleType: 'greenCar', licencePlate: 'XJ1DGO', accelValue: 2, exhaust: [  ]} 
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
	laneCoordinateA = 300;
	laneCoordinateB = 500;

	investigatorVehicleObject = 
	{
		xPos: roadLeftEdge + roadWidth/4,
		yPos: 550,
		distanceAmount: 0,
		accelValue: 3,
		rumbleVal: 0,
		vehicleType: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	move_vehicle();
	var b2b = check_infront( investigatorVehicleObject );
	if(b2b)move_lanes(investigatorVehicleObject);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehiclesList.length; i++)
	{
		vehiclesList[i].distanceAmount += vehiclesList[i].accelValue;
		vehiclesList[i].yPos = investigatorVehicleObject.yPos - vehiclesList[i].distanceAmount + investigatorVehicleObject.distanceAmount;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigatorVehicleObject.distanceAmount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigatorVehicleObject.distanceAmount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigatorVehicleObject);
	image
	(
		carImages["detective"],
		investigatorVehicleObject.xPos - carImages["detective"].width/2 + random(-investigatorVehicleObject.rumbleVal, investigatorVehicleObject.rumbleVal),
		investigatorVehicleObject.yPos + random(-investigatorVehicleObject.rumbleVal, investigatorVehicleObject.rumbleVal)
	);

	//draw all other cars

	for(var i = 0; i < vehiclesList.length; i ++)
	{
		if(vehiclesList[i].yPos < height && vehiclesList[i].yPos > -height/2)
		{
			image(
			carImages[vehiclesList[i].vehicleType],
			vehiclesList[i].xPos - carImages[vehiclesList[i].vehicleType].width/2,
			vehiclesList[i].yPos
			);
			turn_car_motor(vehiclesList[i]);

			drawExhaust(vehiclesList[i]);
		}
	}

}

function turn_car_motor(car)
{

	car.exhaust.push({size: 2, x: car.xPos, y: car.yPos + carImages[car.vehicleType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accelValue/3);
		if(car.vehicleType != "detective")car.exhaust[i].y += (investigatorVehicleObject.accelValue - car.accelValue);
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
