/* these are optional special variables which will change the system */
var systemBackgroundColor = "#101010";
var systemLineColor = "#D4D4D4";
var systemBoxColor = "#FCFCFC";

/* internal constants */
const darkBlue = "#0077b6";
const lightBlue = "#90e0ef";
const strokeColor = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push(); //push1
  let posx = 0; //I think these are needed for the original draw_letters
  let posy = 0;

  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];
  let pos2x = posx + letterData["offsetx2"];
  let pos2y = posy + letterData["offsety2"];
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];
  let waveL1 = letterData["waveL1"];
  let waveL2 = letterData["waveL2"];
  let waveL3 = letterData["waveL3"];
  let rotate1 = letterData["rotate1"];
  let rotate2 = letterData["rotate2"];
  let rotate3 = letterData["rotate3"];
  let peaks1 = letterData["peaks1"];
  let peaks2 = letterData["peaks2"];
  let peaks3 = letterData["peaks3"];
  let peaks1H = letterData["peak1H"];
  let peaks2H = letterData["peak2H"];
  let peaks3H = letterData["peak3H"];
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
  let PosPeakHLerpMap3 = map(peaks3H, 0, 100, 0, 1); //postive peak3 height
  let NegPeakHLerpMap3 = map(peaks3H, 0, -100, 0, 1); //negative peak3 height
  //maps for calculating peak amount
  let PosPeakALerpMap = map(peaks1, 0, 10, 0, 1); //postive peak1 amount
  let NegPeakALerpMap = map(peaks1, 0, -10, 0, 1); //negative peak1 amount
  let PosPeak2ALerpMap = map(peaks2, 0, 10, 0, 1); //positive peak2 amount
  let NegPeak2ALerpMap = map(peaks2, 0, -10, 0, 1); //negative peak2 amount
  let PosPeak3ALerpMap = map(peaks3, 0, 10, 0, 1); //positive peak3 amount
  let NegPeak3ALerpMap = map(peaks3, 0, -10, 0, 1); //negative peak3 amount
  //maps for lerp colour
  let PosLerpColor1 = lerpColor(Lcolor1, Lcolor2, PosPeakHLerpMap1); //pos peak1 color
  let NegLerpColor1 = lerpColor(Lcolor1, Lcolor2, NegPeakHLerpMap1); //neg peak1 color
  let PosLerpColor2 = lerpColor(Lcolor1, Lcolor2, PosPeakHLerpMap2); //pos peak2 color
  let NegLerpColor2 = lerpColor(Lcolor1, Lcolor2, NegPeakHLerpMap2); //neg peak2 color
  let PosLerpColor3 = lerpColor(Lcolor1, Lcolor2, PosPeakHLerpMap3); //pos peak3 color
  let NegLerpColor3 = lerpColor(Lcolor1, Lcolor2, NegPeakHLerpMap3); //neg peak3 color
  //number lerp colour
  let PosPAmountLerpColor1 = lerpColor(Lcolor2, Lcolor3, PosPeakALerpMap); //pos peak1 amount color
  let NegPAmountLerpColor1 = lerpColor(Lcolor2, Lcolor3, NegPeakALerpMap); //neg peak1 amount color
  let PosPAmount2LerpColor1 = lerpColor(Lcolor2, Lcolor3, PosPeak2ALerpMap); //pos peak2 amount color
  let NegPAmount2LerpColor1 = lerpColor(Lcolor2, Lcolor3, NegPeak2ALerpMap); //neg peak2 amount color
  let PosPAmount3LerpColor1 = lerpColor(Lcolor2, Lcolor3, PosPeak3ALerpMap); //pos peak3 amount color
  let NegPAmount3LerpColor1 = lerpColor(Lcolor2, Lcolor3, NegPeak3ALerpMap); //neg peak3 amount color
  //fill(lightBlue);
  strokeWeight(15);
  strokeCap(SQUARE);
  //strokeCap(ROUND);
  stroke(0);
  //wave 1 start
  push(); //push2
  translate(pos1x, pos1y); //set x and y of wave 1
  angleMode(DEGREES);
  rotate(rotate1); //rotation for wave 1
  angleMode(RADIANS); //changes back to radians for sinewave loop
  noFill();
  if (peaks1H >= 0) { //if peaks are positive
    stroke(PosLerpColor1); //set positive map
  } else { //if peaks are negative
    stroke(NegLerpColor1); //set negative map
  }
  if (num == 1 && peaks1 >= 0) { //if its a number & wave 1 peaks are postive
    stroke(PosPAmountLerpColor1); //set number map colour
  } else if(num == 1 && peaks1 < 0){ //if its a number & wave 1 peaks are negative
    stroke(NegPAmountLerpColor1); //set number map colour
  }

  beginShape(); //main line wave 1
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL1; //sets wave 1 length
    const y = sin(i * radians(peaks1)) * peaks1H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  push(); //push3

  stroke("#101010"); //middle line colour
  strokeWeight(10); //middle line weight
  beginShape(); //middle line create
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL1; //sets wave 1 length
    const y = sin(i * radians(peaks1)) * peaks1H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  pop(); //pop3

  push(); //push4
  if (peaks1H >= 0) { //if peaks are positive
    stroke(PosLerpColor1); //set positive map
  } else { //if peaks are negative
    stroke(NegLerpColor1); //set negative map
  }
  if (num == 1 && peaks1 >= 0) { //if its a number & wave 1 peaks are postive
    stroke(PosPAmountLerpColor1); //set number map colour
  } else if(num == 1 && peaks1 < 0){ //if its a number & wave 1 peaks are negative
    stroke(NegPAmountLerpColor1); //set number map colour
  }
  strokeWeight(4); //middle colour line weight
  strokeCap(ROUND);
  beginShape(); //middle colour line create
  for (let i = 1; i < 99; i++) { //starts loop to make sine wave
    const x = i * waveL1; //sets wave 1 length
    const y = sin(i * radians(peaks1)) * peaks1H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  pop(); //pop4
  pop(); //pop2
  //wave 1 end - wave2 start
  push(); //push5
  translate(pos2x, pos2y); //set x and y of wave 2
  angleMode(DEGREES);
  rotate(rotate2); //rotation for wave 2
  angleMode(RADIANS); //changes back to radians for sinewave loop
  noFill();
  if (peaks2H >= 0) { //if peaks are positive
    stroke(PosLerpColor2); //set positive map
  } else { //if peaks are negative
    stroke(NegLerpColor2); //set negative map
  }
  if (num == 1 && peaks2 >= 0) { //if its a number & wave 2 peaks are postive
    stroke(PosPAmount2LerpColor1); //set number map colour
  } else if(num == 1 && peaks2 < 0){ //if its a number & wave 2 peaks are negative
    stroke(NegPAmount2LerpColor1); //set number map colour
  }

  beginShape(); //main line wave 2
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL2; //sets wave 2 length
    const y = -sin(i * radians(peaks2)) * peaks2H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  push(); //push6
  stroke("#101010"); //middle line colour
  strokeWeight(10); //middle line weight
  beginShape(); //middle line 2 create
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL2; //sets wave 2 length
    const y = -sin(i * radians(peaks2)) * peaks2H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  pop(); //pop6
  push(); //push7
  if (peaks2H >= 0) { //if peaks are positive
    stroke(PosLerpColor2); //set positive map
  } else { //if peaks are negative
    stroke(NegLerpColor2); //set negative map
  }
  if (num == 1 && peaks2 >= 0) { //if its a number & wave 2 peaks are postive
    stroke(PosPAmount2LerpColor1); //set number map colour
  } else if(num == 1 && peaks2 < 0){ //if its a number & wave 2 peaks are negative
    stroke(NegPAmount2LerpColor1); //set number map colour
  }
  strokeWeight(4); //middle colour line 2 weight
  strokeCap(ROUND);
  beginShape(); //middle colour line 2 create
  for (let i = 1; i < 99; i++) { //starts loop to make sine wave
    const x = i * waveL2; //sets wave 2 length
    const y = -sin(i * radians(peaks2)) * peaks2H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  pop(); //pop7
  pop(); //pop5
  //wave2 end - wave 3 start
  push(); //push8
  translate(pos3x, pos3y); //set x and y of wave 3
  angleMode(DEGREES);
  rotate(rotate3); //rotation for wave 3
  angleMode(RADIANS); //changes back to radians for sinewave loop
  noFill();
  if (peaks3H >= 0) { //if peaks are positive
    stroke(PosLerpColor3); //set positive map
  } else { //if peaks are negative
    stroke(NegLerpColor3); //set negative map
  }
  if (num == 1 && peaks3 >= 0) { //if its a number & wave 3 peaks are postive
    stroke(PosPAmount3LerpColor1); //set number map colour
  } else if(num == 1 && peaks3 < 0){ //if its a number & wave 3 peaks are negative
    stroke(NegPAmount3LerpColor1); //set number map colour
  }

  beginShape(); // main wave 3
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL3; //sets wave 3 length
    const y = -sin(i * radians(peaks3)) * peaks3H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  push(); //push9
  stroke("#101010"); //middle line 3 colour
  strokeWeight(10); //middle line 3 weight
  beginShape(); //middle line 3 create
  for (let i = 0; i < 100; i++) { //starts loop to make sine wave
    const x = i * waveL3; //sets wave 3 length
    const y = -sin(i * radians(peaks3)) * peaks3H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  pop(); //pop9
  push(); //push10
  if (peaks3H >= 0) { //if peaks are positive
    stroke(PosLerpColor3); //set positive map
  } else { //if peaks are negative
    stroke(NegLerpColor3); //set negative map
  }
  if (num == 1 && peaks3 >= 0) { //if its a number & wave 3 peaks are postive
    stroke(PosPAmount3LerpColor1); //set number map colour
  } else if(num == 1 && peaks3 < 0){ //if its a number & wave 3 peaks are negative
    stroke(NegPAmount3LerpColor1); //set number map colour
  }
  strokeWeight(4); //middle colour line 3 weight
  strokeCap(ROUND);
  beginShape(); //middle colour line 3 create
  for (let i = 1; i < 99; i++) { //starts loop to make sine wave
    const x = i * waveL3; //sets wave 3 length
    const y = -sin(i * radians(peaks3)) * peaks3H; //sets peak amount and peak height
    vertex(x, y); //draws line
  }
  endShape();
  pop(); //pop10
  pop(); //pop8
  pop(); //pop1?

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let inBetween = getObjFromChar("default");
  if (percent < 45) { //first half old letter to inbetween
    new_letter["offsetx"] = map(percent, 0, 45, oldObj["offsetx"], inBetween["offsetx"]);
    new_letter["offsety"] = map(percent, 0, 45, oldObj["offsety"], inBetween["offsety"]);
    new_letter["waveL1"] = map(percent, 0, 45, oldObj["waveL1"], inBetween["waveL1"]);
    new_letter["rotate1"] = map(percent, 0, 45, oldObj["rotate1"], inBetween["rotate1"]);
    new_letter["peaks1"] = map(percent, 0, 45, oldObj["peaks1"], inBetween["peaks1"]);
    new_letter["peak1H"] = map(percent, 0, 45, oldObj["peak1H"], inBetween["peak1H"]);
    new_letter["offsetx2"] = map(percent, 0, 45, oldObj["offsetx2"], inBetween["offsetx2"]);
    new_letter["offsety2"] = map(percent, 0, 45, oldObj["offsety2"], inBetween["offsety2"]);
    new_letter["waveL2"] = map(percent, 0, 45, oldObj["waveL2"], inBetween["waveL2"]);
    new_letter["rotate2"] = map(percent, 0, 45, oldObj["rotate2"], inBetween["rotate2"]);
    new_letter["peaks2"] = map(percent, 0, 45, oldObj["peaks2"], inBetween["peaks2"]);
    new_letter["peak2H"] = map(percent, 0, 45, oldObj["peak2H"], inBetween["peak2H"]);
    new_letter["offsetx3"] = map(percent, 0, 45, oldObj["offsetx3"], inBetween["offsetx3"]);
    new_letter["offsety3"] = map(percent, 0, 45, oldObj["offsety3"], inBetween["offsety3"]);
    new_letter["waveL3"] = map(percent, 0, 45, oldObj["waveL3"], inBetween["waveL3"]);
    new_letter["rotate3"] = map(percent, 0, 45, oldObj["rotate3"], inBetween["rotate3"]);
    new_letter["peaks3"] = map(percent, 0, 45, oldObj["peaks3"], inBetween["peaks3"]);
    new_letter["peak3H"] = map(percent, 0, 45, oldObj["peak3H"], inBetween["peak3H"]);
    new_letter["number"] = map(percent, 0, 45, oldObj["number"], oldObj["number"]); //use old objs colour
  } else if (percent >= 45 && percent <= 55) { //stay at inBetween for 10
    new_letter["offsetx"] = inBetween["offsetx"];
    new_letter["offsety"] = inBetween["offsety"];
    new_letter["waveL1"] = inBetween["waveL1"];
    new_letter["rotate1"] = inBetween["rotate1"];
    new_letter["peaks1"] = inBetween["peaks1"];
    new_letter["peak1H"] = inBetween["peak1H"];
    new_letter["offsetx2"] = inBetween["offsetx2"];
    new_letter["offsety2"] = inBetween["offsety2"];
    new_letter["waveL2"] = inBetween["waveL2"];
    new_letter["rotate2"] = inBetween["rotate2"];
    new_letter["peaks2"] = inBetween["peaks2"];
    new_letter["peak2H"] = inBetween["peak2H"];
    new_letter["offsetx3"] = inBetween["offsetx3"];
    new_letter["offsety3"] = inBetween["offsety3"];
    new_letter["waveL3"] = inBetween["waveL3"];
    new_letter["rotate3"] = inBetween["rotate3"];
    new_letter["peaks3"] = inBetween["peaks3"];
    new_letter["peak3H"] = inBetween["peak3H"];
    new_letter["number"] = newObj["number"]; //get new objs colour

  } else if (percent > 55) { //second half move from inBetween to newObj
    new_letter["offsetx"] = map(percent, 55, 100, inBetween["offsetx"], newObj["offsetx"]);
    new_letter["offsety"] = map(percent, 55, 100, inBetween["offsety"], newObj["offsety"]);
    new_letter["waveL1"] = map(percent, 55, 100, inBetween["waveL1"], newObj["waveL1"]);
    new_letter["rotate1"] = map(percent, 55, 100, inBetween["rotate1"], newObj["rotate1"]);
    new_letter["peaks1"] = map(percent, 55, 100, inBetween["peaks1"], newObj["peaks1"]);
    new_letter["peak1H"] = map(percent, 55, 100, inBetween["peak1H"], newObj["peak1H"]);
    new_letter["offsetx2"] = map(percent, 55, 100, inBetween["offsetx2"], newObj["offsetx2"]);
    new_letter["offsety2"] = map(percent, 55, 100, inBetween["offsety2"], newObj["offsety2"]);
    new_letter["waveL2"] = map(percent, 55, 100, inBetween["waveL2"], newObj["waveL2"]);
    new_letter["rotate2"] = map(percent, 55, 100, inBetween["rotate2"], newObj["rotate2"]);
    new_letter["peaks2"] = map(percent, 55, 100, inBetween["peaks2"], newObj["peaks2"]);
    new_letter["peak2H"] = map(percent, 55, 100, inBetween["peak2H"], newObj["peak2H"]);
    new_letter["offsetx3"] = map(percent, 55, 100, inBetween["offsetx3"], newObj["offsetx3"]);
    new_letter["offsety3"] = map(percent, 55, 100, inBetween["offsety3"], newObj["offsety3"]);
    new_letter["waveL3"] = map(percent, 55, 100, inBetween["waveL3"], newObj["waveL3"]);
    new_letter["rotate3"] = map(percent, 55, 100, inBetween["rotate3"], newObj["rotate3"]);
    new_letter["peaks3"] = map(percent, 55, 100, inBetween["peaks3"], newObj["peaks3"]);
    new_letter["peak3H"] = map(percent, 55, 100, inBetween["peak3H"], newObj["peak3H"]);
    new_letter["number"] = map(percent, 55, 100, newObj["number"], newObj["number"]); //use new objs colour
  }
  return new_letter;
}

var swapWords = [
  "WAVEFORM",
  "SINEWAVE",
  "SKELTON?"
]
