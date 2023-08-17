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
const max_thickness = 0;

const grid_size = 100;
const para2_grid_size = 50;

const cloud_grid_size = 128;
const max_cloud_movement = 100;

const max_cloud_thickness = 300;
const cloud1_grid_size = 256;
const max_cloud1_movement = 150;

const max_movement = 80;
const line_width = 0.07;
let do_animation = true;


/* the random number seed for the tour */
var tourSeed = 430;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 338, 483],
  [2, 254, 478],
  [3, 37, 352],
  [4, 42, 352],
  [5, 54, 339]
]


function parachuter(p5, x, y, x1, x2, y1, y2){
		p5.angleMode(p5.DEGREES);

	//HEAD
	let head_x = p5.map(x + 5/4, x1, x2, 0, 256);
	let head_y = p5.map(y + -5/4, y1, y2, 0, 256);

	let head_origin_x = p5.map(0/4, x1, x2, 0, 256);
	let head_offset = p5.map(8/4, x1, x2, 0, 256);
	let head_radius = head_offset - head_origin_x;

	p5.fill(255, 204, 153);//PEACH SKIN
	p5.ellipse(head_x, head_y, head_radius, head_radius);

 	//BODY
 	let body_x = p5.map(x + 0/4, x1, x2, 0, 256);
 	let body_y = p5.map(y + 0/4, y1, y2, 0, 256);

 	let body_origin = p5.map(0/4, x1, x2, 0, 256);
 	let body_offset_x = p5.map(10/4, x1, x2, 0, 256);
 	let body_width = body_offset_x - body_origin;

 	let body_offset_y = p5.map(16/4, x1, x2, 0, 256);
 	let body_height = body_offset_y - body_origin;

	p5.fill(149, 201, 112);//GREEN
	p5.rect(body_x,body_y,body_width,body_height);

	//ROPE
	let rope_x1 = p5.map(x + 0/4, x1, x2, 0, 256); 
	let rope_y1 = p5.map(y + 0/4, y1, y2, 0, 256);
	let rope_x2 = p5.map(x + -21/4, x1, x2, 0, 256); 
	let rope_y2 = p5.map(y + -40/4, y1, y2, 0, 256);

	let rope_x3 = p5.map(x + 10/4, x1, x2, 0, 256);
	let rope_y3 = p5.map(y + 0/4, y1, y2, 0, 256);
	let rope_x4 = p5.map(x + 31/4, x1, x2, 0, 256);
	let rope_y4 = p5.map(y + -40/4, y1, y2, 0, 256);

	p5.stroke(170);
	p5.strokeWeight(0.5);
	p5.line(rope_x1, rope_y1, rope_x2, rope_y2);
	p5.line(rope_x3, rope_y3, rope_x4, rope_y4);

 	
	//PARACHUTE
	let para1_x = p5.map(x + 5/4, x1, x2, 0, 256);
	let para1_y = p5.map(y + -48/4, y1, y2, 0, 256);
	let para1_w_offset = p5.map(x+59.406/4, x1, x2, 0, 256); 
	let para1_w_offset2 = p5.map(x+50/4, x1, x2, 0, 256); 
	let para1_w = para1_w_offset - para1_x;
	let para1_w2 = para1_w_offset2 - para1_x;

	p5.noStroke();
	p5.fill(79, 178, 57);//GREEN
	p5.arc(para1_x, para1_y, para1_w, para1_w, 162.897,  270, p5.OPEN);

	p5.fill(249, 145, 9);//ORANGE
	p5.arc(para1_x, para1_y, para1_w, para1_w, 270,  17.103, p5.OPEN);

	let tritop_x = p5.map(x + 5/4, x1, x2, 0, 256);
	let tritop_y = p5.map(y + -75.203/4, y1, y2, 0, 256);
	let tri1_x2 = p5.map(x + 31/4, x1, x2, 0, 256);
	let tri1_y2 = p5.map(y + -40/4, y1, y2, 0, 256);
	let tri1_x3 = p5.map(x + 13.7/4, x1, x2, 0, 256);
	let tri1_y3 = p5.map(y + -40/4, y1, y2, 0, 256);
	let tri1_x4 = p5.map(x + -3.6/4, x1, x2, 0, 256);
	let tri1_x5 = p5.map(x + -21/4, x1, x2, 0, 256);

	p5.fill(201, 63, 42); //RED
	p5.triangle(tritop_x, tritop_y, tri1_x2, tri1_y2, tri1_x3, tri1_y3);

	p5.fill(57, 161, 178);//BLUE
	p5.triangle(tritop_x, tritop_y , tri1_x3, tri1_y2, tri1_x4 ,tri1_y3);

	p5.fill(244, 197, 66);//YELLOW
	p5.triangle(tritop_x, tritop_y, tri1_x5, tri1_y2, tri1_x4 ,tri1_y3);
}

	//ARMS
