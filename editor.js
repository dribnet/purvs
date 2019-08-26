/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
let eye_spacing_slider,
    eye_height_slider,
    eye_size_slider,
    eye_angle_slider,
    eye_squint_slider,
    eyedetail_angle_slider,
    eye_wink_slider,
    eye_seed_slider;

let mouth_width_slider,
    mouth_height_slider;

let faceSelector;
let faceGuideCheckbox;

function setup() {
    // create the drawing canvas, save the canvas element
    let main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');

    // create eye sliders
    eye_spacing_slider = createSlider(0, 100, 50);
    eye_height_slider = createSlider(0, 100, 50);
    eye_size_slider = createSlider(0, 100, 50);
    eye_angle_slider = createSlider(0, 100, 50);
    eye_squint_slider = createSlider(0, 100, 50);
    eyedetail_angle_slider = createSlider(0, 100, 50);
    eye_wink_slider = createSlider(0, 100, 50);
    eye_seed_slider = createSlider(0, 100, 50, 25);


    // create mouth sliders
    mouth_width_slider = createSlider(0, 100, 50);
    mouth_height_slider = createSlider(0, 100, 50);
    mouth_emotion_slider = createSlider(0, 100, 50);

    eye_spacing_slider.parent('slider1Container');
    eye_height_slider.parent('slider2Container');
    eye_size_slider.parent('slider3Container');
    eye_angle_slider.parent('slider4Container');
    eye_squint_slider.parent('slider5Container');
    eyedetail_angle_slider.parent('slider6Container');
    eye_wink_slider.parent('slider10Container');
    eye_seed_slider.parent('slider11Container');

    mouth_width_slider.parent('slider7Container');
    mouth_height_slider.parent('slider8Container');
    mouth_emotion_slider.parent('slider9Container');

    faceGuideCheckbox = createCheckbox('', false);
    faceGuideCheckbox.parent('checkbox1Container');

    faceSelector = createSelect();
    faceSelector.option('1');
    faceSelector.option('2');
    faceSelector.option('3');
    faceSelector.value('1');
    faceSelector.parent('selector1Container');
}

const bg_color = [225, 206, 187];

function draw() {
    strokeWeight(0.2);

    let mode = faceSelector.value();

    background(bg_color);

    let eye_spacing_value = eye_spacing_slider.value();
    let eye_height_value = eye_height_slider.value();
    let eye_size_value = eye_size_slider.value();
    let eye_angle_value = eye_angle_slider.value();
    let eye_squint_value = eye_squint_slider.value();
    let eyedetail_angle_value = eyedetail_angle_slider.value();
    let eye_wink_value = eye_wink_slider.value();
    let eye_seed_value = eye_seed_slider.value();

    let mouth_width_value = mouth_width_slider.value();
    let mouth_height_value = mouth_height_slider.value();
    let mouth_emotion_value = mouth_emotion_slider.value();

    let show_face_guide = faceGuideCheckbox.checked();

    // use same size / y_pos for all faces
    let face_size = canvasWidth / 5;
    let face_scale = face_size / 10;
    let face_y = height / 2;
    let face_x = width / 2;

    push();
    translate(face_x, face_y);
    scale(face_scale);

    push();
    if (mode == '1') {

        let eye_spacing = map(eye_spacing_value, 0, 100, 4.5, 8);
        let eye_height = map(eye_height_value, 0, 100, 0, 3);
        let eye_size = map(eye_size_value, 0, 100, 1.5, 3);
        let eye_angle = map(eye_angle_value, 0, 100, -25, 25);
        let eye_squint = map(eye_squint_value, 0, 100, 1.3, 1.9);
        let eyedetail_angle = map(eyedetail_angle_value, 0, 100, -15, 15);
        let eye_wink = map(eye_wink_value, 0, 100, -1, 1);
        let eye_seed = map(eye_seed_value, 0, 100, 0, 100);

        let mouth_width = map(mouth_width_value, 0, 100, 1, 4);
        let mouth_height = map(mouth_height_value, 0, 100, 1, 3);
        let mouth_emotion = map(mouth_emotion_value, 0, 100, -2, 2);

        drawFace(
            eye_spacing,
            eye_height,
            eye_size,
            eye_angle,
            eye_squint,
            eyedetail_angle,
            eye_wink,
            eye_seed,
            mouth_width,
            mouth_height,
            mouth_emotion
        );
    }

    if (mode == '2') {
        let eye_spacing = map(eye_spacing_value, 0, 100, 4.5, 8);
        let eye_height = map(eye_height_value, 0, 100, 0, 3);
        let eye_size = map(eye_size_value, 0, 100, 1, 3);
        let eye_angle = map(eye_angle_value, 0, 100, -30, 30);
        let eye_squint = map(eye_squint_value, 0, 100, 0.5, 1.5);
        let eyedetail_angle = map(eyedetail_angle_value, 0, 100, -30, 30);
        drawFace(eye_spacing, eye_height, eye_size, eye_angle, eye_squint, eyedetail_angle);
    }

    if (mode == '3') {
        let eye_spacing = map(eye_spacing_value, 0, 100, 4.5, 8);
        let eye_height = map(eye_height_value, 0, 100, 0, 3);
        let eye_size = map(eye_size_value, 0, 100, 1, 3);
        let eye_angle = map(eye_angle_value, 0, 100, -30, 30);
        let eye_squint = map(eye_squint_value, 0, 100, 0.5, 1.5);
        let eyedetail_angle = map(eyedetail_angle_value, 0, 100, -30, 30);
        drawFace(eye_spacing, eye_height, eye_size, eye_angle, eye_squint, eyedetail_angle);
    }
    pop();

    if (show_face_guide) {
        strokeWeight(0.1);
        rectMode(CORNER);
        noFill()
        stroke(0, 0, 255);
        // ellipse(0, 0, 20, 20);
        rect(-10, -10, 20, 20);
        line(0, -11, 0, -10);
        line(0, 10, 0, 11);
        line(-11, 0, -10, 0);
        line(11, 0, 10, 0);
    }

    pop();
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == '@') {
        saveBlocksImages(true);
    }
}