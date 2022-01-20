/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6568886
CaseNum: 201-3-76989851-6568886

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below

    beginShape();
    vertex(473, 111);
    vertex(487, 114);
    vertex(489, 125);
    vertex(488, 147);
    vertex(549, 217);
    vertex(597, 231);
    vertex(608, 245);
    vertex(632, 253);
    vertex(641, 284);
    vertex(633, 303);
    vertex(627, 336);
    vertex(607, 336);
    vertex(610, 397);
    vertex(649, 397);
    vertex(659, 385);
    vertex(674, 395);
    vertex(655, 409);
    vertex(602, 414);
    vertex(587, 351);
    vertex(569, 369);
    vertex(513, 387);
    vertex(421, 469);
    vertex(404, 452);
    vertex(350, 486);
    vertex(321, 471);
    vertex(381, 438);
    vertex(374, 423);
    vertex(338, 441);
    vertex(281, 419);
    vertex(341, 416);
    vertex(353, 408);
    vertex(319, 389);
    vertex(551, 255);
    vertex(467, 132);
    endShape(CLOSE);

}
