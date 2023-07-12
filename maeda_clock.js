// Update this function to draw you own maeda clock on a 960x500 canvas
let hourX = 12;
let min = 36;
let spin = 0;
let tick = 0;

function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  beige
  fill(200); // dark grey
  textSize(30);
  //textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  tick += 0.1;
  if (tick % 1 == 0) {
    spin += 0.3;
  }

  translate(width/2, height/2);
  text("AM", -30, 0);
  rotate(spin);
  translate(60, 0);
  text(hourX + ":" + min, 0, 0);
  //rect(500, 300, 100, 100);

}