

const max_thickness = 64;
const ball_radius = 32;
const line_width = 2;
const grid_size = 64;

const backgrnd = "#105B63";
const lines = "#DB9E36";
const fillColour = "#FFD34E";
const lineWidth = 1;

let do_animation = true;


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

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  let deg = p5.radians(45);
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;
  // let max_shift = max_thickness + grid_size;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // // debug version: draw one
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
  let strokeWidth = c_plwidth - c_p00;

  p5.background(backgrnd);
  p5.strokeWeight(strokeWidth);  
  p5.stroke (lines);
  p5.fill(255, 211, 78, 32);

//set points
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */

      //X VALUES
      let x383 = p5.map(x + (1*grid_size/1), x1, x2, 0, 256);
      let x255 = p5.map(x + grid_size, x1, x2, 0, 256);
      let x128 = p5.map(x +(grid_size/2), x1, x2, 0, 256);
      let x0 = p5.map(x, x1, x2, 0, 256);
      //let NEGx128old = p5.map(x +(-1*grid_size/1), x1, x2, 0, 256);
      let NEGx128 = p5.map(x +(-1*grid_size/1), x1, x2, 0, 256);

      let xtest = p5.map(x + grid_size/7.5, x1, x2, 0, 256);



      //Y values

      let y255 = p5.map(y + grid_size, y1, y2, 0, 256);
      let y235 = p5.map(y + (grid_size - (grid_size/12.8)), y1, y2, 0, 256);
      let y215 = p5.map(y + (grid_size - (2*grid_size/12.8)), y1, y2, 0, 256);
      let y195 = p5.map(y + (grid_size - (3*grid_size/12.8)), y1, y2, 0, 256);
      let y40 = p5.map(y + (2*grid_size/12.8), y1, y2, 0, 256);
      let y20 = p5.map(y + (grid_size/12.8), y1, y2, 0, 256);
      let y0 = p5.map(y, y1, y2, 0, 256);


      // //old stuff

      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);
    }
  }

  let smallGridSize = grid_size/8;


//drawing diamond
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      //diamond

      let ydOffset = 0.035;
      let ydIn = 0.2;
      let xdIn = 0.15;

      let xd0 = p5.map(x + xdIn * grid_size, x1, x2, 0, 256);
      let xd1 = p5.map(x + 0.5 * grid_size, x1, x2, 0, 256);
      let xd2 = p5.map(x + grid_size - (xdIn * grid_size), x1, x2, 0, 256);

      let yd0 = p5.map(y - ydOffset * grid_size, y1, y2, 0, 256);
      let ydm1 = p5.map(y - (0.5 + ydOffset - ydIn) * grid_size, y1, y2, 0, 256);
      let ydp1 = p5.map(y + (0.5 - ydOffset - ydIn) * grid_size, y1, y2, 0, 256);

     //diamond
      if(zoom > 0){ 

      p5.noStroke();
      if(zoom < 2){
        p5.fill(17, 98, 105);
      }
      else if(zoom < 3){
        p5.fill(18, 107, 110);
      }
      else{
        p5.fill(31, 121, 120);
      }

      // draw diamond here
      p5.beginShape();
      p5.vertex(xd0, yd0);
      p5.vertex(xd1, ydp1); 
      p5.vertex(xd2, yd0); 
      p5.vertex(xd1, ydm1);
      p5.vertex(xd0, yd0); 
      p5.endShape();
    }
      
      // // debug view of vertices
      //p5.fill(0, 255, 0);
      //p5.ellipse(xp0, yp0, 30); 
      //p5.ellipse(xp0 + 1*xpdist, yp0, 30); //mid 
     // p5.ellipse(xp2, yp0, 30); 
     // p5.ellipse(xp0, ypm1, 30); 
     // p5.ellipse(xp0, ypp1, 30); 

  }
}

