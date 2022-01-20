//define objects
var vulva = {
  majora: {
    height: 80,
    width: 20
  },
  minora: {
    height: 20,
    width: 5
  }
};

function setup() {
  //create canvas
  createCanvas(100, 100);
  background(214, 251, 255);
}

function draw() {
  //define variables to anchor drawings
  var centerX = width / 2;
  var centerY = height / 2;

  strokeWeight(1);
  fill(255);
  ellipse(centerX, centerY - vulva.majora.height / 2, 5, 5);
}



