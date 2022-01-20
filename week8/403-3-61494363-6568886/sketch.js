/*

Officer: 6568886
CaseNum: 403-3-61494363-6568886

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Gosling Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 62 meters from Colossal Cave Arcade then alert local police by drawing a Peru circle around it with a radius of 62 pixels.
- if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a Orchid rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a SeaGreen rectangle covering the area between Gates Avenue, Reynolds Street, Gosling Road and Mullenweg Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload() {
  img = loadImage('map.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  // draw the image
  image(img, 0, 0);

  //Write your code below here ...

  // - if Shiffman is within 62 meters from Colossal Cave Arcade then alert local police by drawing a Peru circle around it with a radius of 62 pixels.
  if (dist(mouseX, mouseY, 455, 941) < 62) {
    fill(205, 133, 63);
    ellipse(455, 941, 62 * 2);
  }

  // - if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a Orchid rectangle around it.
  else if (mouseX > 2585 && mouseX < 2747 && mouseY > 104 && mouseY < 257) {
    fill(218, 112, 214);
    rect(2585, 104, 2747 - 2585, 257 - 104);
  }

  // - if Shiffman is in neither position, a global alert must be issued by drawing a SeaGreen rectangle covering the area between Gates Avenue, Reynolds Street, Gosling Road and Mullenweg Street.
  else {
    fill(46, 139, 87);
    rect(391, 572, 1232, 264);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
