const max_thickness = 64;
const max_movement = 16;
const ball_radius = 32;
const line_width = 8;
const grid_size = 64;
var img; 
var count=0;
var fish = [10];
var movement = [10];
var rad = 60; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 2.8; // Speed of the shape
var yspeed = 2.2; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;

/* triplets of locations: zoom, x, y */

var tourPath = [
  [0, 618.824218750000, 646.460937500000],
  [1, 1020.937500000000, 236.453125000000],
  [2, 471.968750000000, 524.976562500000],
  [3, 484.984375000000, 531.988281250000],
  [4, 454.641113281250, 389.649169921875]
  
]

function setup(){
	for (var i = 0; i < 10; i++){
		fish[i] = new p5.Vector(0, 0);
		movement[i] = new p5.Vector(random(1), random(1));
	}
	
	frameRate(30);
  	ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;

}

function move(fish, movement, x, y){
	var newX = fish.x + movement.x;
	var newY = fish.y + movement.y;
	if (newY>=155||newY<=10){
		movement.y*=-1;
	}
	if (newX>=200||newX<=10){
		movement.x*=-1;
	}
	var newFish = new p5.Vector(newX, newY);
	return newFish;
}

function move2(fish, movement, x, y){
	var newX = fish.x + movement.x;
	var newY = fish.y + movement.y;
	if (newY>=155||newY<=10){
		movement.y*=-1;
	}
	if (newX>=200||newX<=10){
		movement.x*=-1;
	}
	var newFish = new p5.Vector(newX, newY);
	return newFish;
}

function makeFish(firstCall, p5, x1, x2, y1, y2, z, zoom){
	if(firstCall){
		for (var i = 0; i < 10; i++){
			fish[i] = new Fish(p5, x1, x2, y1, y2, z, zoom);
		}
	}
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
 let offsetX = getRandomValue(p5, x, y, z, "offsetX", -max_movement, max_movement, noiseScale);
  let offsetY = getRandomValue(p5, x, y, z, "offsetY", -max_movement, max_movement, noiseScale);
  return [x+offsetX, y+offsetY]
}

function drawFish(fish, p5, x, y, x1, x2, y1, y2, z, zoom){

	colorMode(HSL, 100);
	for(var i = 0; i < 10; i++){
		fish[i].drawFish(p5, x, y, x1, x2, y1, y2, z, zoom);
	}
}


