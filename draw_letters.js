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
  let w = 100;
  let h = 200;

  let curY=0;
  stroke(0);
  if(!letterData.structure)return;
  fill(233,88,20);

  for (let r = 0; r < letterData.structure.length; r++) {
    let curX=0;
    for (let c = 0; c < letterData.structure[r].length; c++) {
        if(letterData.structure[r][c] === 1)
          ellipse(curX,curY,20,20);
        curX+=25;
     }
     curY+=25;


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