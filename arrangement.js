/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let num_across = 10;
let num_down = 5;

let lastSwapTime = 0;
const millisPerSwap = 5000;

function setup() {
    // create the drawing canvas, save the canvas element
    let main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');

    curRandomSeed = int(focusedRandom(0, 1000));

    // rotation in degrees
    angleMode(DEGREES);

    set_colours();
    generate_random();
}

function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [225, 206, 187];

function mouseClicked() {
    changeRandomSeed();
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

            let mouth_width = focusedRandom(1, 4);
            let mouth_height = focusedRandom(1, 3);
            let mouth_emotion = focusedRandom(-2, 2);

            generate_random();

            push();
            translate(x, y);
            scale(h / 25, h / 25);
            rectMode(CENTER);
            // drawFace(
            //     eye_spacing,
            //     eye_height,
            //     eye_size,
            //     eye_angle,
            //     eye_squint,
            //     eyedetail_angle,
            //     eye_wink,
            //     left_eye_seed,
            //     right_eye_seed,
            //     mouth_width,
            //     mouth_height,
            //     mouth_emotion
            // );
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
            face.show();
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