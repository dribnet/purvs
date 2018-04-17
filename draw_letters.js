const colorFront  = "#9fc471";
const colorStroke = "#344222";


//original colours
// const colorFront  = "pink";
// const colorStroke = "#84ceab";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

   var swapWords = [
  ".GLITCH.",
  "WELCOME ",
  ".CLICK..",
  "HAHAHAHA",
  "WHIZZING",
  "FRAZZLED"
  ]
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



 //rect(30,30,30,30);

}
function interpolate_letter(percent, oldObj, newObj){

  var on = 1;
let new_letter = {};
new_letter["b1"] = map(percent,0,100,oldObj["b1"],newObj["b1"])
new_letter["b2"] = map(percent,0,100,oldObj["b2"],newObj["b2"])
new_letter["b3"] = map(percent,0,100,oldObj["b3"],newObj["b3"])
new_letter["b4"] = map(percent,0,100,oldObj["b4"],newObj["b4"])
new_letter["b5"] = map(percent,0,100,oldObj["b5"],newObj["b5"])
new_letter["b6"] = map(percent,0,100,oldObj["b6"],newObj["b6"])
new_letter["b7"] = map(percent,0,100,oldObj["b7"],newObj["b7"])
new_letter["b8"] = map(percent,0,100,oldObj["b8"],newObj["b8"])
new_letter["b9"] = map(percent,0,100,oldObj["b9"],newObj["b9"])
new_letter["b10"] = map(percent,0,100,oldObj["b10"],newObj["b10"])
new_letter["b11"] = map(percent,0,100,oldObj["b11"],newObj["b11"])
new_letter["b12"] = map(percent,0,100,oldObj["b12"],newObj["b12"])

return new_letter;



}

