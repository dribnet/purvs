/*
 * This is the function to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */


/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

let ballx = 0;
let bally = 0;
let ballr = 500;

var cells = [];

var mainCell;

var numberOfCells = 100;

class cell{
	constructor(x,y,r,zoomThresh){
		this.x = x;
		this.y = y;
		this.r = r;
		this.subCells = [];
		this.zoomThresh = zoomThresh;
	}

	draw(p5,x1,x2,y1,y2,zoom){
		var localX = p5.map(this.x,x1,x2,0,256);
		var localY = p5.map(this.y,y1,y2,0,256);
		var localEdge = p5.map((this.x + this.r), x1, x2, 0, 256);
		var localR = localEdge - localX;


			p5.fill(20,20,25);
			p5.stroke(255);
			if(localX >= 0-localR && localX <= 256+localR && localY >= 0-localR && localY <= 256+localR){
			if(zoom < this.zoomThresh) {
				
					p5.ellipse(localX,localY,localR,localR);
					// p5.noStroke();
					// p5.fill(255);
					// p5.text(localR,localX,localY);
				
			}
			else {
				for(let c of this.subCells){
		   			c.draw(p5,x1,x2,y1,y2,zoom)
		   		}
		   	p5.colorMode(p5.RGB,255);
			}
		}
	}
}

function generateCells(bigCell,cellCount,zoomThresh){
	for(i = 0; i < cellCount; i ++){
		var point;
		
		restartLoop:
		while (true) {
			var point = randomInsideCircle(bigCell.x,bigCell.y,bigCell.r/2);
			for (let c of bigCell.subCells){
				if (isPointInsideCircle(point.x,point.y,c.x,c.y,c.r/2)) {
					console.log("Inside circle");
					continue restartLoop;
				}
				//console.log(isPointInsideCircle(point.x,point.y,c.x,c.y,c.r));
			}

			var size = findSmallestDistance(bigCell.subCells,point,bigCell.r/10)*2;
			bigCell.subCells.push(new cell(point.x,point.y,size,zoomThresh));
			break;
		}
	}
}

mainCell = new cell(0,0,500,1);
generateCells(mainCell,300,4);
for(let c of mainCell.subCells){
	generateCells(c,300,7);
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // debug - show border
  p5.background(20,20,25);

  let local_ballx = p5.map(ballx,x1,x2,0,256);
  let local_bally = p5.map(bally,y1,y2,0,256);
  let local_ballx_edge = p5.map((ballx + ballr), x1, x2, 0, 256);
  let local_ballr = local_ballx_edge - local_ballx;
  let balla = p5.map(zoom,0,2,255,0);

  p5.fill(255,balla);
  p5.stroke(255);

   p5.noFill();
   p5.stroke(255)
   //p5.rect(0, 0, 255, 255);
   //p5.ellipse(127,127,127,127);
   //p5.text("" + x1 + "," + y1, 50,50);
   mainCell.draw(p5,x1,x2,y1,y2,zoom);
   //for(let c of cells){
   //		c.draw(p5,x1,x2,y1,y2)
   //}
}

function randomInsideCircle(x,y,radius){
	var pt_angle = Math.random() * 2 * Math.PI;
    var pt_radius_sq = Math.random() * radius * radius;
    var pt_x = x + Math.sqrt(pt_radius_sq) * Math.cos(pt_angle);
    var pt_y = y + Math.sqrt(pt_radius_sq) * Math.sin(pt_angle);
    return {x:pt_x,y:pt_y};
}

function isPointInsideCircle(pointX,pointY,circleX,circleY,circleR){
	var a = pointX - circleX;
	var b = pointY - circleY;
	var dist = Math.sqrt(a*a + b*b);
	if(dist < circleR) return true;
	else return false;
}

function findSmallestDistance(cellArray,point,maxCellSize){
	var smallestDist = Math.random()*maxCellSize;
	for(let c of cellArray){
		var a = point.x - c.x;
		var b = point.y - c.y;
		var dist = Math.sqrt(a*a + b*b)-(c.r/2);
		if(dist < smallestDist) smallestDist = dist;
	}
	return smallestDist;
}