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

let do_animation = true;

var Half_X = 960/2;
var Half_Y = 720/2;
/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 351.958984375000, 514.058593750000],
  [2, 1228.750000000000, 491.750000000000],
  [2, 769.046875000000, 501.745117187500]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

let gridSize = 400;

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

   p5.background(254, 234, 229);
  let max_shift = 100;
  let line_width = 10;

  /*--------------------- -------------------- */ 
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, gridSize);
  let max_x = snap_to_grid(x2 + max_shift + gridSize, gridSize);

  let min_y = snap_to_grid(y1 - max_shift, gridSize);
  let max_y = snap_to_grid(y2 + max_shift + gridSize, gridSize);
  /*--------------------- -------------------- */ 

 

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;

  const rad100 = 100;
  let rad100_pos2 = p5.map(rad100, x1, x2, 0, 256);
  let mapped_rad100 = rad100_pos2 - c_p00;  

// let freq = 10.0;
//   let sineWave2 = p5.sin(p5.globalFrameCount / freq);
//   let boxBlue = p5.map(sineWave2, -1, 1, 40, 50);
// let mapped_rad100 = boxBlue - c_p00; 

  //circle bars outter
  for(let x=min_x; x<max_x; x+=gridSize) {
     let x_pos = p5.map(x, x1, x2, 0, 256);
     let y1_pos = p5.map(612, y1, y2, 0, 256);
   
     const thin_line_width = 8;
     let c_thin_line_width_pos2 = p5.map(thin_line_width, x1, x2, 0, 256);
     let mapped_thin_line_width = c_thin_line_width_pos2 - c_p00;

     //circles
     let circ_out_x = 512;
     let circ_out_y = 612;

     //circles map
     let circ_out_x_map = p5.map(circ_out_x, x1, x2, 0, 256);
     let circ_out_y_map = p5.map(circ_out_y, y1, y2, 0, 256);

     
      p5.noFill();
      p5.stroke(113, 103, 114);
      p5.strokeWeight(mapped_thin_line_width);
      let orbits = [12, 20, 28, 36];
      for(i=0; i<orbits.length; i++) {
        p5.ellipse(circ_out_x_map, circ_out_y_map, orbits[i]*mapped_rad100, orbits[i]*mapped_rad100);
      }        
    }

  //Y circles outter
  for(let y=min_y; y<max_y; y+=gridSize) {
    let y_pos = p5.map(y+10, y1, y2, 0, 256);
    let x1_pos = p5.map(512, x1, x2, 0, 256);

    let y_margin = 150;
    let y_center = 512;

    if(y < y_center - y_margin || y > y_center + y_margin) {
      p5.fill(113, 103, 114);
      p5.stroke(82, 81, 99);
      p5.strokeWeight(cur_line_width);
      p5.ellipse(x1_pos, y_pos, mapped_rad100, mapped_rad100);
      // p5.ellipse(x_pos, y2_pos, mapped_rad100, mapped_rad100);      
    }
  }

  //X circles outter
  for(let x=min_x; x<max_x; x+=gridSize) {
    let x_pos = p5.map(x-85, x1, x2, 0, 256);
    let y1_pos = p5.map(612, y1, y2, 0, 256);

    const thin_line_width = 8;
    let c_thin_line_width_pos2 = p5.map(thin_line_width, x1, x2, 0, 256);
    let mapped_thin_line_width = c_thin_line_width_pos2 - c_p00;

    let x_margin = 400;
    let x_center = 512;

  
    if(x < x_center - x_margin || x > x_center + x_margin) {
      p5.fill(113, 103, 114);
      p5.stroke(82, 81, 99);
      p5.strokeWeight(cur_line_width);
      p5.ellipse(x_pos, y1_pos, mapped_rad100, mapped_rad100);  
      p5.ellipse(x_pos, y1_pos, mapped_rad100, mapped_rad100) 
    }
  }


  //diamonds
  let x1q = 712;
  let y1q = 512;
  let x2q = 512;
  let y2q = 712;
  let x3q = 312;
  let y3q = 512;
  let x4q = 512;
  let y4q = 312;

  let x1q2 = 612;
  let y1q2 = 512;
  let x2q2 = 512;
  let y2q2 = 612;
  let x3q2 = 412;
  let y3q2 = 512;
  let x4q2 = 512;
  let y4q2 = 412;

  let x1q3 = 680;
  let y1q3 = 350;
  let x2q3 = 512;
  let y2q3 = 212;
  let x3q3 = 350;
  let y3q3 = 350;
  let x4q3 = 512;
  let y4q3 = 512;

  //circles
  let x1cc1 = 510;
  let y1cc1 = 750;

  //diamonds map
  //main diamond
  let x1c = p5.map(x1q, x1, x2, 0, 256);
  let y1c = p5.map(y1q, y1, y2, 0, 256);
  let x2c = p5.map(x2q, x1, x2, 0, 256);
  let y2c = p5.map(y2q, y1, y2, 0, 256);
  let x3c = p5.map(x3q, x1, x2, 0, 256);
  let y3c = p5.map(y3q, y1, y2, 0, 256);
  let x4c = p5.map(x4q, x1, x2, 0, 256);
  let y4c = p5.map(y4q, y1, y2, 0, 256);

  //inner diamond
  let x1c2 = p5.map(x1q2, x1, x2, 0, 256);
  let y1c2 = p5.map(y1q2, y1, y2, 0, 256);
  let x2c2 = p5.map(x2q2, x1, x2, 0, 256);
  let y2c2 = p5.map(y2q2, y1, y2, 0, 256);
  let x3c2 = p5.map(x3q2, x1, x2, 0, 256);
  let y3c2 = p5.map(y3q2, y1, y2, 0, 256);
  let x4c2 = p5.map(x4q2, x1, x2, 0, 256);
  let y4c2 = p5.map(y4q2, y1, y2, 0, 256);

  //upper diamond
  let x1c3 = p5.map(x1q3, x1, x2, 0, 256);
  let y1c3 = p5.map(y1q3, y1, y2, 0, 256);
  let x2c3 = p5.map(x2q3, x1, x2, 0, 256);
  let y2c3 = p5.map(y2q3, y1, y2, 0, 256);
  let x3c3 = p5.map(x3q3, x1, x2, 0, 256);
  let y3c3 = p5.map(y3q3, y1, y2, 0, 256);
  let x4c3 = p5.map(x4q3, x1, x2, 0, 256);
  let y4c3 = p5.map(y4q3, y1, y2, 0, 256);

  //circles map
  let x1ccc1 = p5.map(x1cc1, x1, x2, 0, 256);
  let y1ccc1 = p5.map(y1cc1, y1, y2, 0, 256);

  const thin_line_width = 8;
  let c_thin_line_width_pos2 = p5.map(thin_line_width, x1, x2, 0, 256);
  let mapped_thin_line_width = c_thin_line_width_pos2 - c_p00;

  // const rad100 = 100;
  // let rad100_pos2 = p5.map(rad100, x1, x2, 0, 256);
  // let mapped_rad100 = rad100_pos2 - c_p00;

  //circle no fill
  p5.noFill();
  p5.stroke(113, 103, 114);
  p5.strokeWeight(mapped_thin_line_width);
  p5.ellipse(x1ccc1, y1ccc1, 5*mapped_rad100, 5*mapped_rad100);
  p5.ellipse(x1ccc1, y1ccc1, 6*mapped_rad100, 6*mapped_rad100);


  //circle body
  p5.noStroke();
  p5.fill(113, 103, 114);
  p5.ellipse(x1ccc1, y1ccc1, 4*mapped_rad100, 4*mapped_rad100);
  p5.fill(254, 234, 229);
  p5.ellipse(x1ccc1, y1ccc1,2*mapped_rad100, 2*mapped_rad100);

  //diamond body
  p5.fill(113, 103, 114);
  p5.quad(x1c3, y1c3, x2c3, y2c3, x3c3, y3c3, x4c3,y4c3);

  p5.stroke(254, 234, 229);
  p5.strokeWeight(15);
  p5.fill(113, 103, 114);
  p5.quad(x1c, y1c, x2c, y2c, x3c, y3c, x4c, y4c);

  p5.noStroke();
  p5.fill(254, 234, 229);
  p5.quad(x1c2, y1c2, x2c2, y2c2, x3c2, y3c2, x4c2, y4c2);


 
  for(let i=0; i<5; i++ ) {
    let freq = 300;
    let angle = p5.globalFrameCount / freq;
    let orbitSize = 600+i*(400);
    let x_center = 512;
    let y_center = 612;

    let x_orbit = x_center + orbitSize * p5.sin(angle);
    let y_orbit = y_center + orbitSize * p5.cos(angle);

    let x_centerc = p5.map(x_center, x1, x2, 0, 256);
    let y_centerc = p5.map(y_center, y1, y2, 0, 256);
    let x_orbitc = p5.map(x_orbit, x1, x2, 0, 256);
    let y_orbitc = p5.map(y_orbit, y1, y2, 0, 256);
    p5.fill(113, 103, 114);  
    p5.ellipse(x_orbitc, y_orbitc, 30 - mapped_rad100, 30 - mapped_rad100);

  }    


  // p5.stroke(0, 255, 0);
  //p5.line(x_centerc, y_centerc, x_orbitc, y_orbitc);

  


// debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
