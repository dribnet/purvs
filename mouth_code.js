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
    stroke(0);
    arc(0, 0, mouth_width, 1, 0, 180);
    pop();
}