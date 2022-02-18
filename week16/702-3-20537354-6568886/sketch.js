/*

Officer: 6568886
CaseNum: 702-3-20537354-6568886

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a red car with a Number_Plate of EZP6IQ.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Investigator_Car and the cars in
VehicleObject_Array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveVehicle()
{
	/*
	This function should do the following: 
	 - increment Investigator_Car's Miles_Amnt property by its Accel_Amt property 
	 - add a random amount between -0.09 and 0.09 to Investigator_Car's Rumble_Amount property
	 - use the constrain function to constrain Investigator_Car's Rumble_Amount property to values between 0.06 and 0.95
	 - call the TurnoverCar_motor function passing Investigator_Car as an argument
	*/
	Investigator_Car.Miles_Amnt += Investigator_Car.Accel_Amt;
}


function CrossLanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Coordinate_A and Lane_Coordinate_B to effect the change.
	 hint: You will need to modify the X_Coordinate property of car.
	*/
}


function SearchVehicleIsAhead( target_car )
{
	/*
	This function should do the following: 
	 - determine if target_car is in the same lane and less than 200px behind any of the cars in VehicleObject_Array.
	 - do this by traversing VehicleObject_Array and comparing each car's Miles_Amnt property to that of target_car.
	 - use the Number_Plate property of each car to ignore cars that match target_car.
	 - if you find a car that matches these requirements then return the car object. Otherwise return false.
	*/
}


function CheckVehicleIsParallel( target_vehicle )
{
	/*
	This function should do the following: 
	 - traverse VehicleObject_Array and determine if any of the cars are parallel with target_vehicle.
	 - if a car is found to be parallel to target_vehicle then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their Miles_Amnt properties is less than 25 px and they have non-matching X_Coordinate properties	*/
}


function FindCriminal()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to Investigator_Car to see if they match the Number_Plate property in the criminal description.
	 - it does this by calling CheckVehicleIsParallel.
	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
}


function FollowingCriminal()
{
	/*
	This function should do the following: 
	 - only operate if the Tailing_Criminal property of Investigator_Car is true.
	 - scale the Accel_Amt property of Investigator_Car by a factor of 1.001.
	 - use the min function to make sure that Investigator_Car's Accel_Amt property does not exceed 6.
	 - it should call SearchVehicleIsAhead to detect any cars in front of Investigator_Car.
	 - if a positive result is returned it should check to see if the Number_Plate property of that car matches that of criminal.
	 - for a match, StopCriminal should be called, otherwise call CrossLanes.
	*/
}


