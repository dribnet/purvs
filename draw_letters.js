const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // // 0,0 by 100,200
  strokeWeight(5);

  fill(255,200);
  noStroke();
  // if(letterData["isLine"]){
  //   triangle(letterData["lineX"],50,letterData["lineX"],150,100/2 - letterData["size"]/5, 200/2 + letterData["size"]/5);
  // }
  // else{
  //   triangle(100/2 - letterData["size"]/5,200/2 - letterData["size"]/5,100/2 + letterData["size2"]/5 , 200/2,100/2 - letterData["size3"]/5, 200/2 + letterData["size3"]/5);
  // }

  noFill();
  stroke(150,100);
  if(false){
  ellipse(100/2 - letterData["size"]/5 + letterData["offsetX"],200/2 - letterData["size"]/5,letterData["size"],letterData["size"]);
  ellipse(100/2 + letterData["size2"]/5 + letterData["offsetX"], 200/2,letterData["size2"],letterData["size2"]);
  ellipse(100/2 - letterData["size3"]/5 + letterData["offsetX"], 200/2 + letterData["size3"]/5,letterData["size3"],letterData["size3"]);

  }

  angleMode(DEGREES);

  // if(letterData["arcStart1"] != 0 && letterData["arcEnd1"] != 0){
  //   arc(100/2 - letterData["size"]/5 + letterData["offsetX"],200/2 - letterData["size"]/5,letterData["size"],letterData["size"], letterData["arcStart1"]-20, letterData["arcEnd1"] + 20);
  // }
  // if(letterData["arcStart2"] != 0 && letterData["arcEnd2"] != 0){
  //   arc(100/2 + letterData["size2"]/5 + letterData["offsetX"], 200/2,letterData["size2"],letterData["size2"], letterData["arcStart2"]-20, letterData["arcEnd2"] + 20);
  // }
  // if(letterData["arcStart3"] != 0 && letterData["arcEnd3"] != 0){
  //   arc(100/2 - letterData["size3"]/5 + letterData["offsetX"], 200/2 + letterData["size3"]/5,letterData["size3"],letterData["size3"], letterData["arcStart3"]-20, letterData["arcEnd3"]+20);
  // }
  stroke(colorOutline);
  line(letterData["lineX"],50,letterData["lineX"],150);
  line(letterData["lineX"]+8,50,letterData["lineX"]+8,150);
  stroke(colorFront);
  strokeWeight(2);
  line(letterData["lineX"],50,letterData["lineX"],150);
  line(letterData["lineX"]+8,50,letterData["lineX"]+8,150);

  stroke(colorOutline);
  strokeWeight(5);
  arc(100/2 - letterData["size"]/5 + letterData["offsetX"],200/2 - letterData["size"]/5,letterData["size"],letterData["size"], letterData["arcStart1"], letterData["arcEnd1"]);
  arc(100/2 + letterData["size2"]/5 + letterData["offsetX"], 200/2,letterData["size2"],letterData["size2"], letterData["arcStart2"], letterData["arcEnd2"]);
  arc(100/2 - letterData["size3"]/5 + letterData["offsetX"], 200/2 + letterData["size3"]/5,letterData["size3"],letterData["size3"], letterData["arcStart3"], letterData["arcEnd3"]);


  stroke(colorFront);
  strokeWeight(2);
  arc(100/2 - letterData["size"]/5 + letterData["offsetX"],200/2 - letterData["size"]/5,letterData["size"],letterData["size"], letterData["arcStart1"], letterData["arcEnd1"]);
  arc(100/2 + letterData["size2"]/5 + letterData["offsetX"], 200/2,letterData["size2"],letterData["size2"], letterData["arcStart2"], letterData["arcEnd2"]);
  arc(100/2 - letterData["size3"]/5 + letterData["offsetX"], 200/2 + letterData["size3"]/5,letterData["size3"],letterData["size3"], letterData["arcStart3"], letterData["arcEnd3"]);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["size3"]    = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  if(oldObj["arcStart1"] - oldObj["arcEnd1"] > 0){

  }
  new_letter["arcStart1"] = map(percent, 0, 100, oldObj["arcStart1"], newObj["arcStart1"]);
  new_letter["arcEnd1"] = map(percent, 0, 100, oldObj["arcEnd1"], newObj["arcEnd1"]);
  new_letter["arcStart2"] = map(percent, 0, 100, oldObj["arcStart2"], newObj["arcStart2"]);
  new_letter["arcEnd2"] = map(percent, 0, 100, oldObj["arcEnd2"], newObj["arcEnd2"]);
  new_letter["arcStart3"] = map(percent, 0, 100, oldObj["arcStart3"], newObj["arcStart3"]);
  new_letter["arcEnd3"] = map(percent, 0, 100, oldObj["arcEnd3"], newObj["arcEnd3"]);
  new_letter["lineX"] = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  new_letter["offsetX"] = map(percent, 0, 100, oldObj["offsetX"], newObj["offsetX"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
