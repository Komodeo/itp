var flowers = [];
var flower;

function setup() {
    createCanvas(1000, 500);
    base_x = width / 2;
    base_y = height - 50;

    flower = {
        base_x: 0,
        base_y: height - 50,
        stem_h: 100,
        col: color(255, 50, 50)
    };

    for (var i = 0; i < 10; i++) {

        flower.base_x = i * 100;
        flower.stem_h = random(50, 400);
        flower.col = color(
            random(0, 255),
            random(0, 255),
            random(0, 255)
        );
        flowers.push({"base_x": flower.base_x, "base_y": flower.base_y, "stem_h": flower.stem_h, "col": flower.col});
    }

    background(150, 150, 250);
    for (i = 0; i < flowers.length; i++) {
        drawFlower(i);
    }
}

function drawFlower(_flower) {
    noFill();
    strokeWeight(10);
    stroke(0, 200, 50);
    curve(flowers[_flower].base_x + 200, flowers[_flower].base_y + 100,
        flowers[_flower].base_x, flowers[_flower].base_y,
        flowers[_flower].base_x, flowers[_flower].base_y - flowers[_flower].stem_h,
        flowers[_flower].base_x - 200, flowers[_flower].base_y - (flowers[_flower].stem_h + 100));

    noStroke();
    fill(flowers[_flower].col);
    ellipse(flowers[_flower].base_x + 45, flowers[_flower].base_y - flowers[_flower].stem_h, 70, 50);
    ellipse(flowers[_flower].base_x - 45, flowers[_flower].base_y - flowers[_flower].stem_h, 70, 50);
    ellipse(flowers[_flower].base_x, flowers[_flower].base_y + 45 - flowers[_flower].stem_h, 50, 70);
    ellipse(flowers[_flower].base_x, flowers[_flower].base_y - 45 - flowers[_flower].stem_h, 50, 70);

    //flip the colour
    flowers[_flower].col = color(
        blue(flowers[_flower].col),
        red(flowers[_flower].col),
        green(flowers[_flower].col)
    );

    //draw the center
    fill(flowers[_flower].col);
    ellipse(flowers[_flower].base_x, flowers[_flower].base_y - flowers[_flower].stem_h, 50, 50);
}






