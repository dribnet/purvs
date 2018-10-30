


// // const max_thickness = 64;
// const ball_radius = 32;
// const line_width = 2;
// // const grid_size = 64;

// // const backgrnd = "#105B63";
// // const lines = "#DB9E36";
// // const fillColour = "#FFD34E";
// // const lineWidth = 1;
// const max_thickness = 64;
// const grid_size = 128;

// /* the random number seed for the tour */
// var tourSeed = 301;
// /* triplets of locations: zoom, x, y */
// var tourPath = [
//   [2, 512, 512],
//   [4, 512, 512],
//   [6, 512, 512]
// ]


// const backgrnd = "#105B63";
// const lines = "#DB9E36";
// const fillColour = "#FFD34E";
// const lineWidth = 10;

// /*let ballx = 400;
// let bally = 400;
// let ballr = 400;

// let point1x = 0;
// let point1y = 0;
// let point2x = 256;
// let point2y = 384;
// let point3x = 512;
// let point3y = 0;*/

// //X values
// let Gx383 = 383;
// let Gx255 = 255;
// let Gx128 = 128;
// let Gx0 = 0;
// let GNEGx128 = -128

// //Y values

// let Gy255 = 255;
// let Gy235 = 235;
// let Gy215 = 215;
// let Gy195 = 195;
// let Gy40 = 40;
// let Gy20 = 20;
// let Gy0 = 0;


// /* this function takes a coordinate and aligns to a grid of size gsize */
// function snap_to_grid(num, gsize) {
//   return (num - (num % gsize));
// }

// function drawGrid(p5, x1, x2, y1, y2, z, zoom) {


// let deg = p5.radians(45);

//   p5.background(backgrnd);

//     /* max_shift is the amount of overlap a tile can spill over into its neighbors */
//   let max_shift = max_thickness;

//   /* this rectangle defines the region that will be drawn and includes a margin */
//   let min_x = snap_to_grid(x1 - max_shift, grid_size);
//   let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
//   let min_y = snap_to_grid(y1 - max_shift, grid_size);
//   let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

//   // debug version: draw one
//   // let half_x = (x1 + x2) / 2;
//   // let half_y = (y1 + y2) / 2;
//   // min_x = snap_to_grid(half_x, grid_size);
//   // max_x = snap_to_grid(half_x + grid_size, grid_size);
//   // min_y = snap_to_grid(half_y, grid_size);
//   // max_y = snap_to_grid(half_y + grid_size, grid_size);

//   let c_p00 = p5.map(0, x1, x2, 0, 256);
//   let c_plwidth = p5.map(lineWidth, x1, x2, 0, 256);
//   let strokeWidth = c_plwidth - c_p00;

//   p5.strokeWeight(strokeWidth);  
//   p5.stroke (lines);
//   p5.fill(255, 211, 78, 50);
//   p5.stroke (lines); //noStroke();

//   /*let localBallX = p5.map(ballx, x1, x2, 0, 256);
//   let localBallY = p5.map(bally, y1, y2, 0, 256);
//   let localBallXEdge = p5.map(ballx + ballr, x1, x2, 0, 256);
//   let localBallRadius = localBallXEdge - localBallX;*/


//   /*let localpoint1x = p5.map(point1x, x1, x2, 0, 256);
//   let localpoint1y = p5.map(point1y, y1, y2, 0, 256);
//   let localpoint2x = p5.map(point2x, x1, x2, 0, 256);
//   let localpoint2y = p5.map(point2y, y1, y2, 0, 256);
//   let localpoint3x = p5.map(point3x, x1, x2, 0, 256);
//   let localpoint3y = p5.map(point3y, y1, y2, 0, 256);

//   p5.beginShape();
//   p5.curveVertex(localpoint1x, localpoint1y);
//   p5.curveVertex(localpoint1x, localpoint1y);
//   p5.curveVertex(localpoint2x, localpoint2y);
//   p5.curveVertex(localpoint3x, localpoint3y);
//   p5.curveVertex(localpoint3x, localpoint3y);
//   p5.endShape();*/


//   for(let x=min_x; x<max_x; x+=grid_size) {
//     for(let y=min_y; y<max_y; y+=grid_size) {
//       /* first compute the points to be drawn */
//       let x_pos = p5.map(x, x1, x2, 0, 256);
//       let y_pos = p5.map(y, y1, y2, 0, 256);

