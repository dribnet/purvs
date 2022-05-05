/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFA46B";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor      = "#E861C5";

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
  let posx = 4;
  let posy = 10;
  
  noStroke();
  // call chunk parameters in one array
  let chunk = [];
  for (let i = 1; i <= 20; i++){
    chunk[i] = letterData["chunk"+i];
  }

  /*  draw particles
      diam  = diametre of particles
      cDiam = diametre based of current chunk being measured
      x,y   = x and y coords of particle
      cX,cY = x and y coords of current chunk being measured
  */
  for (let i = 1; i <= 250; i++){
    let x = (i%10)*10+posx;
    let y = 8*floor((i-1)/10)+posy;

    // measure shortest distance to each chunk
    let diam = 0;
    let cDiam = 0;
    let cX;
    let cY;
    for (let j = 1; j <= 20; j++){
      cX = ((j-1)%4)*30+posx;
      cY = (floor((j-1)/4))*40+posy;
      cDiam = dist(x,y,cX,cY);
      if (cDiam>20)cDiam=80;
      cDiam=(80-cDiam)/40*chunk[j];
      if  (cDiam > diam) diam = cDiam;
    }
    diam = diam*4;
    if (diam > 10) diam = 10;
    ellipse(x,y,diam,diam);
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
  "FONT.EXE",
  "FLUIDITY"
]
