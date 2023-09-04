/* these are optional special variables which will change the system */
  var systemLineColor = "#ffffff";
  var systemBoxColor = "#00c800";








  function drawLetter(letterData) {
  angleMode(DEGREES);
  // color/stroke setup
  noStroke();


  //triangle x,y
  let triangleX =  letterData["triangleX"];
  let triangleY =  letterData["triangleY"];
  //angle of triangle
  let TriAng = letterData["TriAng"];
  /*
  width of triangle from centre
*/

  let triWidth = letterData["triWidth"];
/*
left and right sides of triangle equal distance from center,
making the triangle isosceles.
*/
  //center x


  let left = triangleX - triWidth/2;
  let right = triangleX + triWidth/2;
  //height of triangle
  let triHeight = letterData["triHeight"];






  //ellipse x,y
  let ellipseX = letterData["ellipseX"];
  let ellipseY = letterData["ellipseY"];
  //size
  let ellipseSize = letterData["ellipseSize"];




  //ellipse2 x,y
  let ellipse2X = letterData["ellipse2X"];
  let ellipse2Y = letterData["ellipse2Y"];
  //size
  let ellipseSize2 = letterData["ellipseSize2"];




  //rect x,y
  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
  //size
  let rectWidth = letterData["rectWidth"];
  let rectHeight = letterData["rectHeight"];

  let backgroundSlider = letterData["backgroundSlider"];
  let letterScale = letterData["letterScale"];
  let offsetX = letterData["offsetX"];
  let offsetY = letterData["offsetY"];


  // let offsetX = letterData["offsetX"];
  // let offsetY = letterData["offsetY"];




  //creates yellow background in editor to make shapes easier to edit
  //background controlled by backgroundSlider in editor
  //this code is commented out because for some reason it creates a visual bug outside of editor.js
  push();
  fill(255,255,backgroundSlider);
  rect(-125, -120, 300, 500);
  pop();



  push();
  translate(offsetX,offsetY);
  scale(letterScale);




  //creates triangle
  push();
  fill(0);
  translate(triangleX, triangleY);
  rotate(TriAng);
  translate(-triangleX, -triangleY);
  triangle(left, triangleY+triHeight/2, right, triangleY+triHeight/2, triangleX, triangleY-triHeight/2);

  pop();
  //creates a white ellipse
  push()
  fill(255);
  ellipse(ellipseX, ellipseY, ellipseSize);
  pop();
  //creates a blue ellipse
  push()
  fill(0, 42, 255);
  ellipse(ellipse2X, ellipse2Y, ellipseSize2);
  pop();
  //creates a rectangle
  push()
  fill(255);
  rectMode(CENTER);
  rect(rectX, rectY, rectWidth, rectHeight);
  pop();
  pop();


}

  function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["triangleX"] = map(percent, 0, 100, oldObj["triangleX"], newObj["triangleX"]);
  new_letter["triangleY"] = map(percent, 0, 100, oldObj["triangleY"], newObj["triangleY"]);
  new_letter["TriAng"] = map(percent, 0, 100, oldObj["TriAng"], newObj["TriAng"]);
  new_letter["triWidth"] = map(percent, 0, 100, oldObj["triWidth"], newObj["triWidth"]);
  new_letter["triHeight"] = map(percent, 0, 100, oldObj["triHeight"], newObj["triHeight"]);
  new_letter["ellipseX"] = map(percent, 0, 100, oldObj["ellipseX"], newObj["ellipseX"]);
  new_letter["ellipseY"] = map(percent, 0, 100, oldObj["ellipseY"], newObj["ellipseY"]);
  new_letter["ellipseSize"] = map(percent, 0, 100, oldObj["ellipseSize"], newObj["ellipseSize"]);
  new_letter["ellipse2X"] = map(percent, 0, 100, oldObj["ellipse2X"], newObj["ellipse2X"]);
  new_letter["ellipse2Y"] = map(percent, 0, 100, oldObj["ellipse2Y"], newObj["ellipse2Y"]);
  new_letter["ellipseSize2"] = map(percent, 0, 100, oldObj["ellipseSize2"], newObj["ellipseSize2"]);
  new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectWidth"] = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
  new_letter["offsetX"] = map(percent, 0, 100, oldObj["offsetX"], newObj["offsetX"]);
  new_letter["offsetY"] = map(percent, 0, 100, oldObj["offsetY"], newObj["offsetY"]);
  new_letter["letterScale"] = map(percent, 0, 100, oldObj["letterScale"], newObj["letterScale"]);


  return new_letter;
}


var swapWords = [
  "CHARLIE",
  "SPECIAL",
  "CORNER"
]
