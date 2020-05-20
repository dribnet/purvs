
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
  stroke("#4E5634");
  strokeWeight(4);
  line(linex, liney, linex1, liney1);
  line(line2x, line2y, line2x1, line2y1);
  fill( "#8B8B8B");
  triangle(triax1, triay1, triax2, triay2, triax3, triay3,);
  fill("#CAA088");
  triangle(tria2x1, tria2y1, tria2x2, tria2y2, tria2x3, tria2y3,);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["sectionx"] = map(percent, 0, 100, oldObj["sectionx"], newObj["sectionx"]);
  new_letter["sectiony"] = map(percent, 0, 100, oldObj["sectiony"], newObj["sectiony"]);
  new_letter["sectionx1"] = map(percent, 0, 100, oldObj["sectionx1"], newObj["sectionx1"]);
  new_letter["sectiony1"] = map(percent, 0, 100, oldObj["sectiony1"], newObj["sectiony1"]);
  new_letter["section2x"] = map(percent, 0, 100, oldObj["section2x"], newObj["section2x"]);
  new_letter["section2y"] = map(percent, 0, 100, oldObj["section2y"], newObj["section2y"]);
  new_letter["section2x1"] = map(percent, 0, 100, oldObj["section2x1"], newObj["section2x1"]);
  new_letter["section2y1"] = map(percent, 0, 100, oldObj["section2y1"], newObj["section2y1"]);
  new_letter["sectionx2"] = map(percent, 0, 100, oldObj["sectionx2"], newObj["sectionx2"]);
  new_letter["sectiony2"] = map(percent, 0, 100, oldObj["sectiony2"], newObj["sectiony2"]);
  new_letter["sectionx3"] = map(percent, 0, 100, oldObj["sectionx3"], newObj["sectionx3"]);
  new_letter["sectiony3"] = map(percent, 0, 100, oldObj["sectiony3"], newObj["sectiony3"]);
  new_letter["sectionx4"] = map(percent, 0, 100, oldObj["sectionx4"], newObj["sectionx4"]);
  new_letter["sectiony4"] = map(percent, 0, 100, oldObj["sectiony4"], newObj["sectiony4"]);
  new_letter["sectionx5"] = map(percent, 0, 100, oldObj["sectionx5"], newObj["sectionx5"]);
  new_letter["sectiony5"] = map(percent, 0, 100, oldObj["sectiony5"], newObj["sectiony5"]);
  new_letter["sectionx6"] = map(percent, 0, 100, oldObj["sectionx6"], newObj["sectionx6"]);
  new_letter["sectiony6"] = map(percent, 0, 100, oldObj["sectiony6"], newObj["sectiony6"]);
  new_letter["sectionx7"] = map(percent, 0, 100, oldObj["sectionx7"], newObj["sectionx7"]);
  new_letter["sectiony7"] = map(percent, 0, 100, oldObj["sectiony7"], newObj["sectiony7"]);

  return new_letter;
}

var swapWords = [
  "TRIANGLE",
  "XINZEHU1",
  "EVIDENCE",
  "PROBABLY",
  "FOLLOWED",
  "JUNGLE23",
  "THINKING",
  "MOON4567",
  "QUESTION",
  "ORGANIZE",
  "89068141",
]
