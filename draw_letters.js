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
  noStroke();
  fill(236,147,148);
//determine parameters
let lx1 = letterData["lx1"];
let ly1 = letterData["ly1"];
let lx2 = letterData["lx2"];
let ly2 = letterData["ly2"];
let lx3 = letterData["lx3"];
let ly3 = letterData["ly3"];
let lx4 = letterData["lx4"];
let ly4 = letterData["ly4"];
let lx5 = letterData["lx5"];
let ly5 = letterData["lx5"];
let lx6 = letterData["lx6"];
let ly6 = letterData["ly6"];
let lx7 = letterData["lx7"];
let ly7 = letterData["ly7"];
let lx8 = letterData["lx8"];
let ly8 = letterData["ly8"];
let lx9 = letterData["lx9"];
let ly9 = letterData["ly9"];
let lx10 = letterData["lx10"];
let ly10 = letterData["ly10"];
let lx11 = letterData["lx11"];
let ly11 = letterData["ly11"];
let lx12 = letterData["lx12"];
let ly12 = letterData["ly12"];
let lx13 = letterData["lx13"];
let ly13 = letterData["ly13"];
let size1 = letterData["size1"];


//13 ellipses
ellipse(letterData["lx1"],letterData["ly1"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx2"],letterData["ly2"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx3"],letterData["ly3"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx4"],letterData["ly4"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx5"],letterData["ly5"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx6"],letterData["ly6"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx7"],letterData["ly7"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx8"],letterData["ly8"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx9"],letterData["ly9"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx10"],letterData["ly10"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx11"],letterData["ly11"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx12"],letterData["ly12"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx13"],letterData["ly13"],letterData["size1"],letterData["size1"])





}
// exhibition words
var swapWords = [
  "MDDN242 ",
  "12345678",
  "09876543"
]


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //lx
  new_letter["size1"]    = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
    new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
      new_letter["size3"]    = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["lx1"] = map(percent, 0, 100, oldObj["lx1"], newObj["lx1"]);
    new_letter["lx2"] = map(percent, 0, 100, oldObj["lx2"], newObj["lx2"]);
      new_letter["lx3"] = map(percent, 0, 100, oldObj["lx3"], newObj["lx3"]);
        new_letter["lx4"] = map(percent, 0, 100, oldObj["lx4"], newObj["lx4"]);
        new_letter["lx5"] = map(percent, 0, 100, oldObj["lx5"], newObj["lx5"]);
          new_letter["lx6"] = map(percent, 0, 100, oldObj["lx6"], newObj["lx6"]);
            new_letter["lx7"] = map(percent, 0, 100, oldObj["lx7"], newObj["lx7"]);
              new_letter["lx8"] = map(percent, 0, 100, oldObj["lx8"], newObj["lx8"]);
              new_letter["lx9"] = map(percent, 0, 100, oldObj["lx9"], newObj["lx9"]);
                new_letter["lx10"] = map(percent, 0, 100, oldObj["lx10"], newObj["lx10"]);
                new_letter["lx11"] = map(percent, 0, 100, oldObj["lx11"], newObj["lx11"]);
                new_letter["lx12"] = map(percent, 0, 100, oldObj["lx12"], newObj["lx12"]);
                new_letter["lx13"] = map(percent, 0, 100, oldObj["lx13"], newObj["lx13"]);
//ly
  new_letter["ly1"] = map(percent, 0, 100, oldObj["ly1"], newObj["ly1"]);
    new_letter["ly2"] = map(percent, 0, 100, oldObj["ly2"], newObj["ly2"]);
      new_letter["ly3"] = map(percent, 0, 100, oldObj["ly3"], newObj["ly3"]);
        new_letter["ly4"] = map(percent, 0, 100, oldObj["ly4"], newObj["ly4"]);
        new_letter["ly5"] = map(percent, 0, 100, oldObj["ly5"], newObj["ly5"]);
          new_letter["ly6"] = map(percent, 0, 100, oldObj["ly6"], newObj["ly6"]);
          new_letter["ly7"] = map(percent, 0, 100, oldObj["ly7"], newObj["ly7"]);
            new_letter["ly8"] = map(percent, 0, 100, oldObj["ly8"], newObj["ly8"]);
            new_letter["ly9"] = map(percent, 0, 100, oldObj["ly9"], newObj["ly9"]);
              new_letter["ly10"] = map(percent, 0, 100, oldObj["ly10"], newObj["ly10"]);
              new_letter["ly11"] = map(percent, 0, 100, oldObj["ly11"], newObj["ly11"]);
              new_letter["ly12"] = map(percent, 0, 100, oldObj["ly12"], newObj["ly12"]);
              new_letter["ly13"] = map(percent, 0, 100, oldObj["ly13"], newObj["ly13"]);
  return new_letter;
}
