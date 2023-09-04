/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ff9999";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

 
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
   
  //stroke(colorStroke);
  strokeWeight(8);

 
  let rect1x=  letterData["rx1"];
  let rect1y=  letterData["ry1"];
  let rect1w= letterData["rw1"];
  let rect1h= letterData["rh1"];//determine parameters of rectangle1

  let rect2x=  letterData["rx2"];
  let rect2y=  letterData["ry2"];
  let rect2w= letterData["rw2"];
  let rect2h= letterData["rh2"]; //parameters of rect2

  let rect3x= letterData["rx3"];
  let rect3y= letterData["ry3"];
  let rect3w= letterData["rw3"];
  let rect3h= letterData["rh3"];//parameters of rect3

  let line1x= letterData["lx1"];
  let line1y= letterData["ly1"];
  let end1x= letterData["ex1"];
  let end1y= letterData["ey1"]; //parameters of line1

   let line2x= letterData["lx2"];
  let line2y= letterData["ly2"];
  let end2x= letterData["ex2"];
  let end2y= letterData["ey2"]; //parameters of line2

push()
  rectMode(CENTER);

  noFill();
  stroke(255) ;
  line(line1x,line1y,end1x,end1y);//draw white line

  stroke(0);
  line(line2x,line2y,end2x,end2y);//draw black line

  
  noStroke();
  fill(90, 188, 191);
  rect(rect1x,rect1y,rect1w,rect1h,5);//draw blue rectangle

  fill(197, 212, 205); 
  rect(rect2x,rect2y,rect2w,rect2h,30);//draw mint green rectangle

  fill(237, 236, 187); 
  rect(rect3x,rect3y,rect3w,rect3h,30);//draw yellow rectangle
pop()

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["rx1"]    = map(percent, 0, 100, oldObj["rx1"], newObj["rx1"]);
  new_letter["ry1"] = map(percent, 0, 100, oldObj["ry1"], newObj["ry1"]);
  new_letter["rw1"] = map(percent, 0, 100, oldObj["rw1"], newObj["rw1"]);
  new_letter["rh1"] = map(percent, 0, 100, oldObj["rh1"], newObj["rh1"]);

  new_letter["rx2"]    = map(percent, 0, 100, oldObj["rx2"], newObj["rx2"]);
  new_letter["ry2"] = map(percent, 0, 100, oldObj["ry2"], newObj["ry2"]);
  new_letter["rw2"] = map(percent, 0, 100, oldObj["rw2"], newObj["rw2"]);
  new_letter["rh2"] = map(percent, 0, 100, oldObj["rh2"], newObj["rh2"]);

  new_letter["rx3"]    = map(percent, 0, 100, oldObj["rx3"], newObj["rx3"]);
  new_letter["ry3"] = map(percent, 0, 100, oldObj["ry3"], newObj["ry3"]);
  new_letter["rw3"] = map(percent, 0, 100, oldObj["rw3"], newObj["rw3"]);
  new_letter["rh3"] = map(percent, 0, 100, oldObj["rh3"], newObj["rh3"]);

  new_letter["lx1"]    = map(percent, 0, 100, oldObj["lx1"], newObj["lx1"]);
  new_letter["ly1"] = map(percent, 0, 100, oldObj["ly1"], newObj["ly1"]);
  new_letter["ex1"] = map(percent, 0, 100, oldObj["ex1"], newObj["ex1"]);
  new_letter["ey1"] = map(percent, 0, 100, oldObj["ey1"], newObj["ey1"]);

  new_letter["lx2"]    = map(percent, 0, 100, oldObj["lx2"], newObj["lx2"]);
  new_letter["ly2"] = map(percent, 0, 100, oldObj["ly2"], newObj["ly2"]);
  new_letter["ex2"] = map(percent, 0, 100, oldObj["ex2"], newObj["ex2"]);
  new_letter["ey2"] = map(percent, 0, 100, oldObj["ey2"], newObj["ey2"]);

  return new_letter;
}

var swapWords = [
  "WORKOUT?",
  "BARBELL?",
  "12345678",
  "?AMUSE??"
]