function setup()
{
	//create your canvas here
  createCanvas(500, 500);
  background(214, 251, 255);
}

function draw()
{
	//do your drawing here
  
  
  //eye group
    
  //inner
  strokeWeight(1);
  line(250, 150, 260, 190);
  line(250, 150, 240, 190);
  line(250, 240, 260, 190);
  line(250, 240, 240, 190);
    
  //outer
  line(250, 130, 280, 190);
  line(250, 130, 220, 190);
  line(250, 260, 280, 190);
  line(250, 260, 220, 190);
  
  //tear duct
  fill(235, 152, 181);
  ellipse(250, 160, 25);
    
  //iris
  fill(255, 133, 182);
  ellipse(250, 210, 10);
  point(250, 210);
  
  //spotlights
  fill(252, 225, 237, 5);
  strokeWeight(1);
  triangle(-225, -150, 1300, 750, 1000, 1140);
  triangle(725, -150, -800, 750, -500, 1140);
  
  //cheeks
  strokeWeight(1);
  fill(252, 225, 237, 255);
  ellipse(340, 300, 200);
  ellipse(160, 300, 200);
  noFill();
  ellipse(340, 300, 200);
  
  //trunk
  fill(71, 43, 12);
  rect(220, 320, 60, 200);
    
  //head
  fill(153, 51, 47);
  ellipse(250, 310, 70);
  
  //tip
  strokeWeight(5);
  point(250, 277);
  
  //big circle
  strokeWeight(10);
  noFill();
  ellipse(250, 250, 400, 400);
}