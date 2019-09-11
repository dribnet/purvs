function open_eye(eye_spacing, eye_size, dir, eye_angle, eye_squint, eyedetail_angle, wink, eye_type, color, brow_colour) {
    push();
    translate(dir * eye_spacing / 2, 0);
    //eye background/tiredness - could be randomised
    fill(core_colour);
    ellipse(0, 0, eye_size * 1.2, eye_size * 1.2);
    //eye fill - solid black
    fill(0);
    ellipse(0, 0, eye_size, eye_size);
    fill(color);
    ellipse(0, 0, eye_size * 0.7, eye_size * 0.7);
    //white eye detail
    fill(255);
    ellipse(-eye_size / 7, -eye_size / 7, eye_size / 2.5, eye_size / 2.5);

    rotate(dir * eye_angle);

    if (eye_type <= 25) {
        eyes_detail_top(eye_size, eye_squint, dir * eyedetail_angle, wink);
        eyes_detail_bottom(eye_size, eye_squint, dir * eyedetail_angle, wink);
    } else if (eye_type <= 50) {
        eyes_detail_bottom(eye_size, eye_squint, dir * eyedetail_angle, wink);
    } else if (eye_type <= 75) {
        eyes_detail_top(eye_size, eye_squint, dir * eyedetail_angle, wink);
    }

    eyebrows(eye_size, eye_squint, dir * eyedetail_angle, wink, brow_colour);
    pop();
}

function closed_eye(eye_spacing, eye_size, dir, eye_angle) {
    push();
    translate(dir * eye_spacing / 2, 0);
    rotate(dir * eye_angle);
    //eye background/tiredness - could be randomised
    stroke(0);
    strokeWeight(0.5);
    line(-eye_size / 2, 0, eye_size / 2, 0);

    //ellipse(dir * -eye_size / 2, eye_size / 3, 1, 1);

    pop();
}

function cross_eye(eye_spacing, eye_size, dir, eye_angle) {
    push();
    translate(dir * eye_spacing / 2, 0);
    rotate(dir * eye_angle);
    //eye background/tiredness - could be randomised
    stroke(0);
    strokeWeight(0.7);
    eye_size = eye_size * 0.5;
    line(-eye_size / 2, eye_size / 2, eye_size / 2, -eye_size / 2);
    line(-eye_size / 2, -eye_size / 2, eye_size / 2, eye_size / 2);

    pop();
}

function classic_eye(eye_spacing, eye_size, dir) {
    push();
    translate(dir * eye_spacing / 2, 0);
    fill(core_colour);
    ellipse(0, 0, eye_size * 1.2, eye_size * 1.2);
    //eye fill - solid black
    fill(0);
    ellipse(0, 0, eye_size, eye_size);

    pop();
}

function heart_eyes(eye_spacing, eye_size, dir) {
    push();
    translate(dir * eye_spacing / 2, -eye_size / 2);
    scale(0.9);

    push();
    fill(139, 0, 0, 200);
    scale(1.2);
    beginShape();
    vertex(0, 0);
    bezierVertex(-eye_size / 2, -eye_size / 2, -eye_size, eye_size / 3, 0, eye_size);
    bezierVertex(eye_size, eye_size / 3, eye_size / 2, -eye_size / 2, 0, 0);
    endShape(CLOSE);
    pop();

    fill('#C91A09');
    beginShape();
    vertex(0, 0);
    bezierVertex(-eye_size / 2, -eye_size / 2, -eye_size, eye_size / 3, 0, eye_size);
    bezierVertex(eye_size, eye_size / 3, eye_size / 2, -eye_size / 2, 0, 0);
    endShape(CLOSE);

    push();
    noFill();
    strokeWeight(0.4);
    stroke(255, 150);
    arc(0, eye_size / 4, eye_size, eye_size / 2, 190, 210);
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
    //translate(0, size * (abs(wink) / wink_amt));
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
    //translate(0, -size * (abs(wink) / wink_amt));
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

function eyebrows(size, squint, angle, wink, colour) {
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
    stroke(0);
    strokeWeight(0.4);
    arc(0, 0, size, size / 4, 180, 0);
    pop();

    pop();
}

function glasses(eye_spacing, eye_size, dir) {
    push();
    stroke(0);
    strokeCap(SQUARE);
    noFill();
    strokeWeight(0.7);
    line(0, 0, dir * eye_spacing / 2 - dir * eye_size * 1.7 / 2, 0);
    strokeWeight(0.35);
    translate(dir * eye_spacing / 2, 0);
    rect(0, 0, eye_size * 1.7, eye_size * 1.2, 0.5, 0.5, 1, 1);
    pop();
}