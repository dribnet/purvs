const max_thickness = 64;
const ball_radius = 32;


const line_width = 8;
const grid_size = 64;
const max_movement = 100;

let do_animation = true;
// var r = random(255);
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


/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
  let noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  let noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  let offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  let offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
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



  p5.background(255);
  p5.fill(0, 0, 128);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute all three points with offsets */
      let shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      let shift_point_left = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      let x_pos_left = p5.map(shift_point_left[0], x1, x2, 0, 256);
      let y_pos_left = p5.map(shift_point_left[1], y1, y2, 0, 256);

      let shift_point_down = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      let x_pos_down = p5.map(shift_point_down[0], x1, x2, 0, 256);
      let y_pos_down = p5.map(shift_point_down[1], y1, y2, 0, 256);

       tree(p5, x , y, x1, x2, y1, y2, z, zoom);


      /* now draw all elements from back to front */
      // p5.strokeWeight(cur_line_width);
      // p5.stroke(150, 0, 0);
      // //p5.line(x_pos, y_pos, x_pos_left, y_pos_left);
      // p5.stroke(0, 150, 0);
      // //p5.line(x_pos, y_pos, x_pos_down, y_pos_down);

      // p5.stroke(0, 0, 150);
      // p5.noStroke();
      // p5.rect(x_pos, y_pos, cur_ball_radius/2,cur_ball_radius/8);

      // p5.fill(200);
      //  p5.rect(x_pos+ (cur_ball_radius/20), y_pos-32, cur_ball_radius/2.5,cur_ball_radius/8);
      //  p5.fill(210);
      //  p5.rect(x_pos+ (cur_ball_radius/20), y_pos-64, cur_ball_radius/5,cur_ball_radius/8);

     
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




