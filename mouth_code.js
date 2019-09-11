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
    strokeWeight(0.1);
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
    pop();
}