function firstZoom(p5, x, y, x1, x2, y1, y2, z, zoom){


	/* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;

	p5.background(48, 132, 62)
//set x,y
  let start_x = p5.map(x + -380, x1, x2, 0, 256);
  let width = p5.map(x + 480, x1, x2, 0, 256);
  

 
  let start_y = p5.map(y + -330, y1, y2, 0, 256);
  let height = p5.map(y + 220, y1, y2, 0, 256);
  

  	var mid_x = start_x + ((width-start_x)/2);
  	
  	
  	var mid_y = start_y + ((height-start_y)/2);

  	var stand = 0;


	p5.fill(48, 131, 188);
	p5.beginShape();
	p5.curveVertex(mid_x -70*4, mid_y +20*4);
	p5.curveVertex(mid_x, mid_y);
	p5.curveVertex(mid_x +100*4, mid_y);
	p5.curveVertex(mid_x+120*4, mid_y +70*4);
	p5.curveVertex(mid_x +110*4, mid_y +100*4);
	p5.curveVertex(mid_x +50*4, mid_y +85*4);
	p5.curveVertex(mid_x, mid_y +100*4);
	p5.curveVertex(mid_x -50*4, mid_y +70*4);
	p5.curveVertex(mid_x -70*4, mid_y +20*4);
	p5.curveVertex(mid_x, mid_y);
	p5.curveVertex(mid_x +100*4, mid_y);
	p5.curveVertex(mid_x+120*4, mid_y +70*4);
	p5.endShape();

	//p5.fill(169, 169, 169);
	p5.strokeWeight(10);
	p5.stroke(169, 169, 169);

	p5.beginShape();
	p5.curveVertex(mid_x -70*4, mid_y +20*4);
	p5.curveVertex(mid_x, mid_y);
	p5.curveVertex(mid_x +100*4, mid_y);
	p5.curveVertex(mid_x+120*4, mid_y +70*4);
	p5.curveVertex(mid_x +110*4, mid_y +100*4);
	p5.curveVertex(mid_x +50*4, mid_y +85*4);
	p5.curveVertex(mid_x, mid_y +100 *4);
	p5.curveVertex(mid_x -50*4, mid_y +70*4);
	p5.curveVertex(mid_x -70*4, mid_y +20*4);
	p5.curveVertex(mid_x, mid_y);
	p5.curveVertex(mid_x +100*4, mid_y);
	p5.curveVertex(mid_x+120*4, mid_y +70*4);
	p5.endShape();

	// Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > start_x - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > start_y - rad || ypos < rad) {
    ydirection *= -1;
  }

  p5.fill(255, 0, 0);
  // Draw the shape
  if(ypos<mid_y+150&&ypos>mid_y-100&&xpos<mid_x+230 && xpos>mid_x-210){
  for (var i = 0; i < 10; i++){
  	if(fish[i].x==0 && fish[i].y==0){
  		fish[i].x = random(mid_x-100, mid_x-200);
  		fish[i].y = random(mid_y+100, mid_y+200);
  	}



  	
  		fish[i] = move(fish[i], movement[i], mid_x, mid_y);
  		p5.noStroke();
		p5.push();
		p5.noStroke();
		p5.fill(210, 0, 10);
		p5.translate(fish[i].x, fish[i].y);
		p5.rotate(p5.HALF_PI + p5.atan2(movement[i].y, movement[i].x));
		p5.beginShape();
		var headSize = 17;
		p5.curveVertex(0, -0.5 * headSize);
		p5.curveVertex(0.2 * headSize, 0);
		p5.curveVertex(0, 1.5 * headSize);
		p5.curveVertex(-0.2 * headSize, 0);
		p5.curveVertex(0, -0.5 * headSize);
		p5.curveVertex(0.2 * headSize, 0);
		p5.curveVertex(0, 1.5 * headSize);
		p5.endShape();
		p5.pop();  
  }
}
}



function secondZoom(p5, x, y, x1, x2, y1, y2, z){

	p5.background(48, 131, 188);
	  /* max_shift is the amount of overlap a tile can spill over into its neighbors */

  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;

  let start_x = p5.map(x + -256, x1, x2, 0, 32);
  let width = p5.map(x + 768, x1, x2, 0, 32);
  let start_y = p5.map(y + -384, y1, y2, 0, 32);
  let height = p5.map(y + 640, y1, y2, 0, 32);
  var mid_x = start_x + ((width-start_x)/2);	
  var mid_y = start_y + ((height-start_y)/2);

	// Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > start_x - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > start_y - rad || ypos < rad) {
    ydirection *= -1;
  }

  p5.fill(255, 0, 0);
  // Draw the shape
  if(ypos<mid_y+250&&ypos>mid_y-200&&xpos<mid_x+430 && xpos>mid_x-410){
  for (var i = 0; i < 1; i++){
  	if(fish[i].x==0 && fish[i].y==0){
  		fish[i].x = random(mid_x-100, mid_x-200);
  		fish[i].y = random(mid_y+100, mid_y+200);
  	}


  	
  		fish[i] = move2(fish[i], movement[i], mid_x, mid_y);
  		p5.noStroke();
		p5.push();
		p5.noStroke();
		p5.fill(210, 0, 10);
		p5.translate(mid_x, -mid_y);
		p5.rotate(movement[i].x, movement[i].y);
		p5.beginShape();
		var headSize = 100;
		p5.curveVertex(0, -0.5 * headSize);
		p5.curveVertex(0.2 * headSize, 0);
		p5.curveVertex(0, 1.5 * headSize);
		p5.curveVertex(-0.2 * headSize, 0);
		p5.curveVertex(0, -0.5 * headSize);
		p5.curveVertex(0.2 * headSize, 0);
		p5.curveVertex(0, 1.5 * headSize);
		p5.endShape();
		p5.pop();  
  }
}
}

