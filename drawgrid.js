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


/* the random number seed for the tour */
var tourSeed = 301;
let do_animation = true;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 460, 500],
  [2, 450, 410],
  [3, 440, 400],
  [4, 450, 410],
  [5, 450, 620]
]

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function getOffsetPoint(p5, x, y, z, noiseScale) {
  let offsetX = getRandomValue(p5, x, y, z, "offsetX", -max_movement, max_movement, noiseScale);
  let offsetY = getRandomValue(p5, x, y, z, "offsetY", -max_movement, max_movement, noiseScale);
  return [x+offsetX, y+offsetY]
}

//ZOOM 0
//package of chocolate

function covercho(p5, x, y, x1, x2, y1, y2) {
  p5.stroke(155);
  p5.rectMode(p5.CORNER);

  //set x,y
  let cover_x = p5.map(x + -280, x1, x2, 0, 256);
  let cover_x1 = p5.map(x + 480, x1, x2, 0, 256);
  let cover_x2 = p5.map(x + 100, x1, x2, 0, 256);
  let cover_x3 = p5.map(x + 120 , x1, x2, 0, 256);
  let cover_x4 = p5.map(x + 210, x1, x2, 0, 256);
  let cover_y = p5.map(y + -230, y1, y2, 0, 256);
  let cover_y1 = p5.map(y + 220, y1, y2, 0, 256);
  let cover_y2 = p5.map(y + -100 , y1, y2, 0, 256);
  let cover_y3 = p5.map(y + 200 , y1, y2, 0, 256);
  let cover_y4 = p5.map(y+ -80  , y1, y2, 0, 256);
  let cover_y5 = p5.map(y+ -210  , y1, y2, 0, 256);

//My references point for draw shapes
  p5.strokeWeight(20);
  // p5.point(cover_x,cover_y);
  //p5.point(cover_x2,cover_y2);
  // p5.point(cover_x,cover_y1);
  // p5.point(cover_x1,cover_y);
  // p5.point(cover_x1,cover_y1);
  //p5.point(cover_x2,cover_y3);
  // p5.point(cover_x4,cover_y5);
  // p5.point(cover_x3+120,cover_y4-20);
  // p5.point(cover_x4-120,cover_y5+20);

//Cover
  p5.stroke('#a32c0b');
  p5.strokeWeight(7);  
  p5.beginShape();
  p5.fill(255);
  p5.vertex(cover_x,cover_y);
  p5.vertex(cover_x1,cover_y);
  p5.vertex(cover_x1,cover_y1);
  p5.vertex(cover_x,cover_y1);
  p5.endShape(p5.CLOSE);

//Red rect
  p5.beginShape();
  p5.noStroke();
  p5.fill('#d11f00');
  p5.vertex(cover_x+210,cover_y+40);
  p5.vertex(cover_x1-200,cover_y+40);
  p5.vertex(cover_x1-200,cover_y1-100);
  p5.vertex(cover_x+210,cover_y1-100);
  p5.endShape(p5.CLOSE);

//my texts on cover  
  p5.textSize(120);
  p5.noStroke();
  p5.fill('#db9f1e');
  p5.textAlign(p5.CENTER);
  p5.text('A L M    N D', cover_x2+6,cover_y2+6);
  p5.textSize(120);
  p5.strokeWeight(6);
  p5.stroke('#a32c0b');
  p5.fill('#a32c0b');
  p5.textAlign(p5.CENTER);
  p5.text('A L M    N D', cover_x2,cover_y2);
  p5.stroke('#db9f1e');
  p5.fill('#db9f1e');
  p5.strokeWeight(1);
  p5.textSize(60);
  p5.textAlign(p5.CENTER);
  p5.text('C  H   O   C   O   L   A   T  E', cover_x2,cover_y3);

//Almond shape
  p5.strokeWeight(20);
  p5.beginShape();
  p5.fill('#703c19');
  p5.stroke('#703c19');
  p5.vertex(cover_x4-5,cover_y5);
  p5.bezierVertex(cover_x3-160,cover_y4+10, cover_x3+120,cover_y4+160, cover_x4-5,cover_y5);
  p5.endShape(p5.CLOSE);

//Highlight part of Almond
   p5.stroke(145, 80, 36,230);
   p5.noFill();
    p5.ellipse(cover_x3+60,cover_y4-60,10,45);
    p5.stroke(255, 255, 255,150);
    p5.ellipse(cover_x3+60,cover_y4-70,6,25);
    p5.fill(255, 255, 255);
    p5.noStroke(255, 255, 255,150);
    p5.ellipse(cover_x3+60,cover_y4-80,20,25);
}

//ZOOM 1
//open package

