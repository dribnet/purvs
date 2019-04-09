/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let size=35;
  let spacing=60;
  let startX1=0;
  let startX2=55;
  let y=20;
  shearX(PI / 89.0);
  strokeJoin(BEVEL);
  strokeWeight(2);
  let colorB= color(255,255,255,letterData["alpha"
]);
  let colorW= color(0,0,0, letterData["alpha"
]);
  let alphaB=color(255,255,255,30);
  let alphaW=color(0,0,0,160);
  //DOT ONE
  if(letterData["dot1"]==1){
    fill(colorW);
    stroke(colorB);
    rect(startX1,y,size,size);
  }
  //  if(letterData["dot1"]!=1){
  //   noFill();
  //   stroke(alphaB);
  //   rect(startX1,y,size,size);
  // }
  //DOT TWO
  if(letterData["dot2"]==1){
    fill(colorB);
    stroke(colorW);
    rect(startX1,y+spacing,size,size);
  }
  if(letterData["dot2"]!=1){
    fill(alphaB);
    noStroke();
    rect(startX1,y+spacing,size-20,size-20);
  }
  //DOT THREE
  if(letterData["dot3"]==1){
    fill(colorW);
    stroke(colorB);
    rect(startX1,y+(spacing*2),size,size);
  }
  // if(letterData["dot3"]!=1){
  //   noFill();
  //   stroke(alphaB);
  //   rect(startX1,y+(spacing*2),size-10,size-10);
  // }
  //DOT FOUR
  if(letterData["dot4"]==1){
    fill(colorB);
    stroke(colorW);
    rect(startX2,y,size,size);
  }
  //DOT FIVE
   if(letterData["dot5"]==1){
    fill(colorW);
    stroke(colorB);
    rect(startX2,y+spacing,size,size);
  }
  //DOT SIX
  if(letterData["dot6"]==1){
    fill(colorB);
    stroke(colorW);
    rect(startX2,y+(spacing*2),size,size);
  }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["dot1"]= map(percent, 0, 100, oldObj["dot1"],newObj["dot1"]);
  new_letter["dot2"]= map(percent, 0, 100, oldObj["dot2"],newObj["dot2"]);
  new_letter["dot3"]= map(percent, 0, 100, oldObj["dot3"],newObj["dot3"]);
  new_letter["dot4"]= map(percent, 0, 100, oldObj["dot4"],newObj["dot4"]);
  new_letter["dot5"]= map(percent, 0, 100, oldObj["dot5"],newObj["dot5"]);
  new_letter["dot6"]= map(percent, 0, 100, oldObj["dot6"],newObj["dot6"]);
  new_letter["alpha"]= map(percent, 0, 100, 0, 255);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]