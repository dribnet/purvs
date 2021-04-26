/* these are optional special variables which will change the system */
const backgroundColor = "#0D0208";
var systemBackgroundColor = backgroundColor;
// var systemLineColor = backgroundColor;
// var systemBoxColor = backgroundColor;
var systemLineColor = "#FFA500";
var systemBoxColor = "#FFA500";

/* internal constants */

const fillcol = "#008F11";
//centre pos of each letter
const CENTREX = 50;
const CENTREY = 100;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawpoly(letterData, x1, y1, x2, y2) { //draw the green poly
  fill(fillcol);
  // strokeWeight(2);
  // stroke(fillcol);
  beginShape();
  //x1 and x2 are +1 or -1 to set whether the point is to the left or right of CENTREX for each half of the poly
  //y1 and y2 are +1 or -1 to set whether the point is above or below of CENTREY for each half of the poly
  //x2 and y2 are 0 if no symmetry
  vertex(CENTREX + x1 * letterData["x1"], CENTREY + y1 * letterData["y1"]);
  vertex(CENTREX + x1 * letterData["x2"], CENTREY + y1 * letterData["y2"]);
  vertex(CENTREX + x1 * letterData["x3"], CENTREY + y1 * letterData["y3"]);
  vertex(CENTREX + x1 * letterData["x4"], CENTREY + y1 * letterData["y4"]);
  vertex(CENTREX + x1 * letterData["x5"], CENTREY + y1 * letterData["y5"]);

  if (x2 != 0) { //if the poly has symmetry draw the second half of it mirrored
    vertex(CENTREX + x2 * letterData["x5"], CENTREY + y2 * letterData["y5"]);
    vertex(CENTREX + x2 * letterData["x4"], CENTREY + y2 * letterData["y4"]);
    vertex(CENTREX + x2 * letterData["x3"], CENTREY + y2 * letterData["y3"]);
    vertex(CENTREX + x2 * letterData["x2"], CENTREY + y2 * letterData["y2"]);
    vertex(CENTREX + x2 * letterData["x1"], CENTREY + y2 * letterData["y1"]);
  }
  endShape();

}


function cir(letterData, x, y) { //draw a black circle
  fill(backgroundColor);
  ellipse(CENTREX + x * letterData["ex"], CENTREY + y * letterData["ey"], letterData["ewidth"], letterData["eheight"]);
}

