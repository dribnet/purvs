const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const PIXEL_SIZE = 30;
const START_Y = 150;
const START_X = 300;
const MID_X = 400;
const LAST_X = 500;
const SEC_GAP = 15;
const MIN_GAP = 10;
const HOUR_GAP = 5;
let num;
function setup () {
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
}
function draw () {
	var five = [
  	[1,1,1,0,0,1,0],
  	[1,0,1,0,0,0,1],
  	[1,0,1,0,0,0,1],
  	[1,0,1,0,0,0,1],
  	[1,0,0,1,1,1,0],
  ];
  	var three = [
  	[0,1,0,0,0,1,0],
  	[1,0,0,0,0,0,1],
  	[1,0,0,1,0,0,1],
  	[1,0,0,1,0,0,1],
  	[0,1,1,0,1,1,0],
  	];
	background(0);
	strokeWeight (2);
	stroke(0,0,255);
	noFill();
	
 	//draw the first minute
 	var five = new Number(START_X, five, SEC_GAP);
 	five.draw();
 	var three = new Number(LAST_X, three, SEC_GAP )
 	three.draw();
}

function Number(startX, number, spacing) {
	this.x = startX;
	this.array = number; 
	this.gap = spacing;

	this.draw = function() {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 7; j++) {
				if (this.array[i][j] == 1) {
					ellipse(this.x + (i*PIXEL_SIZE), START_Y + (j*PIXEL_SIZE), PIXEL_SIZE - this.gap, PIXEL_SIZE - this.gap);
				}
			}
 		}
	}
}


