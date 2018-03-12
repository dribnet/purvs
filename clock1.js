const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const time = 0.5;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(249, 249, 237);
  noStroke();

    fill(246, 202, 166);
    for (var i = 0; i < 50; i++) {
    var x = random(0, 940);
    var y = random(0, 480);
    rect(x, y, 20, 20);
  }

  push();
  scale(0.9);
  //strokeWeight(8); // Stroke weight to 8 pixels

  fill(240, 175, 167);
  ellipse(CANVAS_WIDTH/3, CANVAS_HEIGHT/2 - 30, 20, 20);
  ellipse(CANVAS_WIDTH/3, CANVAS_HEIGHT/2 + 30, 20, 20); //Two dots between hour and minute.

  ellipse(2 * CANVAS_WIDTH/3, CANVAS_HEIGHT/2 - 30, 20, 20);
  ellipse(2 * CANVAS_WIDTH/3, CANVAS_HEIGHT/2 + 30, 20, 20);//Two dots between minute and second.

  fill(248, 102, 107);
  rect(170, 160, 100, 20);
  rect(170, 250, 100, 20);
  rect(170, 340, 100, 20);
  rect(250, 160, 20, 180); //The number of 3.

  rect(420, 160, 20, 200);
  rect(360, 250, 110, 20);
  beginShape();
  vertex(420, 160);
  vertex(440, 170);
  vertex(370, 270);
  vertex(360, 250);
  endShape(); //The number of 4.

  rect(490, 160, 20, 200);
  rect(570, 160, 20, 200);
  rect(490, 160, 100, 20);
  rect(490, 250, 100, 20);
  rect(490, 340, 100, 20); //The number of 8.

  rect(690, 160, 100, 20);
  rect(690, 250, 100, 20);
  rect(690, 340, 100, 20);
  rect(770, 160, 20, 100);
  rect(690, 250, 20, 100); // The number of 2.

  rect(810, 160, 100, 20);
  rect(810, 250, 100, 20);
  rect(810, 340, 100, 20);
  rect(810, 160, 20, 200);
  rect(890, 250, 20, 100); // The number of 6.
  pop();

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
