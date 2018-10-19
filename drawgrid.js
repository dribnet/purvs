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
let do_animation = true;
const max_thickness = 700;
const grid_size = 250;

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 512, 512],
  [1, 474, 571],
  [2, 410, 383],
  [3, 346, 417],
  [4, 357, 379],
    
]




function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    
    let dz = p5.globalFrameCount / 100.0;
    z = z + dz;
    
      p5.background(255,255,255);
    
/* max_shift is the amount of overlap a tile can spill over into its neighbors */
let max_shift = max_thickness;
    
/* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);    
    
for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
        


 // Red Diamonds
          

        if (zoom >=0) {
             //DRAW QUADRATIC
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y+100, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 90, x1, x2, 0, 256);
      let quad_2y = p5.map(y-100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y-200, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-90, x1, x2, 0, 256);
      let quad_4y = p5.map(y-100, y1, y2, 0, 256); 

      p5.stroke(253, 50, 57, 150);
      p5.strokeWeight(3);
      p5.noStroke();
      p5.fill(253, 80, 87,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }
        
        if (zoom >=0) {
             //DRAW QUADRATIC
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y+80, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 70, x1, x2, 0, 256);
      let quad_2y = p5.map(y-80, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y-180, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-70, x1, x2, 0, 256);
      let quad_4y = p5.map(y-80, y1, y2, 0, 256); 

      p5.stroke(253, 50, 57, 150);
      p5.strokeWeight(3);
      p5.noStroke();
      p5.fill(253, 80, 87,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }
        
     
        
// Blue Diamonds



if (zoom >=0) {
           //DRAW QUADRATIC
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y-100, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 90, x1, x2, 0, 256);
      let quad_2y = p5.map(y+100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y+200, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-90, x1, x2, 0, 256);
      let quad_4y = p5.map(y+100, y1, y2, 0, 256); 

      p5.stroke(253, 50, 57, 150);
      p5.strokeWeight(3);
      p5.noStroke();
      p5.fill(87, 80, 253,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
        
}
     

     if (zoom >=0) {
             //DRAW QUADRATIC
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y-80, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 70, x1, x2, 0, 256);
      let quad_2y = p5.map(y+80, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y+180, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-70, x1, x2, 0, 256);
      let quad_4y = p5.map(y+80, y1, y2, 0, 256); 

      p5.stroke(253, 50, 57, 150);
      p5.strokeWeight(3);
      p5.noStroke();
       p5.fill(87, 80, 253,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }   
    }
}
    
    
    
 
    
    
    //SHOW RED LINE GRID
//   p5.noFill();
//   p5.stroke(255, 100, 100)
//   p5.rect(0, 0, 255, 255);
    
    

}