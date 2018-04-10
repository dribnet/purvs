const colorFront  = "pink";
const colorStroke = "#84ceab";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50+letterData["offsetx"];
  //let pos2y = 150+letterData["offsety"];

  // draw two circles
  //ellipse(50, 150, 100, 100);
 // ellipse(pos2x, pos2y, size2, size2);
 if(letterData["b1"]==1){
   //rect at location 1
   rect(0,0,30,30);
 }
 if(letterData["b2"]==1){
 rect(30,0,30,30);
}
 if(letterData["b3"]==1){
 rect(60,0,30,30);
}
if(letterData["b4"]==1){
 rect(0,30,30,30);
}
if(letterData["b5"]==1){
 rect(30,30,30,30);
}
if(letterData["b6"]==1){
 rect(60,30,30,30);
}
if(letterData["b7"]==1){
 rect(0,60,30,30);
}
if(letterData["b8"]==1){
 rect(30,60,30,30);
}
if(letterData["b9"]==1){
 rect(60,60,30,30);
}
if(letterData["b10"]==1){
 rect(0,90,30,30);
}
if(letterData["b11"]==1){
 rect(30,90,30,30);
}
if(letterData["b12"]==1){
 rect(60,90,30,30);
}

//loci 4 will be at 0, 30
//loci 5 will be at 30, 30



 rect(30,30,30,30);

}
