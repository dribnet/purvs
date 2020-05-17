const colorFront1  = "#9FD2F9";
const colorFront2  = "#4BAFFB";
const colorStroke  = "#233f11";


function drawLetter(letterData) {
  let size2 = letterData["size"];

  let linex = 5 + letterData["sectionx"];
  let liney = 60 + letterData["sectiony"];
  let linex1 = 5 + letterData["sectionx1"];
  let liney1 = 60 + letterData["sectiony1"];
  let line2x = 5 + letterData["section2x"];
  let line2y = 60 + letterData["section2y"];
  let line2x1 = 5 + letterData["section2x1"];
  let line2y1 = 60 + letterData["section2y1"];

  let triax1 = 5 + letterData["sectionx2"];
  let triay1 = 60 + letterData["sectiony2"];
  let triax2 = 5 + letterData["sectionx3"];
  let triay2 = 60 + letterData["sectiony3"];
  let triax3 = 5 + letterData["sectionx4"];
  let triay3 = 60 + letterData["sectiony4"];

  let tria2x1 = 5 + letterData["sectionx5"];
  let tria2y1 = 60 + letterData["sectiony5"];
  let tria2x2 = 5 + letterData["sectionx6"];
  let tria2y2 = 60 + letterData["sectiony6"];
  let tria2x3 = 5 + letterData["sectionx7"];
  let tria2y3 = 60 + letterData["sectiony7"];
  // draw two circles
  fill(colorFront1);
  line(linex, liney, linex1, liney1);
  line(line2x, line2y, line2x1, line2y1);
  triangle(triax1, triay1, triax2, triay2, triax3, triay3,);
  fill(colorFront2);
  triangle(tria2x1, tria2y1, tria2x2, tria2y2, tria2x3, tria2y3,);

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
