// const colorFront1  = "#199cff";
// const colorFront2  = "#59ccff";
// const colorStroke  = "#233f11";

const colorFront1  = [204, 101, 192, 2];
const colorFront2  = [204,101,192,150];
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */




function drawLetter(letterData) {
//   // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  let w= 100;
  let h = 200;

//   //determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = 50  + letterData["offsetx"];
//   let pos2y = 150 + letterData["offsety"];

//   // draw two circles
//   fill(colorFront1);
//   ellipse(50, 150, 75, 75);
//   fill(colorFront2);
//   ellipse(pos2x, pos2y, size2, size2);
// // }





function drawsthin(letterData) {


 

    let quadposx1 = letterData["pos1x"];
    let quadposy1 = letterData["pos1y"];
    let quadposy2 = letterData["pos2y"];
    let rotAmount1 = letterData["rotatesS"];
 fill(colorFront1);
    angleMode(DEGREES);
  
push(); 
 translate(letterData["translates1"], letterData["translates2"]);
  rotate(rotAmount1);
quad(0 -quadposx1, 0, 0 , 0 -quadposy1, 0 +quadposx1, 0, 0, 0 +quadposy2);
pop();

  }


function drawlthin(letterData) {
  let quadposx2 = letterData["pos2x"];
  let quadposy3 = letterData["pos3y"];
  let quadposy4 = letterData["pos4y"];
  let rotAmount2 = letterData["rotateS"];

 fill(colorFront1);
angleMode(DEGREES);
  
push(); 
 translate(letterData["translates3"], letterData["translates4"]);
  rotate(rotAmount2);
quad(0 -quadposx2, 0, 0 , 0 -quadposy3, 0 +quadposx2, 0, 0, 0 +quadposy4);
pop();

 }

function drawsfat(letterData) {
  let quadposx3 = letterData["pos3x"];
  let quadposy5 = letterData["pos5y"];
  let quadposy6 = letterData["pos6y"];
  let rotAmount3 = letterData["rotatesF"];

 fill(colorFront1);
angleMode(DEGREES);
  
push(); 
 translate(letterData["translatef1"], letterData["translatef2"]);
  rotate(rotAmount3);
quad(0 -quadposx3, 0, 0 , 0 -quadposy5, 0 +quadposx3, 0, 0, 0 +quadposy6);
pop();

}

// function drawlfat(letterData) {
//   let quadposx4 = letterData["pos4x"];
//   let quadposy7 = letterData["pos7y"];
//   let quadposy8 = letterData["pos8y"];
//   let rotAmount = letterData["rotateF"];

//   fill(colorFront1);
// angleMode(DEGREES);
  
// push(); 
//  translate(letterData["translatef3"], letterData["translatef4"]);
//   rotate(rotAmount);
// quad(0 -quadposx4, 0, 0 , 0 -quadposy7, 0 +quadposx4, 0, 0, 0 +quadposy8);


// pop();
  
// }

push();
drawsthin(letterData)
drawlthin(letterData)
drawsfat(letterData)
// drawlfat(letterData)
pop();

// push();
// drawsthin(letterDataB)
// drawlthin(letterDataB)
// drawsfat(80,50, letterDataB)
// drawlfat(80, 100, letterDataB)
// pop();


}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["pos1x"] = map(percent, 0, 100, oldObj["pos1x"], newObj["pos1x"]);
  new_letter["pos2x"] = map(percent, 0, 100, oldObj["pos2x"], newObj["pos2x"]);
  new_letter["pos3x"] = map(percent, 0, 100, oldObj["pos3x"], newObj["pos3x"]);
  new_letter["pos1y"] = map(percent, 0, 100, oldObj["pos1y"], newObj["pos1y"]);
  new_letter["pos2y"] = map(percent, 0, 100, oldObj["pos2y"], newObj["pos2y"]);
  new_letter["pos3y"] = map(percent, 0, 100, oldObj["pos3y"], newObj["pos3y"]);
  new_letter["pos4y"] = map(percent, 0, 100, oldObj["pos4y"], newObj["pos4y"]);
  new_letter["pos5y"] = map(percent, 0, 100, oldObj["pos5y"], newObj["pos5y"]);
  new_letter["pos6y"] = map(percent, 0, 100, oldObj["pos6y"], newObj["pos6y"]);
  new_letter["rotatesS"] = map(percent, 0, 100, oldObj["rotatesS"], newObj["rotatesS"]);
  new_letter["rotateS"] = map(percent, 0, 100, oldObj["rotateS"], newObj["rotateS"]);
  new_letter["rotatesF"] = map(percent, 0, 100, oldObj["rotatesF"], newObj["rotatesF"]);
  new_letter["translates1"] = map(percent, 0, 100, oldObj["translates1"], newObj["translates1"]);
  new_letter["translates2"] = map(percent, 0, 100, oldObj["translates2"], newObj["translates2"]);
  new_letter["translates3"] = map(percent, 0, 100, oldObj["translates3"], newObj["translates3"]);
  new_letter["translates4"] = map(percent, 0, 100, oldObj["translates4"], newObj["translates4"]);
  new_letter["translatef1"] = map(percent, 0, 100, oldObj["translatef1"], newObj["translatef1"]);
  new_letter["translatef2"] = map(percent, 0, 100, oldObj["translatef2"], newObj["translatef2"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]