/*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
 //global variables
 //the width and height of the drawing area
 var width = 960;
 var height = 720;
 //the zero point of the canvas
var x0 =512-width/2;
var y0 = 512 - height/2;
//holders for the position coordinates
var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;
//holds the p5 object so that it is available globally
var p;

//colours
var sky1 = [202,206,222];
	var sky2 = [156,14,5];
	var sky3=[134,97,118];
	var sky4 = [196,33,36];
	var curRandomSeed;
// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, tempX1, tempX2, tempY1, tempY2, z, zoom) {
 //create global variables


 p = p5;
 //var currentRandom = Math.floor(p.noise(0,0, 60)*100);
 //Math.seededrandom(4);
 x1 = tempX1;
 x2 = tempX2;
 y1 = tempY1;
 y2 =  tempY2;
  Math.seed = 0;
  console.log(Math.random());
  p5.background(255);
  p5.rectMode(p5.CORNERS);

  // The first red rectangle fills the entire space
  var cx = p5.map(x0, x1, x2, 0, 256);
  var cy = p5.map(y0, y1, y2, 0, 256);
  var cx2 = p5.map(x0+width, x1, x2, 0, 256);
  var cy2 = p5.map(y0+height, y1, y2, 0, 256);
  p5.fill(255, 0, 0);
  p5.rect(cx, cy, cx2, cy2);

  // The second dark blue rectangle is inset to form a frame inset by 20 units
  cx = p5.map(x0+20, x1, x2, 0, 256);
  cy = p5.map(y0+20, y1, y2, 0, 256);
  cx2 = p5.map(x0+width-20, x1, x2, 0, 256);
  cy2 = p5.map(y0+height-20, y1, y2, 0, 256);
  p5.fill(30,1, 150);
  p5.rect(cx, cy, cx2, cy2);

  // Two ellipses with a radius of 50 units are then added.
  // var cx = p5.map(x0+width, x1, x2, 0, 256);
  // var cy = p5.map(200, y1, y2, 0, 256);
  // var cx2 = p5.map(200+300, x1, x2, 0, 256);
  // p5.fill(0, 0, 255);
  // p5.ellipse(cx, cy, (cx2-cx));
  // var dep = 10;
  //loops arround making the green ellipses
  // for (var a = 0; a <5;a++){
  	// for (var i = 0; i<height/20; i++){
  		// var cx =xCalc(x0+width/2);
  		// var cy = yCalc(y0+20);
  		// var noiseX = p5.noise(a, i, dep);
  		// var cx2 = p5.map(0+4, x1, x2, 0, 256);
  		// p5.fill(0, 255, 0);
  		// p5.ellipse(cx, cy, (cx2-cx));
  		// dep = dep + 10;
  	// }
  // }

  tree(x0+width, y0+20, height-40);
    tree(x0+width/2, y0+20, height-40);
      tree(x0+width/4, y0+20, height-40);
      leaf(x0+width/2, y0+width/2, 100, 11);
  //p.ellipseMode(p.CORNERS);		
  cx2 = p5.map(50, x1, x2, 0, 256);
 //p.ellipse(xCalc(x0+width/2),yCalc(y0+height/2),cx2,cx2 );
}


//draws a leaf centered on lx and ly and with a width of wid
function leaf(lx, ly, wid, rot){
	p.angleMode(p.DEGREES);
	p.push();
	//p.translate(xCalc(lx),yCalc(ly));
	//p.rotate(-11);
	var h = wid/2;
	p.beginShape();
	//left hand point
	//left control point, about to go upwards
	p.fill(222,0,0);
	p.curveVertex(xCalc(lx-wid/1.7), yCalc(ly+h/2));
	p.curveVertex(xCalc(lx-wid/2), yCalc(ly));
	p.curveVertex(xCalc(lx), yCalc(ly-h/2));
	p.curveVertex(xCalc(lx+wid/2), yCalc(ly));
	p.curveVertex(xCalc(lx+wid*1.7), yCalc(ly+h/2));
	p.endShape();

	p.beginShape();
	p.curveVertex(xCalc(lx-wid/1.7), yCalc(ly-h/2));
	p.curveVertex(xCalc(lx-wid/2), yCalc(ly));
	p.curveVertex(xCalc(lx), yCalc(ly+h/2));
	p.curveVertex(xCalc(lx+wid/2), yCalc(ly));
	p.curveVertex(xCalc(lx+wid*1.7), yCalc(ly-h/2));
	p.endShape();
	p.pop();

}
//draws a tree
//draws from centre top
function tree(centreX, yt, h){
	var halfW = h/1.5;
	var x = centreX-halfW;
	var wid = halfW*2;
 /*bottom righthand half of the tree, has to be behind, so gets drawn first*/
	var offset = 0;
	p.beginShape();
	//top right edge off the trunk, hidden behind rightmost branch
	p.curveVertex(xCalc(x+wid/2+wid/6), yCalc(yt+h/3.4));
	p.vertex(xCalc(x+wid/2+wid/7), yCalc(yt+h/2.7));
	p.vertex(xCalc(x+wid/2+wid/6), yCalc(yt+h-h/8));
	//reset the offset positive
	//upper control point
	p.vertex(xCalc(x+wid/2+wid/4), yCalc(yt+h-h/10-offset));
	//righthand root tip
	p.vertex(xCalc(x+wid/2+wid/2.5),yCalc( yt+h));
	//lower controlPoint
	p.vertex(xCalc(x+wid/2+wid/4), yCalc(yt+h-h/40-offset));
	//midpoint between roots
	p.vertex(xCalc(x+wid/2+wid/9), yCalc(yt+h-h/13));
	p.vertex(xCalc(x+wid/2), yCalc(yt+h-h/10));
	p.vertex(xCalc(x+wid/1.8), yCalc(yt+h/2));
	p.vertex(xCalc(x+wid/1.8), yCalc(yt+h/1.8));

	p.endShape();
