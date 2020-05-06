const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

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
  strokeWeight(4);

   let i = letterData["shape1type"];
   let c = 0;
   let col1 = color(79, 214, 93,150) ;
   let col2 = color(240, 242, 92,150);
   let col3 = color(250, 113, 67,150);
   let values = [letterData["shape1type"], letterData["shape1pos1x"], letterData["shape1pos1y"], letterData["shape1pos2x"],letterData["shape1pos2y"],letterData["shape2type"], letterData["shape2pos1x"], letterData["shape2pos1y"],letterData["shape2pos2x"], letterData["shape2pos2y"],letterData["shape3type"], letterData["shape3pos1x"],letterData["shape3pos1y"],letterData["shape3pos2x"], letterData["shape3pos2y"]]
   while (i.valueOf() !== "null") {
      let type = values[c];
      let pos1 = createVector(values[c+1], values[c+2]);
      let pos2 = createVector(values[c+3], values[c+4]);
      let curCol;
      if (c === 0) { curCol = col1; }
      else if (c === 5) { curCol = col2; }
      else { curCol = col3; }

      if (type.valueOf() === "tri") {
        let width = (pos1.x - pos2.x) * 2;
        fill(curCol);
        triangle(pos1.x, 50 + pos1.y, pos2.x, 50 + pos2.y, width + pos2.x, 50 + pos2.y);

      }
      else if (type.valueOf() === "circ") {
        ellipseMode(CORNERS);
        fill(curCol);
        ellipse(pos1.x, 50 + pos1.y, pos2.x, 50 + pos2.y);
      }
      else if (type.valueOf() == "rect") {
        rectMode(CORNERS);
        fill(curCol);
        rect(pos1.x, 50 + pos1.y, pos2.x, 50 + pos2.y);
      }

      if (c === 10) { break;}
      c += 5;
      i = values[c];
   }
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