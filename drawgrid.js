/*
 * This is the a class example of the abstract design framework.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
//zoom: current zoom level (starts at 0), useful to decide how much detail to draw
const max_thickness = 200;
const grid_size = 250;
const line_width = 12;

const sm_grid_size = 5;
const sm_max_thickness = 100;

let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 512, 512],
  [2, 535, 539],
  [3, 430, 535],
  [3, 404, 625],
  [4, 435, 437]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function myPattern(p5, x, y, x1, x2, y1, y2, z)  {

  let phase = x * y;
  let sineWave = p5.sin(phase + p5.globalFrameCount*3);

  let arc_move = p5.map(sineWave, -1, 1, 0, 20);
  let arc_x = p5.map(x+20, x1, x2, 0, 256);
  let arc_y = p5.map(y-60, y1, y2, 0, 256);
  let arc_w_offset = p5.map(x+100, x1, x2, 0, 256);
  let arc_w = arc_w_offset - arc_x;
  p5.arc(arc_x, arc_y, arc_w, arc_w, 220+arc_move, 10+arc_move); //big

  let sm_arc_move = p5.map(sineWave, -1, 1, 0, 20);
  let sm_arc_x = p5.map(x-40, x1, x2, 0, 256);
  let sm_arc_y = p5.map(y+40, y1, y2, 0, 256);
  let sm_arc_w_offset = p5.map(x+20, x1, x2, 0, 256);
  let sm_arc_w = sm_arc_w_offset - sm_arc_x;
  p5.arc(sm_arc_x, sm_arc_y, sm_arc_w, sm_arc_w, 100-sm_arc_move, 180-sm_arc_move); //small

  let zzz_position = p5.map(sineWave, -1, 1, 0, 15);
  let zzz_x = p5.map(x-10, x1, x2, 0, 256);
  let zzz_x1 = p5.map(x+10, x1, x2, 0, 256);
  let zzz_x2 = p5.map(x+30, x1, x2, 0, 256);
  let zzz_x3 = p5.map(x+50, x1, x2, 0, 256);
  let zzz_x4 = p5.map(x+70, x1, x2, 0, 256);
  let zzz_x5 = p5.map(x+90, x1, x2, 0, 256);
  let zzz_y = p5.map(y+80, y1, y2, 0, 256);
  let zzz_y1 = p5.map(y+65, y1, y2, 0, 256);
  p5.beginShape(); //long zigzag
    p5.vertex(zzz_x, zzz_y-zzz_position);
    p5.vertex(zzz_x1, zzz_y1+zzz_position);
    p5.vertex(zzz_x2, zzz_y-zzz_position);
    p5.vertex(zzz_x3, zzz_y1+zzz_position);
    p5.vertex(zzz_x4, zzz_y-zzz_position);
    p5.vertex(zzz_x5, zzz_y1+zzz_position);
  p5.endShape();

  let zz_x = p5.map(x-100, x1, x2, 0, 256);
  let zz_x1 = p5.map(x-80, x1, x2, 0, 256);
  let zz_x2 = p5.map(x-60, x1, x2, 0, 256);
  let zz_x3 = p5.map(x-40, x1, x2, 0, 256);
  let zz_y = p5.map(y-80, y1, y2, 0, 256);
  let zz_y1 = p5.map(y-60, y1, y2, 0, 256);
  p5.beginShape(); //zigzag
    p5.vertex(zz_x, zz_y);
    p5.vertex(zz_x1, zz_y1);
    p5.vertex(zz_x2, zz_y);
    p5.vertex(zz_x3, zz_y1);
  p5.endShape();

  let line_move = p5.map(sineWave, -1, 1, 12, 4);
  let line_move_y = p5.map(sineWave, -1, 1, 0, 0.01);
  let line_x = p5.map(x-100, x1, x2, 0, 256);
  let line_x1 = p5.map(x-80, x1, x2, 0, 256);
  let line_y = p5.map(y-30, y1, y2, 0, 256);
  let line_y1 = p5.map(y-15, y1, y2, 0, 256);
  p5.line(line_x+line_move, line_y+line_move_y, line_x1-line_move, line_y1+line_move_y);

  let v_move = p5.map(sineWave, -1, 1, 0, 12);
  let topV_x = p5.map(x+105, x1, x2, 0, 256);
  let topV_x1 = p5.map(x+100, x1, x2, 0, 256);
  let topV_x2 = p5.map(x+155, x1, x2, 0, 256);
  let topV_y = p5.map(y-80, y1, y2, 0, 256);
  let topV_y1 = p5.map(y-120, y1, y2, 0, 256);
  let topV_y2 = p5.map(y-110, y1, y2, 0, 256);
  p5.beginShape(); //top V
    p5.vertex(topV_x, topV_y-v_move);
    p5.vertex(topV_x1, topV_y1-v_move);
    p5.vertex(topV_x2, topV_y2-v_move);
  p5.endShape();

  let bottomV_x = p5.map(x-60, x1, x2, 0, 256);
  let bottomV_x1 = p5.map(x-40, x1, x2, 0, 256);
  let bottomV_x2 = p5.map(x-20, x1, x2, 0, 256);
  let bottomV_y = p5.map(y+100, y1, y2, 0, 256);
  let bottomV_y1 = p5.map(y+120, y1, y2, 0, 256);
  let bottomV_y2 = p5.map(y+110, y1, y2, 0, 256);
  p5.beginShape(); //bottom V
    p5.vertex(bottomV_x, bottomV_y);
    p5.vertex(bottomV_x1, bottomV_y1);
    p5.vertex(bottomV_x2, bottomV_y2);
  p5.endShape();

  let Tline_x = p5.map(x+60, x1, x2, 0, 256);
  let Tline_y = p5.map(y+30,  y1, y2, 0, 256);
  let Tline_x2 = p5.map(x+100, x1, x2, 0, 256);
  let Tline_y2 = p5.map(y-8,  y1, y2, 0, 256);
  p5.line(Tline_x, Tline_y, Tline_x2, Tline_y2);

  let Tline2_x = p5.map(x+80, x1, x2, 0, 256);
  let Tline2_y = p5.map(y-30,  y1, y2, 0, 256);
  let Tline2_x2 = p5.map(x+120, x1, x2, 0, 256);
  let Tline2_y2 = p5.map(y,  y1, y2, 0, 256);
  p5.line(Tline2_x, Tline2_y, Tline2_x2, Tline2_y2);

  let circle_x = p5.map(x, x1, x2, 0, 256);
  let circle_y = p5.map(y, y1, y2, 0, 256);
  let circle_origin_x = p5.map(0, x1, x2, 0, 256);
  let circle_offset = p5.map(75, x1, x2, 0, 256);
  let circle_radius = circle_offset - circle_origin_x;
  p5.ellipse(circle_x, circle_y, circle_radius, circle_radius);

  let sm_circle_x = p5.map(x+130, x1, x2, 0, 256);
  let sm_circle_y = p5.map(y+40, y1, y2, 0, 256);
  let sm_circle_origin_x = p5.map(0, x1, x2, 0, 256);
  let sm_circle_offset = p5.map(12, x1, x2, 0, 256);
  let sm_circle_radius = sm_circle_offset - sm_circle_origin_x;
  p5.ellipse(sm_circle_x, sm_circle_y, sm_circle_radius, sm_circle_radius);
}

// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;

  p5.angleMode(p5.DEGREES);
  p5.background(255);
  p5.noFill();
  p5.strokeWeight(cur_line_width);

  let sm_max_shift = sm_max_thickness;
  let sm_min_x = snap_to_grid(x1 - sm_max_shift, sm_grid_size);
  let sm_max_x = snap_to_grid(x2 + sm_max_shift + sm_grid_size, sm_grid_size);
  let sm_min_y = snap_to_grid(y1 - sm_max_shift, sm_grid_size);
  let sm_max_y = snap_to_grid(y2 + sm_max_shift + sm_grid_size, sm_grid_size);

  for(let x=sm_min_x; x<sm_max_x; x+=sm_grid_size) {
    for(let y=sm_min_y; y<sm_max_y; y+=sm_grid_size) {
      if (zoom >= 4) {
        let mini_circle_x = p5.map(x, x1, x2, 0, 256);
        let mini_circle_y = p5.map(y, y1, y2, 0, 256);
        let mini_circle_origin_x = p5.map(0, x1, x2, 0, 256);
        let mini_circle_offset = p5.map(2, x1, x2, 0, 256);
        let mini_circle_radius = mini_circle_offset - mini_circle_origin_x;
        p5.push();
        p5.noStroke();
        p5.fill(0);
        p5.ellipse(mini_circle_x, mini_circle_y, mini_circle_radius, mini_circle_radius);
        p5.pop();
        p5.push();
        p5.noStroke();
        p5.fill(255);
        p5.ellipse(mini_circle_x+6, mini_circle_y-6, mini_circle_radius, mini_circle_radius);
        p5.pop();
      }
    }
  }

  let max_shift = max_thickness;
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      if (zoom >= 1) {
        p5.stroke(255, 224, 231);
        myPattern(p5, x, y, x1, x2, y1, y2, z);
        p5.stroke(232, 246, 255);
        myPattern(p5, x+10, y+10, x1, x2, y1, y2, z);
      }
      if (zoom >= 2) {
        p5.stroke(255, 181, 198);
        myPattern(p5, x, y, x1, x2, y1, y2, z);
        p5.stroke(193, 231, 255);
        myPattern(p5, x+10, y+10, x1, x2, y1, y2, z);
      }
      if (zoom >= 3) {
        p5.stroke(255, 107, 141);
        myPattern(p5, x, y, x1, x2, y1, y2, z);
        p5.stroke(122, 204, 255);
        myPattern(p5, x+10, y+10, x1, x2, y1, y2, z);
      }
      p5.stroke(0);
      myPattern(p5, x+5, y+5, x1, x2, y1, y2, z);
    }
  }

  // //debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0);
  // p5.strokeWeight(1);
  // p5.rect(0, 0, 255, 255);
}