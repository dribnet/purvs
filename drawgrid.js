let do_animation = true;
const max_thickness = 64;
const max_movement = 16;
const grid_size = 64;
const line_width = 8;
const ball_radius = 20;
const ball_radius2 = 30;
const ball_radius3 = 10;
const mini_grid_size = 8;
const mini_max_thickness = 24;


/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 511, 448],
  [1, 600, 551],
  [2, 640, 451],
  [3, 655, 503],
  [4, 641, 510],
  [5, 610, 479],
  [0, 511, 448]
    
]

//Simple 4 Diamond Shaped Circles With Random Animation
function simpleCircles(p5, x, y, x1, x2, y1, y2, z) {
  let phase = getRandomValue(p5, x, y, z, "phase", 0, 2, 0.1);
  let freq = getRandomValue(p5, x, y, z, "freq", 10, 20, 0.1);
  let sineWave = p5.sin(p5.globalFrameCount / freq);
  let pulse = p5.map(sineWave, -1, 1, -10, 10);
  
  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;

      let x_centre_circle = p5.map(x, x1, x2, 0, 256);
      let y_centre_circle = p5.map(y, y1, y2, 0, 256);
      let x_right_circle = p5.map(x + 10, x1, x2, 0, 256);
      let x_left_circle = p5.map(x - 10, x1, x2, 0, 256);
      let y_top_circle = p5.map(y - 10, y1, y2, 0, 256);
      let y_bottom_circle = p5.map(y + 10, y1, y2, 0, 256);

  
      p5.ellipse(x_right_circle, y_centre_circle, (cur_ball_radius + pulse));
      p5.ellipse(x_left_circle, y_centre_circle, (cur_ball_radius + pulse));
      p5.ellipse(x_centre_circle, y_top_circle, (cur_ball_radius + pulse));
      p5.ellipse(x_centre_circle, y_bottom_circle, (cur_ball_radius + pulse));

}


//Standard 8 Diamond Shaped Circles
function standardCircles(p5, x, y, x1, x2, y1, y2, z) {
      let sineWave = p5.sin(p5.globalFrameCount/20);
      let pulse2 = p5.map(sineWave, -1, 1, -50, 20);
      let pulse3 = p5.map(sineWave, -1, 1, -100, 20);
      
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


      //Draw Clockwise from Top Circle
      p5.ellipse(x_centre_circle, y_top_circle, (cur_ball_radius2 + pulse2));
      p5.ellipse(x_topright_circle, y_topright_circle, (cur_ball_radius2 + pulse2));
      p5.ellipse(x_right_circle, y_centre_circle, (cur_ball_radius2 + pulse2));
      p5.ellipse(x_bottomright_circle, y_bottomright_circle, (cur_ball_radius2 + pulse2));
      p5.ellipse(x_centre_circle, y_bottom_circle, (cur_ball_radius2 + pulse2));
      p5.ellipse(x_bottomleft_circle, y_bottomleft_circle, (cur_ball_radius2 + pulse2));
      p5.ellipse(x_left_circle, y_centre_circle, (cur_ball_radius2 + pulse2));
      p5.ellipse(x_topleft_circle, y_topleft_circle, (cur_ball_radius2 + pulse2));

}

//Simple 4 Diamond Shaped Circles With Pulsing Animation
function simpleCircles2(p5, x, y, x1, x2, y1, y2, z) {
  let sineWave = p5.sin(p5.globalFrameCount/20);
  let pulse3 = p5.map(sineWave, 1, -1, -100, 20);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;

      let x_centre_circle = p5.map(x, x1, x2, 0, 256);
      let y_centre_circle = p5.map(y, y1, y2, 0, 256);
      let x_right_minicircle = p5.map(x + 7.5, x1, x2, 0, 256);
      let x_left_minicircle = p5.map(x - 7.5, x1, x2, 0, 256);
      let y_top_minicircle = p5.map(y - 7.5, y1, y2, 0, 256);
      let y_bottom_minicircle = p5.map(y + 7.5, y1, y2, 0, 256);

      p5.ellipse(x_right_minicircle, y_centre_circle, (cur_ball_radius/2 + pulse3));
      p5.ellipse(x_left_minicircle, y_centre_circle, (cur_ball_radius/2 + pulse3));
      p5.ellipse(x_centre_circle, y_top_minicircle, (cur_ball_radius/2 + pulse3));
      p5.ellipse(x_centre_circle, y_bottom_minicircle, (cur_ball_radius/2 + pulse3));

}


