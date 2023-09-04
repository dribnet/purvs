
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  
  
   // 
  let ellipseYpos = letterData["ellipseY"];

  //
  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
  let rectWidth = letterData["rectW"];
  let rectHeight = letterData["rectH"];

   // 
  let arcHeight = letterData["height"];
  let arcWidth = letterData["width"];
  let posx = 50 + letterData["offsetx"];
  let posy = 110 + letterData["offsety"];
  let start =letterData["angleStart"];
  let finish =letterData["angleStop"];

    // draw ellipse
  drawCircle(ellipseYpos);

    //draw rect    
  drawRect(rectX, rectY, rectWidth, rectHeight);

    // draw arc
  drawArc(posx, posy, arcWidth, arcHeight, start, finish);
}

function drawCircle(yPos){
  stroke(72,61,139);
  strokeWeight(5);
  fill(255,160,122);
  ellipse(50,yPos, 50, 60);
  fill(123,104,238);
  ellipse(50,yPos, 10, 60);
  ellipse(50,yPos, 60, 10);
  fill( 0,255,127);
  ellipse(50,yPos+1, 20, 20);
}

function drawRect(rectX, rectY, width, height){
  stroke(72,61,139);
  fill(176,224,230);
  rect(rectX, rectY, width, height,20);
}

function drawArc(posx, posy, width, height, start, finish){
  fill(210,180,140);
  arc(posx, posy, width-20, height-20, start, finish);
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["height"] = map(percent, 0, 100, oldObj["height"], newObj["height"]);
  new_letter["width"] = map(percent, 0, 100, oldObj["width"], newObj["width"]);
  new_letter["offsetx"] = map(percent/2, 0, 50, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent/2, 0, 50, oldObj["offsety"], newObj["offsety"]);
  new_letter["angleStart"] = map(percent/2, 0, 50, oldObj["angleStart"], newObj["angleStart"]);
  new_letter["angleStop"] = map(percent/2, 0, 50, oldObj["angleStop"], newObj["angleStop"]);
  new_letter["ellipseY"] = map(percent, 0, 100, oldObj["ellipseY"], newObj["ellipseY"]);

if(percent <40){
  new_letter["rectW"] = oldObj["rectW"];
  new_letter["rectH"] = oldObj["rectH"];
}
else{
  new_letter["rectW"] = map(percent, 0, 100, oldObj["rectW"], newObj["rectW"]);
  new_letter["rectH"] = map(percent, 0, 100, oldObj["rectH"], newObj["rectH"]);
}

  new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);

  return new_letter;
}

var swapWords = [
  
]