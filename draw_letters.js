const colorFront1  = "#fae";
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
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  //let size2 = letterData["size"];

  let FirstPosx = letterData["T11x"];
  let FirstPosy = letterData["T11y"]
  let SecondPosx = letterData["T12x"];
  let SecondPosy = letterData["T12y"];
  let ThirdPosx = letterData["T13x"];
  let ThirdPosy = letterData["T13y"];

  let SFirstPosx = letterData["T21x"];
  let SFirstPosy = letterData["T21y"]
  let SSecondPosx = letterData["T22x"];
  let SSecondPosy = letterData["T22y"];
  let SThirdPosx = letterData["T23x"];
  let SThirdPosy = letterData["T23y"];

  // draw two circles
//  var size = width * 0.05;
// translate(width/2, height/2);
// triangle(0, 0, size, size*2, -size, size*2);
// }

//draw first tri
fill(colorFront1);
triangle(FirstPosx, FirstPosy, SecondPosx, SecondPosy, ThirdPosx, ThirdPosy);

//draw second tri
fill(colorFront2);
triangle(SFirstPosx, SFirstPosy, SSecondPosx, SSecondPosy, SThirdPosx, SThirdPosy);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["T11x"] = map(percent, 0, 100, oldObj["T11x"], newObj["T11x"]);
  new_letter["T11y"] = map(percent, 0, 100, oldObj["T11y"], newObj["T11y"]);
  new_letter["T12x"] = map(percent, 0, 100, oldObj["T12x"], newObj["T12x"]);
  new_letter["T12y"] = map(percent, 0, 100, oldObj["T12y"], newObj["T12y"]);
  new_letter["T13x"] = map(percent, 0, 100, oldObj["T13x"], newObj["T13x"]);
  new_letter["T13y"] = map(percent, 0, 100, oldObj["T13y"], newObj["T13y"]);
  new_letter["T21x"] = map(percent, 0, 100, oldObj["T21x"], newObj["T21x"]);  
  new_letter["T21y"] = map(percent, 0, 100, oldObj["T21y"], newObj["T21y"]); 
  new_letter["T22x"] = map(percent, 0, 100, oldObj["T22x"], newObj["T22x"]);  
  new_letter["T22y"] = map(percent, 0, 100, oldObj["T22y"], newObj["T22y"]);  
  new_letter["T23x"] = map(percent, 0, 100, oldObj["T23x"], newObj["T23x"]);
  new_letter["T23y"] = map(percent, 0, 100, oldObj["T23y"], newObj["T23y"]);


 


  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]