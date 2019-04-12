const colorFront1  = "#CDC1DE";
const colorFront2  = "#BDACD4";
const colorStroke  = "#746CC0";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // parameters
  let linex1 = letterData["linex1"];
  let liney1 = letterData["liney1"];
  let linex2 = letterData["linex2"];
  let liney2 = letterData["liney2"];

  let linex3 = letterData["linex3"];
  let liney3 = letterData["liney3"];
  let linex4 = letterData["linex4"];
  let liney4 = letterData["liney4"];

  let linex5 = letterData["linex5"];
  let liney5 = letterData["liney5"];
  let linex6 = letterData["linex6"];
  let liney6 = letterData["liney6"];

  let linex7 = letterData["linex7"];
  let liney7 = letterData["liney7"];
  let linex8 = letterData["linex8"];
  let liney8 = letterData["liney8"];
  
  let linex9 = letterData["linex9"];
  let liney9 = letterData["liney9"];
  let linex10 = letterData["linex10"];
  let liney10 = letterData["liney10"];
  

  // line
  stroke(116,108,192);
  strokeWeight(5);
  line(linex1, liney1, linex2, liney2);

  stroke(116,108,192);
  strokeWeight(5);
  line(linex3, liney3, linex4, liney4);

  stroke(116,108,192);
  strokeWeight(5);
  line(linex5, liney5, linex6, liney6);

  stroke(116,108,192);
  strokeWeight(5);
  line(linex7, liney7, linex8, liney8);
  
  stroke(116,108,192);
  strokeWeight(5);
  line(linex9, liney9, linex10, liney10);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["linex1"] = map(percent, 0, 100, oldObj["linex1"], newObj["linex1"]);
  new_letter["liney1"] = map(percent, 0, 100, oldObj["liney1"], newObj["liney1"]);
  new_letter["linex2"] = map(percent, 0, 100, oldObj["linex2"], newObj["linex2"]);
  new_letter["liney2"] = map(percent, 0, 100, oldObj["liney2"], newObj["liney2"]);

  new_letter["linex3"] = map(percent, 0, 100, oldObj["linex3"], newObj["linex3"]);
  new_letter["liney3"] = map(percent, 0, 100, oldObj["liney3"], newObj["liney3"]);
  new_letter["linex4"] = map(percent, 0, 100, oldObj["linex4"], newObj["linex4"]);
  new_letter["liney4"] = map(percent, 0, 100, oldObj["liney4"], newObj["liney4"]);

  new_letter["linex5"] = map(percent, 0, 100, oldObj["linex5"], newObj["linex5"]);
  new_letter["liney5"] = map(percent, 0, 100, oldObj["liney5"], newObj["liney5"]);
  new_letter["linex6"] = map(percent, 0, 100, oldObj["linex6"], newObj["linex6"]);
  new_letter["liney6"] = map(percent, 0, 100, oldObj["liney6"], newObj["liney6"]);

  new_letter["linex7"] = map(percent, 0, 100, oldObj["linex7"], newObj["linex7"]);
  new_letter["liney7"] = map(percent, 0, 100, oldObj["liney7"], newObj["liney7"]);
  new_letter["linex8"] = map(percent, 0, 100, oldObj["linex8"], newObj["linex8"]);
  new_letter["liney8"] = map(percent, 0, 100, oldObj["liney8"], newObj["liney8"]);
  
  new_letter["linex9"] = map(percent, 0, 100, oldObj["linex9"], newObj["linex9"]);
  new_letter["liney9"] = map(percent, 0, 100, oldObj["liney9"], newObj["liney9"]);
  new_letter["linex10"] = map(percent, 0, 100, oldObj["linex10"], newObj["linex10"]);
  new_letter["liney10"] = map(percent, 0, 100, oldObj["liney10"], newObj["liney10"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]