//       // p5.ellipse(x_pos, y_pos, strokeWidth);

//       // let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
//       // let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

//       /*
//       //X VALUES
//       let x383 = p5.map(Gx383, x1, x2, 0, 256);
//       let x255 = p5.map(Gx255, x1, x2, 0, 256);
//       let x128 = p5.map(Gx128, x1, x2, 0, 256);
//       let x0 = p5.map(Gx0, x1, x2, 0, 256);
//       let NEGx128 = p5.map(GNEGx128, x1, x2, 0, 256);



//       //Y values
       
//       let y255 = p5.map(Gy255, x1, x2, 0, 256);
//       let y235 = p5.map(Gy235, x1, x2, 0, 256);
//       let y215 = p5.map(Gy215, x1, x2, 0, 256);
//       let y195 = p5.map(Gy195, x1, x2, 0, 256);
//       let y40 = p5.map(Gy40, x1, x2, 0, 256);
//       let y20 = p5.map(Gy20, x1, x2, 0, 256);
//       let y0 = p5.map(Gy0, x1, x2, 0, 256);  */

//       ///*
//       //X VALUES
//       let x383 = p5.map(x + (3*grid_size/2), x1, x2, 0, 256);
//       let x255 = p5.map(x + grid_size, x1, x2, 0, 256);
//       let x128 = p5.map(x +(grid_size/2), x1, x2, 0, 256);
//       let x0 = p5.map(x, x1, x2, 0, 256);
//       let NEGx128 = p5.map(x +(-1*grid_size/2), x1, x2, 0, 256);



//       //Y values

//       let y255 = p5.map(y + grid_size, y1, y2, 0, 256);
//       let y235 = p5.map(y + (grid_size - (grid_size/12.8)), y1, y2, 0, 256);
//       let y215 = p5.map(y + (grid_size - (2*grid_size/12.8)), y1, y2, 0, 256);
//       let y195 = p5.map(y + (grid_size - (3*grid_size/12.8)), y1, y2, 0, 256);
//       let y40 = p5.map(y + (2*grid_size/12.8), y1, y2, 0, 256);
//       let y20 = p5.map(y + (grid_size/12.8), y1, y2, 0, 256);
//       let y0 = p5.map(y, y1, y2, 0, 256);
//       //*/

//       //p5.strokeWeight(strokeWidth * 0.1);
//       /* now draw all elements from back to front */
//       /* debug with lines
//       p5.fill(0);
//       p5.ellipse(x0, y0, 0.25*strokeWidth);
//       p5.fill(255);
//       p5.ellipse(x128, y195, 0.10*strokeWidth);

//       p5.line(NEGx128, y215, x0, y0);
//       p5.line(x0, y0, x128, y195);
//       p5.line(x128, y195, x255, y0);
//       p5.line(x255, y0, x383, y215);
//       */



//   let c_p00 = p5.map(0, x1, x2, 0, 256);
//   let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
//   let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
//   let cur_line_width = c_plwidth - c_p00;
//   let cur_ball_radius = c_pball - c_p00;
//   let strokeWidth = c_plwidth - c_p00;
//       p5.fill(255, 211, 78, 60);
//       // p5.noStroke();
//       //  p5.push();
//       //  p5.rotate(deg);
//       // // //p5.translate(+ cur_ball_radius/2, - cur_ball_radius/2);
//       //  p5.rect(x_pos, 1*y_pos, cur_ball_radius, cur_ball_radius);
//       //  p5.pop();
//       p5.stroke(255);
//       p5.ellipse(x255, y0, grid_size/10);
//       p5.stroke (lines);
//       p5.ellipse(x0, y0, grid_size/5);
//       p5.line(x0, y0, x255, y0);


//       p5.ellipse(x128, x128, grid_size/5);
//       //p5.line(x255, y0, x128, x128);
//       //p5.line(x128, x128, x0, y0);
//       //p5.beginShape();
//       //p5.vertex(x0, y0);
//       //p5.vertex(x255, y0);
//       //p5.vertex(x128, x128);
//       // p5.vertex(x0, y0);
//       // p5.endShape();
      

