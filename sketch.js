var canvasWidth = 1100;
var canvasHeight = 720;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;


var lastSwapTime = 0;
var millisPerSwap = 5000;

//color store
var skin_tone = "#ffe3d8";
var nose_tone = "#ffc8bf";
var blush_color = "#f9ab90";
var hat_color_green = "#7bbc60";
var hat_stroke_red = "#a32525"
var hat_color_red = "#ce4a4a";
var eye_color = "#83cbff";
var stache_color = "#593510";
var drool_color = "#99c0ff";
var spot_color = "#c18672";

// global variables for colors
var bg_color1 = [183, 214, 182];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];


function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
}

function mouseClicked() {
    changeRandomSeed();
}

function setup() {

    // create the drawing canvas, save the canvas element
    var main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');


    curRandomSeed = int(focusedRandom(0, 100));

    // rotation in degrees
    angleMode(DEGREES);
}

function draw() {
	if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

    resetFocusedRandom(curRandomSeed);

    noStroke();

    // use same size / y_pos for all faces
    var w = canvasWidth / 5;
    var h = canvasHeight / 3;

    //face 1 : old

    fill(bg_color1);
    rect(0, 0, width, height);

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 5; j++) {
            var y = h / 2 + h * i;
            var x = w / 2 + w * j;
            var tilt_value = focusedRandom(-15, 15, 4, 0);
            var ear_value = focusedRandom(0.6, 1.4, 2, 0.95);
            var smile_value = focusedRandom(-0.1, 2.1, 2, 1.2);
            var eye_value = focusedRandom(0.7, 1.3);
            var wrinkle_value = focusedRandom(0, 1, 2, 0.4);
            var spots_value = focusedRandom(0, 3, 2, 1);

            drawFace1(x, y, w, h, tilt_value, ear_value, eye_value, smile_value, wrinkle_value, spots_value);
        }
    }


}
//_______________DRAW FUNCTIONS______________//

function drawFace1(x, y, w, h, tilt, ears, eyes, smile, frown, spots) {
    //OLD

    push();
    translate(x, y);
    rotate(tilt);
    var shadow_color = editAlpha(blush_color, 0.65);

    fill(skin_tone);
    ellipse(0, 0, 165, 185); // face 

    fill(shadow_color);
    ellipse(0, 77, 30, 20); // lower frown line (upper shin shadow)
    fill(skin_tone);
    ellipse(0, 77, 32, 18); // mask for lower frown line

    ellipse(-10, 84, 25, 25); // butt chin left
    ellipse(10, 84, 25, 25); //butt chin right

    fill(215 + 10 * spots);
    push();
    translate(-63, -40);
    rotate(23);
    ellipse(0, 0, 35, 60); //hair left
    pop();

    push();
    translate(63, -40);
    rotate(-23);
    ellipse(0, 0, 35, 60); // hair right
    pop();


    //mouth 
    noFill();
    stroke(blush_color);
    strokeWeight(2+2*Math.abs(smile-1));
    curve(-40, 50 * smile, -20, 50, 20, 50, 40, 50 * smile); //curve(cpx1, cpy1, x1, y1, x2, y2, cpx2, cpy2);
    strokeWeight(3);
    //eyes (glasses)
    noStroke();
    fill(255, 140);
    ellipse(-23, 8, 30 * eyes, 25 * eyes); //lens L Highlight
    ellipse(23, 8, 30 * eyes, 25 * eyes); //lens R Highlight
    stroke(180);
    fill(255, 60);
    ellipse(-25, 5, 35 * eyes, 35 * eyes); //lens L
    ellipse(25, 5, 35 * eyes, 35 * eyes); //lens R
    curve(-15, 20, -7.5 * ampLify(eyes, -2), 2, 7.5 * ampLify(eyes, -2), 2, 15, 20); //bridge
    line(42 * ampLify(eyes, 0.35), -2 * ampLify(eyes, 0.35), 70, -12); //glasses leg R
    line(-42 * ampLify(eyes, 0.35), -2 * ampLify(eyes, 0.35), -70, -12); //glasses leg L
    noStroke();

    //ears
    push()
    translate(-65 - ears * 20, 0);
    scale(ears, ears);
    fill(shadow_color);
    ellipse(1, 2, 26, 49); //ear shadow left
    fill(skin_tone);
    ellipse(-0, 0, 30, 50); //ear left
    fill(shadow_color);
    ellipse(-2, 0, 12, 18); //inner ear shadow left
    fill(skin_tone);
    noStroke();
    ellipse(4, 2, 10, 10); //inner shadow mask left
    pop();

    push();
    translate(65 + ears * 20, 0)
    scale(ears, ears);
    fill(shadow_color);
    ellipse(-1, 2, 26, 49); //ear shadow right
    fill(skin_tone);
    ellipse(0, 0, 30, 50); //ear right

    fill(shadow_color);
    ellipse(2, 0, 12, 18); // inner ear shadow right
    fill(skin_tone);
    noStroke();
    ellipse(-4, 2, 10, 10); // inner shadow mask right
    pop();

    //frown lines
    var frown_color_value = editAlpha(blush_color, frown);
    stroke(frown_color_value);
    strokeWeight(2);
    curve(45, -70, 25, -50, -25, -50, -45, -70);
    curve(45, -50, 15, -43, -15, -43, -45, -50);
    curve(45, -25, 25, -35, -25, -35, -45, -25);

    //liver spots
    var spot_color_value;
    spot_color_value = editAlpha(spot_color, spots / 4 + 0.25);
    if (Math.floor(spots > 0)) {
        push();
        fill(spot_color_value);
        translate(23, -63);
        ellipse(0, 0, 4, 4);
        pop();
    }
    if (Math.floor(spots > 1)) {
        push();
        fill(spot_color_value);
        translate(20, -71);
        rotate(-45);
        ellipse(0, 0, 8, 6);
        pop();
    }
    if (Math.floor(spots > 2)) {
        push();
        fill(spot_color_value);
        translate(32, -68);
        rotate(52);
        ellipse(0, 0, 10, 7);
        pop();
    }
    pop();

}


//___________LEVEL 2 FUNCTIONS__________\\
//used by ren

function ampLify(inp, ampChange) { // multiply multiplier value as if negative values began at #1   
    var v = (inp - 1) * ampChange;
    v += 1;
    return v;
}

function editAlpha(col, val) {
    //input color stored as hex code String
    //return p5 color object feat. updated alpha
    var v = color(col);
    v._array[3] = val;
    return v;
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == '@') {
        saveBlocksImages(true);
        console.log("printing")
    }
}