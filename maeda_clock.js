// Update this function to draw you own maeda clock on a 960x500 canvas


function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  let hourX = 12;
  let hourSet = obj.hours;
  let morning = "AM";

  background(0); //  beige
  fill(200); // dark grey
  textSize(30);
  //textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  let spin = map(obj.seconds, 0, 59, 0, 360);

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
    text(obj.hours + "\n" + ".." + "\n" + obj.minutes, 0, 0);
    
    if (obj.hours > 12) {
      // hourSet = obj.hours - 12;
      morning = "PM";
      // if (hourSet < 10) {
      //   text("0\n" + hourSet, 0, 0);
    } else {
      morning = "AM";
      // let hourArr = array/from(String(hourSet), Number);
      // text(hourArr[0] + "\n" + hourArr[1], 0, 0);
    }

    // if (obj.minutes < 10) {
    //   hourSet = obj.hours;
    //   text("\n..\n0" + obj.minutes, 20, 0);
    // } else {
    //   let minSet = obj.minutes;
    //   let minArr = Array.from(String(minSet), Number);
    //   text("\n..\n" + minArr[0] + "\n" + minArr[1], 0, 10);
    // }
  pop();
}