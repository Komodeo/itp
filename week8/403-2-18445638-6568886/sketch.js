/*

Officer: 6568886
CaseNum: 403-2-18445638-6568886

Case 403 - Cornered - stage 3


We have Shiffman cornered at Aaron Swartz Memorial Park and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Aaron Swartz Memorial Park

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Aaron Swartz Memorial Park.
Draw a LawnGreen rectangle covering Aaron Swartz Memorial Park for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...

    if (mouseX > 1411 && mouseX < 1653 && mouseY > 408 && mouseY < 531) {
      fill(124, 252, 0);
      rect(1411, 408, 1653 - 1411, 531 - 408);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
