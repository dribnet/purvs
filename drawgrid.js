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
// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
var max_thickness = 64;
var max_movement = 150;
var grid_size = 64;

function snap_to_grid(num, gsize) {
	return (num - (num % gsize));
}

function getOffsetPoint(p5, x, y, z, noiseScale) {
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	p5.background(25, 25, 50);
	p5.noStroke();
	p5.noiseSeed(99);
	var max_shift = max_thickness + max_movement;
	var min_x = snap_to_grid(x1 - max_shift, grid_size);
	var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
	var min_y = snap_to_grid(y1 - max_shift, grid_size);
	var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

	for (var i = min_x; i < max_x; i+=grid_size) {
		for (var j = min_y; j<max_y; j+=grid_size) {

			var shift_point = getOffsetPoint(p5, i, j, z, .1);
			var posX = shift_point[0] ;
			var posY = shift_point[1] ;
			var noiseVal = p5.noise(posX / 100, posY / 100);
			drawLanscape(noiseVal, posX, posY);
		}
	}
	//inner function
	
	/*This function will transfer the value current position and size to the value of map position and size */
	function getDrawPosition(posX, posY, sizeX, sizeY) {
		var cx = p5.map(posX, x1, x2, 0, 256);
		var cy = p5.map(posY, y1, y2, 0, 256);
		var cx2 = p5.map(posX + sizeX, x1, x2, 0, 256);
		var cy2 = p5.map(posY + sizeY, y1, y2, 0, 256);
		return [cx, cy, cx2 - cx, cy2 - cy]
	}

	function drawLanscape(v, posX, posY) {
		var size = v * 15;
		
		/* Drawing Clouds
		 * The "negative space" (dark blue) will be drawn if v is greater than 0.35
		 * When the zoom parameter is greater than 3, a smooth drawing will be used but the render will be much slower.
		 * If the less v is, the darker negative space will be drawn, black is possible but rare.
		 */
		
		if (v < .2) {} else if (v < .5) { 
			var pos = getDrawPosition(posX, posY, size * (1 - v) * 70, size *(1-v) *70);
			
			if(zoom < 2) {
				v > .35 ? p5.fill(20, 20, 40 * p5.map(v,.35,.5,1,.5), 10) : p5.fill(90, 90, 100, 10);
				for(var i = 1; i < 5; i += .5)
					p5.ellipse(pos[0], pos[1],pos[2]/i, pos[3]/i);
				
			}
			else{
				v > .35 ? p5.fill(20, 20, 40 * p5.map(v,.35,.5,1,.5), 10) : p5.fill(120, 120, 140, 10);
				for(var i = 1; i < 4; i += .1)
					p5.ellipse(pos[0], pos[1],pos[2]/i, pos[3]/i);
			}
			

		} else if (v < 0.6) { //stars
			var scale = p5.map(v,.5,.6,.5,1);
			size *= scale;
			
			/*The shape of stars will become rounder as zoom in and stars will become circles after zoom in two times*/
			var shape = 1;
			zoom > 1 ? shape = p5.sqrt(6) : shape = zoom + 1;
			
			var pos = getDrawPosition(posX, posY,  size / 6 * shape, size / shape);
			
			if(zoom < 2){
				p5.fill(255, 255, 200, 5);
				for(var i = pos[3] * 5; i > pos[3]; i -= pos[3])
			        p5.ellipse(pos[0], pos[1], i, i);
				
			}
			else if (zoom < 4){
				p5.fill(255, 255, 230, 10);
				for(var i = pos[3] * 5; i > pos[3]; i -= pos[3]/2){
			        p5.ellipse(pos[0], pos[1], i, i);
				}
			}
			else {
				p5.fill(255, 255, 255, 15);
				for(var i = pos[3] * 5; i > pos[3]; i -= pos[3]/4){
			        p5.ellipse(pos[0], pos[1], i, i);
				}
			}
			
			
			
			p5.fill(255, 255, 150);
			p5.ellipse(pos[0], pos[1], pos[2], pos[3]);
			p5.ellipse(pos[0], pos[1], pos[3], pos[2]);

		} else if (v < .8) {

		} else if (v < .85) {
			var meteorLengthX, meteorLengthY;
			meteorLengthX = size * 1.5 / 2;
			meteorLengthY = -size * 1.5 / 2;
			p5.stroke(255, 255, 180);
			p5.strokeWeight(zoom/2 + 1);
			var pos = getDrawPosition(posX - meteorLengthX, posY - meteorLengthY, 0, 0);
			var pos2 = getDrawPosition(posX + meteorLengthX, posY + meteorLengthY, 0, 0);
			p5.line(pos[0], pos[1], pos2[0], pos2[1]);
			p5.noStroke();
		}
	}
}
