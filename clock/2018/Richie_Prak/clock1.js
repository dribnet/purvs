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
  strokeWeight(3);
  //fill(255, 204, 0);
  fill(255);
  const spacing = 40;
  
  for(let i =-3*spacing; i <= 3*spacing; i = i+spacing){
    ellipse(width/4, height/2+i, 30, 30);
  
  x = 290;
   //four
   ellipse(280, x, 30, 30);
   ellipse(200, 290, 30, 30);
   ellipse(160, 290, 30, 30);
   ellipse(120, 290, 30, 30);
   ellipse(120, 250, 30, 30);
   ellipse(160, 200, 30, 30);
   ellipse(200, 170, 30, 30);
   
   //digit
   
   ellipse(370, 330, 30, 30);
   ellipse(370, 170, 30, 30);
  
  }
  
  //thesecondfour
  for(let i =-3*spacing; i <= 3*spacing; i = i+spacing){
    ellipse(width/1.6, height/2+i, 30, 30);
    
    
    ellipse(640, x, 30, 30);
    ellipse(560, x, 30, 30);
    ellipse(520, x, 30, 30);
    ellipse(480, x, 30, 30);
    ellipse(480, 250, 30, 30);
    ellipse(560, 170, 30, 30);
    ellipse(520, 200, 30, 30);
    
    //SEVEN, IM TAKING THE LONG WAY
    
    y = 130;
    
    ellipse(720, y, 30, 30);
    ellipse(760, y, 30, 30);
    ellipse(800, y, 30, 30);
    ellipse(840, y, 30, 30);
    ellipse(880, y, 30, 30);
    //top
    ellipse(880, 170, 30, 30);
    ellipse(880, 210, 30, 30);
    //
    ellipse(840, 250, 30, 30);
    //
    ellipse(800, 290, 30, 30);
    ellipse(800, 330, 30, 30);
    ellipse(800, 370, 30, 30);
  }
  
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  //rect(500, 280, 260, 20);
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
