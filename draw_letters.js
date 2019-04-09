const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (200, 200)
 */
function drawLetter(letterData) {
  let w = 100;
  let h = 200;

  let curY=0;
  stroke(0);
  if(!letterData.structure)return;
  fill(219,203,187);

  for (let r = 0; r < letterData.structure.length; r++) {
    let curX=0;
    for (let c = 0; c < letterData.structure[r].length; c++) {
        if(letterData.structure[r][c] === 1)
          rect(curX,curY,7,7,2);
        curX+=7;
     }
     curY+=7;


  }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);

  if(percent < 20) {
    new_letter["offsety"] = oldObj["offsety"];
  }
  else if(percent > 50) {
    new_letter["offsety"] = newObj["offsety"];
  }
  else {
    new_letter["offsety"] = map(percent, 40, 60, oldObj["offsety"], newObj["offsety"]);
  }

  return new_letter;
}

var swapWords = [
  "CHILDREN",
  "01CUTE23",
  "67SWEET8"
]
