let color1 = "#ffbbcc"
let color2 = "#8e3adf"

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE

  let fraction = obj.millis / 1000.0;
  let bg_color = lerpColor(color(color1), (color(color2)), fraction);
  background(bg_color); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Clock", width/2, height/2);
 

  
  let seconds = obj.seconds;
  let seconds_radius = map (seconds, 0, 59, 1, 25);
  let minutes = obj. minutes;
  let milllis = obj. millis / 1000.0;

  // Clock Structure Ring Circles these will rotate
  ellipse(480, 250, 480, 480); //Minute 'Hand"
  strokeWeight(seconds_radius);
 

  ellipse(480, 250, 300, 300); // Second "Hand"
  strokeWeight(seconds_radius);
  
  ellipse(480, 250, 100, 100); // Minute "Hand"
  strokeWeight(seconds_radius);

  //Clock Structure hands

}