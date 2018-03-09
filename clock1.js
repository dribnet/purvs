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
  background(0); // light gray background
  //strokeWeight(8); // Stroke weight to 8 pixels
  //ellipse(480, 250, 190, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  //rect(500, 280, 260, 20);

  noStroke();
  fill("#e543c2");


  // FOUR (1)
  ellipse(130, 220, 23, 23);
  ellipse(160, 190, 23, 23);
  ellipse(190, 160, 23, 23);

  ellipse(190, 190, 23, 23);
  ellipse(190, 220, 23, 23); 
  ellipse(190, 250, 23, 23);   

  ellipse(100, 250, 23, 23);
  ellipse(100, 280, 23, 23);
  ellipse(130, 280, 23, 23);
  ellipse(160, 280, 23, 23);
  ellipse(190, 280, 23, 23);
  ellipse(220, 280, 23, 23);

  ellipse(190, 310, 23, 23);
  ellipse(190, 340, 23, 23);

    // FOUR (2)
  ellipse(130+240, 220, 23, 23);
  ellipse(160+240, 190, 23, 23);
  ellipse(190+240, 160, 23, 23);

  ellipse(190+240, 190, 23, 23);
  ellipse(190+240, 220, 23, 23); 
  ellipse(190+240, 250, 23, 23);   

  ellipse(100+240, 250, 23, 23);
  ellipse(100+240, 280, 23, 23);
  ellipse(130+240, 280, 23, 23);
  ellipse(160+240, 280, 23, 23);
  ellipse(190+240, 280, 23, 23);
  ellipse(220+240, 280, 23, 23);

  ellipse(190+240, 310, 23, 23);
  ellipse(190+240, 340, 23, 23);

  //Seven
  ellipse(510, 160, 23, 23);
  ellipse(540, 160, 23, 23);
  ellipse(570, 160, 23, 23);
  ellipse(600, 160, 23, 23);
  ellipse(630, 160, 23, 23);

  ellipse(630, 190, 23, 23);
  ellipse(630, 220, 23, 23);

  ellipse(600, 250, 23, 23);
  ellipse(570, 280, 23, 23);

  ellipse(570, 310, 23, 23);
  ellipse(570, 340, 23, 23);


//semi colon
  ellipse(280, 190, 23, 23);
  ellipse(280, 280, 23, 23);

  stroke(255);
  fill(0);
  strokeWeight(7);
  
  // FOUR (1)
  ellipse(130, 220, 10, 10);
  ellipse(160, 190, 10, 10);
  ellipse(190, 160, 10, 10);

  ellipse(190, 190, 10, 10);
  ellipse(190, 220, 10, 10); 
  ellipse(190, 250, 10, 10);   

  ellipse(100, 250, 10, 10);
  ellipse(100, 280, 10, 10);
  ellipse(130, 280, 10, 10);
  ellipse(160, 280, 10, 10);
  ellipse(190, 280, 10, 10);
  ellipse(220, 280, 10, 10);

  ellipse(190, 310, 10, 10);
  ellipse(190, 340, 10, 10);

  // FOUR (2)
  ellipse(130+240, 220, 10, 10);
  ellipse(160+240, 190, 10, 10);
  ellipse(190+240, 160, 10, 10);

  ellipse(190+240, 190, 10, 10);
  ellipse(190+240, 220, 10, 10); 
  ellipse(190+240, 250, 10, 10);   

  ellipse(100+240, 250, 10, 10);
  ellipse(100+240, 280, 10, 10);
  ellipse(130+240, 280, 10, 10);
  ellipse(160+240, 280, 10, 10);
  ellipse(190+240, 280, 10, 10);
  ellipse(220+240, 280, 10, 10);

  ellipse(190+240, 310, 10, 10);
  ellipse(190+240, 340, 10, 10);

    //Seven
  ellipse(510, 160, 10, 10);
  ellipse(540, 160, 10, 10);
  ellipse(570, 160, 10, 10);
  ellipse(600, 160, 10, 10);
  ellipse(630, 160, 10, 10);

  ellipse(630, 190, 10, 10);
  ellipse(630, 220, 10, 10);

  ellipse(600, 250, 10, 10);
  ellipse(570, 280, 10, 10);

  ellipse(570, 310, 10, 10);
  ellipse(570, 340, 10, 10);



//semi colon
  ellipse(280, 190, 10, 10);
  ellipse(280, 280, 10, 10);

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
