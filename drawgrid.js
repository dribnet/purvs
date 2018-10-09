/*
 * This is the a class example of the abstract design framework.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
const max_thickness = 10;
const grid_size = 250;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [2, 420, 400],
  [4, 420, 400]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function myPattern(p5, x, y, x1, x2, y1, y2)  {
  let arc_x = p5.map(x+20, x1, x2, 0, 256);
  let arc_y = p5.map(y-60, y1, y2, 0, 256);
  let arc_w_offset = p5.map(x+100, x1, x2, 0, 256);
  let arc_w = arc_w_offset - arc_x;
  p5.arc(arc_x, arc_y, arc_w, arc_w, 220, 10); //big

  let sm_arc_x = p5.map(x-40, x1, x2, 0, 256);
  let sm_arc_y = p5.map(y+40, y1, y2, 0, 256);
  let sm_arc_w_offset = p5.map(x+20, x1, x2, 0, 256);
  let sm_arc_w = sm_arc_w_offset - sm_arc_x;
  p5.arc(sm_arc_x, sm_arc_y, sm_arc_w, sm_arc_w, 100, 180); //small

  let zzz_x = p5.map(x-10, x1, x2, 0, 256);
  let zzz_y = p5.map(y+80, y1, y2, 0, 256);
  p5.beginShape(); //long zigzag
    p5.vertex(zzz_x, zzz_y);
    p5.vertex(zzz_x+20, zzz_y-15);
    p5.vertex(zzz_x+40, zzz_y);
    p5.vertex(zzz_x+60, zzz_y-15);
    p5.vertex(zzz_x+80, zzz_y);
    p5.vertex(zzz_x+100, zzz_y-15);
  p5.endShape();

  let zz_x = p5.map(x-100, x1, x2, 0, 256);
  let zz_y = p5.map(y-80, y1, y2, 0, 256);
  p5.beginShape(); //zigzag
    p5.vertex(zz_x, zz_y);
    p5.vertex(zz_x+20, zz_y+20);
    p5.vertex(zz_x+40, zz_y);
    p5.vertex(zz_x+60, zz_y+20);
  p5.endShape();

  let line_y = p5.map(x-30, y1, y2, 0, 256);
  p5.line(zz_x, line_y, zz_x+20, line_y+15);

  let topV_x = p5.map(x+105, x1, x2, 0, 256);
  let topV_y = p5.map(y-80, y1, y2, 0, 256);
  p5.beginShape(); //top V
    p5.vertex(topV_x, topV_y);
    p5.vertex(topV_x-5, topV_y-40);
    p5.vertex(topV_x+50, topV_y-30);
  p5.endShape();

  let bottomV_x = p5.map(x-60, x1, x2, 0, 256);
  let bottomV_y = p5.map(y+100, y1, y2, 0, 256);
  p5.beginShape(); //bottom V
    p5.vertex(bottomV_x, bottomV_y);
    p5.vertex(bottomV_x+20, bottomV_y+12);
    p5.vertex(bottomV_x+40, bottomV_y+10);
  p5.endShape();

  let t_x = p5.map(x+60, x1, x2, 0, 256);
  let t_y = p5.map(y+30,  y1, y2, 0, 256);
  p5.line(t_x, t_y, t_x+40, t_y-38); //T
  p5.line(t_x+20, t_y-60, t_x+60, t_y-30);
}

// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.angleMode(p5.DEGREES);
  p5.background(255);
  p5.noFill();
  p5.stroke("#f90250");
  p5.strokeWeight(10);

  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let circle_x = p5.map(512, x1, x2, 0, 256);
      radius = p5.map(580, x1, x2, 0, 256);
      p5.ellipse(x_pos, y_pos, (radius-circle_x));

      let arc_x = p5.map(x+20, x1, x2, 0, 256);
      let arc_y = p5.map(y-60, y1, y2, 0, 256);
      let arc_w_offset = p5.map(x+100, x1, x2, 0, 256);
      let arc_w = arc_w_offset - arc_x;
      p5.arc(arc_x, arc_y, arc_w, arc_w, 220, 10); //big

      let sm_arc_x = p5.map(x-40, x1, x2, 0, 256);
      let sm_arc_y = p5.map(y+40, y1, y2, 0, 256);
      let sm_arc_w_offset = p5.map(x+20, x1, x2, 0, 256);
      let sm_arc_w = sm_arc_w_offset - sm_arc_x;
      p5.arc(sm_arc_x, sm_arc_y, sm_arc_w, sm_arc_w, 100, 180); //small

      let zzz_x = p5.map(x-10, x1, x2, 0, 256);
      let zzz_y = p5.map(y+80, y1, y2, 0, 256);
      p5.beginShape(); //long zigzag
        p5.vertex(zzz_x, zzz_y);
        p5.vertex(zzz_x+20, zzz_y-15);
        p5.vertex(zzz_x+40, zzz_y);
        p5.vertex(zzz_x+60, zzz_y-15);
        p5.vertex(zzz_x+80, zzz_y);
        p5.vertex(zzz_x+100, zzz_y-15);
      p5.endShape();

      let zz_x = p5.map(x-100, x1, x2, 0, 256);
      let zz_y = p5.map(y-80, y1, y2, 0, 256);
      p5.beginShape(); //zigzag
        p5.vertex(zz_x, zz_y);
        p5.vertex(zz_x+20, zz_y+20);
        p5.vertex(zz_x+40, zz_y);
        p5.vertex(zz_x+60, zz_y+20);
      p5.endShape();

      let line_y = p5.map(x-30, y1, y2, 0, 256);
      p5.line(zz_x, line_y, zz_x+20, line_y+15);

      let topV_x = p5.map(x+105, x1, x2, 0, 256);
      let topV_y = p5.map(y-80, y1, y2, 0, 256);
      p5.beginShape(); //top V
        p5.vertex(topV_x, topV_y);
        p5.vertex(topV_x-5, topV_y-40);
        p5.vertex(topV_x+50, topV_y-30);
      p5.endShape();

      let bottomV_x = p5.map(x-60, x1, x2, 0, 256);
      let bottomV_y = p5.map(y+100, y1, y2, 0, 256);
      p5.beginShape(); //bottom V
        p5.vertex(bottomV_x, bottomV_y);
        p5.vertex(bottomV_x+20, bottomV_y+12);
        p5.vertex(bottomV_x+40, bottomV_y+10);
      p5.endShape();

      let t_x = p5.map(x+60, x1, x2, 0, 256);
      let t_y = p5.map(y+30,  y1, y2, 0, 256);
      p5.line(t_x, t_y, t_x+40, t_y-38); //T
      p5.line(t_x+20, t_y-60, t_x+60, t_y-30);

      p5.push();
      let dot_x = p5.map(x+130, x1, x2, 0, 256);
      let dot_y = p5.map(y+40, y1, y2, 0, 256);
      p5.noStroke();
      p5.fill("#f90250");
      p5.ellipse(dot_x, dot_y, 14);
      p5.pop();

    }
  }

  //debug - show border
  p5.noFill();
  p5.stroke(255, 0, 0);
  p5.strokeWeight(1);
  p5.rect(0, 0, 255, 255);
}
