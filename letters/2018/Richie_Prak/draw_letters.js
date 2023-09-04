const colorFront  = "#ccdefc";
const colorStroke = "#233f11";

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

  // determine parameters 
  let x1 = letterData["x1"];
  let y1 = letterData["y1"];
  let x2 = letterData["x2"];
  let y2 = letterData["y2"];
  let x3 = letterData["x3"];
  let y3 = letterData["y3"];

  let x4 = letterData["x4"];
  let y4 = letterData["y4"];
  let x5 = letterData["x5"];
  let y5 = letterData["y5"];
  let x6 = letterData["x6"];
  let y6 = letterData["y6"];

  //guidelines 
  //stroke(142, 173, 107);
  //noFill();
  //rect(0, 0, 100, 200);
  
  noStroke();
  //left triangle
  //stroke(255);
  fill(141, 198, 75);
  triangle(x1, y1, x2, y2, x3, y3);
  //shadow
  //noStroke();
  fill(176, 232, 111);
  let shadowX = x1 + 20;
  triangle(shadowX, y1, x2, y2, x3, y3);
  
  
  //right triangle
  noStroke();
  strokeWeight(4);
  fill(194, 226, 151);
  //stroke(255);
  triangle(x4, y4, x5, y5, x6, y6);
  noStroke();


  var swapWords = [

  "THINKING"


  ]



}
  function interpolate_letter(percent, oldObj, newObj){
   let new_letter = {};
   new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
   new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
   new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
   new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
   new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
   new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
   new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
   new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
   new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
   new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
   new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
   new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
   return new_letter;
}
   
   var swapWords = [
   "THINKING",
   "DAZZLING",
   "GOTTEM??",
   "TAEHYUNG",
   "ORIGAMI?",
   "THANKFUL", 
   "REACTION"
]

