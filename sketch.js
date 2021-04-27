const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my 20 variable per letter are:
  * `MainPosX` : x offset of the main body position
  * `MainPosY` : y offset of the main body position
  * `MainRadiusA` : radius of the Main body first rectangle with rounded corners
  * `MainRadiusB` : radius of the Main body first arc line 
  * `MainRadiusC` : radius of the Main body second arc line 
  * `RoundCorRadA` : main body first rectangle with top-left rounded corner radii
  * `RoundCorRadB` : main body first rectangle with top-right rounded corner radii
  * `RoundCorRadC` : main body first rectangle with bottom-right rounded corner radii
  * `RoundCorRadD` : main body first rectangle with bottom-left rounded corner radii
  * `PartPosX` : x offset of the second circle relative to the main one
  * `PartPosY` : y offset of the second circle relative to the main one
  * `PartRadiusD` : width of the second rectangle relative to the main one
  * `PartRadiusE` : height of the second rectangle relative to the main one
  * `PartCorRad` : rounded corners radii of the second rectangle relative to the main one
  * `StartA` : angle to start the arc1
  * `EndA` : angle to stop the arc1
  * `StartB` : angle to start the arc2
  * `EndB` : angle to stop the arc2
  * `StartC` : angle to start the arc3
  * `EndC` : angle to stop the arc3
 */

const letterA = {
  "MainPosX":0,
  "MainPosY":0,
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
  "PartRadiusE":25,
  "PartCorRad":12.5,
  "StartA":90,
  "EndA":360,
  "StartB":280,
  "EndB":190,
  "StartC":0,
  "EndC":0  
}

const letterB = {
  "MainPosX":0,
  "MainPosY":0,
  "MainRadiusA":70,
  "MainRadiusB":50,
  "MainRadiusC":30,
  "RoundCorRadA":5,
  "RoundCorRadB":35,
  "RoundCorRadC":35,
  "RoundCorRadD":35,
  "PartPosX":455,
  "PartPosY":190,
  "PartRadiusD":20,
  "PartRadiusE":40,
  "PartCorRad":10,
  "StartA":270,
  "EndA":180,
  "StartB":80,
  "EndB":360,
  "StartC":0,
  "EndC":0
}

const letterC = {
  "MainPosX":0,
  "MainPosY":0,
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
  "PartRadiusE":25,
  "PartCorRad":12.5,
  "StartA":60,
  "EndA":300,
  "StartB":70,
  "EndB":200,
  "StartC":230,
  "EndC":280
}

const backgroundColor  = "#f2e2d5"; //light pink
const strokeColor      = "#b47355"; //orange

const lightOrange = '#cd976b'; //light orange

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(3);

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

  let MainOffsetX = posx + letterData["MainPosX"];
  let MainOffsetY = posy + letterData["MainPosY"];
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
  let PartCorRads = letterData["PartCorRad"];
  let Start1 = letterData["StartA"];
  let End1 = letterData["EndA"];
  let Start2 = letterData["StartB"];
  let End2 = letterData["EndB"];
  let Start3 = letterData["StartC"];
  let End3 = letterData["EndC"];

  // draw the main body
  noFill();
  rectMode(CENTER);
  rect(MainOffsetX,MainOffsetY,MainRadius1,MainRadius1,RoundCorRad1,RoundCorRad2,RoundCorRad3,RoundCorRad4);
  arc(MainOffsetX,MainOffsetY,MainRadius2,MainRadius2,Start1,End1);
  arc(MainOffsetX,MainOffsetY,MainRadius3,MainRadius3,Start2,End2);

  // the relative to the main body
  arc(PartOffsetX,PartOffsetY,MainRadius3,MainRadius3,Start3,End3);
  fill(lightOrange);
  rect(PartOffsetX,PartOffsetY,PartRadius4,PartRadius5,PartCorRads);
  

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
