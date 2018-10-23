const max_thickness = 10;
const max_movement = 1;
const ball_radius = 1;
let grid_size = 64;
let border_colour = 50;
let screen_colour = 255;
let do_animation = true;
let white = true;
let divider = 1;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 512, 512],
  [3, 400, 512],
  [5, 398.676341056824, 513.196428298950],
  [8, 396.110547471046, 513.051897287369],
  [9, 396.010547471046, 513.051897287369],
  [4, 400, 512]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}


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
function drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom, offset, pos_x, pos_y)  {
  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_ball_radius = c_pball - c_p00;



  /* first compute the points to be drawn */
  let r_x_pos = p5.map(x + offset, x1, x2, 0, 256);
  let g_x_pos = p5.map(x + 1 + offset, x1, x2, 0, 256);
  let b_x_pos = p5.map(x + 2+ offset, x1, x2, 0, 256);
  if (zoom >= 9){
    let wave_r = p5.sin(1 + (p5.globalFrameCount / 10));
    r_x_pos = p5.map(wave_r, -1, 1, r_x_pos, b_x_pos);
    let wave_g = p5.sin(1 + (p5.globalFrameCount / 2));
    g_x_pos = p5.map(wave_g, -1, 1, r_x_pos, b_x_pos);
    let wave_b = p5.cos(1 + (p5.globalFrameCount / 10));
    b_x_pos = p5.map(wave_b, -1, 1, r_x_pos, b_x_pos);
  }
  if (zoom == 8){
    let wave_g = p5.sin(1 + (p5.globalFrameCount / 2));
    g_x_pos = p5.map(wave_g, -1, 1, r_x_pos, b_x_pos);
  }

  p5.colorMode(p5.RGB);
  p5.noStroke();
  if (white){
    for (let i=0; i < 10; i++){
      let y_pos = p5.map(y + (i*3), y1, y2, 0, 256);
          p5.push();
            p5.fill(255, 255, 255);
            p5.ellipse(g_x_pos, y_pos, cur_ball_radius*2);
          p5.pop(); 
    }
  }
  else {
    for (let i=0; i < 10; i++){
      let y_pos = p5.map(y + (i*3), y1, y2, 0, 256);
          p5.push();
            if(zoom >= 8){
              // have them blend only when focused on one set otherwise too laggy
              p5.blendMode(p5.DIFFERENCE);
            }
            p5.fill(255, 0, 0);
            p5.ellipse(r_x_pos, y_pos, cur_ball_radius);
            p5.fill(0, 255, 0);
            p5.ellipse(g_x_pos, y_pos, cur_ball_radius);   
            p5.fill(0, 0, 255);
            p5.ellipse(b_x_pos, y_pos, cur_ball_radius); 
          p5.pop(); 
    }
  }
}


function drawScreen(p5, x, y, x1, x2, y1, y2,z, zoom, colour, w, h)  {

  /* first compute the points to be drawn */
  let screen_x_pos = p5.map(x + -256, x1, x2, 0, 256);
  let screen_y_pos = p5.map(y + -256, y1, y2, 0, 256);

  let screen_pos_origin_x = p5.map(0, x1, x2, 0, 256);
  let screen_pos_offset_x = p5.map(w, x1, x2, 0, 256);
  let screen_pos_width = screen_pos_offset_x - screen_pos_origin_x;

  let screen_pos_origin_y = p5.map(0, x1, x2, 0, 256);
  let screen_pos_offset_y = p5.map(h, x1, x2, 0, 256);
  let screen_pos_height = screen_pos_offset_y - screen_pos_origin_y;


  /* now draw all elements from back to front */
  // p5.blendMode(p5.DIFFERENCE);
  p5.noStroke();
  p5.fill(colour);
  p5.rect(screen_x_pos, screen_y_pos, screen_pos_width, screen_pos_height);

}


// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;


  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);






  if(zoom >= 0 && zoom <= 4){
    p5.colorMode(p5.HSB);
    p5.background(20, 50, 100);
    p5.colorMode(p5.RGB);
    screen_colour = 255/zoom;
    // console.log(screen_colour);    
    drawScreen(p5, 500, 500, x1, x2, y1, y2, z, zoom, border_colour, 525, 306);// border
    drawScreen(p5, 725, 800, x1, x2, y1, y2, z, zoom, border_colour, 80, 100);// neck
    drawScreen(p5, 607, 900, x1, x2, y1, y2, z, zoom, border_colour, 310, 20);// stand
    drawScreen(p5, 512, 512, x1, x2, y1, y2, z, zoom, screen_colour, 500, 281); // screen   
  }


  if(zoom >= 3){
    white = true;
    divider = 1;
    if(zoom >= 5){
      white = false;
      if (zoom < 9){
        p5.colorMode(p5.HSB);
        p5.background(0);
      }
      divider = 2;
    }
    if(zoom >= 9){
      p5.colorMode(p5.HSB);
      p5.background(0, 0.1);      
    }
    for(let x=min_x; x<max_x; x+=grid_size/divider) {
      for(let y=min_y; y<max_y; y+=grid_size/divider) {   
        let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
        let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
        let shifted_x = x + offsetX;
        let shifted_y = y + offsetY;

        drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom, 0, white);
        drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom, 5, white);
        drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom, 10, white);
        drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom, 15, white);
        drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom, 20, white);
        drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom, 25, white);       
      }
    }
  }


  

  // // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}