function thirdZoom(p5, x, y, x1, x2, y1, y2, z ,zoom){

  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;

  let dz = p5.globalFrameCount / 100.0;
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

  p5.background(255);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute all three points with offsets */
      let shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      let shift_point_left = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      let x_pos_left = p5.map(shift_point_left[0], x1, x2, 0, 256);
      let y_pos_left = p5.map(shift_point_left[1], y1, y2, 0, 256);

      let shift_point_down = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      let x_pos_down = p5.map(shift_point_down[0], x1, x2, 0, 256);
      let y_pos_down = p5.map(shift_point_down[1], y1, y2, 0, 256);


      var dX;
      var dY; 

      dX = x_pos +10;
      dy = y_pos +10;

      p5.stroke(255, 0, 0);
      p5.fill(48, 131, 188);
      p5.stroke(255);
      p5.strokeWeight(5);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*3);

    }
  }
 }
      
function fourthZoom(p5, x, y, x1, x2, y1, y2, z, zoom){

	  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;

  let dz = p5.globalFrameCount / 100.0;
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

  p5.background(255);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute all three points with offsets */
      let shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      let shift_point_left = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      let x_pos_left = p5.map(shift_point_left[0], x1, x2, 0, 256);
      let y_pos_left = p5.map(shift_point_left[1], y1, y2, 0, 256);

      let shift_point_down = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      let x_pos_down = p5.map(shift_point_down[0], x1, x2, 0, 256);
      let y_pos_down = p5.map(shift_point_down[1], y1, y2, 0, 256);

	
		p5.fill(100);
        p5.ellipse(x_pos-100, y_pos+100, 200);
        p5.ellipse(x_pos+100, y_pos+100, 200);    
        p5.fill(48, 131, 188);
        p5.stroke(255);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
    }
}
}

function lastZoom(p5, x, y, x1, x2, y1, y2, z){

	  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;

  let dz = p5.globalFrameCount / 100.0;
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

  p5.background(255);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute all three points with offsets */
      let shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      let shift_point_left = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      let x_pos_left = p5.map(shift_point_left[0], x1, x2, 0, 256);
      let y_pos_left = p5.map(shift_point_left[1], y1, y2, 0, 256);

      let shift_point_down = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      let x_pos_down = p5.map(shift_point_down[0], x1, x2, 0, 256);
      let y_pos_down = p5.map(shift_point_down[1], y1, y2, 0, 256);

	
		p5.fill(100);
		p5.textSize(300);

        p5.text("H", x_pos-300, y_pos+300);
        p5.text("H", x_pos+300, y_pos+300);    
        p5.fill(48, 131, 188);
        p5.stroke(255);

        
        p5.fill(48, 131, 188);
  		p5.text("O", x_pos, y_pos);
    }
}
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	
	if(count==0)makeFish(true, p5, x1, x2, y1, y2, z, zoom)
	count++;
    
    if (zoom < 1){
    	p5.background(255);
      	firstZoom(p5, 412, 512, x1, x2, y1, y2);
    }
    if(zoom > 0){
    	p5.background(255);
		secondZoom(p5, 412, 512, x1, x2, y1, y2, z);
    }
	if (zoom > 1) {
		p5.background(255);
		thirdZoom(p5, 412, 512, x1, x2, y1, y2, zoom);
    }
    if(zoom > 2) {
		p5.background(255);
    	fourthZoom(p5, 412, 512, x1, x2, y1, y2, zoom);
    }
    if (zoom > 3){
    	p5.background(255);
		lastZoom(p5, 412, 512, x1, x2, y1, y2, z);
    }
}

class Fish {
	
	constructor(p5, x1, x2, y1, y2, z, zoom){

	function Fish(p5, x1, x2, y1, y2, z, zoom){

	}

	function moveFish(p5, x, y, x1, x2, y1, y2, z, zoom){

	}

	function drawFish(p5, x, y, x1, x2, y1, y2, z, zoom){

	}

	}
}