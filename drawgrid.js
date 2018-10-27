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
const grid_size = 120;
const para2_grid_size = 50;
let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 610, 541],
  [2, 600, 355],
  [3, 615, 358],
  [3, 618, 781],
  [4, 735, 958]
]


function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}


function firstSquare(p5, x, y, x1, x2, y1, y2) {


  // let sineWave = p5.sin(p5.globalFrameCount/10);
  // let height = p5.map(sineWave, -1, 1, 0, 15);

	let quad_x1 = p5.map(x-75/2, x1, x2, 0, 256);
	let quad_y1 = p5.map(y+0/2, y1, y2, 0, 256);
	let quad_x2 = p5.map(x+0/2, x1, x2, 0, 256);
	let quad_y2 = p5.map(y-60/2, y1, y2, 0, 256);
	let quad_x3 = p5.map(x+75/2, x1, x2, 0, 256);
	let quad_y3 = p5.map(y+0/2, y1, y2, 0, 256);
	let quad_x4 = p5.map(x+0/2, x1, x2, 0, 256);
	let quad_y4 = p5.map(y+60/2, y1, y2, 0, 256);

	p5.fill(253, 253, 105);
	p5.quad(quad_x1, quad_y1, quad_x2, quad_y2, quad_x3, quad_y3, quad_x4, quad_y4);
}



function cube(p5, x, y, x1, x2, y1, y2, z) {
let phase = getRandomValue(p5, x, y, z, "phase", 0, 2*p5.PI, 0.1);
	let sineWave = p5.sin(phase + p5.globalFrameCount/10);
  	let height = p5.map(sineWave, -1, 1, 0, 12);

  	
  	// let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
  	// let shifted_y = y + offsetY;

	let quad_x1 = p5.map(x-75/2, x1, x2, 0, 256);
	let quad_y1 = p5.map(y+0/2+height, y1, y2, 0, 256);
	let quad_x2 = p5.map(x+0/2, x1, x2, 0, 256);
	let quad_y2 = p5.map(y-60/2+height, y1, y2, 0, 256);
	let quad_x3 = p5.map(x+75/2, x1, x2, 0, 256);
	let quad_y3 = p5.map(y+0/2+height, y1, y2, 0, 256);
	let quad_x4 = p5.map(x+0/2, x1, x2, 0, 256);
	let quad_y4 = p5.map(y+60/2+height, y1, y2, 0, 256);

	p5.fill(253, 253, 105);
	p5.quad(quad_x1, quad_y1, quad_x2, quad_y2, quad_x3, quad_y3, quad_x4, quad_y4);

	let left_x1 = p5.map(x-75/2, x1, x2, 0, 256);
	let left_y1 = p5.map(y+0/2+height, y1, y2, 0, 256);
	let left_x2 = p5.map(x+0/2, x1, x2, 0, 256);
	let left_y2 = p5.map(y+60/2+height, y1, y2, 0, 256);
	let left_x3 = p5.map(x+0/2, x1, x2, 0, 256);
	let left_y3 = p5.map(y+100/2, y1, y2, 0, 256);
	let left_x4 = p5.map(x-75/2, x1, x2, 0, 256);
	let left_y4 = p5.map(y+40/2, y1, y2, 0, 256);

	p5.fill(99,78,143);
	p5.quad(left_x1, left_y1, left_x2, left_y2, left_x3, left_y3, left_x4, left_y4);

	let right_x1 = p5.map(x+75/2, x1, x2, 0, 256);
	let right_y1 = p5.map(y+0/2+height, y1, y2, 0, 256);
	let right_x2 = p5.map(x+0/2, x1, x2, 0, 256);
	let right_y2 = p5.map(y+60/2+height, y1, y2, 0, 256);
	let right_x3 = p5.map(x+0/2, x1, x2, 0, 256);
	let right_y3 = p5.map(y+100/2, y1, y2, 0, 256);
	let right_x4 = p5.map(x+75/2, x1, x2, 0, 256);
	let right_y4 = p5.map(y+40/2, y1, y2, 0, 256);

	p5.fill(54, 32, 81);
	p5.quad(right_x1, right_y1, right_x2, right_y2, right_x3, right_y3, right_x4, right_y4);

	let left_tri_x1 = p5.map(x+0/2, x1, x2, 0, 256);
	let left_tri_y1 = p5.map(y-30/2+height, y1, y2, 0, 256);
	let left_tri_x2 = p5.map(x+38/2, x1, x2, 0, 256);
	let left_tri_y2 = p5.map(y+0/2+height, y1, y2, 0, 256);
	let left_tri_x3 = p5.map(x+0/2, x1, x2, 0, 256);
	let left_tri_y3 = p5.map(y+30/2+height, y1, y2, 0, 256);


	p5.fill(99,78,143);
	p5.triangle(left_tri_x1, left_tri_y1, left_tri_x2, left_tri_y2, left_tri_x3, left_tri_y3);

	let right_tri_x1 = p5.map(x+0/2, x1, x2, 0, 256);
	let right_tri_y1 = p5.map(y-30/2+height, y1, y2, 0, 256);
	let right_tri_x2 = p5.map(x-38/2, x1, x2, 0, 256);
	let right_tri_y2 = p5.map(y+0/2+height, y1, y2, 0, 256);
	let right_tri_x3 = p5.map(x+0/2, x1, x2, 0, 256);
	let right_tri_y3 = p5.map(y+30/2+height, y1, y2, 0, 256);


	p5.fill(54, 32, 81);
	p5.triangle(right_tri_x1, right_tri_y1, right_tri_x2, right_tri_y2, right_tri_x3, right_tri_y3);



	}

	function triangle(p5, x, y, x1, x2, y1, y2) {

	let left_tri_x1 = p5.map(x+0/2, x1, x2, 0, 256);
	let left_tri_y1 = p5.map(y-30/2, y1, y2, 0, 256);
	let left_tri_x2 = p5.map(x+38/2, x1, x2, 0, 256);
	let left_tri_y2 = p5.map(y+0/2, y1, y2, 0, 256);
	let left_tri_x3 = p5.map(x+0/2, x1, x2, 0, 256);
	let left_tri_y3 = p5.map(y+30/2, y1, y2, 0, 256);


	p5.fill(99,78,143);
	p5.triangle(left_tri_x1, left_tri_y1, left_tri_x2, left_tri_y2, left_tri_x3, left_tri_y3);


	}

