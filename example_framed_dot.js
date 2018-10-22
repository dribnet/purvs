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
const max_thickness = 200;
const ball_radius = 32;
const grid_size = 250;
const line_width = 12;

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

function waves(p5, x, y, x1, x2, y1, y2)  {
  

  let waveM_x = p5.map(x-80, x1, x2, 0, 256);
  let waveM_y = p5.map(y, y1, y2, 0, 256);
  
  let waveM_x1 = p5.map(x-40, x1, x2, 0, 256);
  let waveM_y1 = p5.map(y-30, y1, y2, 0, 256);
  let waveM_x2 = p5.map(x, x1, x2, 0, 256);
  let waveM_y2 = p5.map(y, y1, y2, 0, 256);
  
  let waveM_x3 = p5.map(x+40, x1, x2, 0, 256);
  let waveM_y3 = p5.map(y+30, y1, y2, 0, 256);
  let waveM_x4 = p5.map(x+80, x1, x2, 0, 256);
  let waveM_y4 = p5.map(y, y1, y2, 0, 256);
  
  let waveM_x5 = p5.map(x+40, x1, x2, 0, 256);
  let waveM_y5 = p5.map(y+35, y1, y2, 0, 256);
  let waveM_x6 = p5.map(x, x1, x2, 0, 256);
  let waveM_y6 = p5.map(y+5, y1, y2, 0, 256);
  
  let waveM_x7 = p5.map(x-40, x1, x2, 0, 256);
  let waveM_y7 = p5.map(y-25, y1, y2, 0, 256);
  let waveM_x8 = p5.map(x-80, x1, x2, 0, 256);
  let waveM_y8 = p5.map(y, y1, y2, 0, 256);
  p5.beginShape(); //ONLINE WAVE HORIZONTAL
    p5.vertex(waveM_x, waveM_y)
    p5.quadraticVertex(waveM_x1, waveM_y1, waveM_x2, waveM_y2);
    p5.quadraticVertex(waveM_x3, waveM_y3, waveM_x4, waveM_y4);
    p5.quadraticVertex(waveM_x5, waveM_y5, waveM_x6, waveM_y6);
    p5.quadraticVertex(waveM_x7, waveM_y7, waveM_x8, waveM_y8);
  p5.endShape();

  let waveM1_x = p5.map(x+40, x1, x2, 0, 256);
  let waveM1_y = p5.map(y, y1, y2, 0, 256);
  
  let waveM1_x1 = p5.map(x+80, x1, x2, 0, 256);
  let waveM1_y1 = p5.map(y-30, y1, y2, 0, 256);
  let waveM1_x2 = p5.map(x+120, x1, x2, 0, 256);
  let waveM1_y2 = p5.map(y, y1, y2, 0, 256);
  
  let waveM1_x3 = p5.map(x+160, x1, x2, 0, 256);
  let waveM1_y3 = p5.map(y+30, y1, y2, 0, 256);
  let waveM1_x4 = p5.map(x+200, x1, x2, 0, 256);
  let waveM1_y4 = p5.map(y, y1, y2, 0, 256);
  
  let waveM1_x5 = p5.map(x+160, x1, x2, 0, 256);
  let waveM1_y5 = p5.map(y+35, y1, y2, 0, 256);
  let waveM1_x6 = p5.map(x+120, x1, x2, 0, 256);
  let waveM1_y6 = p5.map(y+5, y1, y2, 0, 256);
  
  let waveM1_x7 = p5.map(x+80, x1, x2, 0, 256);
  let waveM1_y7 = p5.map(y-25, y1, y2, 0, 256);

  let waveM1_x8 = p5.map(x+40, x1, x2, 0, 256);
  let waveM1_y8 = p5.map(y, y1, y2, 0, 256);
  p5.beginShape(); //ONLINE WAVE HORIZONTAL 1
    p5.vertex(waveM1_x, waveM1_y)
    p5.quadraticVertex(waveM1_x1, waveM1_y1, waveM1_x2, waveM1_y2);
    p5.quadraticVertex(waveM1_x3, waveM1_y3, waveM1_x4, waveM1_y4);
    p5.quadraticVertex(waveM1_x5, waveM1_y5, waveM1_x6, waveM1_y6);
    p5.quadraticVertex(waveM1_x7, waveM1_y7, waveM1_x8, waveM1_y8);
  p5.endShape();

  let waveM2_x = p5.map(x-80, x1, x2, 0, 256);
  let waveM2_y = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM2_x1 = p5.map(x-40, x1, x2, 0, 256);
  let waveM2_y1 = p5.map(y+90, y1, y2, 0, 256);
  let waveM2_x2 = p5.map(x, x1, x2, 0, 256);
  let waveM2_y2 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM2_x3 = p5.map(x+40, x1, x2, 0, 256);
  let waveM2_y3 = p5.map(y+150, y1, y2, 0, 256);
  let waveM2_x4 = p5.map(x+80, x1, x2, 0, 256);
  let waveM2_y4 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM2_x5 = p5.map(x+40, x1, x2, 0, 256);
  let waveM2_y5 = p5.map(y+145, y1, y2, 0, 256);
  let waveM2_x6 = p5.map(x, x1, x2, 0, 256);
  let waveM2_y6 = p5.map(y+115, y1, y2, 0, 256);
  
  let waveM2_x7 = p5.map(x-40, x1, x2, 0, 256);
  let waveM2_y7 = p5.map(y+85, y1, y2, 0, 256);
  let waveM2_x8 = p5.map(x-80, x1, x2, 0, 256);
  let waveM2_y8 = p5.map(y+120, y1, y2, 0, 256);
  p5.beginShape(); //MIDDLE WAVE HORIZONTAL 2
    p5.vertex(waveM2_x, waveM2_y)
    p5.quadraticVertex(waveM2_x1, waveM2_y1, waveM2_x2, waveM2_y2);
    p5.quadraticVertex(waveM2_x3, waveM2_y3, waveM2_x4, waveM2_y4);
    p5.quadraticVertex(waveM2_x5, waveM2_y5, waveM2_x6, waveM2_y6);
    p5.quadraticVertex(waveM2_x7, waveM2_y7, waveM2_x8, waveM2_y8);
  p5.endShape();

  let waveM3_x = p5.map(x+40, x1, x2, 0, 256);
  let waveM3_y = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM3_x1 = p5.map(x+80, x1, x2, 0, 256);
  let waveM3_y1 = p5.map(y+90, y1, y2, 0, 256);
  let waveM3_x2 = p5.map(x+120, x1, x2, 0, 256);
  let waveM3_y2 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM3_x3 = p5.map(x+160, x1, x2, 0, 256);
  let waveM3_y3 = p5.map(y+150, y1, y2, 0, 256);
  let waveM3_x4 = p5.map(x+200, x1, x2, 0, 256);
  let waveM3_y4 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM3_x5 = p5.map(x+160, x1, x2, 0, 256);
  let waveM3_y5 = p5.map(y+145, y1, y2, 0, 256);
  let waveM3_x6 = p5.map(x+120, x1, x2, 0, 256);
  let waveM3_y6 = p5.map(y+115, y1, y2, 0, 256);
  
  let waveM3_x7 = p5.map(x+80, x1, x2, 0, 256);
  let waveM3_y7 = p5.map(y+85, y1, y2, 0, 256);
  let waveM3_x8 = p5.map(x+40, x1, x2, 0, 256);
  let waveM3_y8 = p5.map(y+120, y1, y2, 0, 256);
  p5.beginShape(); //MIDDLE WAVE HORIZONTAL 3
    p5.vertex(waveM3_x, waveM3_y)
    p5.quadraticVertex(waveM3_x1, waveM3_y1, waveM3_x2, waveM3_y2);
    p5.quadraticVertex(waveM3_x3, waveM3_y3, waveM3_x4, waveM3_y4);
    p5.quadraticVertex(waveM3_x5, waveM3_y5, waveM3_x6, waveM3_y6);
    p5.quadraticVertex(waveM3_x7, waveM3_y7, waveM3_x8, waveM3_y8);
  p5.endShape();

  let waveV_x = p5.map(x, x1, x2, 0, 256);
  let waveV_y = p5.map(y+80, y1, y2, 0, 256);
  
  let waveV_x1 = p5.map(x-30, x1, x2, 0, 256);
  let waveV_y1 = p5.map(y+40, y1, y2, 0, 256);
  let waveV_x2 = p5.map(x, x1, x2, 0, 256);
  let waveV_y2 = p5.map(y, y1, y2, 0, 256);
  
  let waveV_x3 = p5.map(x+30, x1, x2, 0, 256);
  let waveV_y3 = p5.map(y-40, y1, y2, 0, 256);
  let waveV_x4 = p5.map(x, x1, x2, 0, 256);
  let waveV_y4 = p5.map(y-80, y1, y2, 0, 256);
  
  let waveV_x5 = p5.map(x+25, x1, x2, 0, 256);
  let waveV_y5 = p5.map(y-40, y1, y2, 0, 256);
  let waveV_x6 = p5.map(x-5, x1, x2, 0, 256);
  let waveV_y6 = p5.map(y, y1, y2, 0, 256);
  
  let waveV_x7 = p5.map(x-35, x1, x2, 0, 256);
  let waveV_y7 = p5.map(y+40, y1, y2, 0, 256);

  let waveV_x8 = p5.map(x, x1, x2, 0, 256);
  let waveV_y8 = p5.map(y+80, y1, y2, 0, 256);
  p5.beginShape(); //ONLINE WAVE VERTICAL 
    p5.vertex(waveV_x, waveV_y)
    p5.quadraticVertex(waveV_x1, waveV_y1, waveV_x2, waveV_y2);
    p5.quadraticVertex(waveV_x3, waveV_y3, waveV_x4, waveV_y4);
    p5.quadraticVertex(waveV_x5, waveV_y5, waveV_x6, waveV_y6);
    p5.quadraticVertex(waveV_x7, waveV_y7, waveV_x8, waveV_y8);
  p5.endShape();

  let waveV1_x = p5.map(x, x1, x2, 0, 256);
  let waveV1_y = p5.map(y-40, y1, y2, 0, 256);
  
  let waveV1_x1 = p5.map(x-30, x1, x2, 0, 256);
  let waveV1_y1 = p5.map(y-80, y1, y2, 0, 256);
  let waveV1_x2 = p5.map(x, x1, x2, 0, 256);
  let waveV1_y2 = p5.map(y-120, y1, y2, 0, 256);
  
  let waveV1_x3 = p5.map(x+30, x1, x2, 0, 256);
  let waveV1_y3 = p5.map(y-160, y1, y2, 0, 256);
  let waveV1_x4 = p5.map(x, x1, x2, 0, 256);
  let waveV1_y4 = p5.map(y-200, y1, y2, 0, 256);
  
  let waveV1_x5 = p5.map(x+25, x1, x2, 0, 256);
  let waveV1_y5 = p5.map(y-160, y1, y2, 0, 256);
  let waveV1_x6 = p5.map(x-5, x1, x2, 0, 256);
  let waveV1_y6 = p5.map(y-120, y1, y2, 0, 256);
  
  let waveV1_x7 = p5.map(x-35, x1, x2, 0, 256);
  let waveV1_y7 = p5.map(y-80, y1, y2, 0, 256);

  let waveV1_x8 = p5.map(x, x1, x2, 0, 256);
  let waveV1_y8 = p5.map(y-40, y1, y2, 0, 256);
  p5.beginShape(); //ONLINE WAVE VERTICAL 1
    p5.vertex(waveV1_x, waveV1_y)
    p5.quadraticVertex(waveV1_x1, waveV1_y1, waveV1_x2, waveV1_y2);
    p5.quadraticVertex(waveV1_x3, waveV1_y3, waveV1_x4, waveV1_y4);
    p5.quadraticVertex(waveV1_x5, waveV1_y5, waveV1_x6, waveV1_y6);
    p5.quadraticVertex(waveV1_x7, waveV1_y7, waveV1_x8, waveV1_y8);
  p5.endShape();

  let waveV2_x = p5.map(x+120, x1, x2, 0, 256);
  let waveV2_y = p5.map(y+80, y1, y2, 0, 256);
  
  let waveV2_x1 = p5.map(x+90, x1, x2, 0, 256);
  let waveV2_y1 = p5.map(y+40, y1, y2, 0, 256);
  let waveV2_x2 = p5.map(x+120, x1, x2, 0, 256);
  let waveV2_y2 = p5.map(y, y1, y2, 0, 256);
  
  let waveV2_x3 = p5.map(x+150, x1, x2, 0, 256);
  let waveV2_y3 = p5.map(y-40, y1, y2, 0, 256);
  let waveV2_x4 = p5.map(x+120, x1, x2, 0, 256);
  let waveV2_y4 = p5.map(y-80, y1, y2, 0, 256);
  
  let waveV2_x5 = p5.map(x+145, x1, x2, 0, 256);
  let waveV2_y5 = p5.map(y-40, y1, y2, 0, 256);
  let waveV2_x6 = p5.map(x+115, x1, x2, 0, 256);
  let waveV2_y6 = p5.map(y, y1, y2, 0, 256);
  
  let waveV2_x7 = p5.map(x+85, x1, x2, 0, 256);
  let waveV2_y7 = p5.map(y+40, y1, y2, 0, 256);

  let waveV2_x8 = p5.map(x+120, x1, x2, 0, 256);
  let waveV2_y8 = p5.map(y+80, y1, y2, 0, 256);
  p5.beginShape(); //MIDDLE WAVE VERTICAL 
    p5.vertex(waveV2_x, waveV2_y)
    p5.quadraticVertex(waveV2_x1, waveV2_y1, waveV2_x2, waveV2_y2);
    p5.quadraticVertex(waveV2_x3, waveV2_y3, waveV2_x4, waveV2_y4);
    p5.quadraticVertex(waveV2_x5, waveV2_y5, waveV2_x6, waveV2_y6);
    p5.quadraticVertex(waveV2_x7, waveV2_y7, waveV2_x8, waveV2_y8);
  p5.endShape();

  let waveV3_x = p5.map(x+120, x1, x2, 0, 256);
  let waveV3_y = p5.map(y-40, y1, y2, 0, 256);
  
  let waveV3_x1 = p5.map(x+90, x1, x2, 0, 256);
  let waveV3_y1 = p5.map(y-80, y1, y2, 0, 256);
  let waveV3_x2 = p5.map(x+120, x1, x2, 0, 256);
  let waveV3_y2 = p5.map(y-120, y1, y2, 0, 256);
  
  let waveV3_x3 = p5.map(x+150, x1, x2, 0, 256);
  let waveV3_y3 = p5.map(y-160, y1, y2, 0, 256);
  let waveV3_x4 = p5.map(x+120, x1, x2, 0, 256);
  let waveV3_y4 = p5.map(y-200, y1, y2, 0, 256);
  
  let waveV3_x5 = p5.map(x+145, x1, x2, 0, 256);
  let waveV3_y5 = p5.map(y-160, y1, y2, 0, 256);
  let waveV3_x6 = p5.map(x+115, x1, x2, 0, 256);
  let waveV3_y6 = p5.map(y-120, y1, y2, 0, 256);
  
  let waveV3_x7 = p5.map(x+85, x1, x2, 0, 256);
  let waveV3_y7 = p5.map(y-80, y1, y2, 0, 256);

  let waveV3_x8 = p5.map(x+120, x1, x2, 0, 256);
  let waveV3_y8 = p5.map(y-40, y1, y2, 0, 256);
  p5.beginShape(); //MIDDLE WAVE VERTICAL 
    p5.vertex(waveV3_x, waveV3_y)
    p5.quadraticVertex(waveV3_x1, waveV3_y1, waveV3_x2, waveV3_y2);
    p5.quadraticVertex(waveV3_x3, waveV3_y3, waveV3_x4, waveV3_y4);
    p5.quadraticVertex(waveV3_x5, waveV3_y5, waveV3_x6, waveV3_y6);
    p5.quadraticVertex(waveV3_x7, waveV3_y7, waveV3_x8, waveV3_y8);
  p5.endShape();
  

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

  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {

      if (zoom < 3) {  
        //DARK BLUE
        p5.stroke('#8ec5fb');
        p5.fill('#8ec5fb');
        p5.strokeWeight(2);
        waves(p5, x, y-2, x1, x2, y1, y2);
        //MID BLUE
        p5.stroke('#aed8fb ');
        p5.fill(' #aed8fb');
        p5.strokeWeight(2);
        waves(p5, x, y, x1, x2, y1, y2);
        //LIGHT BLUE
        p5.stroke('#d2e7fd');
        p5.fill('#d2e7fd');
        p5.strokeWeight(2);
        waves(p5, x, y+2, x1, x2, y1, y2);
      }

      


    }
  }

  //debug - show border

  // p5.noFill();
  // p5.stroke(255, 0, 0);
  // p5.strokeWeight(1);
  // p5.rect(0, 0, 255, 255);
}
