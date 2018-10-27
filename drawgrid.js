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

/* Tour that focuses on to one set of RGB circles */
var tourPath = [
  [0, 512, 512],
  [3, 399.166015625000, 523.085937500000],
  [5, 398.676341056824, 513.196428298950],
  [8, 396.110547471046, 513.051897287369],
  [9, 396.010547471046, 513.051897287369],
  [4, 398.746582031250, 525.879638671875]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}


/*
 * This is the main function that I used for my grid drawing. I tried making it a bit more efficient 
 *  with its adaptabilityas here it does both the white circles and the RGB sets too.
 *  I do think it can be refined a lot especially with the mappings, but it was quite hard for me to
 *  understand it to the point where I could properly improve it.
 */
function drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom, offset, pos_x, pos_y)  {
  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_ball_radius = c_pball - c_p00;



  // first compute the positions to be drawn 
  let r_x_pos = p5.map(x + offset, x1, x2, 0, 256);
  let g_x_pos = p5.map(x + 1 + offset, x1, x2, 0, 256);
  let b_x_pos = p5.map(x + 2+ offset, x1, x2, 0, 256);
    // If the zoom is past the RGB grid threshold, animate the green position with sin wave
  if (zoom == 8){
    let wave_g = p5.sin(1 + (p5.globalFrameCount / 2));
    g_x_pos = p5.map(wave_g, -1, 1, r_x_pos, b_x_pos);
  }
  // If the zoom is past the RGB threshold, animate all positions with sin/cos waves
  if (zoom >= 9){
    let wave_r = p5.sin(1 + (p5.globalFrameCount / 10));
    r_x_pos = p5.map(wave_r, -1, 1, r_x_pos, b_x_pos);
    let wave_g = p5.sin(1 + (p5.globalFrameCount / 2));
    g_x_pos = p5.map(wave_g, -1, 1, r_x_pos, b_x_pos);
    let wave_b = p5.cos(1 + (p5.globalFrameCount / 10));
    b_x_pos = p5.map(wave_b, -1, 1, r_x_pos, b_x_pos);
  }

  p5.colorMode(p5.RGB);
  p5.noStroke();
  // If the global variable 'white' is true, then don't draw the RGB sets yet but the 
  //  simpler white 'pixels' (further out zoom) 
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
              // have them blend only when focused on one set otherwise it getstoo laggy
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



/*
 * Another function that I called upon but to make different aspects of the screen. Again,
 *  could be refined a lot but the mapping stuff really got to me and I couldn't wrap my head
 *  around it. It does however have the capability of making all needed sections of the computer screen.
 */
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


  // draw the rectangle using the called upon parameters mapped for the canvas' above
  p5.noStroke();
  p5.fill(colour);
  p5.rect(screen_x_pos, screen_y_pos, screen_pos_width, screen_pos_height);

}


/*
 * The main drawFrid function. I went through and kept a lot of Tom's code because changing it meant
 *  that things kept breaking, including the min/max x and y. It worked well in the end with me only needing 
 *  to call two different functions to create my entire scene, even if the scene itself lags greatly.
 *  I think this is due to the amount of times the functions are called, where the functions themselves
 *  aren't exactly efficient. I do wish I was able to figure out how to only draw the pixel grid within
 *  the screen. I messed around with that min/max x and y for this but to no avail.
 */
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;


  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift , grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // Draw the screen graphic, only when needed (at lower zooms)
  if(zoom >= 0 && zoom <= 4){
    p5.colorMode(p5.HSB);
    p5.background(20, 50, 100);
    p5.colorMode(p5.RGB);
    screen_colour = 255/zoom;
    drawScreen(p5, 500, 500, x1, x2, y1, y2, z, zoom, border_colour, 525, 306);// border
    drawScreen(p5, 725, 800, x1, x2, y1, y2, z, zoom, border_colour, 80, 100);// neck
    drawScreen(p5, 607, 900, x1, x2, y1, y2, z, zoom, border_colour, 310, 20);// stand
    drawScreen(p5, 512, 512, x1, x2, y1, y2, z, zoom, screen_colour, 500, 281); // screen   
  }

  // If zoomed in enough, draw the white circles (using global variable) if zoomed in even more
  //  then draw the full RGB sets and a black background.
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
