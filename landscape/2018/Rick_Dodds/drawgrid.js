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

  [1, 512, 512],
  [2, 500, 500],
  [3, 495, 495],
  [4, 495, 495],
  [5, 495, 495],
  [0, 512, 512]
]


var circleWidth1 = 400/2;
var circleWidth2 = 200/2;
var circleWidth3 = 100/2;
var MoverScaleMax = 10;
var MoverScaleMin = 2;
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
var sinIncrement;
var cosIncrement; 
var FastGamma = 0.0;// Start angle at 0
var NormalGamma = 0.0;// Start angle at 0
var SlowGamma = 0.0;
var amplitude = 400.0; // Height of wave

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

	if(p5.globalFrameCount!=t){
		Frames++;
		FastGamma += .08;
		NormalGamma +=.04;
		SlowGamma +=.01;
		t=p5.globalFrameCount;
	}

	if(Frames>GlobalDrawCalls*maxMagnitude&&!pulse){
		Frames=0;
		gradientOn = true;
		pulse = true;
	}

	if(Frames<20&&doOnce){
		p5.background(0,0,0);
	}else{
		doOnce=false;
	}

	if(gradientOn&&pulse){
		p5.background(0,0,0,9);	
		if(Frames==50){
			Frames = 0;
			gradientOn = false;
			firstpass = true;
		}
	}else if(firstpass&&!gradientOn&&pulse){
		
		if(Frames==100){
			gradientOn=true;
			Frames = 0;
		}
			
	}

	
	p5.rectMode(p5.CORNERS);
	p5.noFill();
	
	var moveVert = 200;
	var moveHoriz = 200;

	//zoom level 0
	for (var i = 1; i <= DrawsPerFrame; i++) {
		if (!zoom){
			p5.strokeWeight(0.9);
			maxMagnitude = 2;
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 3, 1, "purple",true, 3, false, 100, true);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 2, 3, 1, "purple",true, 3, false, 50, true);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 4, 3, 1.1, "purple",true, 3, false, 150, true);
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 2, 1, 1, "purple", true, 0, false, 0, true);
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 3, 1, 1, "purple", true, 0, false, 0, true);			
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 1, "purple", true, 0, "", false, 0);
			DrawRegressiveCircle(p5, x1, x2, y1, y2, z, zoom, 1,1);

			//zoom level 1
		}else if(zoom == 1){

			moveVert = 150;
			moveHoriz = 150;
			p5.strokeWeight(1.1);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 2, 1, "purple", true, 2, true, 0, false);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 2, 3, 1, "purple", true, 2, true, 180, false);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 2, 1, "purple", true, 0, false, 0, false);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 2, 3, 1, "purple", true, 0, false, 0, false);
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 2, 1, 1, "purple",true, 2, true, 0);
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 1, 1, 1, "purple",true, 2, true, 180);
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 1, "purple", true, 0, "", false, 0);
			DrawRegressiveCircle(p5, x1, x2, y1, y2, z, zoom, 1,1);

			maxMagnitude = 2;

			//zoom level 2
		}else if(zoom == 2){

			moveVert = 60;
			moveHoriz = 60;
			p5.strokeWeight(2.5);
			DrawBezierCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.2, 2, "purple", true, 5, "Slow", false, 0);
			DrawEllipseTall(p5, x1, x2, y1+0, y2+0, z, zoom, 1.2, 2, "cyan", true, 2, "", true, 0);
			DrawEllipseWide(p5, x1, x2, y1+0, y2+0, z, zoom, 1.2, 2, "cyan", true, 2, "", true, 0);
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.6, 2.5, "black", true, 3, "", false, 0);
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.6, 3, "black", true, 3, "", false, 0);
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1.4, 6, "black", true, 3, "", false, 0);
			DrawCircle(p5, x1+moveHoriz, x2+moveHoriz, y1+moveVert, y2+moveVert, z, zoom, 1, 15, "black", true, 0, "", false, 0);
			DrawCircle(p5, x1-moveHoriz, x2-moveHoriz, y1+moveVert, y2+moveVert, z, zoom, 1, 15, "black", true, 0, "", false, 0);
			DrawCircle(p5, x1+moveHoriz, x2+moveHoriz, y1-moveVert, y2-moveVert, z, zoom, 1, 15, "black", true, 0, "", false, 0);
			DrawCircle(p5, x1-moveHoriz, x2-moveHoriz, y1-moveVert, y2-moveVert, z, zoom, 1, 15, "black", true, 0, "", false, 0);
			maxMagnitude = 3;
			
			//zoom level 3 & 4
		}else if(zoom <= 4){
			p5.strokeWeight(3.2);
			moveVert = 34;
			moveHoriz = 34;
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 2, "purple", true, 1, "", false, 0);
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 22, "purple", true, 5, "", false, 0);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 1.5, 9, "purple", true, 6, true, 0, true);
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 1, 1.5, 9, "purple", true, 6, true, 0, true);		
			DrawEllipseTall(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 2, "cyan", true, 4, "Slow" ,true,0);
			DrawEllipseWide(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 2, "cyan", true, 4, "Slow" ,true,0);
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 2, 3, "black",true,3, "", false, 0);
			DrawBezierCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 2, 6, "black",true,3, "", false, 0);

			
			//zoom level 5
		} else if(zoom == 5){
			moveHoriz = 1.25;
			DrawCircle(p5, x1, x2, y1+0, y2+0, z, zoom, 1, 22, "purple", true, 10, "slow", false, 0);
			DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 1.5, 9, "purple", true, 6, true, 0, true);
			DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 1, 1.5, 9, "purple", true, 6, true, 0, true);	
			DrawRegressiveCircle(p5, x1-moveHoriz, x2-moveHoriz, y1, y2, z, zoom, 1, 22);
		}
	}
	

	if(zoom){
		if(zoom!=ZoomLevel){
			Frames = 0;
			doOnce = true;
			ZoomLevel = zoom;
			console.log("ZoomLevel "+ ZoomLevel);
		}	
		toggleZoom = true;	
	}else if(!zoom&&toggleZoom){
		Frames = 0;
		doOnce = true;
		ZoomLevel = 0;
		toggleZoom = false;
	 	console.log("ZoomLevel "+0);
	}
	 	
  }

  	function DrawMover(p5, x1, x2, y1, y2, z, zoom,scale, type1,type2,offset, gammaChoice, invert, HardOffset){
		let x = 512;
		let y = 512;

		switch(gammaChoice){
			    case "Slow":
        			var moverIterator = SlowGamma+offset+HardOffset;
        			break;
			    case "Fast":
        			var moverIterator = FastGamma+offset+HardOffset;
        			break;
        		default:
        			var moverIterator = NormalGamma+offset+HardOffset;
		}
		
	 	let currentScale = p5.map(p5.cos(moverIterator), -1,1,MoverScaleMin,MoverScaleMax);
		let c1 = (circleWidth2) + (type1/scale) * p5.sin(moverIterator*invert);
		let c2 = (circleWidth2) + (type2/scale) * p5.cos(moverIterator);
		
		var cx = p5.map(c1 + (x/1.3), x1, x2, 0, 256);
		var cy = p5.map(c2 + (y/1.3), y1, y2, 0, 256);

		p5.ellipse(cx,cy,currentScale/scale,currentScale/scale);

  	}




	function DrawCircle (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour, DrawMov, NumberOfMovs, gammaChoice, invertOn, HardOffset) {
		let x = 512;
		let y = 512;
		
		
		
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
			
			// console.log((circleWidth2) + (circleWidth1/scale) * p5.cos(1));

			
			var xpos1 = (circleWidth2) + (circleWidth1/scale) * p5.cos(angle1);
			var ypos1 = circleWidth2 + (circleWidth1/scale) * p5.sin(angle1);
			var xpos2 = (circleWidth2) + (circleWidth1/scale) * p5.cos(angle2);
			var ypos2 = circleWidth2 + (circleWidth1/scale) * p5.sin(angle2)

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);
			
			if(DrawMov){
				let j = 1;
				for (var i = 0; i < NumberOfMovs; i++) {
					DrawMover(p5, x1, x2, y1, y2, z, zoom, scale, circleWidth1,circleWidth1, i*5, gammaChoice, j, HardOffset);
					if(invertOn)
						j *= -1;
				}	
			}
		}
	}

	function DrawEllipseTall (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour, DrawMov, NumberOfMovs, gammaChoice, invertOn, HardOffset) {
		let x = 512;
		let y = 512;
		
		
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

			if(DrawMov){
				let j = 1;
				for (var i = 0; i < NumberOfMovs; i++) {
					DrawMover(p5, x1, x2, y1, y2, z, zoom, scale, circleWidth1,circleWidth2, i*5, gammaChoice, j, HardOffset);
					if(invertOn)
						j *= -1;
				}	
			}
		}
	}

	function DrawEllipseWide (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour, DrawMov, NumberOfMovs, gammaChoice, invertOn, HardOffset) {
		let x = 512;
		let y = 512;
		
		
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
			
			if(DrawMov){
				let j = 1;
				for (var i = 0; i < NumberOfMovs; i++) {
					DrawMover(p5, x1, x2, y1, y2, z, zoom, scale, circleWidth2,circleWidth1, i*5, gammaChoice, j, HardOffset);
					if(invertOn)
						j *= -1;
				}	
			}
		}
	}

	function DrawBezierCircle (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour, DrawMov, NumberOfMovs, gammaChoice, invertOn, HardOffset) {
		let x = 512;
		let y = 512;
		
		
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

			if(DrawMov){
				let j = 1;
				for (var i = 0; i < NumberOfMovs; i++) {
					DrawMover(p5, x1, x2, y1, y2, z, zoom, scale, circleWidth1,circleWidth1, i*5, gammaChoice, j, HardOffset);
					if(invertOn)
						j *= -1;
				}	
			}
		}
	}

  	function DrawVerticalValleyMover(p5, x1, x2, y1, y2, z, zoom,width, scale, type1,type2,offset, invert, HardOffset){
		let x = 512;
		let y = 512;
		var moverIterator = SlowGamma+offset+HardOffset;
		
		let currentScale = p5.map(p5.cos(moverIterator), -1,1,MoverScaleMax,MoverScaleMin);

		let c1 = (circleWidth2) + ((type1/scale)*width) * p5.cos(moverIterator);
		let c2 = (circleWidth2) + (type2/scale) * p5.tan(moverIterator)*invert;
		
		var cx = p5.map(c1 + (x/1.3), x1, x2, 0, 256);
		var cy = p5.map(c2 + (y/1.3), y1, y2, 0, 256);

		p5.ellipse(cx,cy,currentScale/scale,currentScale/scale);

  	}

	function DrawValleyVertical (p5, x1, x2, y1, y2, z, zoom, width, magnitude, scale, colour, DrawMov, NumberOfMovs, invertOn, HardOffset,funkOn) {
		let x = 512;
		let y = 512;
		
		
		if(funkOn){
			var funk = circleWidth2;
		}else{
			var funk = circleWidth1
		}

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

			var xpos1 = (circleWidth2) + ((circleWidth2/scale)*width) * p5.cos(angle1);
		    var ypos1 = circleWidth2 + (funk/scale) * p5.tan(angle1);
		    var xpos2 = (circleWidth2) + ((circleWidth2/scale)*width) * p5.cos(angle2);
		    var ypos2 = circleWidth2 + (funk/scale) * p5.tan(angle2);

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);

			if(DrawMov){
				let j = 1;
				for (var i = 0; i < NumberOfMovs; i++) {
					if (invertOn)
						j*=-1; 
					DrawVerticalValleyMover(p5, x1, x2, y1, y2, z, zoom, width, scale, circleWidth2,funk, i*15,j, HardOffset);
				}			
			}
		}
	}

  	function DrawHorizontalValleyMover(p5, x1, x2, y1, y2, z, zoom, height, scale, type1,type2,offset,invert, HardOffset){
		let x = 512;
		let y = 512;
		var moverIterator = SlowGamma+offset+HardOffset;

		let currentScale = p5.map(p5.sin(moverIterator), -1,1,MoverScaleMin,MoverScaleMax);
		let c1 = (circleWidth2) + (type1/scale) * p5.tan(moverIterator)*invert;
		let c2 = (circleWidth2) + ((type2/scale)*height)* p5.cos(moverIterator);
		
		var cx = p5.map(c1 + (x/1.3), x1, x2, 0, 256);
		var cy = p5.map(c2 + (y/1.3), y1, y2, 0, 256);

		p5.ellipse(cx,cy,currentScale/scale,currentScale/scale);

  	}

	function DrawValleyHorizontal (p5, x1, x2, y1, y2, z, zoom, height, magnitude, scale, colour, DrawMov, NumberOfMovs, invertOn, HardOffset, funkOn) {
		let x = 512;
		let y = 512;
		

		if(funkOn){
			var funk = circleWidth2;
		}else{
			var funk = circleWidth1
		}

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

			var xpos1 = (circleWidth2) + (funk/scale) * p5.tan(angle1);
		    var ypos1 = circleWidth2 + ((circleWidth2/scale)*height)  * p5.cos(angle1);
		    var xpos2 = (circleWidth2) + (funk/scale) * p5.tan(angle2);
		    var ypos2 = circleWidth2 + ((circleWidth2/scale)*height)  * p5.cos(angle2);

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);

			if(DrawMov){
				let j = 1;
				for (var i = 0; i < NumberOfMovs; i++) {
					if (invertOn)
						j*=-1; 
					DrawHorizontalValleyMover(p5, x1, x2, y1, y2, z, zoom, height, scale, funk,circleWidth2, i*5, j, HardOffset);
				}			
			}
		}
	}
	
	function DrawRegressiveCircle (p5, x1, x2, y1, y2, z, zoom, magnitude, scale, colour) {
		let x = 512;
		let y = 512;
		
		let alpha = 7;

	  	if (Frames<(GlobalDrawCalls*magnitude)){

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);

			for (var j = 1; j < 3; j++) {
				//circle
				p5.stroke(96, 200, 224, alpha/(j/2));
				var xpos1 = circleWidth1 + ((circleWidth2 / j)/scale) * p5.cos(angle1);
				var ypos1 = circleWidth2 + ((circleWidth2 / j)/scale) * p5.sin(angle1);
				var xpos2 = circleWidth1 + ((circleWidth2 / j)/scale) * p5.cos(angle2);
				var ypos2 = circleWidth2 + ((circleWidth2 / j)/scale) * p5.sin(angle2);
				var l1 = p5.map(xpos1 + (x/1.75), x1, x2, 0, 256);
				var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
				var l3 = p5.map(xpos2 + (x/1.75), x1, x2, 0, 256);
				var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);
				p5.line(l1,l2,l3,l4);
				//ellipse wide
				p5.stroke(96, 200, 224, alpha/(j/2));
				var xpos1 = circleWidth1 + ((circleWidth1 / j)/scale) * p5.cos(angle1);
				var ypos1 = circleWidth2 + ((circleWidth2 / j)/scale) * p5.sin(angle1);
				var xpos2 = circleWidth1 + ((circleWidth1 / j)/scale) * p5.cos(angle2);
				var ypos2 = circleWidth2 + ((circleWidth2 / j)/scale) * p5.sin(angle2);
				var l1 = p5.map(xpos1 + (x/1.75), x1, x2, 0, 256);
				var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
				var l3 = p5.map(xpos2 + (x/1.75), x1, x2, 0, 256);
				var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);
				p5.line(l1,l2,l3,l4);
				//ellipse tall
				var xpos1 = circleWidth1 + ((circleWidth2 / j)/scale) * p5.cos(angle1);
				var ypos1 = circleWidth2 + ((circleWidth1 / j)/scale) * p5.sin(angle1);
				var xpos2 = circleWidth1 + ((circleWidth2 / j)/scale) * p5.cos(angle2);
				var ypos2 = circleWidth2 + ((circleWidth1 / j)/scale) * p5.sin(angle2);
				var l1 = p5.map(xpos1 + (x/1.75), x1, x2, 0, 256);
				var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
				var l3 = p5.map(xpos2 + (x/1.75), x1, x2, 0, 256);
				var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);
				p5.line(l1,l2,l3,l4);
    		}


		}
	}