//       // p5.beginShape();
//       // p5.curveVertex(NEGx128, y215);
//       // p5.curveVertex(x0, y0);
//       // p5.curveVertex(x128, y195);
//       // p5.curveVertex(x255, y0);
//       // p5.curveVertex(x383, y195);
//       // p5.endShape();

//       // p5.beginShape();
//       // p5.curveVertex(NEGx128, y235);
//       // p5.curveVertex(x0, y20);
//       // p5.curveVertex(x128, y215);
//       // p5.curveVertex(x255, y20);
//       // p5.curveVertex(x383, y215);
//       // p5.endShape();

//       // p5.beginShape();
//       // p5.curveVertex(NEGx128, y255);
//       // p5.curveVertex(x0, y40);
//       // p5.curveVertex(x128, y235);
//       // p5.curveVertex(x255, y40);
//       // p5.curveVertex(x383, y235);
//       // p5.endShape();

//       // p5.beginShape();
//       // p5.curveVertex(NEGx128, y0);
//       // p5.curveVertex(x0, y235);
//       // p5.curveVertex(x128, y40);
//       // p5.curveVertex(x255, y235);
//       // p5.curveVertex(x383, y40);
//       // p5.endShape();

//       // p5.beginShape();
//       // p5.curveVertex(NEGx128, y0);
//       // p5.curveVertex(x0, y215);
//       // p5.curveVertex(x128, y20);
//       // p5.curveVertex(x255, y215);
//       // p5.curveVertex(x383, y20);
//       // p5.endShape();

//       // p5.beginShape();
//       // p5.curveVertex(NEGx128, y0);
//       // p5.curveVertex(x0, y195);
//       // p5.curveVertex(x128, y0);
//       // p5.curveVertex(x255, y195);
//       // p5.curveVertex(x383, y0);
//       // p5.endShape();
//     }
//   }

//   /*
//   //
//   p5.beginShape();
//   p5.curveVertex(-128, 215);
//   p5.curveVertex(0, 0);
//   p5.curveVertex(128, 195);
//   p5.curveVertex(255, 0);
//   p5.curveVertex(384, 215);
//   p5.endShape();

//   p5.beginShape();
//   p5.curveVertex(-128, 235);
//   p5.curveVertex(0, 20);
//   p5.curveVertex(128, 215);
//   p5.curveVertex(255, 20);
//   p5.curveVertex(384, 235);
//   p5.endShape();

//   p5.beginShape();
//   p5.curveVertex(-128, 256);
//   p5.curveVertex(0, 40);
//   p5.curveVertex(128, 235);
//   p5.curveVertex(256, 40);
//   p5.curveVertex(384, 256);
//   p5.endShape();

//   p5.beginShape();
//   p5.curveVertex(-128, 0);
//   p5.curveVertex(0, 256);
//   p5.curveVertex(128, 40);
//   p5.curveVertex(255, 256);
//   p5.curveVertex(384, 40);
//   p5.endShape();*/
 
//   /*for(let i = 0; i<10; i++){
//     //let shade = 255 / (i+1);
//     let currentR = p5.map(i, 0, 9, localBallRadius, 0);
//     //p5.fill(0, 0, shade);
//     p5.ellipse(localBallX, localBallY, currentR);
//   } */
 
//     //p5.line(0, 0, 255, 255);

//   //debug - show border
//   p5.noFill();
//   p5.strokeWeight(1);
//   p5.stroke(255, 0, 0)
//   p5.rect(0, 0, 255, 255);
//   p5.textSize(12);
//   p5.text('(' + x1 + ", " + y1 + ")", 10, 30);
// }








const max_thickness = 64;
const ball_radius = 32;
const line_width = 2;
const grid_size = 64;

const backgrnd = "#105B63";
const lines = "#DB9E36";
const fillColour = "#FFD34E";
const lineWidth = 1;

var SPEED = 0.3;
var time = 0;

let do_animation = true;


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
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // // debug version: draw one
  // let half_x = (x1 + x2) / 2;
  // let half_y = (y1 + y2) / 2;
  // min_x = snap_to_grid(half_x, grid_size);
  // max_x = snap_to_grid(half_x + grid_size, grid_size);
  // min_y = snap_to_grid(half_y, grid_size);
  // max_y = snap_to_grid(half_y + grid_size, grid_size);



