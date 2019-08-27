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

let hair_colour;

let freckle_angles = [];
let freckle_pos = [];
let freckle_num = 4;
let freckle_radius;

function drawFace(eye_spacing, eye_height, eye_size, eye_angle, eye_squint, eyedetail_angle, eye_wink, left_eye_seed, right_eye_seed, mouth_width, mouth_height, mouth_emotion) {
    rectMode(CENTER);
    angleMode(DEGREES);
    core_colour = color(240, 200, 10);
    light_colour = color(240, 215, 24);
    shadow_colour = color(165, 42, 42, 15);
    highlight_colour = color(255, 70);
    translate(0, 0.5);

    face_core();
    scale(1, 1);
    eyes_core(eye_height, eye_spacing, eye_angle, eye_size, eye_squint, eyedetail_angle, eye_wink, left_eye_seed, right_eye_seed);
    mouth_core(mouth_width, mouth_height, mouth_emotion);

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

function eyes_core(eye_height, eye_spacing, eye_angle, eye_size, eye_squint, eyedetail_angle, eye_wink, left_eye_seed, right_eye_seed) {
    push();
    noStroke();
    //sets eye level
    translate(0, -eye_height);
    let wink = 0;

    //right eye
    push();
    translate(eye_spacing / 2, 0);
    //eye background/tiredness - could be randomised
    fill(core_colour);
    ellipse(0, 0, eye_size * 1.2, eye_size * 1.2);
    //eye fill - solid black
    fill(0);
    ellipse(0, 0, eye_size, eye_size);
    //white eye detail
    fill(255);
    ellipse(-eye_size / 7, -eye_size / 7, eye_size / 2.5, eye_size / 2.5);
    //rotates eye
    rotate(-eye_angle);
    if (eye_wink > 0) {
        wink = 0;
    } else {
        wink = eye_wink;
    }

    //draws details based on random value
    if (right_eye_seed <= 25) {
        eyes_detail_top(eye_size, eye_squint, eyedetail_angle, wink);
        eyes_detail_bottom(eye_size, eye_squint, eyedetail_angle, wink);
    } else if (right_eye_seed <= 50) {
        eyes_detail_bottom(eye_size, eye_squint, eyedetail_angle, wink);
    } else if (right_eye_seed <= 75) {
        eyes_detail_top(eye_size, eye_squint, eyedetail_angle, wink);
    }

    //draws eyebrows
    eyebrows(eye_size, eye_squint, eyedetail_angle, wink, 1);

    translate(eye_size / 2, eye_size);
    for (let i = 0; i < freckle_num; i++) {
        let pos = freckle_pos[i];
        let angle = freckle_angles[i];
        fill(160, 95, 52);
        push();
        rotate(-angle);
        ellipse(0, pos, 0.25, 0.25);
        pop();
    }

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

    if (left_eye_seed <= 25) {
        eyes_detail_top(eye_size, eye_squint, -eyedetail_angle, wink);
        eyes_detail_bottom(eye_size, eye_squint, -eyedetail_angle, wink);
    } else if (left_eye_seed <= 50) {
        eyes_detail_bottom(eye_size, eye_squint, -eyedetail_angle, wink);
    } else if (left_eye_seed <= 75) {
        eyes_detail_top(eye_size, eye_squint, -eyedetail_angle, wink);
    }

    eyebrows(eye_size, eye_squint, -eyedetail_angle, wink, -1);

    translate(-eye_size / 2, eye_size);
    for (let i = 0; i < freckle_num; i++) {
        let pos = freckle_pos[i];
        let angle = freckle_angles[i];
        fill(160, 95, 52);
        push();
        rotate(angle);
        ellipse(0, pos, 0.25, 0.25);
        pop();
    }
    pop();

    pop();
}

function eyes_detail_top(size, squint, angle, wink) {
    push();

    noStroke();
    fill(light_colour);
    let wink_amt = map(squint, 1.3, 1.9, 6, 3);

    //top
    push();
    translate(0, -size * squint / 2);
    translate(0, size * (abs(wink) / wink_amt));
    rotate(-angle);
    scale(1.5);
    ellipse(0, 0, size, size / 2);
    pop();

    highlight_colour.setAlpha(70);
    pop();
}

function eyes_detail_bottom(size, squint, angle, wink) {
    push();

    noStroke();
    fill(light_colour);
    let wink_amt = map(squint, 1.3, 1.9, 6, 3);

    //bottom
    push();
    translate(0, size * squint / 2);
    translate(0, -size * (abs(wink) / wink_amt));
    rotate(angle);
    scale(1.5);
    ellipse(0, 0, size, size / 2);
    highlight_colour.setAlpha(map(squint, 1.3, 1.9, 70, 0));
    stroke(highlight_colour);
    strokeWeight(0.1);
    noFill();
    let offset = map(angle, -15, 15, -10, 10);
    arc(0, 0, size / 1, size / 2.5, 215 - offset, 325 - offset);
    pop();

    highlight_colour.setAlpha(70);
    pop();
}


function eyebrows(size, squint, angle, wink, dir) {
    //eyebrow
    push();
    curveTightness(0);
    noFill();
    let wink_amt = map(squint, 1.3, 1.9, 6, 3);
    translate(0, -size * squint / 2);
    translate(0, size * (abs(wink) / wink_amt));
    rotate(-angle);
    scale(1.3);

    push()
    stroke(light_colour);
    strokeWeight(0.5);
    arc(0, 0, size, size / 4, 180, 0);
    pop();

    push()
    stroke(hair_colour);
    strokeWeight(0.4);
    arc(0, 0, size, size / 4, 180, 0);
    pop();

    pop();
}

function eyebrow_shape(size, dir) {
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(dir * size / 2, 0);
    curveVertex(0, -size / 8);
    curveVertex(dir * -size / 2, 0);
    curveVertex(dir * -size / 4, size / 8);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();
}

function mouth_core(mouth_width, mouth_height, mouth_emotion) {
    push();
    noFill();
    strokeWeight(0.5);
    translate(0, mouth_height);
    stroke(0);
    // arc(0, 0, mouth_width, 1, 0, 180);


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

function mouseClicked() {
    generate_random();
}

function generate_random() {
    freckle_radius = random(1, 1.5);
    freckle_angles = [];
    freckle_pos = [];
    for (let i = 0; i < freckle_num; i++) {
        let pos = random(0.5, freckle_radius);
        freckle_pos.push(pos);
        let angle = random(0, 360);
        freckle_angles.push(angle);
    }

    hair_colour = lego_hair_colours[int(random(0, lego_hair_colours.length))];
}