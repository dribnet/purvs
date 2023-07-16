// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
 
  //Helps align the assets to the centre
  const centreX = 960/2;
  const centreY = 500/2;
  
  const Unit = 7.5

  background(50); //  beige
  fill(200); // dark grey
  strokeWeight(0)

  rect(centreX, centreY, Unit*3, Unit)
  rect(centreX, centreY+(Unit*3), Unit*3, Unit)
  rect(centreX-(Unit), centreY+(Unit), Unit, Unit*6)
  rect(centreX+(Unit*3), centreY+(Unit), Unit, Unit*6)
}