//pattern over diamond
if(zoom > 3){
  let Smin_x = snap_to_grid(x1 - max_shift, smallGridSize);
  let Smax_x = snap_to_grid(x2 + max_shift + smallGridSize, smallGridSize);
  let Smin_y = snap_to_grid(y1 - max_shift, smallGridSize);
  let Smax_y = snap_to_grid(y2 + max_shift + smallGridSize, smallGridSize);


  for(let x=Smin_x; x<Smax_x; x+=smallGridSize) {
    for(let y=Smin_y; y<Smax_y; y+=smallGridSize) {

      p5.strokeWeight(strokeWidth/8);  
      p5.stroke (backgrnd);
      p5.noFill();//p5.fill(255, 211, 78, 32);
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      ///*
      //X VALUES
      let x383 = p5.map(x + (3*smallGridSize/2), x1, x2, 0, 256);
      let x255 = p5.map(x + smallGridSize, x1, x2, 0, 256);
      let x128 = p5.map(x +(smallGridSize/2), x1, x2, 0, 256);
      let x0 = p5.map(x, x1, x2, 0, 256);
      let NEGx128 = p5.map(x +(-1*smallGridSize/2), x1, x2, 0, 256);

      //Y values

      let y255 = p5.map(y + smallGridSize, y1, y2, 0, 256);
      let y235 = p5.map(y + (smallGridSize - (smallGridSize/12.8)), y1, y2, 0, 256);
      let y215 = p5.map(y + (smallGridSize - (2*smallGridSize/12.8)), y1, y2, 0, 256);
      let y195 = p5.map(y + (smallGridSize - (3*smallGridSize/12.8)), y1, y2, 0, 256);
      let y40 = p5.map(y + (2*smallGridSize/12.8), y1, y2, 0, 256);
      let y20 = p5.map(y + (smallGridSize/12.8), y1, y2, 0, 256);
      let y0 = p5.map(y, y1, y2, 0, 256);
      

      p5.beginShape();
      p5.curveVertex(NEGx128, y215);
      p5.curveVertex(x0, y0);
      p5.curveVertex(x128, y195);
      p5.curveVertex(x255, y0);
      p5.curveVertex(x383, y215);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y235);
      p5.curveVertex(x0, y20);
      p5.curveVertex(x128, y215);
      p5.curveVertex(x255, y20);
      p5.curveVertex(x383, y235);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y255);
      p5.curveVertex(x0, y40);
      p5.curveVertex(x128, y235);
      p5.curveVertex(x255, y40);
      p5.curveVertex(x383, y255);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y255);
      p5.curveVertex(x128, y40);
      p5.curveVertex(x255, y255);
      p5.curveVertex(x383, y40);
      p5.endShape();

      
    }
  }

  // //debug - show border
  // p5.noFill();
  // p5.strokeWeight(1);
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
  // p5.textSize(12);
  // p5.text('(' + x1 + ", " + y1 + ")", 10, 30);
}

