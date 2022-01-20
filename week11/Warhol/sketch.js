//define objects
var vulva = {
  majora: {
    height: 40,
    width: 10
  },
  minora: {
    height: 10,
    width: 2
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

  //majora
  strokeWeight(0);
  fill(234, 154, 183);
  beginShape();
  vertex(centerX, centerY - vulva.majora.height);
  vertex(centerX + vulva.majora.width, centerY);
  vertex(centerX, centerY + vulva.majora.height);
  vertex(centerX - vulva.majora.width, centerY);
  endShape(CLOSE);

  //minora
  fill(255, 135, 183);
  beginShape();
  vertex(centerX, centerY - vulva.minora.height);
  vertex(centerX + vulva.minora.width, centerY);
  vertex(centerX, centerY + vulva.minora.height);
  vertex(centerX - vulva.minora.width, centerY);
  endShape(CLOSE);
}



