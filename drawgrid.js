const max_thickness = 64;
const ball_radius = 32;
const ball_radius2 = 10;
const ball_radius3 = 45;
const line_width = 8;
const grid_size = 72;
const max_movement = 16;
let do_animation = false;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 356.500000000000, 665.750000000000],
  [2, 503.705078125000, 904.915039062500],
  [4, 434.460693359375, 790.424804687500],
  [7, 432.160888671875, 792.057006835938],
  [5, 501.713134765625, 790.019897460938],
  [0, 511.820312500000, 511.636718750000]
]

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


//1ST ZOOM FLOWERS (PINK)
function drawEllipses(p5,x,y,x1,x2,y1,y2) {
 /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* this rectangle defines the region that will be drawn and includes a margin */
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

  p5.background(0);
  p5.fill(0, 0, 128);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

      let right_circlex = p5.map(x + 15, x1, x2, 0, 256);
      let right_circley = p5.map(y - 15, y1, y2, 0, 256);

      let left_circlex = p5.map(x - 15, x1, x2, 0, 256);
      let left_circley = p5.map(y + 15, y1, y2, 0, 256);

      let upperleft_circlex = p5.map(x - 7.5, x1, x2, 0, 256);
      let upperleft_circley = p5.map(y - 7.5, y1, y2, 0, 256);

      let upperright_circlex = p5.map(x + 7.5, x1, x2, 0, 256);
      let upperright_circley = p5.map(y - 7.5, y1, y2, 0, 256);

      let lowerleft_circlex = p5.map(x - 7.5, x1, x2, 0, 256);
      let lowerleft_circley = p5.map(y + 7.5, y1, y2, 0, 256);

      let lowerright_circlex = p5.map(x + 7.5, x1, x2, 0, 256);
      let lowerright_circley = p5.map(y + 7.5, y1, y2, 0, 256);

      p5.noStroke();
      p5.fill(100, 87, 255, 40);//lilac
      // p5.ellipse(x_pos, y_pos, cur_ball_radius/2);


      p5.fill(250,13,73,20); //pink
      p5.ellipse(right_circlex, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, right_circley, cur_ball_radius);
     
      p5.ellipse(left_circlex, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, left_circley, cur_ball_radius);

      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius);

      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius);

      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius);

      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius);
}

}
}


//2ND ZOOM FLOWERS (MORE SATURATED)
function drawEllipses2(p5,x,y,x1,x2,y1,y2) {
 /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* this rectangle defines the region that will be drawn and includes a margin */
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

  p5.background(0);
  p5.fill(0, 0, 128);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

      let right_circlex = p5.map(x + 15, x1, x2, 0, 256);
      let right_circley = p5.map(y - 15, y1, y2, 0, 256);


      let left_circlex = p5.map(x - 15, x1, x2, 0, 256);
      let left_circley = p5.map(y + 15, y1, y2, 0, 256);

      let upperleft_circlex = p5.map(x - 7.5, x1, x2, 0, 256);
      let upperleft_circley = p5.map(y - 7.5, y1, y2, 0, 256);

      let upperright_circlex = p5.map(x + 7.5, x1, x2, 0, 256);
      let upperright_circley = p5.map(y - 7.5, y1, y2, 0, 256);

      let lowerleft_circlex = p5.map(x - 7.5, x1, x2, 0, 256);
      let lowerleft_circley = p5.map(y + 7.5, y1, y2, 0, 256);

      let lowerright_circlex = p5.map(x + 7.5, x1, x2, 0, 256);
      let lowerright_circley = p5.map(y + 7.5, y1, y2, 0, 256);

      p5.noStroke();
      p5.fill(100, 87, 255, 40);//LILAC
      p5.ellipse(x_pos, y_pos, cur_ball_radius);

      p5.fill(250,13,73,40); //PINK
      p5.ellipse(right_circlex, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, right_circley, cur_ball_radius);
      p5.ellipse(left_circlex, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, left_circley, cur_ball_radius);
      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius);
      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius);
      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius);
      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius);


      p5.fill(100, 87, 255, 40);//LILAC
      p5.ellipse(right_circlex, y_pos, cur_ball_radius/1.5);
      p5.ellipse(x_pos, right_circley, cur_ball_radius/1.5);
      p5.ellipse(left_circlex, y_pos, cur_ball_radius/1.5);
      p5.ellipse(x_pos, left_circley, cur_ball_radius/1.5);
      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius/1.5);
      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius/1.5);
      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius/1.5);
      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius/1.5);
}
}
}

