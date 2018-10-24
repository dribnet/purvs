const max_thickness = 64;
const max_movement = 1;
const ball_radius = 32;
const line_width = 8;
const grid_size = 64;
let do_animation = true;
let presentCol = getRandomValue(p5, x, y, z, "pCol", 0, 255, 1);

/* the random number seed for the tour */
var tourSeed = 150;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, -146, 1132],
  [2, -149, 1257]
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

function drawLights(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2, z, zoom) {



  const sqrt2 = 1.4142/2;

  let offsets = [
    [0.380, -0.5], //1 (top)
    [0.32, -0.44], //2
    [0.23, -0.40], //3
    [0.13, -0.38], //4
    [0.23, -0.31], //5
    [0.35, -0.27], //6
    [0.50, -0.25], //7
    [0.37, -0.18], //8
    [0.23, -0.14], //9
    [0.05, -0.13], //10
    [0.2, -0.01], //11
    [0.40, 0.04],
    [0.59, 0.085]
  ]

  let phase = getRandomValue(p5, pos_x, pos_y, z, "phase", 0, 2*p5.PI, 0.1);
  let freq = getRandomValue(p5, pos_x, pos_y, z, "freq", 10, 50, 0.1);
  let sineWave = p5.sin(phase + (p5.globalFrameCount / freq));
  let radiusScale = p5.map(sineWave, -1, 1, 0.80, 1.0);

  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;
  pixel_radius = (radiusScale * pixel_radius)/25;
  for(let i=0; i<offsets.length; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
  
  if(zoom > 4){
    //p5.fill(25);
   p5.rect(pixel_x, pixel_y, pixel_radius, pixel_radius); 
  }

  else{
    p5.noFill();
  }

  }
}





