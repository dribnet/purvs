const colorFront1  = "#FFD500";
const colorFront2  = "#b266ff";
const colorStroke  = "#3333ff";


function drawLetter(letterData) {
  angleMode(DEGREES);

//yellow arcs/petals
  let arcR_x = 80 + letterData["arcR_x_offset"];
  let arcR_y = 70 + letterData["arcR_y_offset"];
  let arcL_x = 20 + letterData["arcL_x_offset"];
  let arcL_y = 70 + letterData["arcL_y_offset"];
  let arcU_x = 50 + letterData["arcU_x_offset"];
  let arcU_y = 40 + letterData["arcU_y_offset"];
  let arcD_x = 50 + letterData["arcD_x_offset"];
  let arcD_y = 100 + letterData["arcD_y_offset"];

// degrees
  let arcR_start = letterData["arcR_start"];
  let arcL_start = letterData["arcL_start"];
  let arcU_start = letterData["arcU_start"];
  let arcD_start = letterData["arcD_start"];

// brown/red dot_middle of flower
  let circ_X = 50 + letterData["circ_x_offset"];
  let circ_Y = 70 + letterData["circ_y_offset"];

  let lineStart_x = 50 + letterData["lineStart_x_offset"];
  let lineStart_y = 70 + letterData["lineStart_y_offset"];
  let lineEnd_x = 50 + letterData["lineEnd_x_offset"];
  let lineEnd_y = 150 + letterData["lineEnd_y_offset"];

  //Constants
  let arc_width = 80;
  let arc_height = 80;

  stroke(colorFront1); //petals
  noFill();
  strokeWeight(4);
  arc(arcR_x, arcR_y, arc_width, arc_height, arcR_start, arcR_start + 180); // right
  arc(arcL_x, arcL_y, arc_width, arc_height, arcL_start, arcL_start + 180); // left
  arc(arcU_x, arcU_y, arc_width, arc_height, arcU_start, arcU_start + 180); // up
  arc(arcD_x, arcD_y, arc_width, arc_height, arcD_start, arcD_start + 180); // down

  stroke(102,93,30); //stalk
  strokeWeight(6); //stalk
  fill(102,93,30); //stalk
  line(lineStart_x, lineStart_y, lineEnd_x, lineEnd_y); //stalk

  stroke(196,98,16); //pistil
  fill(196,98,16); //pistil
  ellipse(circ_X, circ_Y, 20, 20); //pistil





}

// function petal(x,y){
//
// }



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcR_x_offset"]    = map(percent, 0, 100, oldObj["arcR_x_offset"], newObj["arcR_x_offset"]);
  new_letter["arcR_y_offset"] = map(percent, 0, 100, oldObj["arcR_y_offset"], newObj["arcR_y_offset"]);
  new_letter["arcL_x_offset"] = map(percent, 0, 100, oldObj["arcL_x_offset"], newObj["arcL_x_offset"]);
  new_letter["arcL_y_offset"] = map(percent, 0, 100, oldObj["arcL_y_offset"], newObj["arcL_y_offset"]);
  new_letter["arcU_x_offset"] = map(percent, 0, 100, oldObj["arcU_x_offset"], newObj["arcU_x_offset"]);
  new_letter["arcU_y_offset"] = map(percent, 0, 100, oldObj["arcU_y_offset"], newObj["arcU_y_offset"]);
  new_letter["arcD_x_offset"] = map(percent, 0, 100, oldObj["arcD_x_offset"], newObj["arcD_x_offset"]);
  new_letter["arcD_y_offset"] = map(percent, 0, 100, oldObj["arcD_y_offset"], newObj["arcD_y_offset"]);
  new_letter["circ_x_offset"] = map(percent, 0, 100, oldObj["circ_x_offset"], newObj["circ_x_offset"]);
  new_letter["circ_y_offset"] = map(percent, 0, 100, oldObj["circ_y_offset"], newObj["circ_y_offset"]);
  new_letter["lineStart_x_offset"] = map(percent, 0, 100, oldObj["lineStart_x_offset"], newObj["lineStart_x_offset"]);
  new_letter["lineStart_y_offset"] = map(percent, 0, 100, oldObj["lineStart_y_offset"], newObj["lineStart_y_offset"]);
  new_letter["lineEnd_x_offset"] = map(percent, 0, 100, oldObj["lineEnd_x_offset"], newObj["lineEnd_x_offset"]);
  new_letter["lineEnd_y_offset"] = map(percent, 0, 100, oldObj["lineEnd_y_offset"], newObj["lineEnd_y_offset"]);
  new_letter["arcR_start"] = map(percent, 0, 100, oldObj["arcR_start"], newObj["arcR_start"]);
  new_letter["arcL_start"] = map(percent, 0, 100, oldObj["arcL_start"], newObj["arcL_start"]);
  new_letter["arcU_start"] = map(percent, 0, 100, oldObj["arcU_start"], newObj["arcU_start"]);
  new_letter["arcD_start"] = map(percent, 0, 100, oldObj["arcD_start"], newObj["arcD_start"]);

  return new_letter;
}

var swapWords = [
  "FLOWER??",
  "PETALS??",
  "YELLOW??",
  "?VANIZA?",
  "DESIGN"


]
