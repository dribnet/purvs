originX = 25;
originY = 25;

{ // number shape coords (two arrays for each number, creating pairs of coordinates for X and Y)

numberZeroXCoords = [50, 100, 150, 0, 200, 0, 200, 0, 200, 0, 200, 0, 200, 0, 200, 50, 100, 150];
numberZeroYCoords = [0, 0, 0, 50, 50, 100, 100, 150, 150, 250, 250, 300, 300, 350, 350, 400, 400, 400];

numberOneXCoords = [200, 200, 200, 200, 200, 200];
numberOneYCoords = [50, 100, 150, 250, 300, 350];

numberTwoXCoords = [50, 100, 150, 200, 200, 200, 50, 100, 150, 0, 0, 0, 50, 100, 150];
numberTwoYCoords = [0, 0, 0, 50, 100, 150, 200, 200, 200, 250, 300, 350, 400, 400, 400];

numberThreeXCoords = [50, 100, 150, 200, 200, 200, 50, 100, 150, 200, 200, 200, 50, 100, 150];
numberThreeYCoords = [0, 0, 0, 50, 100, 150, 200, 200, 200, 250, 300, 350, 400, 400, 400];

numberFourXCoords = [0, 200, 0, 200, 0, 200, 50, 100, 150, 200, 200, 200];
numberFourYCoords = [50, 50, 100, 100, 150, 150, 200, 200, 200, 250, 300, 350];

numberFiveXCoords = [50, 100, 150, 0, 0, 0, 50, 100, 150, 200, 200, 200, 50, 100, 150];
numberFiveYCoords = [0, 0, 0, 50, 100, 150, 200, 200, 200, 250, 300, 350, 400, 400, 400];

numberSixXCoords = [50, 100, 150, 0, 0, 0, 50, 100, 150, 0, 200, 0, 200, 0, 200, 50, 100, 150];
numberSixYCoords = [0, 0, 0, 50, 100, 150, 200, 200, 200, 250, 250, 300, 300, 350, 350, 400, 400, 400];

numberSevenXCoords = [50, 100, 150, 200, 200, 200, 200, 200, 200];
numberSevenYCoords = [0, 0, 0, 50, 100, 150, 250, 300, 350];

numberEightXCoords = [50, 100, 150, 0, 200, 0, 200, 0, 200, 50, 100, 150, 0, 200, 0, 200, 0, 200, 50, 100, 150];
numberEightYCoords = [0, 0, 0, 50, 50, 100, 100, 150, 150, 200, 200, 200, 250, 250, 300, 300, 350, 350, 400, 400, 400];

numberNineXCoords = [50, 100, 150, 0, 200, 0, 200, 0, 200, 50, 100, 150, 200, 200, 200, 50, 100, 150];
numberNineYCoords = [0, 0, 0, 50, 50, 100, 100, 150, 150, 200, 200, 200, 250, 300, 350, 400, 400, 400];

}

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(255); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  
  //text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);
  numberScale = 0.3;
  noFill();
  strokeWeight(5*numberScale);
  stroke(255, 0, 0);

  // draw a number 0
  for(let i = 0; i < numberZeroXCoords.length; i++) {
    ellipse(0*numberScale+originX+numberZeroXCoords[i]*numberScale, originY+numberZeroYCoords[i]*numberScale, 40*numberScale);
  }

  // draw a number 1
  for(let i = 0; i < numberOneXCoords.length; i++) {
    ellipse(300*numberScale+originX+numberOneXCoords[i]*numberScale, originY+numberOneYCoords[i]*numberScale, 40*numberScale);
  }

  // draw a number 2
  for(let i = 0; i < numberTwoXCoords.length; i++) {
    ellipse(600*numberScale+originX+numberTwoXCoords[i]*numberScale, originY+numberTwoYCoords[i]*numberScale, 40*numberScale);
  }

  // draw a number 3
  for(let i = 0; i < numberThreeXCoords.length; i++) {
    ellipse(900*numberScale+originX+numberThreeXCoords[i]*numberScale, originY+numberThreeYCoords[i]*numberScale, 40*numberScale);
  }

  // draw a number 4
  for(let i = 0; i < numberFourXCoords.length; i++) {
    ellipse(1200*numberScale+originX+numberFourXCoords[i]*numberScale, originY+numberFourYCoords[i]*numberScale, 40*numberScale);
  }

  // draw a number 5
  for(let i = 0; i < numberFiveXCoords.length; i++) {
    ellipse(1500*numberScale+originX+numberFiveXCoords[i]*numberScale, originY+numberFiveYCoords[i]*numberScale, 40*numberScale);
  }

  // draw a number 6
  for(let i = 0; i < numberSixXCoords.length; i++) {
    ellipse(1800*numberScale+originX+numberSixXCoords[i]*numberScale, originY+numberSixYCoords[i]*numberScale, 40*numberScale);
  }

  // draw a number 7
  for(let i = 0; i < numberSevenXCoords.length; i++) {
    ellipse(2100*numberScale+originX+numberSevenXCoords[i]*numberScale, originY+numberSevenYCoords[i]*numberScale, 40*numberScale);
  }

  // draw a number 8
  for(let i = 0; i < numberEightXCoords.length; i++) {
    ellipse(2400*numberScale+originX+numberEightXCoords[i]*numberScale, originY+numberEightYCoords[i]*numberScale, 40*numberScale);
  }
 
  // draw a number 9
  for(let i = 0; i < numberNineXCoords.length; i++) {
    ellipse(2700*numberScale+originX+numberNineXCoords[i]*numberScale, originY+numberNineYCoords[i]*numberScale, 40*numberScale);
  }

  
}

