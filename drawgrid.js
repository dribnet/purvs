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
var GlobalDrawCalls = 1500;

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // temporary variables used for object placement
	let cx=0, cy=0, cx2=0, cy2=0;

	p5.background(0);
	p5.rectMode(p5.CORNERS);
	p5.noFill();
	
	p5.strokeWeight(0.9);
	GlobalDrawCalls = 1500

	if(zoom>=1){
		baseAlpha = 14;
	}else{
		baseAlpha = 11;
	}
	
	if(zoom>2){
  		p5.strokeWeight(zoom/2);
  		GlobalDrawCalls = 1500/zoom;
  		// baseAlpha += zoom*2;
	}

	// if (zoom>=3) {
	// 	p5.strokeWeight(2);
	// }

	DrawRegressiveCircle(p5, x1, x2, y1, y2, z, zoom);
	DrawCircle(p5, x1, x2, y1, y2, z, zoom, 1);
	DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 1, 2);
	DrawValleyVertical(p5, x1, x2, y1, y2, z, zoom, 2, 3);
	DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 2, 1);
	DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 1, 0.5);
	DrawValleyHorizontal(p5, x1, x2, y1, y2, z, zoom, 0.5, 0.25);
	if(zoom)
		console.log(zoom);
	

	// p5.bezier(b1, b2, b3, b4, b5, b6, b7, b8);  	
  }

	function DrawCircle (p5, x1, x2, y1, y2, z, zoom, magnitude) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		p5.stroke(204, 78, 206,baseAlpha);



	  	for(let i=0; i< GlobalDrawCalls*magnitude; i++) {
			let curz = i * 4;

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);
			var angle3 = p5.random(0, 2 * p5.PI);
			var angle4 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth1/2) + circleWidth1 * p5.cos(angle1);
			var ypos1 = circleWidth2 + circleWidth1 * p5.sin(angle1);
			var xpos2 = (circleWidth1/2) + circleWidth1 * p5.cos(angle2);
			var ypos2 = circleWidth2 + circleWidth1 * p5.sin(angle2)

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);
		}
	}

	function DrawValleyVertical (p5, x1, x2, y1, y2, z, zoom, width, magnitude) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		p5.stroke(204, 78, 206,baseAlpha);

	  	for(let i=0; i< GlobalDrawCalls*magnitude; i++) {
			let curz = i * 4;

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);
			var angle3 = p5.random(0, 2 * p5.PI);
			var angle4 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth1/2) + (circleWidth1*width) * p5.cos(angle1);
		    var ypos1 = circleWidth2 + circleWidth2 * p5.tan(angle1);
		    var xpos2 = (circleWidth1/2) + (circleWidth1*width) * p5.cos(angle2);
		    var ypos2 = circleWidth2 + circleWidth2 * p5.tan(angle2);

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);


		    // line(xpos1, ypos1 + globalYOffset, xpos2, ypos2 + globalYOffset);
		}
	}

	function DrawValleyHorizontal (p5, x1, x2, y1, y2, z, zoom, height, magnitude) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		p5.stroke(204, 78, 206,baseAlpha);

	  	for(let i=0; i< GlobalDrawCalls*magnitude; i++) {
			let curz = i * 4;

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);
			var angle3 = p5.random(0, 2 * p5.PI);
			var angle4 = p5.random(0, 2 * p5.PI);

			var xpos1 = (circleWidth1/2) + circleWidth1 * p5.tan(angle1);
		    var ypos1 = circleWidth2 + (circleWidth2*height)  * p5.cos(angle1);
		    var xpos2 = (circleWidth1/2) + circleWidth1 * p5.tan(angle2);
		    var ypos2 = circleWidth2 + (circleWidth2*height)  * p5.cos(angle2);

			var l1 = p5.map(xpos1 + (x/1.3), x1, x2, 0, 256);
			var l2 = p5.map(ypos1 + (y/1.3), y1, y2, 0, 256);
			var l3 = p5.map(xpos2 + (x/1.3), x1, x2, 0, 256);
			var l4 = p5.map(ypos2 + (y/1.3), y1, y2, 0, 256);

			p5.line(l1,l2,l3,l4);


		    // line(xpos1, ypos1 + globalYOffset, xpos2, ypos2 + globalYOffset);
		}
	}
	
	function DrawRegressiveCircle (p5, x1, x2, y1, y2, z, zoom, magnitude) {
		let x = 512;
		let y = 512;
		let noiseScale = 0.1;
		let alpha = 15;

	  	for(let i=0; i< 1000; i++) {
			let curz = i * 4;

			var angle1 = p5.random(0, 2 * p5.PI);
			var angle2 = p5.random(0, 2 * p5.PI);
			var angle3 = p5.random(0, 2 * p5.PI);
			var angle4 = p5.random(0, 2 * p5.PI);

			for (var j = 1; j < 4; j++) {
				//circle
			    p5.stroke(204, 78, 206,alpha/(j/2));
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
				p5.stroke(96, 200, 224, alpha/(j/1.5));
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

