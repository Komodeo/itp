//construct an individual particle
function Particle(x, y, xSpeed, ySpeed, size, colour) {
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size = size;
	this.colour = colour;
	this.age = 0;

	//randomize color
	this.colour = color(
		random(this.colour.levels[0], 255),
		random(this.colour.levels[1], 165),
		random(0, this.colour.levels[2]),
		this.colour.levels[3]
	);

	//draw a particle to the screen
	this.drawParticle = function () {
		fill(this.colour);
		ellipse(this.x, this.y, this.size);
	};

	//update the position and age of a particle
	this.updateParticle = function () {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		this.age++;
	};
}

//construct the particles array
function Emitter(x, y, xSpeed, ySpeed, size, colour) {
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size = size;
	this.colour = colour;

	this.startParticles = 0;
	this.lifetime = 0;

	this.particles = [];

	//return a new particle
	this.addParticle = function () {
		var p = new Particle(
			random(this.x - 10, this.x + 10),
			random(this.y - 10, this.y + 10),
			random(this.xSpeed - 1, this.xSpeed + 1),
			random(this.ySpeed - 2, this.ySpeed),
			random(this.size - 4, this.size + 4),
			this.colour);

		return p;
	};

	//start emitter with initial particles
	this.startEmitter = function (startParticles, lifetime) {
		this.startParticles = startParticles;
		this.lifetime = lifetime;

		for (i = 0; i < startParticles; i++) {
			this.particles.push(this.addParticle());
		}
	};

	//iterate through particles and draw to the screen
	this.updateParticles = function () {
		var deadParticles = 0;
		for (i = this.particles.length - 1; i >= 0; i--) {
			this.particles[i].drawParticle();
			this.particles[i].updateParticle();

			//check for dead particles and delete them
			if (this.particles[i].age > random(0, this.lifetime)) {
				this.particles.splice(i, 1);
				deadParticles++;
			}
		}

		//replace dead particles
		if (deadParticles > 0) {
			for (i = 0; i < deadParticles; i++) {
				this.particles.push(this.addParticle());
			}
		}
	};
}

var emit; //global variable to store particle properties
function setup() {
	createCanvas(800, 600);
	noStroke();

	//set particle properties
	emit = new Emitter(
		width / 2, //x
		height - 100, //y
		0, //xSpeed
		-1, //ySpeed
		30, //size
		color(200, 0, 50, 100)); //colour
	emit.startEmitter(1000, //startParticles
		5000); //lifetime
}

function draw() {
	background(10);
	emit.updateParticles();
}