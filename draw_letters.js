
const PaperColor = "#07c9ff";
const BgColour = "#DCDCDC";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */




function drawLetter(letterData) {


  // let posx6 = posx5;
  // if("posx6" in letterData) {
  //   posx6 =  letterData["posx6"];
  // }
  // let posx7 = posx6;
  // if("posx7" in letterData) {
  //   posx7 =  letterData["posx7"];
  // }


  // determine parameters for second circle
  let posx1 =  letterData["posx1"];
  let posx2 =  letterData["posx2"];
  let posx3 =  letterData["posx3"];
  let posx4 =  letterData["posx4"];
  let posx5 =  letterData["posx5"];
  let posx6 =  letterData["posx6"];
  let posx7 =  letterData["posx7"];

  let posy1 =  letterData["posy1"];
  let posy2 =  letterData["posy2"];
  let posy3 =  letterData["posy3"];
  let posy4 =  letterData["posy4"];
  let posy5 =  letterData["posy5"];
  let posy6 =  letterData["posy6"];
  let posy7 =  letterData["posy7"];

  let triposx1 = letterData["triposx1"];
  let triposx2 = letterData["triposx2"];
  let triposx3 = letterData["triposx3"];

  let triposy1 = letterData["triposy1"];
  let triposy2 = letterData["triposy2"];
  let triposy3 = letterData["triposy3"];


push();
// translate(49, 98);

fill(255);
noStroke();

if("triposx1" in letterData) {
  triangle(triposx1,triposy1,triposx2,triposy2,triposx3,triposy3);
}


fill(PaperColor);
beginShape();
vertex(posx1, posy1);
vertex(posx2, posy2);
vertex(posx3, posy3);
vertex(posx4, posy4);
vertex(posx5, posy5);
if("posy6" in letterData) {
  vertex(posx6, posy6);
}
if("posy7" in letterData) {
  vertex(posx7, posy7);
}
endShape(CLOSE);


pop();



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["posx1"]    = map(percent, 0, 100, oldObj["posx1"], newObj["posx1"]);
  new_letter["posx2"]    = map(percent, 0, 100, oldObj["posx2"], newObj["posx2"]);
  new_letter["posx3"]    = map(percent, 0, 100, oldObj["posx3"], newObj["posx3"]);
  new_letter["posx4"]    = map(percent, 0, 100, oldObj["posx4"], newObj["posx4"]);
  new_letter["posx5"]    = map(percent, 0, 100, oldObj["posx5"], newObj["posx5"]);

  new_letter["posy1"] = map(percent, 0, 100, oldObj["posy1"], newObj["posy1"]);
  new_letter["posy2"] = map(percent, 0, 100, oldObj["posy2"], newObj["posy2"]);
  new_letter["posy3"] = map(percent, 0, 100, oldObj["posy3"], newObj["posy3"]);
  new_letter["posy4"] = map(percent, 0, 100, oldObj["posy4"], newObj["posy4"]);
  new_letter["posy5"] = map(percent, 0, 100, oldObj["posy5"], newObj["posy5"]);

  if("posx6" in oldObj && "posx6" in newObj) {
    new_letter["posx6"] = map(percent, 0, 100, oldObj["posx6"], newObj["posx6"]);
    new_letter["posy6"] = map(percent, 0, 100, oldObj["posy6"], newObj["posy6"]);
  }

  if("posx7" in oldObj && "posx7" in newObj) {
    new_letter["posx7"]    = map(percent, 0, 100, oldObj["posx7"], newObj["posx7"]);
  }
  if("posy7" in oldObj && "posy7" in newObj) {
    new_letter["posy7"] = map(percent, 0, 100, oldObj["posy7"], newObj["posy7"]);
  }

  if("triposx1" in oldObj && "triposx1" in newObj) {
    new_letter["triposx1"] = map(percent, 0, 100, oldObj["triposx1"], newObj["triposx1"]);
    new_letter["triposx2"] = map(percent, 0, 100, oldObj["triposx2"], newObj["triposx2"]);
    new_letter["triposx3"] = map(percent, 0, 100, oldObj["triposx3"], newObj["triposx3"]);

    new_letter["triposy1"] = map(percent, 0, 100, oldObj["triposy1"], newObj["triposy1"]);
    new_letter["triposy2"] = map(percent, 0, 100, oldObj["triposy2"], newObj["triposy2"]);
    new_letter["triposy3"] = map(percent, 0, 100, oldObj["triposy3"], newObj["triposy3"]);
  }
  
  return new_letter;
}

var swapWords = [
  "FOLDABLE",
  "SYMBOLIC",
  "LOVINGLY",
  "VICTORIA",
  
]