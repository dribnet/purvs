/* these are optional special variables which will change the system */
var systemBackgroundColor = "#012244";
var systemLineColor = "#8C6C7F";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#012244";
const strokeColor      = "#233f11";

const darkPink  = "#8C6C7F";
const lightBlue  = "#6C8A8C";
const lighterBlue = "#B5D6F5";

const greyish = "#CED8E1";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  push()

  let size2 = letterData["size"];

  let posx = letterData["offsetx"]
  let posy = letterData["offsety"]

  let posx2 = letterData["offsetx2"];
  let posy2 = letterData["offsety2"];

  let SmallerxPosition = letterData["smallXPos"]
  let SmalleryPosition = letterData["smallYPos"]

  let SmallerxPosition2 = letterData["smallXPos2"]
  let SmalleryPosition2 = letterData["smallYPos2"]
  
  let circlex = letterData["starx"]
  let circley = letterData["stary"]

  noStroke();
  fill(darkPink);
  //pink squares
  rect(posx, posy, 100, 100);

  fill(lightBlue);
  //green/blue square
  rect(posx2,posy2, size2, size2);

  fill(backgroundColor);
 //dark blue square one
  rect(SmallerxPosition, SmalleryPosition, size2-30,size2-30);
 //dark blue square two
  rect(SmallerxPosition2, SmalleryPosition2, size2-30,size2-30);

  fill(greyish)
  //star
  ellipse(circlex,circley,10,10);
  
  pop()
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["smallXPos"] = map(percent, 0, 100, oldObj["smallXPos"], newObj["smallXPos"]);
  new_letter["smallYPos"] = map(percent, 0, 100, oldObj["smallYPos"], newObj["smallYPos"]);
  new_letter["smallXPos2"] = map(percent, 0, 100, oldObj["smallXPos2"], newObj["smallXPos2"]);
  new_letter["smallYPos2"] = map(percent, 0, 100, oldObj["smallYPos2"], newObj["smallYPos2"]);
  new_letter["starx"] = map(percent, 0, 100, oldObj["starx"], newObj["starx"]);
  new_letter["stary"] = map(percent, 0, 100, oldObj["stary"], newObj["stary"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]