function smallSquares(p5, x, y, x1, x2, y1, y2) {



	let square1_x1 = p5.map(x-75/4, x1, x2, 0, 256);
	let square1_y1 = p5.map(y+0/4, y1, y2, 0, 256);
	let square1_x2 = p5.map(x+0/4, x1, x2, 0, 256);
	let square1_y2 = p5.map(y-60/4, y1, y2, 0, 256);
	let square1_x3 = p5.map(x+75/4, x1, x2, 0, 256);
	let square1_y3 = p5.map(y+0/4, y1, y2, 0, 256);
	let square1_x4 = p5.map(x+0/4, x1, x2, 0, 256);
	let square1_y4 = p5.map(y+60/4, y1, y2, 0, 256);

	p5.fill(54, 32, 81);
	
	p5.quad(square1_x1, square1_y1, square1_x2, square1_y2, square1_x3, square1_y3, square1_x4, square1_y4);
	
}

function animate_triangle(p5, x, y, x1, x2, y1, y2, z) {
let phase = getRandomValue(p5, x, y, z, "phase", 0, 2*p5.PI, 0.1);
  let sineWave = p5.sin(phase + p5.globalFrameCount/10);
  let height = p5.map(sineWave, -1, 1, 0, -6);


	let square1_x1 = p5.map(x-75/4, x1, x2, 0, 256);
	let square1_y1 = p5.map(y+0/4+height, y1, y2, 0, 256);
	let square1_x2 = p5.map(x+0/4, x1, x2, 0, 256);
	let square1_y2 = p5.map(y-60/4+height, y1, y2, 0, 256);
	let square1_x3 = p5.map(x+75/4, x1, x2, 0, 256);
	let square1_y3 = p5.map(y+0/4+height, y1, y2, 0, 256);
	let square1_x4 = p5.map(x+0/4, x1, x2, 0, 256);
	let square1_y4 = p5.map(y+60/4+height, y1, y2, 0, 256);

	p5.fill(54, 32, 81);
	
	p5.quad(square1_x1, square1_y1, square1_x2, square1_y2, square1_x3, square1_y3, square1_x4, square1_y4);


	let left_tri_x1 = p5.map(x+0/2, x1, x2, 0, 256);
	let left_tri_y1 = p5.map(y-30/2+height, y1, y2, 0, 256);
	let left_tri_x2 = p5.map(x+38/2, x1, x2, 0, 256);
	let left_tri_y2 = p5.map(y+0/2+height, y1, y2, 0, 256);
	let left_tri_x3 = p5.map(x+0/2, x1, x2, 0, 256);
	let left_tri_y3 = p5.map(y+30/2+height, y1, y2, 0, 256);


	p5.fill(99,78,143);
	p5.triangle(left_tri_x1, left_tri_y1, left_tri_x2, left_tri_y2, left_tri_x3, left_tri_y3);


	let left_x1 = p5.map(x-75/4, x1, x2, 0, 256);
	let left_y1 = p5.map(y+0/4+height, y1, y2, 0, 256);
	let left_x2 = p5.map(x+0/4, x1, x2, 0, 256);
	let left_y2 = p5.map(y+60/4+height, y1, y2, 0, 256);
	let left_x3 = p5.map(x+0/4, x1, x2, 0, 256);
	let left_y3 = p5.map(y+65/4, y1, y2, 0, 256);
	let left_x4 = p5.map(x-75/4, x1, x2, 0, 256);
	let left_y4 = p5.map(y+5/4, y1, y2, 0, 256);

	p5.fill(214,214,89);
	p5.quad(left_x1, left_y1, left_x2, left_y2, left_x3, left_y3, left_x4, left_y4);

	let right_x1 = p5.map(x+76/4, x1, x2, 0, 256);
	let right_y1 = p5.map(y+0/4+height, y1, y2, 0, 256);
	let right_x2 = p5.map(x+0/4, x1, x2, 0, 256);
	let right_y2 = p5.map(y+60/4+height, y1, y2, 0, 256);
	let right_x3 = p5.map(x+0/4, x1, x2, 0, 256);
	let right_y3 = p5.map(y+65/4, y1, y2, 0, 256);
	let right_x4 = p5.map(x+76/4, x1, x2, 0, 256);
	let right_y4 = p5.map(y+5/4, y1, y2, 0, 256);

	p5.fill(194, 194, 80);
	p5.quad(right_x1, right_y1, right_x2, right_y2, right_x3, right_y3, right_x4, right_y4);

}




// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background(255);
  p5.noStroke();

   let max_shift = max_thickness;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

   for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
 

 // if (zoom == 1){
		
	// 	smallSquares(p5, x, y, x1, x2, y1, y2 );
		


 // 	 if (zoom <= 2){
	// 	firstSquare(p5, x, y, x1, x2, y1, y2 );

		
	// }



	
	// }

	// if (zoom >= 3){
	// 	cube(p5, x, y, x1, x2, y1, y2, z );
 //    }
if (zoom < 3){
	firstSquare(p5, x, y, x1, x2, y1, y2 );	
}
		

 if (zoom == 1){
 	smallSquares(p5, x, y, x1, x2, y1, y2 );
 }

	 if (zoom == 2){
		animate_triangle(p5, x, y, x1, x2, y1, y2 );
	}

if (zoom >=3){
	
	cube(p5, x, y, x1, x2, y1, y2, z );

}

// smallSquares(p5, x, y, x1, x2, y1, y2 );
	


}

  }












  // debug - show border
 // p5.noFill();
 //  p5.stroke(0, 200, 200)
 //  p5.rect(0, 0, 255, 255);
}

