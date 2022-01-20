//define objects
var vulva = {
  majora: {
    height: 40,
    width: 10
  },
  minora: {
    height: 10,
    width: 2
  },
  posY: -5
};

var penis = {
  headSize: 60,
  tipSize: 5,
  posY: 0
};

var vignette = {
  size: 130,
  strokeSize: 50
};

function setup() {
  //create canvas
  createCanvas(100, 100);
  background(252, 225, 237);
}

function draw() {
  //define variables to anchor drawings
  var centerX = width / 2;
  var centerY = height / 2;

  //position vulva

  //majora
  strokeWeight(0);
  fill(234, 154, 183);
  beginShape();
  vertex(centerX, centerY - vulva.majora.height + vulva.posY);
  vertex(centerX + vulva.majora.width, centerY + vulva.posY);
  vertex(centerX, centerY + vulva.majora.height + vulva.posY);
  vertex(centerX - vulva.majora.width, centerY + vulva.posY);
  endShape(CLOSE);

  //minora
  fill(255, 135, 183);
  beginShape();
  vertex(centerX, centerY - vulva.minora.height + vulva.posY);
  vertex(centerX + vulva.minora.width, centerY + vulva.posY);
  vertex(centerX, centerY + vulva.minora.height + vulva.posY);
  vertex(centerX - vulva.minora.width, centerY + vulva.posY);
  endShape(CLOSE);

  //penis
  fill(153, 51, 47);
  ellipse(centerX, centerY + penis.headSize / 2 + penis.posY, penis.headSize);
  fill(0);
  ellipse(centerX, centerY + penis.tipSize / 2 + penis.posY, penis.tipSize);

  //vignette
  strokeWeight(vignette.strokeSize);
  noFill();
  ellipse(centerX, centerY, vignette.size);
}



