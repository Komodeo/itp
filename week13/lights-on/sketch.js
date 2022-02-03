function setup() {
  //create canvas
  createCanvas(600, 390);
  background(85, 109, 124);

  //draw ground
  noStroke();
  fill(83, 58, 84);
  rect(0, 300, width, height - 300);

  //draw wall
  fill(250, 239, 213);
  rect(105, 140, 390, 160);

  //draw roof
  fill(179, 50, 33);
  triangle(100, 140, 500, 140, 300, 62);

  //draw door
  rect(280, 235, 40, 65);
}

function draw() {

}