//set points
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */

      //X VALUES
      let x383 = p5.map(x + (1*grid_size/1), x1, x2, 0, 256);
      let x255 = p5.map(x + grid_size, x1, x2, 0, 256);
      let x128 = p5.map(x +(grid_size/2), x1, x2, 0, 256);
      let x0 = p5.map(x, x1, x2, 0, 256);
      //let NEGx128old = p5.map(x +(-1*grid_size/1), x1, x2, 0, 256);
      let NEGx128 = p5.map(x +(-1*grid_size/1), x1, x2, 0, 256);

      let xtest = p5.map(x + grid_size/7.5, x1, x2, 0, 256);



      //Y values

      let y255 = p5.map(y + grid_size, y1, y2, 0, 256);
      let y235 = p5.map(y + (grid_size - (grid_size/12.8)), y1, y2, 0, 256);
      let y215 = p5.map(y + (grid_size - (2*grid_size/12.8)), y1, y2, 0, 256);
      let y195 = p5.map(y + (grid_size - (3*grid_size/12.8)), y1, y2, 0, 256);
      let y40 = p5.map(y + (2*grid_size/12.8), y1, y2, 0, 256);
      let y20 = p5.map(y + (grid_size/12.8), y1, y2, 0, 256);
      let y0 = p5.map(y, y1, y2, 0, 256);


      // //old stuff

      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);
    }
  }

  drawPattern(p5, x1, x2, y1, y2, z, zoom);

  time = time +0.1;


  // debug - show border
  p5.noFill();
  p5.stroke(0, 200, 200)
  p5.strokeWeight(1);
  p5.rect(0, 0, 255, 255);
  p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  let sizex = x2 - x1;
  p5.text("width: " + sizex, 10, 40);
}

