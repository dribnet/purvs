//COLOURS
//Purple - #ff00ff
const R4 = 255;
const G4 = 0;
const B4 = 255;
//Dark Blue - #001eff
const R2 = 0;
const G2 = 30;
const B2 = 255;
//Bright Yellow - #fff200
const R1 = 255;
const G1 = 242;
const B1 = 0;
//Bright Light Blue - #00ffff
const R3 = 0;
const G3 = 255;
const B3 = 255;
//ALPHA COLOUR OPACITY LEVELS 
const A1 = 170; //Bright Yellow


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
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]