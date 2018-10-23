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

const grid_size = 64;
/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [2, 420, 400],
  [4, 420, 400]
]






function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // temporary variables used for object placement
  let max_shift = 0;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  p5.background(0);
  p5.rectMode(p5.CORNERS);
  let cellwidth = 200;


 
 	centerx = p5.map(512, x1, x2, 0, 256);
  	centery = p5.map(512, y1, y2, 0, 256);
  
  // Two ellipses with a radius of 50 units are then added.
//--------------------------------------------------------External cell
  
  diamter = p5.map(512+cellwidth, x1, x2, 0, 256);
  p5.stroke(0, 200, 150);
  p5.strokeWeight(5);
  p5.noFill();
  p5.fill(0, 200, 150,100);
  p5.ellipse(centerx, centery, (diamter-centerx));

  	p5.strokeWeight(2);

 //--------------------------------------------------------internal cells

	  diamter = p5.map(512+cellwidth/10, x1, x2, 0, 256);
	  y = p5.map(512-10, y1, y2, 0, 256);
	  x = p5.map(512-30, x1, x2, 0, 256);	  
	  p5.ellipse(x, y, (diamter-centerx));

	  diamter = p5.map(512+cellwidth/10, x1, x2, 0, 256);
	  y = p5.map(512+20, y1, y2, 0, 256);	
	  x = p5.map(512+45, x1, x2, 0, 256);
	  p5.ellipse(x, y, (diamter-centerx));

	  diamter = p5.map(512+cellwidth/5, x1, x2, 0, 256);
	  y = p5.map(512-20, y1, y2, 0, 256);	
	  x = p5.map(512-5, x1, x2, 0, 256);
	  p5.ellipse(x, y, (diamter-centerx));

	  diamter = p5.map(512+cellwidth/3, x1, x2, 0, 256);
	  y = p5.map(512-20, y1, y2, 0, 256);	
	  x = p5.map(512+15, x1, x2, 0, 256);
	  p5.ellipse(x, y, (diamter-centerx));

	  diamter = p5.map(512+cellwidth/10, x1, x2, 0, 256);
	  y = p5.map(512+20, y1, y2, 0, 256);	
	  x = p5.map(512+45, x1, x2, 0, 256);
	  p5.ellipse(x, y, (diamter-centerx));

	  diamter = p5.map(512+cellwidth/20, x1, x2, 0, 256);
	  y = p5.map(512-20, y1, y2, 0, 256);	
	  x = p5.map(512+45, x1, x2, 0, 256);
	  p5.ellipse(x, y, (diamter-centerx));

	  diamter = p5.map(512+cellwidth/3, x1, x2, 0, 256);
	  y = p5.map(512+40, y1, y2, 0, 256);	
	  x = p5.map(512-25, x1, x2, 0, 256);
	  p5.ellipse(x, y, (diamter-centerx));










	  function snap_to_grid(num, gsize)
	  {
	  	return(num-(num % gsize));
	  }

	// debug - show border
   //p5.noFill();
   //p5.strokeWeight(1);
   //p5.stroke(255, 0, 0)
   //.rect(0, 0, 255, 255);
}



