const max_thickness = 64;
const max_movement = 180;
const ball_radius = 128;
const ball_radius2 = 110;
const grid_size = 256;
const middleline_width = 3;
const button_radius = 56;
const button_radius2 = 32;
const head_radius = 120;
const belly_radius = 100;
const tail_ball = 30;
const tail_ball2 = 22;
const b_radius = 90;
const ear_radius = 45;
const ear_radius2 = 30;
const eye_radius = 10;
const mouth_radius = 10;

let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 512.000000000000, 512.000000000000],
  [1, 268.117889404297, 661.207550048828],
  [2, 264.823104858398, 652.575424194336],
  [2, 203.464591979980, 821.254722595215],
  [3, 219.022377014160, 782.900951385498],
  [4, 225.067790985107, 744.166278839111]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}


function getOffsetPoint(p5, x, y, z, noiseScale) {
  let noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  let noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  let offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  let offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
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

function drawSleepMarill(p5, x1, x2, y1, y2, pos_x, pos_y, z){
      p5.angleMode(p5.DEGREES);

  let c_p00 = p5.map(0, x1, x2, 0, 256);

  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let c_phead = p5.map(head_radius, x1, x2, 0, 256);
  let c_pear = p5.map(ear_radius, x1, x2, 0, 256);
  let c_peye = p5.map(eye_radius, x1, x2, 0, 256);
  let c_pmiddleline = p5.map(middleline_width, x1, x2, 0, 256);
  let c_pmouth = p5.map(mouth_radius, x1, x2, 0, 256);
  let c_pear2 = p5.map(ear_radius2, x1, x2, 0, 256);
  let c_pbelly = p5.map(belly_radius, x1, x2, 0, 256);

  let cur_ear_radius2 = c_pear2 - c_p00;
  let cur_ball_radius = c_pball - c_p00;
  let cur_belly_radius = c_pbelly - c_p00;
  let cur_head_radius = c_phead - c_p00;
  let cur_ear_radius = c_pear - c_p00;
  let cur_eye_radius = c_peye - c_p00;
  let cur_middleline_width = c_pmiddleline - c_p00;
  let cur_mouth_radius = c_pmouth - c_p00;

  let z_fraction = z % 1.0;
  let phase = getRandomValue(p5, pos_x, pos_y, z, "phase", 0, 100, 0.1);
  let freq = getRandomValue(p5, pos_x, pos_y, z, "freq", 10, 50, 0.1);
  // let sineWave = 1;  
  let sineWave = p5.sin(phase + (p5.globalFrameCount / freq));
  let radiusScale = p5.map(sineWave, -1, 1, 0.8, 1.0);
  let eyeScale = p5.map(sineWave, -1, 1, 0, 0.3);


      /* first compute the points to be drawn */

      let x_pos = p5.map(pos_x, x1, x2, 0, 256);
      let y_pos = p5.map(pos_y, y1, y2, 0, 256);

      let start_line = x_pos-cur_ball_radius/2;
      let end_line = x_pos+cur_ball_radius/2;
 
      p5.noStroke();

      //ears
       const offsets = [
          [1, -1],
          [-1, -1],
        ]
      for(var i=0; i<offsets.length; i++) {
          let offset = offsets[i];
          let ear_x = p5.map(pos_x + 40*offset[0], x1, x2, 0, 256);
          let ear_y = p5.map(pos_y + 55*offset[1], y1, y2, 0, 256);
          let ear_x2 = p5.map(pos_x + 38*offset[0], x1, x2, 0, 256);
          let ear_y2 = p5.map(pos_y + 53*offset[1], y1, y2, 0, 256);
          p5.fill(41,171,226);
          //outside ears
          let cur_ear_radius1a = cur_ear_radius*radiusScale;
          p5.ellipse(ear_x, ear_y, cur_ear_radius1a);
          p5.fill(245,10,10);
          //inner ears
          let cur_ear_radius1b = cur_ear_radius2*radiusScale;
          p5.ellipse(ear_x2, ear_y2, cur_ear_radius1b);
          // console.log(cur_ear_radius);
        }



      //Outliners-- ears
      p5.push();
      p5.noFill();
      p5.stroke(3);
      p5.strokeWeight(10);
      for(var i=0; i<offsets.length; i++) {
                let offset = offsets[i];
                let ear_x = p5.map(pos_x + 40*offset[0], x1, x2, 0, 256);
                let ear_y = p5.map(pos_y + 55*offset[1], y1, y2, 0, 256);
                let ear_x2 = p5.map(pos_x + 38*offset[0], x1, x2, 0, 256);
                let ear_y2 = p5.map(pos_y + 53*offset[1], y1, y2, 0, 256);
                //outside ears
                let cur_ear_radius1a = cur_ear_radius*radiusScale;
                p5.ellipse(ear_x, ear_y, cur_ear_radius1a);
              }
      p5.pop();


      //head
      p5.fill(41,171,226);
      p5.ellipse(x_pos, y_pos, cur_head_radius);

      //belly
      p5.fill(250);
      let belly_x = p5.map(pos_x, x1, x2, 0, 256);
      let belly_y = p5.map(pos_y+40, y1, y2, 0, 256);
      p5.arc(belly_x, belly_y, cur_belly_radius, cur_belly_radius, -180, 0);

      //eyes
      for(var i=0; i<offsets.length; i++) {
          let offset = offsets[i];
          let eye_x = p5.map(pos_x + 25*offset[0], x1, x2, 0, 256);
          let eye_y = p5.map(pos_y + 25*offset[1], y1, y2, 0, 256);
          p5.fill(0);
          let cur_eye_radius2 = cur_eye_radius*eyeScale;
          p5.ellipse(eye_x, eye_y, cur_eye_radius, cur_eye_radius2);
        }
      
      //mouth
      let mouth_x1 = p5.map(pos_x - 4.5, x1, x2, 0, 256);
      let mouth_x2 = p5.map(pos_x + 4.5, x1, x2, 0, 256);
      let mouth_y = p5.map(pos_y - 20, y1, y2, 0, 256);
      p5.noFill();
      p5.push();
      p5.stroke(10);
      p5.strokeWeight(cur_middleline_width);
      let mouth_arc1 = p5.map(sineWave, -1, 1, 30, 150);
      let mouth_arc2 = p5.map(sineWave, -1, 1, 150, 30);
      //left mouth arc
      p5.arc(mouth_x1, mouth_y, cur_mouth_radius,cur_mouth_radius, 30, mouth_arc1);
      //right mouth arc
      p5.arc(mouth_x2, mouth_y, cur_mouth_radius,cur_mouth_radius, mouth_arc2, 150);
      p5.pop();

      //Outline parts
      p5.stroke(3);
      p5.strokeWeight(10);
      //outline - head     
      p5.ellipse(x_pos, y_pos, cur_head_radius);

}


function drawhead(p5, x1, x2, y1, y2, pos_x, pos_y, z){
      p5.angleMode(p5.DEGREES);

  let c_p00 = p5.map(0, x1, x2, 0, 256);

  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let c_phead = p5.map(head_radius, x1, x2, 0, 256);
  let c_pear = p5.map(ear_radius, x1, x2, 0, 256);
  let c_peye = p5.map(eye_radius, x1, x2, 0, 256);
  let c_pmiddleline = p5.map(middleline_width, x1, x2, 0, 256);
  let c_pmouth = p5.map(mouth_radius, x1, x2, 0, 256);
  let c_pear2 = p5.map(ear_radius2, x1, x2, 0, 256);
  let c_pbelly = p5.map(belly_radius, x1, x2, 0, 256);

  let cur_ear_radius2 = c_pear2 - c_p00;
  let cur_belly_radius = c_pbelly - c_p00;
  let cur_ball_radius = c_pball - c_p00;
  let cur_head_radius = c_phead - c_p00;
  let cur_ear_radius = c_pear - c_p00;
  let cur_eye_radius = c_peye - c_p00;
  let cur_middleline_width = c_pmiddleline - c_p00;
  let cur_mouth_radius = c_pmouth - c_p00;

  let z_fraction = z % 1.0;
  let phase = getRandomValue(p5, pos_x, pos_y, z, "phase", 0, 100, 0.1);
  let freq = getRandomValue(p5, pos_x, pos_y, z, "freq", 10, 50, 0.1);
  // let sineWave = 1;  
  let sineWave = p5.sin(phase + (p5.globalFrameCount / freq));
  let radiusScale = p5.map(sineWave, -1, 1, 0.8, 1.2);
  let eyeScale = p5.map(sineWave, -1, 1, 0.5, 1);


      /* first compute the points to be drawn */

      let x_pos = p5.map(pos_x, x1, x2, 0, 256);
      let y_pos = p5.map(pos_y, y1, y2, 0, 256);

      let start_line = x_pos-cur_ball_radius/2;
      let end_line = x_pos+cur_ball_radius/2;
 
      p5.noStroke();

      //ears
       const offsets = [
          [1, -1],
          [-1, -1],
        ]
      for(var i=0; i<offsets.length; i++) {
          let offset = offsets[i];
          let ear_x = p5.map(pos_x + 40*offset[0], x1, x2, 0, 256);
          let ear_y = p5.map(pos_y + 55*offset[1], y1, y2, 0, 256);
          let ear_x2 = p5.map(pos_x + 38*offset[0], x1, x2, 0, 256);
          let ear_y2 = p5.map(pos_y + 53*offset[1], y1, y2, 0, 256);
          // p5.stroke(10);
          p5.fill(41,171,226);
          //outside ears
          let cur_ear_radius1a = cur_ear_radius*radiusScale;
          p5.ellipse(ear_x, ear_y, cur_ear_radius1a);
          p5.fill(245,10,10);
          //inner ears
          let cur_ear_radius1b = cur_ear_radius2*radiusScale;
          p5.ellipse(ear_x2, ear_y2, cur_ear_radius1b);
          // console.log(cur_ear_radius);
        }



      //Outliners-- ears
      p5.push();
      p5.noFill();
      p5.stroke(3);
      p5.strokeWeight(10);
      for(var i=0; i<offsets.length; i++) {
                let offset = offsets[i];
                let ear_x = p5.map(pos_x + 40*offset[0], x1, x2, 0, 256);
                let ear_y = p5.map(pos_y + 55*offset[1], y1, y2, 0, 256);
                let ear_x2 = p5.map(pos_x + 38*offset[0], x1, x2, 0, 256);
                let ear_y2 = p5.map(pos_y + 53*offset[1], y1, y2, 0, 256);
                //outside ears
                let cur_ear_radius1a = cur_ear_radius*radiusScale;
                p5.ellipse(ear_x, ear_y, cur_ear_radius1a);
              }
      p5.pop();


      //head
      p5.fill(41,171,226);
      p5.ellipse(x_pos, y_pos, cur_head_radius);

      //belly
      p5.fill(250);
      let belly_x = p5.map(pos_x, x1, x2, 0, 256);
      let belly_y = p5.map(pos_y+40, y1, y2, 0, 256);
      p5.arc(belly_x, belly_y, cur_belly_radius, cur_belly_radius, -180, 0);

      //eyes
      for(var i=0; i<offsets.length; i++) {
          let offset = offsets[i];
          let eye_x = p5.map(pos_x + 25*offset[0], x1, x2, 0, 256);
          let eye_y = p5.map(pos_y + 25*offset[1], y1, y2, 0, 256);
          p5.fill(0);
          let cur_eye_radius2 = cur_eye_radius*eyeScale;
          p5.ellipse(eye_x, eye_y, cur_eye_radius, cur_eye_radius2);
        }
      
      //mouth
      let mouth_x1 = p5.map(pos_x - 4.5, x1, x2, 0, 256);
      let mouth_x2 = p5.map(pos_x + 4.5, x1, x2, 0, 256);
      let mouth_y = p5.map(pos_y - 20, y1, y2, 0, 256);
      p5.noFill();
      p5.push();
      p5.stroke(10);
      p5.strokeWeight(cur_middleline_width);
      let mouth_arc1 = p5.map(sineWave, -1, 1, 180, 195);
      let mouth_arc2 = p5.map(sineWave, -1, 1, 0, -15);
      //left mouth arc
      p5.arc(mouth_x1, mouth_y, cur_mouth_radius,cur_mouth_radius, 30, mouth_arc1);
      //right mouth arc
      p5.arc(mouth_x2, mouth_y, cur_mouth_radius,cur_mouth_radius, mouth_arc2, 150);
      p5.pop();

      //Outline parts
      p5.stroke(3);
      p5.strokeWeight(10);
      //head     
      p5.ellipse(x_pos, y_pos, cur_head_radius);

}


function drawTail(p5, x1, x2, y1, y2, pos_x, pos_y, z){
  p5.angleMode(p5.DEGREES);

  let c_p00 = p5.map(0, x1, x2, 0, 256);

  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let c_pb = p5.map(b_radius, x1, x2, 0, 256);
  let c_ptail_ball = p5.map(tail_ball, x1, x2, 0, 256);
  let c_ptail_ball2 = p5.map(tail_ball2, x1, x2, 0, 256);

  let cur_tail_ball = c_ptail_ball - c_p00;
  let cur_tail_ball2 = c_ptail_ball2 - c_p00;
  let cur_ball_radius = c_pball - c_p00;
  let cur_b_radius = c_pb - c_p00;

 
  let z_fraction = z % 1.0;
  let phase = getRandomValue(p5, pos_x, pos_y, z, "phase", 0, 50, 0.1);
  let freq = getRandomValue(p5, pos_x, pos_y, z, "freq", 5, 30, 0.1);
  let sineWave = p5.sin(phase + (p5.globalFrameCount / freq));
  // debugging
  // sineWave = 0.5;
  let radiusScale = p5.map(sineWave, -1, 1, 0.5, 1.5);
  
      /* first compute the points to be drawn */

      let x_pos = p5.map(pos_x, x1, x2, 0, 256);
      let y_pos = p5.map(pos_y, y1, y2, 0, 256);

      let start_line = x_pos-cur_ball_radius/2;
      let end_line = x_pos+cur_ball_radius/2;
 
      p5.noStroke();

      //tail part
      const moving = -40;   
      let tail_x = p5.map(pos_x , x1, x2, 0, 256);
      let tail_y = p5.map(pos_y + moving, y1, y2, 0, 256);

      //define tail ball
      let tailFreq = 10;
      let tailBallRadius = 100;
      let curSpin = (p5.globalFrameCount / tailFreq);
      let curSpinFrac = curSpin % 10;
      if(curSpinFrac > 5) {
        curSpinFrac = 5 - (curSpinFrac-5);
      }
      let lowAngle = 160;
      let highAngle = lowAngle + 60;
      let spinAngle = p5.map(curSpinFrac, 0, 10, lowAngle, highAngle);

      let tailSinWave = tailBallRadius * p5.sin(spinAngle);
      let tailCosWave = 40 + tailBallRadius * p5.cos(spinAngle);

      //define first point for tail
      let tailRadius1 = 50;
      let lowAngle1 = 160;
      let highAngle1 = lowAngle1 + 60;
      let spinAngle1 = p5.map(curSpinFrac, 0, 10, lowAngle1, highAngle1);
      let tailSinWave1 = tailRadius1 * p5.sin(spinAngle1);
      let tailCosWave1 = tailRadius1 * p5.cos(spinAngle1) + 40;

      //define second point for tail
      let tailRadius2 = 55;
      let lowAngle2 = 160;
      let highAngle2 = lowAngle2 + 60;
      let spinAngle2 = p5.map(curSpinFrac, 0, 10, lowAngle2, highAngle2);
      let tailSinWave2 = tailRadius2 * p5.sin(spinAngle2);
      let tailCosWave2 = tailRadius2 * p5.cos(spinAngle2) + 40;

      //define third point for tail
      let tailRadius3 = 70;
      let lowAngle3 = 145;
      let highAngle3 = lowAngle3 + 60;
      let spinAngle3 = p5.map(curSpinFrac, 0, 10, lowAngle3, highAngle3);
      let tailSinWave3 = tailRadius3 * p5.sin(spinAngle3);
      let tailCosWave3 = tailRadius3 * p5.cos(spinAngle3) + 40;

      //define three points for the tail
      let tailPosx1 = pos_x + tailSinWave1;
      let tailPosx2 = pos_x + tailSinWave2;
      let tailPosx3 = pos_x + tailSinWave3;

      let tailPosy1 = pos_y  + tailCosWave1 + moving;
      let tailPosy2 = pos_y  + tailCosWave2 + moving;
      let tailPosy3 = pos_y  + tailCosWave3 + moving;


      let tailPosX1 = p5.map(tailPosx1, x1, x2, 0, 256);
      let tailPosY1 = p5.map(tailPosy1, y1, y2, 0, 256);
      let tailPosX2 = p5.map(tailPosx2, x1, x2, 0, 256);
      let tailPosY2 = p5.map(tailPosy2, y1, y2, 0, 256);
      let tailPosX3 = p5.map(tailPosx3, x1, x2, 0, 256);
      let tailPosY3 = p5.map(tailPosy3, y1, y2, 0, 256);


      let tailBallPosX = pos_x + tailSinWave;
      let tailBallPosY = pos_y + moving + tailCosWave;      
      let tailBall_x = p5.map(tailBallPosX, x1, x2, 0, 256);
      let tailBall_y = p5.map(tailBallPosY, y1, y2, 0, 256);

      //draw tail
      p5.stroke(10);       
      p5.push();
      p5.strokeWeight(10);
      p5.line(tail_x,tail_y,tailPosX2,tailPosY2);
      p5.line(tailPosX2,tailPosY2,tailPosX3,tailPosY3);   
      p5.line(tailPosX3,tailPosY3,tailBall_x,tailBall_y);
      //debug the line is roatating or not
      // p5.line(tail_x1,tail_y1,tailBall_x,tailBall_y);
      p5.pop();

      //draw tail ball
      p5.fill(41,171,226);
      cur_tail_ball = cur_tail_ball * radiusScale;
      cur_tail_ball2 = cur_tail_ball2 * radiusScale;
      p5.ellipse(tailBall_x, tailBall_y, cur_tail_ball);
      //white line for tail ball
      p5.push();
      p5.noFill();
      p5.stroke(250);
      p5.strokeWeight(5.5);
      p5.arc(tailBall_x, tailBall_y, cur_tail_ball2, cur_tail_ball2, 250, 300);
      p5.arc(tailBall_x, tailBall_y, cur_tail_ball2, cur_tail_ball2, 313, 315);
      p5.pop();

      //b
      p5.fill(41,171,226);
      p5.ellipse(x_pos, y_pos,cur_b_radius); 
      
}



function drawBall(p5, x1, x2, y1, y2, pos_x, pos_y){
  p5.angleMode(p5.DEGREES);

  let c_p00 = p5.map(0, x1, x2, 0, 256);

  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let c_pball2 = p5.map(ball_radius2, x1, x2, 0, 256);
  let c_pbutton = p5.map(button_radius, x1, x2, 0, 256);
  let c_pbutton2 = p5.map(button_radius2, x1, x2, 0, 256);
  let c_pmiddleline = p5.map(middleline_width, x1, x2, 0, 256);

  let cur_ball_radius = c_pball - c_p00;
  let cur_ball_radius2 = c_pball2 - c_p00;
  let cur_botton_radius = c_pbutton - c_p00;
  let cur_botton_radius2 = c_pbutton2 - c_p00;
  let cur_middleline_width = c_pmiddleline - c_p00;
 
      /* first compute the points to be drawn */

      let x_pos = p5.map(pos_x, x1, x2, 0, 256);
      let y_pos = p5.map(pos_y, y1, y2, 0, 256);

      let start_line = x_pos-cur_ball_radius/2;
      let end_line = x_pos+cur_ball_radius/2;
 
      // p5.noStroke();
      p5.stroke(10);
      //bottom arc
      p5.fill(255,0,0);
      // p5.stroke(10);
      p5.arc(x_pos, y_pos, cur_ball_radius,cur_ball_radius, 0, 180);

      //middle line
      p5.push();
      p5.strokeWeight(cur_middleline_width);
      p5.stroke(50);
      p5.line(start_line, y_pos, end_line, y_pos);
      //white line for the ball
      p5.stroke(250);
      p5.arc(x_pos, y_pos, cur_ball_radius2,cur_ball_radius2, 100, 115);
      p5.arc(x_pos, y_pos, cur_ball_radius2,cur_ball_radius2, 125, 155);
      p5.pop();    

      let botton_x = p5.map(pos_x, x1, x2, 0, 256);
      let botton_y = p5.map(pos_y+10, y1, y2, 0, 256);

      //middle big button
      p5.fill(255);
      p5.ellipse(botton_x, botton_y, cur_botton_radius/3*2);
      //middle inner small button
      p5.noStroke();
      p5.fill(255,0,0);
      p5.ellipse(botton_x, botton_y, cur_botton_radius2/3*2);

}




function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
      p5.angleMode(p5.DEGREES);
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness + max_movement;
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;
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

  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let c_pball2 = p5.map(ball_radius2, x1, x2, 0, 256);
  let c_pbutton = p5.map(button_radius, x1, x2, 0, 256);
  let c_pbutton2 = p5.map(button_radius2, x1, x2, 0, 256);

  let cur_ball_radius = c_pball - c_p00;
  let cur_ball_radius2 = c_pball2 - c_p00;
  let cur_botton_radius = c_pbutton - c_p00;
  let cur_botton_radius2 = c_pbutton2 - c_p00;

  p5.background(250);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */

      let shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      let start_line = x_pos-cur_ball_radius/2;
      let end_line = x_pos+cur_ball_radius/2;
 



   /* now draw all elements from back to front */
      if (zoom < 1) {
      p5.noStroke();
      //bottom arc
      p5.stroke(10);
      p5.fill(255,0,0);
      p5.arc(x_pos, y_pos, cur_ball_radius,cur_ball_radius, 0, 180);
      //top arc
      p5.fill(255);
      p5.arc(x_pos, y_pos, cur_ball_radius,cur_ball_radius, 180,360);

      //middle line
      p5.push();
      p5.strokeWeight(5);
      p5.stroke(50);
      p5.line(start_line, y_pos, end_line, y_pos);
      //white line for the ball
      p5.stroke(250);
      p5.noFill();
      p5.arc(x_pos, y_pos, cur_ball_radius2,cur_ball_radius2, 100, 115);
      p5.arc(x_pos, y_pos, cur_ball_radius2,cur_ball_radius2, 125, 155);
      p5.pop();    

      //middle big button
      p5.fill(255);
      p5.ellipse(x_pos, y_pos, cur_botton_radius);
      //middle small button
      p5.noStroke();
      p5.fill(255,0,0);
      p5.ellipse(x_pos, y_pos, cur_botton_radius2);
      }

      if (zoom == 1) {
        p5.strokeWeight(2);
        drawBall(p5, x1, x2, y1, y2, shift_point[0], shift_point[1]);
      }

      if (zoom == 2) {
        p5.strokeWeight(4);
        drawTail(p5, x1, x2, y1, y2, shift_point[0], shift_point[1],z);
        drawBall(p5, x1, x2, y1, y2, shift_point[0], shift_point[1]);
      }

      if (zoom == 3) {
        drawSleepMarill(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], z);
        drawBall(p5, x1, x2, y1, y2, shift_point[0], shift_point[1]);
      }
      if (zoom >= 4) {
        drawhead(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], z);
        drawBall(p5, x1, x2, y1, y2, shift_point[0], shift_point[1]);
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