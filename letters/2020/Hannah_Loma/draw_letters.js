//COLOURS
//Purple - #ff00ff
const R4 = 255;
const G4 = 0;
const B4 = 255;
//Red - #ff3737
const R2 = 255;
const G2 = 55;
const B2 = 55;
//Bright Yellow - #fff200
const R1 = 255;
const G1 = 242;
const B1 = 0;
//Bright Light Blue - #00ffff
const R3 = 0;
const G3 = 255;
const B3 = 255;
//ALPHA COLOUR OPACITY LEVELS 
const A1 = 190; //Bright Colour

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

//Parameters for lines
  //line 1
  let lX1 = letterData["lineX1"];
  let lY1 = letterData["lineY1"];
  let lX2 = letterData["lineX2"];
  let lY2 = letterData["lineY2"];
  //line 2
  let lX3 = letterData["lineX3"];
  let lY3 = letterData["lineY3"];
  let lX4 = letterData["lineX4"];
  let lY4 = letterData["lineY4"];
  //line 3
  let lX5 = letterData["lineX5"];
  let lY5 = letterData["lineY5"];
  let lX6 = letterData["lineX6"];
  let lY6 = letterData["lineY6"];
  //line 4
  let lX7 = letterData["lineX7"];
  let lY7 = letterData["lineY7"];
  let lX8 = letterData["lineX8"];
  let lY8 = letterData["lineY8"];
  //Stroke Weight 
  let strokeW1 = letterData["sWeight1"];

//DRAW LINES
  //Line 1
  push(); //added as it changed interaction html texts stroke weight
  strokeWeight(30);
  strokeCap(SQUARE)
  stroke(R4, G4, B4, A1); //Purple
  line(lX3, lY3, lX4, lY4);
  //Line 2
  strokeWeight(30);
  stroke(R2, G2, B2, A1); //Dark Blue
  line(lX7, lY7, lX8, lY8);
  //Line 3
  strokeWeight(strokeW1);
  stroke(R1, G1, B1, A1); //Yellow
  line(lX1, lY1, lX2, lY2);
  //Line 4
  strokeWeight(30);
  stroke(R3, G3, B3, A1); //Light Blue
  line(lX5, lY5, lX6, lY6);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["lineX1"] = map(percent, 0, 100, oldObj["lineX1"], newObj["lineX1"]);
  new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineX3"] = map(percent, 0, 100, oldObj["lineX3"], newObj["lineX3"]);
  new_letter["lineX4"] = map(percent, 0, 100, oldObj["lineX4"], newObj["lineX4"]);
  new_letter["lineX5"] = map(percent, 0, 100, oldObj["lineX5"], newObj["lineX5"]);
  new_letter["lineX6"] = map(percent, 0, 100, oldObj["lineX6"], newObj["lineX6"]);
  new_letter["lineX7"] = map(percent, 0, 100, oldObj["lineX7"], newObj["lineX7"]);
  new_letter["lineX8"] = map(percent, 0, 100, oldObj["lineX8"], newObj["lineX8"]);
  new_letter["lineY1"] = map(percent, 0, 100, oldObj["lineY1"], newObj["lineY1"]);
  new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
  new_letter["lineY3"] = map(percent, 0, 100, oldObj["lineY3"], newObj["lineY3"]);
  new_letter["lineY4"] = map(percent, 0, 100, oldObj["lineY4"], newObj["lineY4"]);
  new_letter["lineY5"] = map(percent, 0, 100, oldObj["lineY5"], newObj["lineY5"]);
  new_letter["lineY6"] = map(percent, 0, 100, oldObj["lineY6"], newObj["lineY6"]);
  new_letter["lineY7"] = map(percent, 0, 100, oldObj["lineY7"], newObj["lineY7"]);
  new_letter["lineY8"] = map(percent, 0, 100, oldObj["lineY8"], newObj["lineY8"]);
  new_letter["sWeight1"] = map(percent, 0, 100, oldObj["sWeight1"], newObj["sWeight1"]);
  return new_letter;
}

var swapWords = [
  "TROPICAL",
  "!STATIC!",
  "TELEVIZE",
  "JUNKFOOD",
  "CHROMIZE",
  "JOKINGLY",
  "EXHIBITS"

]