function opencho(p5, x, y, x1, x2, y1, y2,z) {
  p5.stroke(255);
  p5.rectMode(p5.CORNER);

  let phase = getRandomValue(p5, x, y, z, "phase", 0, 3*p5.PI, 0.1);
  let freq = getRandomValue(p5, x, y, z, "freq", 10, 50, 0.1);
  let sineWave = p5.sin(phase + (p5.globalFrameCount / freq));
  let radiusScale = p5.map(sineWave, -1, 1, 0.9, 1.0);

//set x,y
let cover_x = p5.map(x + -30, x1, x2, 0, 256);
  let cover_x1 = p5.map(x +35, x1, x2, 0, 256);
  let cover_x2 = p5.map(x + 193, x1, x2, 0, 256);
  let cover_x3 = p5.map(x + -50, x1, x2, 0, 256);
  let cover_x4 = p5.map(x + 280, x1, x2, 0, 256);
  let cover_x5 = p5.map(x + 220, x1, x2, 0, 256);
  let cover_y = p5.map(y+ -100, y1, y2, 0, 256);
  let cover_y1 = p5.map(y + 140, y1, y2, 0, 256);
  let cover_y2 = p5.map(y + -113, y1, y2, 0, 256);
  let cover_y3 = p5.map(y, y1, y2, 0, 256);
  let cover_y4 = p5.map(y , y1, y2, 0, 256);
  let cover_y5 = p5.map(y + -210, y1, y2, 0, 256);

  let cover_x6 = p5.map(x + 98, x1, x2, 0, 256);  
  let cover_y6 = p5.map(y + -145, y1, y2, 0, 256);
  let cover_x7 = p5.map(x + 120, x1, x2, 0, 256);  
  let cover_y7 = p5.map(y + -10, y1, y2, 0, 256);

//My references point for draw shapes
  // p5.strokeWeight(20);
  // p5.fill(255);
  // p5.point(cover_x,cover_y);
  // p5.point(cover_x1,cover_y1);
  // p5.point(cover_x5,cover_y5);
  // p5.point(cover_x3,cover_y3);
  // p5.point(cover_x4,cover_y4);
  // p5.point(cover_x2,cover_y2);
  // p5.point(cover_x3+ 15,cover_y3-60);
  // p5.point(cover_x1+ 15,cover_y1-60);
  // p5.point(cover_x4+20,cover_y4-60);
  // p5.point(cover_x2+10,cover_y2-30);
  // p5.point(cover_x6,cover_y6);
  // p5.point(cover_x6-135,cover_y6+135);
  // p5.point(cover_x6 + 25,cover_y6+125);

  p5.stroke('#a32c0b');
  p5.strokeWeight(7);  

//bottom
p5.push();
  p5.beginShape();
  p5.fill('#fff3db');
  p5.vertex(cover_x3,cover_y3);
  p5.vertex(cover_x1,cover_y1);
  p5.vertex(cover_x4,cover_y4);
  p5.vertex(cover_x2,cover_y2);
  p5.endShape(p5.CLOSE);
p5.pop();

//cover top
  p5.beginShape();
  p5.fill('#fff3db');
  p5.vertex(cover_x5,cover_y5);
  p5.vertex(cover_x,cover_y);
  p5.vertex(cover_x3,cover_y3);
  p5.vertex(cover_x2,cover_y2);
  p5.endShape(p5.CLOSE);

//Black under
p5.stroke(0);
  p5.beginShape();
  p5.fill('#591206');  
  p5.vertex(cover_x3+ 15,cover_y3-60);
  p5.vertex(cover_x2+10,cover_y2-50);
  p5.vertex(cover_x2,cover_y2);
  p5.vertex(cover_x3,cover_y3);
  p5.endShape(p5.CLOSE);

  p5.noStroke();
//cover red
  p5.beginShape();
  p5.fill('#d11f00');
  p5.vertex(cover_x5-140,cover_y5+65);
  p5.vertex(cover_x+140,cover_y-60);
  p5.vertex(cover_x3+150,cover_y3-125);
  p5.vertex(cover_x2-130,cover_y2+10);
  p5.endShape(p5.CLOSE);

//Almond shapes
  p5.strokeWeight(20);
  p5.beginShape();
  p5.fill('#703c19');
  p5.stroke('#703c19');
  p5.vertex(cover_x6,cover_y6);
  p5.bezierVertex(cover_x6-135,cover_y6+135, cover_x6 + 25,cover_y6+125,cover_x6,cover_y6);
  p5.endShape(p5.CLOSE);  

 //refer lines
  p5.push();
  p5.stroke('#db9f1e');
  p5.strokeWeight(3);
  p5.line(cover_x3+ 12,cover_y3-60,cover_x2+10,cover_y2-50);
  p5.push();
  p5.stroke('#db9f1e');
  p5.strokeWeight(3);
  p5.line(cover_x3,cover_y3,cover_x2,cover_y2);
  p5.pop();

//chocolate
p5.push();
p5.stroke('#2d1d16');
  p5.strokeWeight(100);

  p5.point((cover_x7-120)*radiusScale,cover_y7);
  p5.point(cover_x7-230,cover_y7+100);  
  p5.point(cover_x7-80,(cover_y7+150)*radiusScale);  
  p5.point((cover_x7+90)*radiusScale,(cover_y7-100)*radiusScale);  
  p5.point(cover_x7-20,cover_y7+40);   
  p5.point(cover_x7,cover_y7);
  p5.point((cover_x7+120)*radiusScale,cover_y7+50);  
p5.pop();

p5.push();
p5.stroke('#443129');
  p5.strokeWeight(85);
  p5.point((cover_x7-120)*radiusScale,cover_y7);
  p5.point(cover_x7-230,cover_y7+100);  
  p5.point(cover_x7-80,(cover_y7+150)*radiusScale);  
  p5.point((cover_x7+90)*radiusScale,(cover_y7-100)*radiusScale);  
  p5.point(cover_x7-20,cover_y7+40); 
  p5.point(cover_x7,cover_y7);
  p5.point((cover_x7+120)*radiusScale,cover_y7+50);  
p5.pop();
  p5.strokeWeight(5);
  p5.stroke(0);

//left 
  p5.beginShape();
  p5.fill('#841300');
  p5.vertex(cover_x3+ 15,cover_y3-60);  
  p5.vertex(cover_x1+ 15,cover_y1-60);  
  p5.vertex(cover_x1,cover_y1);
  p5.vertex(cover_x3,cover_y3);
  p5.endShape(p5.CLOSE);  

 //right
  p5.beginShape();
  p5.fill('#841300');
  p5.vertex(cover_x2+15,cover_y2-50);  
  p5.vertex(cover_x4+20,cover_y4-60);  
  p5.vertex(cover_x4,cover_y4);  
  p5.vertex(cover_x2,cover_y2);
  p5.endShape(p5.CLOSE);



//chololate 2
p5.push();
p5.stroke('#2d1d16');
  p5.strokeWeight(100);
  p5.point(cover_x7+120,(cover_y7-40)*radiusScale);  
  p5.point((cover_x7+150)*radiusScale,(cover_y7-145)*radiusScale); 
  p5.point(cover_x7+230,cover_y7-40);  
p5.pop();

p5.push();
p5.stroke('#443129');
  p5.strokeWeight(85);
  p5.point(cover_x7+120,(cover_y7-40)*radiusScale);  
  p5.point((cover_x7+150)*radiusScale,(cover_y7-145)*radiusScale);  
  p5.point(cover_x7+230,cover_y7-40);   
p5.pop();
  p5.strokeWeight(5);
  p5.stroke(0);

//front
  p5.beginShape();
  p5.fill('#841300');
  p5.vertex(cover_x1+ 15,cover_y1-60);  
  p5.vertex(cover_x4 +20,cover_y4-60);  
  p5.vertex(cover_x4,cover_y4);  
  p5.vertex(cover_x1,cover_y1);
  p5.endShape(p5.CLOSE);

}

