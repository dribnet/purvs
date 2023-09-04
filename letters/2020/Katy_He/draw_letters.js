const colorFront1  = "#480099";  //purple
const colorFront2  = "#e8c70c";  //yellow
const colorFront3  = "#ba6900";  //

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


function drawLetter(letterData) {
  // color/stroke setup
noStroke();
 angleMode(DEGREES);

 let size1x = letterData["arch"];
  let size1y = letterData["arcw"];
  let arcSize1 = letterData["s1"]
  let pos1x = letterData["start"];
  let pos1y = letterData["stop"];

  let size2x = letterData["arch1"];
  let size2y = letterData["arcw1"];
  let pos2x =  letterData["offsetx1"];
  let pos2y =  letterData["offsety1"];
  let angel1 = letterData["angel"]
  let angel2 = letterData["angel1"]


  let size4x = 50 + letterData["arch2"];
  let size4y = 100 + letterData["arcw2"];
  let arcSize2 = letterData["s2"];


 


  fill(colorFront2);
  arc(pos1x,pos1y,arcSize1,arcSize1,size1x,size1y);
  
  fill(colorFront1)
  rect(pos2x, pos2y, size2x, size2y,0,angel2,0,angel1);
  
 
 fill(colorFront3);
 ellipse(size4x,size4y,arcSize2,arcSize2);
  
  

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

new_letter["arch"] = map(percent, 0, 100, oldObj["arch"], newObj["arch"]);
 new_letter["arcw"] = map(percent, 0, 100, oldObj["arcw"], newObj["arcw"]);
new_letter["s1"] = map(percent, 0, 100, oldObj["s1"], newObj["s1"]);
 new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
 new_letter["stop"] = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);

 new_letter["arcw1"] = map(percent, 0, 100, oldObj["arcw1"], newObj["arcw1"]);
 new_letter["arch1"]    = map(percent, 0, 100, oldObj["arch1"], newObj["arch1"]);
 new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
 new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
 new_letter["angel"] = map(percent, 0, 100, oldObj["anegl"], newObj["angel"]);
 new_letter["angel1"] = map(percent, 0, 100, oldObj["angel1"], newObj["angel1"]);


 new_letter["arch2"] = map(percent, 0, 100, oldObj["arch2"], newObj["arch2"]);
 new_letter["arcw2"] = map(percent, 0, 100, oldObj["arcw2"], newObj["arcw2"]);
 new_letter["s2"] = map(percent, 0, 100, oldObj["s2"], newObj["s2"]);
 


  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]