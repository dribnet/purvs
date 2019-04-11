const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#d1d1d1";

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
  strokeWeight(8);
  rectMode(CENTER);

  // determine parameters dynamic elements
  const posx = 50;
  const posy = 100;
  let pos2y = letterData["rect_posy"];
  let pos2x = letterData["rect_posx"];
  let rect_xs = letterData["rect_xscale"];
  let rect_ys = letterData["rect_yscale"];
  let lAx1 = letterData["lineA_x1"];
  let lAy1 = letterData["lineA_y1"];
  let lAx2 = letterData["lineA_x2"];
  let lAy2 = letterData["lineA_y2"];
  let lBx1 = letterData["lineB_x1"];
  let lBy1 = letterData["lineB_y1"];
  let lBx2 = letterData["lineB_x2"];
  let lBy2 = letterData["lineB_y2"];
  let lCx1 = letterData["lineC_x1"];
  let lCy1 = letterData["lineC_y1"];
  let lCx2 = letterData["lineC_x2"];
  let lCy2 = letterData["lineC_y2"];


  // draw two circles
  const offsx = 50;
  noFill();
  rect(pos2x, pos2y, rect_xs, rect_ys);
  fill(colorFront2);
  line(lAx1+offsx, lAy1+100, lAx2+offsx, lAy2+100);
  line(lBx1+offsx, lBy1+100, lBx2+offsx, lBy2+100);
  line(lCx1+offsx, lCy1+100, lCx2+offsx, lCy2+100);
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  if (percent < 50) {
    new_letter["rect_posy"] = oldObj["rect_posy"];
    new_letter["rect_posx"] = oldObj["rect_posx"];
  } else{
    new_letter["rect_posy"] = newObj["rect_posy"];
    new_letter["rect_posx"] = newObj["rect_posx"];
  }
  if (percent < 10){
    new_letter["rect_xscale"] = oldObj["rect_xscale"];
    new_letter["rect_yscale"] = oldObj["rect_yscale"];
    new_letter["lineA_x1"] = oldObj["lineA_x1"];
    new_letter["lineA_y1"] = oldObj["lineA_y1"];
    new_letter["lineA_x2"] = oldObj["lineA_x2"];
    new_letter["lineA_y2"] = oldObj["lineA_y2"];
    new_letter["lineB_x1"] = oldObj["lineB_x1"];
    new_letter["lineB_y1"] = oldObj["lineB_y1"];
    new_letter["lineB_x2"] = oldObj["lineB_x2"];
    new_letter["lineB_y2"] = oldObj["lineB_y2"];
    new_letter["lineC_x1"] = oldObj["lineC_x1"];
    new_letter["lineC_y1"] = oldObj["lineC_y1"];
    new_letter["lineC_x2"] = oldObj["lineC_x2"];
    new_letter["lineC_y2"] = oldObj["lineC_y2"];

  } else if (percent < 90) {
  new_letter["rect_xscale"] = map(percent, 0, 100, oldObj["rect_xscale"], newObj["rect_xscale"]);
  new_letter["rect_yscale"] = map(percent, 0, 100, oldObj["rect_yscale"], newObj["rect_yscale"]);
  new_letter["lineA_x1"] = map(percent, 0, 100, oldObj["lineA_x1"], newObj["lineA_x1"]);
  new_letter["lineA_y1"] = map(percent, 0, 100, oldObj["lineA_y1"], newObj["lineA_y1"]);
  new_letter["lineA_x2"] = map(percent, 0, 100, oldObj["lineA_x2"], newObj["lineA_x2"]);
  new_letter["lineA_y2"] = map(percent, 0, 100, oldObj["lineA_y2"], newObj["lineA_y2"]);
  new_letter["lineB_x1"] = map(percent, 0, 100, oldObj["lineB_x1"], newObj["lineB_x1"]);
  new_letter["lineB_y1"] = map(percent, 0, 100, oldObj["lineB_y1"], newObj["lineB_y1"]);
  new_letter["lineB_x2"] = map(percent, 0, 100, oldObj["lineB_x2"], newObj["lineB_x2"]);
  new_letter["lineB_y2"] = map(percent, 0, 100, oldObj["lineB_y2"], newObj["lineB_y2"]);
  new_letter["lineC_x1"] = map(percent, 0, 100, oldObj["lineC_x1"], newObj["lineC_x1"]);
  new_letter["lineC_y1"] = map(percent, 0, 100, oldObj["lineC_y1"], newObj["lineC_y1"]);
  new_letter["lineC_x2"] = map(percent, 0, 100, oldObj["lineC_x2"], newObj["lineC_x2"]);
  new_letter["lineC_y2"] = map(percent, 0, 100, oldObj["lineC_y2"], newObj["lineC_y2"]);
  } else {
    new_letter["rect_xscale"] = newObj["rect_xscale"];
    new_letter["rect_yscale"] = newObj["rect_yscale"];
    new_letter["lineA_x1"] = newObj["lineA_x1"];
    new_letter["lineA_y1"] = newObj["lineA_y1"];
    new_letter["lineA_x2"] = newObj["lineA_x2"];
    new_letter["lineA_y2"] = newObj["lineA_y2"];
    new_letter["lineB_x1"] = newObj["lineB_x1"];
    new_letter["lineB_y1"] = newObj["lineB_y1"];
    new_letter["lineB_x2"] = newObj["lineB_x2"];
    new_letter["lineB_y2"] = newObj["lineB_y2"];
    new_letter["lineC_x1"] = newObj["lineC_x1"];
    new_letter["lineC_y1"] = newObj["lineC_y1"];
    new_letter["lineC_x2"] = newObj["lineC_x2"];
    new_letter["lineC_y2"] = newObj["lineC_y2"];
  }

  return new_letter;
}

var swapWords = [
  "RUNETYPE",
  "HOWSAYYE",
  "APPROVAL"
]
