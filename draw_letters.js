angleMode(DEGREES);
// const colorFront1  = "#199cff";
// const colorFront2  = "#59cc00";
// const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // // color/stroke setup
  // stroke(colorStroke);
  // strokeWeight(4);
  //
  // // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];
  //
  // // draw two circles
  // fill(colorFront1);
  // ellipse(50, 150, 75, 75);
  // fill(colorFront2);
  // ellipse(pos2x, pos2y, size2, size2);

  //Parameters for line
  let line_x1 = 50 + letterData["line_x1"];
  let line_x2 = 50 + letterData["line_x2"];
  let line_y1 = 0 + letterData["line_y1"];
  let line_y2 = 200 + letterData["line_y2"];
  //Parameters for arcs
  let arc1_x = 50 + letterData["arc1_posx"];
  let arc1_y = 90 + letterData["arc1_posy"];
  let arc2_x = 50 + letterData["arc2_posx"];
  let arc2_y = 170 + letterData["arc2_posy"];
  let arc1_start = letterData["start_a1"];
  let arc1_end = letterData["end_a1"];
  let arc2_start = letterData["start_a2"];
  let arc2_end = letterData["end_a2"];
  //Parameters for circles
  let circ1_x = 50 + letterData["circ1_offset_x"];
  let circ1_y = 90 + letterData["circ1_offset_y"];
  let circ2_x = 50 + letterData["circ2_offset_x"];
  let circ2_y = 160 + letterData["circ2_offset_y"];
  //Constants
  let arc_w = 80;
  let arc_h = 80;
  let circ_w = 20;
  let circ_h = 20;


  //Color/Stroke setup
  stroke(0);
  strokeWeight(3)
  noFill();
  //Draw moon glyph
  line(line_x1, line_y1,line_x2,line_y2);
  arc(arc1_x, arc1_y, arc_w, arc_h, radians(arc1_start), radians(arc1_end));
  arc(arc2_x, arc2_y, arc_w, arc_h, radians(arc2_start), radians(arc2_end));
  //Draw 2 filled circles
  fill(0);
  ellipse(circ1_x, circ1_y, circ_w, circ_h);
  ellipse(circ2_x, circ2_y, circ_w, circ_h);
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
