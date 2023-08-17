
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
  [0, 868, 607],
  [1, 774, 619],
  [2, 894, 492],
  [2, 1007, 354],
  [3, 998, 373],
  [4, 999, 372]
    
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
        
      p5.noStroke();

 //TOP DIAMONDS



 if (zoom >=2) {
   //Top Diamond 1 Super Large

  let sineWave = p5.sin(p5.globalFrameCount/8);
  let pulse = p5.map(sineWave, -1, 1, 0, 250);

      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y+180 - pulse, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 205, x1, x2, 0, 256);
      let quad_2y = p5.map(y-100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y-280 - pulse, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-205, x1, x2, 0, 256);
      let quad_4y = p5.map(y-100, y1, y2, 0, 256); 


      p5.fill(253, 80, 87,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }
      if (zoom >=1 && zoom <=3) {
      //Top Diamond 1 Larger

  let sineWave = p5.sin(p5.globalFrameCount/8);
  let pulse = p5.map(sineWave, -1, 1, 0, 250);

      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y+140 - pulse, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 165, x1, x2, 0, 256);
      let quad_2y = p5.map(y-100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y-240 - pulse, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-165, x1, x2, 0, 256);
      let quad_4y = p5.map(y-100, y1, y2, 0, 256); 

      p5.fill(87, 80, 253,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }
          

        if (zoom <=2) {
        //Top Diamond 1 Large Kite

  let sineWave = p5.sin(p5.globalFrameCount/8);
  let pulse = p5.map(sineWave, -1, 1, 0, 250);

      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y+100 - pulse, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 125, x1, x2, 0, 256);
      let quad_2y = p5.map(y-100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y-200 - pulse, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-125, x1, x2, 0, 256);
      let quad_4y = p5.map(y-100, y1, y2, 0, 256); 

      p5.fill(253, 80, 87,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }
        
        if (zoom <=2) {
             //Top Diamond 2 Medium Kite

             let sineWave = p5.sin(p5.globalFrameCount/8);
  let pulse = p5.map(sineWave, -1, 1, 0, 250);
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y+60 - pulse, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 85, x1, x2, 0, 256);
      let quad_2y = p5.map(y-100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y-160 - pulse, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-85, x1, x2, 0, 256);
      let quad_4y = p5.map(y-100, y1, y2, 0, 256); 

     p5.fill(87, 80, 253,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }
  

        
// BOTTOM DIAMONDS
  if (zoom >=2) {
             //Bottom Diamond 1 Super Large

             let sineWave = p5.sin(p5.globalFrameCount/8);
  let pulse = p5.map(sineWave, -1, 1, 0, 250);
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y-180 + pulse, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 205, x1, x2, 0, 256);
      let quad_2y = p5.map(y+100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y+280 + pulse, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-205, x1, x2, 0, 256);
      let quad_4y = p5.map(y+100, y1, y2, 0, 256); 

       p5.fill(87, 80, 253,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }

 if (zoom >=1 && zoom <=3){
  let sineWave = p5.sin(p5.globalFrameCount/8);
  let pulse = p5.map(sineWave, -1, 1, 0, 250);
             //Bottom Diamond 1 Larger
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y-140 + pulse, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 165, x1, x2, 0, 256);
      let quad_2y = p5.map(y+100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y+240 + pulse, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-165, x1, x2, 0, 256);
      let quad_4y = p5.map(y+100, y1, y2, 0, 256); 



      p5.fill(253, 80, 87,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      }


if (zoom <=2) {
  let sineWave = p5.sin(p5.globalFrameCount/8);
  let pulse = p5.map(sineWave, -1, 1, 0, 250);
           //Bottom Diamond 1 Large Kite
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y-100 + pulse, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 125, x1, x2, 0, 256);
      let quad_2y = p5.map(y+100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y+200 + pulse, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-125, x1, x2, 0, 256);
      let quad_4y = p5.map(y+100, y1, y2, 0, 256); 

      p5.fill(87, 80, 253,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
        
}
     

     if (zoom <=2) {
             //Bottom Diamond 2 Small Kite
             let sineWave = p5.sin(p5.globalFrameCount/8);
  let pulse = p5.map(sineWave, -1, 1, 0, 250);
      let quad_1x = p5.map(x+ 0, x1, x2, 0, 256);
      let quad_1y = p5.map(y-60 + pulse, y1, y2, 0, 256);

      let quad_2x = p5.map(x+ 85, x1, x2, 0, 256);
      let quad_2y = p5.map(y+100, y1, y2, 0, 256); 

      let quad_3x = p5.map(x+0, x1, x2, 0, 256);
      let quad_3y = p5.map(y+160 + pulse, y1, y2, 0, 256); 

      let quad_4x = p5.map(x-85, x1, x2, 0, 256);
      let quad_4y = p5.map(y+100, y1, y2, 0, 256); 

       p5.fill(253, 80, 87,100);
      p5.beginShape();
          p5.vertex(quad_1x, quad_1y);
          p5.vertex(quad_2x, quad_2y);
          p5.vertex(quad_3x, quad_3y);
          p5.vertex(quad_4x, quad_4y);
      p5.endShape();
 
      } 
     

    }


}

}