//Simple 4 Mini-Diamond Shaped Circles With Pulsing Animation
function minidiamondCircle(p5, x, y, x1, x2, y1, y2, z) {
  let sineWave = p5.sin(p5.globalFrameCount/20);
 let pulse2 = p5.map(sineWave, 1, -1, -100, 50);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;
      
      let x_centre_circle = p5.map(x, x1, x2, 0, 256);
      let y_centre_circle = p5.map(y, y1, y2, 0, 256);
      let x_right_minicircle2 = p5.map(x + 3, x1, x2, 0, 256);
      let x_left_minicircle2 = p5.map(x - 3, x1, x2, 0, 256);
      let y_top_minicircle2 = p5.map(y - 3, y1, y2, 0, 256);
      let y_bottom_minicircle2 = p5.map(y + 3, y1, y2, 0, 256);
        
     
       p5.ellipse(x_right_minicircle2, y_centre_circle, (cur_ball_radius/3 + pulse2));
       p5.ellipse(x_left_minicircle2, y_centre_circle, (cur_ball_radius/3 + pulse2));
       p5.ellipse(x_centre_circle, y_top_minicircle2, (cur_ball_radius/3 + pulse2));
       p5.ellipse(x_centre_circle, y_bottom_minicircle2, (cur_ball_radius/3 + pulse2));

}

//Circles Inbetween Regular Grid (Square Shape - Zoom >= 3)
function squareCircles(p5, x, y, x1, x2, y1, y2) {
 let sineWave = p5.sin(p5.globalFrameCount/20);
 let pulse = p5.map(sineWave, 1, -1, -50, 20);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius3, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius3 = c_pball - c_p00;

      let y_topright_circle = p5.map(y - 36, y1, y2, 0, 256);
      let x_topright_circle = p5.map(x + 36, x1, x2, 0, 256);
      let y_topleft_circle = p5.map(y - 36, y1, y2, 0, 256);
      let x_topleft_circle = p5.map(x - 36, x1, x2, 0, 256);

      let y_bottomleft_circle = p5.map(y + 36, y1, y2, 0, 256);
      let x_bottomleft_circle = p5.map(x - 36, x1, x2, 0, 256);
      let y_bottomright_circle = p5.map(y + 36, y1, y2, 0, 256);
      let x_bottomright_circle = p5.map(x + 36, x1, x2, 0, 256);
  
      p5.ellipse(x_topright_circle, y_topright_circle, (cur_ball_radius3 + pulse));
      p5.ellipse(x_topleft_circle, y_topleft_circle, (cur_ball_radius3 + pulse));
      p5.ellipse(x_bottomleft_circle, y_bottomleft_circle, (cur_ball_radius3+ pulse));
      p5.ellipse(x_bottomright_circle, y_bottomright_circle, (cur_ball_radius3 + pulse));
     
}


//Circles Inbetween Regular Grid (Diamond Shape - Zoom >= 3)
function diamondCircles(p5, x, y, x1, x2, y1, y2) {
 let sineWave = p5.sin(p5.globalFrameCount/20);
 let pulse = p5.map(sineWave, 1, -1, -50, 20);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius3, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius3 = c_pball - c_p00;

      let x_centre_circle = p5.map(x + 32, x1, x2, 0, 256);
      let y_centre_circle = p5.map(y - 32, y1, y2, 0, 256);
      let x_right_circle = p5.map(x + 38, x1, x2, 0, 256);
      let x_left_circle = p5.map(x - 38, x1, x2, 0, 256);
      let y_top_circle = p5.map(y - 38, y1, y2, 0, 256);
      let y_bottom_circle = p5.map(y + 38, y1, y2, 0, 256);
    
      p5.ellipse(x_right_circle, y_centre_circle, (cur_ball_radius3 + pulse));
      p5.ellipse(x_centre_circle, y_bottom_circle, (cur_ball_radius3 + pulse));
      p5.ellipse(x_left_circle, y_centre_circle, (cur_ball_radius3 + pulse));
      p5.ellipse(x_centre_circle, y_top_circle, (cur_ball_radius3+ pulse));

}


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
 
  p5.background(0);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;
 
    //Mini Grid When Zoom >=4 In Background
    let mini_max_shift = mini_max_thickness;
    let mini_min_x = snap_to_grid(x1 - mini_max_shift, mini_grid_size);
    let mini_max_x = snap_to_grid(x2 + mini_max_shift + mini_grid_size, mini_grid_size);
    let mini_min_y = snap_to_grid(y1 - mini_max_shift, mini_grid_size);
    let mini_max_y = snap_to_grid(y2 + mini_max_shift + mini_grid_size, mini_grid_size);

    for(let x=mini_min_x; x<mini_max_x; x+=mini_grid_size) {
      for(let y=mini_min_y; y<mini_max_y; y+=mini_grid_size) {

    let phase = getRandomValue(p5, x, y, z, "phase", 0, 2*p5.PI, 0.1);
    let freq = getRandomValue(p5, x, y, z, "freq", 10, 20, 0.1);
    let sineWave = p5.sin(p5.globalFrameCount / freq);
    let pulse = p5.map(sineWave, -1, 1, -10, 5);
    
     if (zoom >= 4) {

      let x_centre_circle = p5.map(x, x1, x2, 0, 256);
      let y_centre_circle = p5.map(y, y1, y2, 0, 256);
      let x_right_circle = p5.map(x + 0.5, x1, x2, 0, 256);
      let x_left_circle = p5.map(x - 0.5, x1, x2, 0, 256);
      let y_top_circle = p5.map(y - 0.5, y1, y2, 0, 256);
      let y_bottom_circle = p5.map(y + 0.5, y1, y2, 0, 256);

      p5.noStroke();
      p5.fill(100, 87, 255, 100);//lilac
      p5.ellipse(x_right_circle, y_centre_circle, cur_ball_radius/15 + pulse);
      p5.ellipse(x_left_circle, y_centre_circle, cur_ball_radius/15 + pulse);
      p5.ellipse(x_centre_circle, y_top_circle, cur_ball_radius/15 + pulse);
      p5.ellipse(x_centre_circle, y_bottom_circle, cur_ball_radius/15 + pulse);

     }
    }
  }