function armleft(p5, x, y, x1, x2, y1, y2){
	
	p5.fill(149, 201, 112);//GREEN
   	let arms_x = p5.map(x + -2.5/4, x1, x2, 0, 256);
 	let arms_y = p5.map(y + 0/4, y1, y2, 0, 256);

 	let arms_origin = p5.map(0/4, x1, x2, 0, 256);
 	let arms_offset_x = p5.map(2.5/4, x1, x2, 0, 256);
 	let arms_width = arms_offset_x - arms_origin;

 	let arms_offset_y = p5.map(13/4, x1, x2, 0, 256);
 	let arms_height = arms_offset_y - arms_origin;

	p5.rect(arms_x,arms_y,arms_width, arms_height);
}

function armright(p5, x, y, x1, x2, y1, y2){
	//ARMS
	p5.fill(149, 201, 112);//GREEN
   	let arms_x2 = p5.map(x + 10/4, x1, x2, 0, 256);
 	let arms_y = p5.map(y + 0/4, y1, y2, 0, 256);

 	let arms_origin = p5.map(0/4, x1, x2, 0, 256);
 	let arms_offset_x = p5.map(2.5/4, x1, x2, 0, 256);
 	let arms_width = arms_offset_x - arms_origin;

 	let arms_offset_y = p5.map(13/4, x1, x2, 0, 256);
 	let arms_height = arms_offset_y - arms_origin;

	p5.rect(arms_x2,arms_y,arms_width, arms_height);
}


function legs(p5, x, y, x1, x2, y1, y2){
	//LEGS
	let legs_x1 = p5.map(x + 1.3/4, x1, x2, 0, 256);
	let legs_x2 = p5.map(x + 5.3/4, x1, x2, 0, 256);
	let legs_y = p5.map(y + 14/4, y1, y2, 0, 256);

 	let legs_origin = p5.map(0/4, x1, x2, 0, 256);
 	let legs_offset_x = p5.map(3.5/4, x1, x2, 0, 256);
 	let legs_width = legs_offset_x - legs_origin;

 	let legs_offset_y = p5.map(16/4, x1, x2, 0, 256);
 	let legs_height = legs_offset_y - legs_origin;

    p5.fill(38, 60, 61);//dark blue/green
	p5.rect(legs_x1, legs_y, legs_width, legs_height);
	p5.rect(legs_x2, legs_y, legs_width, legs_height);
}

