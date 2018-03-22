
function setup() {
createCanvas(960, 500);
angleMode(DEGREES);
}

function draw(){
noStroke();
// fill(220, 222, 220, 100);
// rect(0, 0, 480, 500, 20);
// rect(480, 0, 480, 500, 20);
if (hour() > 6 && hour() < 18) {
draw_clockday();
} else {draw_clocknight()};
}
