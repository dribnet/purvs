var toggle = 1;
var x = 0;
var y = 0;
var s = 1;
/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

    //toggle = toggle* -1;

    // Basic timing code
    let seconds = obj.seconds;
    let hours = obj.hours;
    let minutes = obj.minutes;
    let millis = obj.millis;

    let fracsec = seconds + (millis / 1000.0);
    let smoothsec = map(fracsec, 0, 59, height / 2 + 45, height - 75);

    let fracmin = minutes + (seconds / 60.0);
    let smoothmin = map(fracmin, 0, 59, height / 2 + 45, height - 75);

    if(seconds%2===1){
      smoothsec*=(height-75)-smoothmin;
    }

    let frachour = hours + (minutes / 60.0);
    let smoothhour = map(frachour, 0, 24, height / 2 + 45, height - 75);


    //let secondspen = map(seconds, 0, 59, height/2+45, height-75);
    //let hourpen = map(hours, 0, 23, height/2+45, height-75);
    //let minutepen = map(minutes, 0, 59, height/2+45, height-75);

    let hourarm = map(hours % 12, 0, 12, 0, 360);
    let minarm = map(minutes, 0, 59, 0, 360);

    background(27 + hours * 2.5, 135 + hours * 2.5, 140 + hours * 2.5);
    angleMode(DEGREES);

    //Alarm functions
    let alarm = obj.seconds_until_alarm;
    if (alarm < 0) {
        x = 0;
        y = 0;
        s = 1;
    }
    if (alarm == 0) {
        if (s < 6) {
            s = s + 0.025;
        }
    }
    if (alarm > 0) {
        if (alarm < 10) {
            x = x - 0.025;
            y = y + 0.025;
        }
    }

    // Text displaying time 
    text("S: " + seconds, 100, 22);
    text("H: " + hours, 10, 22);
    text("M: " + minutes, 50, 22);

    // Pendulums 
    fill(218, 165, 32);
    stroke(218, 165, 32);
    strokeWeight(2);


    line(width / 2 - 30, smoothsec, width / 2 - 30, height / 2);
    line(width / 2 + 30, smoothhour, width / 2 + 30, height / 2);
    line(width / 2, smoothmin, width / 2, height / 2);
    stroke(0);
    strokeWeight(1);
    ellipse(width / 2, smoothmin - 105, 7, 7);
    ellipse(width / 2 + 30, smoothhour - 105, 7, 7);
    ellipse(width / 2 - 30, smoothsec - 105, 7, 7);
    /*
            ellipse(width/2, smoothmin-80, 7, 7);
            ellipse(width/2+30, smoothhour-80, 7, 7);
            ellipse(width/2-30, smoothsec-80, 7, 7);*/
    fill(92, 42, 9)
    ellipse(width / 2 - 30, smoothsec, 25, 90);
    ellipse(width / 2 + 30, smoothhour, 25, 90);
    ellipse(width / 2, smoothmin, 25, 90);


    // Shape of clock

    fill(92, 42, 9);
    beginShape();
    vertex(400, 200);
    vertex(560, 200);
    vertex(590, 260);
    vertex(370, 260);
    endShape(CLOSE);

    fill(139, 69, 19);
    beginShape();
    vertex(410, 200);
    vertex(550, 200);
    vertex(580, 260);
    vertex(380, 260);
    endShape(CLOSE);

    fill(92, 42, 9);
    beginShape();
    vertex(540, 260);
    vertex(530, 270);
    vertex(430, 270);
    vertex(420, 260);
    endShape(CLOSE);

    fill(70, 29, 6);
    triangle(360, 200, 600, 200, 480, 80);

    fill(139, 69, 19);
    triangle(380, 200, 580, 200, 480, 90);

    //Alarm Birds nest
    fill(154, 80, 30);
    rect(465, 110, 30, 29);

    //clock face
    fill(154, 80, 30);
    ellipse(width / 2, height / 2 - 55, 100, 100);
    //Placement for text function
    Text();

    //Clock arms
    push();
    translate(width / 2, height / 2 - 55);
    rotate(hourarm);
    line(0, -40, 0, 0);
    translate(-width / 2, -height / 2 - 55);
    pop();

    push();
    translate(width / 2, height / 2 - 55);
    rotate(minarm);
    line(0, -30, 0, 0);
    translate(-width / 2 - height / 2 - 55);
    pop();
    fill(218, 165, 32)
    ellipse(width / 2 + 0.5, height / 2 - 55, 5, 5);

    fill(255);

    //Bird
    push();
    translate(width / 2, height / 2 - 130);
    scale(s);
    Bird(0, 129);
    translate(-width / 2, -height / 2);
    pop();

    //Doors for Bird
    if (s < 1.5) {
        fill(92, 42, 9);
        rect(465, 110, 15 - y, 29);
        rect(495, 110, -15 - x, 29);
    }

}

