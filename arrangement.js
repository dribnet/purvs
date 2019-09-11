/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let num_across = 7;
let num_down = 4;

let faces = [];

let lastSwapTime = 0;
const millisPerSwap = 5000;

function setup() {
    // create the drawing canvas, save the canvas element
    let main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');

    curRandomSeed = int(focusedRandom(0, 1000));

    // rotation in degrees
    angleMode(DEGREES);

    // draw a 7x4 grid of faces
    let w = canvasWidth / num_across;
    let h = canvasHeight / num_down;
    for (let i = 0; i < num_down; i++) {
        faces[i] = [];
        for (let j = 0; j < num_across; j++) {
            let y = (h) * i + h / 2;
            let x = (w) * j + w / 2;

            // center face
            let eye_spacing = focusedRandom(4.5, 8);
            let eye_height = focusedRandom(0, 2.2);
            let eye_size = focusedRandom(1.8, 3);
            let eye_angle = focusedRandom(-25, 25);
            let eye_squint = focusedRandom(1.3, 1.9);
            let eyedetail_angle = focusedRandom(-15, 15);
            let eye_wink = focusedRandom(-1, 1);
            let left_eye_seed = focusedRandom(0, 100);
            let right_eye_seed = focusedRandom(0, 100);

            let mouth_width = focusedRandom(2, 4);
            let mouth_height = focusedRandom(1, 3);
            let mouth_emotion = focusedRandom(-2, 2);

            generate_random();

            push();
            translate(x, y);
            scale(h / 30, h / 30);
            rectMode(CENTER);

            let face = new Face(
                eye_spacing,
                eye_height,
                eye_size,
                eye_angle,
                eye_squint,
                eyedetail_angle,
                eye_wink,
                left_eye_seed,
                right_eye_seed,
                mouth_width,
                mouth_height,
                mouth_emotion
            );
            face.get_new_random();
            faces[i][j] = face;
            pop();
        }
    }

    set_colours();
    generate_random();
    console.log(faces);
}

function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [255, 255, 255];

function mouseClicked() {
    changeRandomSeed();
    for (let i = 0; i < num_down; i++) {
        for (let j = 0; j < num_across; j++) {
            faces[i][j].new_face();
        }
    }
}

function draw() {
    if (millis() > lastSwapTime + millisPerSwap) {
        changeRandomSeed();
    }

    // reset the random number generator each time draw is called
    resetFocusedRandom(curRandomSeed);

    // clear screen
    background(bg_color1);
    noStroke();

    // draw a 7x4 grid of faces
    let w = canvasWidth / num_across;
    let h = canvasHeight / num_down;
    for (let i = 0; i < num_down; i++) {
        for (let j = 0; j < num_across; j++) {
            let y = (h) * i + h / 2;
            let x = (w) * j + w / 2;

            generate_random();

            push();
            translate(x, y);
            scale(h / 30, h / 30);
            rectMode(CENTER);

            faces[i][j].animate();
            faces[i][j].show();
            pop();
        }
    }
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == '@') {
        saveBlocksImages(true);
    }
}