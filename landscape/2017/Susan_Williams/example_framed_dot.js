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
 var zoom;
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
 this.zoom = zoom;
 p5.background(0);


 p = p5;

 x1 = tempX1;
 x2 = tempX2;
 y1 = tempY1;
 y2 =  tempY2;
  Math.seed = 0;

  p5.background(0);
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
  p5.fill(5,111,5);
  p5.rect(xCalc(x0+20),yCalc(y0-1+height/1.3), xCalc(x0+width-20), yCalc(y0+height-20));



      p.fill(0,200,0);
      //determines if zoomed enough to see
      if (zoom > 2 && zoom <5){

      	for (var a = 0; a <59;a++){
  	 for (var i = 0; i<613; i++){
  	 	var xpos = 20+x0+i*1.5;
  	 	var ypos = y0-1+height/1.3+a*2.5;
  	 	var n = p.noise(xpos, ypos);
  	 	if (n<0.6){
  	 		linePat(xpos, ypos, 1.25, 1.25);
  	 	}
  	 
      
  		}}


      }
      	

     
      else if(zoom >4){
    for (var a = 0; a <59;a++){
  	 for (var i = 0; i<613; i++){
  	 	var xpos = 20+x0+i*1.5;
  	 	var ypos = y0-1+height/1.3+a*2.5;
  	 	var n = p.noise(xpos, ypos);
  	 	if (n<0.4){
  	 		aPat(xpos, ypos, 1.25, 1.25);
  	 	}
  	 	else if (n< 0.6){
  	 		vPat(xpos, ypos, 1.25, 1.25);
  	 	}
 	}
      
  		}

  	}
	
  	 tree(x0+width/2, y0+50, height-111);
      border();
  
}

//draws a v pattern at given coordijates and dimensions
function vPat(x,y,w,h){
	p.fill(0,200,0);

	p.beginShape();
	p.vertex(xCalc(x),yCalc(y));
	p.vertex(xCalc(x+w/2), yCalc(y+h));
	p.vertex(xCalc(x+w),  yCalc(y));
	p.endShape();
}

//draws a line block pattern at given coordijates and dimensions
function linePat(x,y,w,h){
	p.fill(0,200,0);
	p.stroke(0,200,0);
	p.beginShape();
	p.vertex(xCalc(x-w/2),yCalc(y));
	p.vertex(xCalc(x+w/2+w), yCalc(y));
	p.vertex(xCalc(x+w/2+w),  yCalc(y+h));
	p.vertex(xCalc(x-w/2),  yCalc(y+h));
	p.vertex(xCalc(x-w/2),yCalc(y));
	p.endShape();
	p.stroke(0);
}

//draws an A pattern at given coordijates and dimensions
function aPat(x,y,w,h){
	p.fill(0,200,0);
	p.beginShape();
	p.vertex(xCalc(x),yCalc(y+h));
	p.vertex(xCalc(x+w/2), yCalc(y));
	p.vertex(xCalc(x+w),  yCalc(y+h));
	p.endShape();
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
//draws a leaf centered on lx and ly and with a width of wid
function leaf2(lx, ly, wid, rot){
	p.angleMode(p.DEGREES);
	p.push();
	//p.translate(xCalc(lx),yCalc(ly));
	//p.rotate(-11);
	var h = wid/2;
	p.beginShape();
	//left hand point
	//left control point, about to go upwards
	
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

	p.noFill();
	if(zoom>5){
	p.beginShape();
	p.vertex(xCalc(lx), yCalc(ly));
	p.vertex(xCalc(lx+wid), yCalc(ly));
	p.endShape();
	}
	if (zoom>3 && wid>50){
		leaf2(lx,ly,wid/1.5,2);
	}
	if (zoom>5&&wid>20){
		leaf2(lx,ly,wid/2,2);
	}

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
	p.fill(145,94,2);
	p.beginShape();
	//top right edge of the trunk, hidden behind rightmost branch
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
	canopy(x-wid/10, yt, width, h/2.2, 100);
	




	
}

//draws a canopy of leaves at can x and can y with a canopy width of wid, 
// canopy height of h and leaf widtjh of lwid
function canopy(canx, cany, wid, h, lwid){
	p.fill(10,110,4);
	var divNum = 20;
	var spacing  = wid/divNum;
	var layers = 4;
	var yspace = h/layers;
	for(var i = 0; i<layers+1; i++){
		for(var a = 0; a<divNum+1; a++){
			var n = p.noise(canx+spacing*a, cany+ yspace*i,10);
			var n2 = p.noise(canx+spacing*a, cany+ yspace*i,20);
		var n3 =p.noise(canx+spacing*a, cany+ yspace*i,30);
		leaf2(canx+wid/2.5+n*(wid/1.5), cany+ h*n2, 10+n3*90, 10);
		n = p.noise(canx+spacing*a, cany+ yspace*i);
		leaf2(canx+wid/1.5-n*(wid/1.2), cany+ h*n2, 10+n3*90, 40);

		}
	}

}
	
	
// draws a border pattern around the image at top and bottom
function border(){
	p.fill(200,0,0);


	var divNum = width/2.5;
	if(zoom>2){


// draws the top border background pattern
	for(var i = 0; i<9; i++){
		for(var a = 0; a<divNum+1; a++){
		leaf(x0+2.5*a, y0+ 2.5*i, 5, 11);
		}
	}

	// draws the bottom border background pattern
	for(var i = 0; i<9; i++){
		for(var a = divNum; a>0; a--){
		leaf(x0+2.5*a, y0+height- 2.5*i, 5, 11);
		}
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