/*main treetrunk including all branches*/
	p.beginShape();
	//handle centre bottom of tree
	p.curveVertex(xCalc(x+wid/2+wid/9), yCalc(yt+h-h/13));
	//lefthand dip between roots
	p.vertex(xCalc(x+wid/2+wid/20), yCalc(yt+h-h/14));

	//reset offset equation one
	//reset offset
	//lower right control point
	p.vertex(xCalc(x+wid/2.2), yCalc(yt+h-h/18-offset));
	//lower left control point
	p.vertex(xCalc(x+wid/2.8), yCalc(yt+h-h/18-offset));
	//lefthand root tip
	p.vertex(xCalc(x+wid/4),yCalc(yt+h-h/20));
	//upper left control point
	p.vertex(xCalc(x+wid/2.8), yCalc(yt+h-h/10- offset));
	//reset offset equation one again
	//upper right control point
	p.vertex(xCalc(x+wid/2.2), yCalc(yt+h-h/10-offset));

	//bottom end of trunk
	p.vertex(xCalc(x+wid/2), yCalc(yt+h-h/5));
	
	//top end of main trunk
	p.vertex(xCalc(x+wid/2),yCalc(yt+h/2));
	p.vertex(xCalc(x+wid/2-wid/22), yCalc(yt+h/2.6));
	//reset offset
	//lower control point
	p.vertex(xCalc(x+wid/4),  yCalc(yt+h/3-offset));
	//tip of left branch
	p.vertex(xCalc(x), yCalc( yt+h/6));
	//upper control point
	p.vertex(xCalc(x+wid/4),  yCalc(yt+h/4-offset));
	//back to main trunk
	p.vertex(xCalc(x+wid/2+wid/15), yCalc(yt+h/3.4));
	//reset offset
	//left control point
	p.vertex(xCalc(x+wid/2+wid/9-offset), yCalc(yt+h/5));
	//middle branch tip
	p.vertex(xCalc(x+wid/2+wid/5), yCalc(yt+h/10));
	//right control point
	p.vertex(xCalc(x+wid/2+wid/6-offset), yCalc(yt+h/5));
	//middle right dip between branches
	p.vertex(xCalc(x+wid/2+wid/7), yCalc(yt+h/2.7));
	//reset offset
	//upper control point
	p.vertex( xCalc(x+wid/2+wid/5), yCalc(yt+h/2.8-offset));
	//righthand branch tip
	p.vertex( xCalc(x+wid/2+wid/3), yCalc(yt+h/3.5));
	//lower control point
	p.vertex( xCalc(x+wid/2+wid/5), yCalc(yt+h/2.4-offset));
	//righthandbranch meets trunk and forms knot
	p.vertex(xCalc(x+wid/2+wid/10), yCalc(yt+h/2.2));
	//visible mid trunk line endpoint
	p.vertex(xCalc(x+wid/2+wid/10.5), yCalc(yt+h/1.7));
	p.endShape();


	/* draws the leaves */
	canopy(x, yt, width, h/5, 100);
	




	
}

//draws a canopy of leaves at can x and can y with a canopy width of wid, 
// canopy height of h and leaf widtjh of lwid
function canopy(canx, cany, wid, h, lwid){
	leaf(canx+wid/2, cany, 100, 11);
	var divNum = 20;
	var spacing  = wid/divNum;
	var layers = 4;
	var yspace = h/layers;
	for(var i = 0; i<layers+1; i++){
		for(var a = 0; a<divNum+1; a++){
		leaf(canx+spacing*a, cany+ yspace*i, 100, 11);
		}
	}

}
	
	

//takes the x coordinate to be mapped and returns the new value

function xCalc(val){
	return p.map(val, x1, x2, 0, 256);
}
//takes the y coordinate to be mapped and returns the new value
function yCalc(val){
	return p.map(val, y1, y2, 0, 256);
}
