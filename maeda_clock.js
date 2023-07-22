// Update this function to draw you own maeda clock on a 960x500 canvas
let hourX = 12;
let min = 36;
let spin = 0;
let tick = 0;
let hourSet;
let morning = "AM";

function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  beige
  fill(200); // dark grey
  textSize(30);
  //textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  tick += 1;
  if (tick == 60) {
    spin += 6;
    tick = 0;
  }
  translate(width/2, height/2);
  push();
    rotate(1);
    text(morning, 0, 0);
  pop();
  rotate(spin);
  translate(100, 0);
  textAlign(CENTER);
  push();
    rotate(-90);
    
    if (hour() > 12) {
      hourSet = hour() - 12;
      morning = "PM";
      if (hourSet < 10) {
        text("0\n" + hourSet, 0, 0);
      }
      
    } else {
      morning = "AM";
      let hourArr = Array/from(String(hourSet), Number);
      text(hourArr[0] + "\n" + hourArr[1], 0, 0);
    }

    if (minute() < 10) {
      hourSet = hour();
      text("\n..\n0" + minute(), 20, 0);
    } else {
      let minSet = minute();
      let minArr = Array.from(String(minSet), Number);
      text("\n..\n" + minArr[0] + "\n" + minArr[1], 0, 10);
    }
  pop();

}