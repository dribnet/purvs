const max_thickness = 64;
const max_movement = 10;
const ball_radius = 32;
const line_width = 15;
const grid_size = 100;
let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 830, 797],
  [2, 830, 797],
  [3, 830, 797]
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

function drawBubbles(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  p5.rectMode(p5.CENTER);
  const sqrt2 = 1.4142/2;
  let offsets = [
    [13, 8],
    [22, 11],
    [5, 22],
    [12, 16],
    [10, 15],
    [10, 20],
    [5, 10],
    [1, 1],
    [5, 5],
    [1, 10]
  ]
  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;
  for(let i=0; i<offsets.length; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.stroke(0,0,233);
    p5.rect(pixel_x, pixel_y, pixel_radius/5,pixel_radius/5); 
    p5.rect(pixel_x, pixel_y, pixel_radius/5.5,pixel_radius/5.5);  
    p5.rect(pixel_x + 13, pixel_y - 10, pixel_radius/18,pixel_radius/18);
    p5.rect(pixel_x + 13, pixel_y +5, pixel_radius/30,pixel_radius/30);

  }
}
function drawBubbles2(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  p5.rectMode(p5.CENTER);
  const sqrt2 = 1.4142/2;
  let offsets = [
    [20,10],
    [11,24],
    [9,8],
    [5,7],
    [15,15],
  ]
  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;
  for(let i=0; i<offsets.length; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.stroke(0,0,233);
    p5.rect(pixel_x, pixel_y, pixel_radius/10,pixel_radius/10); 
    p5.rect(pixel_x, pixel_y, pixel_radius/11,pixel_radius/11);  
    //p5.rect(pixel_x + 13, pixel_y - 10, pixel_radius/36,pixel_radius/36);
    //p5.rect(pixel_x + 13, pixel_y +5, pixel_radius/60,pixel_radius/60);

  }
}

//for big wave without animation
function waveform (p5, x, y, x1, x2, y1, y2){
  let x_pos = p5.map(x, x1, x2, 0, 256);
  let y_pos = p5.map(y, y1, y2, 0, 256);
  let x_pos_2 = p5.map(x + 30, x1, x2, 0, 256);
  let y_pos_2 = p5.map(y + 30, y1, y2, 0, 256);
  let x_pos_3 = p5.map(x - 30, x1, x2, 0, 256);
  let y_pos_3 = p5.map(y + 60, y1, y2, 0, 256);
  p5.quad(x_pos, y_pos, x_pos_3, y_pos_2, x_pos, y_pos_3, x_pos_2, y_pos_2);

  //for top lines
  let x_pos_line = p5.map(x - 40, x1, x2, 0, 256);
  let x_pos_line_2 = p5.map(x + 40, x1, x2, 0, 256);
  let y_pos_line = p5.map(y - 20, y1, y2, 0, 256);
  p5.line(x_pos, y_pos, x_pos_line, y_pos_line);
  p5.line(x_pos, y_pos, x_pos_line_2, y_pos_line);

  //for bottom lines
  let y_pos_line_2 = p5.map(y + 80, y1, y2, 0, 256);
  p5.line(x_pos, y_pos_3, x_pos_line, y_pos_line_2);
  p5.line(x_pos, y_pos_3, x_pos_line_2, y_pos_line_2);
}
//draw quad when zoom 3
function smallWave (p5, x, y, x1, x2, y1, y2){
  //center quad group
  //1st quad
  let x_pos = p5.map(x, x1, x2, 0, 256);
  let y_pos = p5.map(y+10, y1, y2, 0, 256);
  let x_pos_2 = p5.map(x + 20, x1, x2, 0, 256);
  let y_pos_2 = p5.map(y + 30, y1, y2, 0, 256);
  let x_pos_3 = p5.map(x - 20, x1, x2, 0, 256);
  let y_pos_3 = p5.map(y + 50, y1, y2, 0, 256);
  p5.quad(x_pos, y_pos, x_pos_3, y_pos_2, x_pos, y_pos_3, x_pos_2, y_pos_2);
  //2nd quad
  let x_pos_in = p5.map(x, x1, x2, 0, 256);
  let y_pos_in = p5.map(y+20, y1, y2, 0, 256);
  let x_pos_in_2 = p5.map(x + 10, x1, x2, 0, 256);
  let y_pos_in_2 = p5.map(y + 30, y1, y2, 0, 256);
  let x_pos_in_3 = p5.map(x - 10, x1, x2, 0, 256);
  let y_pos_in_3 = p5.map(y + 40, y1, y2, 0, 256);
  p5.quad(x_pos_in, y_pos_in, x_pos_in_3, y_pos_in_2, x_pos_in, y_pos_in_3, x_pos_in_2, y_pos_in_2);
  //3rd quad
  let x_pos_in_in = p5.map(x, x1, x2, 0, 256);
  let y_pos_in_in = p5.map(y+25, y1, y2, 0, 256);
  let x_pos_in_in_2 = p5.map(x + 5, x1, x2, 0, 256);
  let y_pos_in_in_2 = p5.map(y + 30, y1, y2, 0, 256);
  let x_pos_in_in_3 = p5.map(x - 5, x1, x2, 0, 256);
  let y_pos_in_in_3 = p5.map(y + 35, y1, y2, 0, 256);
  p5.quad(x_pos_in_in, y_pos_in_in, x_pos_in_in_3, y_pos_in_in_2, x_pos_in_in, y_pos_in_in_3, x_pos_in_in_2, y_pos_in_2);
}

