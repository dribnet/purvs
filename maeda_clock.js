// Update this function to draw you own maeda clock on a 960x500 canvas


function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  let morning = "AM";

  background(0); //  beige
  fill(200); // dark grey
  textSize(30);
  //textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  translate(width/2, height/2);

  let spin = map(obj.seconds, 0, 59, 0, 360);
  rotate(spin); // TICKING SPIN
  push();
    rotate(-90);
    if (obj.hours > 12) {
      morning = "PM";
    } else {
      morning = "AM";
    }
    text(morning, 0, 0);
  pop();

  translate(100, 0);
  textAlign(CENTER);
  let min = obj.minutes;
  let hourX = obj.hours;
  if (obj.minutes < 10) {
    min = ("0" + obj.minutes);
  }
  if (obj.hours < 10) {
    hourX = ("0" + obj.hours);
  } else if (obj.hours > 12) {
    hourX = (obj.hours - 12);
  }

  push();
    rotate(-90); // Text out Straight
    if (obj.millis > 499) {
      text(obj.hours, 0, 0);
      fill(255, 0, 40);
      text("\n" + "\n", 0, 0);
      fill(200);
      text(min, 0, 80);
    } else {
      text(obj.hours, 0, 0);
      fill(255, 0, 40);
      text("\n" + ":" + "\n", 0, 0);
      fill(200);
      text(min, 0, 80);
    }
  pop();
}