//BOTTOM LAYER OF PARACHUTERS
function parachuter_small(p5, x, y, x1, x2, y1, y2){
	//HEAD
	let head_x = p5.map(x + 5/25, x1, x2, 0, 256);
	let head_y = p5.map(y + -5/25, y1, y2, 0, 256);

	let head_origin_x = p5.map(0/25, x1, x2, 0, 256);
	let head_offset = p5.map(8/25, x1, x2, 0, 256);
	let head_radius = head_offset - head_origin_x;

	p5.fill(255, 204, 153);//PEACH SKIN
	p5.ellipse(head_x, head_y, head_radius, head_radius);

 	//BODY
 	let body_x = p5.map(x + 0/25, x1, x2, 0, 256);
 	let body_y = p5.map(y + 0/25, y1, y2, 0, 256);

 	let body_origin = p5.map(0/25, x1, x2, 0, 256);
 	let body_offset_x = p5.map(10/25, x1, x2, 0, 256);
 	let body_width = body_offset_x - body_origin;

 	let body_offset_y = p5.map(16/25, x1, x2, 0, 256);
 	let body_height = body_offset_y - body_origin;

	p5.fill(149, 201, 112);//PINK
	p5.rect(body_x,body_y,body_width,body_height);

   	//ARMS
   	let arms_x = p5.map(x + -2.5/25, x1, x2, 0, 256);
   	let arms_x2 = p5.map(x + 10/25, x1, x2, 0, 256);
 	let arms_y = p5.map(y + 0/25, y1, y2, 0, 256);

 	let arms_origin = p5.map(0/25, x1, x2, 0, 256);
 	let arms_offset_x = p5.map(2.5/25, x1, x2, 0, 256);
 	let arms_width = arms_offset_x - arms_origin;

 	let arms_offset_y = p5.map(13/25, x1, x2, 0, 256);
 	let arms_height = arms_offset_y - arms_origin;

	p5.rect(arms_x,arms_y,arms_width, arms_height);
	p5.rect(arms_x2,arms_y,arms_width, arms_height);

	//LEGS
	let legs_x1 = p5.map(x + 1.3/25, x1, x2, 0, 256);
	let legs_x2 = p5.map(x + 5.3/25, x1, x2, 0, 256);
	let legs_y = p5.map(y + 16/25, y1, y2, 0, 256);

 	let legs_origin = p5.map(0/25, x1, x2, 0, 256);
 	let legs_offset_x = p5.map(3.5/25, x1, x2, 0, 256);
 	let legs_width = legs_offset_x - legs_origin;

 	let legs_offset_y = p5.map(16/25, x1, x2, 0, 256);
 	let legs_height = legs_offset_y - legs_origin;

    p5.fill(38, 60, 61);//dark blue/green
	p5.rect(legs_x1, legs_y, legs_width, legs_height);
	p5.rect(legs_x2, legs_y, legs_width, legs_height);

	//ROPE
	let rope_x1 = p5.map(x + 0/25, x1, x2, 0, 256); 
	let rope_y1 = p5.map(y + 0/25, y1, y2, 0, 256);
	let rope_x2 = p5.map(x + -21/25, x1, x2, 0, 256); 
	let rope_y2 = p5.map(y + -40/25, y1, y2, 0, 256);

	let rope_x3 = p5.map(x + 10/25, x1, x2, 0, 256);
	let rope_y3 = p5.map(y + 0/25, y1, y2, 0, 256);
	let rope_x4 = p5.map(x + 31/25, x1, x2, 0, 256);
	let rope_y4 = p5.map(y + -40/25, y1, y2, 0, 256);

	p5.stroke(170);
	p5.strokeWeight(0.5);
	p5.line(rope_x1, rope_y1, rope_x2, rope_y2);
	p5.line(rope_x3, rope_y3, rope_x4, rope_y4);

	//PARACHUTE
	let para1_x = p5.map(x + 5/25, x1, x2, 0, 256);
	let para1_y = p5.map(y + -48/25, y1, y2, 0, 256);
	let para1_w_offset = p5.map(x+59.406/25, x1, x2, 0, 256); 
	let para1_w_offset2 = p5.map(x+50/25, x1, x2, 0, 256); 
	let para1_w = para1_w_offset - para1_x;
	let para1_w2 = para1_w_offset2 - para1_x;

	p5.noStroke();
	p5.fill(79, 178, 57);//GREEN
	p5.arc(para1_x, para1_y, para1_w, para1_w, 162.897,  270, p5.OPEN);

	p5.fill(249, 145, 9);//ORANGE
	p5.arc(para1_x, para1_y, para1_w, para1_w, 270,  17.103, p5.OPEN);

	let tritop_x = p5.map(x + 5/25, x1, x2, 0, 256);
	let tritop_y = p5.map(y + -75.203/25, y1, y2, 0, 256);
	let tri1_x2 = p5.map(x + 31/25, x1, x2, 0, 256);
	let tri1_y2 = p5.map(y + -40/25, y1, y2, 0, 256);
	let tri1_x3 = p5.map(x + 13.7/25, x1, x2, 0, 256);
	let tri1_y3 = p5.map(y + -40/25, y1, y2, 0, 256);
	let tri1_x4 = p5.map(x + -3.6/25, x1, x2, 0, 256);
	let tri1_x5 = p5.map(x + -21/25, x1, x2, 0, 256);

	p5.fill(201, 63, 42); //RED
	p5.triangle(tritop_x, tritop_y, tri1_x2, tri1_y2, tri1_x3, tri1_y3);

	p5.fill(57, 161, 178);//BLUE
	p5.triangle(tritop_x, tritop_y , tri1_x3, tri1_y2, tri1_x4 ,tri1_y3);

	p5.fill(244, 197, 66);//YELLOW
	p5.triangle(tritop_x, tritop_y, tri1_x5, tri1_y2, tri1_x4 ,tri1_y3);
}

