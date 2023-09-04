const colorFront1  = "#dbcbbb";
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
  fill(colorFront1);

  let r=0;
  let c=0;
  if(letterData.structure[r][c] === 2){
    fill(colorFront2);
  }

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
  let cur_structure = [
    [0, 0, 1, 1,1,1,1,1,1,1,1,1,0,0],
    [0, 1, 1, 1,1,1,1,1,1,1,1,1,1,0],
    [1, 1, 0, 0,1,1,0,0,1,1,0,0,1,1],
    [1, 1, 0, 0,1,1,0,0,1,1,0,0,1,1],
    [1, 1, 1, 1,0,0,1,1,1,1,1,1,1,1],
    [1, 1, 1, 1,0,0,1,1,1,1,1,1,1,1],
    [1, 1, 0, 0,1,1,0,0,1,1,0,0,1,1],
    [1, 1, 0, 0,1,1,0,0,1,1,0,0,1,1],
    [1, 1, 1, 1,1,1,1,1,0,0,1,1,1,1],
    [1, 1, 1, 1,1,1,1,1,0,0,1,1,1,1],
    [1, 1, 0, 0,1,1,0,0,1,1,0,0,1,1],
    [1, 1, 0, 0,1,1,0,0,1,1,0,0,1,1],
    [0, 1, 1, 1,1,1,1,1,1,1,1,1,1,0],
    [0, 0, 1, 1,1,1,1,1,1,1,1,1,0,0]];
  let old_structure = oldObj["structure"];
  let new_structure = newObj["structure"];

    for(let i=0; i<cur_structure.length; i++) {
      let cur_row = cur_structure[i];
      let old_row = old_structure[i];
      let new_row = new_structure[i];
      for(let j=0; j<cur_row.length; j++) {
        cur_row[j] = map(percent, 0, 100, old_row[j], new_row[j]);
      }
    }
    new_letter["structure"] = cur_structure;

  // new_letter["structure"]    = map(percent, 0, 100, oldObj["structure"], newObj["structure"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}


var swapWords = [
  "CHILDREN",
  "01CUTE23",
  "67SWEET8"
]
