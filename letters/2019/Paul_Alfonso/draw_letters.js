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

  // color/stroke setup
  stroke("#ff5185");
  strokeWeight(4);

  //grabbing contants from letters js and placing them into variables so that I can use the numbers on lines and ellipses

  //first line
  let l1x = letterData["pos1x"];
  let l2x = letterData["pos2x"];
  let l1y = letterData["pos1y"];
  let l2y = letterData["pos2y"];

  //second line
  let l1i = letterData["pos1i"];
  let l2i = letterData["pos1i"];
  let l1j = letterData["pos1j"];
  let l2j = letterData["pos1j"];

  //third line
  let l1q = letterData["pos1q"];
  let l2q = letterData["pos1q"];
  let l1w = letterData["pos1w"];
  let l2w = letterData["pos1w"];

  //ellipses for numbers
  let e1k =  letterData["pos1k"]
  let e2k =  letterData["pos2k"]
  let e1h =  letterData["pos1h"]

  let e1z =  letterData["pos1z"]
  let e2z =  letterData["pos2z"]
  let e1v =  letterData["pos1v"]

  //vertex for 8
  let v1d =  letterData["pos1d"]
  let v1f =  letterData["pos1f"]
  let v1g =  letterData["pos1g"]

  //lines for alphabet
  //placing the variables into line and ellipse primitives to create the characters
  noFill(0);
  strokeWeight(12);

  line(l1x, l1y, l2x, l2y);

  line(l1i, l1j, l2i+50, l2j);

  line(l1q, l1w, l2q+50, l2w+50);

  ellipse(e1k, e2k, e1h, e1h);

  line(e1z, e2z, e1v, 20);

  beginShape();
    vertex(0, 0)
    vertex(50, v1d);
    vertex(100, v1f);
    vertex(50, v1g);
  endShape();

  //this is just for the interaction.html since the stroke is messing with the numbers and percentage stoke
  strokeWeight(5);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = { };

  //added an if and else statement to delay the transitions a bit, making the interpolation look 'snappy'
  if(percent <60){
    new_letter["pos1x"] = oldObj["pos1x"]
    new_letter["pos2x"] = oldObj["pos2x"]
    new_letter["pos1y"] = oldObj["pos1y"]
    new_letter["pos2y"] = oldObj["pos2y"]
  }else{
    new_letter["pos1x"] = map(percent, 60, 100, oldObj["pos1x"], newObj["pos1x"]);
    new_letter["pos2x"] = map(percent, 60, 100, oldObj["pos2x"], newObj["pos2x"]);
    new_letter["pos1y"] = map(percent, 60, 100, oldObj["pos1y"], newObj["pos1y"]);
    new_letter["pos2y"] = map(percent, 60, 100, oldObj["pos2y"], newObj["pos2y"]);
  }

  if(percent <40){
    new_letter["pos1i"] = oldObj["pos1i"]
    new_letter["pos2i"] = oldObj["pos2i"]
    new_letter["pos1j"] = oldObj["pos1j"]
    new_letter["pos2j"] = oldObj["pos2j"]
  }else{
    new_letter["pos1i"] = map(percent, 40, 100, oldObj["pos1i"], newObj["pos1i"]);
    new_letter["pos2i"] = map(percent, 40, 100, oldObj["pos2i"], newObj["pos2i"]);
    new_letter["pos1j"] = map(percent, 40, 100, oldObj["pos1j"], newObj["pos1j"]);
    new_letter["pos2j"] = map(percent, 40, 100, oldObj["pos2j"], newObj["pos2j"]);
  }
  if(percent <20){
    new_letter["pos1q"] = oldObj["pos1q"]
    new_letter["pos2q"] = oldObj["pos2q"]
    new_letter["pos1w"] = oldObj["pos1w"]
    new_letter["pos2w"] = oldObj["pos2w"]
  }else{
    new_letter["pos1q"] = map(percent, 20, 100, oldObj["pos1q"], newObj["pos1q"]);
    new_letter["pos2q"] = map(percent, 20, 100, oldObj["pos2q"], newObj["pos2q"]);
    new_letter["pos1w"] = map(percent, 20, 100, oldObj["pos1w"], newObj["pos1w"]);
    new_letter["pos2w"] = map(percent, 20, 100, oldObj["pos2w"], newObj["pos2w"]);
  }
  if(percent <0){
    new_letter["pos1q"] = oldObj["pos1q"]
    new_letter["pos2q"] = oldObj["pos2q"]
    new_letter["pos1w"] = oldObj["pos1w"]
  }else{
    new_letter["pos1k"] = map(percent, 0, 100, oldObj["pos1k"], newObj["pos1k"]);
    new_letter["pos2k"] = map(percent, 0, 100, oldObj["pos2k"], newObj["pos2k"]);
    new_letter["pos1h"] = map(percent, 0, 100, oldObj["pos1h"], newObj["pos1h"]);
  }
  return new_letter;
}

//changed the words the pop up in the exhibition.html
var swapWords = [
  "PROBABLY",
  "DAUGHTER",
  "TROUBLED",
  "PENTAGON",
  "HOSPITAL",
  "POLISHED",
  "CUSTOMER",
  "REQUITED",
  "ABNORMAL",
  "?POTATO?"
]
