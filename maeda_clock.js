// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0, 0, 0); //  red
  fill(255); // white
  
  //1 
  ellipse(150, 370, 40);
  ellipse(150, 330, 40);
  ellipse(150, 290, 40);
  ellipse(150, 250, 40);
  ellipse(150, 210, 40);
  ellipse(150, 170, 40);
  ellipse(150, 130, 40);
  ellipse(110, 170, 40);

  //0
  ellipse(150, 370, 40);
  ellipse(150, 330, 40);
  ellipse(150, 290, 40);
  ellipse(150, 250, 40);
  ellipse(150, 210, 40);
  ellipse(150, 170, 40);
  ellipse(150, 130, 40);
  ellipse(110, 170, 40);
  
  //middle dots
  ellipse(960/2, 500/3, 40);
  ellipse(960/2, 500/1.5, 40);

}