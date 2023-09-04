const colorFront1  = [238, 190, 25, 170];
const colorFront2  = [198,21,47,300];
const colorFront3  = [10, 91, 138, 170];

const colorStroke  = [10, 10, 10];
// const colorStroke  = [0, 0, 0, 0];

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

  let w= 100;
  let h = 200;




// draws the first quad
function drawsthin(letterData) {


 fill(colorFront1)

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

// draws the second quad
function drawlthin(letterData) {
  let quadposx2 = letterData["pos2x"];
  let quadposy3 = letterData["pos3y"];
  let quadposy4 = letterData["pos4y"];
  let rotAmount2 = letterData["rotateS"];

 fill(colorFront2);
angleMode(DEGREES);
  
push(); 
 translate(letterData["translates3"], letterData["translates4"]);
  rotate(rotAmount2);
quad(0 -quadposx2, 0, 0 , 0 -quadposy3, 0 +quadposx2, 0, 0, 0 +quadposy4);
pop();

 }

// draws the third quad
function drawsfat(letterData) {
  let quadposx3 = letterData["pos3x"];
  let quadposy5 = letterData["pos5y"];
  let quadposy6 = letterData["pos6y"];
  let rotAmount3 = letterData["rotatesF"];

 fill(colorFront3);
angleMode(DEGREES);
  
push(); 
 translate(letterData["translatef1"], letterData["translatef2"]);
  rotate(rotAmount3);
quad(0 -quadposx3, 0, 0 , 0 -quadposy5, 0 +quadposx3, 0, 0, 0 +quadposy6);
pop();

}


push();
drawsthin(letterData)
drawlthin(letterData)
drawsfat(letterData)
pop();


}

// interpolation code
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

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


// Retried editing the interpolation timing, had a nice effect but ultimately did not feel like it fit in well enough so I commented it out

// if(percent < 10) {
//     new_letter["rotatesS"] = oldObj["rotatesS"];
//   }
//   else if(percent > 90) {
//     new_letter["rotatesS"] = newObj["rotatesS"];
//   }
//   else {
//     new_letter["rotatesS"] = map(percent, 40, 60, oldObj["rotatesS"], newObj["rotatesS"]);
//   } 



// if(percent < 10) {
//     new_letter["rotatesF"] = oldObj["rotatesF"];
//   }
//   else if(percent > 90) {
//     new_letter["rotatesF"] = newObj["rotatesF"];
//   }
//   else {
//     new_letter["rotatesF"] = map(percent, 40, 60, oldObj["rotatesF"], newObj["rotatesF"]);
//   } 


//   if(percent < 10) {
//     new_letter["pos1x"] = oldObj["pos1x"];
//   }
//   else if(percent > 90) {
//     new_letter["pos1x"] = newObj["pos1x"];
//   }
//   else {
//     new_letter["pos1x"] = map(percent, 40, 60, oldObj["pos1x"], newObj["pos1x"]);
//   } 

//     if(percent < 10) {
//     new_letter["pos1x"] = oldObj["pos1x"];
//   }
//   else if(percent > 90) {
//     new_letter["pos1x"] = newObj["pos1x"];
//   }
//   else {
//     new_letter["pos2x"] = map(percent, 40, 60, oldObj["pos2x"], newObj["pos2x"]);
//   } 
//     if(percent < 10) {
//     new_letter["pos2x"] = oldObj["pos2x"];
//   }
//   else if(percent > 90) {
//     new_letter["pos3x"] = newObj["pos3x"];
//   }
//   else {
//     new_letter["pos3x"] = map(percent, 40, 60, oldObj["pos3x"], newObj["pos3x"]);
//   } 

  return new_letter;
}

// some words for the exhibition
var swapWords = [
  "GLASSCUT",
  "12345678",
  "RX?78?02",
  "ABBAABBA",
  "GAVIN?AU",
  "AUKAIWEN",
  "1337l33T",
  "CAB?CAB?",
  "O0QO0QO0",
  "OZAIMASU",
  "PIZZAZES",
  "FRIZZILY",
  "DIZZYING",
  "ALCOHOLS",
  "DARLINGS",
  "BLUDGEON",
  "CATEGORY",
  "CAULDRON",
  "CYLINDER",
  "DOCTRINE",
  "DYSLEXIA",
  "ENORMITY",
  "GASOLINE",
  "DYNAMITE",
  "FRIGHTEN",
  "BACHELOR",
  "IDOLATRY",
  "LAVISHED",
  "LEASHING",
  "LIFEBOAT",
  "LIGAMENT",
  "LETHARGY",
  "MODELING",
  "MODESTLY",
  "OUTLIVED",
  "OUTRAGED",
  "OUTFLANK",
  "PHONETIC",
  "PILASTER"
]