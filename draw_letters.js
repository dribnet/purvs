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
  let posx = 10;
  let posy = 10;
  
  noStroke();
  // determine parameters for halftone space
  let chunk = [];
  for (let i = 1; i <= 20; i++){
    chunk[i] = letterData["chunk"+i];
  }

  // draw circles
  for (let i = 1; i <= 250; i++){
    let x = (i%10)*10+posx;
    let y = 8*floor((i-1)/10)+posy;

    let dim = 0;
    let jdim = 0;
    let jX;
    let jY;
    let jVal;
    for (let j = 1; j <= 20; j++){
      jX = ((j-1)%4)*30+posx;
      jY = (floor((j-1)/4))*40+posy;
      jVal = chunk[j];
      // ellipse(jX,jY,10,10);
      jdim = dist(x,y,jX,jY);
      if (jdim>20)jdim=80;
      jdim=(80-jdim)/40*jVal;
      if  (jdim > dim) dim = jdim;
    }
    let diametre = dim*5;
    if (diametre > 10) diametre = 10;
    ellipse(x,y,diametre,diametre);
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
