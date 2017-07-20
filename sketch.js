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
var stache_color = "#593510"

function setup() {
    // create the drawing canvas, save the canvas element
    main_canvas = createCanvas(canvasWidth, canvasHeight);

    // position each element on the page
    main_canvas.parent('canvasContainer');

    // rotation in degrees
    angleMode(DEGREES);

    skin_tone_highlght = color('rgba(255, 227, 216, 0.8)');
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
    noStroke();
    fill(hatCol);
    ellipse(0, -85, 150, 100);

    //face
    fill(skin_tone);
    ellipse(0, 0, 160, 220);
    ellipse(-22, 23, 150, 150); //cheeks
    ellipse(22, 23, 150, 150);
    fill(hatCol);
    ellipse(0, -83, 150, 60); // hat mask

    moustache_6(140, 45, 15, 14);

    //eyes
    fill("white");
    ellipse(-35, -25, 60, 80);
    ellipse(35, -25, 60, 80);

    //puils
    noStroke();
    fill(eye_color);
    ellipse(-35, -13, 35, 45);
    ellipse(35, -13, 35, 45);
    fill("black");
    ellipse(-35, -13, 22, 32);
    ellipse(35, -13, 22, 32);

    //nose
    stroke(blush_color);
    fill(nose_tone);
    ellipse(0, 20, 75, 62);
    noStroke();
    fill(skin_tone_highlght);
    ellipse(0,16,58,48);

    // logo
    fill("white");
    ellipse(0, -100, 40, 40); 
    stroke(hatCol);
    strokeWeight(2.5);
    ellipse(0, -100, 30, 30); 
    strokeWeight(1.1); 

    //hat brim
    fill(hatCol);
    stroke(bg_color);
    ellipse(0, -62, 135, 22);

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
        fill(stache_color);
        noStroke();
        ellipse(x * wid / 6, y + yOff, b * wid / 60);

    }
pop();
}


function moustache_2() { // black 2-segmented moustache for luigi


}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == '@') {
        saveBlocksImages(true);
    }
}