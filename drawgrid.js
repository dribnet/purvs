const max_thickness = 64;
const max_movement = 64;
const grid_size = 256;
let do_animation = true;
let yoff = 0.0;

/* the random number seed for the tour */
var tourSeed = 150;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 500, 500],
  [1, 500, 500],
  [2, 500, 500],
  [3, 500, 500],
  [4, 500, 500],
  [5, 500, 500],
  [6, 500, 500]
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

function drawPetals(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2, z) {
  const sqrt2 = 1.4142/2;
  let offsets = [
    [sqrt2, sqrt2],
    [-sqrt2, sqrt2],
    [-sqrt2, -sqrt2],
    [sqrt2, -sqrt2]
  ]
  let phase = getRandomValue(p5, pos_x, pos_y, z, "phase", 0, 2, 0.1);
  let freq = getRandomValue(p5, pos_x, pos_y, z, "freq", 10, 50, 0.1);
  let sineWave = p5.sin(phase + (p5.globalFrameCount / freq));
  let radiusScale = p5.map(sineWave, -1, 1, 0.80, 1.0);

  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2,  0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;
  pixel_radius = radiusScale * pixel_radius;

  for(let i=0; i<offsets.length; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+offset[1], y1, y2, 0, 256);

//draw motiple times use j.
     for (var j = 0.5; j < 1; j++) {
       var r = p5.random(255);
       p5.fill(r);
       let xoff = 0;
       for (let x = 0; x <= x1; x += 50){
           xoff += 10;
           yoff += 2;
        }
       let yt = p5.map(p5.noise(xoff, yoff), 0, 1, 1, 100);
       p5.background(255);
       p5.textSize(40 + yt); //add noise to the text size.
       p5.noStroke();
       p5.text("ALL", pixel_x + j, 0);
       p5.text("THE", pixel_x + j, 50);
       p5.text("THINGS", pixel_x + j, 100);
       p5.text("YOU", pixel_x + j, 150);
       p5.text("SEE", pixel_x + j, 200);
     }
  }
}

function drawStamens(p5, x1, x2, y1, y2, pos_x, pos_y, drawLines, z) {
  const offsets = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]
  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;
  let z_fraction = z % 2.0;
  let num_stamens = p5.map(z_fraction, 0, 1, 0, offsets.length)

  for(var i=0;i<offsets.length;i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+offset[1], y1, y2, 0, 256);

        p5.background(255);
        var r = p5.random(255); //flashy reflection of the words.
        p5.fill(0);
        p5.textSize(200);
        p5.text("DOESNT", pixel_x - 600, pixel_y - 100);   
        p5.text("EXIST", pixel_x - 600, pixel_y + 100);
        p5.fill(0, r);
        p5.text("DOESNT", pixel_x - 600 + 40, pixel_y - 100);
        p5.text("EXIST", pixel_x - 600 + 40, pixel_y + 100);
    
  if(drawLines) {
     p5.background(0); // turn background to black when super zoomed.
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
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  /* For animation: updated z based on global frame count */

  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;

  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;

  // console.log(p5.globalFrameCount);

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

  //p5.background(255);
  
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
       var r = p5.random(0, 255);
       p5.fill(r);
       p5.textSize(100);
       p5.stroke(r);
       p5.text("V", x_pos, y_pos);
       p5.text("O", x_pos + 50, y_pos + 50);
       p5.text("I", x_pos + 125, y_pos + 100);
       p5.text("D", x_pos + 150, y_pos + 150);
    }

    if (zoom >= 2) {
        p5.fill(255);
        drawPetals(p5, x1, x2, y1, y2, shifted_x, shifted_y); 
      }

      if(zoom >= 4) {
        // now if we are super zoomed, draw lines in the stamen
        var drawLines = false;
        if (zoom >= 6) drawLines = true;
        p5.fill(255);
        drawStamens(p5, x1, x2, y1, y2, shifted_x, shifted_y, drawLines, z);
      }
    }
  }
  /*
   //debug - show border
   p5.noFill();
   p5.stroke(0, 200, 200)
   p5.strokeWeight(1);
   p5.rect(0, 0, 255, 255);
   p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
   let sizex = x2 - x1;
   p5.text("width: " + sizex, 10, 40);*/
}
