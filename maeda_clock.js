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
  ellipse(330, 370, 40);
  ellipse(290, 370, 40);
  ellipse(250, 330, 40);
  ellipse(250, 290, 40);
  ellipse(250, 250, 40);
  ellipse(250, 210, 40);
  ellipse(250, 170, 40);
  ellipse(290, 130, 40);
  ellipse(330, 130, 40);
  ellipse(370, 330, 40);
  ellipse(370, 290, 40);
  ellipse(370, 250, 40);
  ellipse(370, 210, 40);
  ellipse(370, 170, 40);

  //middle dots
  ellipse(960/2, 500/3, 40);
  ellipse(960/2, 500/1.5, 40);

  //3
  ellipse(330+340, 370, 40);
  ellipse(290+340, 370, 40);
  ellipse(250+340, 330, 40);
  //ellipse(250+340, 290, 40);
  //ellipse(250+340, 250, 40);
  //ellipse(250+340, 210, 40);
  ellipse(250+340, 170, 40);
  ellipse(290+340, 130, 40);
  ellipse(330+340, 130, 40);
  ellipse(370+340, 330, 40);
  ellipse(370+340, 290, 40);
  ellipse(330+340, 250, 40);
  ellipse(370+340, 210, 40);
  ellipse(370+340, 170, 40);

  //1
  ellipse(150+710, 370, 40);
  ellipse(150+710, 330, 40);
  ellipse(150+710, 290, 40);
  ellipse(150+710, 250, 40);
  ellipse(150+710, 210, 40);
  ellipse(150+710, 170, 40);
  ellipse(150+710, 130, 40);
  ellipse(110+710, 170, 40);

}