const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

}

// Update this function to draw you own maeda clock
function draw () {
  background(20);
  strokeWeight(2); 


  let hr = hour();
  let min = minute();
  let sec = second();

  



//centre clock
 fill(250);
 stroke(0);
 ellipse(465, 250, 300, 300);
 //child birth
 ellipse(650, 250, 20, 20);
 //marriges
 ellipse(677.5, 250, 25, 25);
 //deaths
 ellipse(710, 250, 30, 30);

 noFill();
 stroke(232, 12, 122);
 ellipse(465, 250, 370, 370);
 ellipse(465, 250, 425, 425);
 ellipse(465, 250, 490, 490);

 strokeWeight(1);
 text(hr + ':' + min + ':' + sec, 445, 250);



  // The rectangle draws on top of the ellipse
  // because it comes after in the code

  
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