// this is the numbers on the clockface,
// I thought of doing a for loop but
// because they arent actually an order I think I would neded an array.

function Text() {

    push();
    translate(width / 2, height / 2 - 55);

    fill(218, 165, 32);
    noStroke();
    //stroke(218,165,32);
    rotate(360 / 12);
    textSize(11);
    text("I", -2, -35);

    rotate(360 / 12);
    textSize(11);
    text("II", -3, -35);

    rotate(360 / 12);
    textSize(11);
    text("III", -3, -35);

    rotate(360 / 12);
    textSize(11);
    text("IV", -3, -35);

    rotate(360 / 12);
    textSize(11);
    text("V", -3, -35);

    rotate(360 / 12);
    textSize(11);
    text("VI", -6, -35);

    rotate(360 / 12);
    textSize(11);
    text("VII", -6, -35);

    rotate(360 / 12);
    textSize(11);
    text("VIII", -9, -35);

    rotate(360 / 12);
    textSize(11);
    text("IX", -3, -35);

    rotate(360 / 12);
    textSize(11);
    text("X", -3, -35);

    rotate(360 / 12);
    textSize(11);
    text("XI", -6, -35);

    rotate(360 / 12);
    textSize(11);
    text("XII", -6, -35);

    translate(-width / 2, -height / 2 - 55);
    pop();

}

function Bird(x, y) {

    strokeWeight(0.3);
    fill(0, 61, 64);
    beginShape();
    vertex(x, y - 128);
    vertex(x + 4.5, y - 127);
    vertex(x + 6 + s * 2.5, y - 112 - s * 4);
    vertex(x + 5 + s, y - 117 - s);
    vertex(x + 3, y - 115);
    endShape();

    beginShape();
    vertex(x, y - 128);
    vertex(x - 4.5, y - 127);
    vertex(x - 6 - s * 2.5, y - 112 - s * 4);
    vertex(x - 5 - s, y - 117 - s);
    vertex(x - 3, y - 115);

    endShape();

    fill(0, 61, 64);
    ellipse(x, y - 120, 10, 20);

    ellipse(x, y - 129, 7.5, 8);

    fill(27, 135, 140);
    ellipse(x, y - 122, 7, 13);

    noFill();
    ellipse(x, y - 129, 7.5, 8);

    fill(255);
    ellipse(x - 2, y - 129, 2, 4);
    ellipse(x + 2, y - 129, 2, 4);

    fill(0);
    ellipse(x + 2, y - 128.5, 0.5, 2);
    ellipse(x - 2, y - 128.5, 0.5, 2);

    fill(255, 255, 30);
    beginShape();
    vertex(x, y - 129);
    vertex(x - 2.7, y - 126);
    vertex(x, y - 124.5);
    vertex(x + 2.7, y - 126);
    vertex(x, y - 129);
    endShape();

    beginShape();
    vertex(x, y - 129);
    vertex(x - 2.5, y - 126);
    vertex(x, y - 125.5);
    vertex(x + 2.5, y - 126);
    vertex(x, y - 129);
    endShape();
}