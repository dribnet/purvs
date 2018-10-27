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

// var circleWidth1 = 400;
// var circleWidth2 = 200;
// var circleWidth3 = 100;

var circleWidth1 = 400/2;
var circleWidth2 = 200/2;
var circleWidth3 = 100/2;
var baseAlpha = 11;
var maxDrawCalls = 1500;
var DrawsPerFrame = 15;
var GlobalDrawCalls = maxDrawCalls/DrawsPerFrame;
var ZoomLevel = 0;
var toggleZoom = true;
let do_animation = true;
var t;
var t2;
var Frames;
var gradientOn = false;
var doOnce = true;
var maxMagnitude = 1;
var pulse = false;
var firstpass = false;

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	// console.log(t);



	if(p5.globalFrameCount!=t){
		Frames++;
		t=p5.globalFrameCount;
		console.log(Frames);
	}

	if(Frames>GlobalDrawCalls*maxMagnitude&&!pulse){
		Frames=0;
		gradientOn = true;
		console.log("gradientOn true");
		pulse = true;
	}

	if(Frames<20&&doOnce){
		p5.background(0,0,0);
	}else{
		doOnce=false;
	}

	if(gradientOn&&pulse){
		p5.background(0,0,0,10);
		
		if(Frames==50){
			console.log("gradientOn false");
			Frames = 0;
			gradientOn = false;
			firstpass = true;
		}
	}else if(firstpass&&!gradientOn&&pulse){
		
		if(Frames==100){
			gradientOn=true;
			console.log("gradientOn true");
			Frames = 0;
		}
			
	}

	
  	
	// t = t + Frames;
  	
 	// temporary variables used for object placement
	let cx=0, cy=0, cx2=0, cy2=0;

	// p5.background(0);
	p5.rectMode(p5.CORNERS);
	p5.noFill();
	
	var moveVert = 200;
	var moveHoriz = 200;
	for (var i = 1; i <= DrawsPerFrame; i++) {
		if (!zoom){
			p5.strokeWeight(0.9);
			// p5.strokeWeight(20);
			maxMagnitude = 2;
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 3, 1, "purple");
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 2, 2, 1, "purple");
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 2, 1, 1, "purple");
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 1, 1, 1, "purple");			
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 1, "purple");
			DrawRegressiveCircle(p5, x1, x2, y1, y2, z, zoom, 1);
			// DrawCircleAnimate(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 1, "purple");


		}else if(zoom == 1){
			// GlobalDrawCalls = 1;
			moveVert = 150;
			moveHoriz = 150;
			// let xoffsetR = 50;
			// let xoffsetL = 47;
			// let yoffset = 18;
			p5.strokeWeight(1.1);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 2, 1, "purple");
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 2, 3, 1, "purple");
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 2, 1, "purple");
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 2, 3, 1, "purple");
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 2, 1, 1, "purple");
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 1, 1, 1, "purple");
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 1, "purple");
			DrawRegressiveCircle(p5, x1, x2, y1, y2, z, zoom, 1);
			// DrawEllipseTall(p5, x1, x2, y1+moveVert, y2+moveVert, z, zoom, 1, 4, "black");
			// DrawEllipseTall(p5, x1+xoffsetR, x2+xoffsetR, y1+moveVert-yoffset, y2+moveVert-yoffset, z, zoom, 1, 6, "black");
			// DrawEllipseTall(p5, x1-xoffsetL, x2-xoffsetL, y1+moveVert-yoffset, y2+moveVert-yoffset, z, zoom, 1, 6, "black");
			// DrawEllipseTall(p5, x1, x2, y1-moveVert, y2-moveVert, z, zoom, 1, 4, "black");
			// DrawEllipseTall(p5, x1+xoffsetR, x2+xoffsetR, y1-moveVert+yoffset, y2-moveVert+yoffset, z, zoom, 1, 6, "black");
			// DrawEllipseTall(p5, x1-xoffsetL, x2-xoffsetL, y1-moveVert+yoffset, y2-moveVert+yoffset, z, zoom, 1, 6, "black");
			// DrawEllipseWide(p5, x1+moveHoriz, x2+moveHoriz, y1, y2, z, zoom, 1, 4, "black");
			// DrawEllipseWide(p5, x1+moveHoriz-yoffset, x2+moveHoriz-yoffset, y1+xoffsetR, y2+xoffsetR, z, zoom, 1, 6, "black");
			// DrawEllipseWide(p5, x1+moveHoriz-yoffset, x2+moveHoriz-yoffset, y1-xoffsetL, y2-xoffsetL, z, zoom, 1, 6, "black");
			// DrawEllipseWide(p5, x1-moveHoriz, x2-moveHoriz, y1, y2, z, zoom, 1, 4, "black");

			maxMagnitude = 2;

		}else if(zoom == 2){
			// do_animation = false;
			moveVert = 60;
			moveHoriz = 60;
			p5.strokeWeight(2.5);
			DrawBezierCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.2, 2, "purple");
			DrawEllipseTall(p5, x1, x2, y1+0, y2+0, z, zoom, 1.2, 2, "cyan");
			DrawEllipseWide(p5, x1, x2, y1+0, y2+0, z, zoom, 1.2, 2, "cyan");
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.6, 2.5, "black");
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.6, 3, "black");
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.4, 6, "black");
			DrawCircle(p5, x1+moveHoriz, x2+moveHoriz, y1+moveVert, y2+moveVert, z, zoom, 1, 15, "black");
			DrawCircle(p5, x1-moveHoriz, x2-moveHoriz, y1+moveVert, y2+moveVert, z, zoom, 1, 15, "black");
			DrawCircle(p5, x1+moveHoriz, x2+moveHoriz, y1-moveVert, y2-moveVert, z, zoom, 1, 15, "black");
			DrawCircle(p5, x1-moveHoriz, x2-moveHoriz, y1-moveVert, y2-moveVert, z, zoom, 1, 15, "black");
			maxMagnitude = 3;
		}else if(zoom == 3){
			p5.strokeWeight(3.5);
			moveVert = 34;
			moveHoriz = 34;

			// DrawBezierCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.4, 2, "purple");
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 2, "purple");
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, .5, 1.5, 9, "purple");
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 1, 1.5, 9, "purple");		
			DrawEllipseTall(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 2, "cyan");
			DrawEllipseWide(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 2, "cyan");
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 2, 3, "black");
			DrawBezierCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 2, 6, "black");
			DrawCircle(p5, x1+moveHoriz, x2+moveHoriz, y1+moveVert, y2+moveVert, z, zoom, 1, 18, "black");
			DrawCircle(p5, x1-moveHoriz, x2-moveHoriz, y1+moveVert, y2+moveVert, z, zoom, 1, 18, "black");
			DrawCircle(p5, x1+moveHoriz, x2+moveHoriz, y1-moveVert, y2-moveVert, z, zoom, 1, 18, "black");
			DrawCircle(p5, x1-moveHoriz, x2-moveHoriz, y1-moveVert, y2-moveVert, z, zoom, 1, 18, "black");
			

		}else if(zoom == 4){

		}else if(zoom == 5){

		}else if(zoom == 6){

		}
	}
	

	if(zoom){
		if(zoom!=ZoomLevel){
			Frames = 0;
			doOnce = true;
			ZoomLevel = zoom;
			console.log("ZoomLevel "+ ZoomLevel);
			// p5.background(0);
		}	
		toggleZoom = true;	
	}else if(!zoom&&toggleZoom){
		Frames = 0;
		doOnce = true;
		ZoomLevel = 0;
		toggleZoom = false;
	 	console.log("ZoomLevel "+0);
	 	// p5.background(0);
	}
	

	// p5.bezier(b1, b2, b3, b4, b5, b6, b7, b8);  	
  }


	function DrawCircle (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		// p5.stroke(204, 78, 206,baseAlpha);
		
		if(colour=="purple"){
			p5.stroke(204, 78, 206,baseAlpha);
			
		}else if(colour=="cyan"){
			p5.stroke(96, 200, 224, baseAlpha);
		}else if(colour=="black"){
			p5.stroke(0, 0, 0, baseAlpha);
		}
	  	if (Frames<(GlobalDrawCalls*magnitude)){
			

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth2) + (circleWidth1/scale) * p5.cos(angle1);
			var ypos1 = circleWidth2 + (circleWidth1/scale) * p5.sin(angle1);
			var xpos2 = (circleWidth2) + (circleWidth1/scale) * p5.cos(angle2);
			var ypos2 = circleWidth2 + (circleWidth1/scale) * p5.sin(angle2)

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);
		}
	}

	function DrawEllipseTall (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		// p5.stroke(204, 78, 206,baseAlpha);
		if(colour=="purple"){
			p5.stroke(204, 78, 206,baseAlpha);
			
		}else if(colour=="cyan"){
			p5.stroke(96, 200, 224, baseAlpha);
		}else if(colour=="black"){
			p5.stroke(0, 0, 0, baseAlpha);
		}
	  	if (Frames<(GlobalDrawCalls*magnitude)){
			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth2) + (circleWidth2/scale) * p5.cos(angle1);
			var ypos1 = circleWidth2 + (circleWidth1/scale) * p5.sin(angle1);
			var xpos2 = (circleWidth2) + (circleWidth2/scale) * p5.cos(angle2);
			var ypos2 = circleWidth2 + (circleWidth1/scale) * p5.sin(angle2)

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);
		}
	}

	function DrawEllipseWide (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		// p5.stroke(204, 78, 206,baseAlpha);
		if(colour=="purple"){
			p5.stroke(204, 78, 206,baseAlpha);
			
		}else if(colour=="cyan"){
			p5.stroke(96, 200, 224, baseAlpha);
		}else if(colour=="black"){
			p5.stroke(0, 0, 0, baseAlpha);
		}
	  	if (Frames<(GlobalDrawCalls*magnitude)){

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth2) + (circleWidth1/scale) * p5.cos(angle1);
			var ypos1 = circleWidth2 + (circleWidth2/scale) * p5.sin(angle1);
			var xpos2 = (circleWidth2) + (circleWidth1/scale) * p5.cos(angle2);
			var ypos2 = circleWidth2 + (circleWidth2/scale) * p5.sin(angle2)

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);
		}
	}

	function DrawBezierCircle (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		// p5.stroke(204, 78, 206,baseAlpha);
		if(colour=="purple"){
			p5.stroke(204, 78, 206,baseAlpha);
			
		}else if(colour=="cyan"){
			p5.stroke(96, 200, 224, baseAlpha);
		}else if(colour=="black"){
			p5.stroke(0, 0, 0, baseAlpha);
		}
	  	if (Frames<(GlobalDrawCalls*magnitude)){

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);
			var angle3 = p5.random(0, 2 * p5.PI);
			var angle4 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth1/2) + (circleWidth1/scale) * p5.cos(angle1);
			var ypos1 = circleWidth2 + (circleWidth1/scale) * p5.sin(angle1);
			var xpos2 = (circleWidth1/2) + (circleWidth1/scale) * p5.cos(angle2);
			var ypos2 = circleWidth2 + (circleWidth1/scale) * p5.sin(angle2)
			var xpos3 = (circleWidth1/2) + ((circleWidth1/scale)*2) * p5.cos(angle3);
			var ypos3 = circleWidth2 + ((circleWidth1/scale)*2) * p5.sin(angle3);
			var xpos4 = (circleWidth1/2) + ((circleWidth1/scale)*2) * p5.cos(angle4);
			var ypos4 = circleWidth2 + ((circleWidth1/scale)*2) * p5.sin(angle4)

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);
			var b1 = p5.map(xpos3 + (x/1.3), x1, x2, 0, 256);
			var b2 = p5.map(ypos3 + (y/1.3), y1, y2, 0, 256);
			var b3 = p5.map(xpos4 + (x/1.3), x1, x2, 0, 256);
			var b4 = p5.map(ypos4 + (y/1.3), y1, y2, 0, 256);

			p5.bezier(l1,l2,b1,b2,b3,b4,l3,l4);
		}
	}

	function DrawValleyVertical (p5, x1, x2, y1, y2, z, zoom, width, magnitude, scale, colour) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		if(colour=="purple"){
			p5.stroke(204, 78, 206,baseAlpha);
			
		}else if(colour=="cyan"){
			p5.stroke(96, 200, 224, baseAlpha);
		}else if(colour=="black"){
			p5.stroke(0, 0, 0, baseAlpha);
		}
	  	if (Frames<(GlobalDrawCalls*magnitude)){

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth1/2) + ((circleWidth1/scale)*width) * p5.cos(angle1);
		    var ypos1 = circleWidth2 + (circleWidth2/scale) * p5.tan(angle1);
		    var xpos2 = (circleWidth1/2) + ((circleWidth1/scale)*width) * p5.cos(angle2);
		    var ypos2 = circleWidth2 + (circleWidth2/scale) * p5.tan(angle2);

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);


		    // line(xpos1, ypos1 + globalYOffset, xpos2, ypos2 + globalYOffset);
		}
	}

	function DrawValleyHorizontal (p5, x1, x2, y1, y2, z, zoom, height, magnitude, scale, colour) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		if(colour=="purple"){
			p5.stroke(204, 78, 206,baseAlpha);
			
		}else if(colour=="cyan"){
			p5.stroke(96, 200, 224, baseAlpha);
		}else if(colour=="black"){
			p5.stroke(0, 0, 0, baseAlpha);
		}
	  	if (Frames<(GlobalDrawCalls*magnitude)){
	  		// console.log("DrawValleyHorizontal")
			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth1/2) + (circleWidth1/scale) * p5.tan(angle1);
		    var ypos1 = circleWidth2 + ((circleWidth2/scale)*height)  * p5.cos(angle1);
		    var xpos2 = (circleWidth1/2) + (circleWidth1/scale) * p5.tan(angle2);
		    var ypos2 = circleWidth2 + ((circleWidth2/scale)*height)  * p5.cos(angle2);

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);


		    // line(xpos1, ypos1 + globalYOffset, xpos2, ypos2 + globalYOffset);
		}
	}
	
	function DrawRegressiveCircle (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		let alpha = 7;

	  	if (Frames<(GlobalDrawCalls*magnitude)){

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);

			for (var j = 1; j < 3; j++) {
				//circle
			    // p5.stroke(204, 78, 206,alpha/(j/2));
				p5.stroke(96, 200, 224, alpha/(j/2));
				var xpos1 = circleWidth1 + (circleWidth2 / j) * p5.cos(angle1);
				var ypos1 = circleWidth2 + (circleWidth2 / j) * p5.sin(angle1);
				var xpos2 = circleWidth1 + (circleWidth2 / j) * p5.cos(angle2);
				var ypos2 = circleWidth2 + (circleWidth2 / j) * p5.sin(angle2);
				var l1 = p5.map(xpos1 + (x/1.75), x1, x2, 0, 256);
				var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
				var l3 = p5.map(xpos2 + (x/1.75), x1, x2, 0, 256);
				var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);
				p5.line(l1,l2,l3,l4);
				//ellipse wide
				p5.stroke(96, 200, 224, alpha/(j/2));
				var xpos1 = circleWidth1 + (circleWidth1 / j) * p5.cos(angle1);
				var ypos1 = circleWidth2 + (circleWidth2 / j) * p5.sin(angle1);
				var xpos2 = circleWidth1 + (circleWidth1 / j) * p5.cos(angle2);
				var ypos2 = circleWidth2 + (circleWidth2 / j) * p5.sin(angle2);
				var l1 = p5.map(xpos1 + (x/1.75), x1, x2, 0, 256);
				var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
				var l3 = p5.map(xpos2 + (x/1.75), x1, x2, 0, 256);
				var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);
				p5.line(l1,l2,l3,l4);
				//ellipse tall
				var xpos1 = circleWidth1 + (circleWidth2 / j) * p5.cos(angle1);
				var ypos1 = circleWidth2 + (circleWidth1 / j) * p5.sin(angle1);
				var xpos2 = circleWidth1 + (circleWidth2 / j) * p5.cos(angle2);
				var ypos2 = circleWidth2 + (circleWidth1 / j) * p5.sin(angle2);
				var l1 = p5.map(xpos1 + (x/1.75), x1, x2, 0, 256);
				var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
				var l3 = p5.map(xpos2 + (x/1.75), x1, x2, 0, 256);
				var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);
				p5.line(l1,l2,l3,l4);
    		}


		}
	}



      //regressive loop
	


  // The first red rectangle fills the entire space
  // cx = p5.map(512-960/2, x1, x2, 0, 256);
  // cy = p5.map(512-720/2, y1, y2, 0, 256);
  // cx2 = p5.map(512+960/2, x1, x2, 0, 256);
  // cy2 = p5.map(512+720/2, y1, y2, 0, 256);
  // p5.fill(255, 0, 0);
  // p5.rect(cx, cy, cx2, cy2);

  // // The second black rectangle is inset to form a frame inset by 20 units
  // cx = p5.map(512-940/2, x1, x2, 0, 256);
  // cy = p5.map(512-700/2, y1, y2, 0, 256);
  // cx2 = p5.map(512+940/2, x1, x2, 0, 256);
  // cy2 = p5.map(512+700/2, y1, y2, 0, 256);
  // p5.fill(0);
  // p5.rect(cx, cy, cx2, cy2);

  // // Two ellipses with a radius of 50 units are then added.
  // cx = p5.map(512, x1, x2, 0, 256);
  // cy = p5.map(512, y1, y2, 0, 256);
  // cx2 = p5.map(512+50, x1, x2, 0, 256);
  // p5.fill(0, 0, 255);
  // p5.ellipse(cx, cy, (cx2-cx));

  // // The second green ellipse is above and to the left of the first one.
  // cx = p5.map(412, x1, x2, 0, 256);
  // cy = p5.map(412, y1, y2, 0, 256);
  // cx2 = p5.map(412+50, x1, x2, 0, 256);
  // p5.fill(0, 255, 0);
  // p5.ellipse(cx, cy, (cx2-cx));

  // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);