function tree (p5, x, y, x1, x2, y1, y2, z, zoom){

// bottom rec 512
  let rect1x = p5.map(x, x1, x2, 0, 256);
  let rect1y = p5.map(y, y1, y2, 0, 256);
  let radiusRect1 = p5.map(x+10, x1, x2, 0, 256);

// seccond rect 
  let rect2x = p5.map(x+0.8, x1, x2, 0, 256);
  let rect2y = p5.map(y-2, y1, y2, 0, 256);
  let radiusRect2 = p5.map(x+10.8, x1, x2, 0, 256);
//third rect
  let rect3x = p5.map(x+1.4, x1, x2, 0, 256);
  let rect3y = p5.map(y-4, y1, y2, 0, 256);
  let radiusRect3 = p5.map(x+11.4, x1, x2, 0, 256);
//fourth rect
  let rect4x = p5.map(x+2.1, x1, x2, 0, 256);
  let rect4y = p5.map(y-6, y1, y2, 0, 256);
  let radiusRect4 = p5.map(x+12.1, x1, x2, 0, 256);
//fifth rect 
  let rect5x = p5.map(x+2.9, x1, x2, 0, 256);
  let rect5y = p5.map(y-8, y1, y2, 0, 256);
  let radiusRect5 = p5.map(x+12.9, x1, x2, 0, 256);
//base of tree
  let basex = p5.map(x+2.9, x1, x2, 0, 256);
  let basey = p5.map(y+2, y1, y2, 0, 256);
  let radiusbase = p5.map(x+12.9, x1, x2, 0, 256);
//snow hole thing
  let base2x = p5.map(x+1.5, x1, x2, 0, 256);
  let base2y = p5.map(y+3, y1, y2, 0, 256);
  let radiusbase2 = p5.map(x+11.5, x1, x2, 0, 256);

  let base3x = p5.map(x+1, x1, x2, 0, 256);
  let base3y = p5.map(y+3.4, y1, y2, 0, 256);
  let radiusbase3 = p5.map(x+11, x1, x2, 0, 256);



  

  p5.strokeWeight(0);
 // furst rec 512
p5.fill(34, 99, 36);
p5.rect(rect1x, rect1y, (radiusRect1-rect1x),(radiusRect1-rect1x)/5);

// seccond rect
 p5.fill(38, 109, 40);
 p5.rect(rect2x, rect2y, (radiusRect2-rect2x)/1.20,(radiusRect2-rect2x)/5);

 //third rect
 p5.fill(58, 153, 61);
p5.rect(rect3x, rect3y, (radiusRect3-rect3x)/1.40,(radiusRect3-rect3x)/5);

//fourth rect
 p5.fill(49, 137, 52);
 p5.rect(rect4x, rect4y, (radiusRect4-rect4x)/1.80,(radiusRect4-rect4x)/5);

 //fifth rect 
p5.fill(63, 175, 66);
p5.rect(rect5x, rect5y, (radiusRect5-rect5x)/2.6,(radiusRect5-rect5x)/5);

//zoom 2 introduces snow base around the botto of tree 
 if(zoom > 2){
p5.fill(220);
p5.rect(base2x, base2y, (radiusbase2-base2x)/1.5,(radiusbase2-base2x)/5);
p5.rect(base3x, base3y, (radiusbase3-base3x)/1.3,(radiusbase3-base3x)/8);



}
 
 //zoom 3 introduces smaller details and shades on the tree
if (zoom > 3){

 p5.fill(53, 132, 55);
p5.rect(rect1x, rect1y, (radiusRect1-rect1x),(radiusRect1-rect1x)/7);
 p5.fill(59, 137, 61);
 p5.rect(rect2x, rect2y, (radiusRect2-rect2x)/1.20,(radiusRect2-rect2x)/7);
 p5.fill(78, 173, 81);
p5.rect(rect3x, rect3y, (radiusRect3-rect3x)/1.40,(radiusRect3-rect3x)/7);
 p5.fill(68, 155, 71);
 p5.rect(rect4x, rect4y, (radiusRect4-rect4x)/1.80,(radiusRect4-rect4x)/7);
p5.fill(84, 188, 87);
p5.rect(rect5x, rect5y, (radiusRect5-rect5x)/2.6,(radiusRect5-rect5x)/7);




}

//zoom 4 introduces snowcaps to the top of trees
if (zoom > 4){
   p5.fill(240);
p5.rect(rect1x, rect1y, (radiusRect1-rect1x),(radiusRect1-rect1x)/20);
p5.rect(rect2x, rect2y, (radiusRect2-rect2x)/1.20,(radiusRect2-rect2x)/20);
p5.rect(rect3x, rect3y, (radiusRect3-rect3x)/1.40,(radiusRect3-rect3x)/20);
 p5.rect(rect4x, rect4y, (radiusRect4-rect4x)/1.80,(radiusRect4-rect4x)/20);
 p5.rect(rect5x, rect5y, (radiusRect5-rect5x)/2.6,(radiusRect5-rect5x)/20);
}

p5.fill(99, 60, 34);
p5.rect(basex, basey, (radiusbase-basex)/2.6,(radiusbase-basex)/5);


//places the brown stem of the tree back ontop of the snow circle well thing. Also adds some more rendering detail
if (zoom > 3){

  p5.fill(114, 75, 49);
  p5.rect(basex, basey, (radiusbase-basex)/8,(radiusbase-basex)/5);
}

if (zoom > 3){


//star 1
  let star1x = p5.map(x+4.7, x1, x2, 0, 256);
  let star1y = p5.map(y-11, y1, y2, 0, 256);
  let radiusstar1 = p5.map(x+14.7, x1, x2, 0, 256);

  p5.fill(255, 226, 86);
  p5.rect(star1x, star1y, (radiusstar1-star1x)/25,(radiusstar1-star1x)/4);

//star 2
   let star2x = p5.map(x+4.01, x1, x2, 0, 256);
  let star2y = p5.map(y-10, y1, y2, 0, 256);
  let radiusstar2 = p5.map(x+14.7, x1, x2, 0, 256);

  
  p5.rect(star2x, star2y, (radiusstar2-star2x)/6,(radiusstar2-star2x)/25);


  //star 3
   let star3x = p5.map(x+4.4, x1, x2, 0, 256);
  let star3y = p5.map(y-10.3, y1, y2, 0, 256);
  let radiusstar3 = p5.map(x+14.4, x1, x2, 0, 256);

 
  p5.rect(star3x, star3y, (radiusstar3-star3x)/10,(radiusstar3-star3x)/10);

if(zoom >5){

  p5.fill(163, 195, 247);
  let present1x = p5.map(x+6.4, x1, x2, 0, 256);
  let present1y = p5.map(y+3, y1, y2, 0, 256);
  let radiuspresent1 = p5.map(x+16.4, x1, x2, 0, 256);
  p5.rect(present1x, present1y, (radiuspresent1-present1x)/5,(radiuspresent1-present1x)/5);

 p5.fill(239, 124, 180);
  let present2x = p5.map(x+2.4, x1, x2, 0, 256);
  let present2y = p5.map(y+3, y1, y2, 0, 256);
  let radiuspresent2 = p5.map(x+12.4, x1, x2, 0, 256);
  p5.rect(present2x, present2y, (radiuspresent2-present2x)/7,(radiuspresent2-present2x)/7);

 p5.fill(127, 195, 244);
  let present3x = p5.map(x+0, x1, x2, 0, 256);
  let present3y = p5.map(y+4, y1, y2, 0, 256);
  let radiuspresent3 = p5.map(x+10, x1, x2, 0, 256);
  p5.rect(present3x, present3y, (radiuspresent3-present3x)/3,(radiuspresent3-present3x)/10);

 p5.fill(206, 178, 255);
  let present4x = p5.map(x+5, x1, x2, 0, 256);
  let present4y = p5.map(y+3.3, y1, y2, 0, 256);
  let radiuspresent4 = p5.map(x+15, x1, x2, 0, 256);
  p5.rect(present4x, present4y, (radiuspresent4-present4x)/10,(radiuspresent4-present4x)/10);

}

 p5.fill(255, 226, 86);
}

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
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;

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

  p5.background(255);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      // First compute shifted point in grid
      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x = x + offsetX;
      let shifted_y = y + offsetY;
      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

      // now compute shifted point one step to the left
      let x_left = x + grid_size;
      let y_left = y;
      let offsetX_left = getRandomValue(p5, x_left, y_left, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_left = getRandomValue(p5, x_left, y_left, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x_left = x_left + offsetX_left;
      let shifted_y_left = y_left + offsetY_left;
      let x_pos_left = p5.map(shifted_x_left, x1, x2, 0, 256);
      let y_pos_left = p5.map(shifted_y_left, y1, y2, 0, 256);

      // lastly compute shifted point one step down
      let x_down = x;
      let y_down = y + grid_size;
      let offsetX_down = getRandomValue(p5, x_down, y_down, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_down = getRandomValue(p5, x_down, y_down, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x_down = x_down + offsetX_down;
      let shifted_y_down = y_down + offsetY_down;
      let x_pos_down = p5.map(shifted_x_down, x1, x2, 0, 256);
      let y_pos_down = p5.map(shifted_y_down, y1, y2, 0, 256);
  
      /* now draw all elements from back to front */
      if (zoom < 2) {
        p5.strokeWeight(cur_line_width);
        p5.stroke(150, 0, 0);
        //p5.line(x_pos, y_pos, x_pos_left, y_pos_left);
        p5.stroke(0, 150, 0);
        //p5.line(x_pos, y_pos, x_pos_down, y_pos_down);
      }

      if (zoom >= 2) {
        p5.fill(0, 0, 255);
        p5.noStroke();
         }

      p5.stroke(0, 0, 150);
      p5.fill(0, 0, 128);
      p5.noStroke();
      //p5.ellipse(x_pos, y_pos, cur_ball_radius);
tree(p5, x , y, x1, x2, y1, y2, z, zoom);

drawLights(p5, x1, x2, y1, y2, shifted_x, shifted_y, ball_radius, 2*line_width, z, zoom);        
     
     
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
