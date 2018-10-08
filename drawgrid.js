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
// const ball_radius = 32;
// const line_width = 8;
const grid_size = 256;
const max_movement = 16;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]


function parachuter(p5, x, y, x1, x2, y1, y2){
//HEAD
	let head_x = p5.map(x + 5, x1, x2, 0, 256);
	let head_y = p5.map(y + -5, y1, y2, 0, 256);

	let head_origin_x = p5.map(0, x1, x2, 0, 256);
	let head_offset = p5.map(8, x1, x2, 0, 256);
	let head_radius = head_offset - head_origin_x;

	p5.fill(255, 204, 153);//PEACH SKIN
	p5.ellipse(head_x, head_y, head_radius, head_radius);

 	//BODY
 	let body_x = p5.map(x + 0, x1, x2, 0, 256);
 	let body_y = p5.map(y + 0, y1, y2, 0, 256);

 	let body_origin = p5.map(0, x1, x2, 0, 256);
 	let body_offset_x = p5.map(10, x1, x2, 0, 256);
 	let body_width = body_offset_x - body_origin;

 	let body_offset_y = p5.map(16, x1, x2, 0, 256);
 	let body_height = body_offset_y - body_origin;

	p5.fill(149, 201, 112);//PINK
	p5.rect(body_x,body_y,body_width,body_height);

   	//ARMS
   	let arms_x = p5.map(x + -2.5, x1, x2, 0, 256);
   	let arms_x2 = p5.map(x + 10, x1, x2, 0, 256);
 	let arms_y = p5.map(y + 0, y1, y2, 0, 256);

 	let arms_origin = p5.map(0, x1, x2, 0, 256);
 	let arms_offset_x = p5.map(2.5, x1, x2, 0, 256);
 	let arms_width = arms_offset_x - arms_origin;

 	let arms_offset_y = p5.map(13, x1, x2, 0, 256);
 	let arms_height = arms_offset_y - arms_origin;

	p5.rect(arms_x,arms_y,arms_width, arms_height);
	p5.rect(arms_x2,arms_y,arms_width, arms_height);

	//LEGS
	let legs_x1 = p5.map(x + 1.3, x1, x2, 0, 256);
	let legs_x2 = p5.map(x + 5.3, x1, x2, 0, 256);
	let legs_y = p5.map(y + 16, y1, y2, 0, 256);

 	let legs_origin = p5.map(0, x1, x2, 0, 256);
 	let legs_offset_x = p5.map(3.5, x1, x2, 0, 256);
 	let legs_width = legs_offset_x - legs_origin;

 	let legs_offset_y = p5.map(16, x1, x2, 0, 256);
 	let legs_height = legs_offset_y - legs_origin;

    p5.fill(38, 60, 61);//dark blue/green
	p5.rect(legs_x1, legs_y, legs_width, legs_height);
	p5.rect(legs_x2, legs_y, legs_width, legs_height);


	//ROPE
	let rope_x1 = p5.map(x + 0, x1, x2, 0, 256); 
	let rope_y1 = p5.map(y + 0, y1, y2, 0, 256);
	let rope_x2 = p5.map(x + -21, x1, x2, 0, 256); 
	let rope_y2 = p5.map(y + -40, y1, y2, 0, 256);

	let rope_x3 = p5.map(x + 10, x1, x2, 0, 256);
	let rope_y3 = p5.map(y + 0, y1, y2, 0, 256);
	let rope_x4 = p5.map(x + 31, x1, x2, 0, 256);
	let rope_y4 = p5.map(y + -40, y1, y2, 0, 256);

	p5.stroke(170);
	p5.strokeWeight(0.5);
	p5.line(rope_x1, rope_y1, rope_x2, rope_y2);
	p5.line(rope_x3, rope_y3, rope_x4, rope_y4);

 	
	//PARACHUTE
	let para1_x = p5.map(x + 5, x1, x2, 0, 256);
	let para1_y = p5.map(y + -48, y1, y2, 0, 256);
	let para1_w_offset = p5.map(x+59.406, x1, x2, 0, 256); 
	let para1_w_offset2 = p5.map(x+50, x1, x2, 0, 256); 
	let para1_w = para1_w_offset - para1_x;
	let para1_w2 = para1_w_offset2 - para1_x;

	p5.noStroke();
	p5.fill(79, 178, 57);//GREEN
	p5.arc(para1_x, para1_y, para1_w, para1_w, 162.897,  270, p5.OPEN);

	p5.fill(249, 145, 9);//ORANGE
	p5.arc(para1_x, para1_y, para1_w, para1_w, 270,  17.103, p5.OPEN);


	let tritop_x = p5.map(x + 5, x1, x2, 0, 256);
	let tritop_y = p5.map(y + -75.203, y1, y2, 0, 256);
	let tri1_x2 = p5.map(x + 31, x1, x2, 0, 256);
	let tri1_y2 = p5.map(y + -40, y1, y2, 0, 256);
	let tri1_x3 = p5.map(x + 13.7, x1, x2, 0, 256);
	let tri1_y3 = p5.map(y + -40, y1, y2, 0, 256);
	let tri1_x4 = p5.map(x + -3.6, x1, x2, 0, 256);
	let tri1_x5 = p5.map(x + -21, x1, x2, 0, 256);

	p5.fill(201, 63, 42); //RED
	p5.triangle(tritop_x, tritop_y, tri1_x2, tri1_y2, tri1_x3, tri1_y3);

	p5.fill(57, 161, 178);//BLUE
	p5.triangle(tritop_x, tritop_y , tri1_x3, tri1_y2, tri1_x4 ,tri1_y3);

	p5.fill(244, 197, 66);//YELLOW
	p5.triangle(tritop_x, tritop_y, tri1_x5, tri1_y2, tri1_x4 ,tri1_y3);

}

