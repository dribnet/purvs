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
function timeNumber(units){
  textFont("JOKERMAN");
  textAlign(CENTER, CENTER);

  let fontSize = map(obj.millis, 0, 1000, 20, 150);
  
  //hour
  if (units == obj.hours){
    //pulsing
    if(obj.seconds % 2){
      fontSize = map(obj.millis, 0, 1000, 20, 150);
    }
    else if (obj.seconds % 2 + 1){
      fontSize = map(obj.millis, 0, 1000, 150, 20);
    }

  textSize(fontSize);

    text(units, canvasWidth / 4, canvasHeight / 2);
  };

  //minutes
  if (units == obj.minutes){
    //pulsing
    if(obj.seconds % 2){
      fontSize = map(obj.millis, 0, 1000, 150, 20);
    }
    else if (obj.seconds % 2 + 1){
      fontSize = map(obj.millis, 0, 1000, 20, 150);
    }

  textSize(fontSize);

    text(units, (canvasWidth / 4)*3, canvasHeight / 2);
  };
}