let dz = p5.globalFrameCount / 100.0;
    z = z + dz;
    
//Regular Grid Size    
let max_shift = max_thickness + max_movement;

  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size); 

  let sineWave = p5.sin(p5.globalFrameCount/20);
  let pulse2 = p5.map(sineWave, -1, 1, -50, 20);
  let pulse3 = p5.map(sineWave, -1, 1, -100, 20);

for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
        
      let x_centre_circle = p5.map(x, x1, x2, 0, 256);
      let y_centre_circle = p5.map(y, y1, y2, 0, 256);
      let x_right_minicircle2 = p5.map(x + 3, x1, x2, 0, 256);
      let x_left_minicircle2 = p5.map(x - 3, x1, x2, 0, 256);
      let y_top_minicircle2 = p5.map(y - 3, y1, y2, 0, 256);
      let y_bottom_minicircle2 = p5.map(y + 3, y1, y2, 0, 256);
       
      //Random Pulsing Diamond-Shaped Circles
       if (zoom <2) {
        p5.noStroke();
        p5.fill(100, 87, 255, 100);//Lilac
        simpleCircles(p5, x, y, x1, x2, y1, y2);
        }


       if (zoom ==2) {
        p5.noStroke();
        p5.fill(100, 87, 255, 40);//Lilac
        standardCircles(p5, x, y, x1, x2, y1, y2); //Diamond Shaped with 8 Circles

        p5.fill(115, 129, 255, 80);//Lilac
        simpleCircles2(p5, x, y, x1, x2, y1, y2); //Diamond Shaped with 4 Circles (Medium Sized)
      
        p5.fill(250,13,73,60); //Pink
        minidiamondCircle(p5, x, y, x1, x2, y1, y2, z) //Diamond Shaped with 4 Circles (Mini Sized)

      }

    
       if (zoom ==3) {
        p5.noStroke();
        p5.fill(250,13,73,50); //Pink
        standardCircles(p5, x, y, x1, x2, y1, y2); //Diamond Shaped with 8 Circles

        p5.fill(115, 129, 255, 80);//Lilac
        simpleCircles2(p5, x, y, x1, x2, y1, y2); //Diamond Shaped with 4 Circles (Medium Sized)
      
        p5.fill(250,13,73,60); //Pink
        minidiamondCircle(p5, x, y, x1, x2, y1, y2, z) //Diamond Shaped with 4 Circles (Mini Sized)

        p5.fill(115, 129, 255, 100);//Darker Purple/Blue
        squareCircles(p5, x, y, x1, x2, y1, y2 ); //Square Shaped with 4 Circles (Offset from Regular Grid)

        p5.fill(128, 131, 255, 150);//Lighter Purple/Blue
        diamondCircles(p5, x, y, x1, x2, y1, y2 ); //Diamond Shaped with 4 Circles (Offset from Regular Grid)

 
      }

       if (zoom >=4) {

        p5.noStroke();
        p5.fill(250,13,73,150); //Pink
        standardCircles(p5, x, y, x1, x2, y1, y2); //Diamond Shaped with 8 Circles
         
        p5.fill(100, 87, 255, 50);//Pink-Purplish
        simpleCircles2(p5, x, y, x1, x2, y1, y2); //Diamond Shaped with 4 Circles (Medium Sized)

        p5.fill(128, 131, 255, 100);//Lighter Purple/Blue
        minidiamondCircle(p5, x, y, x1, x2, y1, y2, z) //Diamond Shaped with 4 Circles (Smallest Sized)

        p5.fill(128, 131, 255, 220);//Lighter Purple/Blue
        squareCircles(p5, x, y, x1, x2, y1, y2 ); //Square Shaped with 4 Circles (Offset from Regular Grid)
        diamondCircles(p5, x, y, x1, x2, y1, y2 ); //Diamond Shaped with 4 Circles (Offset from Regular Grid)
 
      }

    }


}

}