//SECOND LAYER OF CLOUDS
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

//TOP LAYER OF CLOUDS
function cloud_big(p5, x, y, x1, x2, y1, y2){
    p5.fill(255, 255, 255);
    p5.noStroke();
    let cloud_x1 = p5.map(x + 10*4, x1, x2, 0, 256);
    let cloud_x2 = p5.map(x + 20*4, x1, x2, 0, 256);
    let cloud_x3 = p5.map(x + 35*4, x1, x2, 0, 256);
    let cloud_x4 = p5.map(x + 45*4, x1, x2, 0, 256);

    let cloud_y1 = p5.map(y + 20*4, y1, y2, 0, 256);

	let cloud1_w_offset1 = p5.map(x + 50*4, x1, x2, 0, 256);
	let cloud1_w_offset2 = p5.map(x + 30*4, x1, x2, 0, 256);
	let cloud1_w_offset3 = p5.map(y + 40*4, y1, y2, 0, 256);
	let cloud1_w_offset4 = p5.map(y + 55*4, y1, y2, 0, 256);
	let cloud1_w_offset5 = p5.map(y + 45*4, y1, y2, 0, 256);
	
	let cloud1_w = cloud1_w_offset1 - cloud_x1;
	let cloud2_w = cloud1_w_offset1 - cloud_x2;
	let cloud3_w = cloud1_w_offset1 - cloud_x3;
	let cloud4_w = cloud1_w_offset2 - cloud_x4;

	let cloud1_w2 = cloud1_w_offset3 - cloud_y1;
	let cloud2_w2 = cloud1_w_offset4 - cloud_y1;
	let cloud3_w2 = cloud1_w_offset5 - cloud_y1;
	let cloud4_w2 = cloud1_w_offset3 - cloud_y1;	

	let cloud_y4 = p5.map(y + 0*4, y1, y2, 0, 256);

    p5.arc(cloud_x1, cloud_y1, cloud1_w, cloud1_w2, 542, 360);
    p5.arc(cloud_x2, cloud_y1, cloud2_w, cloud2_w2, 542, 360);
    p5.arc(cloud_x3, cloud_y1, cloud3_w, cloud3_w2, 542, 360);
  	p5.arc(cloud_x4, cloud_y1, cloud4_w, cloud4_w2, 542, 360);
	}

	//FACE
 function face(p5, x, y, x1, x2, y1, y2){
 	//EYES
	let eye1_x = p5.map(x + 4/4, x1, x2, 0, 256);
	let eye2_x = p5.map(x + 6/4, x1, x2, 0, 256);
	let eye_y = p5.map(y + -6/4, y1, y2, 0, 256);
	
	let eye1_origin_x = p5.map(0/4, x1, x2, 0, 256);
	let eye1_offset = p5.map(1.5/4, x1, x2, 0, 256);
	let eye_radius = eye1_offset - eye1_origin_x;

	p5.fill(0);//BLACK
	p5.ellipse(eye1_x, eye_y, eye_radius, eye_radius);
	p5.ellipse(eye2_x, eye_y, eye_radius, eye_radius);
 	
 	//MOUTH
	let mouth1_x = p5.map(x + 5/4, x1, x2, 0, 256);
	let mouth1_y = p5.map(y + -5/4, y1, y2, 0, 256);
	let mouth1_w_offset = p5.map(x+10/4, x1, x2, 0, 256); 
	let mouth1_w = mouth1_w_offset - mouth1_x;
	
	let c_p00 = p5.map(0, x1, x2, 0, 256);
  	let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  	let cur_line_width = c_plwidth - c_p00;

	p5.stroke(0)
	p5.strokeWeight(cur_line_width);
	p5.noFill();
	p5.arc(mouth1_x, mouth1_y, mouth1_w, mouth1_w, 0,  180);
 }

 	//HANDS
 function hand_left (p5, x, y, x1, x2, y1, y2){
	let hand1_x = p5.map(x + 11.2/4, x1, x2, 0, 256);
	let hand1_y = p5.map(y + 13/4, y1, y2, 0, 256);
	let hand1_w_offset = p5.map(x+8.8/4, x1, x2, 0, 256); 
	let hand1_w = hand1_w_offset - hand1_x;
	
	p5.noStroke();
	p5.fill(255, 204, 153);//PEACH SKIN
	p5.arc(hand1_x, hand1_y, hand1_w, hand1_w, 0,  180);
 }

  function hand_right (p5, x, y, x1, x2, y1, y2){
	let hand1_x = p5.map(x + 11.2/4, x1, x2, 0, 256);
	let hand2_x = p5.map(x + -1.2/4, x1, x2, 0, 256);
	let hand1_y = p5.map(y + 13/4, y1, y2, 0, 256);
	let hand1_w_offset = p5.map(x+8.8/4, x1, x2, 0, 256); 
	let hand1_w = hand1_w_offset - hand1_x;
	
	p5.noStroke();
	p5.fill(255, 204, 153);//PEACH SKIN
	p5.arc(hand2_x, hand1_y, hand1_w, hand1_w, 0,  180);

 }

  function feet (p5, x, y, x1, x2, y1, y2){
	//FEET
	let feet1_x = p5.map(x + 7.2/4, x1, x2, 0, 256);
	let feet2_x = p5.map(x + 3/4, x1, x2, 0, 256);
	let feet1_y = p5.map(y + 30/4, y1, y2, 0, 256);
	let feet1_w_offset = p5.map(x+3.8/4, x1, x2, 0, 256); 
	let feet1_w = feet1_w_offset - feet1_x;
	
	p5.noStroke();
	p5.fill(201, 63, 42); //RED
	p5.arc(feet1_x, feet1_y, feet1_w, feet1_w, 180,  0);
	p5.arc(feet2_x, feet1_y, feet1_w, feet1_w, 180, 0);
 }


