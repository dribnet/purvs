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
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  ellipse(50, 150, 75, 75);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
}



//   function drawsthin(posx, posy, letterData) {



//   // determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = 50  + letterData["offsetx"];
//   let pos2y = 150 + letterData["offsety"];


//         let quadposx1 = letterData["pos1x"];
//     let quadposy1 = letterData["pos1y"];
//     let quadposy2 = letterData["pos2y"];
//     let rotAmount1 = letterData["rotatesS"];
//  fill(colorFront1);
//     angleMode(DEGREES);
  
// push(); 
//  translate(posx,posy);
//   rotate(rotAmount1);
// quad(0 -quadposx1, 0, 0 , 0 -quadposy1, 0 +quadposx1, 0, 0, 0 +quadposy2);
// pop();

//     // quad(posx -  quadposx1, posy, posx , posy -quadposy1, posx +quadposx1, posy, posx, posy +quadposy2);
//   }



// function drawlthin(posx, posy, letterData) {


//   // determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = 50  + letterData["offsetx"];
//   let pos2y = 150 + letterData["offsety"];

//   let quadposx2 = letterData["pos2x"];
//   let quadposy3 = letterData["pos3y"];
//   let quadposy4 = letterData["pos4y"];
//    // quad(posx - quadposx2, posy, posx , posy -quadposy3, posx +quadposx2, posy, posx, posy +quadposy4);
//   let rotAmount2 = letterData["rotateS"];

//  fill(colorFront1);
// angleMode(DEGREES);
  
// push(); 
//  translate(posx,posy);
//   rotate(rotAmount2);
// quad(0 -quadposx2, 0, 0 , 0 -quadposy3, 0 +quadposx2, 0, 0, 0 +quadposy4);
// pop();

//  }


// function drawsfat(posx, posy, letterData) {



//   // determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = 50  + letterData["offsetx"];
//   let pos2y = 150 + letterData["offsety"];

//   let quadposx3 = letterData["pos3x"];
//   let quadposy5 = letterData["pos5y"];
//   let quadposy6 = letterData["pos6y"];
//   // quad(posx - quadposx3, posy, posx , posy -quadposy5, posx +quadposx3, posy, posx, posy +quadposy6);
//   let rotAmount3 = letterData["rotatesF"];

//  fill(colorFront1);
// angleMode(DEGREES);
  
// push(); 
//  translate(posx,posy);
//   rotate(rotAmount3);
// quad(0 -quadposx3, 0, 0 , 0 -quadposy5, 0 +quadposx3, 0, 0, 0 +quadposy6);
// pop();

// }




// function drawlfat(posx, posy, letterData) {


//   // determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = 50  + letterData["offsetx"];
//   let pos2y = 150 + letterData["offsety"];
  
//   let quadposx4 = letterData["pos4x"];
//   let quadposy7 = letterData["pos7y"];
//   let quadposy8 = letterData["pos8y"];
//   let rotAmount = letterData["rotateF"];
//   angleMode(DEGREES);
  
// push(); 
//  translate(posx,posy);
//   rotate(rotAmount);
// quad(0 -quadposx4, 0, 0 , 0 -quadposy7, 0 +quadposx4, 0, 0, 0 +quadposy8);

// pop();



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