const colorStroke = "#FF84BC";
//const colorBack   = "#E7FDF7";

function drawLetter(letterData) {

    // stroke setup
  noFill();
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES)
  //determine parameters for second circle
  //let size2 = letterData["size"];
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];
  let offset1 = letterData["offset1"]
  let offset2 = letterData["offset2"]
  let offset3 = letterData["offset3"]
  let offset4 = letterData["offset4"]
  let rot1 = letterData["rotate1"];
  let rot2 = letterData["rotate2"];


//draw two triangles with seperate rotation ability, collective and individual push and pops to 
//position correctly 
push();

  //translate(posx, posy);

  push();

  rotate(rot1);
  triangle(offset1-50, offset2+30, offset1, offset2-50, offset1+50, offset2+30);

  pop();

  push();

  rotate(rot2);  
  triangle(offset3-50, offset4+30, offset3, offset4-50, offset3+50, offset4+30);

  pop();

  pop();
}