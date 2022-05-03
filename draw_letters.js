/* these are optional special variables which will change the system */
var systemBackgroundColor = "#101010";
var systemLineColor = "#D4D4D4";
var systemBoxColor = "#FCFCFC";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push();
  let posx= 0; //I think these are needed for the original draw_letters
  let posy= 0;

  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];
  let pos2x = posx + letterData["offsetx2"];
  let pos2y = posy + letterData["offsety2"];
  let waveL1 = letterData["waveL1"];
  let waveL2 = letterData["waveL2"];
  let rotate1 = letterData["rotate1"];
  let rotate2 = letterData["rotate2"];
  let peaks1 = letterData["peaks1"];
  let peaks2 = letterData["peaks2"];
  let peaks1H = letterData["peak1H"];
  let peaks2H = letterData["peak2H"];
  let num = letterData["number"];
  //lerpColor setup
  let Lcolor1 = color(0, 232, 232); //blue
  let Lcolor2 = color(232, 232, 27); //yellow
  let Lcolor3 = color(240, 2, 49); //red
  //maps for calculating peak height
  let PosPeakHLerpMap1 = map(peaks1H, 0, 100, 0, 1); //postive peak1 height
  let NegPeakHLerpMap1 = map(peaks1H, 0, -100, 0, 1); //negative peak1 height
  let PosPeakHLerpMap2 = map(peaks2H, 0, 100, 0, 1); //postive peak2 height
  let NegPeakHLerpMap2 = map(peaks2H, 0, -100, 0, 1); //negative peak2 height
  //maps for calculating peak amount
  let PeakALerpMap = map(peaks1, 0, 10, 0, 1); //postive peak1 amount
  let Peak2ALerpMap = map(peaks2, 0, -10, 0, 1); //negative peak2 amount
  //maps for lerp colour
  let PosLerpColor1 = lerpColor(Lcolor1, Lcolor2, PosPeakHLerpMap1); //pos peak1 color
  let NegLerpColor1 = lerpColor(Lcolor1, Lcolor2, NegPeakHLerpMap1); //neg peak1 color
  let PosLerpColor2 = lerpColor(Lcolor1, Lcolor2, PosPeakHLerpMap2); //pos peak2 color
  let NegLerpColor2 = lerpColor(Lcolor1, Lcolor2, NegPeakHLerpMap2); //neg peak2 color
  let PAmountLerpColor1 = lerpColor(Lcolor2, Lcolor3, PeakALerpMap); //peak1 amount color
  let PAmount2LerpColor1 = lerpColor(Lcolor2, Lcolor3, Peak2ALerpMap); //peak2 amount color
  //fill(lightBlue);
  strokeWeight(15);
  strokeCap(SQUARE);
  //strokeCap(ROUND);
  stroke(0);

  push();
  translate(pos1x, pos1y); //set x and y of wave 1
  angleMode(DEGREES);
  rotate(rotate1); //rotation for wave 1
  angleMode(RADIANS); //changes back to radians for sinewave loop
  noFill();
  if(peaks1H >= 0){ //if peaks are positive
      stroke(PosLerpColor1); //set positive map
  }else{ //if peaks are negative
    stroke(NegLerpColor1); //set negative map
  }
  if(num == 1 ){ //if its a number & wave 1 peaks are always postive
    stroke(PAmountLerpColor1); //set number map colour
  }