//3RD ZOOM FLOWERS (DETAIL OF CENTER OVERLAPPING)
function drawEllipses3(p5,x,y,x1,x2,y1,y2) {
  let max_shift = max_thickness;

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
  let c_pball = p5.map(ball_radius3, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius3 = c_pball - c_p00;

  p5.background(0);
  p5.fill(0, 0, 128);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);


 	  let right_circlex = p5.map(x + 20, x1, x2, 0, 256);
      let right_circley = p5.map(y - 20, y1, y2, 0, 256);


      let left_circlex = p5.map(x - 20, x1, x2, 0, 256);
      let left_circley = p5.map(y + 20, y1, y2, 0, 256);

      let upperleft_circlex = p5.map(x -10, x1, x2, 0, 256);
      let upperleft_circley = p5.map(y - 10, y1, y2, 0, 256);

      let upperright_circlex = p5.map(x +10, x1, x2, 0, 256);
      let upperright_circley = p5.map(y -10, y1, y2, 0, 256);

      let lowerleft_circlex = p5.map(x -10, x1, x2, 0, 256);
      let lowerleft_circley = p5.map(y +10, y1, y2, 0, 256);

      let lowerright_circlex = p5.map(x +10, x1, x2, 0, 256);
      let lowerright_circley = p5.map(y +10, y1, y2, 0, 256);

      p5.noStroke();
      p5.fill(100, 87, 255, 20);//LILAC

      p5.ellipse(x_pos, y_pos, cur_ball_radius3);

      p5.fill(100, 87, 255, 40);//LILAC
      p5.ellipse(right_circlex, y_pos, cur_ball_radius3);
      p5.ellipse(x_pos, right_circley, cur_ball_radius3);
      p5.ellipse(left_circlex, y_pos, cur_ball_radius3);
      p5.ellipse(x_pos, left_circley, cur_ball_radius3);
      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius3);
      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius3);
      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius3);
      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius3);

      p5.fill(250,13,73,20); //PINK
      p5.ellipse(right_circlex, y_pos, cur_ball_radius3);
      p5.ellipse(x_pos, right_circley, cur_ball_radius3);
      p5.ellipse(left_circlex, y_pos, cur_ball_radius3);
      p5.ellipse(x_pos, left_circley, cur_ball_radius3);
      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius3);
      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius3);
      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius3);
      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius3);


      p5.fill(250,13,73,60);//PINK
      p5.ellipse(right_circlex, y_pos, cur_ball_radius3/1.5);
      p5.ellipse(x_pos, right_circley, cur_ball_radius3/1.5); 
      p5.ellipse(left_circlex, y_pos, cur_ball_radius3/1.5);
      p5.ellipse(x_pos, left_circley, cur_ball_radius3/1.5);
      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius3/1.5);
      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius3/1.5);
      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius3/1.5);
      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius3/1.5);

}
}
}

//INITIAL PATTERN
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  let max_shift = max_thickness + max_thickness;

/* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;


  /* this rectangle defines the region that will be drawn and includes a margin */
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



  p5.background(0);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {


// First compute shifted point in grid
      let offsetX = (p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY = (p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x = x + offsetX;
      let shifted_y = y + offsetY;
      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

      // now compute shifted point one step to the left
      let x_left = x + grid_size;
      let y_left = y;
      let offsetX_left = (p5, x_left, y_left, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_left = (p5, x_left, y_left, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x_left = x_left + offsetX_left;
      let shifted_y_left = y_left + offsetY_left;
      let x_pos_left = p5.map(shifted_x_left, x1, x2, 0, 256);
      let y_pos_left = p5.map(shifted_y_left, y1, y2, 0, 256);

      // lastly compute shifted point one step down
      let x_down = x;
      let y_down = y + grid_size;
      let offsetX_down = (p5, x_down, y_down, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_down = (p5, x_down, y_down, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x_down = x_down + offsetX_down;
      let shifted_y_down = y_down + offsetY_down;
      let x_pos_down = p5.map(shifted_x_down, x1, x2, 0, 256);
      let y_pos_down = p5.map(shifted_y_down, y1, y2, 0, 256);


let phase = getRandomValue(p5, x_pos, y_pos, z, "phase", 0, 2*p5.PI, 0.1);
  let freq = getRandomValue(p5, x_pos, y_pos, z, "freq", 10, 50, 0.1);
  let sineWave = p5.sin(phase + (dz));
  let radiusScale = p5.map(sineWave, -1, 1, 0.80, 1.0);


console.log(sineWave);


      // /* first compute the points to be drawn */
      // let x_pos = p5.map(x, x1, x2, 0, 256);
      // let y_pos = p5.map(y, y1, y2, 0, 256);

      // let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      // let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

 	    let right_circlex = p5.map(x + 15, x1, x2, 0, 256);
      let right_circley = p5.map(y - 15, y1, y2, 0, 256);

      let left_circlex = p5.map(x - 15, x1, x2, 0, 256);
      let left_circley = p5.map(y + 15, y1, y2, 0, 256);



if (zoom < 2) {
      p5.noStroke();
      p5.fill(250,13,73,30); //PINK
      // p5.ellipse(x_pos, y_pos, cur_ball_radius*2, cur_ball_radius/2);
      p5.ellipse(right_circlex, y_pos, cur_ball_radius/2);
      p5.ellipse(x_pos, right_circley, cur_ball_radius/2);
     
      p5.ellipse(left_circlex, y_pos, cur_ball_radius/2);
      p5.ellipse(x_pos, left_circley, cur_ball_radius/2);

     
      p5.fill(100, 87, 255, 40);//LILAC
      p5.ellipse(right_circlex, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, right_circley, cur_ball_radius);
     
      p5.ellipse(left_circlex, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, left_circley, cur_ball_radius);

     }






      if (zoom >= 2) {
      drawEllipses(p5, x,y, x1, x2, y1, y2);
		}

		if (zoom >= 4) {
      drawEllipses2(p5, x,y, x1, x2, y1, y2);
		}

		if (zoom >= 5) {
      drawEllipses3(p5, x,y, x1, x2, y1, y2);
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
}
