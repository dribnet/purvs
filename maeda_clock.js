// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(50);
  textAlign(CENTER, CENTER);
  text("MEADA CLOCK TEST", width/2, height/2);
  rect (100,100,60,300);
  rect (240,100,60,300);


  rect (400,200,40,40);
  rect (400,260,40,40);

  rect (550,100,60,300);
  rect (690,100,60,300);

}
