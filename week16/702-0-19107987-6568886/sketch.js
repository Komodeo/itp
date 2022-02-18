/*

Officer: 6568886
CaseNum: 702-0-19107987-6568886

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of DetectiveCarObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveVehicle()
{
	/*
	This function should do the following: 
	 - increment DetectiveCarObject's DistAmt property by its GasAmt property 
	 - add a random amount between -0.05 and 0.05 to DetectiveCarObject's EngineVibrateVal property
	 - use the constrain function to constrain DetectiveCarObject's EngineVibrateVal property to values between 0.04 and 1.04
	 - call the DriveEngine function passing DetectiveCarObject as an argument
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var DetectiveCarObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	DetectiveCarObject = 
	{
		XCoordinate: roadLeftEdge + roadWidth/4,
		YCoordinate: 300,
		DistAmt: 0,
		GasAmt: 3,
		EngineVibrateVal: 0,
		VehicleCategory: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	MoveVehicle();


	drawRoad();
	drawCars();
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
		roadLeftEdge + roadWidth/2 , i * 100 + (DetectiveCarObject.DistAmt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (DetectiveCarObject.DistAmt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(DetectiveCarObject);
	image
	(
		carImages["detective"],
		DetectiveCarObject.XCoordinate - carImages["detective"].width/2 + random(-DetectiveCarObject.EngineVibrateVal, DetectiveCarObject.EngineVibrateVal),
		DetectiveCarObject.YCoordinate + random(-DetectiveCarObject.EngineVibrateVal, DetectiveCarObject.EngineVibrateVal)
	);

}

function DriveEngine(car)
{

	car.exhaust.push({size: 2, x: car.XCoordinate, y: car.YCoordinate + carImages[car.VehicleCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.GasAmt/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
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
