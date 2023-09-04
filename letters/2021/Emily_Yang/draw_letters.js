/* these are optional special variables which will change the system */
var systemBackgroundColor = "#f2e2d5"; //light pink
var systemLineColor = "#6b705c";
var systemBoxColor = "#cbc0d3";

/* internal constants */
const backgroundColor  = "#f2e2d5"; //light pink
const strokeColor      = "#b47355"; //orange


const lightOrange = '#cd976b'; //light orange

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(3);
  angleMode(DEGREES);

  let MainOffsetX = 50 + letterData["MainPosX"];
  let MainOffsetY = 150 + letterData["MainPosY"];
  let MainRadius1 = letterData["MainRadiusA"];
  let MainRadius2 = letterData["MainRadiusB"];
  let MainRadius3 = letterData["MainRadiusC"];
  let RoundCorRad1 = letterData["RoundCorRadA"];
  let RoundCorRad2 = letterData["RoundCorRadB"];
  let RoundCorRad3 = letterData["RoundCorRadC"];
  let RoundCorRad4 = letterData["RoundCorRadD"];
  let PartOffsetX = 50 + letterData["PartPosX"];
  let PartOffsetY = 150 + letterData["PartPosY"];
  let PartRadius4 = letterData["PartRadiusD"];
  let PartRadius5 = letterData["PartRadiusE"];
  let PartCorRads = letterData["PartCorRad"];
  let Start1 = letterData["StartA"];
  let End1 = letterData["EndA"];
  let Start2 = letterData["StartB"];
  let End2 = letterData["EndB"];
  let Start3 = letterData["StartC"];
  let End3 = letterData["EndC"];

  //draw the main body
  noFill();
  push();
  rectMode(CENTER);
  rect(MainOffsetX,MainOffsetY,MainRadius1,MainRadius1,RoundCorRad1,RoundCorRad2,RoundCorRad3,RoundCorRad4);
  pop();

  arc(MainOffsetX,MainOffsetY,MainRadius2,MainRadius2,Start1,End1);
  arc(MainOffsetX,MainOffsetY,MainRadius3,MainRadius3,Start2,End2);

  // the relative to the main body (filled color part)
  arc(PartOffsetX,PartOffsetY,MainRadius3,MainRadius3,Start3,End3);

  fill(lightOrange);
  push();
  rectMode(CENTER);
  rect(PartOffsetX,PartOffsetY,PartRadius4,PartRadius5,PartCorRads);
  pop();

}

//the interaction function
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["MainPosX"] = map(percent, 0, 100, oldObj["MainPosX"], newObj["MainPosX"]);
  new_letter["MainPosY"] = map(percent, 0, 100, oldObj["MainPosY"], newObj["MainPosY"]);
  new_letter["MainRadiusA"] = map(percent, 0, 100, oldObj["MainRadiusA"], newObj["MainRadiusA"]);
  new_letter["MainRadiusB"] = map(percent, 0, 100, oldObj["MainRadiusB"], newObj["MainRadiusB"]);
  new_letter["MainRadiusC"] = map(percent, 0, 100, oldObj["MainRadiusC"], newObj["MainRadiusC"]);
  new_letter["RoundCorRadA"] = map(percent, 0, 100, oldObj["RoundCorRadA"], newObj["RoundCorRadA"]);
  new_letter["RoundCorRadB"] = map(percent, 0, 100, oldObj["RoundCorRadB"], newObj["RoundCorRadB"]);
  new_letter["RoundCorRadC"] = map(percent, 0, 100, oldObj["RoundCorRadC"], newObj["RoundCorRadC"]);
  new_letter["RoundCorRadD"] = map(percent, 0, 100, oldObj["RoundCorRadD"], newObj["RoundCorRadD"]);
  new_letter["PartPosX"] = map(percent, 0, 100, oldObj["PartPosX"], newObj["PartPosX"]);
  new_letter["PartPosY"] = map(percent, 0, 100, oldObj["PartPosY"], newObj["PartPosY"]);
  new_letter["PartRadiusD"] = map(percent, 0, 100, oldObj["PartRadiusD"], newObj["PartRadiusD"]);
  new_letter["PartRadiusE"] = map(percent, 0, 100, oldObj["PartRadiusE"], newObj["PartRadiusE"]);
  new_letter["PartCorRad"] = map(percent, 0, 100, oldObj["PartCorRad"], newObj["PartCorRad"]);
  
  //add if-else funtion to make arc lines rotation in clockwise
  if (oldObj["StartA"] > newObj["StartA"]){
    new_letter["StartA"] = map(percent, 0, 100, oldObj["StartA"], 360+newObj["StartA"]);
  } else {
    new_letter["StartA"] = map(percent, 0, 100, oldObj["StartA"], newObj["StartA"]);
  }

  if (oldObj["EndA"] > newObj["EndA"]){
    new_letter["EndA"] = map(percent, 0, 100, oldObj["EndA"], 360+newObj["EndA"]);
  } else {
    new_letter["EndA"] = map(percent, 0, 100, oldObj["EndA"], newObj["EndA"]);
  }

  if (oldObj["StartB"] > newObj["StartB"]){
    new_letter["StartB"] = map(percent, 0, 100, oldObj["StartB"], 360+newObj["StartB"]);
  } else {
    new_letter["StartB"] = map(percent, 0, 100, oldObj["StartB"], newObj["StartB"]);
  }


  if (oldObj["EndB"] > newObj["EndB"]){
    new_letter["EndB"] = map(percent, 0, 100, oldObj["EndB"], 360+newObj["EndB"]);
  } else {
    new_letter["EndB"] = map(percent, 0, 100, oldObj["EndB"], newObj["EndB"]);
  }

  if (oldObj["StartC"] > newObj["StartC"]){
    new_letter["StartC"] = map(percent, 0, 100, oldObj["StartC"], 360+newObj["StartC"]);
  } else {
    new_letter["StartC"] = map(percent, 0, 100, oldObj["StartC"], newObj["StartC"]);
  }

  if (oldObj["EndC"] > newObj["EndC"]){
    new_letter["EndC"] = map(percent, 0, 100, oldObj["EndC"], 360+newObj["EndC"]);
  } else {
    new_letter["EndC"] = map(percent, 0, 100, oldObj["EndC"], newObj["EndC"]);
  }

  return new_letter;
}

var swapWords = [
  "ARCLINES",
  "?LIYANG?",
  "MDDN?242",
  "PROJECT2",
  "ARCLINES",
  "?ORANGE?",
  "MANYPINK",
  "CAB?CAB?",
  "BAAAAAAA",
  "ABBDDADA",
  "DADABBDD"
]