const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const BLOCK_SIZE = 40;
const NUM_LOOP = 4;
const SMAL_BLOCK = 5;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  //white
  fill(255);
  
  background(1); // light black background
  strokeWeight(0); // Stroke weight to 8 pixels
  
  //the number 4
  rect(CANVAS_WIDTH/6+(BLOCK_SIZE*NUM_LOOP-BLOCK_SIZE), CANVAS_HEIGHT/5, BLOCK_SIZE, BLOCK_SIZE*7);
  rect(CANVAS_WIDTH/6, CANVAS_HEIGHT/5+(BLOCK_SIZE*4), BLOCK_SIZE*5, BLOCK_SIZE);
  for(i=0; i < NUM_LOOP; i++){
    j=i+1;
    rect(CANVAS_WIDTH/6+(BLOCK_SIZE*i), CANVAS_HEIGHT/5+(BLOCK_SIZE*4)-(BLOCK_SIZE*j), BLOCK_SIZE, BLOCK_SIZE);  
  }
  
  //grey
  fill(125);
  
  let x = CANVAS_WIDTH*0.65;
  let y = CANVAS_HEIGHT/2;
  //zero
  rect(x,y,SMAL_BLOCK*4 ,SMAL_BLOCK);
  rect(x,y+(SMAL_BLOCK*8),SMAL_BLOCK*4 ,SMAL_BLOCK);
  rect(x-SMAL_BLOCK,y+SMAL_BLOCK,SMAL_BLOCK,SMAL_BLOCK*7);
  rect(x+(SMAL_BLOCK*4),y+SMAL_BLOCK,SMAL_BLOCK,SMAL_BLOCK*7);

  //eight

  rect(x+(SMAL_BLOCK*7),y,SMAL_BLOCK*4 ,SMAL_BLOCK);
  rect(x+(SMAL_BLOCK*7),y+(SMAL_BLOCK*4),SMAL_BLOCK*4 ,SMAL_BLOCK);
  rect(x+(SMAL_BLOCK*7),y+(SMAL_BLOCK*8),SMAL_BLOCK*4 ,SMAL_BLOCK);
  rect(x-SMAL_BLOCK+(SMAL_BLOCK*7),y+SMAL_BLOCK,SMAL_BLOCK,SMAL_BLOCK*3);
  rect(x-SMAL_BLOCK+(SMAL_BLOCK*7),y+(SMAL_BLOCK*5),SMAL_BLOCK,SMAL_BLOCK*3);
  rect(x-SMAL_BLOCK+(SMAL_BLOCK*12),y+SMAL_BLOCK,SMAL_BLOCK,SMAL_BLOCK*3);
  rect(x-SMAL_BLOCK+(SMAL_BLOCK*12),y+(SMAL_BLOCK*5),SMAL_BLOCK,SMAL_BLOCK*3);


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