function cloud(p5, x, y, x1, x2, y1, y2){

    p5.fill(255, 255, 255);
    p5.noStroke();
    let cloud_x1 = p5.map(x + 10, x1, x2, 0, 256);
    let cloud_x2 = p5.map(x + 20, x1, x2, 0, 256);
    let cloud_x3 = p5.map(x + 35, x1, x2, 0, 256);
    let cloud_x4 = p5.map(x + 45, x1, x2, 0, 256);

    let cloud_y1 = p5.map(y + 20, y1, y2, 0, 256);

	let cloud1_w_offset1 = p5.map(x + 50, x1, x2, 0, 256);
	let cloud1_w_offset2 = p5.map(x + 30, x1, x2, 0, 256);
	let cloud1_w_offset3 = p5.map(y + 40, y1, y2, 0, 256);
	let cloud1_w_offset4 = p5.map(y + 55, y1, y2, 0, 256);
	let cloud1_w_offset5 = p5.map(y + 45, y1, y2, 0, 256);

	
	let cloud1_w = cloud1_w_offset1 - cloud_x1;
	let cloud2_w = cloud1_w_offset1 - cloud_x2;
	let cloud3_w = cloud1_w_offset1 - cloud_x3;
	let cloud4_w = cloud1_w_offset2 - cloud_x4;

	let cloud1_w2 = cloud1_w_offset3 - cloud_y1;
	let cloud2_w2 = cloud1_w_offset4 - cloud_y1;
	let cloud3_w2 = cloud1_w_offset5 - cloud_y1;
	let cloud4_w2 = cloud1_w_offset3 - cloud_y1;	

	let cloud_y4 = p5.map(y + 0, y1, y2, 0, 256);

    p5.arc(cloud_x1, cloud_y1, cloud1_w, cloud1_w2, 542, 360);
    p5.arc(cloud_x2, cloud_y1, cloud2_w, cloud2_w2, 542, 360);
    p5.arc(cloud_x3, cloud_y1, cloud3_w, cloud3_w2, 542, 360);
  	p5.arc(cloud_x4, cloud_y1, cloud4_w, cloud4_w2, 542, 360);

}

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
  let noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  let noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  let offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  let offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}


// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	p5.angleMode(p5.DEGREES);
	p5.background(222, 249, 247);

	let max_shift = max_thickness;

	let min_x = snap_to_grid(x1 - max_shift, grid_size);
  	let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  	let min_y = snap_to_grid(y1 - max_shift, grid_size);
  	let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


	for(let x=min_x; x<max_x; x+=grid_size) {
    	for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      let shift_point_left = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      let x_pos_left = p5.map(shift_point_left[0], x1, x2, 0, 256);
      let y_pos_left = p5.map(shift_point_left[1], y1, y2, 0, 256);

      let shift_point_down = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      let x_pos_down = p5.map(shift_point_down[0], x1, x2, 0, 256);
      let y_pos_down = p5.map(shift_point_down[1], y1, y2, 0, 256);

		p5.noStroke();
		parachuter(p5, x,y, x1, x2, y1, y2);

		//cloud(p5, 412, 512, x1, x2, y1, y2);
		}		
	}



  // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