//ZOOM 2

function cholbe(p5, x1, x2, y1, y2, z,zoom) { 

const max_thickness = 150;
const max_movement =200;
const ball_radius = 80;
const line_width = 8;
const grid_size =150;

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

//  debug version: draw one
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

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      // First compute shifted point in grid
      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x = x + offsetX;
      let shifted_y = y + offsetY;
      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);
     // console.log(x_pos);     
      // now compute shifted point one step to the left
      let x_left = x + grid_size;
      let y_left = y;
      let offsetX_left = getRandomValue(p5, x_left, y_left, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_left = getRandomValue(p5, x_left, y_left, z, "shiftY", -max_movement, max_movement,0.1);
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

//beans
      p5.noStroke();
      p5.fill('#2d1d16');
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      p5.fill('#443129');
      p5.ellipse(x_pos, y_pos, cur_ball_radius-80);

    }
  }
}


//ZOOM 3
function cholbe2(p5, x1, x2, y1, y2, z,zoom) { 

const max_thickness = 150;
const max_movement =200;
const ball_radius = 80;
const line_width = 8;
const grid_size =150;
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

//  debug version: draw one
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

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      // First compute shifted point in grid
      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x = x + offsetX;
      let shifted_y = y + offsetY;
      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);
     // console.log(x_pos);     

      // now compute shifted point one step to the left
      let x_left = x + grid_size;
      let y_left = y;
      let offsetX_left = getRandomValue(p5, x_left, y_left, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_left = getRandomValue(p5, x_left, y_left, z, "shiftY", -max_movement, max_movement,0.1);
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

//beans
      p5.noStroke();
      p5.fill('#2d1d16');
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      p5.fill('#443129');
      p5.ellipse(x_pos, y_pos, cur_ball_radius-80);
      p5.strokeWeight(20);

//Almond shape
      p5.noStroke();
      p5.fill('#2d1d16');
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      p5.fill('#443129');
      p5.ellipse(x_pos, y_pos, cur_ball_radius-80);
      p5.strokeWeight(20);
      p5.beginShape();
      p5.fill('#703c19');
      p5.stroke('#703c19');
      p5.vertex(x_pos, y_pos-250);
      p5.bezierVertex(x_pos+400, y_pos+400, x_pos-400, y_pos+400,x_pos, y_pos-250);
      p5.endShape(p5.CLOSE); 


//Detail for Almond
      p5.strokeWeight(5);
      p5.stroke('#c18653');
      p5.line(x_pos, y_pos-200,x_pos, y_pos+200); 
      p5.line(x_pos+25, y_pos-160,x_pos+25, y_pos+160); 
      p5.line(x_pos-35, y_pos-160,x_pos-35, y_pos+120); 
      p5.line(x_pos-75, y_pos-20,x_pos-75, y_pos+190); 
      p5.line(x_pos+68, y_pos-20,x_pos+68, y_pos+190); 
    }
  }
}