if(zoom>5){
  let Smin_x = snap_to_grid(x1 - max_shift, smallGridSize);
  let Smax_x = snap_to_grid(x2 + max_shift + smallGridSize, smallGridSize);
  let Smin_y = snap_to_grid(y1 - max_shift, smallGridSize);
  let Smax_y = snap_to_grid(y2 + max_shift + smallGridSize, smallGridSize);
  for(let x=Smin_x; x<Smax_x; x+=smallGridSize) {
    for(let y=Smin_y; y<Smax_y; y+=smallGridSize) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      ///*
      //X VALUES
      let x383 = p5.map(x + (3*smallGridSize/2), x1, x2, 0, 256);
      let x255 = p5.map(x + smallGridSize, x1, x2, 0, 256);
      let x128 = p5.map(x +(smallGridSize/2), x1, x2, 0, 256);
      let x0 = p5.map(x, x1, x2, 0, 256);
      let NEGx128 = p5.map(x +(-1*smallGridSize/2), x1, x2, 0, 256);

      //Y values

      let y255 = p5.map(y + smallGridSize, y1, y2, 0, 256);
      let y235 = p5.map(y + (smallGridSize - (smallGridSize/12.8)), y1, y2, 0, 256);
      let y215 = p5.map(y + (smallGridSize - (2*smallGridSize/12.8)), y1, y2, 0, 256);
      let y195 = p5.map(y + (smallGridSize - (3*smallGridSize/12.8)), y1, y2, 0, 256);
      let y40 = p5.map(y + (2*smallGridSize/12.8), y1, y2, 0, 256);
      let y20 = p5.map(y + (smallGridSize/12.8), y1, y2, 0, 256);
      let y0 = p5.map(y, y1, y2, 0, 256);
      
        p5.strokeWeight(strokeWidth/30);  
        p5.stroke (lines);
        p5.noFill();

        p5.beginShape();
        p5.curveVertex(NEGx128, y215);
        p5.curveVertex(x0, y0);
        p5.curveVertex(x128, y195);
        p5.curveVertex(x255, y0);
        p5.curveVertex(x383, y215);
        p5.endShape();

        p5.beginShape();
        p5.curveVertex(NEGx128, y235);
        p5.curveVertex(x0, y20);
        p5.curveVertex(x128, y215);
        p5.curveVertex(x255, y20);
        p5.curveVertex(x383, y235);
        p5.endShape();

        p5.beginShape();
        p5.curveVertex(NEGx128, y255);
        p5.curveVertex(x0, y40);
        p5.curveVertex(x128, y235);
        p5.curveVertex(x255, y40);
        p5.curveVertex(x383, y255);
        p5.endShape();

        p5.beginShape();
        p5.curveVertex(NEGx128, y0);
        p5.curveVertex(x0, y255);
        p5.curveVertex(x128, y40);
        p5.curveVertex(x255, y255);
        p5.curveVertex(x383, y40);
        p5.endShape();
      }
    }
  }


