

function setup() 
{
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);

}

function draw()
{
    background(200);
    noStroke();

    fill(10, 250, 12, 127);
    
    triangle(250, 18, 18, 360, 81, 360);

    rect(81, 81, 63, 63);

    quad(189, 18, 216, 18, 216, 360, 12, 360);

    ellipse(252, 144, 72, 72);

    triangle(100, 18, 351, 360, 288, 360); 

    arc(479, 300, 280, 280, PI, TWO_PI);
}

