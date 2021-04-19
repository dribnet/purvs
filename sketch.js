const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "MainRadiusA":70,
  "MainRadiusB":50,
  "MainRadiusC":30,
  "RoundCorRadA":35,
  "RoundCorRadB":35,
  "RoundCorRadC":5,
  "RoundCorRadD":35,
  "PartPosX":285,
  "PartPosY":275,
  "PartRadiusD":25,
  "PartRadiusE":0,
  "PartRadiusF":0,
  "PartCorRad":0,
  "StartA":90,
  "EndA":360,
  "StartB":320,
  "EndB":150,
  "StartC":190,
  "EndC":270  
}

const letterB = {
  "MainRadiusA":70,
  "MainRadiusB":50,
  "MainRadiusC":30,
  "RoundCorRadA":5,
  "RoundCorRadB":35,
  "RoundCorRadC":35,
  "RoundCorRadD":35,
  "PartPosX":455,
  "PartPosY":190,
  "PartRadiusD":0,
  "PartRadiusE":20,
  "PartRadiusF":40,
  "PartCorRad":10,
  "StartA":270,
  "EndA":180,
  "StartB":110,
  "EndB":320,
  "StartC":0,
  "EndC":80
}

const letterC = {
  "MainRadiusA":0,
  "MainRadiusB":70,
  "MainRadiusC":50,
  "RoundCorRadA":0,
  "RoundCorRadB":0,
  "RoundCorRadC":0,
  "RoundCorRadD":0,
  "PartPosX":730,
  "PartPosY":250,
  "PartRadiusD":25,
  "PartRadiusE":0,
  "PartRadiusF":0,
  "PartCorRad":0,
  "StartA":60,
  "EndA":300,
  "StartB":70,
  "EndB":200,
  "StartC":230,
  "EndC":285  
}

const backgroundColor  = "#f2e2d5"; //light pink
const strokeColor      = "#b47355"; //orange

const lightYellow  = "#e5d8b4"; //light yellow
const lightOrange = '#cd976b'; //light orange

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES);
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {

  let MainRadius1 = letterData["MainRadiusA"];
  let MainRadius2 = letterData["MainRadiusB"];
  let MainRadius3 = letterData["MainRadiusC"];
  let RoundCorRad1 = letterData["RoundCorRadA"];
  let RoundCorRad2 = letterData["RoundCorRadB"];
  let RoundCorRad3 = letterData["RoundCorRadC"];
  let RoundCorRad4 = letterData["RoundCorRadD"];
  let PartOffsetX = letterData["PartPosX"];
  let PartOffsetY = letterData["PartPosY"];
  let PartRadius4 = letterData["PartRadiusD"];
  let PartRadius5 = letterData["PartRadiusE"];
  let PartRadius6 = letterData["PartRadiusF"];
  let Start1 = letterData["StartA"];
  let End1 = letterData["EndA"];
  let Start2 = letterData["StartB"];
  let End2 = letterData["EndB"];
  let Start3 = letterData["StartC"];
  let End3 = letterData["EndC"];
  let PartCorRads = letterData["PartCorRad"];

  


  // draw two circles
  noFill();
  //ellipse(posx, posy, 150, 150);
  rectMode(CENTER);
  rect(posx,posy,MainRadius1,MainRadius1,RoundCorRad1,RoundCorRad2,RoundCorRad3,RoundCorRad4);
  arc(posx,posy,MainRadius2,MainRadius2,Start1,End1);
  arc(posx,posy,MainRadius3,MainRadius3,Start2,End2);
  arc(posx,posy,MainRadius3,MainRadius3,Start3,End3);

  fill(lightYellow);
  ellipse(PartOffsetX,PartOffsetY,PartRadius4);
  fill(lightOrange);
  rect(PartOffsetX,PartOffsetY,PartRadius5,PartRadius6,PartCorRads);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
