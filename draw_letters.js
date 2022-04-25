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
  let posx= 0;
  let posy= 0;
  // determine parameters for second circle

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
  //maps for calculating peak height
  let PosPeakHLerpMap1 = map(peaks1H, 0, 100, 0, 1); //postive peak1 height
  let NegPeakHLerpMap1 = map(peaks1H, 0, -100, 0, 1); //negative peak1 height
  let PosPeakHLerpMap2 = map(peaks2H, 0, 100, 0, 1); //postive peak2 height
  let NegPeakHLerpMap2 = map(peaks2H, 0, -100, 0, 1); //negative peak2 height

  let PeakALerpMap = map(peaks1, 0, 10, 0, 1); //postive peak1 amount
  let Peak2ALerpMap = map(peaks2, 0, -10, 0, 1); //negative peak2 amount
  //maps for lerp colour
  let PosLerpColor1 = lerpColor(Lcolor1, Lcolor2, PosPeakHLerpMap1); //pos peak1 color
  let NegLerpColor1 = lerpColor(Lcolor1, Lcolor2, NegPeakHLerpMap1); //neg peak1 color
  let PosLerpColor2 = lerpColor(Lcolor1, Lcolor2, PosPeakHLerpMap2); //pos peak2 color
  let NegLerpColor2 = lerpColor(Lcolor1, Lcolor2, NegPeakHLerpMap2); //neg peak2 color

  let PAmountLerpColor1 = lerpColor(Lcolor1, Lcolor2, PeakALerpMap); //peak1 amount color
  let PAmount2LerpColor1 = lerpColor(Lcolor1, Lcolor2, Peak2ALerpMap); //peak2 amount color

  //rect(posx, posy, 150, 250); //bounding box?

  //fill(lightBlue);
  strokeWeight(15);
  strokeCap(SQUARE);
  //strokeCap(ROUND);
  stroke(0);

  push();
  translate(pos1x, pos1y);
  angleMode(DEGREES);
  rotate(rotate1);
  angleMode(RADIANS);
  noFill();
  if(peaks1H >= 0){
      stroke(PosLerpColor1);
  }else{
    stroke(NegLerpColor1);
  }
  if(num == 1 && peaks1 > 0){
    stroke(PAmountLerpColor1);
  }


  beginShape();
  for (let i = 0; i < 100; i++) { //sets length

    const x = i * waveL1; //also sets length
    const y = sin(i * radians(peaks1)) * peaks1H; //height of curve
    vertex(x, y);
  }
  endShape();
  pop();

  push();
  translate(pos2x, pos2y);
  angleMode(DEGREES);
  rotate(rotate2);
  angleMode(RADIANS);
  noFill();
  if(peaks2H >= 0){
      stroke(PosLerpColor2);
  }else{
    stroke(NegLerpColor2);
  }
  if(num == 1 && peaks2 < 0){
    stroke(PAmount2LerpColor1);
  }
  beginShape();
  for (let i = 0; i < 100; i++) { //2 pixel spacing on the x - axis.

    const x = i * waveL2; //200 pixel high waveform on the y - axis.
    const y = -sin(i * radians(peaks2)) * peaks2H; //radians sets how many peaks
    vertex(x, y);
  }
  endShape();
  pop();
pop();

}
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetx"]    = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["waveL1"] = map(percent, 0, 100, oldObj["waveL1"], newObj["waveL1"]);
  new_letter["rotate1"] = map(percent, 0, 100, oldObj["rotate1"], newObj["rotate1"]);
  new_letter["peaks1"] = map(percent, 0, 100, oldObj["peaks1"], newObj["peaks1"]);
  new_letter["peak1H"] = map(percent, 0, 100, oldObj["peak1H"], newObj["peak1H"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["waveL2"] = map(percent, 0, 100, oldObj["waveL2"], newObj["waveL2"]);
  new_letter["rotate2"] = map(percent, 0, 100, oldObj["rotate2"], newObj["rotate2"]);
  new_letter["peaks2"] = map(percent, 0, 100, oldObj["peaks2"], newObj["peaks2"]);
  new_letter["peak2H"] = map(percent, 0, 100, oldObj["peak2H"], newObj["peak2H"]);

  return new_letter;
}

var swapWords = [
  "WAVEFORM",
  "SINEWAVE",
  "SKELTON?"
]
