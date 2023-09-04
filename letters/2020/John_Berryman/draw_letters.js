const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";
const colorball  = "#FF9270";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  noStroke();
  angleMode(DEGREES);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50  + letterData["offsetx"];
  //let pos2y = 150 + letterData["offsety"];


  
  let c1 =  letterData["point1"];
  let c2 =  letterData["point2"];
  let c3 =  letterData["point3"];
  let c4 =  letterData["point4"];
  let c5 =  letterData["point5"];
  let c6 =  letterData["point6"];
  let posbx = 50 + letterData["bx"];
  let posby = 100 + letterData["by"];
   let posb1x = 50 + letterData["bx1"];
  let posb1y = 100 + letterData["by1"];
    let posb2x = 50 + letterData["dotx"];
  let posb2y = 100 + letterData["doty"];


  // draw two circles
  fill(colorFront2);
  ellipse(50, 100, 75, 75);

  fill(colorball);
  //ellipse(pos2x, pos2y, size2, size2);\
  ellipse(posbx, posby, 20);
  ellipse(posb1x, posb1y, 20);
  triangle(c5, c6, 50 + c1, 100 + c2, 50 + c3, 100 + c4);
    noFill();
    stroke(colorFront1);
    strokeWeight(2);
  ellipse(posb2x, posb2y, 10);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};


  new_letter["point1"] = map(percent, 0, 100, oldObj["point1"], newObj["point1"]);
  new_letter["point2"] = map(percent, 0, 100, oldObj["point2"], newObj["point2"]);
  new_letter["point3"] = map(percent, 0, 100, oldObj["point3"], newObj["point3"]);
  new_letter["point4"] = map(percent, 0, 100, oldObj["point4"], newObj["point4"]);
  new_letter["point5"] = map(percent, 0, 100, oldObj["point5"], newObj["point5"]);
  new_letter["point6"] = map(percent, 0, 100, oldObj["point6"], newObj["point6"]);
 // new_letter["bx"] = map(percent, 0, 100, oldObj["bx"], newObj["bx"]);
  //new_letter["by"] = map(percent, 0, 100, oldObj["by"], newObj["by"]);
 // new_letter["bx1"] = map(percent, 0, 100, oldObj["bx1"], newObj["bx1"]);
 // new_letter["by1"] = map(percent, 0, 100, oldObj["by1"], newObj["by1"]);

  if(percent <30){
  new_letter["bx"] = oldObj["bx"];
  new_letter["by"] = oldObj["by"];
   new_letter["bx1"] = oldObj["bx1"];
  new_letter["by1"] = oldObj["by1"];
  
  }
   else{
      new_letter["bx"] = map(percent *2, 0, 200, oldObj["bx"], newObj["bx"]);
  new_letter["by"] = map(percent * 2, 0, 200, oldObj["by"], newObj["by"]);
    new_letter["bx1"] = map(percent/2, 0, 50, oldObj["bx1"], newObj["bx1"]);
  new_letter["by1"] = map(percent/2, 0, 50, oldObj["by1"], newObj["by1"]);
   }

   if(percent <70){
 new_letter["dotx"] = oldObj["dotx"];
  new_letter["doty"] = oldObj["doty"];
}
   else{
      new_letter["dotx"] = map(percent, 0, 100, oldObj["dotx"], newObj["bx"]);
  new_letter["doty"] = map(percent, 0, 100, oldObj["doty"], newObj["by"]);
}
  return new_letter;
}

var swapWords = [
  "DINGDONG",
  "BELIEVED",
  "BROTHERS",
  "CHAMPION",
  "CONTRAST",
  "CREATIVE",
  "DESIGNED",
  "DISCOVER",
  "DOWNLOAD",
  "EVERYONE",
  "EXTERNAL",
  "FRIENDLY",
  "GRAPHICS",
  "IDENTITY",
  "MEMORIES",
  "NORMALLY",
  "PAINTING",
  "POLITICS",
  "PREGNANT",
  "RELIGION",
  "SOLDIERS",
  "TEACHING",
  "THINKING",
  "TOGETHER",
  "UNIVERSE",
  "CANNABIS",
  "ERECTION",
  "POTATOES",
  "CHURCHES"

]