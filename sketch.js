var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;

//color store
var bg_color = "#white";
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#c78a5b";
var skin_tone = "#ffe3d8";
var nose_tone = "#ffc8bf";
var blush_color = "#f9ab90";
var hat_color_green = "#7bbc60";
var hat_color_red = "#ce4a4a";
var eye_color = "#83cbff";
var stache_color = "#593510";

// global variables for colors
var bg_color1 = [225, 206, 187];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];



function setup() {

    // create the drawing canvas, save the canvas element
    var main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');

    // create sliders
    slider1 = createSlider(0, 100, 50);
    slider2 = createSlider(0, 100, 50);
    slider3 = createSlider(0, 100, 50);
    slider4 = createSlider(0, 100, 50);
    slider5 = createSlider(0, 100, 50);

    slider1.parent('slider1Container');
    slider2.parent('slider2Container');
    slider3.parent('slider3Container');
    slider4.parent('slider4Container');
    slider5.parent('slider5Container');

    faceSelector = createSelect();
    faceSelector.option('1');
    faceSelector.option('2');
    faceSelector.option('3');
    faceSelector.option('all')
    faceSelector.value('all');
    faceSelector.parent('selector1Container');

    // rotation in degrees
    angleMode(DEGREES);
}

function draw() {
    noStroke();

    var mode = faceSelector.value();

    if (mode != 'all') {
        if (mode == '1') {
            background(bg_color1);
        } else if (mode == '2') {
            background(bg_color2);
        } else if (mode == '3') {
            background(bg_color3);
        }
    }

    var s1 = slider1.value();
    var s2 = slider2.value();
    var s3 = slider3.value();
    var s4 = slider4.value();
    var s5 = slider5.value();

    // use same size / y_pos for all faces
    var face_w = canvasWidth / 4;
    var face_h = face_w;
    var face_y = height / 2;
    var face_x = width / 2;

    //face 1 : brown
    if (mode == '1' || mode == 'all') {

        fill(bg_color1);
        rect(0, 0, width / 3, height);
        var tilt_value = map(s1, 0, 100, -90, 90);
        var mouth_value = map(s3, 0, 100, 0, 200);
        var eye_value = Math.floor(map(s2, 0, 100, 1, 3));
        if (mode == 'all') {
            face_x = width / 6;
        }

        drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);
    }
    //face 2 : Mario
    if (mode == '2' || mode == 'all') {

        fill(bg_color2);
        rect(width / 3, 0, 2 * width / 3, height);
        var stache_slant_value = map(s1, 100, 0, 0.8, 1.8);
        var dilation_value = map(s2, 0, 100, 0.75, 1.25);
        var stache_bush_value = map(s3, 0, 100, 0.9, 1.4);
        var cheek_chub_value = map(s4, 0, 100, 0.9, 1.1);
        if (mode == 'all') {
            face_x = 3 * width / 6;
        }

        drawFace2(face_x, face_y, face_w, face_h, stache_slant_value, stache_bush_value, cheek_chub_value,dilation_value);
    }
    // face 3 : robot
    if (mode == '3' || mode == 'all') {

        fill(bg_color3);
        rect(2 * width / 3, 0, width, height);
        var width_value = map(s1, 0, 100, 0, 100);
        var mouth_value = map(s3, 0, 100, 0, 200);
        var eye_value = Math.floor(map(s2, 0, 100, 0, 3));
        if (mode == 'all') {
            face_x = 5 * width / 6;
        }

        drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value);
    }
}


//_______________DRAW FUNCTIONS______________//

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {

    push();
    translate(x, y);
    rotate(tilt_value);

    var extent = 0;
    if (h < w) {
        extent = h / 2;
    } else {
        extent = w / 2;
    }
    var scale = extent / 220.0;

    fill(fg_color1);
    ellipse(0, 0, 300 * scale, 400 * scale);

    // eyes
    if (eye_value === 1 || eye_value == 3) {
        fill(bg_color1);
        ellipse(0, -80 * scale, 50 * scale, 30 * scale);
        fill(fg_color1);
        ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
    }

    if (eye_value >= 2) {
        fill(bg_color1);
        ellipse(-50 * scale, -80 * scale, 50 * scale, 30 * scale);
        ellipse(50 * scale, -80 * scale, 50 * scale, 30 * scale);

        fill(fg_color1);
        ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
        ellipse(40 * scale, -80 * scale, 20 * scale, 20 * scale);
    }

    // mouth
    fill(bg_color1);
    ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
    pop();

}