//ZOOM 4

function Almond2(p5, x1, x2, y1, y2, z,zoom) { 
const max_thickness = 42;
const max_movement = 64;
const ball_radius = 32;
const line_width = 8;
const grid_size = 42;

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

//  debug version: draw one
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

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      // First compute shifted point in grid
      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x = x + offsetX;
      let shifted_y = y + offsetY;
      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);
     // console.log(x_pos);     
      // now compute shifted point one step to the left
      let x_left = x + grid_size;
      let y_left = y;
      let offsetX_left = getRandomValue(p5, x_left, y_left, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_left = getRandomValue(p5, x_left, y_left, z, "shiftY", -max_movement, max_movement,0.1);
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

      const moving = 50;   
      let tailFreq = 30;
      let tailRadius = 100;
      let curSpin = (p5.globalFrameCount / tailFreq);
      let curSpinFrac = curSpin % 10;
      if(curSpinFrac > 5) {
        curSpinFrac = 5 - (curSpinFrac-5);
      }
      let lowAngle = 120;
      let highAngle = lowAngle + 60;
      let spinAngle = p5.map(curSpinFrac, 0, 10, lowAngle, highAngle);
      let tailSinWave = tailRadius * p5.sin(spinAngle);
      let tailCosWave = 30 + tailRadius * p5.cos(spinAngle);

      let tailBallPosX = x_pos + tailSinWave;
      let tailBallPosY = y_pos + moving + tailCosWave;

// Outline for Almond     
      p5.beginShape();
      p5.fill(153, 93, 53,50);
      p5.stroke(153, 93, 53,100);
      p5.vertex(tailBallPosX, tailBallPosY-270);
      p5.bezierVertex(x_pos+400, y_pos+400, x_pos-400, y_pos+400,tailBallPosX, tailBallPosY-270);
      p5.endShape(p5.CLOSE); 

// Almond   
      p5.beginShape();
      p5.fill('#703c19');
      p5.stroke('#703c19');
      p5.vertex(tailBallPosX, tailBallPosY-250);
      p5.bezierVertex(x_pos+400, y_pos+400, x_pos-400, y_pos+400,tailBallPosX, tailBallPosY-250);
      p5.endShape(p5.CLOSE); 

//reference point
      // p5.strokeWeight(20);
      // p5.stroke(155);
      // p5.point(x_pos, y_pos-280, cur_ball_radius-120);
      // p5.point(x_pos+170, y_pos+400, cur_ball_radius-120);
      // p5.point(x_pos-170, y_pos+400, cur_ball_radius-120);
    }
  }
}

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

if (zoom < 1){
  p5.background('#ba7a50');
  covercho(p5, 412, 512, x1, x2, y1, y2);
}
if (zoom > 0){
  p5.background('#ba7a50');
  opencho(p5, 412, 512, x1, x2, y1, y2,z);
}
if (zoom > 1){

  p5.background('#fff3db');
  cholbe(p5, x1, x2, y1, y2, z,zoom);
}
if (zoom > 2){

  p5.background('#fff3db');
  cholbe2(p5, x1, x2, y1, y2, z,zoom);
}
if (zoom >3){
  p5.background('#2d1d16');
  Almond2(p5, x1, x2, y1, y2, z,zoom);
}
  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}