function drawLetter(letterData) {

  noStroke();
  // stroke("#FFA500");
  // strokeWeight(2);
  let symmode = letterData["symmode"];

  if (symmode.startsWith("symmetry_vert")) { //if vertical sym

    drawpoly(letterData, 1, 1, -1, 1); //draw green poly
    if (symmode.endsWith("offsetcir")) { //offseted sym circles
      cir(letterData, 1, -1);
      cir(letterData, -1, 1);
    } else if (symmode.endsWith("no_cir")) {

      cir(letterData, 1, 1);
    } else {
      //sym circles
      cir(letterData, 1, 1);
      cir(letterData, -1, 1);
    }
  } else if (symmode.startsWith("symmetry_hor")) { //if horizontal sym

    drawpoly(letterData, 1, -1, 1, 1);
    if (symmode.endsWith("no_cir")) {
      cir(letterData, 1, 1);
    } else if (symmode.endsWith("offsetcirvert")) {
      cir(letterData, 1, -1);
      cir(letterData, -1, 1);
    } else {
      cir(letterData, 1, -1);
      cir(letterData, 1, 1);
    }


  } else {
    // nopolysym(letterData);
    drawpoly(letterData, 1, 1, 0, 0);
    if (symmode.endsWith("cir_only")) {
      cir(letterData, 1, 1);
      cir(letterData, 1, -1);
    } else {
      cir(letterData, 1, 1);
    }
  }
  // noStroke();
  // // fill(backgroundColor);
  // // rect(0,0,200,50);
  // // rect(150,0,200,100);
  // // rect(0,0,15,200);
  // // rect(85,0,35,200);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let smallest=0;//smallest the interpolation will shrink letter to
  let swappercent=80;//percent where it swaps from shrinking old letter to growing new letter
  if (percent < swappercent) { //shrink the old letter:
    new_letter["symmode"] = oldObj["symmode"];
    new_letter["x1"] = map(percent, 0, swappercent, oldObj["x1"], smallest);
    new_letter["x2"] = map(percent, 0, swappercent, oldObj["x2"], smallest);
    new_letter["x3"] = map(percent, 0, swappercent, oldObj["x3"], smallest);
    new_letter["x4"] = map(percent, 0, swappercent, oldObj["x4"], smallest);
    new_letter["x5"] = map(percent, 0, swappercent, oldObj["x5"], smallest);
    new_letter["y1"] = map(percent, 0, swappercent, oldObj["y1"], smallest);
    new_letter["y2"] = map(percent, 0, swappercent, oldObj["y2"], smallest);
    new_letter["y3"] = map(percent, 0, swappercent, oldObj["y3"], smallest);
    new_letter["y4"] = map(percent, 0, swappercent, oldObj["y4"], smallest);
    new_letter["y5"] = map(percent, 0, swappercent, oldObj["y5"], smallest);
    new_letter["ex"] = map(percent, 0, swappercent, oldObj["ex"], smallest);
    new_letter["ey"] = map(percent, 0, swappercent, oldObj["ey"], smallest);
    new_letter["ewidth"] = map(percent, 0, swappercent, oldObj["ewidth"], smallest);
    new_letter["eheight"] = map(percent, 0, swappercent, oldObj["eheight"], smallest);
  } else { //grow the new letter
    new_letter["symmode"] = newObj["symmode"];
    new_letter["x1"] = map(percent, swappercent+1, 100, smallest, newObj["x1"]);
    new_letter["x2"] = map(percent, swappercent+1, 100, smallest, newObj["x2"]);
    new_letter["x3"] = map(percent, swappercent+1, 100, smallest, newObj["x3"]);
    new_letter["x4"] = map(percent, swappercent+1, 100, smallest, newObj["x4"]);
    new_letter["x5"] = map(percent, swappercent+1, 100, smallest, newObj["x5"]);
    new_letter["y1"] = map(percent, swappercent+1, 100, smallest, newObj["y1"]);
    new_letter["y2"] = map(percent, swappercent+1, 100, smallest, newObj["y2"]);
    new_letter["y3"] = map(percent, swappercent+1, 100, smallest, newObj["y3"]);
    new_letter["y4"] = map(percent, swappercent+1, 100, smallest, newObj["y4"]);
    new_letter["y5"] = map(percent, swappercent+1, 100, smallest, newObj["y5"]);
    new_letter["ex"] = map(percent, swappercent+1, 100, smallest, newObj["ex"]);
    new_letter["ey"] = map(percent, swappercent+1, 100, smallest, newObj["ey"]);
    new_letter["ewidth"] = map(percent, swappercent+1, 100, smallest, newObj["ewidth"]);
    new_letter["eheight"] = map(percent, swappercent+1, 100, smallest, newObj["eheight"]);
  }

  //
  // new_letter["symmode"]    =  newObj["symmode"];
  //  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  //  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  //  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  //  new_letter["x4"]    = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  //  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  //  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  //  new_letter["y2"]    = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  //  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  //  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  //  new_letter["y5"]    = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  //  new_letter["ex"] = map(percent, 0, 100, oldObj["ex"], newObj["ex"]);
  //  new_letter["ey"] = map(percent, 0, 100, oldObj["ey"], newObj["ey"]);
  //  new_letter["ewidth"]    = map(percent, 0, 100, oldObj["ewidth"], newObj["ewidth"]);
  //  new_letter["eheight"] = map(percent, 0, 100, oldObj["eheight"], newObj["eheight"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
