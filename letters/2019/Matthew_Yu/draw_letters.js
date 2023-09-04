const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";
const colorFill    = "#c93d1b";
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
  // determine parameters for second circle
  let size =  letterData["size"];
  let posx =   letterData["posx"];
  let posy =   letterData["posy"];
  let posx2 =  letterData["posx2"];
  let posy2 =  letterData["posy2"];
  let t1 =     letterData["t1"];
  let t2 =     letterData["t2"];
  let t3 =     letterData["t3"];
  let t4 =     letterData["t4"];
  let t5 =     letterData["t5"];
  let t6 =     letterData["t6"];
  let r1 =     letterData["r1"];
  let r2 =     letterData["r2"];
  let r3 =     letterData["r3"];
  let r4 =     letterData["r4"];
  let r5 =     letterData["r5"];
  let r6 =     letterData["r6"];

  // draw two circles, one is black, another one is the same color to the background
  // they are joint for the font
  fill(0);
  ellipse(posx, posy, size, size);
  fill(colorFill);
  ellipse(posx2, posy2, size, size);
  
  //two triangles are the muscle of the font
  noStroke(20);
  fill(0);
  triangle(t1, t2, t3, t4, t5, t6);
  triangle(r1, r2, r3, r4, r5, r6);
 

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["posx"] = map(percent, 0, 100, oldObj["posx"], newObj["posx"]);
  new_letter["posy"] = map(percent, 0, 100, oldObj["posy"], newObj["posy"]);
  new_letter["t1"]   = map(percent, 0, 100, oldObj["t1"], newObj["t1"]);
  new_letter["t2"]   = map(percent, 0, 100, oldObj["t2"], newObj["t2"]);
  new_letter["t3"]   = map(percent, 0, 100, oldObj["t3"], newObj["t3"]);
  new_letter["t4"]   = map(percent, 0, 100, oldObj["t4"], newObj["t4"]);
  new_letter["t5"]   = map(percent, 0, 100, oldObj["t5"], newObj["t5"]);
  new_letter["t6"]   = map(percent, 0, 100, oldObj["t6"], newObj["t6"]);
  new_letter["r1"]   = map(percent, 0, 100, oldObj["r1"], newObj["r1"]);
  new_letter["r2"]   = map(percent, 0, 100, oldObj["r2"], newObj["r2"]);
  new_letter["r3"]   = map(percent, 0, 100, oldObj["r3"], newObj["r3"]);
  new_letter["r4"]   = map(percent, 0, 100, oldObj["r4"], newObj["r4"]);
  new_letter["r5"]   = map(percent, 0, 100, oldObj["r5"], newObj["r5"]);
  new_letter["r6"]   = map(percent, 0, 100, oldObj["r6"], newObj["r6"]);

  // make the black ball chasing the red ball
  let new_percent = 0;
  let amount_of_anticipation = 50;

  if(percent < amount_of_anticipation){
    new_percent = map(percent, 0, amount_of_anticipation, 0, 100);
  } 
  else {
    new_percent = (percent, amount_of_anticipation, 100, -10, 100);
  }

  new_letter["posx2"] = map(new_percent, 0, 100, oldObj["posx2"], newObj["posx2"]);
  new_letter["posy2"] = map(new_percent, 0, 100, oldObj["posy2"], newObj["posy2"]);
  return new_letter;
}

//name, meaning, name of a science fiction
var swapWords = [
  "INVASION",
  "ALIENCIV",
  "THE3BODY"
]