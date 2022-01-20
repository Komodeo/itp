function setup()
{
	//create a canvas for painting
	createCanvas(764, 773);
}

function draw()
{
	strokeWeight(0);

	//top left rect
	fill(255, 255, 255);
	rect(0, 0, 165, 230);
  
    //next down
    fill(0, 0, 0);
    rect(0, 230, 165, 48);
  
    //next 3 on the left
    fill(255, 255, 255);
    rect(0, 280, 165, 280);
  
    fill(0, 0, 0);
    rect(0, 558, 764, 23);
  
    fill(0, 0, 255);
    rect(0, 581, 165, 192);
  
    //next rect to right
    fill(0, 0, 0);
    rect(165, 0, 23, 773);
  
    //top right rect
    fill(255, 0, 0);
    rect(188, 0, 576, 558);
    
    //middle bottom rect
    fill(255, 255, 255);
    rect(188, 581, 495, 192);
  
    //bottom right rects
    fill(0, 0, 0);
    rect(683, 581, 26, 192);
  
    fill(255, 255, 255);
    rect(709, 581, 55, 77);
  
    fill(0, 0, 0);
    rect(709, 658, 55, 35);
  
    fill(255, 255, 0);
    rect(709, 693, 55, 80);
  
	endShape();
}