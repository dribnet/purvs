let x = 0
function draw_clockday() {
fill(242, 245, 247, 200);
rect(0, 0, 480, 500, 20);
fill(0, 0, 0, 240);
rect(480, 0, 480, 500, 20);

textSize(80);
textStyle(BOLD);
fill(0, 0, 0);
text(hour(), width/2-320, height/2+5);
fill(255, 255, 255);
text(minute(), width/2+240, height/2+5);

translate(width/2, height/2);
rotate(-90);
let hor = hour();
let min = minute();
let sec = second();


let s = map(sec, 0, 60, 0.5, 1.5);
scale(s);
noStroke()
fill(255);
arc(0, 0, 100, 100, 180, 360);
noFill();
strokeWeight(50);
stroke(255, 255, 255);
strokeCap(SQUARE);
arc(0, 0, 194, 194, 0, 180);
stroke(0);
arc(0, 0, 194, 194, 180, 360);

// fill(255, 255, 255);

noStroke();
let sec1 = map(sec, 0, 60, 0, 360);
if (sec1 > 0 && sec1 < 180) {
  fill(255);
} else {fill(0);
};
arc(0, 0, 150, 150, 0, sec1);


noFill();
strokeWeight(4);
//stroke(255, 255, 255);
let min2 = map(min, 0, 60, 0, 360);
if (min2 > 0 && min2 < 174) {
  stroke(0);
} else {stroke(255);
};
arc(0, 0, 200, 200, 0, min2);

strokeWeight(8);
// stroke(0, 0, 0);
let hor3 = map(hor % 12, 0, 12, 0, 360);
if (hor3 > 0 && hor3 < 180) {
  stroke(255, 255, 255);
} else {stroke(0, 0, 0);
};
arc(0, 0, 250, 250, 0, hor3);
}
