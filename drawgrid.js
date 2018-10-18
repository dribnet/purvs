const max_thickness = 64;
const max_movement = 16;
const ball_radius = 32;
const line_width = 8;
const grid_size =256;
let do_animation = true;
let nukco = ['#670c07','#9d2318','#d29381','#cb746b','#ad3e33'];

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

/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
  let offsetX = getRandomValue(p5, x, y, z, "offsetX", -max_movement, max_movement, noiseScale);
  let offsetY = getRandomValue(p5, x, y, z, "offsetY", -max_movement, max_movement, noiseScale);
  return [x+offsetX, y+offsetY]
}

function drawPetals(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  const sqrt2 = 1.4142/2;
  let offsets = [
    [sqrt2, sqrt2],
    [-sqrt2, sqrt2],
    [-sqrt2, -sqrt2],
    [sqrt2, -sqrt2]
  ]
  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;
  for(let i=0; i<offsets.length; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(pixel_x, pixel_y, pixel_radius);    
  }
}

function drawStamens(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2, drawLines, z) {
  const offsets = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]
  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;
  let z_fraction = z % 1.0;
  let num_stamens = p5.map(z_fraction, 0, 1, 0, offsets.length)
  for(var i=0; i<num_stamens; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.strokeWeight(0);
    // p5.ellipse(pixel_x, pixel_y, pixel_radius);
    if(drawLines) {
      p5.strokeWeight(pixel_radius / 20);
      p5.line(pixel_x-pixel_radius, pixel_y, pixel_x+pixel_radius, pixel_y);
      p5.line(pixel_x, pixel_y-pixel_radius, pixel_x, pixel_y+pixel_radius);
      p5.strokeWeight(0);
      // p5.ellipse(pixel_x, pixel_y, pixel_radius / 12);
    }  
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
function myPattern(p5, x, y, x1, x2, y1, y2)  {
  let arc_x = p5.map(x+20, x1, x2, 0, 256);
  let arc_y = p5.map(y+30, y1, y2, 0, 256);
  p5.stroke(0);
  p5.strokeWeight(5);
  // p5.point(arc_x-70, arc_y-25);
  // p5.point(arc_x-30, arc_y-80);
  // p5.point(arc_x-120, arc_y-140);
  // p5.point(arc_x-230, arc_y-25);
  // p5.point(arc_x-370, arc_y-120);
  // p5.point(arc_x-430, arc_y-80);

  // p5.beginShape();
  // p5.fill('#670c07');
  // p5.noStroke();
  // p5.vertex(arc_x-70, arc_y-25);
  // p5.bezierVertex(arc_x-30, arc_y-80, arc_x-120, arc_y-140, arc_x-230, arc_y-25);
  // p5.endShape();
  // p5.beginShape();
  // p5.fill('#d29381');
  // p5.noStroke();
  // p5.vertex(arc_x-70, arc_y-25);
  // p5.bezierVertex(arc_x-30, arc_y+80, arc_x-120, arc_y+70, arc_x-230, arc_y-25);
  // p5.endShape();


  p5.beginShape();
  p5.fill(0);
  p5.noStroke();
  p5.vertex(arc_x+70, arc_y-25);
  p5.bezierVertex(arc_x-30, arc_y-80, arc_x-120, arc_y-140, arc_x-230, arc_y-25);
  p5.endShape();
  p5.beginShape();
  p5.fill(0);
  p5.noStroke();
  p5.vertex(arc_x+70, arc_y-25);
  p5.bezierVertex(arc_x-30, arc_y+80, arc_x-120, arc_y+70, arc_x-230, arc_y-25);
  p5.endShape();

}

function myPattern1(p5, x, y, x1, x2, y1, y2)  {
  let arc_x = p5.map(x+20, x1, x2, 0, 256);
  let arc_y = p5.map(y+30, y1, y2, 0, 256);
  p5.stroke(0);
  p5.strokeWeight(5);
  // p5.point(arc_x-70, arc_y-25);
  // p5.point(arc_x-30, arc_y-80);
  // p5.point(arc_x-120, arc_y-140);
  // p5.point(arc_x-230, arc_y-25);
  // p5.point(arc_x-370, arc_y-120);
  // p5.point(arc_x-430, arc_y-80);

  p5.beginShape();
  p5.fill('#9d2318');
  p5.noStroke();
  p5.vertex(arc_x-70, arc_y-25);
  p5.bezierVertex(arc_x-30, arc_y-80, arc_x-120, arc_y-140, arc_x-230, arc_y-25);
  p5.endShape();
  p5.beginShape();
  p5.fill('#9d2318');
  p5.noStroke();
  p5.vertex(arc_x-70, arc_y-25);
  p5.bezierVertex(arc_x-30, arc_y+80, arc_x-120, arc_y+70, arc_x-230, arc_y-25);
  p5.endShape();


  // p5.beginShape();
  // p5.fill(155);
  // p5.noStroke(0);
  // p5.vertex(arc_x+70, arc_y-25);
  // p5.bezierVertex(arc_x-30, arc_y-80, arc_x-120, arc_y-140, arc_x-230, arc_y-25);
  // p5.endShape();
  // p5.beginShape();
  // p5.fill(0);
  // p5.noStroke();
  // p5.vertex(arc_x+70, arc_y-25);
  // p5.bezierVertex(arc_x-30, arc_y+80, arc_x-120, arc_y+70, arc_x-230, arc_y-25);
  // p5.endShape();

}

function myPattern2(p5, x, y, x1, x2, y1, y2)  {
  let arc_x = p5.map(x+20, x1, x2, 0, 256);
  let arc_y = p5.map(y+30, y1, y2, 0, 256);
  p5.stroke(0);
  p5.strokeWeight(5);
  // p5.point(arc_x-70, arc_y-25);
  // p5.point(arc_x-30, arc_y-80);
  // p5.point(arc_x-120, arc_y-140);
  // p5.point(arc_x-230, arc_y-25);
  // p5.point(arc_x-370, arc_y-120);
  // p5.point(arc_x-430, arc_y-80);

  p5.beginShape();
  p5.fill('#670c07');
  p5.noStroke();
  p5.vertex(arc_x-70, arc_y-25);
  p5.bezierVertex(arc_x-30, arc_y-80, arc_x-120, arc_y-140, arc_x-230, arc_y-25);
  p5.endShape();
  p5.beginShape();
  p5.fill('#d29381');
  p5.noStroke();
  p5.vertex(arc_x-70, arc_y-25);
  p5.bezierVertex(arc_x-30, arc_y+80, arc_x-120, arc_y+70, arc_x-230, arc_y-25);
  p5.endShape();


  // p5.beginShape();
  // p5.fill(155);
  // p5.noStroke(0);
  // p5.vertex(arc_x+70, arc_y-25);
  // p5.bezierVertex(arc_x-30, arc_y-80, arc_x-120, arc_y-140, arc_x-230, arc_y-25);
  // p5.endShape();
  // p5.beginShape();
  // p5.fill(0);
  // p5.noStroke();
  // p5.vertex(arc_x+70, arc_y-25);
  // p5.bezierVertex(arc_x-30, arc_y+80, arc_x-120, arc_y+70, arc_x-230, arc_y-25);
  // p5.endShape();

}


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;
  p5.rectMode(p5.RADIUS);
  p5.ellipseMode(p5.RADIUS);
  p5.angleMode(p5.DEGREES);

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


  p5.background('#cb746b');
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

      // p5.push();
      // p5.rotate(p5.PI)
      // myPattern1(p5, x, y, x1, x2, y1, y2);
      // p5.pop();
      // p5.push();
      // p5.rotate(p5.PI/2)
      // myPattern1(p5, x, y, x1, x2, y1, y2);
      // p5.pop();
      // myPattern1(p5, x, y, x1, x2, y1, y2);
      // p5.fill(0);
      // p5.rect(x_pos-40, y_pos, 100,100); 
      // p5.rect(x_pos-40, y_pos, 100,100); 
      
      if(zoom == 0) {
        p5.fill(100,100,100);
      // p5.ellipse(x_pos,y_pos,100,100);
      // p5.ellipse(x_pos,y_pos+100,100,100);
      p5.push();
      // p5.translate(20,20);
      p5.rotate(-90);
      myPattern2(p5, x, y, x1, x2, y1, y2);
      p5.pop();
      p5.push();
      p5.rotate(180);
      myPattern2(p5, x, y, x1, x2, y1, y2);
      p5.pop();
      p5.push();
      p5.rotate(90)
      myPattern2(p5, x, y, x1, x2, y1, y2);
      p5.pop();
      myPattern2(p5, x, y, x1, x2, y1, y2);
      }

            if(zoom > 0) {
        p5.ellipseMode(p5.RADIUS);
        myPattern(p5, x, y, x1, x2, y1, y2);

      }

      // myPattern(p5, x, y, x1, x2, y1, y2);
      // if (zoom = 0) {
        // p5.fill(255, 181, 160,50);
        // p5.noStroke();
        // myPattern(p5, x, y, x1, x2, y1, y2);
        // p5.stroke('#cb746b');
        // p5.fill(203, 116, 107);
        // p5.ellipse(x_pos, y_pos, cur_ball_radius/2);   
        // p5.ellipse(x_pos-20, y_pos, cur_ball_radius/2); 
        // p5.ellipse(x_pos-40, y_pos, cur_ball_radius/2); 
        // p5.ellipse(x_pos-80, y_pos, cur_ball_radius/2); 
        // p5.ellipse(x_pos-100, y_pos, cur_ball_radius/2); 
        // p5.ellipse(x_pos-120, y_pos, cur_ball_radius/2); 
        // p5.ellipse(x_pos-140, y_pos, cur_ball_radius/2); 
        // p5.line(x_pos, y_pos,x_pos,x_pos_down);
        // p5.rect(x_pos, y_pos, cur_ball_radius,cur_ball_radius);      
      // }
        // p5.noStroke();
        // p5.fill(255, 181, 160,50);
        // p5.rect(x_pos, y_pos, x_pos,y_pos);  
      // p5.rect(x_pos, y_pos, cur_ball_radius,cur_ball_radius);

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