//drawing
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {

      p5.strokeWeight(strokeWidth);  
      p5.stroke (lines);
      p5.fill(255, 211, 78, 32);
      /* first compute the points to be drawn */

      //X VALUES
      let x255 = p5.map(x + grid_size, x1, x2, 0, 256);
      let x128 = p5.map(x +(grid_size/2), x1, x2, 0, 256);
      let x0 = p5.map(x, x1, x2, 0, 256);


      let x383 = p5.map(x + (1*grid_size/1), x1, x2, 0, 256);
      //let NEGx128old = p5.map(x +(-1*grid_size/1), x1, x2, 0, 256);
      let NEGx128 = p5.map(x +(-1*grid_size/1), x1, x2, 0, 256);

      let xtest = p5.map(x + grid_size/7.5, x1, x2, 0, 256);



      //Y values

      let y255 = p5.map(y + grid_size, y1, y2, 0, 256);
      let y0 = p5.map(y, y1, y2, 0, 256);
      let y128 = p5.map(y +(grid_size/2), y1, y2, 0, 256);

      let y235 = p5.map(y + (grid_size - (grid_size/12.8)), y1, y2, 0, 256);
      let y215 = p5.map(y + (grid_size - (2*grid_size/12.8)), y1, y2, 0, 256);
      let y195 = p5.map(y + (grid_size - (3*grid_size/12.8)), y1, y2, 0, 256);
      let y40 = p5.map(y + (2*grid_size/12.8), y1, y2, 0, 256);
      let y20 = p5.map(y + (grid_size/12.8), y1, y2, 0, 256);


      // //old stuff

      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);


      //diamond

      let ydOffset = 0.035;
      let ydIn = 0.2;
      let xdIn = 0.15;

      let xd0 = p5.map(x + xdIn * grid_size, x1, x2, 0, 256);
      let xd1 = p5.map(x + 0.5 * grid_size, x1, x2, 0, 256);
      let xd2 = p5.map(x + grid_size - (xdIn * grid_size), x1, x2, 0, 256);

      let yd0 = p5.map(y - ydOffset * grid_size, y1, y2, 0, 256);
      let ydm1 = p5.map(y - (0.5 + ydOffset - ydIn) * grid_size, y1, y2, 0, 256);
      let ydp1 = p5.map(y + (0.5 - ydOffset - ydIn) * grid_size, y1, y2, 0, 256);
      

      //test
      //pattern 2

      let xp0 = p5.map(x +  grid_size, x1, x2, 0, 256);
      let xp1 = p5.map(x + 0.5 * grid_size, x1, x2, 0, 256);
      let xp2 = p5.map(x + grid_size - (grid_size), x1, x2, 0, 256);

      let xpdist = 1*(xp2 - xp0)/11;

      let yp0 = p5.map(y - ydOffset * grid_size, y1, y2, 0, 256);
      let ypm1 = p5.map(y - (0.06 + ydOffset) * grid_size, y1, y2, 0, 256);
      let ypp1 = p5.map(y + (0.06 - ydOffset) * grid_size, y1, y2, 0, 256);




      // // debug view of vertices
     // p5.fill(0, 255, 0);
     // p5.ellipse(xp0, yp0, 30); 
     // p5.ellipse(xp0 + 1*xpdist, yp0, 30); //mid 
     // p5.ellipse(xp2, yp0, 30); 
     // p5.ellipse(xp0, ypm1, 30); 
     // p5.ellipse(xp0, ypp1, 30); 

      //main pattern
      p5.strokeWeight(strokeWidth);  
      p5.stroke (lines);
      p5.fill(255, 211, 78, 32);

      p5.beginShape();
      p5.curveVertex(NEGx128, y215);
      p5.curveVertex(x0, y0);
      p5.curveVertex(x0, y195);
      p5.curveVertex(x255, y0);
      p5.curveVertex(x255, y195);
      p5.curveVertex(x383, y195);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y235);
      p5.curveVertex(x0, y20);
      p5.curveVertex(x0, y215);
      p5.curveVertex(x255, y20);
      p5.curveVertex(x255, y215);
      p5.curveVertex(x383, y215);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y255);
      p5.curveVertex(x0, y40);
      p5.curveVertex(x0, y235);
      p5.curveVertex(x255, y40);
      p5.curveVertex(x255, y235);
      p5.curveVertex(x383, y235);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y235);
      p5.curveVertex(x0, y40);
      p5.curveVertex(x255, y235);
      p5.curveVertex(x255, y40);
      p5.curveVertex(x383, y40);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y215);
      p5.curveVertex(x0, y20);
      p5.curveVertex(x255, y215);
      p5.curveVertex(x255, y20);
      p5.curveVertex(x383, y20);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y195);
      p5.curveVertex(x0, y0);
      p5.curveVertex(x255, y195);
      p5.curveVertex(x255, y0);
      p5.curveVertex(x383, y0);
      p5.endShape();

      

      //inner pattern of main

      if(zoom > 1){
      p5.stroke(fillColour);
      p5.strokeWeight(strokeWidth/10);
      p5.noFill();

      p5.beginShape();
      p5.curveVertex(NEGx128, y215);
      p5.curveVertex(x0, y0);
      p5.curveVertex(x0, y195);
      p5.curveVertex(x255, y0);
      p5.curveVertex(x255, y195);
      p5.curveVertex(x383, y195);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y235);
      p5.curveVertex(x0, y20);
      p5.curveVertex(x0, y215);
      p5.curveVertex(x255, y20);
      p5.curveVertex(x255, y215);
      p5.curveVertex(x383, y215);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y255);
      p5.curveVertex(x0, y40);
      p5.curveVertex(x0, y235);
      p5.curveVertex(x255, y40);
      p5.curveVertex(x255, y235);
      p5.curveVertex(x383, y235);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y235);
      p5.curveVertex(x0, y40);
      p5.curveVertex(x255, y235);
      p5.curveVertex(x255, y40);
      p5.curveVertex(x383, y40);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y215);
      p5.curveVertex(x0, y20);
      p5.curveVertex(x255, y215);
      p5.curveVertex(x255, y20);
      p5.curveVertex(x383, y20);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y195);
      p5.curveVertex(x0, y0);
      p5.curveVertex(x255, y195);
      p5.curveVertex(x255, y0);
      p5.curveVertex(x383, y0);
      p5.endShape();
    }
     
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
}
