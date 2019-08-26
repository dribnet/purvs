/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

const face_core_width = 17;
const face_core_height = 14;
const face_rounding = 2;
let percentage = 0.8;

const face_top_width = 7;
const face_top_height = 3;

const face_bottom_width = 10;
const face_bottom_height = 2;

let core_colour;
let light_colour;
let shadow_colour;
let highlight_colour;

function drawFace(eye_spacing, eye_height, eye_size, eye_angle, eye_squint, eyedetail_angle, eye_wink, eye_seed, mouth_width, mouth_height, mouth_emotion) {
    rectMode(CENTER);
    angleMode(DEGREES);
    core_colour = color(240, 200, 10);
    light_colour = color(240, 215, 24);
    shadow_colour = color(165, 42, 42, 15);
    highlight_colour = color(255, 70);
    translate(0, 0.5);

    face_core();
    scale(1, 1);
    eyes_core(eye_height, eye_spacing, eye_angle, eye_size, eye_squint, eyedetail_angle, eye_wink, eye_seed);
    //mouth_core(mouth_width, mouth_height, mouth_emotion);

    //light reflection
    push();
    noFill();
    strokeWeight(1);
    stroke(highlight_colour);
    arc(-4, -4.5, 2, 2, 180, 270);
    pop();
}

function face_core() {
    push();
    noStroke();

    //fill core colour
    fill(core_colour);

    rect(0, 0, face_core_width, face_core_height, 2.5); //core
    rect(0, 8, face_bottom_width, face_bottom_height); // bottom
    rect(0, -8.5, face_top_width, face_top_height, 0.25 * face_rounding, 0.25 * face_rounding, 0, 0); // top

    //fill highlight
    fill(light_colour);
    rect(0, 0, face_core_width * percentage, face_core_height, 2.5); //core
    rect(0, 8, face_bottom_width * percentage, face_bottom_height); // bottom
    rect(0, -8.5, face_top_width * percentage * 0.8, face_top_height, 0.25 * face_rounding, 0.25 * face_rounding, 0, 0); // top

    //fill shadow
    fill(shadow_colour);
    rect(0, 7.5, face_bottom_width, face_bottom_height / 2);

    pop();
}

function eyes_core(eye_height, eye_spacing, eye_angle, eye_size, eye_squint, eyedetail_angle, eye_wink, eye_seed) {
    push();
    noStroke();
    //sets eye level
    translate(0, -eye_height);
    let wink = 0;

    //right eye
    push();
    translate(eye_spacing / 2, 0);

    fill(core_colour);
    ellipse(0, 0, eye_size * 1.2, eye_size * 1.2);

    fill(0);
    ellipse(0, 0, eye_size, eye_size);

    fill(255);
    ellipse(-eye_size / 7, -eye_size / 7, eye_size / 2.5, eye_size / 2.5);

    rotate(-eye_angle);
    if (eye_wink > 0) {
        wink = 0;
    } else {
        wink = eye_wink;
    }


    if (eye_seed <= 25) {
        eyes_detail_top(eye_size, eye_squint, eyedetail_angle, wink);
        eyes_detail_bottom(eye_size, eye_squint, eyedetail_angle, wink);
    } else if (eye_seed <= 50) {
        eyes_detail_bottom(eye_size, eye_squint, eyedetail_angle, wink);
    } else if (eye_seed <= 75) {
        eyes_detail_top(eye_size, eye_squint, eyedetail_angle, wink);
    }





    //eyebrows(eye_size, eye_squint, eyedetail_angle);

    pop();

    //left eye
    push();
    translate(-eye_spacing / 2, 0);
    fill(core_colour);
    ellipse(0, 0, eye_size * 1.2, eye_size * 1.2);
    //ellipse(0, 0, eye_size, eye_size * eye_squint);
    fill(0);
    ellipse(0, 0, eye_size, eye_size);
    fill(255);
    ellipse(-eye_size / 7, -eye_size / 7, eye_size / 2.5, eye_size / 2.5);
    rotate(eye_angle);
    if (eye_wink < 0) {
        wink = 0;
    } else {
        wink = eye_wink;
    }


    if (eye_seed <= 25) {
        eyes_detail_top(eye_size, eye_squint, -eyedetail_angle, wink);
        eyes_detail_bottom(eye_size, eye_squint, -eyedetail_angle, wink);
    } else if (eye_seed <= 50) {
        eyes_detail_bottom(eye_size, eye_squint, -eyedetail_angle, wink);
    } else if (eye_seed <= 75) {
        eyes_detail_top(eye_size, eye_squint, -eyedetail_angle, wink);
    }


    //eyebrows(eye_size, eye_squint, -eyedetail_angle);

    pop();

    pop();
}

function eyes_detail_top(y, squint, angle, wink) {
    push();

    noStroke();
    fill(light_colour);
    let wink_amt = map(squint, 1.3, 1.9, 6, 3);

    //top
    push();
    translate(0, -y * squint / 2);
    translate(0, y * (abs(wink) / wink_amt));
    rotate(-angle);
    //rect(0, 0, y, y / 3);
    scale(1.5);
    ellipse(0, 0, y, y / 2);
    pop();

    highlight_colour.setAlpha(70);
    pop();
}

function eyes_detail_bottom(y, squint, angle, wink) {
    push();

    noStroke();
    fill(light_colour);
    let wink_amt = map(squint, 1.3, 1.9, 6, 3);

    //bottom
    push();
    translate(0, y * squint / 2);
    translate(0, -y * (abs(wink) / wink_amt));
    rotate(angle);
    scale(1.5);
    ellipse(0, 0, y, y / 2);
    highlight_colour.setAlpha(map(squint, 1.3, 1.9, 70, 0));
    stroke(highlight_colour);
    strokeWeight(0.1);
    noFill();
    let offset = map(angle, -15, 15, -10, 10);
    arc(0, 0, y / 1, y / 2.5, 215 - offset, 325 - offset);
    pop();

    highlight_colour.setAlpha(70);
    pop();
}


function eyebrows(y, s, a) {
    //eyebrow
    push()
    fill(0)
    translate(0, -y * s / 2);
    rotate(-a);
    rect(0, 0, y, y / 4);
    pop();
}

function mouth_core(mouth_width, mouth_height, mouth_emotion) {
    push();
    noFill();
    strokeWeight(0.5);
    translate(0, mouth_height);
    stroke(0);
    //arc(0, 0, mouth_width, 1, 0, 180);

    //top lip
    beginShape();
    curveVertex(-mouth_width / 2, 0);
    curveVertex(-mouth_width / 2, 0);
    curveVertex(-mouth_width / 4, mouth_emotion);
    curveVertex(mouth_width / 4, mouth_emotion);
    curveVertex(mouth_width / 2, 0);
    curveVertex(mouth_width / 2, 0);
    endShape();

    //top lip
    beginShape();
    curveVertex(-mouth_width / 2, 0);
    curveVertex(-mouth_width / 2, 0);
    curveVertex(-mouth_width / 4, mouth_emotion / 3);
    curveVertex(mouth_width / 4, mouth_emotion / 3);
    curveVertex(mouth_width / 2, 0);
    curveVertex(mouth_width / 2, 0);
    endShape();
    pop();
}



function pivot_point(s) {
    fill(255, 0, 0);
    ellipse(0, 0, 0.5, 0.5);
    fill(0, 200, 255);
    textSize(0.6);
    textAlign(CENTER, CENTER);
    text(s, 0, -0.5);
}