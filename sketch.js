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

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

var m_x
var m_y

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
    faceSelector.value('1');
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
        var ear_value = map(s1, 0, 100, 0.7, 1.3);
        var smile_value = map(s3, 0, 100, -0.1, 2.1);
        var eye_value = map(s2, 0, 100, 0.7, 1.3);
        var wrinkle_value = map(s4,0,100,0,0.7);
        var spots_value = map(s5,0,100,0,3);

        if (mode == 'all') {
            face_x = width / 6;
        }

        drawFace1(face_x, face_y, face_w, face_h, ear_value, eye_value, smile_value,wrinkle_value,spots_value);
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

        drawFace2(face_x, face_y, face_w, face_h, stache_slant_value, stache_bush_value, cheek_chub_value, dilation_value);
    }
    // face 3 : babby
    if (mode == '3' || mode == 'all') {

        fill(bg_color3);
        rect(2 * width / 3, 0, 2 * width / 3, height);
        var hair_volume_value = map(s1, 100, 0, 0.8, 1.8);
        var nose_size_value = map(s2, 0, 100, 0.6, 1.4);
        var mouth_gape_value = map(s3, 0, 100, 0.9, 1.4);
        var cheek_chub_value = map(s4, 0, 100, 0.9, 1.1);
        var drool_drip_value = map(s5, 0, 100, 0.9, 1.45);
        if (mode == 'all') {
            face_x = 5 * width / 6;
        }

        drawFace3(face_x, face_y, face_w, face_h, hair_volume_value, mouth_gape_value, cheek_chub_value, nose_size_value, drool_drip_value);
    }

}

//_______________DRAW FUNCTIONS______________//

function drawFace1(x, y, w, h, ears, eyes, smile,frown,spots) {
    //OLD

    push();
    translate(x, y);

    var shadow_color = editAlpha(blush_color, 0.65);

    fill(skin_tone);
    ellipse(0, 0, 165, 185); // face 

    fill(shadow_color);
    ellipse(0, 77, 30, 20); // lower frown line (upper shin shadow)
    fill(skin_tone);
    ellipse(0, 77, 32, 18); // mask for lower frown line

    ellipse(-10, 84, 25, 25); // butt chin left
    ellipse(10, 84, 25, 25); //butt chin right

    fill(215+10*spots);
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
    strokeWeight(3);
    curve(-40, 50 * smile, -20, 50, 20, 50, 40, 50 * smile); //curve(cpx1, cpy1, x1, y1, x2, y2, cpx2, cpy2);

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
    line(42 * ampLify(eyes, 0.35), -2 * ampLify(eyes, 0.35), 66, -12); //glasses leg R
    line(-42 * ampLify(eyes, 0.35), -2 * ampLify(eyes, 0.35), -66, -12); //glasses leg L
    noStroke();

    //ears
    push()
    translate(-65 - ears * 15, 0);
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
    translate(65 + ears * 15, 0)
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
    var frown_color_value = editAlpha(blush_color,frown);
    stroke(frown_color_value);
    strokeWeight(2);
    curve(45,-70, 25,-50, -25,-50, -45,-70);
   	curve(45,-50, 15,-43, -15,-43, -45,-50);
   	curve(45,-25, 25,-35, -25,-35, -45,-25);

   	//liver spots
   	var spot_color_value;
   	spot_color_value = editAlpha(spot_color,spots/4+0.25);
   	if(Math.floor(spots>0)){
   		push();
   		fill(spot_color_value);
   		translate(23,-63);
   		ellipse(0,0,4,4);
   		pop();
   	}
   	if(Math.floor(spots>1)){
   		push();
   		fill(spot_color_value);
   		translate(20,-71);
   		rotate(-45);
   		ellipse(0,0,8,6);
   		pop();
   	}
   	if(Math.floor(spots>2)){
   		push();
   		fill(spot_color_value);
   		translate(32,-68);
   		rotate(52);
   		ellipse(0,0,10,7);
   		pop();
   	}
    pop();

}

