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

function freckles(eye_height, eye_spacing, eye_size, freckle_angles, freckle_pos, freckle_num, dir) {
    push();
    noStroke();
    translate(0, -eye_height);

    push();
    translate(dir * eye_spacing / 2, 0);
    translate(dir * eye_size / 2, eye_size * 1.2);
    for (let i = 0; i < freckle_num; i++) {
        let pos = freckle_pos[i];
        let angle = freckle_angles[i];
        fill(160, 95, 52);
        push();
        rotate(dir * angle);
        ellipse(0, pos, 0.25, 0.25);
        pop();
    }
    pop();

    pop();
}

function tears(eye_height, eye_spacing, eye_size, freckle_angles, freckle_pos, freckle_num, dir) {
    push();
    noStroke();
    translate(0, -eye_height);
    fill(0, 200, 255);
    push();
    translate(dir * eye_spacing / 2, 0);
    translate(dir * eye_size, eye_size);
    rotate(dir * -15);

    scale(0.9);
    triangle(-1, -0.3, 1, -0.3, 0, -2)
    ellipse(0, 0, 2, 2);
    scale(0.7);
    fill(0, 210, 255);
    triangle(-1, -0.3, 1, -0.3, 0, -2)
    ellipse(0, 0, 2, 2);
    stroke(255, 100);
    strokeWeight(0.3);
    line(dir * 1, -0.3, 0, -2);
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
        let angle = random((i - 1) * 360 / freckle_num, i * 360 / freckle_num);
        freckle_angles.push(angle);
    }

    hair_colour = lego_hair_colours[int(random(0, lego_hair_colours.length))];
}

function dirt() {
    push();
    for (let y = -10; y <= 10; y += 0.1) {
        for (let x = -10; x <= 10; x += 0.1) {
            //noiseSeed(random());
            noiseval = noise(x, y);
            if (noiseval > 0.8) {
                core_colour.setAlpha(noiseval * 100);
                fill(core_colour);
                ellipse(x, y, 1 * noiseval, 1 * noiseval);
            }
        }
    }
    core_colour.setAlpha(255);
    pop();
}