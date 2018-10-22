let do_animation = true;
const max_thickness = 700;
const grid_size = 64;
const line_width = 8;
const ball_radius = 28;
const ball_radius2 = 40;

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
    
      p5.background(0);
    
/* max_shift is the amount of overlap a tile can spill over into its neighbors */
let max_shift = max_thickness;
    
/* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size); 


  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;
 
    
for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
        
    

 if (zoom <2) {
  let sineWave = p5.sin(p5.globalFrameCount/10);
  let pulse = p5.map(sineWave, -1, 1, 0, 40);

 p5.translate(180, 150);
  p5.noStroke();
  p5.fill(100, 87, 255, 100);//lilac
  for (var i = 0; i < 4; i ++) {
    p5.ellipse(0, 20, (cur_ball_radius + pulse));
    p5.rotate(p5.PI/2);

 
      }
    }

     if (zoom ==2) {
  let sineWave = p5.sin(p5.globalFrameCount/10);
  let pulse2 = p5.map(sineWave, -1, 1, 0, 40);

 p5.translate(180, 150);
  p5.noStroke();
  p5.fill(100, 87, 255, 100);//lilac
  for (var i = 0; i < 6; i ++) {
    p5.ellipse(0, 20, (cur_ball_radius/2 + pulse2));
    p5.rotate(p5.PI/3);
 
      }
    }



  if (zoom ==3) {
  let sineWave = p5.sin(p5.globalFrameCount/10);
  let pulse3 = p5.map(sineWave, -1, 1, -40, 40);

  p5.translate(180, 150);
  p5.noStroke();
  p5.fill(250,13,73,40);//lilac
  for (var i = 0; i < 8; i ++) {
    p5.ellipse(0, 20, (cur_ball_radius/2 + pulse3));
    p5.rotate(p5.PI/4);
 
      }
    }





 // if (zoom <2) {
 //   //Top Diamond 1 Super Large

 //  let sineWave = p5.sin(p5.globalFrameCount/10);
 //  let pulse = p5.map(sineWave, -1, 1, 0, 40);

 //      let x_centre_circle = p5.map(x, x1, x2, 0, 256);
 //      let y_centre_circle = p5.map(y, y1, y2, 0, 256);
 //      let x_right_circle = p5.map(x + 15, x1, x2, 0, 256);
 //      let x_left_circle = p5.map(x - 15, x1, x2, 0, 256);
 //      let y_top_circle = p5.map(y - 15, y1, y2, 0, 256);
 //      let y_bottom_circle = p5.map(y + 15, y1, y2, 0, 256);


 //      p5.noStroke();
  
 //      //Right Circle
 //      p5.fill(100, 87, 255, 40);//lilac
 //      p5.ellipse(x_right_circle, y_centre_circle, (cur_ball_radius + pulse));

 //      //Left Circle
 //      p5.ellipse(x_left_circle, y_centre_circle, (cur_ball_radius + pulse));

 //      //Top Circle
 //      p5.ellipse(x_centre_circle, y_top_circle, (cur_ball_radius + pulse));

 //      //Bottom Circle
 //      p5.ellipse(x_centre_circle, y_bottom_circle, (cur_ball_radius + pulse));


 
 //      }

       /*if (zoom >=3) {

      let sineWave = p5.sin(p5.globalFrameCount/10);
      let pulse2 = p5.map(sineWave, -1, 1, -50, 20);
      
      let c_p00 = p5.map(0, x1, x2, 0, 256);
      let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
      let c_pball = p5.map(ball_radius2, x1, x2, 0, 256);
      let cur_line_width = c_plwidth - c_p00;
      let cur_ball_radius2 = c_pball - c_p00;
     

      let x_centre_circle = p5.map(x, x1, x2, 0, 256);
      let y_centre_circle = p5.map(y, y1, y2, 0, 256);
      let x_right_circle = p5.map(x + 15, x1, x2, 0, 256);
      let x_left_circle = p5.map(x - 15, x1, x2, 0, 256);
      let y_top_circle = p5.map(y - 15, y1, y2, 0, 256);
      let y_bottom_circle = p5.map(y + 15, y1, y2, 0, 256);
      
      let y_topright_circle = p5.map(y - 7.5, y1, y2, 0, 256);
      let x_topright_circle = p5.map(x + 7.5, x1, x2, 0, 256);
      let y_topleft_circle = p5.map(y - 7.5, y1, y2, 0, 256);
      let x_topleft_circle = p5.map(x - 7.5, x1, x2, 0, 256);

      let y_bottomleft_circle = p5.map(y + 7.5, y1, y2, 0, 256);
      let x_bottomleft_circle = p5.map(x - 7.5, x1, x2, 0, 256);
      let y_bottomright_circle = p5.map(y + 7.5, y1, y2, 0, 256);
      let x_bottomright_circle = p5.map(x + 7.5, x1, x2, 0, 256);

      let x_right_minicircle = p5.map(x + 7.5, x1, x2, 0, 256);
      let x_left_minicircle = p5.map(x - 7.5, x1, x2, 0, 256);
      let y_top_minicircle = p5.map(y - 7.5, y1, y2, 0, 256);
      let y_bottom_minicircle = p5.map(y + 7.5, y1, y2, 0, 256);

      p5.noStroke();
  
      //Right Circle
      p5.fill(250,13,73,30); //pink
      p5.ellipse(x_right_circle, y_centre_circle, (cur_ball_radius2 + pulse2));

      //Left Circle
      p5.ellipse(x_left_circle, y_centre_circle, (cur_ball_radius2 + pulse2));

      //Top Circle
      p5.ellipse(x_centre_circle, y_top_circle, (cur_ball_radius2 + pulse2));

      //Bottom Circle
      p5.ellipse(x_centre_circle, y_bottom_circle, (cur_ball_radius2 + pulse2));

      //Top-Right Circle
      p5.ellipse(x_topright_circle, y_topright_circle, (cur_ball_radius2 + pulse2));

      //Top-Left Circle
      p5.ellipse(x_topleft_circle, y_topleft_circle, (cur_ball_radius2 + pulse2));

      //Bottom-Left Circle
      p5.ellipse(x_bottomleft_circle, y_bottomleft_circle, (cur_ball_radius2 + pulse2));

      //Bottom-Right Circle
      p5.ellipse(x_bottomright_circle, y_bottomright_circle, (cur_ball_radius2 + pulse2));


      //Mini Right Circle
      p5.fill(100, 87, 255, 40);//lilac
      p5.ellipse(x_right_minicircle, y_centre_circle, (cur_ball_radius/2 + pulse2));

      //Mini Left Circle
      p5.ellipse(x_left_minicircle, y_centre_circle, (cur_ball_radius/2 + pulse2));

      //Mini Top Circle
      p5.ellipse(x_centre_circle, y_top_minicircle, (cur_ball_radius/2 + pulse2));

      //Mini Bottom Circle
      p5.ellipse(x_centre_circle, y_bottom_minicircle, (cur_ball_radius/2 + pulse2));

 
      }*/
    
   
     

    }


}

}
