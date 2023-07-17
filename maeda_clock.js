//Helps align the assets to the centre
const centreX = (960/2) - 25;
const centreY = (500/2) - 10;

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
 
  background(5); //  beige
  fill(128); // dark grey
  strokeWeight(0);

  // draw "AM" text
  am(centreX, centreY);

  // draw "time" text
  time(centreX, centreY);
}

function am() {
  
  //Size of one block
  const Unit = 7.5;

  // Large letter A
  rect(centreX, centreY, Unit*3, Unit);
  rect(centreX, centreY+(Unit*3), Unit*3, Unit);
  rect(centreX-(Unit), centreY+(Unit), Unit, Unit*6);
  rect(centreX+(Unit*3), centreY+(Unit), Unit, Unit*6);

  // Large letter M
  rect(centreX+(Unit*6), centreY+Unit, Unit, Unit);
  rect(centreX+(Unit*8), centreY+Unit, Unit, Unit);
  rect(centreX+(Unit*7), centreY+Unit*2, Unit, Unit);
  rect(centreX+(Unit*5), centreY, Unit, Unit*7);
  rect(centreX+(Unit*9), centreY, Unit, Unit*7);
}

function time() {
  push();
  textSize(32)
  textAlign(CENTER)
  translate(centreX-40, centreY+140);
  rotate(2)

  text('02:33', 0, 0)

  pop();

}