const max_thickness = 64;
const max_movement = 16;
const ball_radius = 32;
const line_width = 8;
const grid_size = 64;
var img; 

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 356.500000000000, 665.750000000000],
  [3, 353.250000000000, 668.187500000000],
  [4, 322.562500000000, 645.093750000000],
  [5, 322.562500000000, 645.109375000000],
  [7, 317.984375000000, 643.636718750000],
  [3, 317.984375000000, 643.636718750000]
]

// function displayPictures(){
//   one = p5.loadImage("assets/water.png", function() {
//     p5.image(one,0,0); 
//   });
// }
/* this function takes a coordinate and aligns to a grid of size gsize */


// function setup() {
//   p5.angleMode(DEGREES);
// }

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
  let noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  let noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+10);
  let offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  let offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function firstZoom(p5, x, y, x1, x2, y1, y2){

	  //set x,y
  let start_x = p5.map(x + -280, x1, x2, 0, 256);
  let width = p5.map(x + 480, x1, x2, 0, 256);
  
  let cover_x2 = p5.map(x + 100, x1, x2, 0, 256);
  let cover_x3 = p5.map(x + 120 , x1, x2, 0, 256);
  let cover_x4 = p5.map(x + 210, x1, x2, 0, 256);
  
  let start_y = p5.map(y + -230, y1, y2, 0, 256);
  let height = p5.map(y + 220, y1, y2, 0, 256);
  
  let cover_y2 = p5.map(y + -100 , y1, y2, 0, 256);
  let cover_y3 = p5.map(y + 200 , y1, y2, 0, 256);
  let cover_y4 = p5.map(y+ -80  , y1, y2, 0, 256);
  let cover_y5 = p5.map(y+ -210  , y1, y2, 0, 256);



  	
  	var mid_x = start_x + ((width-start_x)/2);
  	
  	
  	var mid_y = start_y + ((height-start_y)/2);


	// p5.fill(255, 0, 0);
	// p5.beginShape();
	// p5.vertex(start_x,start_y);
 //  	p5.vertex(width,start_y);
 //  	p5.vertex(width,height);
 //  	p5.vertex(start_x,height);
	// p5.endShape(close);
	p5.fill(139,69,19);



	p5.rect(mid_x-180, mid_y- 50, 320, -60);

	p5.rect(mid_x-220, mid_y, 400, -60);

	p5.beginShape();
	p5.vertex(mid_x,mid_y);
  	p5.vertex(mid_x+250,mid_y);
  	p5.vertex(mid_x+150,mid_y+100);
  	p5.vertex(mid_x,mid_y+100);
  	p5.vertex(mid_x-150,mid_y+100);
	p5.vertex(mid_x-300,mid_y);
	p5.vertex(mid_x, mid_y);
	p5.endShape(close);

	p5.beginShape();
	p5.curveVertex(mid_x);
	p5.curveVertex();
	p5.curveVertex();
	p5.curveVertex();
	p5.curveVertex();
	p5.endShape();


	// p5.beginShape();
	// p5.vertex(mid_x, mid_y);
	// p5.vertex(mid_x +150, mid_y);
	// p5.vertex(mid_x +150, mid_y -100);
	// p5.vertex(mid_x -200, mid_y -100);
	// p5.vertex(mid_x -200, mid_y);
	// p5.endShape(close);

	// p5.beginShape();
	// p5.vertex(mid_x, mid_y);
	// p5.vertex(mid_x +200, mid_y);
	// p5.vertex(mid_x +200, mid_y -50);
	// p5.vertex(mid_x -250, mid_y -50);
	// p5.vertex(mid_x -250, mid_y);
	// p5.endShape(close);


	// console.log(mid_x);
	// console.log(mid_y);

}
  function drawBG(p5, x1, x2, y1, y2, z, zoom) {
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;

  // /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // debug version: draw one
  // let half_x = (x1 + x2) / 2;
  // let half_y = (y1 + y2) / 2;
  // min_x = snap_to_grid(half_x, grid_size);
  // max_x = snap_to_grid(half_x + grid_size, grid_size);
  // min_y = snap_to_grid(half_y, grid_size);
  // max_y = snap_to_grid(half_y + grid_size, grid_size);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;

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

      /* now draw all elements from back to front */
      if (zoom <=1.9){
      	  p5.push();

      p5.stroke(255, 0, 0);
      p5.fill(0, 0, 128);
      p5.stroke(255);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*4);

      p5.pop();

    }
      
      if (zoom >= 2) {
      	p5.push();
      	p5.fill(100);
        p5.ellipse(x_pos-25, y_pos+25, 110);
        p5.ellipse(x_pos+25, y_pos+25, 110);    
        p5.fill(0, 0, 255);
        p5.stroke(255);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);

        console.log(cur_ball_radius);

        p5.noStroke();
              p5.pop();


      }
    }
  }
console.log("zoom is" + zoom);

  //debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.strokeWeight(1);
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}

function secondZoom(p5, x, y, x1, x2, y1, y2){
   
}

function thirdZoom(p5, x, y, x1, x2, y1, y2){

}

function fourthZoom(p5, x, y, x1, x2, y1, y2){

}

function lastZoom(p5, x, y, x1, x2, y1, y2){

}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {



    if (zoom < 1){

    	p5.background(255);
    	drawBG(p5, x1, x2, x1, x2, y1, y2, z, zoom);
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
		lastZoom(p5, 412, 512, x1, x2, y1, y2, zoom);
    }
}



  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.strokeWeight(1);
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);