//BACKPACK AND STRAPS
 function backpack_straps(p5, x,y, x1, x2, y1, y2){
 	//LEFT STRAP
 	let L_point1x = p5.map(x + 0/4, x1, x2, 0, 256);
	let L_point1y = p5.map(y + 0/4, y1, y2, 0, 256);

	let L_point2x = p5.map(x + 1/4, x1, x2, 0, 256);
	let L_point2y = p5.map(y + 0/4, y1, y2, 0, 256);

	let L_point3x = p5.map(x + 2/4, x1, x2, 0, 256);
	let L_point3y = p5.map(y + 6/4, y1, y2, 0, 256);

	let L_point4x = p5.map(x + 0/4, x1, x2, 0, 256);
	let L_point4y = p5.map(y + 13/4, y1, y2, 0, 256);

	let L_point5x = p5.map(x + 0/4, x1, x2, 0, 256);
	let L_point5y = p5.map(y + 10/4, y1, y2, 0, 256);

	let L_point6x = p5.map(x + 1/4, x1, x2, 0, 256);
	let L_point6y = p5.map(y + 6/4, y1, y2, 0, 256);

	let L_point7x = p5.map(x + 0/4, x1, x2, 0, 256);
	let L_point7y = p5.map(y + 2/4, y1, y2, 0, 256);

	let L_point8x = p5.map(x + 0/4, x1, x2, 0, 256);
	let L_point8y = p5.map(y + 0/4, y1, y2, 0, 256);

	p5.fill(201, 63, 42); //RED
	p5.stroke(201, 63, 42);
	p5.strokeWeight(2);
	p5.beginShape();
	p5.vertex(L_point1x, L_point1y);
	p5.vertex(L_point1x, L_point1y);
	p5.vertex(L_point2x, L_point2y);
	p5.vertex(L_point3x, L_point3y);
	p5.vertex(L_point4x, L_point4y);
	p5.vertex(L_point5x, L_point5y);
	p5.vertex(L_point6x, L_point6y);
	p5.vertex(L_point7x, L_point7y);
	p5.vertex(L_point8x, L_point8y);
	p5.vertex(L_point8x, L_point8y);
	p5.endShape();

	//RIGHT STRAP
 	let point1x = p5.map(x + 10/4, x1, x2, 0, 256);
	let point1y = p5.map(y + 0/4, y1, y2, 0, 256);

	let point2x = p5.map(x + 9/4, x1, x2, 0, 256);
	let point2y = p5.map(y + 0/4, y1, y2, 0, 256);

	let point3x = p5.map(x + 8/4, x1, x2, 0, 256);
	let point3y = p5.map(y + 6/4, y1, y2, 0, 256);

	let point4x = p5.map(x + 10/4, x1, x2, 0, 256);
	let point4y = p5.map(y + 13/4, y1, y2, 0, 256);

	let point5x = p5.map(x + 10/4, x1, x2, 0, 256);
	let point5y = p5.map(y + 10/4, y1, y2, 0, 256);

	let point6x = p5.map(x + 9/4, x1, x2, 0, 256);
	let point6y = p5.map(y + 6/4, y1, y2, 0, 256);

	let point7x = p5.map(x + 10/4, x1, x2, 0, 256);
	let point7y = p5.map(y + 2/4, y1, y2, 0, 256);

	let point8x = p5.map(x + 10/4, x1, x2, 0, 256);
	let point8y = p5.map(y + 0/4, y1, y2, 0, 256);

	p5.fill(201, 63, 42); //RED
	p5.stroke(201, 63, 42);
	p5.strokeWeight(2);
	p5.beginShape();
	p5.vertex(point1x, point1y);
	p5.vertex(point1x, point1y);
	p5.vertex(point2x, point2y);
	p5.vertex(point3x, point3y);
	p5.vertex(point4x, point4y);
	p5.vertex(point5x, point5y);
	p5.vertex(point6x, point6y);
	p5.vertex(point7x, point7y);
	p5.vertex(point8x, point8y);
	p5.vertex(point8x, point8y);
	p5.endShape();

	//CLIP
	let clip_x = p5.map(x + 1/4, x1, x2, 0, 256);
	let clip_y = p5.map(y + 6/4, y1, y2, 0, 256);

 	let clip_origin = p5.map(0/4, x1, x2, 0, 256);
 	let clip_offset_x = p5.map(7.5/4, x1, x2, 0, 256);
 	let clip_width = clip_offset_x - clip_origin;

 	let clip_offset_y = p5.map(1/4, x1, x2, 0, 256);
 	let clip_height = clip_offset_y - clip_origin;

	p5.rect(clip_x, clip_y, clip_width, clip_height);

 }
 //BACKPACK
 function backpack(p5, x,y, x1, x2, y1, y2){

	let backpack_x = p5.map(x + -1/4, x1, x2, 0, 256);
	let backpack_y = p5.map(y + -1/4, y1, y2, 0, 256);

 	let backpack_origin = p5.map(0/4, x1, x2, 0, 256);
 	let backpack_offset_x = p5.map(12/4, x1, x2, 0, 256);
 	let backpack_width = backpack_offset_x - backpack_origin;

 	let backpack_offset_y = p5.map(10/4, x1, x2, 0, 256);
 	let backpack_height = backpack_offset_y - backpack_origin;
 	p5.fill(150, 63, 42); //RED
 	p5.rect(backpack_x, backpack_y, backpack_width, backpack_height, 10);
 }

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	p5.angleMode(p5.DEGREES);
	p5.background(222, 249, 247);

	let max_shift = max_thickness + max_movement;
	let max_cloud_shift = max_thickness + max_cloud_movement;
	let max_cloud1_shift = max_cloud_thickness + max_cloud1_movement;

	//FOR MAIN PARACHUTER GRID
	let min_x = snap_to_grid(x1 - max_shift, grid_size);
  	let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  	let min_y = snap_to_grid(y1 - max_shift, grid_size);
  	let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  	// FOR BOTTOM CLOUD GRID
  	let cloud_min_x = snap_to_grid(x1 - max_shift, cloud_grid_size);
  	let cloud_max_x = snap_to_grid(x2 + max_shift + cloud_grid_size, cloud_grid_size);
  	let cloud_min_y = snap_to_grid(y1 - max_shift, cloud_grid_size);
  	let cloud_max_y = snap_to_grid(y2 + max_shift + cloud_grid_size, cloud_grid_size);

  	//FOR TOP CLOUD GRID
  	let cloud1_min_x = snap_to_grid(x1 - max_cloud_shift, cloud1_grid_size);
  	let cloud1_max_x = snap_to_grid(x2 + max_cloud_shift + cloud1_grid_size, cloud1_grid_size);
  	let cloud1_min_y = snap_to_grid(y1 - max_cloud_shift, cloud1_grid_size);
  	let cloud1_max_y = snap_to_grid(y2 + max_cloud_shift + cloud1_grid_size, cloud1_grid_size);

  	//FOR SMALLER BOTTOM PARACHUTER GRID
	let para2_min_x = snap_to_grid(x1 - max_cloud_shift, para2_grid_size);
  	let para2_max_x = snap_to_grid(x2 + max_cloud_shift + para2_grid_size, para2_grid_size);
  	let para2_min_y = snap_to_grid(y1 - max_cloud_shift, para2_grid_size);
  	let para2_max_y = snap_to_grid(y2 + max_cloud_shift + para2_grid_size, para2_grid_size);

  	//BOTTOM PARACHUTER GRID
	for(let x=para2_min_x; x<para2_max_x; x+=para2_grid_size) {
    	for(let y=para2_min_y; y<para2_max_y; y+=para2_grid_size) {	

	      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.01);
	      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.01);
	      let shifted_x = x + offsetX;
	      let shifted_y = y + offsetY;
	      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
	      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

	      if(zoom >=4){
			parachuter_small(p5, shifted_x, shifted_y, x1, x2, y1, y2);
			}
    	}
    }

  	//CLOUD GRID BOTTOM
	for(let x=cloud_min_x; x<cloud_max_x; x+=cloud_grid_size) {
    	for(let y=cloud_min_y; y<cloud_max_y; y+=cloud_grid_size) {	

	      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_cloud_movement, max_cloud_movement, 0.01);
	      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_cloud_movement, max_cloud_movement, 0.01);
	      //console.log(offsetX);
	      let shifted_x = x + offsetX;
	      let shifted_y = y + offsetY;
	      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
	      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

	      //CLOUD MOVEMENT
	      let moving = 1;
	      moving = (moving - (p5.globalFrameCount/5))%70;	

	      if(zoom >=2){
			cloud(p5, shifted_x, shifted_y+moving, x1, x2, y1, y2);
		  }
    	}
    }

    //PARACHUTER GRID MAIN
	for(let x=min_x; x<max_x; x+=grid_size) {
    	for(let y=min_y; y<max_y; y+=grid_size) {

		    let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
		    let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
		    let shifted_x = x + offsetX;
		    let shifted_y = y + offsetY;
		    let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
		    let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

			let phase = getRandomValue(p5, x, y, z, "phase", 0, 360, 0.1);
		    let sin_value = p5.sin(phase + (p5.globalFrameCount*2));
		 	let cur_angle = p5.map(sin_value, -1, 1, -3, 3);
			let rotate_x = p5.map(x + 5/25, x1, x2, 0, 256);
			let rotate_y = p5.map(y + -75.203/25, y1, y2, 0, 256);

		    let x_pos2 = p5.map(x, x1, x2, 0, 256);
		    let y_pos2 = p5.map(y, y1, y2, 0, 256);

			let legs_rotate_x = p5.map(shifted_x+1.5, x1, x2, 0, 256);
		    let legs_rotate_y = p5.map(shifted_y+3, y1, y2, 0, 256);

		    let armleft_rotate_x = p5.map(shifted_x, x1, x2, 0, 256);
		    let armright_rotate_x = p5.map(shifted_x+2.5, x1, x2, 0, 256);

		    let arms_rotate_y = p5.map(shifted_y, y1, y2, 0, 256);


			p5.noStroke();
			p5.push();
		 		p5.translate(x_pos2, y_pos2)
	 			p5.rotate(cur_angle);
		 		p5.translate(-x_pos2, -y_pos2)

				if(zoom >= 4){
					backpack(p5, shifted_x, shifted_y, x1, x2, y1, y2);
				}

				if(zoom>=2){
					//LEGS
					p5.push();
						p5.translate(legs_rotate_x, legs_rotate_y)
		 				p5.rotate(cur_angle);
			 			p5.translate(-legs_rotate_x, -legs_rotate_y)
			 			legs(p5, shifted_x, shifted_y, x1, x2, y1, y2);
					p5.pop();	
					//BODY
					parachuter(p5, shifted_x, shifted_y, x1, x2, y1, y2);
				}

				if(zoom >= 4){
					face(p5, shifted_x, shifted_y, x1, x2, y1, y2);
					backpack_straps(p5, shifted_x, shifted_y, x1, x2, y1, y2);
					//HANDS
					p5.push();
						p5.translate(armleft_rotate_x, arms_rotate_y)
		 				p5.rotate(cur_angle);
			 			p5.translate(-armleft_rotate_x, -arms_rotate_y)
			 			hand_right(p5, shifted_x, shifted_y, x1, x2, y1, y2);
					p5.pop();	
					p5.push();
						p5.translate(armright_rotate_x, arms_rotate_y)
		 				p5.rotate(-cur_angle);
			 			p5.translate(-armright_rotate_x, -arms_rotate_y)
			 			hand_left(p5, shifted_x, shifted_y, x1, x2, y1, y2);
					p5.pop();	
					
					//FEET
					p5.push();
						p5.translate(legs_rotate_x, legs_rotate_y)
						p5.rotate(cur_angle);
			 			p5.translate(-legs_rotate_x, -legs_rotate_y)
						feet(p5, shifted_x, shifted_y, x1, x2, y1, y2);
					p5.pop();
				}

				if(zoom>=2){
					p5.noStroke();
					//LEFT ARM
					p5.push();
						p5.translate(armleft_rotate_x, arms_rotate_y)
		 				p5.rotate(cur_angle);
			 			p5.translate(-armleft_rotate_x, -arms_rotate_y)
						armleft(p5, shifted_x, shifted_y, x1, x2, y1, y2);
					p5.pop();
					//RIGHT ARM
					p5.push();
						p5.translate(armright_rotate_x, arms_rotate_y)
		 				p5.rotate(-cur_angle);
			 			p5.translate(-armright_rotate_x, -arms_rotate_y)
						armright(p5, shifted_x, shifted_y, x1, x2, y1, y2);
					p5.pop();	
				}
			p5.pop();
		}	


  	//CLOUD GRID FRONT
	for(let x=cloud1_min_x; x<cloud1_max_x; x+=cloud1_grid_size) {
    	for(let y=cloud1_min_y; y<cloud1_max_y; y+=cloud1_grid_size) {	

	      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_cloud1_movement, max_cloud1_movement, 0.01);
	      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_cloud1_movement, max_cloud1_movement, 0.01);
	      let shifted_x = x + offsetX;
	      let shifted_y = y + offsetY;
	      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
	      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

	    if(zoom <=1)  
		cloud_big(p5, shifted_x, shifted_y, x1, x2, y1, y2);
    	}
    }


}

  // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
