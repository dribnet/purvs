/* Colours used for the alphabet */
/* SIDE NOTE: not sure if these colours contribute to the parameter count, I assume not, however
if they do in total I would've used 19 parameters. */

const colorFont1  = "#6A0DAD";
const colwhite = 251;
const trans = 200;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup

  let triangleX1 = letterData["triangleXPos1"]; //first x point of first triangle
  let triangleY1 = letterData["triangleYPos1"]; //first y point of first triangle
  let triangleX2 = letterData["triangleXPos2"]; //second x point of first triangle
  let triangleY2 = letterData["triangleYPos2"]; //second y point of first triangle
  let triangleX3 = letterData["triangleXPos3"]; //third x point of first triangle
  let triangleY3 = letterData["triangleYPos3"]; //third y point of first triangle
  let triangleX4 = letterData["triangleXPos4"]; //first x point of second triangle
  let triangleY4 = letterData["triangleYPos4"]; //first y point of second triangle
  let triangleX5 = letterData["triangleXPos5"]; //second x point of second triangle
  let triangleY5 = letterData["triangleYPos5"]; //second y point of second triangle
  let triangleX6 = letterData["triangleXPos6"]; //third x point of second triangle
  let triangleY6 = letterData["triangleYPos6"]; //third y point of second triangle
  let rectX = letterData["rectXPos"]; //x pos of rectangle
  let rectY = letterData["rectYPos"]; //y pos of rectangle 
  let rectW = letterData["rectWPos"]; //width dimension of rectangle 
  let rectH = letterData["rectHPos"]; //height dimension of rectangle

    fill(colorFont1); //change fill to purple 
    triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3); //draw first triangle
    fill(colwhite,colwhite,colwhite-3,colwhite-50); //change fill to white
    triangle(triangleX4,triangleY4,triangleX5,triangleY5,triangleX6,triangleY6); //draw second triangle
    rect(rectX,rectY,rectW,rectH); //draw rectangle

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["triangleXPos1"] = map(percent, 0, 100, oldObj["triangleXPos1"], newObj["triangleXPos1"]); //trianglexpos1 interpolate
  new_letter["triangleYPos1"] = map(percent, 0, 100, oldObj["triangleYPos1"], newObj["triangleYPos1"]); //triangleypos1 interpolate
  new_letter["triangleXPos2"] = map(percent, 0, 100, oldObj["triangleXPos2"], newObj["triangleXPos2"]); //trianglexpos2 interpolate
  new_letter["triangleYPos2"] = map(percent, 0, 100, oldObj["triangleYPos2"], newObj["triangleYPos2"]); //triangleypos2 interpolate 
  new_letter["triangleXPos3"] = map(percent, 0, 100, oldObj["triangleXPos3"], newObj["triangleXPos3"]); //trianglexpos3 interpolate
  new_letter["triangleYPos3"] = map(percent, 0, 100, oldObj["triangleYPos3"], newObj["triangleYPos3"]); //triangleypos3 interpolate
  new_letter["triangleXPos4"] = map(percent, 0, 100, oldObj["triangleXPos4"], newObj["triangleXPos4"]); //trianglexpos4 interpolate
  new_letter["triangleYPos4"] = map(percent, 0, 100, oldObj["triangleYPos4"], newObj["triangleYPos4"]); //triangleypos4 interpolate
  new_letter["triangleXPos5"] = map(percent, 0, 100, oldObj["triangleXPos5"], newObj["triangleXPos5"]); //trianglexpos5 interpolate
  new_letter["triangleYPos5"] = map(percent, 0, 100, oldObj["triangleYPos5"], newObj["triangleYPos5"]); //triangleypos5 interpolate
  new_letter["triangleXPos6"] = map(percent, 0, 100, oldObj["triangleXPos6"], newObj["triangleXPos6"]); //trianglexpos6 interpolate
  new_letter["triangleYPos6"] = map(percent, 0, 100, oldObj["triangleYPos6"], newObj["triangleYPos6"]); //triangleypos6 interpolate
  new_letter["rectXPos"] = map(percent, 0, 100, oldObj["rectXPos"], newObj["rectXPos"]); //rectxpos interpolate 
  new_letter["rectYPos"] = map(percent, 0, 100, oldObj["rectYPos"], newObj["rectYPos"]); //rectypos interpolate 
  new_letter["rectWPos"] = map(percent, 0, 100, oldObj["rectWPos"], newObj["rectWPos"]); //rectwpos interpolate  
  new_letter["rectHPos"] = map(percent, 0, 100, oldObj["rectHPos"], newObj["rectHPos"]); //recthpos interpolate 

  return new_letter;
}

/* TWITCH EMOTES BELOW */

var swapWords = [
  "TWITCHTV",
  "POGGERS?",
  "OMEGALUL",
  "POGCHAMP",
  "CMONBRUH",
  "TRIHARD7",
  "BABYRAGE",
  "BLESSRNG",
  "DANSGAME"
]