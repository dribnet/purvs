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
const cellwidth = 64;
const grid_size = 128;
const max_movement = 16;




/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [2, 420, 400],
  [4, 420, 400]
]

function getOffsetPoint(p5, x, y, z, noiseScale) {
  let offsetX = getRandomValue(p5, x, y, z, "offsetX", -max_movement, max_movement, noiseScale);
  let offsetY = getRandomValue(p5, x, y, z, "offsetY", -max_movement, max_movement, noiseScale);
  return [x+offsetX, y+offsetY]
}


//function drawCells(p5, x1, x2, y1, y2, pos_x, pos_y, rad1) {
//  const sqrt2 = 1.4142/2;
//  let offsets = [
//    [sqrt2, sqrt2],
//    [-sqrt2, sqrt2],
//    [-sqrt2, -sqrt2],
//    [sqrt2, -sqrt2]
//  ]
//  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
//  let pixel_posx2 = p5.map(pos_x+rad1, x1, x2, 0, 256);
//  let pixel_radius = pixel_posx2 - pixel_posx1;
//  p5.ellipse(pixel_posx1, pixel_posx2, pixel_radius);
//  //for(let i=0; i<offsets.length; i++) {
//  //  let offset = offsets[i];
//  //  let pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
//  //  let pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
//  //  p5.ellipse(pixel_x, pixel_y, pixel_radius);    
//  //}
//}


function fillCell(p5,x1, x2, y1, y2,xpos,ypos,radius){
	let fillNumber = 3;// arbirtary
	
	let newX = p5.map(xpos, x1, x2, 0, 256);
	let newY = p5.map(ypos, y1, y2, 0, 256);	
	//newX = xpos+radius/4;
	//newY = Math.random(ypos-radius,ypos+radius);
	newY = ypos;
	newRad = radius;
	for(let i = 0; i<fillNumber;i++){
		p5.ellipse(newX,newY,newRad);
	}
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // temporary variables used for object placement
  p5.background(0);
  p5.rectMode(p5.CORNERS);

  let max_shift = 100 + max_movement;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  let centerpoint = p5.map(0, x1, x2, 0, 256);
  let centerCell = p5.map(cellwidth, x1, x2, 0, 256);
  let curCellRadius = centerCell - centerpoint;

  
  

 	centerx = p5.map(512, x1, x2, 0, 256);
  	centery = p5.map(512, y1, y2, 0, 256);
	
	  	for(let x=min_x; x<max_x; x+=grid_size) 
	  	{

	    	for(let y=min_y; y<max_y; y+=grid_size) 
	    	{

	    		let shift_point = getOffsetPoint(p5, x, y, z, 100);
				let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
	      		let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);	

	    			
				  	if(zoom <3)
				  	{

					  	p5.stroke(0, 200, 150);
					  	p5.strokeWeight(3);
					  	p5.fill(0, 200, 150,100);
		    					
						p5.ellipse(x_pos, y_pos, curCellRadius);

						x_pos = p5.map(x-20, x1, x2, 0, 256);
		      			y_pos = p5.map(y+40, y1, y2, 0, 256);
						p5.ellipse(x_pos, y_pos, curCellRadius/4);

						x_pos = p5.map(x+45, x1, x2, 0, 256);
		      			y_pos = p5.map(y+20, y1, y2, 0, 256);
						p5.ellipse(x_pos, y_pos, curCellRadius/10);

						x_pos = p5.map(x-5, x1, x2, 0, 256);
		      			y_pos = p5.map(y-20, y1, y2, 0, 256);  
						p5.ellipse(x_pos, y_pos, curCellRadius/5);

						x_pos = p5.map(x+15, x1, x2, 0, 256);
		      			y_pos = p5.map(y-20, y1, y2, 0, 256); 	
						p5.ellipse(x_pos, y_pos, curCellRadius/3);

						x_pos = p5.map(x-25, x1, x2, 0, 256);
		      			y_pos = p5.map(y+50, y1, y2, 0, 256); 	
						p5.ellipse(x_pos, y_pos, curCellRadius/3); 


	    			}

	    			if(zoom >=3)
	    			{
	    				p5.stroke(0, 200, 150,100);
					  	p5.strokeWeight(3);
					  	p5.fill(0, 200, 150,20);
	    				p5.ellipse(x_pos, y_pos, curCellRadius);

	    				
							p5.stroke(0, 200, 150);
							p5.fill(0, 200, 150,100);
					  		p5.strokeWeight(3);
							x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1], y1, y2, 0, 256); 	
							//p5.ellipse(x_pos, y_pos, curCellRadius);

							//bottom center
							x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+28, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10); 

							//top
							x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-28, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10); 
							//right
							x_pos = p5.map(shift_point[0]+28, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1], y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);
							//left
							x_pos = p5.map(shift_point[0]-28, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1], y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							//left up

							x_pos = p5.map(shift_point[0]-27, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-7, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]-24, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-14, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]-20, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-20, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]-14, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-25, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]-7, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-27, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							//right up

							x_pos = p5.map(shift_point[0]+27, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-7, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]+24, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-14, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]+20, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-20, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]+14, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-25, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]+7, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]-27, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							//left down

							x_pos = p5.map(shift_point[0]-27, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+7, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]-24, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+14, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]-20, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+20, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]-14, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+25, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]-7, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+27, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							//right down\

							x_pos = p5.map(shift_point[0]+27, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+7, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]+24, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+14, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]+20, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+20, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]+14, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+25, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							x_pos = p5.map(shift_point[0]+7, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1]+27, y1, y2, 0, 256); 	
							p5.ellipse(x_pos, y_pos, curCellRadius/10);

							
	    			}

		  	}
		}





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









	  function getOffsetPoint(p5, x, y, z, noiseScale) 
	  {
		  let noiseX = p5.noise(x * noiseScale,
		                        y * noiseScale, z);
		  let noiseY = p5.noise(x * noiseScale,
		                        y * noiseScale, z+50);
		  let offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
		  let offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
		  return [x+offsetX, y+offsetY]
	  }

	  function snap_to_grid(num, gsize)
	  {
	  		return(num-(num % gsize));
	  }

	// debug - show border
  // p5.noFill();
  // p5.strokeWeight(1);
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}



