function preload() {}

// Update this function to draw your own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(5, 5, 10); // black background
  fill(200, 200, 240); // white text

  textFont("JOKERMAN");
  textAlign(CENTER, CENTER);

  //give this a map then the text size can change depending on seconds
  let fontSize = map(obj.millis, 0, 1000, 20, 150);

  //////////////////////////////////////////////////////////

  if(obj.seconds % 2){
    fontSize = map(obj.millis, 0, 1000, 20, 150);
  }
  else if (obj.seconds % 2 + 1){
    fontSize = map(obj.millis, 0, 1000, 150, 20);
  }

  textSize(fontSize);

  //hour
  text(obj.hours, canvasWidth / 4, canvasHeight / 2);

  /////////////////////////////////////////////////////////

  if(obj.seconds % 2){
    fontSize = map(obj.millis, 0, 1000, 150, 20);
  }
  else if (obj.seconds % 2 + 1){
    fontSize = map(obj.millis, 0, 1000, 20, 150);
  }

  textSize(fontSize);

  //minute
  text(obj.minutes, (canvasWidth / 4) * 3, canvasHeight / 2);
}
