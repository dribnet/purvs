//line colour
const colorStroke = "#FF84BC"; //pink
const colorFront = "#FF84BC";

function drawLetter(letterData) {

  // stroke setup
  noFill();
  stroke(colorStroke);
  angleMode(DEGREES)
  //triangle and line parameters 
  let tri1X = letterData["tri1X"] //x of 1st triangle and line
  let tri1Y = letterData["tri1Y"] //y of 1st triangle and line
  let tri2X = letterData["tri2X"] //x of 2nd triangle and line
  let tri2Y = letterData["tri2Y"] //y of 2nd triangle and line
  let rot1 = letterData["rotate1"]; //rotate of 1st triangle and line
  let rot2 = letterData["rotate2"]; //rotate of 2nd triangle and line

//draw two triangles with seperate rotation ability, collective and individual push and pops to 
//position correctly 

//draw three lines, two on adjacent sides of the first triangle, and one on the first side
//of the second triangle

push();
  translate(50,30);
  scale(0.7);

    push();
      strokeWeight(6);

//double line 1 tri 1
      push();
        rotate(rot1);
        line(tri1X-50, tri1Y+34.6, tri1X, tri1Y-48);
      pop();

//double line 2 tri 1
      push();
        rotate(rot1);
        line(tri1X, tri1Y-48, tri1X+50, tri1Y+34.6);
      pop();

//single line tri 2
      push();
        rotate(rot2);
        line(tri2X-50, tri2Y+34.6, tri2X, tri2Y-48);
      pop();

    pop();


//create triangles 1 and 2
    

//tri1
    push();
      strokeWeight(2);
      rotate(rot1);
      triangle(tri1X-50, tri1Y+36.6, tri1X, tri1Y-50, tri1X+50, tri1Y+36.6);
    pop();

//tri2   
    push();
      strokeWeight(2);
      rotate(rot2);  
      triangle(tri2X-50, tri2Y+36.6, tri2X, tri2Y-50, tri2X+50, tri2Y+36.6);
    pop();

pop();
}

//animate between letters, small bounce on rotation 
function interpolate_letter(percent, oldObj, newObj){
  let new_obj = {};
  new_obj["tri1X"] = map(percent, 0, 100, oldObj["tri1X"], newObj ["tri1X"]);
  new_obj["tri1Y"] = map(percent, 0, 100, oldObj["tri1Y"], newObj ["tri1Y"]);
  new_obj["tri2X"] = map(percent, 0, 100, oldObj["tri2X"], newObj ["tri2X"]);
  new_obj["tri2Y"] = map(percent, 0, 100, oldObj["tri2Y"], newObj ["tri2Y"]);
  new_obj["rotate1"] = map(percent, 0, 98, oldObj["rotate1"], newObj ["rotate1"]);
  new_obj["rotate2"] = map(percent, 0, 98, oldObj["rotate2"], newObj ["rotate2"]);
  return new_obj;
}

//sample words for exhibition start 
var swapWords = [
  "TRIANGLE", //font name
  "PRINCESS",
  "UMBRELLA",
  "BELIEVED",
  "BORROWED",
  ]