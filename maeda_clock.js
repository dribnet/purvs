

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  black

  var size = 30;
  var xposArray = [150,180,210,240,270];
  let ypos = 130;
  let ystep = 30;
  let xpos = 150;
  let xstep = 30;

  fill(255);
  strokeWeight(2);
  stroke(128, 128, 128); //grey
  //the five
  //5 dots horizontal top
  ellipse(xposArray[0], 100, size);
  ellipse(xposArray[1], 100, size);
  ellipse(xposArray[2], 100, size);
  ellipse(xposArray[3], 100, size);
  ellipse(xposArray[4], 100, size);

  for (let i = 0; i < 2; i++){
    ellipse (150, ypos + (ystep*i), size)
  } //left side going down

 for (let j = 1; j < 4; j++){
    ellipse (xpos + (xstep*j), 160, size)
  } //horizontal middle 4 dots

  for (let i = 1; i < 4; i++){
    ellipse (270, (ypos+30) + (ystep*i), size)
  } //right side 3 dots going down

  for (let j = 1; j < 4; j++){
    ellipse (xpos + (xstep*j), 280, size)
  } // bottom three dots

  ellipse(xpos, 260, size);

  //the two dots
  ellipse(350, 160, size); // top dot
  ellipse(350, 250, size); //bottom dot

  //the 1
  for (let i = 1; i < 8; i++){
    ellipse (450, 70 + (ystep*i), size)
  } //main part of 1

  ellipse(420,120,size); 

  //the 0

  for (let j = 1; j < 4; j++){
    ellipse (550 + (xstep*j), 100, size)
  } //top horizontal

  for (let i = 0; i < 5; i++){
    ellipse (550, (ypos) + (ystep*i), size)
  } //left side

  for (let j = 1; j < 4; j++){
    ellipse (550 + (xstep*j), 280, size)
  } //bottom horizontal

  for (let i = 0; i < 5; i++){
    ellipse (670, (ypos) + (ystep*i), size)
  } //right side

  //small red part marking seconds
  fill (255, 0, 0);
  noStroke();
  rect(150, 90, 5, 3);


}
