let max_thickness = 64;
let ball_radius = 24;
let line_width = 8;
let grid_size = 128; // The distance between each drawn object

let do_animation = true;
let max_movement = 64;

/* the random number seed f+or the tour */
var tourSeed = 0;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1,803.000000000000,247.000000000000],
  [2,772.250000000000,373.500000000000],
  [3,777.375000000000,387.250000000000],
  [4,777.375000000000,387.250000000000]
]

var ticker = 0;

let x_pos = 0;
let y_pos = 0;

let colourSelect = 0;


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


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;

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


  p5.background(255);
  p5.fill(20);
  // setRandomColor();

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {




      // colourSelect = p5.int(p5.random(1,3));

      // if(finishedSelect == false){

      //   if(colourSelect == 1){
      //      p5.fill('#f496ff');
      //   } else if(colourSelect == 2){
      //      p5.fill('#8cc7ff');
      //   } else if(colourSelect == 3){
      //      p5.fill('#8cffbb');
      //   }
      // }




      p5.stroke(0, 0, 150);
      p5.noStroke();




        // Zoom Modifiers Start Here

        if (zoom < 1) {


          let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.3, max_movement*0.3, 0.1);
          let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.3, max_movement*0.3, 0.1);
          let shifted_x = x + offsetX;
          let shifted_y = y + offsetY;
          let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

          let sineWave = p5.sin(p5.globalFrameCount);
          let sizeChange = p5.map(sineWave,-10,10, -10,10);

          p5.ellipse(x_pos, y_pos, cur_ball_radius+sizeChange);
        }

        if (zoom == 1) {

          let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.3, max_movement*0.3, 0.1);
          let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.3, max_movement*0.3, 0.1);

          let shifted_x = x + offsetX;
          let shifted_y = y + offsetY;

          let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          let y_pos = p5.map(shifted_y, y1, y2, 0, 256);


          let sineWave = p5.sin(p5.globalFrameCount);
          let sizeChange = p5.map(sineWave,-10,10, 0,30);


          p5.noFill();
          p5.stroke(0);
          p5.strokeWeight(4);

          p5.ellipse(x_pos, y_pos, cur_ball_radius+sizeChange);

          p5.noStroke();
          p5.fill('#8cc7ff');


          offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.35, max_movement*0.35, 0.1);
          offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.35, max_movement*0.35, 0.1);

          shifted_x = x + offsetX;
          shifted_y = y + offsetY;

          x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          y_pos = p5.map(shifted_y, y1, y2, 0, 256);

          p5.ellipse(x_pos, y_pos, cur_ball_radius*0.1);


          // for (var i = 0; i < 1; i++) {

          //   let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement/2, max_movement/2, 0.1);
          //   let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement/2, max_movement/2, 0.1);

          //   let shifted_x = x + offsetX;
          //   let shifted_y = y + offsetY;

          //   let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          //   let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

          //   p5.ellipse(x_pos, y_pos, cur_ball_radius/10);
          // }
        }


        if (zoom == 2){
          let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.3, max_movement*0.3, 0.1);
          let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.3, max_movement*0.3, 0.1);

          let shifted_x = x + offsetX;
          let shifted_y = y + offsetY;

          let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          let y_pos = p5.map(shifted_y, y1, y2, 0, 256);


          let sineWave = p5.sin(p5.globalFrameCount);
          let sizeChange = p5.map(sineWave,-10,10, 0,30);


          p5.noFill();
          p5.stroke(0);
          p5.strokeWeight(4);

          p5.ellipse(x_pos, y_pos, cur_ball_radius+sizeChange);

          p5.noStroke();
          p5.fill('#8cc7ff');


          offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.35, max_movement*0.35, 0.1);
          offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.35, max_movement*0.35, 0.1);

          shifted_x = x + offsetX;
          shifted_y = y + offsetY;

          x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          y_pos = p5.map(shifted_y, y1, y2, 0, 256);

          p5.ellipse(x_pos, y_pos, cur_ball_radius*0.1);

          /////////////////////////////////////////////

          offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.345, max_movement*0.345, 0.1);
          offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.345, max_movement*0.345, 0.1);

          shifted_x = x + offsetX;
          shifted_y = y + offsetY;

          x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          y_pos = p5.map(shifted_y, y1, y2, 0, 256);

          p5.stroke('#8cc7ff');
          p5.noFill();
          p5.strokeWeight(1);

          p5.ellipse(x_pos, y_pos, cur_ball_radius*0.2);
        }








        if (zoom == 3){

          let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.3, max_movement*0.3, 0.1);
          let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.3, max_movement*0.3, 0.1);

          let shifted_x = x + offsetX;
          let shifted_y = y + offsetY;

          let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          let y_pos = p5.map(shifted_y, y1, y2, 0, 256);
            

          p5.stroke(0);
          p5.noFill();
          p5.strokeWeight(2);

          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.1);

          /////////////////////////////////////////////

          p5.noStroke();
          p5.fill('#8cc7ff');


          offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.35, max_movement*0.35, 0.1);
          offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.35, max_movement*0.35, 0.1);

          shifted_x = x + offsetX;
          shifted_y = y + offsetY;

          x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          y_pos = p5.map(shifted_y, y1, y2, 0, 256);

          let sineWave = p5.sin(p5.globalFrameCount);
          let sizeChange = p5.map(sineWave,-10,10, 0,30);

          p5.ellipse(x_pos, y_pos, cur_ball_radius*0.1+sizeChange);



        }

        if (zoom >= 4){

          let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.3, max_movement*0.3, 0.1);
          let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.3, max_movement*0.3, 0.1);

          let shifted_x = x + offsetX;
          let shifted_y = y + offsetY;

          let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          let y_pos = p5.map(shifted_y, y1, y2, 0, 256);
            

          p5.stroke(0);
          p5.noFill();
          p5.strokeWeight(3);

          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.5);




          /////////////////////////////////////////////

          p5.noStroke();


          offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement*0.35, max_movement*0.35, 0.1);
          offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement*0.35, max_movement*0.35, 0.1);

          shifted_x = x + offsetX;
          shifted_y = y + offsetY;

          x_pos = p5.map(shifted_x, x1, x2, 0, 256);
          y_pos = p5.map(shifted_y, y1, y2, 0, 256);

          p5.fill('#8cc7ff');

          let sineWave = p5.sin(p5.globalFrameCount);
          let sizeChange = p5.map(sineWave,-10,10, 0,50);

          p5.ellipse(x_pos, y_pos, cur_ball_radius*0.2+sizeChange);

          p5.noFill();




        }





      }
    }


}


