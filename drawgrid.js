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
const max_thickness = 256;
const grid_size = 256;
const max_movement = 16;
let starList;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

function solarSystem(p5, x, y, x1, x2, y1, y2){
	let centre_x = p5.map(x, x1, x2, 0, 256);
	let centre_y = p5.map(y, y1, y2, 0, 256);

	let radius = p5.map(20, x1, x2, 0, 256) - p5.map(0, x1, x2, 0, 256);
	//stars
	starList = [];
	//draw stars random distance from sun
	for(i = 0; i <100; i++){
		newStar = new Star(p5.random(centre_x-x1,centre_x+x2), 
		p5.random(centre_y-y1, centre_y+y2), 
		p5.random(0, 255));
		starList[i] = newStar;
	}
	var starSize = radius/5;
	var boundary = 40;
	for(star = 0; star < starList.length; star++){
		let s = starList[star];
		p5.noStroke();
		s.starThickness = starSize/8;
		p5.fill(255, s.colour);
		p5.beginShape();
		p5.vertex(s.xPos-starSize, s.yPos);
		p5.bezierVertex(s.xPos-s.starThickness, s.yPos-s.starThickness, s.xPos-s.starThickness, s.yPos-s.starThickness, s.xPos, s.yPos-starSize);
		p5.bezierVertex(s.xPos+s.starThickness, s.yPos-s.starThickness, s.xPos+s.starThickness, s.yPos-s.starThickness, s.xPos+starSize, s.yPos);
		p5.bezierVertex(s.xPos+s.starThickness, s.yPos+s.starThickness, s.xPos+s.starThickness, s.yPos+s.starThickness, s.xPos, s.yPos+starSize);
		p5.bezierVertex(s.xPos-s.starThickness, s.yPos-s.starThickness, s.xPos-s.starThickness, s.yPos+s.starThickness, s.xPos-starSize, s.yPos);
		p5.endShape();   
	}

	let angle = 0;
	let r = radius/2;
	let spin = 0.1;
	let grow = spin * radius/2;
	for(count = 0; count <300; count+=3){
		angle += spin;
		r += grow;
		p5.noStroke();
		p5.fill(15+p5.map(count, 0, 300, 200, 0), 0, 5+p5.map(count, 0, 300, 250, 0));
		let new_x = centre_x + p5.cos(angle)*r;
		let new_y = centre_y + p5.sin(angle)*r;	
		p5.ellipse(new_x, new_y, radius, radius);
	}
	


}

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function Star(x, y, c) {
	this.xPos = x;
	this.yPos = y;
	this.colour = c;
	this.starThickness = 2;
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	p5.background(15, 0, 5);

	let max_shift = max_thickness;

	let min_x = snap_to_grid(x1 - max_shift, grid_size);
  	let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  	let min_y = snap_to_grid(y1 - max_shift, grid_size);
  	let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


	for(let x=min_x; x<max_x; x+=grid_size) {
    	for(let y=min_y; y<max_y; y+=grid_size) {
			solarSystem(p5, x,y, x1, x2, y1, y2);
		}		
	}
}

