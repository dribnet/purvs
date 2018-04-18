const colorFront  = "#fee23e";
const colorShadow = "#ffd319"

let swapWords = [
  "90DEGREE",
  "ELDORADO",
  "HORIZONS",
  "TIMBUKTU",
  "VERTICAL",
  "GOLDRUSH",
  "HERCULES",
  "WILLIAMS"
]


function drawLetter(letterData) {

  // colour/stroke setup.

  let posx=0;
  let posy=0;
  fill(colorFront);
  noStroke ();

  // determine parameters for vertical rectangles.
  
  let sizeV1 = letterData["lengthV1"];
  let sizeV2 = letterData["lengthV2"];
  let posV1x = posx + letterData["offsetxV1"];
  let posV2x = posx + letterData["offsetxV2"];
  let posV1y = posy + letterData["offsetyV1"];
  let posV2y = posy + letterData["offsetyV2"];

  // determine parameters for horizontal rectangles.

  let posH1y = posy + letterData["offsetyH1"];
  let posH2y = posy + letterData["offsetyH2"];
  let posH3y = posy + letterData["offsetyH3"];

  // draw vertical rectangles.

  rectWithShadow(posV1x, posV1y, 25, sizeV1);
  rectWithShadow(posV2x, posV2y, 25, sizeV2);

  // draw horizontal rectangles.

  rect(0, posH1y, 90, 10);
  rect(0, posH2y, 90, 10);
  rect(0, posH3y, 90, 10);

}   

// function for shadow 

function rectWithShadow(x, y, width, height){
  fill(colorShadow);
  rect(x+10, y, width, height);
  fill(colorFront);
  rect(x, y, width, height);
} 

function interpolate_letter(percent, oldObj, newObj) {
  let new_obj = {};
  new_obj ["lengthV1"] = map(percent, 0, 100, oldObj["lengthV1"], newObj["lengthV1"]);
  new_obj ["lengthV2"] = map(percent, 0, 100, oldObj["lengthV2"], newObj["lengthV2"]);
  new_obj ["offsetxV1"] = map(percent, 0, 100, oldObj["offsetxV1"], newObj["offsetxV1"]);
  new_obj ["offsetxV2"] = map(percent, 0, 100, oldObj["offsetxV2"], newObj["offsetxV2"]);
  new_obj ["offsetyH1"] = map(percent, 0, 100, oldObj["offsetyH1"], newObj["offsetyH1"]);
  new_obj ["offsetyH2"] = map(percent, 0, 100, oldObj["offsetyH2"], newObj["offsetyH2"]);
  new_obj ["offsetyH3"] = map(percent, 0, 100, oldObj["offsetyH3"], newObj["offsetyH3"]);
  new_obj ["offsetyV1"] = map(percent, 0, 100, oldObj["offsetyV1"], newObj["offsetyV1"]);
  new_obj ["offsetyV2"] = map(percent, 0, 100, oldObj["offsetyV2"], newObj["offsetyV2"]);
  return new_obj;
}
