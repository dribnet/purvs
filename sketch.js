/* My two variables per letter are:
    hex1_xPos: x position of hexagon
    hex2_yPos: y position of hexagon */

// Sets constants/variables
const canvasWidth = 960;
const canvasHeight = 500;
const honeycombFill = "#FFC748";
const colorStroke = "#FFEFC1";

function setup() {
    // Create the drawing canvas, save the canvas element
    main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');

    // Sets background colour, honeycomb colours and stroke weight
    background(193, 233, 255);
    fill(honeycombFill);
    stroke(colorStroke);
    strokeWeight(4);

    // With no animation, redrawing the screen is not necessary
    noLoop();
}

function drawLetter() {
    // Sets parameters
    let hex1_xPos = letterData["1xPos"];
    let hex1_yPos = letterData["1yPos"];
}

// Makes hexagon shape
function draw_hex(hex1_xPos, hex1_yPos) {
    push();
    translate(hex1_xPos, hex1_yPos);
    strokeWeight(8);
    beginShape();
    vertex(-20, -34);
    vertex(20, -34);
    vertex(39, 0);
    vertex(20, 34);
    vertex(-20, 34);
    vertex(-39, 0);
    endShape(CLOSE);
    pop();
}

function draw(letterData) {
    // Draws letter A
    draw_hex(200, 168);
    draw_hex(140, 204);
    draw_hex(140, 272);
    draw_hex(140, 340);
    draw_hex(260, 204);
    draw_hex(260, 272);
    draw_hex(260, 340);
    draw_hex(200, 304);

    // Draws letter B
    draw_hex(400, 168);
    draw_hex(400, 236);
    draw_hex(400, 304);
    draw_hex(400, 372);
    draw_hex(460, 270);
    draw_hex(460, 406);
    draw_hex(520, 304);
    draw_hex(520, 372);

    // Draws letter C
    draw_hex(640, 236);
    draw_hex(640, 304);
    draw_hex(640, 372);
    draw_hex(700, 202);
    draw_hex(700, 406);
    draw_hex(760, 236);
    draw_hex(760, 372);
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == '@') {
        saveBlocksImages(true);
    }
}