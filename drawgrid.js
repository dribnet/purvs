const max_thickness = 44;
const max_movement = 50;
const ball_radius = 32;
const line_width = 8;
const grid_size = 65;
let do_animation = false;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 1000, 512],
  [1, 900, 512],
  [3, 275, 1050]
]

function layer1(p5, radius, centre_x, centre_y, z){
	let xPos = centre_x;
	let yPos = centre_y;
	let colour = p5.random(50, 255);
	var starSize = p5.map(colour, 0, 255, radius/9, radius/6);
	//draw colour behind it
	p5.fill(p5.map(colour, 0, 255, 50, 200), 0, p5.random(colour, 255), 3);
	p5.ellipse(xPos, yPos, starSize*5);
	for(i = 0; i <10; i++){
		p5.ellipse(p5.random(xPos-radius, xPos+radius/2), p5.random(yPos-radius/2, yPos+radius), starSize*9);
	}
	p5.noStroke();
	let starThickness = starSize/8;
	p5.fill(255, colour);
	p5.beginShape();
	p5.vertex(xPos-starSize, yPos);
	p5.bezierVertex(xPos-starThickness, yPos-starThickness, xPos-starThickness, yPos-starThickness, xPos, yPos-starSize);
	p5.bezierVertex(xPos+starThickness, yPos-starThickness, xPos+starThickness, yPos-starThickness, xPos+starSize, yPos);
	p5.bezierVertex(xPos+starThickness, yPos+starThickness, xPos+starThickness, yPos+starThickness, xPos, yPos+starSize);
	p5.bezierVertex(xPos-starThickness, yPos-starThickness, xPos-starThickness, yPos+starThickness, xPos-starSize, yPos);
	p5.endShape();   
	
}


function layer2(p5, centre_x, centre_y, radius){
	let fifthRadius = radius/20;
	let quarterRadius = radius/10;
	let ellipseSize = radius/13;
	let angle = 0;
	let r = 0;
	let spin = 0.2;
	let grow = 0.05 * radius/4;
	for(count = 0; count <35; count+=2){
		angle += spin;
		let twoAngle = angle + 2;
		let fourAngle = angle + 4;
		r += grow;
		let scalar = r*3;
		p5.noStroke();
		p5.fill(70+p5.random(-10, 10), 0, 100+p5.random(-10, 10), p5.map(count, 0, 300, 50, 0));
		let new_x = centre_x + p5.cos(fourAngle)*scalar;
		let new_y = centre_y + p5.sin(fourAngle)*scalar;	
		p5.ellipse(new_x, new_y, fifthRadius, fifthRadius);
		new_x = centre_x + p5.cos(twoAngle)*scalar;
		new_y = centre_y + p5.sin(twoAngle)*scalar;	
		p5.ellipse(new_x, new_y, fifthRadius, fifthRadius);
		new_x = centre_x + p5.cos(angle)*scalar;
		new_y = centre_y + p5.sin(angle)*scalar;	
		p5.ellipse(new_x, new_y, fifthRadius, fifthRadius);
		for(i = 0; i < 4; i++){
			let new_x = centre_x + p5.cos(angle)*scalar + p5.random(-quarterRadius, quarterRadius/4);
			let new_y = centre_y + p5.sin(angle)*scalar + p5.random(-quarterRadius, quarterRadius);	
			p5.ellipse(new_x, new_y, ellipseSize, ellipseSize);
			new_x = centre_x + p5.cos(fourAngle)*scalar + p5.random(-quarterRadius, quarterRadius);
			new_y = centre_y + p5.sin(fourAngle)*scalar + p5.random(-quarterRadius, quarterRadius);	
			p5.ellipse(new_x, new_y, ellipseSize, ellipseSize);
			new_x = centre_x + p5.cos(twoAngle)*scalar + p5.random(-quarterRadius, quarterRadius);
			new_y = centre_y + p5.sin(twoAngle)*scalar + p5.random(-quarterRadius, quarterRadius);	
			p5.ellipse(new_x, new_y, ellipseSize, ellipseSize);
		}
	}
	//draw star
	p5.fill(255, 255, 255, 3);
	for(i = 0; i <20; i++){
		p5.ellipse(centre_x, centre_y, radius/3-i*4, radius/3-i*4);
	}
}

function layer3(p5, centre_x, centre_y, radius, x, y, z){
	let fifthRadius = radius/5;
	let thirdRadius = radius/3;
	let quarterRadius = radius/4;
	let halfRadius = radius/2;
	let angle = 0;
	let r = 0;
	let spin = 0.1;
	let grow = spin * radius/4;
	for(count = 0; count <10; count+=2){
		angle += spin;
		r += grow;
		let scalar = r*3;
		p5.fill(255, 255, 255, 10-count);
		for(let j = 0; j < 30; j++){
			for(let i = 0; i < p5.radians(360); i+= p5.radians(45)){
				let new_x = centre_x + p5.cos(angle+i)*scalar+p5.random(-fifthRadius, fifthRadius);
				let new_y = centre_y + p5.sin(angle+i)*scalar+p5.random(-fifthRadius, fifthRadius);	
				p5.ellipse(new_x, new_y, fifthRadius, fifthRadius);
			}
		}
		
	}
}


/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
  let offsetX = getRandomValue(p5, x, y, z, "offsetX", -max_movement, max_movement, noiseScale);
  let offsetY = getRandomValue(p5, x, y, z, "offsetY", -max_movement, max_movement, noiseScale);
  return [x+offsetX, y+offsetY]
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;

  /* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount/1000;
  z = z + dz;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;

  p5.background(0, 0, 5);
  //stars
  randomStarValues = [];
  //draw stars random distance from sun
  for(i = 0; i <30; i+=3){
	randomStarValues[i] = p5.random(-5*cur_ball_radius,5*cur_ball_radius);
	randomStarValues[i+1] = p5.random(-5*cur_ball_radius, 5*cur_ball_radius);
	randomStarValues[i+2] = p5.random(0, 255);
  }
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      // First compute shifted point in grid
      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x = x + offsetX;
      let shifted_y = y + offsetY;
      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

      /* now draw all elements from back to front */
      p5.fill(0, 0, 255);
      p5.noStroke();  
	  if(zoom<1){
		  layer1(p5, cur_ball_radius, x_pos, y_pos, z);
	  }
	  else if(zoom<3){
		  do_animation = true;
		  layer2(p5, x_pos, y_pos, cur_ball_radius);  
	  }
	  else if((x%4)==0&&(y%4)==0){
		  do_animation = true;
		  layer3(p5, x_pos, y_pos, cur_ball_radius, x, y, z);  
	  }
    }
  }

}