function drawPattern(p5, x1, x2, y1, y2, z, zoom) {
  let deg = p5.radians(45);
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // // debug version: draw one
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
  let strokeWidth = c_plwidth - c_p00;

  p5.background(backgrnd);
  p5.strokeWeight(strokeWidth);  
  p5.stroke (lines);
  p5.fill(255, 211, 78, 32);

  //drawing
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */

      //X VALUES
      let x383 = p5.map(x + (1*grid_size/1), x1, x2, 0, 256);
      let x255 = p5.map(x + grid_size, x1, x2, 0, 256);
      let x128 = p5.map(x +(grid_size/2), x1, x2, 0, 256);
      let x0 = p5.map(x, x1, x2, 0, 256);
      //let NEGx128old = p5.map(x +(-1*grid_size/1), x1, x2, 0, 256);
      let NEGx128 = p5.map(x +(-1*grid_size/1), x1, x2, 0, 256);

      let xtest = p5.map(x + grid_size/7.5, x1, x2, 0, 256);



      //Y values

      let y255 = p5.map(y + grid_size, y1, y2, 0, 256);
      let y235 = p5.map(y + (grid_size - (grid_size/12.8)), y1, y2, 0, 256);
      let y215 = p5.map(y + (grid_size - (2*grid_size/12.8)), y1, y2, 0, 256);
      let y195 = p5.map(y + (grid_size - (3*grid_size/12.8)), y1, y2, 0, 256);
      let y40 = p5.map(y + (2*grid_size/12.8), y1, y2, 0, 256);
      let y20 = p5.map(y + (grid_size/12.8), y1, y2, 0, 256);
      let y0 = p5.map(y, y1, y2, 0, 256);


      // //old stuff

      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

      if(zoom > 0){ //not working

      // p5.fill(255, 211, 78);
      // p5.noStroke();
      // // //debug attempt using a rect (changed from sample code's circle)
      // p5.push();
      // p5.rotate(deg);
      // //p5.translate(+ cur_ball_radius/2, - cur_ball_radius/2);
      // p5.rect(xtest, 1*y_pos, cur_ball_radius, cur_ball_radius);
      // p5.pop();
      // //other attempt
      // p5.fill(255, 211, 78, 60);
      // p5.beginShape();
      // p5.vertex(x0, y0);
      // p5.vertex(x255, y0);
      // p5.vertex(x128, x128);
      // p5.vertex(x0, y0);
      // p5.endShape();
      }

      p5.strokeWeight(strokeWidth);  
      p5.stroke (lines);
      p5.fill(255, 211, 78, 32);

      p5.beginShape();
      p5.curveVertex(NEGx128, y215); //1st speed
      
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(y20*p5.cos(time*SPEED) + x0, y20*p5.sin(time*SPEED) + y0); //2nd speed
      p5.curveVertex(y20*p5.cos(time*SPEED) + x0, y20*p5.sin(time*SPEED) + y195); // 2nd speed
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(y20*p5.cos(time*SPEED) + x255, y20*p5.sin(time*SPEED) + y0); //3rd speed
      p5.curveVertex(y20*p5.cos(time*SPEED) + x255, y20*p5.sin(time*SPEED) + y195); //3rd speed
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(y20*p5.cos(time*SPEED) + x383, y20*p5.sin(time*SPEED) + y195); //4th speed
      p5.endShape();

      
      SPEED = SPEED - 0.3//reset speed to 1st

      p5.beginShape();
      p5.curveVertex(NEGx128, y235);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x0, y20);
      p5.curveVertex(x0, y215);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x255, y20);
      p5.curveVertex(x255, y215);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x383, y215);
      p5.endShape();

      SPEED = SPEED - 0.3//reset speed to 1st

      p5.beginShape();
      p5.curveVertex(NEGx128, y255);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x0, y40);
      p5.curveVertex(x0, y235);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x255, y40);
      p5.curveVertex(x255, y235);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x383, y235);
      p5.endShape();

      SPEED = SPEED - 0.3//reset speed to 1st

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x0, y235);
      p5.curveVertex(x0, y40);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x255, y235);
      p5.curveVertex(x255, y40);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x383, y40);
      p5.endShape();

      SPEED = SPEED - 0.3//reset speed to 1st

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x0, y215);
      p5.curveVertex(x0, y20);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x255, y215);
      p5.curveVertex(x255, y20);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x383, y20);
      p5.endShape();

      SPEED = SPEED - 0.3//reset speed to 1st

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x0, y195);
      p5.curveVertex(x0, y0);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x255, y195);
      p5.curveVertex(x255, y0);
      SPEED = SPEED + 0.1//up speed
      p5.curveVertex(x383, y0);
      p5.endShape();

      //inner

      if(zoom > 1){
      p5.stroke(fillColour);
      p5.strokeWeight(strokeWidth/10);
      p5.noFill();

      p5.beginShape();
      p5.curveVertex(NEGx128, y215);
      p5.curveVertex(x0, y0);
      p5.curveVertex(x0, y195);
      p5.curveVertex(x255, y0);
      p5.curveVertex(x255, y195);
      p5.curveVertex(x383, y195);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y235);
      p5.curveVertex(x0, y20);
      p5.curveVertex(x0, y215);
      p5.curveVertex(x255, y20);
      p5.curveVertex(x255, y215);
      p5.curveVertex(x383, y215);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y255);
      p5.curveVertex(x0, y40);
      p5.curveVertex(x0, y235);
      p5.curveVertex(x255, y40);
      p5.curveVertex(x255, y235);
      p5.curveVertex(x383, y235);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y235);
      p5.curveVertex(x0, y40);
      p5.curveVertex(x255, y235);
      p5.curveVertex(x255, y40);
      p5.curveVertex(x383, y40);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y215);
      p5.curveVertex(x0, y20);
      p5.curveVertex(x255, y215);
      p5.curveVertex(x255, y20);
      p5.curveVertex(x383, y20);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y195);
      p5.curveVertex(x0, y0);
      p5.curveVertex(x255, y195);
      p5.curveVertex(x255, y0);
      p5.curveVertex(x383, y0);
      p5.endShape();
    }

      /* now draw all elements from back to front */
      //p5.strokeWeight(cur_line_width);
      //p5.stroke(150, 0, 0);
      //p5.line(x_pos, y_pos, x_pos_left, y_pos);
      //p5.stroke(0, 150, 0);
      //p5.line(x_pos, y_pos, x_pos, y_pos_down);

      //p5.stroke(0, 0, 150);
      //p5.noStroke();
      //p5.ellipse(x_pos, y_pos, cur_ball_radius);
    }

      SPEED = SPEED - 0.1//reset speed to 3rd

  }
}