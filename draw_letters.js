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
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]