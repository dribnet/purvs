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
let randomStarValues;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

function layer2(p5, x,y, x1, x2, y1, y2, centre_x, centre_y, radius){
	//draw spiral
	drawSpirals(p5, centre_x, centre_y, radius);
	
}


function layer3(p5, x,y, x1, x2, y1, y2, centre_x, centre_y, radius){
	//draw planets
	drawPlanets(p5, centre_x, centre_y, radius);
	
}


function layer1(p5, x,y, x1, x2, y1, y2, centre_x, centre_y, radius){
	//draw stars
	drawStars(p5, x, y, radius, x1, x2, y1, y2);
	//draw lighter spiral
	//drawSpirals(p5, centre_x, centre_y, radius);
	//draw planets
	//drawPlanets(p5, centre_x, centre_y, radius);
	
	
}


function drawStars(p5, x, y, radius, x1, x2, y1, y2){
	let centre_x = p5.map(x, x1, x2, -128, 128);
	let centre_y = p5.map(y, y1, y2, -128, 128);
	//stars
	starList = [];
	//draw stars random distance from sun
	for(i = 0; i <30; i+=3){
		newStar = new Star(centre_x+randomStarValues[i], 
		centre_y+randomStarValues[i+1], randomStarValues[i+2]);
		starList[i] = newStar;
	}
	for(star = 0; star < starList.length; star+=3){
		let s = starList[star];
		//draw colour behind it
		p5.fill(p5.map(s.colour, 0, 255, 50, 255), 0, p5.random(s.colour, 255), 1);
		p5.ellipse(s.xPos, s.yPos, starSize*5);
		for(i = 0; i <30; i++){
			p5.ellipse(p5.random(s.xPos-2*radius, s.xPos+2*radius), p5.random(s.yPos-2*radius, s.yPos+2*radius), starSize*10);
		}
		p5.noStroke();
		var starSize = p5.map(s.colour, 0, 255, radius/7, radius/3);
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
	
}


function drawSpirals(p5, centre_x, centre_y, radius){
	let angle = 0;
	let r = 0;
	let spin = 0.04;
	let grow = spin * radius/4;
	for(count = 0; count <400; count+=2){
		angle += spin;
		r += grow;
		p5.noStroke();
		p5.fill(70+p5.random(-30, 30), 0, 100+p5.random(-30, 30), p5.map(count, 0, 300, 250, 0));
		let new_x = centre_x + p5.cos(angle+4)*r*3;
		let new_y = centre_y + p5.sin(angle+4)*r*3;	
		p5.ellipse(new_x, new_y, radius/5, radius/5);
		new_x = centre_x + p5.cos(angle+2)*r*3;
		new_y = centre_y + p5.sin(angle+2)*r*3;	
		p5.ellipse(new_x, new_y, radius/5, radius/5);
		new_x = centre_x + p5.cos(angle)*r*3;
		new_y = centre_y + p5.sin(angle)*r*3;	
		p5.ellipse(new_x, new_y, radius/5, radius/5);
		for(i = 0; i < 2; i++){
			let new_x = centre_x + p5.cos(angle)*r*3 + p5.random(-radius/4, radius/4);
			let new_y = centre_y + p5.sin(angle)*r*3 + p5.random(-radius/4, radius/4);	
			p5.ellipse(new_x, new_y, radius/7, radius/7);
			new_x = centre_x + p5.cos(angle+4)*r*3 + p5.random(-radius/4, radius/4);
			new_y = centre_y + p5.sin(angle+4)*r*3 + p5.random(-radius/4, radius/4);	
			p5.ellipse(new_x, new_y, radius/7, radius/7);
			new_x = centre_x + p5.cos(angle+2)*r*3 + p5.random(-radius/4, radius/4);
			new_y = centre_y + p5.sin(angle+2)*r*3 + p5.random(-radius/4, radius/4);	
			p5.ellipse(new_x, new_y, radius/7, radius/7);
		}
	}
	//draw star
	p5.fill(255, 255, 255, 6);
	for(i = 0; i <20; i++){
		p5.ellipse(centre_x, centre_y, radius-i*6, radius-i*6);
	}
}


function drawPlanets(p5, centre_x, centre_y, radius){
	let angle = 0;
	let r = 0;
	let spin = 0.1;
	let grow = spin * radius/4;
	for(count = 0; count <400; count+=2){
		angle += spin;
		r += grow;
		p5.noStroke();
		p5.fill(70+p5.random(-30, 30), 0, 100+p5.random(-30, 30), p5.map(count, 0, 300, 40, 0));
		let new_x = centre_x + p5.cos(angle)*r*3 + p5.random(-radius/4, radius/4);
		let new_y = centre_y + p5.sin(angle)*r*3 + p5.random(-radius/4, radius/4);	
		p5.ellipse(new_x, new_y, radius/2, radius/2);
		new_x = centre_x + p5.cos(angle+4)*r*3 + p5.random(-radius/4, radius/4);
		new_y = centre_y + p5.sin(angle+4)*r*3 + p5.random(-radius/4, radius/4);	
		p5.ellipse(new_x, new_y, radius/2, radius/2);
		new_x = centre_x + p5.cos(angle+2)*r*3 + p5.random(-radius/4, radius/4);
		new_y = centre_y + p5.sin(angle+2)*r*3 + p5.random(-radius/4, radius/4);	
		p5.ellipse(new_x, new_y, radius/2, radius/2);
		if((count%2)==0&&count<200){
			//draw mini solar system
			var starSize = radius/40;
			var starThickness = starSize/8;
			p5.fill(255);
			p5.beginShape();
			p5.vertex(new_x-starSize, new_y);
			p5.bezierVertex(new_x-starThickness, new_y-starThickness, new_x-starThickness, new_y-starThickness, new_x, new_y-starSize);
			p5.bezierVertex(new_x+starThickness, new_y-starThickness, new_x+starThickness, new_y-starThickness, new_x+starSize, new_y);
			p5.bezierVertex(new_x+starThickness, new_y+starThickness, new_x+starThickness, new_y+starThickness, new_x, new_y+starSize);
			p5.bezierVertex(new_x-starThickness, new_y-starThickness, new_x-starThickness, new_y+starThickness, new_x-starSize, new_y);
			p5.endShape();   
			new_x = centre_x + p5.cos(angle+4)*r*3 + p5.random(-radius/4, radius/4);
			new_y = centre_y + p5.sin(angle+4)*r*3 + p5.random(-radius/4, radius/4);
			p5.beginShape();
			p5.vertex(new_x-starSize, new_y);
			p5.bezierVertex(new_x-starThickness, new_y-starThickness, new_x-starThickness, new_y-starThickness, new_x, new_y-starSize);
			p5.bezierVertex(new_x+starThickness, new_y-starThickness, new_x+starThickness, new_y-starThickness, new_x+starSize, new_y);
			p5.bezierVertex(new_x+starThickness, new_y+starThickness, new_x+starThickness, new_y+starThickness, new_x, new_y+starSize);
			p5.bezierVertex(new_x-starThickness, new_y-starThickness, new_x-starThickness, new_y+starThickness, new_x-starSize, new_y);
			p5.endShape();   
			new_x = centre_x + p5.cos(angle)*r*3 + p5.random(-radius/4, radius/4);
			new_y = centre_y + p5.sin(angle)*r*3 + p5.random(-radius/4, radius/4);	
			p5.beginShape();
			p5.vertex(new_x-starSize, new_y);
			p5.bezierVertex(new_x-starThickness, new_y-starThickness, new_x-starThickness, new_y-starThickness, new_x, new_y-starSize);
			p5.bezierVertex(new_x+starThickness, new_y-starThickness, new_x+starThickness, new_y-starThickness, new_x+starSize, new_y);
			p5.bezierVertex(new_x+starThickness, new_y+starThickness, new_x+starThickness, new_y+starThickness, new_x, new_y+starSize);
			p5.bezierVertex(new_x-starThickness, new_y-starThickness, new_x-starThickness, new_y+starThickness, new_x-starSize, new_y);
			p5.endShape();   
		}
	}
	p5.fill(255, 255, 255, 1);
	for(i = 0; i < 255; i++){
		p5.ellipse(centre_x, centre_y, radius/10+i/2, radius/10+i/2);
	}
	p5.fill(255, 255, 255, 10);
	for(i = 0; i < 80; i++){
		p5.fill(255, 255, 255, 40-i*2);
		p5.ellipse(centre_x, centre_y, radius/3+i*3, radius/3+i*3);
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


// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	p5.background(0, 0, 5);

	let max_shift = max_thickness;

	let min_x = snap_to_grid(x1 - max_shift, grid_size);
  	let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  	let min_y = snap_to_grid(y1 - max_shift, grid_size);
  	let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

	let radius = p5.map(20, x1, x2, 0, 256) - p5.map(0, x1, x2, 0, 256);
	//get random values to draw stars
	//stars
	randomStarValues = [];
	//draw stars random distance from sun
	for(i = 0; i <30; i+=3){
		randomStarValues[i] = p5.random(-5*radius,5*radius);
		randomStarValues[i+1] = p5.random(-5*radius, 5*radius);
		randomStarValues[i+2] = p5.random(0, 255);
	}
	
	
	for(let x=min_x; x<max_x; x+=grid_size) {
    	for(let y=min_y; y<max_y; y+=grid_size) {
			let centre_x = p5.map(x, x1, x2, 0, 256);
			let centre_y = p5.map(y, y1, y2, 0, 256);

			if(zoom <1){
				layer1(p5, x,y, x1, x2, y1, y2, centre_x, centre_y, radius);
			}
			else if(zoom < 3){
				layer2(p5, x,y, x1, x2, y1, y2, centre_x, centre_y, radius);
			}
			else{
				layer3(p5, x,y, x1, x2, y1, y2, centre_x, centre_y, radius);
			}
		}		
	}
}