function upperlowerWave (p5, x, y, x1, x2, y1, y2){
  //1st
  let x_pos = p5.map(x, x1, x2, 0, 256);
  let y_pos = p5.map(y - 5, y1, y2, 0, 256);
  let x_pos_3 = p5.map(x - 30, x1, x2, 0, 256);
  let y_pos_3 = p5.map(y + 65, y1, y2, 0, 256);
  let x_pos_line = p5.map(x - 30, x1, x2, 0, 256);
  let x_pos_line_2 = p5.map(x + 30, x1, x2, 0, 256);
  let y_pos_line = p5.map(y - 20, y1, y2, 0, 256);
  p5.line(x_pos, y_pos, x_pos_line, y_pos_line);
  p5.line(x_pos, y_pos, x_pos_line_2, y_pos_line);
  //for bottom lines
  let y_pos_line_2 = p5.map(y + 80, y1, y2, 0, 256);
  p5.line(x_pos, y_pos_3, x_pos_line, y_pos_line_2);
  p5.line(x_pos, y_pos_3, x_pos_line_2, y_pos_line_2);
  //2nd in
  let x_pos_in = p5.map(x, x1, x2, 0, 256);
  let y_pos_in = p5.map(y - 10, y1, y2, 0, 256);
  let x_pos_in_3 = p5.map(x - 25, x1, x2, 0, 256);
  let y_pos_in_3 = p5.map(y + 70, y1, y2, 0, 256);
  let x_pos_line_in = p5.map(x - 20, x1, x2, 0, 256);
  let x_pos_line_in_2 = p5.map(x + 20, x1, x2, 0, 256);
  let y_pos_line_in = p5.map(y -20, y1, y2, 0, 256);
  p5.line(x_pos_in, y_pos_in, x_pos_line_in, y_pos_line_in);
  p5.line(x_pos_in, y_pos_in, x_pos_line_in_2, y_pos_line_in);
  //for bottom lines
  let y_pos_line_in_2 = p5.map(y + 80, y1, y2, 0, 256);
  p5.line(x_pos_in, y_pos_in_3, x_pos_line_in, y_pos_line_in_2);
  p5.line(x_pos_in, y_pos_in_3, x_pos_line_in_2, y_pos_line_in_2);

  let x_pos_in_in = p5.map(x, x1, x2, 0, 256);
  let y_pos_in_in = p5.map(y - 15, y1, y2, 0, 256);
  let x_pos_in_in_3 = p5.map(x - 20, x1, x2, 0, 256);
  let y_pos_in_in_3 = p5.map(y + 75, y1, y2, 0, 256);
  let x_pos_line_in_in = p5.map(x - 10, x1, x2, 0, 256);
  let x_pos_line_in_in_2 = p5.map(x + 10, x1, x2, 0, 256);
  let y_pos_line_in_in = p5.map(y - 20, y1, y2, 0, 256);
  p5.line(x_pos_in_in, y_pos_in_in, x_pos_line_in_in, y_pos_line_in_in);
  p5.line(x_pos_in_in, y_pos_in_in, x_pos_line_in_in_2, y_pos_line_in_in);
  //for bottom lines
  let y_pos_line_in_in_2 = p5.map(y + 80, y1, y2, 0, 256);
  p5.line(x_pos_in_in, y_pos_in_in_3, x_pos_line_in_in, y_pos_line_in_in_2);
  p5.line(x_pos_in_in, y_pos_in_in_3, x_pos_line_in_in_2, y_pos_line_in_in_2);
}
function drawFish (p5, x, y, x1, x2, y1, y2, color_1, color_2, color_3){
  //head
  p5.stroke(255, 255, 255);
  p5.fill(color_1, color_2, color_3);
  let x_head = p5.map(x, x1, x2, 0, 256);
  let x_head_2 = p5.map(x + 10, x1, x2, 0, 256);
  let y_head = p5.map(y, y1, y2, 0, 256);
  let y_head_2 = p5.map(y + 10, y1, y2, 0, 256);
  let y_head_3 = p5.map(y + 5, y1, y2, 0, 256);
  p5.triangle(x_head, y_head, x_head, y_head_2, x_head_2, y_head_3);

  //body
  let x_body = p5.map(x - 20, x1, x2, 0, 256);
  p5.triangle(x_head, y_head, x_head, y_head_2, x_body, y_head_3);

  //tail
  let x_tail = p5.map(x - 25, x1, x2, 0, 256);
  p5.triangle(x_body, y_head_3, x_tail, y_head, x_tail, y_head_2);

  //fins
  let x_fin = p5.map(x - 10, x1, x2, 0, 256);
  let y_fin = p5.map(y - 2.5, y1, y2, 0, 256);
  let y_fin_3 = p5.map(y + 2.5, y1, y2, 0, 256);
  let y_fin_2 = p5.map(y + 12.5, y1, y2, 0, 256);
  let y_fin_4 = p5.map(y + 7.5, y1, y2, 0, 256);
  p5.triangle(x_head, y_head, x_fin, y_fin, x_fin, y_fin_3);
  p5.triangle(x_head, y_head_2, x_fin, y_fin_2, x_fin, y_fin_4);

}
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;
  //setting another variable for animation
  p5.angleMode(p5.DEGREES);
  let SpringValue = p5.sin(p5.globalFrameCount * 2);
  //let SpringValue_2 = p5.cos(p5.globalFrameCount * 2);
  //map the changing value
  sinx = p5.map(SpringValue, -1 , 1, 10, 50);
  sinx_2 = p5.map(SpringValue, 1, -1, 10, 50)
  siny = p5.map(SpringValue, -1 , 1, 0, 30);
  siny_2 = p5.map(SpringValue, 1 , -1, -30, 0);

  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);;
  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;


  p5.background('#21437a');
  p5.noFill();
  p5.strokeWeight(2);
  //p5.fill(0, 0, 128);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      p5.noFill();
          let x_pos = p5.map(x, x1, x2, 0, 256);
          let y_pos = p5.map(y + siny, y1, y2, 0, 256);
          let x_pos_2 = p5.map(x + sinx, x1, x2, 0, 256);
          let y_pos_2 = p5.map(y + 30, y1, y2, 0, 256);
          let x_pos_3 = p5.map(x - sinx, x1, x2, 0, 256);
          let y_pos_3 = p5.map(y + 60 + siny_2, y1, y2, 0, 256);
          //stroke color
          p5.colorMode(p5.HSB, 100);
          let x_spacing = 200;
          let brightness_x = x % (2*x_spacing);
          if (brightness_x > x_spacing) {
            brightness_x = x_spacing - (brightness_x - x_spacing);
          }
          var brightness = p5.map(brightness_x, 0, x_spacing, 20, 100);   
          // var brightness = p5.map(x, x1, x2, 50, 100);   
          // brightness = 100;
          p5.stroke(57, brightness, 100);
      if (zoom < 2){

          p5.quad(x_pos, y_pos, x_pos_3, y_pos_2, x_pos, y_pos_3, x_pos_2, y_pos_2);

          //for top lines
          let x_pos_line = p5.map(x + sinx_2, x1, x2, 0, 256);
          let x_pos_line_2 = p5.map(x - sinx_2, x1, x2, 0, 256);
          let y_pos_line = p5.map(y - 20, y1, y2, 0, 256);
          p5.line(x_pos, y_pos, x_pos_line, y_pos_line);
          p5.line(x_pos, y_pos, x_pos_line_2, y_pos_line);

          //for bottom lines
          let y_pos_line_2 = p5.map(y + 80, y1, y2, 0, 256);
          p5.line(x_pos, y_pos_3, x_pos_line, y_pos_line_2);
          p5.line(x_pos, y_pos_3, x_pos_line_2, y_pos_line_2);

      }
      if(zoom >= 2){
        // p5.stroke(0,0,255);
        // p5.colorMode(p5.HSB, 100);
        //   let x_spacing = 200;
        //   let brightness_x = x % (2*x_spacing);
        //   if (brightness_x > x_spacing) {
        //     brightness_x = x_spacing - (brightness_x - x_spacing);
        //   }
          p5.colorMode(p5.RGB);
          drawFish (p5, x + sinx, y+20, x1, x2, y1, y2,135,10,66);
          drawFish (p5, x + sinx - 20, y+50, x1, x2, y1, y2,35,79,36);
          p5.noFill();
          p5.colorMode(p5.HSB, 100);
          var brightness = p5.map(brightness_x, 0, x_spacing, 20, 100);   
          // var brightness = p5.map(x, x1, x2, 50, 100);   
          // brightness = 100;
          p5.stroke(57, brightness, 100);
          let x_pos = p5.map(x, x1, x2, 0, 256);
          let y_pos = p5.map(y, y1, y2, 0, 256);
          let x_pos_2 = p5.map(x + 30, x1, x2, 0, 256);
          let y_pos_2 = p5.map(y + 30, y1, y2, 0, 256);
          let x_pos_3 = p5.map(x - 30, x1, x2, 0, 256);
          let y_pos_3 = p5.map(y + 60, y1, y2, 0, 256);
          p5.quad(x_pos, y_pos, x_pos_3, y_pos_2, x_pos, y_pos_3, x_pos_2, y_pos_2);

          //for top lines
          let x_pos_line = p5.map(x - 40, x1, x2, 0, 256);
          let x_pos_line_2 = p5.map(x + 40, x1, x2, 0, 256);
          let y_pos_line = p5.map(y - 20, y1, y2, 0, 256);
          p5.line(x_pos, y_pos, x_pos_line, y_pos_line);
          p5.line(x_pos, y_pos, x_pos_line_2, y_pos_line);

          //for bottom lines
          let y_pos_line_2 = p5.map(y + 80, y1, y2, 0, 256);
          p5.line(x_pos, y_pos_3, x_pos_line, y_pos_line_2);
          p5.line(x_pos, y_pos_3, x_pos_line_2, y_pos_line_2);
       // waveform(p5, x, y, x1, x2, y1, y2);
      }
      if(zoom >= 3){
        //p5.stroke(0,0,255);
        p5.noFill();
        p5.colorMode(p5.RGB, 255);
        let color_choice = p5.map(SpringValue, -1 , 1, 0, 50);
        p5.stroke(0,0,255 - color_choice);
        //center quad group
        //1st quad
        let x_pos = p5.map(x, x1, x2, 0, 256);
        let y_pos = p5.map(y+10, y1, y2, 0, 256);
        let x_pos_2 = p5.map(x + 20, x1, x2, 0, 256);
        let y_pos_2 = p5.map(y + 30, y1, y2, 0, 256);
        let x_pos_3 = p5.map(x - 20, x1, x2, 0, 256);
        let y_pos_3 = p5.map(y + 50, y1, y2, 0, 256);
        p5.quad(x_pos, y_pos, x_pos_3, y_pos_2, x_pos, y_pos_3, x_pos_2, y_pos_2);
        //2nd quad
         p5.stroke(siny,0,205 * sinx);
        let x_pos_in = p5.map(x, x1, x2, 0, 256);
        let y_pos_in = p5.map(y+20, y1, y2, 0, 256);
        let x_pos_in_2 = p5.map(x + 10, x1, x2, 0, 256);
        let y_pos_in_2 = p5.map(y + 30, y1, y2, 0, 256);
        let x_pos_in_3 = p5.map(x - 10, x1, x2, 0, 256);
        let y_pos_in_3 = p5.map(y + 40, y1, y2, 0, 256);
        p5.quad(x_pos_in, y_pos_in, x_pos_in_3, y_pos_in_2, x_pos_in, y_pos_in_3, x_pos_in_2, y_pos_in_2);
        //3rd quad
        p5.stroke(siny,sinx*sinx,255);
        let x_pos_in_in = p5.map(x, x1, x2, 0, 256);
        let y_pos_in_in = p5.map(y+25, y1, y2, 0, 256);
        let x_pos_in_in_2 = p5.map(x + 5, x1, x2, 0, 256);
        let y_pos_in_in_2 = p5.map(y + 30, y1, y2, 0, 256);
        let x_pos_in_in_3 = p5.map(x - 5, x1, x2, 0, 256);
        let y_pos_in_in_3 = p5.map(y + 35, y1, y2, 0, 256);
        p5.quad(x_pos_in_in, y_pos_in_in, x_pos_in_in_3, y_pos_in_in_2, x_pos_in_in, y_pos_in_in_3, x_pos_in_in_2, y_pos_in_2);
        upperlowerWave(p5, x, y, x1, x2, y1, y2);

        let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
        let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
        let shifted_x = x + offsetX;
        let shifted_y = y + offsetY;
        let x_position = p5.map(shifted_x, x1, x2, 0, 256);
        let y_position = p5.map(shifted_y, y1, y2, 0, 256);
        drawBubbles2(p5, x1, x2, y1, y2, shifted_x, shifted_y, ball_radius, 2*line_width);
        drawBubbles2(p5, x1 - 10, x2 -10, y1 - 5, y2- 5, shifted_x, shifted_y, ball_radius/3, 2*line_width);
        drawBubbles2(p5, x1 - 20, x2 -10, y1 - 15, y2- 5, shifted_x, shifted_y, ball_radius, 2*line_width);
        drawBubbles(p5, x1, x2, y1, y2, shifted_x, shifted_y, ball_radius, 2*line_width);
        drawBubbles(p5, x1 - 10, x2 -10, y1 - 5, y2- 5, shifted_x, shifted_y, ball_radius/3, 2*line_width);
      }
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
