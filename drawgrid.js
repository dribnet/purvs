var max_thickness = 64;
var max_movement = 32;
var ball_radius = 32;
var line_width = 8;
var grid_size = 64;

var resolution = 100; // how many points in the circle


function getOffsetPoint(p5, x, y, z, noiseScale) {
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function showCheck(p5, x, y, z, noiseScale) {
  var showLeaf = Math.floor(5*p5.noise(x * noiseScale, y * noiseScale, z+1));
 
  return (showLeaf)
}

function getRotation(p5, x, y, z, noiseScale) {
  var rot = 5*p5.noise(x * noiseScale, y * noiseScale, z+1);
 
  return (rot)
}

function colorPalette(p5, x, y, z, noiseScale) {
	var red = Math.floor(255*p5.noise(x * noiseScale, y * noiseScale, z+20));
  	var green = Math.floor(255*p5.noise(x * noiseScale, y * noiseScale, z+30));
  	var blue = Math.floor(255*p5.noise(x * noiseScale, y * noiseScale, z+40));
  	return [red, green, blue]
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
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

	var max_shift = max_thickness + max_movement;
  	var min_x = snap_to_grid(x1 - max_shift, grid_size);
  	var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  	var min_y = snap_to_grid(y1 - max_shift, grid_size);
  	var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  	var c_p00 = p5.map(0, x1, x2, 0, 350);
  	var c_pball = p5.map(ball_radius, x1, x2, 0, 350);

  	
  	p5.background(255);
  	p5.fill(0, 0, 128);
  	for(var x=min_x; x<max_x; x+=grid_size) {
    	for(var y=min_y; y<max_y; y+=grid_size) {   		
  
 			 LilypadSet(p5, x1, x2, y1, y2, z, zoom, c_pball - c_p00, x, y);
    		
   		}	
   	}
}


//pond object
function LilypadSet(p5, x1, x2, y1, y2, z, zoom, c_ball_radius, x, y){
  	//draw the leaf
  	this.drawLeaf = function(){
	p5.push();
	p5.translate(this.x_pos, this.y_pos);
	// p5.rotate(this.rotation);
	p5.fill(this.leafColor[0], this.leafColor[1], this.leafColor[2]);
	var rad = this.cur_ball_radius/2.5;

		p5.beginShape();
		for (var a=0; a<=p5.TWO_PI; a+=p5.TWO_PI/resolution) {
		
			var nVal = p5.map(p5.noise(p5.cos(a)*this.leafShape+1, p5.sin(a)*this.leafShape+1), 0.0, 1.0, 1.4, 1.0); 
			var Vertx = p5.cos(a)*rad *nVal;
			var Verty = p5.sin(a)*rad *nVal;


		//add lilypad inset
		if(a == 0){
			Vertx = 0;
			Verty = 0;
		} else if (a == p5.TWO_PI/resolution){
			Vertx = Vertx/2;
			Verty = Verty/2;
		}

		p5.vertex(Vertx, Verty);
		}
		p5.endShape(p5.CLOSE);
		p5.pop();
	};



	var shift_point = getOffsetPoint(p5, x, y, z, 0.4);

	var noiseScaleL = 1.0;
	this.show_leaf = showCheck(p5, x, y, z, 0.4);

		this.x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
  	this.y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
  	this.leafColor = colorPalette(p5, x, y, z, 0.4);
  	this.leafShape = 0.9; 
  	this.cur_ball_radius = c_ball_radius;

  	var rot = getRotation(p5, x1, y1, z+2, 0.1)
  	this.rotation = p5.map(rot, 0.4, 3.6, 0, 360);
  	console.log(this.rotation);

	p5.noStroke();



		if (this.show_leaf == 3 || this.show_leaf == 0){
			this.drawLeaf();
	
	}

}


