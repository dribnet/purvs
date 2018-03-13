const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 600;

const bBW = 40;
const bBH = 40;
const lBH = 10;
const lBW = 10;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(0); // black background
  strokeWeight(2); // Stroke weight to 8 pixels
  //first four
  //rect(200, 400, bBW, -300); //long vertical
  //one(0, 100, 100, 100);
  rect(0,100,100,-100);
  four(0, 100, 100, 100);
}

let one = function(sX, sY, W, H){
	rect((sX + W/2), (sY + lBH), lBW, -H+(lBH/2));
}

let two = function(sX, sY, W, H){
	//horizontal
	rect((sX + lBW*1.8), (sY - lBH-(lBH * 0.5)), W-(lBW*4), lBH); //bottom width
	rect((sX + lBW*1.8), (sY - (H/2)-lBH*0.5), W-(lBW*4), lBH); //middle width
	rect((sX + lBW*1.8), (sY - H)+lBH/2, W-(lBW*4), lBH); //top width
	//vertical
	rect(sX+(0.5*lBW), sY-lBH, lBW, -(H/2-lBH)+3); //bottom height
	rect((sX + (W-lBW*1.75)), sY-H/2, lBW, -(H/2-lBH)+3); //upper height
}

let three = function(sX, sY, W, H){
	//horizontal
	rect((sX + lBW), (sY - lBH-(lBH * 0.5)), W-(lBW*3.5), lBH); //bottom width
	rect((sX + lBW), (sY - (H/2)-lBH*0.5), W-(lBW*3.5), lBH); //middle width
	rect((sX + lBW), (sY - H)+lBH/2, W-(lBW*3.5), lBH); //top width
	//vertical
	rect((sX + (W-lBW*2)), sY-lBH, lBW, -(H/2-lBH)+3); //bottom height
	rect((sX + (W-lBW*2)), sY-H/2, lBW, -(H/2-lBH)+3); //upper height
}

/*let four = function(sX, sY, W, H){
	//horizontal
	rect((sX + (W*0.25)), (sY ))
}*/

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