//&& peaks1 >= 0
  //print('Pos Lerp Colour1 = ' + PosLerpColor1);
  beginShape();
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL1; //sets wave 1 length
    const y = sin(i * radians(peaks1)) * peaks1H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  push();

  stroke("#101010"); //middle line colour
  strokeWeight(5); //middle line weight
  beginShape(); //middle line create
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL1; //sets wave 1 length
    const y = sin(i * radians(peaks1)) * peaks1H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  pop();
  pop();

  push();
  translate(pos2x, pos2y); //set x and y of wave 2
  angleMode(DEGREES);
  rotate(rotate2); //rotation for wave 1
  angleMode(RADIANS); //changes back to radians for sinewave loop
  noFill();
  if(peaks2H >= 0){ //if peaks are positive
      stroke(PosLerpColor2); //set positive map
  }else{ //if peaks are negative
    stroke(NegLerpColor2); //set negative map
  }
  if(num == 1){ //if its a number & wave 2 peaks are always negative
    stroke(PAmount2LerpColor1); //set number map colour
  }
  //  && peaks2 <= 0
  beginShape();
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL2; //sets wave 2 length
    const y = -sin(i * radians(peaks2)) * peaks2H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  push();
  stroke("#101010"); //middle line colour
  strokeWeight(5); //middle line weight
  beginShape(); //middle line create
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL2; //sets wave 2 length
    const y = -sin(i * radians(peaks2)) * peaks2H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();

  pop();
  pop();
pop();

}
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let inBetween = getObjFromChar("default");
  if(percent < 50){
    new_letter["offsetx"] = map(percent, 0, 50, oldObj["offsetx"], inBetween["offsetx"]);
    new_letter["offsety"] = map(percent, 0, 50, oldObj["offsety"], inBetween["offsety"]);
    new_letter["waveL1"] = map(percent, 0, 50, oldObj["waveL1"], inBetween["waveL1"]);
    new_letter["rotate1"] = map(percent, 0, 50, oldObj["rotate1"], inBetween["rotate1"]);
    new_letter["peaks1"] = map(percent, 0, 50, oldObj["peaks1"], inBetween["peaks1"]);
    new_letter["peak1H"] = map(percent, 0, 50, oldObj["peak1H"], inBetween["peak1H"]);
    new_letter["offsetx2"] = map(percent, 0, 50, oldObj["offsetx2"], inBetween["offsetx2"]);
    new_letter["offsety2"] = map(percent, 0, 50, oldObj["offsety2"], inBetween["offsety2"]);
    new_letter["waveL2"] = map(percent, 0, 50, oldObj["waveL2"], inBetween["waveL2"]);
    new_letter["rotate2"] = map(percent, 0, 50, oldObj["rotate2"], inBetween["rotate2"]);
    new_letter["peaks2"] = map(percent, 0, 50, oldObj["peaks2"], inBetween["peaks2"]);
    new_letter["peak2H"] = map(percent, 0, 50, oldObj["peak2H"], inBetween["peak2H"]);
    new_letter["number"] = map(percent, 0, 50, oldObj["number"], newObj["number"]);
  }else{
    new_letter["offsetx"] = map(percent, 51, 100, inBetween["offsetx"], newObj["offsetx"]);
    new_letter["offsety"] = map(percent, 51, 100, inBetween["offsety"], newObj["offsety"]);
    new_letter["waveL1"] = map(percent, 51, 100, inBetween["waveL1"], newObj["waveL1"]);
    new_letter["rotate1"] = map(percent, 51, 100, inBetween["rotate1"], newObj["rotate1"]);
    new_letter["peaks1"] = map(percent, 51, 100, inBetween["peaks1"], newObj["peaks1"]);
    new_letter["peak1H"] = map(percent, 51, 100, inBetween["peak1H"], newObj["peak1H"]);
    new_letter["offsetx2"] = map(percent, 51, 100, inBetween["offsetx2"], newObj["offsetx2"]);
    new_letter["offsety2"] = map(percent, 51, 100, inBetween["offsety2"], newObj["offsety2"]);
    new_letter["waveL2"] = map(percent, 51, 100, inBetween["waveL2"], newObj["waveL2"]);
    new_letter["rotate2"] = map(percent, 51, 100, inBetween["rotate2"], newObj["rotate2"]);
    new_letter["peaks2"] = map(percent, 51, 100, inBetween["peaks2"], newObj["peaks2"]);
    new_letter["peak2H"] = map(percent, 51, 100, inBetween["peak2H"], newObj["peak2H"]);
    new_letter["number"] = map(percent, 51, 100, newObj["number"], newObj["number"]);
  }
  return new_letter;
}

var swapWords = [
  "WAVEFORM",
  "SINEWAVE",
  "SKELTON?"
]