function tree (p5, x, y, x1, x2, y1, y2, z, zoom){

// bottom rec 512
  let rect1x = p5.map(x, x1, x2, 0, 256);
  let rect1y = p5.map(y, y1, y2, 0, 256);
  let radiusRect1 = p5.map(x+10, x1, x2, 0, 256);

// seccond rect 
  let rect2x = p5.map(x+0.8, x1, x2, 0, 256);
  let rect2y = p5.map(y-2, y1, y2, 0, 256);
  let radiusRect2 = p5.map(x+10.8, x1, x2, 0, 256);
//third rect
  let rect3x = p5.map(x+1.4, x1, x2, 0, 256);
  let rect3y = p5.map(y-4, y1, y2, 0, 256);
  let radiusRect3 = p5.map(x+11.4, x1, x2, 0, 256);
//fourth rect
  let rect4x = p5.map(x+2.1, x1, x2, 0, 256);
  let rect4y = p5.map(y-6, y1, y2, 0, 256);
  let radiusRect4 = p5.map(x+12.1, x1, x2, 0, 256);
//fifth rect 
  let rect5x = p5.map(x+2.9, x1, x2, 0, 256);
  let rect5y = p5.map(y-8, y1, y2, 0, 256);
  let radiusRect5 = p5.map(x+12.9, x1, x2, 0, 256);
//base of tree
  let basex = p5.map(x+2.9, x1, x2, 0, 256);
  let basey = p5.map(y+2, y1, y2, 0, 256);
  let radiusbase = p5.map(x+12.9, x1, x2, 0, 256);
//snow hole thing
  let base2x = p5.map(x+1.5, x1, x2, 0, 256);
  let base2y = p5.map(y+3, y1, y2, 0, 256);
  let radiusbase2 = p5.map(x+11.5, x1, x2, 0, 256);

  let base3x = p5.map(x+1, x1, x2, 0, 256);
  let base3y = p5.map(y+3.4, y1, y2, 0, 256);
  let radiusbase3 = p5.map(x+11, x1, x2, 0, 256);



  

  p5.strokeWeight(0);
 // furst rec 512
p5.fill(34, 99, 36);
p5.rect(rect1x, rect1y, (radiusRect1-rect1x),(radiusRect1-rect1x)/5);

// seccond rect
 p5.fill(38, 109, 40);
 p5.rect(rect2x, rect2y, (radiusRect2-rect2x)/1.20,(radiusRect2-rect2x)/5);

 //third rect
 p5.fill(58, 153, 61);
p5.rect(rect3x, rect3y, (radiusRect3-rect3x)/1.40,(radiusRect3-rect3x)/5);

//fourth rect
 p5.fill(49, 137, 52);
 p5.rect(rect4x, rect4y, (radiusRect4-rect4x)/1.80,(radiusRect4-rect4x)/5);

 //fifth rect 
p5.fill(63, 175, 66);
p5.rect(rect5x, rect5y, (radiusRect5-rect5x)/2.6,(radiusRect5-rect5x)/5);

//zoom 2 introduces snow base around the botto of tree 
 if(zoom > 2){
p5.fill(220);
p5.rect(base2x, base2y, (radiusbase2-base2x)/1.5,(radiusbase2-base2x)/5);
p5.rect(base3x, base3y, (radiusbase3-base3x)/1.3,(radiusbase3-base3x)/8);



}
 
 //zoom 3 introduces smaller details and shades on the tree
if (zoom > 3){

 p5.fill(53, 132, 55);
p5.rect(rect1x, rect1y, (radiusRect1-rect1x),(radiusRect1-rect1x)/7);
 p5.fill(59, 137, 61);
 p5.rect(rect2x, rect2y, (radiusRect2-rect2x)/1.20,(radiusRect2-rect2x)/7);
 p5.fill(78, 173, 81);
p5.rect(rect3x, rect3y, (radiusRect3-rect3x)/1.40,(radiusRect3-rect3x)/7);
 p5.fill(68, 155, 71);
 p5.rect(rect4x, rect4y, (radiusRect4-rect4x)/1.80,(radiusRect4-rect4x)/7);
p5.fill(84, 188, 87);
p5.rect(rect5x, rect5y, (radiusRect5-rect5x)/2.6,(radiusRect5-rect5x)/7);




}

//zoom 4 introduces snowcaps to the top of trees
if (zoom > 4){
   p5.fill(240);
p5.rect(rect1x, rect1y, (radiusRect1-rect1x),(radiusRect1-rect1x)/20);
p5.rect(rect2x, rect2y, (radiusRect2-rect2x)/1.20,(radiusRect2-rect2x)/20);
p5.rect(rect3x, rect3y, (radiusRect3-rect3x)/1.40,(radiusRect3-rect3x)/20);
 p5.rect(rect4x, rect4y, (radiusRect4-rect4x)/1.80,(radiusRect4-rect4x)/20);
 p5.rect(rect5x, rect5y, (radiusRect5-rect5x)/2.6,(radiusRect5-rect5x)/20);
}

p5.fill(99, 60, 34);
p5.rect(basex, basey, (radiusbase-basex)/2.6,(radiusbase-basex)/5);


//places the brown stem of the tree back ontop of the snow circle well thing. Also adds some more rendering detail
if (zoom > 3){

  p5.fill(114, 75, 49);
  p5.rect(basex, basey, (radiusbase-basex)/8,(radiusbase-basex)/5);
}

if (zoom > 4){


//star 1
  let star1x = p5.map(x+4.7, x1, x2, 0, 256);
  let star1y = p5.map(y-11, y1, y2, 0, 256);
  let radiusstar1 = p5.map(x+14.7, x1, x2, 0, 256);

  p5.fill(255, 226, 86);
  p5.rect(star1x, star1y, (radiusstar1-star1x)/25,(radiusstar1-star1x)/4);

//star 2
   let star2x = p5.map(x+4.01, x1, x2, 0, 256);
  let star2y = p5.map(y-10, y1, y2, 0, 256);
  let radiusstar2 = p5.map(x+14.7, x1, x2, 0, 256);

  
  p5.rect(star2x, star2y, (radiusstar2-star2x)/6,(radiusstar2-star2x)/25);


  //star 3
   let star3x = p5.map(x+4.4, x1, x2, 0, 256);
  let star3y = p5.map(y-10.3, y1, y2, 0, 256);
  let radiusstar3 = p5.map(x+14.4, x1, x2, 0, 256);

 
  p5.rect(star3x, star3y, (radiusstar3-star3x)/10,(radiusstar3-star3x)/10);


//light 1
  let light1x = p5.map(x+2.9, x1, x2, 0, 256);
  let light1y = p5.map(y-8, y1, y2, 0, 256);
  let radiuslight1 = p5.map(x+12.9, x1, x2, 0, 256);

  //p5.fill(255,0,0);
  p5.rect(light1x, light1y, (radiuslight1-light1x)/20,(radiuslight1-light1x)/20);


  //2
   let light3x = p5.map(x+5.6, x1, x2, 0, 256);
  let light3y = p5.map(y-6.3, y1, y2, 0, 256);
  let radiuslight3 = p5.map(x+15.6, x1, x2, 0, 256);
  p5.rect(light3x, light3y, (radiuslight3-light3x)/20,(radiuslight3-light3x)/20);

  //3
   let light4x = p5.map(x+4, x1, x2, 0, 256);
  let light4y = p5.map(y-7, y1, y2, 0, 256);
  let radiuslight4 = p5.map(x+14, x1, x2, 0, 256);
  p5.rect(light4x, light4y, (radiuslight4-light4x)/20,(radiuslight4-light4x)/20);

//light 4
  let light2x = p5.map(x+7.2, x1, x2, 0, 256);
  let light2y = p5.map(y-6, y1, y2, 0, 256);
  let radiuslight2 = p5.map(x+17.2, x1, x2, 0, 256);
  p5.rect(light2x, light2y, (radiuslight2-light2x)/20,(radiuslight2-light2x)/20);

//5
   let light5x = p5.map(x+6, x1, x2, 0, 256);
  let light5y = p5.map(y-5, y1, y2, 0, 256);
  let radiuslight5 = p5.map(x+16, x1, x2, 0, 256);
  p5.rect(light5x, light5y, (radiuslight5-light5x)/20,(radiuslight5 - light5x)/20);

  //6
   let light6x = p5.map(x+4.5, x1, x2, 0, 256);
  let light6y = p5.map(y-4.5, y1, y2, 0, 256);
  let radiuslight6 = p5.map(x+14.5, x1, x2, 0, 256);
  p5.rect(light6x, light6y, (radiuslight6-light6x)/20,(radiuslight6 - light6x)/20);

    //7
   let light7x = p5.map(x+3, x1, x2, 0, 256);
  let light7y = p5.map(y-4.2, y1, y2, 0, 256);
  let radiuslight7 = p5.map(x+13, x1, x2, 0, 256);
  p5.rect(light7x, light7y, (radiuslight7-light7x)/20,(radiuslight7 - light7x)/20);

  //8
  let light8x = p5.map(x+1.4, x1, x2, 0, 256);
  let light8y = p5.map(y-4, y1, y2, 0, 256);
  let radiuslight8 = p5.map(x+11.4, x1, x2, 0, 256);
  p5.rect(light8x, light8y, (radiuslight8-light8x)/20,(radiuslight8-light8x)/20);

      //9
   let light9x = p5.map(x+2.6, x1, x2, 0, 256);
  let light9y = p5.map(y-3.2, y1, y2, 0, 256);
  let radiuslight9 = p5.map(x+12.6, x1, x2, 0, 256);
  p5.rect(light9x, light9y, (radiuslight9-light9x)/20,(radiuslight9 - light9x)/20);


     //10
   let light10x = p5.map(x+4.5, x1, x2, 0, 256);
  let light10y = p5.map(y-2.6, y1, y2, 0, 256);
  let radiuslight10 = p5.map(x+14.5, x1, x2, 0, 256);
  p5.rect(light10x, light10y, (radiuslight10-light10x)/20,(radiuslight10 - light10x)/20);

       //11
   let light11x = p5.map(x+6.5, x1, x2, 0, 256);
  let light11y = p5.map(y-2.2, y1, y2, 0, 256);
  let radiuslight11 = p5.map(x+16.5, x1, x2, 0, 256);
  p5.rect(light11x, light11y, (radiuslight11-light11x)/20,(radiuslight11 - light11x)/20);

        //12
   let light12x = p5.map(x+8.6, x1, x2, 0, 256);
  let light12y = p5.map(y-2, y1, y2, 0, 256);
  let radiuslight12 = p5.map(x+18.6, x1, x2, 0, 256);
  p5.rect(light12x, light12y, (radiuslight12-light12x)/20,(radiuslight12 - light12x)/20);

        //13
   let light13x = p5.map(x+7, x1, x2, 0, 256);
  let light13y = p5.map(y-0.7, y1, y2, 0, 256);
  let radiuslight13 = p5.map(x+17, x1, x2, 0, 256);
  p5.rect(light13x, light13y, (radiuslight13-light13x)/20,(radiuslight13 - light13x)/20);


        //14
   let light14x = p5.map(x+5, x1, x2, 0, 256);
  let light14y = p5.map(y+0.3, y1, y2, 0, 256);
  let radiuslight14 = p5.map(x+15, x1, x2, 0, 256);
  p5.rect(light14x, light14y, (radiuslight14-light14x)/20,(radiuslight14 - light14x)/20);


//15
     let light15x = p5.map(x+2.5, x1, x2, 0, 256);
  let light15y = p5.map(y+1, y1, y2, 0, 256);
  let radiuslight15 = p5.map(x+12.5, x1, x2, 0, 256);
  p5.rect(light15x, light15y, (radiuslight15-light15x)/20,(radiuslight15 - light15x)/20);

         //17
   let light17x = p5.map(x, x1, x2, 0, 256);
  let light17y = p5.map(y+1.5, y1, y2, 0, 256);
  let radiuslight17 = p5.map(x+10, x1, x2, 0, 256);
  p5.rect(light17x, light17y, (radiuslight17-light17x)/20,(radiuslight17 - light17x)/20);
	
}




}
