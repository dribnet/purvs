  const canvasWidth = 960;
  const canvasHeight = 500;
  const backgroundColor  = "#ffffff";





  const letterA = {
    "triangleX": 70.84,
    "triangleY": 152,
    "TriAng": 180,
    "triWidth": 130,
    "triHeight": 200,
    "ellipseX": 64.66,
    "ellipseY": 140.6,
    "ellipseSize": 80,
    "ellipse2X": 65.72,
    "ellipse2Y": 140,
    "ellipseSize2": 46,
    "rectX": 97,
    "rectY": 140,
    "rectWidth": 18,
    "rectHeight": 80,
    "backgroundSlider": 255,
    "offsetX": 208,
    "offsetY": 105,
    "letterScale": 1.5
  }
  const letterB = {
    "triangleX": 93.56,
  "triangleY": 152,
  "TriAng": 82.80000000000001,
  "triWidth": 176,
  "triHeight": 124,
  "ellipseX": 87.84,
  "ellipseY": 163.4,
  "ellipseSize": 81,
  "ellipse2X": 89.28,
  "ellipse2Y": 163.39999999999998,
  "ellipseSize2": 42,
  "rectX": 46,
  "rectY": 132,
  "rectWidth": 20,
  "rectHeight": 144,
  "backgroundSlider": 255,
  "offsetX": 420,
  "offsetY": -26,
  "letterScale": 1.1
  }
  const letterC = {
    "triangleX": 145,
"triangleY": 159.92,
"TriAng": 57.39999999999998,
"triWidth": 122,
"triHeight": 192,
"ellipseX": 142,
"ellipseY": 186.2,
"ellipseSize": 108,
"ellipse2X": 139,
"ellipse2Y": 185.4,
"ellipseSize2": 58,
"rectX": 165,
"rectY": 185,
"rectWidth": 54,
"rectHeight": 70,
"backgroundSlider": 255,
"offsetX": 600,
"offsetY": 100,
"letterScale": 0.6
  }







  function setup () {

  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();

  // with no animation, redrawing the screen is not necessary


}




  function draw () {
  // clear screen
  background(backgroundColor);

  let center_y = canvasWidth/2;


  // compute the center of the canvas

  //A
  drawLetter(200,200, letterA);
  drawLetter(200,200, letterB);
  drawLetter(200,200, letterC);


}




  function drawLetter(posx, posy, letterData) {

  //variables
  let triangleX =  letterData["triangleX"];
  let triangleY =  letterData["triangleY"];
  let TriAng = letterData["TriAng"];
  let triWidth = letterData["triWidth"];
  let left = triangleX - triWidth/2;
  let right = triangleX + triWidth/2;
  let triHeight = letterData["triHeight"];
  let ellipseX = letterData["ellipseX"];
  let ellipseY = letterData["ellipseY"];
  let ellipseSize = letterData["ellipseSize"];
  let ellipse2X = letterData["ellipse2X"];
  let ellipse2Y = letterData["ellipse2Y"];
  let ellipseSize2 = letterData["ellipseSize2"];
  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
  let rectWidth = letterData["rectWidth"];
  let rectHeight = letterData["rectHeight"];
  let letterScale = letterData["letterScale"];
  let offsetX = letterData["offsetX"];
  let offsetY = letterData["offsetY"];

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




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }

  else if (key == '@') {
    saveBlocksImages(true);
  }
}