function StopCriminal(car_obj)
{
	/*
	This function should do the following: 
	 - set the isApprehended property of the car at the index of car_obj to true.
	 - set the Apprehending_Criminal property of Investigator_Car to true.
	 - set the Accel_Amt properties of both vehicles to zero.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Investigator_Car;

var roadWidth;
var roadLeftEdge;
var Lane_Coordinate_A;
var Lane_Coordinate_B;
var carImages = {};
var criminal;

var VehicleObject_Array = [
{ X_Coordinate: 300, Y_Coordinate: 0, Miles_Amnt: -200, Car_Model: 'blueCar', Number_Plate: 'M5W9H1', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 300, Y_Coordinate: 0, Miles_Amnt: 200, Car_Model: 'blueCar', Number_Plate: 'VQT5YR', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 300, Y_Coordinate: 0, Miles_Amnt: 600, Car_Model: 'blueCar', Number_Plate: '1VAXW3', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 1000, Car_Model: 'blueCar', Number_Plate: '7E68FR', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 300, Y_Coordinate: 0, Miles_Amnt: 1400, Car_Model: 'whiteCar', Number_Plate: 'T1WZSG', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 1800, Car_Model: 'whiteCar', Number_Plate: 'J6Y8Q6', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 2200, Car_Model: 'blueCar', Number_Plate: 'LH2JBM', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 2600, Car_Model: 'redCar', Number_Plate: 'UB1QT7', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 3000, Car_Model: 'greenCar', Number_Plate: 'G9TAAX', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 3400, Car_Model: 'greenCar', Number_Plate: 'HWXUZ9', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 3800, Car_Model: 'redCar', Number_Plate: 'EZP6IQ', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 300, Y_Coordinate: 0, Miles_Amnt: 4200, Car_Model: 'redCar', Number_Plate: '7XRZOU', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 300, Y_Coordinate: 0, Miles_Amnt: 4600, Car_Model: 'greenCar', Number_Plate: 'F5L0ZZ', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 5000, Car_Model: 'redCar', Number_Plate: 'X3PTQQ', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 300, Y_Coordinate: 0, Miles_Amnt: 5400, Car_Model: 'greenCar', Number_Plate: 'KENB06', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 5800, Car_Model: 'greenCar', Number_Plate: '3VMCPB', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 300, Y_Coordinate: 0, Miles_Amnt: 6200, Car_Model: 'redCar', Number_Plate: '1KEOPR', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 6600, Car_Model: 'greenCar', Number_Plate: 'FD3TUV', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 7000, Car_Model: 'greenCar', Number_Plate: 'XUHYMO', Accel_Amt: 2, exhaust: [  ]} , { X_Coordinate: 500, Y_Coordinate: 0, Miles_Amnt: 7400, Car_Model: 'whiteCar', Number_Plate: 'NRNNKV', Accel_Amt: 2, exhaust: [  ]} 
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
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_Coordinate_A = 300;
	Lane_Coordinate_B = 500;

	Investigator_Car = 
	{
		X_Coordinate: roadLeftEdge + roadWidth/4,
		Y_Coordinate: 550,
		Miles_Amnt: 0,
		Accel_Amt: 3,
		Rumble_Amount: 0,
		Car_Model: 'detective',
		Number_Plate: '5L3UTH',
		Apprehending_Criminal: false,
		Tailing_Criminal: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(criminal)
	{
		if(criminal.isApprehended)
		{
			fill(255);

			text("criminal isApprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!Investigator_Car.Tailing_Criminal&& !Investigator_Car.Apprehending_Criminal)
	{
		MoveVehicle();
		var b2b = SearchVehicleIsAhead( Investigator_Car );
		if(b2b)CrossLanes(Investigator_Car);
		var a = FindCriminal();
		if(a != false)criminal = a;
		if(criminal)Investigator_Car.Tailing_Criminal = true;
	}
	else if(!Investigator_Car.Apprehending_Criminal)
	{
		FollowingCriminal();
		MoveVehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(criminal)
	{
		if(!criminal.isApprehended)
		{
			criminal.Accel_Amt = 5;
			var b2b = SearchVehicleIsAhead( criminal );
			if(b2b)
			{
				if(b2b.Number_Plate != criminal.Number_Plate)
				{
					CrossLanes(criminal);
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < VehicleObject_Array.length; i++)
	{
		VehicleObject_Array[i].Miles_Amnt += VehicleObject_Array[i].Accel_Amt;
		VehicleObject_Array[i].Y_Coordinate = Investigator_Car.Y_Coordinate - VehicleObject_Array[i].Miles_Amnt + Investigator_Car.Miles_Amnt;

		if(criminal)
		{
			if(criminal.isApprehended)
			{
				if(VehicleObject_Array[i].X_Coordinate==Investigator_Car.X_Coordinate)
				{
					if(VehicleObject_Array[i].Miles_Amnt<Investigator_Car.Miles_Amnt)
					{
						if(VehicleObject_Array[i].Miles_Amnt-Investigator_Car.Miles_Amnt < 200)
						{
							CrossLanes(VehicleObject_Array[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (Investigator_Car.Miles_Amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Investigator_Car.Miles_Amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(Investigator_Car);
	image
	(
		carImages["detective"],
		Investigator_Car.X_Coordinate - carImages["detective"].width/2 + random(-Investigator_Car.Rumble_Amount, Investigator_Car.Rumble_Amount),
		Investigator_Car.Y_Coordinate + random(-Investigator_Car.Rumble_Amount, Investigator_Car.Rumble_Amount)
	);

	//draw all other cars

	for(var i = 0; i < VehicleObject_Array.length; i ++)
	{
		if(VehicleObject_Array[i].Y_Coordinate < height && VehicleObject_Array[i].Y_Coordinate > -height/2)
		{
			image(
			carImages[VehicleObject_Array[i].Car_Model],
			VehicleObject_Array[i].X_Coordinate - carImages[VehicleObject_Array[i].Car_Model].width/2,
			VehicleObject_Array[i].Y_Coordinate
			);
			TurnoverCar_motor(VehicleObject_Array[i]);

			drawExhaust(VehicleObject_Array[i]);
		}
	}

}

function TurnoverCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.X_Coordinate, y: car.Y_Coordinate + carImages[car.Car_Model].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Accel_Amt/3);
		if(car.Car_Model != "detective")car.exhaust[i].y += (Investigator_Car.Accel_Amt - car.Accel_Amt);
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
