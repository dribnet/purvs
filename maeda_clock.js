// Update this function to draw your own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(5, 5, 10); // black background
  fill(200, 200, 240); // white text

  //hour
  timeNumber(obj.hours);
  //minutes
  timeNumber(obj.minutes);
}

//text
function timeNumber(units) {
  textFont("JOKERMAN");
  textAlign(CENTER, CENTER);

  let fontSize = map(obj.millis, 0, 1000, 20, 150);

  //hour
  if (units == obj.hours) {
    //pulsing
    for (i = 0; i < 25; i++) {
      if (obj.seconds % 2) {
        fontSize = map(obj.millis, 0, 1000, 20, 150);
      }
      else if ((obj.seconds % 2) + 1) {
        fontSize = map(obj.millis, 0, 1000, 150, 20);
      }

      textSize((fontSize / i) * 1.5);
      fill(255, 250, 253, i * 10);

      text(units, canvasWidth / 4, canvasHeight / 2);

      push();
      fill(254,245, 247, 200);
      strokeWeight(5);
      textSize(fontSize * 1.5);
      text(units, canvasWidth / 4, canvasHeight / 2);
      pop();
    }
  }

  //minutes
  if (units == obj.minutes) {
    //pulsing
    for (j = 0; j < 25; j++) {
      if (obj.seconds % 2) {
        fontSize = map(obj.millis, 0, 1000, 150, 20);
      }
      else if ((obj.seconds % 2) + 1) {
        fontSize = map(obj.millis, 0, 1000, 20, 150);
      }

      textSize((fontSize / j) * 1.5);
      fill(255, 250, 253, j * 10);

      text(units, (canvasWidth / 4) * 3, canvasHeight / 2);

      push();
      fill(254,245, 247, 200);
      strokeWeight(5);
      textSize(fontSize * 1.5);
      text(units, (canvasWidth / 4) * 3, canvasHeight / 2);
      pop();
    }
  }
}