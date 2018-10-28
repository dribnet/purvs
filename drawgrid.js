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
  [3, 507, 503],
  [4, 502, 491],
  [5, 509, 484],
  [6, 509, 484],
  [7, 507, 484],
  [4, 503, 503],
]

function getOffsetPoint(p5, x, y, z, noiseScale) {
  let offsetX = getRandomValue(p5, x, y, z, "offsetX", -max_movement, max_movement, noiseScale);
  let offsetY = getRandomValue(p5, x, y, z, "offsetY", -max_movement, max_movement, noiseScale);
  return [x+offsetX, y+offsetY]
}




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
					  	p5.fill(0, 200, 150,30);
	    				p5.ellipse(x_pos, y_pos, curCellRadius);

	    				
							p5.stroke(0, 200, 150);
							p5.fill(0, 200, 150,100);
					  		p5.strokeWeight(3);
							x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1], y1, y2, 0, 256); 	
							

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

							//right down

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

								


							//mitochondria
							p5.stroke(206, 109, 6);
							p5.fill(206, 109, 6,100);
							x_pos = p5.map(shift_point[0] +5, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1] -10, y1, y2, 0, 256); 
		      				p5.ellipse(x_pos, y_pos+Math.random(0,10), curCellRadius/7,curCellRadius/13);
		      				x_pos = p5.map(shift_point[0] +10, x1, x2, 0, 256);
		      				p5.ellipse(x_pos, y_pos+Math.random(0,10), curCellRadius/7,curCellRadius/13);

		      				x_pos = p5.map(shift_point[0] +5, x1, x2, 0, 256);
		      				y_pos = p5.map(shift_point[1] +10, y1, y2, 0, 256); 
		      				p5.ellipse(x_pos, y_pos+Math.random(0,10), curCellRadius/13,curCellRadius/7);
		      				y_pos = p5.map(shift_point[1] +15, y1, y2, 0, 256); 
		      				p5.ellipse(x_pos, y_pos+Math.random(0,10), curCellRadius/13,curCellRadius/7);
		      				// endoplasmic reticulum
		      				let e1 = p5.map(shift_point[0]-18, x1, x2, 0, 256);
		      				let e2 = p5.map(shift_point[1]-15, y1, y2, 0, 256);

		      				let e3 = p5.map(shift_point[0]-12, x1, x2, 0, 256);
		      				let e4 = p5.map(shift_point[1]-18, y1, y2, 0, 256);
							let e5 = p5.map(shift_point[0]-19, x1, x2, 0, 256);
		      				let e6 = p5.map(shift_point[1]-16, y1, y2, 0, 256);

		      				let e7 = p5.map(shift_point[0]-15, x1, x2, 0, 256);
		      				let e8 = p5.map(shift_point[1], y1, y2, 0, 256);
		      				let e9 = p5.map(shift_point[0]-10, x1, x2, 0, 256);
		      				let e10= p5.map(shift_point[1]-15, y1, y2, 0, 256);

		      				let e11 = p5.map(shift_point[0], x1, x2, 0, 256);
		      				let e12 = p5.map(shift_point[1], y1, y2, 0, 256);
      						let e13 = p5.map(shift_point[0], x1, x2, 0, 256);
		      				let e14 = p5.map(shift_point[1], y1, y2, 0, 256);

		      				let e15 = p5.map(shift_point[0]-14, x1, x2, 0, 256);
		      				let e16 = p5.map(shift_point[1]-12, y1, y2, 0, 256);
							let e17 = p5.map(shift_point[0]-10, x1, x2, 0, 256);
		      				let e18 = p5.map(shift_point[1]-13, y1, y2, 0, 256);

		      				let e19 = p5.map(shift_point[0]-14, x1, x2, 0, 256);
		      				let e20 = p5.map(shift_point[1]+12, y1, y2, 0, 256);
							let e21 = p5.map(shift_point[0]-10, x1, x2, 0, 256);
		      				let e22 = p5.map(shift_point[1]+13, y1, y2, 0, 256);

		      				let e23 = p5.map(shift_point[0]-12, x1, x2, 0, 256);
		      				let e24 = p5.map(shift_point[1]+18, y1, y2, 0, 256);
							let e25 = p5.map(shift_point[0]-19, x1, x2, 0, 256);
		      				let e26 = p5.map(shift_point[1]+16, y1, y2, 0, 256);

		      				let e27 = p5.map(shift_point[0]-8, x1, x2, 0, 256);
		      				let e28 = p5.map(shift_point[1]+18, y1, y2, 0, 256);
							let e29 = p5.map(shift_point[0]-10, x1, x2, 0, 256);
		      				let e30 = p5.map(shift_point[1]-16, y1, y2, 0, 256);
		      				
		      				p5.noFill();
		      				p5.stroke(0,0,200);
		      				
		      				p5.beginShape();
		      				
		      				p5.vertex(e1,e2);
		      				p5.quadraticVertex(e3,e4,e5,e6);
		      				p5.quadraticVertex(e7,e8,e9,e10);
		      				p5.quadraticVertex(e11,e12,e13,e14);
		      				p5.quadraticVertex(e15,e16,e17,e18);
		      				p5.quadraticVertex(e19,e20,e21,e22);
		      				p5.quadraticVertex(e23,e24,e25,e26);
		      				p5.quadraticVertex(e27,e28,e29,e30);
		      				p5.quadraticVertex(e3,e12,e19,e20);
		      				p5.quadraticVertex(e11,e12,e13,e14);
		      				p5.quadraticVertex(e23,e24,e25,e26);
		      				p5.quadraticVertex(e19,e20,e21,e22);
		      				p5.quadraticVertex(e19,e20,e21,e22);
		      				p5.quadraticVertex(e23,e24,e25,e26);
		      				p5.quadraticVertex(e3,e4,e5,e6);
		      				p5.quadraticVertex(e7,e8,e9,e10);
		      				p5.quadraticVertex(e27,e28,e29,e30);
		      				p5.quadraticVertex(e3,e12,e19,e20);
		      				p5.quadraticVertex(e23,e24,e25,e26);
		      				p5.quadraticVertex(e1,e2,e3,e4);
		      				p5.quadraticVertex(e23,e24,e25,e26);
		      				p5.quadraticVertex(e1,e2,e3,e4);
		      				p5.endShape();




		      				//nucleus
		      				p5.stroke(160, 20, 200);
							p5.fill(0);
							x_pos = p5.map(shift_point[0]-15, x1, x2, 0, 256);												
		      				y_pos = p5.map(shift_point[1], y1, y2, 0, 256); 
		      				p5.ellipse(x_pos, y_pos, curCellRadius/5,curCellRadius/3);
		      				p5.fill(160, 20, 200,200);	
							p5.ellipse(x_pos, y_pos, curCellRadius/5,curCellRadius/3);
		      				//nucleolous
		      				
							y_pos = p5.map(shift_point[1]+5, y1, y2, 0, 256); 
							p5.ellipse(x_pos, y_pos, curCellRadius/8,curCellRadius/8);

							

							


	    			}


			    			if(zoom >=6)
			    			{
			    				//nucleolus
			    				p5.stroke(160, 20, 200);
			    				p5.fill(0);
			    				p5.ellipse(x_pos, y_pos, curCellRadius/8,curCellRadius/8);
								p5.fill(200, 20, 200,200);
			    				p5.ellipse(x_pos, y_pos, curCellRadius/8,curCellRadius/8);	

			    				
				      					
				      		}
				      		if(zoom >=7)
			    			{
			    				p5.stroke(160, 20, 200);
			    				p5.fill(0);
			    				p5.ellipse(x_pos, y_pos, curCellRadius/8,curCellRadius/8);
								p5.fill(200, 20, 200,150);
			    				p5.ellipse(x_pos, y_pos, curCellRadius/8,curCellRadius/8);	
			    				//chromosomes
			    				p5.fill(0);
		      					p5.noStroke();
			    				x_pos = p5.map(shift_point[0]-13.4, x1, x2, 0, 256);
			    				y_pos = p5.map(shift_point[1]+7.4, y1, y2, 0, 256); 	
		      					p5.ellipse(x_pos, y_pos, curCellRadius/32,curCellRadius/128);

		      					x_pos = p5.map(shift_point[0]-14.3, x1, x2, 0, 256);
			    				y_pos = p5.map(shift_point[1]+6.5, y1, y2, 0, 256)
			    				p5.ellipse(x_pos, y_pos, curCellRadius/128,curCellRadius/32);



			    				x_pos = p5.map(shift_point[0]-15.6, x1, x2, 0, 256);
			    				y_pos = p5.map(shift_point[1]+1.5, y1, y2, 0, 256); 			    				
			    				p5.ellipse(x_pos, y_pos, curCellRadius/32,curCellRadius/128);
			    				

			    				x_pos = p5.map(shift_point[0]-16.5, x1, x2, 0, 256);
			    				y_pos = p5.map(shift_point[1]+2.4, y1, y2, 0, 256); 	
			    				p5.ellipse(x_pos, y_pos, curCellRadius/128,curCellRadius/32);

			    			}

		  	}
		}





 







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



