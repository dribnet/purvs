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
 var width = 960;
 var height = 720;
var x0 =512-width/2;
var y0 = 512 - height/2;
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
 currentRandom = Math.floor(p.noise(0,0, 60)*100);
 resetFocusedRandom(curRandomSeed);
 x1 = tempX1;
 x2 = tempX2;
 y1 = tempY1;
 y2 =  tempY2;
  console.log(y1, y2);
  p5.background(255);
  p5.rectMode(p5.CORNERS);

  // The first red rectangle fills the entire space
  var cx = p5.map(x0, x1, x2, 0, 256);
  var cy = p5.map(y0, y1, y2, 0, 256);
  var cx2 = p5.map(width, x1, x2, 0, 256);
  var cy2 = p5.map(height, y1, y2, 0, 256);
  p5.fill(255, 0, 0);
  p5.rect(cx, cy, cx2, cy2);

  // The second black rectangle is inset to form a frame inset by 20 units
  cx = p5.map(512-940/2, x1, x2, 0, 256);
  cy = p5.map(512-700/2, y1, y2, 0, 256);
  cx2 = p5.map(512+940/2, x1, x2, 0, 256);
  cy2 = p5.map(512+700/2, y1, y2, 0, 256);
  p5.fill(0);
  p5.rect(cx, cy, cx2, cy2);

  // Two ellipses with a radius of 50 units are then added.
  var cx = p5.map(200, x1, x2, 0, 256);
  var cy = p5.map(200, y1, y2, 0, 256);
  var cx2 = p5.map(200+300, x1, x2, 0, 256);
  p5.fill(0, 0, 255);
  p5.ellipse(cx, cy, (cx2-cx));
  for (var a = 0; a <5;a++){

   for (var i = 0; i<height/20; i++){
  var cx =xCalc(x0+a*20);
  var cy = yCalc(y0+i*20);
  var noiseX = p5.noise(a,
                        i, 10);
  var cx2 = p5.map(0+50*noiseX, x1, x2, 0, 256);
  p5.fill(0, 255, 0);
  p5.ellipse(cx, cy, (cx2-cx));
   }
 }
  // The second green ellipse is above and to the left of the first one.
  var cx = p5.map(0, x1, x2, 0, 256);
  var cy = p5.map(412, y1, y2, 0, 256);
  var noiseX = p5.noise(0,
                        412, 10);
  var cx2 = p5.map(0+50*noiseX, x1, x2, 0, 256);
  p5.fill(0, 255, 0);
  p5.ellipse(cx, cy, (cx2-cx));

    // The second green ellipse is above and to the left of the first one.
  var cx = p5.map(100, x1, x2, 0, 256);
  var cy = p5.map(412, y1, y2, 0, 256);
  var noiseX = p5.noise(100,
                        412, 100);
  var cx2 = p5.map(100+50*noiseX, x1, x2, 0, 256);
  p5.fill(0, 255, 0);
  p5.ellipse(cx, cy, (cx2-cx));
}
//this.skyWash = function(xMin, yMin, xMax, yMax){
////sets a color with a lerp value based on random number one, and an opacity based on random number two	
//p5.noFill();
//strokeWeight(p5.noise(100,100,50));
//
//for (this.i = 0; this.i<511; this.i++){
	//var col = p5.lerpColor(p5.color(sky1[0],sky1[1],sky1[2],p5.noise(44,44,20)*200), p5.color(sky2[0],sky2[1],sky2[2],p5.noise(33,33,60)*200, p5.noise(23,23,80));
	//p5.stroke(this.col);
	//p5.beginShape();
	//var randX = focusedRandom(xMin+20, xMax-20,2);
	//var randY = focusedRandom(yMin+5,yMax-5);
	//p5.vertex(-15+this.randX+focusedRandom(-20,10),this.randY+focusedRandom(-7,7));
	//vertex(this.randX+focusedRandom(-4,3),this.randY+focusedRandom(-7,7));
	//vertex(15+this.randX+focusedRandom(-10,20),this.randY+focusedRandom(-7,7));
	//endShape();
//}
//}
//takes the x coordinate to be mapped and returns the new value
function xCalc(val){
return p.map(val, x1, x2, 0, 256);
}
//takes the y coordinate to be mapped and returns the new value
function yCalc(val){
	currentRandom = Math.floor(p.noise(0,0, 60)*100);
return p.map(val, y1, y2, 0, 256);
}
