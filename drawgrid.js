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
var max_movement = 90;
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
	//console.log(y1, y2);
	p5.background(10, 10, 30);
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
	function getDrawPosition(posX, posY, sizeX, sizeY) {
		var cx = p5.map(posX, x1, x2, 0, 256);
		var cy = p5.map(posY, y1, y2, 0, 256);
		var cx2 = p5.map(posX + sizeX, x1, x2, 0, 256);
		var cy2 = p5.map(posY + sizeY, y1, y2, 0, 256);
		return [cx, cy, cx2 - cx, cy2 - cy]
	}

	function drawLanscape(v, posX, posY) {
		var size = v * 15;
		if (v < 0.4) {} else if (v < .5) { //clouds
			p5.fill(40, 40, 60, 20);
			var pos = getDrawPosition(posX, posY, size * (1 - v) * 70, size *(1-v) *70);
			if(zoom < 3) {
				for(var i = 1; i < 5; i +=.5){
					p5.ellipse(pos[0], pos[1], pos[2]/i, pos[3]/i);
				}
			}

		} else if (v < 0.6) {
			var color1 = p5.color(40, 40, 60);
			var color2 = p5.color(255, 255, 150);
			var c = p5.lerpColor(color1, color2, p5.map(v, 0.5, 0.6, 0, 1));
			p5.fill(c);
			var bokehSize = size * p5.map(v, 0.5, 0.6, 1, .2);
			var pos = getDrawPosition(posX, posY, bokehSize, bokehSize);
			p5.ellipse(pos[0], pos[1], pos[2], pos[3]);

		} else if (v < 0.7) { //stars
			p5.fill(255, 255, 150);
			var pos = getDrawPosition(posX, posY, size / 6, size);
			p5.ellipse(pos[0], pos[1], pos[2], pos[3]);
			p5.ellipse(pos[0], pos[1], pos[3], pos[2]);

		} else if (v < .8) {

		} else if (v < .9) {
			var meteorLengthX, meteorLengthY;
			p5.random(0, 1) < .5 ? meteorLengthX = -p5.random(size, size * 1.5) / 2 : meteorLengthX = p5.random(size, size * 1.5) / 2;
			p5.random(0, 1) < .5 ? meteorLengthY = -p5.random(size, size * 1.5) / 2 : meteorLengthY = p5.random(size, size * 1.5) / 2;
			p5.stroke(255, 255, 180);
			p5.strokeWeight(2);
			var pos = getDrawPosition(posX - meteorLengthX, posY - meteorLengthY, 0, 0);
			var pos2 = getDrawPosition(posX + meteorLengthX, posY + meteorLengthY, 0, 0);
			p5.line(pos[0], pos[1], pos2[0], pos2[1]);
			p5.noStroke();
		}
	}
}
