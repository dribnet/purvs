//line colour
const colorStroke = "#FF84BC";

function drawLetter(letterData) {

    // stroke setup
  noFill();
  stroke(colorStroke);
  angleMode(DEGREES)
//triangle and line parameters 
  let offset1 = letterData["offset1"] //x of 1st triangle and line
  let offset2 = letterData["offset2"] //y of 1st triangle and line
  let offset3 = letterData["offset3"] //x of 2nd triangle and line
  let offset4 = letterData["offset4"] //y of 2nd triangle and line
  let rot1 = letterData["rotate1"]; //rotate of 1st triangle and line
  let rot2 = letterData["rotate2"]; //rotate of 2nd triangle and line


//draw two triangles with seperate rotation ability, collective and individual push and pops to 
//position correctly 

//draw three lines, two on adjacent sides of the first triangle, and one on the first side
//of the second triangle
strokeWeight(6);

//double line 1 tri 1
push();
rotate(rot1);
line(offset1-50, offset2+34.6, offset1, offset2-48);
pop();

//double line 2 tri 1
push();
rotate(rot1);
line(offset1, offset2-48, offset1+50, offset2+34.6);
pop();

//single line tri 2
push();
rotate(rot2);
line(offset3-50, offset4+34.6, offset3, offset4-48);
pop();

strokeWeight(3);
push();

  //translate(posx, posy);

  push();
  rotate(rot1);
  triangle(offset1-50, offset2+36.6, offset1, offset2-50, offset1+50, offset2+36.6);

  pop();

    push();

    rotate(rot2);  
    triangle(offset3-50, offset4+36.6, offset3, offset4-50, offset3+50, offset4+36.6);

    pop();

pop();
}

function interpolate_letter(percent, oldObj, newObj){
  let new_obj = {};
  new_obj["offset1"] = map(percent, 0, 100, oldObj["offset1"], newObj ["offset1"]);
  new_obj["offset2"] = map(percent, 0, 100, oldObj["offset2"], newObj ["offset2"]);
  new_obj["offset3"] = map(percent, 0, 100, oldObj["offset3"], newObj ["offset3"]);
  new_obj["offset4"] = map(percent, 0, 100, oldObj["offset4"], newObj ["offset4"]);
  new_obj["rotate1"] = map(percent, 0, 100, oldObj["rotate1"], newObj ["rotate1"]);
  new_obj["rotate2"] = map(percent, 0, 100, oldObj["rotate2"], newObj ["rotate2"]);
  return new_obj;
}