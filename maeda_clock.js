// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);
  rect(50,50,50,400);
  rect(150,50,50,400);
  ellipse(250,150,50,50);
  ellipse(250,350,50,50);
  
}
