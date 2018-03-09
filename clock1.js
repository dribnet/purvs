const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(40); // light gray background
  strokeWeight(8); // Stroke weight to 8 pixels


  //color
  fill("blue");
  rect(65, 285, 25, 25);
  rect(65, 265, 25, 25);
  rect(65, 245, 25, 25);
  rect(65, 225, 25, 25);
  rect(65, 205, 25, 25);
  rect(65, 185, 25, 25);
  rect(65, 165, 25, 25);
  rect(65, 145, 25, 25);
  rect(65, 125, 25, 25);
  rect(65,105,25,25);
  rect(65, 85, 25, 25);

  fill("green");
  rect(215, 285, 25, 25);
  rect(215, 265, 25, 25);
  rect(215, 245, 25, 25);
  rect(215, 225, 25, 25);
  rect(215, 205, 25, 25);
  rect(215, 185, 25, 25);
  rect(215, 165, 25, 25);
  rect(215, 145, 25, 25);
  rect(215, 125, 25, 25);
  rect(215,105,25,25);
  rect(215, 85, 25, 25);

  fill("yellow");
  rect(385, 285, 25, 25);
  rect(410, 285, 25, 25);
  rect(435, 285, 25, 25);
  rect(465, 260, 25, 25);
  rect(355, 290, 25, 25);
  rect(355, 265, 25, 25);
  rect(355, 240, 25, 25);
  rect(355, 215, 25, 25);
  rect(355, 190, 25, 25);
  rect(355, 165, 25, 25);
  rect(465, 265, 25, 25);
  rect(465, 240, 25, 25);
  rect(465, 215, 25, 25);
  rect(465, 190, 25, 25);
  rect(465, 165, 25, 25);
  rect(385, 105, 25, 25);
  rect(410, 105, 25, 25);
  rect(435, 105, 25, 25);



  fill("white");
  // The rectangle draws on top of the ellipse because it comes after in the code
  //first digit
  rect(50, 300, 25, 25);
  rect(50, 275, 25, 25);
  rect(50, 250, 25, 25);
  rect(50, 225, 25, 25);
  rect(50, 200, 25, 25);
  rect(50, 175, 25, 25);
  rect(50, 150, 25, 25);
  rect(50, 125, 25, 25);
  rect(50, 100, 25, 25);

  //second digit
  rect(200, 300, 25, 25);
  rect(200, 275, 25, 25);
  rect(200, 250, 25, 25);
  rect(200, 225, 25, 25);
  rect(200, 200, 25, 25);
  rect(200, 175, 25, 25);
  rect(200, 150, 25, 25);
  rect(200, 125, 25, 25);
  rect(200, 100, 25, 25);

  //Divider
  rect(270, 150, 25, 25);
  rect(270, 250, 25, 25);

  //third digit
  rect(370, 300, 25, 25);
  rect(395, 300, 25, 25);
  rect(420, 300, 25, 25);
  rect(450, 275, 25, 25);
  rect(340, 275, 25, 25);
  rect(340, 250, 25, 25);
  rect(340, 225, 25, 25);
  rect(340, 200, 25, 25);
  rect(340, 175, 25, 25);
  rect(340, 150, 25, 25);
  rect(450, 250, 25, 25);
  rect(450, 225, 25, 25);
  rect(450, 200, 25, 25);
  rect(450, 175, 25, 25);
  rect(450, 150, 25, 25);
  rect(370, 120, 25, 25);
  rect(395, 120, 25, 25);
  rect(420, 120, 25, 25);

  //fourth digit
  rect(520, 300, 25, 25);
  rect(545, 300, 25, 25);
  rect(570, 300, 25, 25);
  rect(600, 275, 25, 25);
  rect(490, 275, 25, 25);
  rect(490, 250, 25, 25);
  rect(490, 225, 25, 25);
  rect(490, 200, 25, 25);
  rect(490, 175, 25, 25);
  rect(490, 150, 25, 25);
  rect(600, 250, 25, 25);
  rect(600, 225, 25, 25);
  rect(600, 200, 25, 25);
  rect(600, 175, 25, 25);
  rect(600, 150, 25, 25);
  rect(520, 120, 25, 25);
  rect(545, 120, 25, 25);
  rect(570, 120, 25, 25);

  //Second divider
  rect(670, 150, 25, 25);
  rect(670, 250, 25, 25);

  //fith number
  rect(770, 300, 25, 25);
  rect(795, 300, 25, 25);
  rect(820, 300, 25, 25);
  rect(850, 275, 25, 25);
  rect(740, 275, 25, 25);
  rect(740, 250, 25, 25);
  rect(740, 225, 25, 25);
  rect(740, 200, 25, 25);
  rect(740, 175, 25, 25);
  rect(740, 150, 25, 25);
  rect(850, 250, 25, 25);
  rect(850, 225, 25, 25);
  rect(850, 200, 25, 25);
  rect(850, 175, 25, 25);
  rect(850, 150, 25, 25);
  rect(770, 120, 25, 25);
  rect(795, 120, 25, 25);
  rect(820, 120, 25, 25);

}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
