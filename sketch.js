var canvasWidth = 960;
var canvasHeight = 500;


// global variables for colors
var bg_color = "#white";
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#c78a5b";
var skin_tone = "#ffe3d8";
var skin_tone_highlght;
var nose_tone = "#ffc8bf";
var blush_color = "#f9ab90";
var hat_color_green = "#7bbc60";
var hat_color_red = "#ce4a4a";
var eye_color = "#83cbff";

function setup() {
    // create the drawing canvas, save the canvas element
    main_canvas = createCanvas(canvasWidth, canvasHeight);

    // position each element on the page
    main_canvas.parent('canvasContainer');

    // rotation in degrees
    angleMode(DEGREES);
    skin_tone_highlght = c = color('rgba(255, 227, 216, 0.8)');
}


function draw() {
    // background color
    background(bg_color);
    // stroke color
    stroke(bg_color)
    ellipse();
    head(hat_color_red, 960 / 4, 500 / 2, 0);
    head(hat_color_green, 2.5 * 960 / 4, 500 / 2, 30);
}


function head(hatCol, xoff, yoff, rot) { //(color, xOffset, yOffset, rotation)

    push();
    //move to position, rotate
    translate(xoff, yoff);
    rotate(rot);

    //hat base
    stroke(hatCol);
    fill(hatCol);
    ellipse(0, -100, 150, 110);

    //face
    noStroke();
    fill(skin_tone);
    ellipse(0, 0, 160, 220);
    ellipse(-30,30, 150, 150);
    ellipse(30,30, 150, 150);


    // draw two eyes
    fill("white");
    ellipse(-35, -25, 60, 80);
    ellipse(35, -25, 60, 80);

    //set fill back to foreground for eyeballs
    noStroke();
    fill(eye_color);
    ellipse(-35, -10, 35, 45);
    ellipse(35, -10, 35, 45);
    fill("black");
    ellipse(-35, -10, 22, 32);
    ellipse(35, -10, 22, 32);

    //moustache
    moustache_6(140, 45, 15, 14);

    //nose
    stroke(blush_color);
    fill(nose_tone);
    ellipse(0, 20, 75, 62);
    noStroke();
    fill(skin_tone_highlght);
    ellipse(0,16,58,48);

    //hat brim
    noStroke();
    fill(hatCol);
    ellipse(0, -92, 115, 40);
    stroke(bg_color);
    ellipse(0, -77, 115, 30);
    fill("white");
    ellipse(0, -115, 40, 40);

    //bounding box
    fill(255, 0);
    stroke(blush_color);
    rect(-160, -160, 300, 300);

    pop();


}

function moustache_6(wid, yOff, bush, slant) { //moustache is a series of O's arranged in a curve
push();
    var b;
    var y; // y holds the value for each circle used to render the stache
    for (var i = 0; i < 5; i++) {
        b = bush;
        x = i - 2;
        y = (i%3)*wid/slant;
        switch (i) {
            case 0 :
                y = -0.6 * wid / slant;
                b *= 0.9;
                break;
            case 2:
                y = 1.8 * wid / slant;
                b *= 1.05;
                break;
            case 3:
                y = wid / slant;
                break;
            case 4 :
                y = -0.6 * wid / slant;
                b *= 0.9;
                break;
        }
        //draw a dot
        fill("brown");
        noStroke();
        ellipse(x * wid / 6, y + yOff, b * wid / 60);

    }
pop();
}


function moustache_2() {}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == '@') {
        saveBlocksImages(true);
    }
}