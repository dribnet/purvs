
function drawLetter(letterData) {
  angleMode(DEGREES); //Set to degrees

  //Parameters for line
  let line_x1 = 50 + letterData["line_x1"]; //Starting X position
  let line_x2 = 50 + letterData["line_x2"]; //End X position
  let line_y1 = 0 + letterData["line_y1"]; //Starting Y position
  let line_y2 = 200 + letterData["line_y2"]; //End Y position
  //Parameters for arcs
  let arc1_x = 50 + letterData["arc1_posx"]; //X position for first arc
  let arc1_y = 90 + letterData["arc1_posy"]; //Y position for first arc
  let arc2_x = 50 + letterData["arc2_posx"]; //X position for second arc
  let arc2_y = 170 + letterData["arc2_posy"]; //Y position for second arc
  let arc1_start = letterData["start_a1"]; //Start angle for first arc in degrees
  let arc2_start = letterData["start_a2"]; //Start angle for second arc in degrees
  //Parameters for circles
  let circ1_x = 50 + letterData["circ1_offset_x"]; //X position (offset) for first circle
  let circ1_y = 90 + letterData["circ1_offset_y"]; //Y position (offset) for first circle
  let circ2_x = 50 + letterData["circ2_offset_x"]; //X position (offset) for second circle
  let circ2_y = 160 + letterData["circ2_offset_y"]; //Y position (offset) for second circle
  //Constants
  let arc_w = 80; //Constant width for arc
  let arc_h = 80; //Constant height for arc
  let circ_w = 20; //Constant width for circles
  let circ_h = 20; //Constant height for circles

  //Color/Stroke setup
  stroke(93,49,0);
  strokeWeight(3.5);
  noFill();
  //Draw moon glyph/default
  line(line_x1, line_y1,line_x2,line_y2);
  //Arc is always half circle so end angle position is set to (arc start angle position + 180) to reduce number of parameters
  arc(arc1_x, arc1_y, arc_w, arc_h, arc1_start, arc1_start+180);
  arc(arc2_x, arc2_y, arc_w, arc_h, arc2_start, arc2_start+180);

  //Last value controls transparency of colour so it is around 30%
  stroke(142, 91,2,115);
  //Strokeweight increase to create shadows emphasising the carving style/design
  strokeWeight(9);
  //Draw moon glyph/default which is offset by 3.5 so it looks more like a carving e.g. hieroglyphs on caves
  line(line_x1 -3.5, line_y1-3.5,line_x2-3.5,line_y2-3.5);
  arc(arc1_x-3.5, arc1_y-3.5, arc_w-3.5, arc_h-3.5, arc1_start, arc1_start+180);
  arc(arc2_x-3.5, arc2_y-3.5, arc_w-3.5, arc_h-3.5, arc2_start, arc2_start+180);
  //Draw 2 filled circles
  fill(93, 49,0);
  stroke(93,49,0); //Reset stroke colour
  strokeWeight(3); //Reset stroke weight
  ellipse(circ1_x, circ1_y, circ_w, circ_h);
  ellipse(circ2_x, circ2_y, circ_w, circ_h);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //lines move first- only delayed by 20%
  if(percent < 20){
    new_letter["line_x1"] = oldObj["line_x1"];
    new_letter["line_y1"] = oldObj["line_y1"];
    new_letter["line_x2"] = oldObj["line_x2"];
    new_letter["line_y2"] = oldObj["line_y2"];
  }else{
    new_letter["line_x1"] = map(percent, 20, 100, oldObj["line_x1"], newObj["line_x1"]);
    new_letter["line_y1"] = map(percent, 20, 100, oldObj["line_y1"], newObj["line_y1"]);
    new_letter["line_x2"] = map(percent, 20, 100, oldObj["line_x2"], newObj["line_x2"]);
    new_letter["line_y2"] = map(percent, 20, 100, oldObj["line_y2"], newObj["line_y2"]);
  }
  //arcs move second-delayed by 60%
  if(percent <60){
    new_letter["arc1_posx"] = oldObj["arc1_posx"];
    new_letter["arc1_posy"] = oldObj["arc1_posy"];
    new_letter["arc2_posx"] = oldObj["arc2_posx"];
    new_letter["arc2_posy"] = oldObj["arc2_posy"];
    new_letter["start_a1"] = oldObj["start_a1"];
    new_letter["start_a2"] = oldObj["start_a2"];
  }else{
    new_letter["arc1_posx"] = map(percent, 60, 100, oldObj["arc1_posx"], newObj["arc1_posx"]);
    new_letter["arc1_posy"] = map(percent, 60, 100, oldObj["arc1_posy"], newObj["arc1_posy"]);
    new_letter["arc2_posx"] = map(percent, 60, 100, oldObj["arc2_posx"], newObj["arc2_posx"]);
    new_letter["arc2_posy"] = map(percent, 60, 100, oldObj["arc2_posy"], newObj["arc2_posy"]);
    new_letter["start_a1"] = map(percent, 60, 100, oldObj["start_a1"], newObj["start_a1"]);
    new_letter["start_a2"] = map(percent, 60, 100, oldObj["start_a2"], newObj["start_a2"]);
  }

  //moves last- delayed by 90%
  if(percent < 90){
    new_letter["circ1_offset_x"] = oldObj["circ1_offset_x"];
    new_letter["circ1_offset_y"] = oldObj["circ1_offset_y"];
    new_letter["circ2_offset_x"] = oldObj["circ2_offset_x"];
    new_letter["circ2_offset_y"] = oldObj["circ2_offset_y"];
  }else{
    new_letter["circ1_offset_x"] = map(percent, 90, 100, oldObj["circ1_offset_x"], newObj["circ1_offset_x"]);
    new_letter["circ1_offset_y"] = map(percent, 90, 100, oldObj["circ1_offset_y"], newObj["circ1_offset_y"]);
    new_letter["circ2_offset_x"] = map(percent, 90, 100, oldObj["circ2_offset_x"], newObj["circ2_offset_x"]);
    new_letter["circ2_offset_y"] = map(percent, 90, 100, oldObj["circ2_offset_y"], newObj["circ2_offset_y"]);
  }
  return new_letter;
}

var swapWords = [
  "GLYPHICS", //Font Name
  "EGYPTIAN", //Word relating to hieroglyphics/font
  "GLYPHICA" //Alternate font name
]
