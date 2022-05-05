/* these are optional special variables which will change the system */
var systemBackgroundColor = "red";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor      = "#101010";
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(strokeColor);
  strokeWeight(4);
  let posx = 30;
  let posy = 200;
  
  noStroke();
  // determine parameters for halftone space
  let chunk = [];
  for (let i = 1; i <= 20; i++){
    chunk[i] = letterData["chunk"+i];
  }

  // draw circles
  for (let i = 1; i <= 250; i++){
    let x = (i%10)*10;
    let y = 8*floor((i-1)/10);

    let dim = 0;
    let jdim = 0;
    let jX;
    let jY;
    let jVal;
    for (let j = 1; j <= 20; j++){
      jX = ((j-1)%4)*30;
      jY = (floor((j-1)/4))*40;
      jVal = chunk[j];
      // ellipse(jX,jY,10,10);
      jdim = dist(x,y,jX,jY)*jVal;
      if  (jdim > dim) dim = jdim;
    }

    let diametre = 2/map(dim,0,100,0,5,true);
    if (diametre > 5) diametre = 5;
    ellipse(x,y,diametre,diametre);
  }

  // test circles \(.‸.)/
  for (let j = 1; j <= 20; j++){
    jX = ((j-1)%4)*30;
    jY = (floor((j-1)/4))*40;
    jVal = chunk[j]*30;
    ellipse(jX,jY,jVal,jVal);
  }

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  for (let i = 1; i <= 20; i++){
    new_letter["chunk"+i]    = map(percent, 0, 100, oldObj["chunk"+i], newObj["chunk"+i]);
  }
  return new_letter;
}

var swapWords = [
  "FLUID-TY",
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
