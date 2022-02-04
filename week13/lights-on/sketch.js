// initialize windows
var windows = [{
  x: 145,
  y: 155,
  w: 80,
  h: 40
}, {
  x: 280,
  y: 155,
  w: 40,
  h: 40
}, {
  x: 375,
  y: 155,
  w: 80,
  h: 40
}, {
  x: 145,
  y: 235,
  w: 80,
  h: 40
}, {
  x: 375,
  y: 235,
  w: 80,
  h: 40
}];

function setup() {
  //create canvas
  createCanvas(600, 390);

  //draw sky
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

  //draw windows
  for (i = 0; i < windows.length; i++) {
    fill(0);
    rect(windows[i].x, windows[i].y, windows[i].w, windows[i].h);
  }
}

//switch the light on window click
function mousePressed() {
  for (i = 0; i < windows.length; i++) {
    //check if mouse is over window
    if (winMouseX >= windows[i].x && winMouseX <= windows[i].x + windows[i].w && winMouseY >= windows[i].y && winMouseY <= windows[i].y + windows[i].h) {
      lightSwitch(i);
    }
  }
}

//turn the light on or off
function lightSwitch(currentWindow) {
  windows[i].on = !windows[i].on;
  if (windows[currentWindow].on) {
    fill(224, 224, 116);
  }
  else {
    fill(0);
  }
  rect(windows[currentWindow].x, windows[currentWindow].y, windows[currentWindow].w, windows[currentWindow].h);
}
