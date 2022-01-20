//define objects
var vulva = {
  posY: -5,
  majora: {
    height: 40,
    width: 10,
    rgb: {
      r: 234,
      g: 154,
      b: 183
    }
  },
  minora: {
    height: 10,
    width: 2,
    rgb: {
      r: 255,
      g: 135,
      b: 183
    }
  }
};

var penis = {
  head: {
    size: 60,
    rgb: {
      r: 153,
      g: 51,
      b: 47
    }
  },
  tipSize: 5,
  posY: 0
};

var vignette = {
  size: 90,
  strokeSize: 10
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
  fill(vulva.majora.rgb.r, vulva.majora.rgb.g, vulva.majora.rgb.b);
  beginShape();
  vertex(centerX, centerY - vulva.majora.height + vulva.posY);
  vertex(centerX + vulva.majora.width, centerY + vulva.posY);
  vertex(centerX, centerY + vulva.majora.height + vulva.posY);
  vertex(centerX - vulva.majora.width, centerY + vulva.posY);
  endShape(CLOSE);

  //minora
  fill(vulva.minora.rgb.r, vulva.minora.rgb.g, vulva.minora.rgb.b);
  beginShape();
  vertex(centerX, centerY - vulva.minora.height + vulva.posY);
  vertex(centerX + vulva.minora.width, centerY + vulva.posY);
  vertex(centerX, centerY + vulva.minora.height + vulva.posY);
  vertex(centerX - vulva.minora.width, centerY + vulva.posY);
  endShape(CLOSE);

  //penis
  fill(penis.head.rgb.r, penis.head.rgb.g, penis.head.rgb.b);
  ellipse(centerX, centerY + penis.head.size / 2 + penis.posY, penis.head.size);
  fill(0);
  ellipse(centerX, centerY + penis.tipSize / 2 + penis.posY, penis.tipSize);

  //vignette
  strokeWeight(vignette.strokeSize);
  noFill();
  ellipse(centerX, centerY, vignette.size);
}



