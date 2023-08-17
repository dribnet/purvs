//---- VALUES ---- VALUES ---- VALUES ---- VALUES ---- VALUES ----//

const max_thickness = 64;
const line_width = 2;
const grid_size = 128;
let do_animation = true;
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
 /* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 512, 512], 
  [1, 520, 512],
  [2, 530, 512],
  [4, 600, 520],
  [6, 598, 522.5],
  [8, 598.5, 522.5]
]

// initial brickwall - repeated in x,y grid

function brickWall(p5, x, y, x1, x2, y1, y2){
  let brick_x = p5.map(x, x1, x2, 0, 256);
  let brick_y = p5.map(y, y1, y2, 0, 256);
  let brick_origin = p5.map(0, x1, x2, 0,256);
  let brick_offset_x = p5.map(grid_size/3, x1, x2, 0,256);
  let brick_offset_y = p5.map(grid_size/10, x1, x2, 0,256);
  let brick_w = brick_offset_x - brick_origin;
  let brick_h = brick_offset_y - brick_origin;

  p5.stroke(0);

  p5.fill("#A04000");

  for (let i=0; i<10; i+=2){
    // row of bricks without offset
    p5.rect (brick_x, brick_y + (brick_h *i), brick_w, brick_h);
    p5.rect (brick_x + brick_w, brick_y + (brick_h *i),brick_w,brick_h);
    p5.rect (brick_x + brick_w*2, brick_y + (brick_h *i), brick_w, brick_h);
    // row of bricks with offset 
    p5.push();
    p5.translate(-1 * (brick_w/2), 0);
    p5.rect (brick_x, brick_y + (brick_h * (i+1)), brick_w, brick_h);
    p5.rect (brick_x + brick_w, brick_y + (brick_h * (i+1)),brick_w, brick_h);
    p5.rect (brick_x + brick_w*2, brick_y + (brick_h * (i+1)), brick_w, brick_h);
    p5.pop();
  }
}

// window with no brick window sill detail 

function WindowSill(p5, x, y, x1, x2, y1, y2){
  let windowSill_x = p5.map(x, x1, x2, 0, 256);
  let windowSill_y = p5.map(y, y1, y2, 0, 256);
  let windowSill_origin = p5.map(0, x1, x2, 0,256);
  let windowSill_offset_x = p5.map(grid_size, x1, x2, 0,256);
  let windowSill_offset_y = p5.map(grid_size * 1.3, x1, x2, 0,256);
  let windowSill_w = windowSill_offset_x - windowSill_origin;
  let windowSill_h = windowSill_offset_y - windowSill_origin;
  let window_sil = p5.map(grid_size/10, x1, x2, 0, 256);

  p5.fill("#873600");

  // window sill

  p5.rect(windowSill_x, windowSill_y, windowSill_w, windowSill_h); 

  // corner of window sill 

  let corner_x1 = p5.map(x + 0, x1, x2, 0, 256); 
  let corner_y1 = p5.map(y + grid_size * 1.3, y1, y2, 0, 256);
  let corner_x2 = p5.map(x + grid_size/10, x1, x2, 0, 256); 
  let corner_y2 = p5.map(y + grid_size * 1.2, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1, corner_x2, corner_y2);

  // window

  p5.fill(0);

  let window_x = p5.map(x + grid_size * 0.1, x1, x2, 0, 256);
  let window_y = p5.map(y, y1, y2, 0, 256);
  let window_origin = p5.map(0 + grid_size/10, x1, x2, 0,256);
  let window_offset_x = p5.map(grid_size, x1, x2, 0,256);
  let window_offset_y = p5.map(grid_size * 1.3, x1, x2, 0,256);
  let window_w = window_offset_x - window_origin;
  let window_h = window_offset_y - window_origin;

  p5.rect(window_x, window_y, window_w, window_h); 
}

// window that has brick detailing on the window sill called at zoom >= 2

function WindowDetail(p5, x, y, x1, x2, y1, y2){
  let windowSill_x = p5.map(x, x1, x2, 0, 256);
  let windowSill_y = p5.map(y, y1, y2, 0, 256);
  let windowSill_origin = p5.map(0, x1, x2, 0,256);
  let windowSill_offset_x = p5.map(grid_size, x1, x2, 0,256);
  let windowSill_offset_y = p5.map(grid_size * 1.3, x1, x2, 0,256);
  let windowSill_w = windowSill_offset_x - windowSill_origin;
  let windowSill_h = windowSill_offset_y - windowSill_origin;
  let window_sil = p5.map(grid_size/10, x1, x2, 0, 256);

  p5.fill("#873600");

  // window sill

  p5.rect(windowSill_x, windowSill_y, windowSill_w, windowSill_h); 

  // corner of window sill 

  let corner_x1 = p5.map(x + 0, x1, x2, 0, 256); 
  let corner_y1 = p5.map(y + grid_size * 1.3, y1, y2, 0, 256);
  let corner_x2 = p5.map(x + grid_size/10, x1, x2, 0, 256); 
  let corner_y2 = p5.map(y + grid_size * 1.2, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1, corner_x2, corner_y2);

  // brick detailing

  let corner_y1_1 = p5.map(y + grid_size * 1.2, y1, y2, 0, 256);
  let corner_y2_1 = p5.map(y + grid_size * 1.1, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_1, corner_x2, corner_y2_1);

  let corner_y1_2 = p5.map(y + grid_size * 1.1, y1, y2, 0, 256);
  let corner_y2_2 = p5.map(y + grid_size * 1.0, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_2, corner_x2, corner_y2_2);

  let corner_y1_3 = p5.map(y + grid_size * 1.0, y1, y2, 0, 256);
  let corner_y2_3 = p5.map(y + grid_size * 0.9, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_3, corner_x2, corner_y2_3);

  let corner_y1_4 = p5.map(y + grid_size * 0.9, y1, y2, 0, 256);
  let corner_y2_4 = p5.map(y + grid_size * 0.8, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_4, corner_x2, corner_y2_4);

  let corner_y1_5 = p5.map(y + grid_size * 0.8, y1, y2, 0, 256);
  let corner_y2_5 = p5.map(y + grid_size * 0.7, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_5, corner_x2, corner_y2_5);

  let corner_y1_6 = p5.map(y + grid_size * 0.7, y1, y2, 0, 256);
  let corner_y2_6 = p5.map(y + grid_size * 0.6, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_6, corner_x2, corner_y2_6);

  let corner_y1_7 = p5.map(y + grid_size * 0.6, y1, y2, 0, 256);
  let corner_y2_7 = p5.map(y + grid_size * 0.5, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_7, corner_x2, corner_y2_7);

  let corner_y1_8 = p5.map(y + grid_size * 0.5, y1, y2, 0, 256);
  let corner_y2_8 = p5.map(y + grid_size * 0.4, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_8, corner_x2, corner_y2_8);

  let corner_y1_9 = p5.map(y + grid_size * 0.4, y1, y2, 0, 256);
  let corner_y2_9 = p5.map(y + grid_size * 0.3, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_9, corner_x2, corner_y2_9);

  let corner_y1_10 = p5.map(y + grid_size * 0.3, y1, y2, 0, 256);
  let corner_y2_10 = p5.map(y + grid_size * 0.2, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_10, corner_x2, corner_y2_10);

  let corner_y1_11 = p5.map(y + grid_size * 0.2, y1, y2, 0, 256);
  let corner_y2_11 = p5.map(y + grid_size * 0.1, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_11, corner_x2, corner_y2_11);

  let corner_y1_12 = p5.map(y + grid_size * 0.1, y1, y2, 0, 256);
  let corner_y2_12 = p5.map(y + grid_size * 0.0, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1_12, corner_x2, corner_y2_12);

  // horizontal detailing

  let corner_x1_h1 = p5.map(x + grid_size/6, x1, x2, 0, 256); 
  let corner_x2_h1 = p5.map(x + grid_size/3.7, x1, x2, 0, 256); 
  
  p5.line(corner_x1_h1, corner_y1, corner_x2_h1, corner_y2);

  let corner_x1_h2 = p5.map(x + grid_size/2, x1, x2, 0, 256); 
  let corner_x2_h2 = p5.map(x + grid_size/1.7, x1, x2, 0, 256); 

  p5.line(corner_x1_h2, corner_y1, corner_x2_h2, corner_y2);

  let corner_x1_h3 = p5.map(x + grid_size/1.2, x1, x2, 0, 256); 
  let corner_x2_h3 = p5.map(x + grid_size/1.1, x1, x2, 0, 256); 

  p5.line(corner_x1_h3, corner_y1, corner_x2_h3, corner_y2);

  // window

  p5.fill(0);

  let window_x = p5.map(x + grid_size * 0.1, x1, x2, 0, 256);
  let window_y = p5.map(y, y1, y2, 0, 256);
  let window_origin = p5.map(0 + grid_size/10, x1, x2, 0,256);
  let window_offset_x = p5.map(grid_size, x1, x2, 0,256);
  let window_offset_y = p5.map(grid_size * 1.3, x1, x2, 0,256);
  let window_w = window_offset_x - window_origin;
  let window_h = window_offset_y - window_origin;

  p5.rect(window_x, window_y, window_w, window_h); 

}

// moon that shows up in the window 

function Moon(p5, x, y, x1, x2, y1, y2){
  let moon_x = p5.map(x + grid_size/ 2.5, x1, x2, 0, 256);
  let moon_y = p5.map(y + grid_size/ 4, y1, y2, 0, 256);
  let moon_x2 = p5.map(x + grid_size/ 2.2, x1, x2, 0, 256);

  let moon_origin = p5.map(0, x1, x2, 0, 256); 
  let moon_offset = p5.map(30, x1, x2, 0, 256);
  let moon_radius = moon_offset - moon_origin;

  p5.fill("#FCF3CF");
  p5.ellipse(moon_x, moon_y, moon_radius, moon_radius);
  p5.noStroke();
  p5.fill(0);
  p5.ellipse(moon_x2, moon_y, moon_radius, moon_radius); // moon shadow
}

// one star that is animating

function Star(p5, x, y, x1, x2, y1, y2, z){
  let phase = getRandomValue(p5, x, y, z, "phase", 0, 10*p5.PI, 0.1);
  let sineWave = p5.sin(phase + p5.globalFrameCount/5);
  let starTwinkle = p5.map(sineWave, -1, 1, 0, 5);

  //let star_posx = getRandomValue();

  let star_x = p5.map(x, x1, x2, 0, 256);
  let star_y = p5.map(y, y1, y2, 0, 256);
  let star_origin = p5.map(0, x1, x2, 0, 256);
  let star_offset = p5.map(1, x1, x2, 0, 256);
  let star_radius = star_offset - star_origin;

  p5.fill("#FCF3CF");

  //p5.ellipse(star_x, star_y, 10 + starSize, 10 + starSize);
  p5.ellipse(star_x, star_y, star_radius + starTwinkle, star_radius + starTwinkle);
}

// stars drawn put into function that drawGrid is neater also had to separate Star function and Stars
// so that the phase would work properly and the twinkling animation wasn't in unison.

function Stars(p5, x, y, x1, x2, y1, y2, z){
  //let star_pos_random = getRandomValue(p5, x, y, z, "star_pos_random", 0, grid_size, 0.1);
  Star(p5, x + 40, y + 60, x1, x2, y1, y2);
  Star(p5, x + 100, y + 50, x1, x2, y1, y2);
  Star(p5, x + 50, y + 100, x1, x2, y1, y2);
  Star(p5, x + 20, y + 10, x1, x2, y1, y2);
  Star(p5, x + 90, y + 40, x1, x2, y1, y2);
  Star(p5, x + 120, y + 130, x1, x2, y1, y2);
  Star(p5, x + 30, y + 110, x1, x2, y1, y2);
  Star(p5, x + 35, y + 140, x1, x2, y1, y2);
  Star(p5, x + 70, y + 65, x1, x2, y1, y2);
  Star(p5, x + 110, y + 90, x1, x2, y1, y2);
  Star(p5, x + 80, y + 105, x1, x2, y1, y2);
  Star(p5, x + 100, y + 15, x1, x2, y1, y2);
  Star(p5, x + 85, y + 145, x1, x2, y1, y2);

  //console.log(star_pos_random);
}

//----- MINI WALL INCEPTION -----//

// mini window you can see on the mini wall 

function WindowMini(p5, x, y, x1, x2, y1, y2){
  p5.strokeWeight(0.5);
  var mini_size = 0.5;
  let windowSill_x = p5.map(x, x1, x2, 0, 256);
  let windowSill_y = p5.map(y, y1, y2, 0, 256);
  let windowSill_origin = p5.map(0, x1, x2, 0,256);
  let windowSill_offset_x = p5.map(mini_size, x1, x2, 0,256);
  let windowSill_offset_y = p5.map(mini_size * 1.3, x1, x2, 0,256);
  let windowSill_w = windowSill_offset_x - windowSill_origin;
  let windowSill_h = windowSill_offset_y - windowSill_origin;
  let window_sil = p5.map(mini_size/10, x1, x2, 0, 256);

  p5.fill("#873600");

  // window sill

  p5.rect(windowSill_x, windowSill_y, windowSill_w, windowSill_h); 

  // corner of window sill 

  let corner_x1 = p5.map(x + 0, x1, x2, 0, 256); 
  let corner_y1 = p5.map(y + mini_size * 1.3, y1, y2, 0, 256);
  let corner_x2 = p5.map(x + mini_size/10, x1, x2, 0, 256); 
  let corner_y2 = p5.map(y + mini_size * 1.2, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1, corner_x2, corner_y2);

  // window

  p5.fill(0);

  let window_x = p5.map(x + mini_size * 0.1, x1, x2, 0, 256);
  let window_y = p5.map(y, y1, y2, 0, 256);
  let window_origin = p5.map(0 + mini_size/10, x1, x2, 0,256);
  let window_offset_x = p5.map(mini_size, x1, x2, 0,256);
  let window_offset_y = p5.map(mini_size * 1.3, x1, x2, 0,256);
  let window_w = window_offset_x - window_origin;
  let window_h = window_offset_y - window_origin;

  p5.rect(window_x, window_y, window_w, window_h); 
}

// mini brick wall pattern that is called in DetailedWall function in zoom >=6

function brickWallMini(p5, x, y, x1, x2, y1, y2){
  p5.strokeWeight(0.5);
  var mini_size = 0.5;
  let brick_x = p5.map(x, x1, x2, 0, 256);
  let brick_y = p5.map(y, y1, y2, 0, 256);
  let brick_origin = p5.map(0, x1, x2, 0,256);
  let brick_offset_x = p5.map(mini_size/3, x1, x2, 0,256);
  let brick_offset_y = p5.map(mini_size/10, x1, x2, 0,256);
  let brick_w = brick_offset_x - brick_origin;
  let brick_h = brick_offset_y - brick_origin;

  p5.fill("#A04000");

  for(let j=0; j < 16; j++){
    for (let i=0; i<120; i+=2){
      // row of bricks without offset
      p5.rect (brick_x + (brick_w * 3), brick_y + (brick_h *i), brick_w, brick_h);
      p5.rect (brick_x + brick_w + (brick_w * 3) *j, brick_y + (brick_h *i),brick_w,brick_h);
      p5.rect (brick_x + brick_w*2 + (brick_w * 3) *j, brick_y + (brick_h *i), brick_w, brick_h);
      // row of bricks with offset 
      p5.push();
      p5.translate(-1 * (brick_w/2), 0);
      p5.rect (brick_x +(brick_w * 3) *j, brick_y + (brick_h * (i+1)), brick_w, brick_h);
      p5.rect (brick_x + brick_w +(brick_w * 3) *j, brick_y + (brick_h * (i+1)),brick_w, brick_h);
      p5.rect (brick_x + brick_w*2 +(brick_w * 3) *j, brick_y + (brick_h * (i+1)), brick_w, brick_h);
      p5.pop();
    }
  }
  p5.fill(0);
  p5.push();
  p5.noStroke();
  p5.rect(brick_x + brick_w*47.5, brick_y, brick_w, brick_h*120);
  p5.rect(brick_x - brick_w*0.5, brick_y, brick_w, brick_h*120);
  p5.rect(brick_x, brick_y, brick_w *48, brick_h);
  p5.pop();
}

// wall without brick wall pattern

function Wall(p5, x, y, x1, x2, y1, y2){

  var wall_sizeW = 8;
  var wall_sizeH = 6;
  let wall_x = p5.map(x, x1, x2, 0, 256);
  let wall_y = p5.map(y, y1, y2, 0, 256);
  let wall_origin = p5.map(0, x1, x2, 0,256);
  let wall_offset_x = p5.map(wall_sizeW, x1, x2, 0,256);
  let wall_offset_y = p5.map(wall_sizeH, x1, x2, 0,256);
  let wall_w = wall_offset_x - wall_origin;
  let wall_h = wall_offset_y - wall_origin;

  p5.fill("#A04000");
  p5.stroke(0);

  p5.rect(wall_x, wall_y, wall_w, wall_h);

  WindowMini(p5, x + wall_sizeW/2 - 0.25, y + wall_sizeH/2 -0.25, x1, x2, y1, y2);
}

// wall wih brick wall pattern - quite laggy

function DetailedWall(p5, x, y, x1, x2, y1, y2,zoom){

  var wall_sizeW = 8;
  var wall_sizeH = 6;
  let wall_x = p5.map(x, x1, x2, 0, 256);
  let wall_y = p5.map(y, y1, y2, 0, 256);
  let wall_origin = p5.map(0, x1, x2, 0,256);
  let wall_offset_x = p5.map(wall_sizeW, x1, x2, 0,256);
  let wall_offset_y = p5.map(wall_sizeH, x1, x2, 0,256);
  let wall_w = wall_offset_x - wall_origin;
  let wall_h = wall_offset_y - wall_origin;

  p5.fill("#A04000");
  p5.stroke(0);

  p5.rect(wall_x, wall_y, wall_w, wall_h);

  brickWallMini(p5, x, y, x1, x2, y1, y2);

  WindowMini(p5, x + wall_sizeW/2 - 0.25, y + wall_sizeH/2 -0.25, x1, x2, y1, y2);

}

function MoonMini(p5, x, y, x1, x2, y1, y2){
  var mini_size = 0.5;
  let moon_x = p5.map(x + 8/2 - 0.25 + mini_size/ 2.5, x1, x2, 0, 256);
  let moon_y = p5.map(y + 6/2 -0.25 + mini_size/ 4, y1, y2, 0, 256);
  let moon_x2 = p5.map(x + 8/2 - 0.25 + mini_size/ 2.2, x1, x2, 0, 256);

  let moon_origin = p5.map(0, x1, x2, 0, 256); 
  let moon_offset = p5.map(0.1, x1, x2, 0, 256);
  let moon_radius = moon_offset - moon_origin;

  p5.fill("#FCF3CF");
  p5.ellipse(moon_x, moon_y, moon_radius, moon_radius);
  p5.noStroke();
  p5.fill(0);
  p5.ellipse(moon_x2, moon_y, moon_radius, moon_radius); // moon shadow
}

function Cloud (p5, x, y, x1, x2, y1, y2, z){
  let phase = getRandomValue(p5, x, y, z, "phase", 0, 10*p5.PI, 0.1);
  let sineWave = p5.sin(phase + p5.globalFrameCount/5);
  let cloudFloat = p5.map(sineWave, -1, 1, 0, 5);

  let cloudrect_x = p5.map(x, x1, x2, 0, 256);
  let cloudrect_y = p5.map(y, y1, y2, 0, 256);
  let cloudrect_origin = p5.map(0, x1, x2, 0,256);
  let cloudrect_offset_x = p5.map(grid_size/6, x1, x2, 0,256);
  let cloudrect_offset_y = p5.map(grid_size/10, x1, x2, 0,256);
  let cloudrect_w = cloudrect_offset_x - cloudrect_origin;
  let cloudrect_h = cloudrect_offset_y - cloudrect_origin;

  let cloudellipse_x = p5.map(x, x1, x2, 0, 256);
  let cloudellipse_y = p5.map(y, y1, y2, 0, 256);
  let cloudellipse_origin = p5.map(0, x1, x2, 0, 256);
  let cloudellipse_offset = p5.map(grid_size/10, x1, x2, 0, 256);
  let cloudellipse_radius = cloudellipse_offset - cloudellipse_origin;

  p5.noStroke();

  p5.fill("#B0BEC5");

  p5.rect(cloudrect_x, cloudrect_y+ cloudFloat, cloudrect_w, cloudrect_h);
  p5.ellipse(cloudellipse_x, cloudellipse_y+ cloudellipse_radius/2 + cloudFloat, cloudellipse_radius, cloudellipse_radius);
  p5.ellipse(cloudellipse_x + cloudrect_w, cloudellipse_y+ cloudellipse_radius/2 + cloudFloat, cloudellipse_radius, cloudellipse_radius);
  p5.ellipse(cloudellipse_x + cloudrect_w/3, cloudellipse_y + cloudFloat, cloudellipse_radius, cloudellipse_radius);
  p5.ellipse(cloudellipse_x + cloudrect_w*0.7, cloudellipse_y + cloudFloat, cloudellipse_radius*0.8, cloudellipse_radius *0.8);

}

 function CloudFloat (p5, x, y, x1, x2, y1, y2, z){
   Cloud(p5, x + 45, y + 40, x1, x2, y1, y2, z);
   Cloud(p5, x + 80, y +110, x1, x2, y1, y2, z);
 }

// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  //p5.background(255);


  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;

  p5.background(255);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      // let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      // let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

      /* now draw all elements from back to front */

      if (zoom == 0) {
        p5.push();
        p5.strokeWeight(0.75);
        brickWall(p5, x, y, x1, x2, y1, y2);
        WindowSill(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        CloudFloat(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2)
        p5.pop();
      }

      if (zoom == 1) {
        p5.push();
        p5.strokeWeight(1);
        brickWall(p5, x, y, x1, x2, y1, y2);
        WindowDetail(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        Moon(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        CloudFloat(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
      }

      if (zoom == 2) {
        p5.push();
        p5.strokeWeight(2);
        brickWall(p5, x, y, x1, x2, y1, y2);
        WindowDetail(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        Moon(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        Stars(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        CloudFloat(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        p5.pop();     
      }

      if (zoom >= 3){
        p5.push();
        p5.strokeWeight(1.5*zoom);
        brickWall(p5, x, y, x1, x2, y1, y2);
        WindowDetail(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        Moon(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        Stars(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        CloudFloat(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        Wall(p5, (grid_size*2.5) + (grid_size*1.55), (grid_size*2.5) + (grid_size + 147.5), x1, x2, y1, y2);
        p5.pop();
      }

      if (zoom >= 6){
        p5.push();
        p5.strokeWeight(1.5*zoom);
        brickWall(p5, x, y, x1, x2, y1, y2);
        WindowDetail(p5, grid_size, grid_size, x1, x2, y1, y2);
        Moon(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        Stars(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        CloudFloat(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        DetailedWall(p5, (grid_size*2.5) + (grid_size*1.55), (grid_size*2.5) + (grid_size + 147.5), x1, x2, y1, y2);
        p5.pop();
      }

      if (zoom >= 7){
        p5.push();
        p5.strokeWeight(1.5*zoom);
        brickWall(p5, x, y, x1, x2, y1, y2);
        WindowDetail(p5, grid_size, grid_size, x1, x2, y1, y2);
        Moon(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        Stars(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        CloudFloat(p5, grid_size*3.5, grid_size*3.5, x1, x2, y1, y2);
        DetailedWall(p5, (grid_size*2.5) + (grid_size*1.55), (grid_size*2.5) + (grid_size + 147.5), x1, x2, y1, y2);
        MoonMini(p5, (grid_size*2.5) + (grid_size*1.55), (grid_size*2.5) + (grid_size + 147.5), x1, x2, y1, y2);
        p5.pop();
      }
    }    
  }



  //debug - show border //
  // p5.strokeWeight(1);
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
  // //p5.text("help", 10, 10);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10,20);
  // let sizex = x2-x1;
  // p5.text("width:" + sizex, 10, 30);
}
