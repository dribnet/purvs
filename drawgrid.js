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
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

let ballx = 400;
let bally = 400;
let ballr = 32;

let rectx = 400;
let recty = 400;
let rect_size = 32;

let grid_size = 64;
function snap_to_grid(num, gsize){
  return (num - (num % gsize));
}
function myCircle(p5, x, y, x1, x2, y1, y2, posx, posy, rad1, rad2){
  let pos1 = p5.map(posx, x, x1, 0 , 256);
  let pos2 = p5.map(posx+ rad2, x, x1, 0 , 256);
  let radius = pos2 - pos1;
  p5.fill(0);
  p5.ellipse(pos1, pos2, radius);
}
function myRects(p5, x1, x2, y1, y2, posx, posy, size1 ,size2){

}

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // debug - show border
// temporary variables used for object placement
  let cx=0, cy=0, cx2=0, cy2=0;
  p5.background(255);
  p5.rectMode(p5.CORNER);

  // // The first red rectangle fills the entire space
  // cx = p5.map(512-960/2, x1, x2, 0, 256);
  // cy = p5.map(512-720/2, y1, y2, 0, 256);
  // cx2 = p5.map(512+960/2, x1, x2, 0, 256);
  // cy2 = p5.map(512+720/2, y1, y2, 0, 256);
  // p5.fill(255, 0, 0);
  // p5.rect(cx, cy, cx2, cy2);

  // // The second black rectangle is inset to form a frame inset by 20 units
  // cx = p5.map(512-940/2, x1, x2, 0, 256);
  // cy = p5.map(512-700/2, y1, y2, 0, 256);
  // cx2 = p5.map(512+940/2, x1, x2, 0, 256);
  // cy2 = p5.map(512+700/2, y1, y2, 0, 256);
  // p5.fill(0);
  // p5.rect(cx, cy, cx2, cy2);


  // // Two ellipses with a radius of 50 units are then added.
  // cx = p5.map(512, x1, x2, 0, 256);
  // cy = p5.map(512, y1, y2, 0, 256);
  // cx2 = p5.map(512+50, x1, x2, 0, 256);
  // p5.fill(0, 0, 255);
  // p5.ellipse(cx, cy, (cx2-cx));
  
// Two ellipses with a radius of 50 units are then added.
  let local_ballx = p5.map(ballx, x1, x2, 0, 256);
  let local_bally = p5.map(bally, y1, y2, 0, 256);
  let local_ballx_edge = p5.map((ballx + ballr), x1, x2, 0, 256);
  let local_ball_r = local_ballx_edge - local_ballx;

// example ellipse
  for(let i = 0 ; i < 10; i++){
  	let shade = 128 + 128 / (i+1);
  	let current_r = p5.map(i, 0, 9, local_ball_r, 0);
  	p5.fill(0,0,shade);
  	p5.ellipse(local_ballx, local_bally, current_r);
  }

  let minx = snap_to_grid(x1 - 50, grid_size);
  let maxx = snap_to_grid(x2 + 50, grid_size);
  let miny = snap_to_grid(y1 - 50, grid_size);
  let maxy = snap_to_grid(y2 + 50, grid_size);
  let local_rect_size = local_ballx_edge - local_ballx;
  
  for(let x = minx; x < maxx; x+=grid_size){
    for(let y = miny; y < maxy; y+= grid_size){
      let xpos = p5.map(x, x1, x2, 0 , 256);
      let ypos = p5.map(y, y1, y2, 0 , 256);
      // p5.fill(255,0,0);
      // p5.rect(xpos, ypos, local_rect_size, local_rect_size);
      // p5.fill(0,0,255);

      // let door_right;
      // if(zoom == 1){
      //   door_right = local_rect_size / 20;
      // }else if(zoom == 2){
      //   door_right = local_rect_size / 40;
      // }else if(zoom == 3){
      //   door_right = local_rect_size / 60;
      // }

      //act as a door; when zooming in, show like the door's being opened
      if(zoom >= 1 && zoom <= 5){
        let door_right = local_rect_size * (zoom*2 /10);
        p5.print("door: " + door_right + " rectsize: " + local_rect_size);
        p5.quad(xpos,ypos, xpos+local_rect_size-door_right,ypos, 
          xpos+local_rect_size-door_right,ypos+local_rect_size, xpos,ypos+local_rect_size);
      }else{
        p5.rect(xpos, ypos, local_rect_size, local_rect_size);
      }
      
    }
  }

  p5.strokeWeight(3);
  p5.stroke(0,255,0);

  if(zoom <= 10){
    // p5.rect(0, 0, 255, 255);

    // p5.rect(local_rectx, local_recty, local_rect_r, local_rect_r);

  }
  if(zoom <= 2){
    p5.line(0,0,255/2,255/2);
  }
  

  // let local_linex = p5.map(ballx, x1, x2, 0, 255);
  // let local_liney = p5.map(bally, y1, y2, 0, 255);
  // for(let x = 0 ; x < grid_size; x++){
  //   for(let y = 0 ; y < grid_size; y++){
  //     if(zoom % 2 == 0){
  //       p5.push();
  //       p5.rotate(p5.PI/4);
  //     }
  //     p5.strokeWeight(3);
  //     p5.stroke(0,255,0);
  //     // p5.line(local_linex * x, local_liney * y, local_linex * x + 255, local_liney * y);
  //     // p5.line(local_linex * x, local_liney * y, local_linex * x, local_liney * y + 255);
  //     p5.rect(0, 0, 255, 255);
  //     if(zoom % 2 == 0){
  //       p5.pop();
  //     }
  //   }
  // }
  if(zoom == 10){

  }
  if(zoom >= 4){
    // myCircle(p5, x1, y1, x2, y2, x1, y1, ballr, ballr /2);
  }
  // // The second green ellipse is above and to the left of the first one.
  // cx = p5.map(412, x1, x2, 0, 256);
  // cy = p5.map(412, y1, y2, 0, 256);
  // cx2 = p5.map(412+50, x1, x2, 0, 256);
  // p5.fill(0, 255, 0);
  // p5.ellipse(cx, cy, (cx2-cx));

  // debug - show border
  p5.noFill();
  p5.stroke(0, 0, 0)
  p5.rect(0, 0, 255, 255);
}
