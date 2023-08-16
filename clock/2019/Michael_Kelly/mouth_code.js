function classic_mouth(mouth_width, mouth_height, mouth_emotion) {
    push();
    noFill();
    strokeWeight(0.4);
    translate(0, mouth_height);
    stroke(0);
    arc(0, 0, mouth_width, 1, 0, 180);
    pop();
}

function open_mouth(mouth_width, mouth_height, mouth_emotion) {
    if (mouth_emotion <= 0.5 && mouth_emotion >= -0.5) {
        mouth_emotion = -0.5;
    }
    push();
    noFill();
    strokeWeight(0.4);
    translate(0, mouth_height);
    fill(0);
    beginShape();
    curveVertex(-mouth_width, mouth_emotion / 2);
    curveVertex(-mouth_width, mouth_emotion / 2);
    curveVertex(-mouth_width / 2, mouth_emotion / 2);
    curveVertex(mouth_width / 2, mouth_emotion / 2);
    curveVertex(mouth_width, mouth_emotion / 2);
    curveVertex(mouth_width / 2, -mouth_emotion / 2);
    curveVertex(-mouth_width / 2, -mouth_emotion / 2);
    curveVertex(-mouth_width, mouth_emotion / 2);
    curveVertex(-mouth_width, mouth_emotion / 2);
    endShape();

    stroke(0);
    push();
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(0, -mouth_emotion / 2.5 * -mouth_emotion / 2.5, mouth_width / 1.32, 0.5 * abs(mouth_emotion) / 2);

    fill(255);
    stroke(255);
    rect(0, mouth_emotion / 3 * -mouth_emotion / 2, mouth_width, 0.3 * abs(mouth_emotion) / 2, 0.05, 0.05, 0.2, 0.2);
    pop();
    noFill();
    strokeWeight(0.15);
    beginShape();
    curveVertex(-mouth_width, mouth_emotion / 2);
    curveVertex(-mouth_width, mouth_emotion / 2);
    curveVertex(-mouth_width / 2, mouth_emotion / 2);
    curveVertex(mouth_width / 2, mouth_emotion / 2);
    curveVertex(mouth_width, mouth_emotion / 2);
    curveVertex(mouth_width / 2, -mouth_emotion / 2);
    curveVertex(-mouth_width / 2, -mouth_emotion / 2);
    curveVertex(-mouth_width, mouth_emotion / 2);
    curveVertex(-mouth_width, mouth_emotion / 2);
    endShape();
    push();

    strokeWeight(0.2);
    stroke('#B58800');
    if (mouth_emotion > 0) {
        push();
        translate(mouth_width, mouth_emotion / 2);
        arc(0, 0, 1, 1, 0, 90);
        pop();
        push();
        translate(-mouth_width, mouth_emotion / 2);
        arc(0, 0, 1, 1, 90, 180);
        pop();
    } else {
        push();
        translate(mouth_width, mouth_emotion / 2);
        arc(0, 0, 1, 1, 270, 0);
        pop();
        push();
        translate(-mouth_width, mouth_emotion / 2);
        arc(0, 0, 1, 1, 180, 270);
        pop();
    }
    pop();

    pop();
}

function tongue_out(mouth_width, mouth_height, mouth_emotion) {
    push();
    noFill();
    strokeWeight(0.4);
    translate(0, mouth_height);
    stroke(0);
    arc(0, 0, mouth_width, 1, 0, 180);
    pop();
}

function line_mouth(mouth_width, mouth_height, mouth_emotion, dir) {
    push();
    noFill();
    strokeWeight(0.4);
    translate(dir * 0.5, mouth_height);
    stroke(0);
    //line(-mouth_width, 0, mouth_width, 0);
    curveTightness(0);
    beginShape();
    curveVertex(dir * -mouth_width / 1.5, -mouth_emotion / 4);
    curveVertex(dir * -mouth_width / 1.5, -mouth_emotion / 4);
    curveVertex(dir * mouth_width / 3 / 1.5, -mouth_emotion / 4);
    //curveVertex(mouth_width / 2, 0);
    curveVertex(dir * mouth_width / 1.5, mouth_emotion / 3);
    curveVertex(dir * mouth_width / 1.5, mouth_emotion / 3);
    endShape();

    strokeWeight(0.2);
    stroke('#B58800');
    if (dir > 0) {
        if (mouth_emotion > 0) {
            push();
            translate(dir * mouth_width / 1.5, mouth_emotion / 3);
            arc(0, 0, 1, 1, 0, 90);
            pop();
        } else {
            push();
            translate(dir * mouth_width / 1.5, mouth_emotion / 3);
            arc(0, 0, 1.2, 1.2, 270, 0);
            pop();
        }
    } else {
        if (mouth_emotion > 0) {
            push();
            translate(dir * mouth_width / 1.5, mouth_emotion / 3);
            arc(0, 0, 1, 1, 90, 180);
            pop();
        } else {
            push();
            translate(dir * mouth_width / 1.5, mouth_emotion / 3);
            arc(0, 0, 1.2, 1.2, 180, 270);
            pop();
        }
    }

    pop();
}

function love_mouth(mouth_width, mouth_height, mouth_emotion) {
    push();
    noFill();
    strokeWeight(0.4);
    translate(0, mouth_height);
    stroke(0);
    arc(0, 0, mouth_width * 2, mouth_emotion * 4, 0, 180);
    pop();
}