function drawFace2(x, y, w, h, stache_slant, stache_bush, cheek_chub, dilation) {

    push();
    //move to position,
    translate(x, y);


    //hat base
    noStroke();
    fill(hat_color_red);
    ellipse(0, -85, 150, 100);

    //face
    var chin_offset = ampLify(cheek_chub, 0.15); // allow scaling of chin w/o changing position of forehead
    chin_offset *= 220;
    fill(skin_tone);
    ellipse(0, chin_offset / 2 - 110, 160, chin_offset);
    ellipse(-22, 23, 150 * cheek_chub, 150 * cheek_chub); //cheeks
    ellipse(22, 23, 150 * cheek_chub, 150 * cheek_chub);
    fill(hat_color_red);
    ellipse(0, -81, 150, 60); // hat mask

    //blush
    fill(blush_color);
    ellipse(68 * cheek_chub, 24, 25 * cheek_chub, 20 * cheek_chub);
    ellipse(-68 * cheek_chub, 24, 25 * cheek_chub, 20 * cheek_chub);

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
    var nose_size_mod = ampLify(stache_bush, 0.15) //slight scaling of nose base with stache bushiness
    stroke(blush_color);
    fill(nose_tone);
    ellipse(0, 20, 70 * nose_size_mod, 58 * nose_size_mod); //nose base
    noStroke();
    fill(editAlpha(skin_tone,0.7));
    ellipse(0, 16, 58 * nose_size_mod, 48 * nose_size_mod); //highlight

    // logo
    fill("white");
    ellipse(0, -100, 40, 40);
    stroke(hat_color_red);
    strokeWeight(2.5);
    ellipse(0, -100, 30, 30);
    strokeWeight(1.1);

    //hat brim
    fill(hat_color_red);
    stroke(color(40, 40));
    ellipse(0, -62, 135, 22);

    pop();

}

function drawFace3(x, y, w, h, hair_volume, mouth_size, cheek_chub, nose_size, drool_drip) {
    //BABYFACE
    push();
    //move to position,
    translate(x, y);

    //face
    fill(skin_tone);
    ellipse(0, 0, 170, 180);
    ellipse(-32, 20, 110 * cheek_chub, 120 * cheek_chub); //cheeks
    ellipse(32, 20, 110 * cheek_chub, 120 * cheek_chub);
    fill(hat_color_red);
    //ellipse(0, -81, 150, 60); // hat mask

    //blush
    fill(blush_color);
    ellipse(45 * cheek_chub, 18, 25 * cheek_chub, 20 * cheek_chub);
    ellipse(-45 * cheek_chub, 18, 25 * cheek_chub, 20 * cheek_chub);

    //eyes
    fill("white");
    ellipse(-26, -18, 32, 35); //whites 
    ellipse(26, -18, 32, 35);
    noStroke();
    fill("black");
    ellipse(-26, -26 + 8 * drool_drip, 6, 6); //pupils
    ellipse(26, -26 + 8 * drool_drip, 6, 6);

    //nose
    var nose_size_mod = ampLify(nose_size, 0.8); //slight scaling of nose base with stache bushiness
    stroke(blush_color);
    fill(nose_tone);
    ellipse(0, 20, 28 * nose_size_mod, 22 * nose_size_mod); //nose base
    noStroke();
    fill(color('rgba(255, 227, 216,0.6)'));
    ellipse(0, 19, 22 * nose_size_mod, 19 * nose_size_mod); //highlight

    //mouth
    var mouth_size_mod = mouth_size;
    var drool_drip_mod;
    fill('black');
    ellipse(0, 55, 30 * mouth_size_mod, 25 * mouth_size_mod);
    fill(blush_color);
    ellipse(2 * mouth_size_mod, 62 + (2.5 * mouth_size_mod), 15 * mouth_size_mod, 10 * mouth_size_mod);
    noFill();
    stroke(skin_tone);
    strokeWeight(7);
    ellipse(0, 55, 30 * mouth_size_mod, 25 * mouth_size_mod);

    //drool        
    noStroke();
    if (drool_drip > 1 && drool_drip < 1.25) { // one droplet of drool drips down face and grows in size
        fill(drool_color);
        var drool_height = 3 * ampLify(drool_drip, 7);
        var drool_y = 12 * mouth_size_mod + 21 + drool_height + drool_drip * 24
        ellipse(9 * mouth_size_mod, drool_y, 5, drool_height);
    }
    if (drool_drip > 1.25) { // second droplet is rendered once first reaches length cap
        fill(drool_color);
        var drool_height = 3 * ampLify(1.25, 7);
        var drool_y = 12 * mouth_size_mod + 21 + drool_height + drool_drip * 24
        ellipse(9 * mouth_size_mod, drool_y, 5, drool_height);
        ellipse(9 * mouth_size_mod, drool_y - drool_height * 1.1, 5, drool_height);
    }

    //brow mask
    rectMode(CENTER);
    fill(skin_tone);
    rect(0, -72 + 20 * drool_drip, 100, 35);
    pop();

}

//___________LEVEL 2 FUNCTIONS__________\\
//used by render functions

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
    pop();
}

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