function drawFace2(x, y, w, h, stache_slant, stache_bush, cheek_chub, dilation) {

    // function head(hatCol, xoff, yoff, rot) { //(color, xOffset, yOffset, rotation)

    push();
    //move to position,
    translate(x, y);


    //hat base
    noStroke();
    fill(hat_color_red);
    ellipse(0, -85, 150, 100);

    //face
    var chin_offset = (cheek_chub - 1) * 0.15 + 1; // allow scaling of chin w/o changing position of forehead
    chin_offset *= 220;
    fill(skin_tone);
    ellipse(0, chin_offset / 2 - 110, 160, chin_offset);
    ellipse(-22, 23, 150 * cheek_chub, 150 * cheek_chub); //cheeks
    ellipse(22, 23, 150 * cheek_chub, 150 * cheek_chub);
    fill(hat_color_red);
    ellipse(0, -81, 150, 60); // hat mask

    //blush
    fill(blush_color);
    ellipse(68*cheek_chub,24,25*cheek_chub,20*cheek_chub);
    ellipse(-68*cheek_chub,24,25*cheek_chub,20*cheek_chub);

    //stache
    moustache_6(100 * stache_bush, 45, 15 * stache_bush, 14 * stache_slant);


    //eyes
    fill("white");
    ellipse(-35, -25, 60, 80); //whites 
    ellipse(35, -25, 60, 80);
    noStroke();
    fill(eye_color);
    ellipse(-35, -13, 35, 45); //irises
    ellipse(35, -13, 35, 45);
    fill("black");
    ellipse(-35, -13, 23 * dilation, 31 * dilation); //pupils
    ellipse(35, -13, 23 * dilation, 31 * dilation);

    //nose
    var nose_size_mod = (stache_bush-1)*0.2 +1//slight scaling of nose base with stache bushiness
    var highlight_alpha = ((dilation-1)*2.5+1)*0.6;
    stroke(blush_color);
    fill(nose_tone);
    ellipse(0, 20, 75*nose_size_mod, 62*nose_size_mod); //nose base
    noStroke();
    fill(color('rgba(255, 227, 216,'+highlight_alpha+')'));
    ellipse(0, 16, 60*nose_size_mod, 50*nose_size_mod); //highlight

    // logo
    fill("white");
    ellipse(0, -100, 40, 40);
    stroke(hat_color_red);
    strokeWeight(2.5);
    ellipse(0, -100, 30, 30);
    strokeWeight(1.1);

    //hat brim
    fill(hat_color_red);
    stroke(bg_color);
    ellipse(0, -62, 135, 22);

    pop();

}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
    push();
    rectMode(CENTER);
    translate(x, y);
    // rotate(width_value);

    var extent = 0;
    if (h < w) {
        extent = h / 2;
    } else {
        extent = w / 2;
    }
    var scale = extent / 220.0;

    stroke(stroke_color2)
    fill(fg_color2);
    rect(0, 0, (300 + width_value) * scale, 400 * scale);

    // eyes
    if (eye_value === 1 || eye_value == 3) {
        fill(bg_color2);
        rect(0, -80 * scale, 50 * scale, 30 * scale);
        fill(fg_color2);
        ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
    }

    if (eye_value >= 2) {
        fill(bg_color2);
        rect(-60 * scale, -80 * scale, 50 * scale, 30 * scale);
        rect(60 * scale, -80 * scale, 50 * scale, 30 * scale);

        fill(fg_color2);
        ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
        ellipse(60 * scale, -80 * scale, 20 * scale, 20 * scale);
    }

    // mouth
    fill(bg_color2);
    rect(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
    rectMode(CORNER);
    pop();
}


function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == '@') {
        saveBlocksImages(true);
    }
}


//_________________LEVEL 2 FUNCTIONS__________\\

function moustache_6(wid, yOff, bush, slant) { //moustache is a series of O's arranged in a curve
    push();
    var b;
    var y; // y holds the value for each circle used to render the stache
    for (var i = 0; i < 5; i++) {
        b = bush;
        x = i - 2;
        y = (i % 3) * wid / slant;
        switch (i) {
            case 0:
                y = -0.5 * wid / slant;
                b *= 0.85;
                break;
            case 2:
                y = 1.8 * wid / slant;
                b *= 1.1;
                break;
            case 3:
                y = wid / slant;
                break;
            case 4:
                y = -0.5 * wid / slant;
                b *= 0.85;
                break;
        }
        //draw a dot
        fill(stache_color);
        noStroke();
        ellipse(x * wid / 6, y + yOff, b * wid / 60);

    }
    pop()
}