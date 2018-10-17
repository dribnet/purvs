const max_thickness = 64;
const ball_radius = 32;
const ball_radius2 = 10;
const ball_radius3 = 45;
const line_width = 8;
const grid_size = 56;

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

       p5.stroke(0, 0, 150);
      p5.noStroke();
      p5.fill(100, 87, 255, 40);//lilac
      p5.ellipse(x_pos, y_pos, cur_ball_radius);


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

       p5.stroke(0, 0, 150);
      p5.noStroke();
      p5.fill(100, 87, 255, 40);//lilac
      p5.ellipse(x_pos, y_pos, cur_ball_radius);


      

      p5.fill(250,13,73,40); //pink
      p5.ellipse(right_circlex, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, right_circley, cur_ball_radius);
     
      p5.ellipse(left_circlex, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, left_circley, cur_ball_radius);

      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius);

      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius);

      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius);

      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius);






     p5.fill(100, 87, 255, 40);//lilac
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

       p5.stroke(0, 0, 150);
      p5.noStroke();
      p5.fill(100, 87, 255, 40);//lilac
      p5.ellipse(x_pos, y_pos, cur_ball_radius3);


  

      p5.fill(100, 87, 255, 40);//lilac
      p5.ellipse(right_circlex, y_pos, cur_ball_radius3);
      p5.ellipse(x_pos, right_circley, cur_ball_radius3);
     
      p5.ellipse(left_circlex, y_pos, cur_ball_radius3);
      p5.ellipse(x_pos, left_circley, cur_ball_radius3);

      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius3);

      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius3);

      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius3);

      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius3);



       p5.fill(250,13,73,20); //pink
      p5.ellipse(right_circlex, y_pos, cur_ball_radius3);
      p5.ellipse(x_pos, right_circley, cur_ball_radius3);
     
      p5.ellipse(left_circlex, y_pos, cur_ball_radius3);
      p5.ellipse(x_pos, left_circley, cur_ball_radius3);

      p5.ellipse(upperleft_circlex, upperleft_circley, cur_ball_radius3);

      p5.ellipse(upperright_circlex, upperright_circley, cur_ball_radius3);

      p5.ellipse(lowerright_circlex, lowerright_circley, cur_ball_radius3);

      p5.ellipse(lowerleft_circlex, lowerright_circley, cur_ball_radius3);


      p5.fill(250,13,73,40);//pink
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

if (zoom < 2) {
      p5.stroke(0, 0, 150);
      p5.noStroke();
      p5.fill(250,13,73,40); //pink
      p5.ellipse(x_pos, y_pos, cur_ball_radius);


      p5.fill(100, 87, 255, 40);//lilac
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
