angleMode(DEGREES);

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
 
function drawLetter(letterData) {
  

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
  let arc2_start = letterData["start_a2"];
  //Parameters for circles
  let circ1_x = 50 + letterData["circ1_offset_x"];
  let circ1_y = 90 + letterData["circ1_offset_y"];
  let circ2_x = 50 + letterData["circ2_offset_x"];
  let circ2_y = 160 + letterData["circ2_offset_y"];
  //Constants= width + height of circles and arcs
  let arc_w = 80;
  let arc_h = 80;
  let circ_w = 20;
  let circ_h = 20;


  //Color/Stroke setup
  stroke(255);
  strokeWeight(3)
  noFill();
  //Draw moon glyph
  line(line_x1, line_y1,line_x2,line_y2);
  arc(arc1_x, arc1_y, arc_w, arc_h, radians(arc1_start), radians(arc1_start+180));
  arc(arc2_x, arc2_y, arc_w, arc_h, radians(arc2_start), radians(arc2_start+180));
  //Draw 2 filled circles
  fill(255);
  ellipse(circ1_x, circ1_y, circ_w, circ_h);
  ellipse(circ2_x, circ2_y, circ_w, circ_h);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["line_x1"] = map(percent, 0, 100, oldObj["line_x1"], newObj["line_x1"]);
  new_letter["line_y1"] = map(percent, 0, 100, oldObj["line_y1"], newObj["line_y1"]);
  new_letter["line_x2"] = map(percent, 0, 100, oldObj["line_x2"], newObj["line_x2"]);
  new_letter["line_y2"] = map(percent, 0, 100, oldObj["line_y2"], newObj["line_y2"]);
  new_letter["arc1_posx"] = map(percent, 0, 100, oldObj["arc1_posx"], newObj["arc1_posx"]);
  new_letter["arc1_posy"] = map(percent, 0, 100, oldObj["arc1_posy"], newObj["arc1_posy"]);
  new_letter["arc2_posx"] = map(percent, 0, 100, oldObj["arc2_posx"], newObj["arc2_posx"]);
  new_letter["arc2_posy"] = map(percent, 0, 100, oldObj["arc2_posy"], newObj["arc2_posy"]);
  new_letter["start_a1"] = map(percent, 0, 100, oldObj["start_a1"], newObj["start_a1"]);
  new_letter["start_a2"] = map(percent, 0, 100, oldObj["start_a2"], newObj["start_a2"]);
  new_letter["circ1_offset_x"] = map(percent, 0, 100, oldObj["circ1_offset_x"], newObj["circ1_offset_x"]);
  new_letter["circ1_offset_y"] = map(percent, 0, 100, oldObj["circ1_offset_y"], newObj["circ1_offset_y"]);
  new_letter["circ2_offset_x"] = map(percent, 0, 100, oldObj["circ2_offset_x"], newObj["circ2_offset_x"]);
  new_letter["circ2_offset_y"] = map(percent, 0, 100, oldObj["circ2_offset_y"], newObj["circ2_offset_y"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
