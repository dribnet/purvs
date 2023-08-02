// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige

  // 1
  rect(50, 40, 50, 400);

  // 0
  rect(130, 40, 50, 400);
  rect(240, 40, 50, 400);
  rect(130, 40, 160, 50);
  rect(130, 390, 160, 50);

  // COLON
  rect(320, 40, 50, 50);
  rect(320, 390, 50, 50);  

  // 0
  rect(400, 40, 50, 400);
  rect(510, 40, 50, 400);
  rect(400, 40, 160, 50);
  rect(400, 390, 160, 50);

  // 0
  rect(600, 40, 50, 400);
  rect(710, 40, 50, 400);
  rect(600, 40, 160, 50);
  rect(600, 390, 160, 50);

}
