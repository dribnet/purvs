
const PaperColor = "#07c9ff";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */



function drawLetter(letterData) {



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
triangle(triposx1,triposy1,triposx2,triposy2,triposx3,triposy3);


 fill(PaperColor);
beginShape();
vertex(posx1, posy1);
vertex(posx2, posy2);
vertex(posx3, posy3);
vertex(posx4, posy4);
vertex(posx5, posy5);
vertex(posx6, posy6);
vertex(posx7, posy7);
endShape(CLOSE);


pop();



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