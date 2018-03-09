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
  strokeWeight(4); // Stroke weight to 8 pixels

  noFill();
  strokeWeight(4);
  // The rectangle draws on top of the ellipse because it comes after in the code
  //first digit
  stroke("#ccffff");
  for(let ypos =300;ypos>100;ypos-=25){
    rect(50, ypos, 25, 25);  
  }  
  
  //second digit
  stroke("#b3ffcc");
  for(let ypos = 300;ypos>100;ypos-=25){
    rect(200, ypos, 25, 25);
  }

  //Divider
  stroke("#ddff99");
  rect(270, 150, 25, 25);
  rect(270, 250, 25, 25);

  //third digit
  stroke("#ffd480");
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
  stroke("#ff944d");
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
  stroke("#ff80bf");
  rect(670, 150, 25, 25);
  rect(670, 250, 25, 25);

  //fith number
  stroke("#99bbff");
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
