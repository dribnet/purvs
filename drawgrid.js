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

// let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 512, 512],
  [3, 512, 512],
  [6, 512, 512]
]

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
  let cx1=[], cy1=[], cx2=[], cy2=[];
  p5.background(255);
  p5.rectMode(p5.CORNER);

  // if(zoom == 0){
  //   cx1[0] = x1; cy1[0] = y1; cx2[0] = x2; cy2[0] = y2;
  // }
  // if(zoom == 1){
  //   cx1[1] = x1; cy1[1] = y1; cx2[1] = x2; cy2[1] = y2;
  // }
  // if(zoom == 2){
  //   cx1[2] = x1; cy1[2] = y1; cx2[2] = x2; cy2[2] = y2;
  // }
  // if(zoom == 3){
  //   cx1[3] = x1; cy1[3] = y1; cx2[3] = x2; cy2[3] = y2;
  // }
  // if(zoom == 4){
  //   cx1[4] = x1; cy1[4] = y1; cx2[4] = x2; cy2[4] = y2;
  // }
  // if(zoom == 5){
  //   cx1[5] = x1; cy1[5] = y1; cx2[5] = x2; cy2[5] = y2;
  // }

// example ellipse
  // for(let i = 0 ; i < 10; i++){
  // 	let shade = 128 + 128 / (i+1);
  // 	let current_r = p5.map(i, 0, 9, local_ball_r, 0);
  // 	p5.fill(0,0,shade);
  // 	p5.ellipse(local_ballx, local_bally, current_r);
  // }
  let local_rectx = p5.map(rectx, x1, x2, 0, 256);
  let local_recty = p5.map(recty, y1, y2, 0, 256);
  let local_rectx_edge = p5.map((rectx + rect_size), x1, x2, 0, 256);
  let minx = snap_to_grid(x1 - 50, grid_size);
  let maxx = snap_to_grid(x2 + 50, grid_size);
  let miny = snap_to_grid(y1 - 50, grid_size);
  let maxy = snap_to_grid(y2 + 50, grid_size);
  let local_rect_size = local_rectx_edge - local_rectx;
  for(let x = minx; x < maxx; x+=grid_size){
    for(let y = miny; y < maxy; y+= grid_size){
      let xpos = p5.map(x, x1, x2, 0 , 256);
      let ypos = p5.map(y, y1, y2, 0 , 256);
      //act as a door; when zooming in, show like the door's being opened
      //******still need to make door look 3D******//
      if(zoom >= 1 && zoom < 5){
        p5.strokeWeight(1);
        p5.stroke(0);
        p5.noFill();
        p5.rect(xpos,ypos,local_rect_size,local_rect_size);
        let door_right = local_rect_size * (zoom*2 /10);
        let door_3d = local_rect_size * (zoom / 20);
        p5.noStroke();
        p5.fill(0,0,255);
        p5.quad(xpos,ypos, xpos+local_rect_size-door_right,ypos+door_3d, 
          xpos+local_rect_size-door_right,ypos+local_rect_size-door_3d, xpos,ypos+local_rect_size);
        p5.fill(0,255,0);
        p5.ellipse(xpos+local_rect_size-door_right-3, ypos+local_rect_size/2, 5);

        //hand
        if(zoom == 3 || zoom == 4){
          let ran_value = p5.random(local_rect_size-door_3d*4);
          p5.stroke(235,192,134);
          p5.fill(255,205,148);
          // p5.fill(0,0,0);
          p5.ellipse(xpos+local_rect_size-door_right-3, ypos+door_3d+ran_value, 20,3);
          p5.ellipse(xpos+local_rect_size-door_right-3, ypos+door_3d+ran_value+3, 22,3);
          p5.ellipse(xpos+local_rect_size-door_right-3, ypos+door_3d+ran_value+6, 20,3);
          p5.ellipse(xpos+local_rect_size-door_right-3, ypos+door_3d+ran_value+9, 12,2);
          p5.ellipse(xpos+local_rect_size-door_right+5, ypos+door_3d+ran_value+4, 11, 11);

          //finger nails
          p5.fill(0);
          p5.stroke(0);

          p5.ellipse(xpos+local_rect_size-door_right-10, ypos+door_3d+ran_value, 2, 1);
          p5.ellipse(xpos+local_rect_size-door_right-10, ypos+door_3d+ran_value+3, 2, 1);
          p5.ellipse(xpos+local_rect_size-door_right-10, ypos+door_3d+ran_value+6, 2, 1);
          p5.ellipse(xpos+local_rect_size-door_right-7, ypos+door_3d+ran_value+9, 2, 1);

        }

      }else if(zoom == 0){
        p5.fill(0,0,255);
        p5.rect(xpos, ypos, local_rect_size, local_rect_size);
        p5.fill(0,255,0);
        p5.ellipse(xpos+local_rect_size-5, ypos+local_rect_size/2, 5);
      }else if(zoom == 5){
        p5.noFill(0,0,0);
        // p5.rect(xpos,ypos,local_rect_size,local_rect_size);
      }


    }
  }
  //5~11 text 'follow me'
  if(zoom >= 5 && zoom < 11){
    p5.noFill();
    p5.stroke(255, 0, 0)
    p5.strokeWeight(1);
    let ran_value1 = p5.random(local_rect_size);
    let ran_value2 = p5.random(local_rect_size);

    if(zoom > 6){
      p5.strokeWeight(3);
      for(var i = 0; i < zoom; i ++){
        ran_value1 = p5.random(local_rect_size/zoom);
        ran_value2 = p5.random(local_rect_size/zoom);
        p5.text("follow me", ran_value1, ran_value2);
        p5.text("follow me", ran_value2, ran_value1);

      }
    }else{
      p5.text("follow me", ran_value1, ran_value1);
      p5.text("follow me", ran_value2, ran_value2);
    }
  }
  p5.strokeWeight(1);
  p5.ellipse(local_rectx,local_recty,30,30);


  // if(zoom >= 5 && zoom <= 10){
  //   let tempx1, tempx2, tempy1, tempy2;
  //   if(zoom == 5){
  //     tempx1 = cx1[0]; tempx2 = cx2[0]; tempy1 = cy1[0]; tempy2 = cy2[0];
  //   }else if(zoom == 6){
  //     tempx1 = cx1[1]; tempx2 = cx2[1]; tempy1 = cy1[1]; tempy2 = cy2[1];
  //   }else if(zoom == 7){
  //     tempx1 = cx1[2]; tempx2 = cx2[2]; tempy1 = cy1[2]; tempy2 = cy2[2];
  //   }else if(zoom == 8){
  //     tempx1 = cx1[3]; tempx2 = cx2[3]; tempy1 = cy1[3]; tempy2 = cy2[3];
  //   }else if(zoom == 9){
  //     tempx1 = cx1[4]; tempx2 = cx2[4]; tempy1 = cy1[4]; tempy2 = cy2[4];
  //   }
  //   let local_rectx = p5.map(rectx, tempx1, tempx2, 0, 256);
  //   let local_recty = p5.map(recty, tempy1, tempy2, 0, 256);
  //   let local_rectx_edge = p5.map((rectx + rect_size), tempx1, tempx2, 0, 256);
  //   let minx = snap_to_grid(tempx1 - 50, grid_size);
  //   let maxx = snap_to_grid(tempx2 + 50, grid_size);
  //   let miny = snap_to_grid(tempy1 - 50, grid_size);
  //   let maxy = snap_to_grid(tempy2 + 50, grid_size);
  //   let local_rect_size = local_rectx_edge - local_rectx;
  //   for(let x = minx; x < maxx; x+=grid_size){
  //     for(let y = miny; y < maxy; y+= grid_size){
  //       let xpos = p5.map(x, tempx1, tempx2, 0 , 256);
  //       let ypos = p5.map(y, tempy1, tempy2, 0 , 256);
  //       if(zoom == 6){

  //       }
  //     }
  //   }
  // }
  p5.strokeWeight(3);
  p5.stroke(0,255,0);
  // // The second green ellipse is above and to the left of the first one.
  // cx = p5.map(412, x1, x2, 0, 256);
  // cy = p5.map(412, y1, y2, 0, 256);
  // cx2 = p5.map(412+50, x1, x2, 0, 256);
  // p5.fill(0, 255, 0);
  // p5.ellipse(cx, cy, (cx2-cx));

  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
