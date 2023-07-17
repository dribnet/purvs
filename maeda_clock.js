

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

  ellipse(xpos, 260, size); // last dot

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

  for (let i = 0; i < 5; i++){
  rect((150 + xstep*i), 88, 5, 3); 
  } //top row of 5

  for (let i = 0; i < 3; i++){
    rect(150, (88 +ystep*i), 5, 3); 
    } //left side vertical

    for (let i = 1; i < 4; i++){
      rect((150 + xstep*i), 148, 5, 3); 
      } // middle horizontal row of 5

      for (let i = 1; i < 4; i++){
        rect(270, (148 +ystep*i), 5, 3); 
        } //right side vertical

        for (let i = 1; i < 4; i++){
          rect((150 + xstep*i), 268, 5, 3); 
          } //bottom 3 horizontal

rect(150, 250,5,3); //last part of the 5

rect(350,150,5,3); //top dot
rect(350, 240,5,3); //bottom dot

for (let i = 1; i < 8; i++){
  rect (450, 60 + (ystep*i), 5, 3)
} //stem of one

rect(420,110,5,3); //extra part of one

for (let j = 1; j < 4; j++){
  rect (550 + (xstep*j), 90, 5, 3)
} //top horizontal zero

for (let i = 0; i < 5; i++){
  rect (550, 120 + (ystep*i), 5, 3)
} //left side of 0

for (let j = 1; j < 4; j++){
  rect (550 + (xstep*j), 270, 5, 3)
} //bottom horizontal zero

for (let i = 0; i < 5; i++){
  rect (670, 120 + (ystep*i), 5, 3)
} //right side zero

  //clock hands
  strokeWeight(1);
  stroke(0); //black
    line(150, 100, 155, 105); //5 O'clock hand
    line(160, 90, 150, 100); //10 past hand  

    //function draw clock to repeat
  



}
