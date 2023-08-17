const max_thickness = 200;
const grid_size = 256;
const ball_radius = 13;

let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 512, 512],
  [2, 473.835937500000, 568.513671875000],
  [3, 379.272460937500, 625.728027343750],
  [3, 380.061523437500, 630.379882812500],
  [4, 380.061523437500, 630.379882812500],
  [0, 512.000000000000, 512.000000000000],
]
/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function waves(p5, x, y, x1, x2, y1, y2)  {
  
  let waveM_x = p5.map(x-80, x1, x2, 0, 256);
  let waveM_y = p5.map(y, y1, y2, 0, 256);
  
  let waveM_x1 = p5.map(x-40, x1, x2, 0, 256);
  let waveM_y1 = p5.map(y-30, y1, y2, 0, 256);
  let waveM_x2 = p5.map(x, x1, x2, 0, 256);
  let waveM_y2 = p5.map(y, y1, y2, 0, 256);
  
  let waveM_x3 = p5.map(x+40, x1, x2, 0, 256);
  let waveM_y3 = p5.map(y+30, y1, y2, 0, 256);
  let waveM_x4 = p5.map(x+80, x1, x2, 0, 256);
  let waveM_y4 = p5.map(y, y1, y2, 0, 256);
  
  let waveM_x5 = p5.map(x+40, x1, x2, 0, 256);
  let waveM_y5 = p5.map(y+35, y1, y2, 0, 256);
  let waveM_x6 = p5.map(x, x1, x2, 0, 256);
  let waveM_y6 = p5.map(y+5, y1, y2, 0, 256);
  
  let waveM_x7 = p5.map(x-40, x1, x2, 0, 256);
  let waveM_y7 = p5.map(y-25, y1, y2, 0, 256);
  let waveM_x8 = p5.map(x-80, x1, x2, 0, 256);
  let waveM_y8 = p5.map(y, y1, y2, 0, 256);
  p5.beginShape(); //ONLINE WAVE HORIZONTAL
    p5.vertex(waveM_x, waveM_y)
    p5.quadraticVertex(waveM_x1, waveM_y1, waveM_x2, waveM_y2);
    p5.quadraticVertex(waveM_x3, waveM_y3, waveM_x4, waveM_y4);
    p5.quadraticVertex(waveM_x5, waveM_y5, waveM_x6, waveM_y6);
    p5.quadraticVertex(waveM_x7, waveM_y7, waveM_x8, waveM_y8);
  p5.endShape();

  let waveM1_x = p5.map(x+40, x1, x2, 0, 256);
  let waveM1_y = p5.map(y, y1, y2, 0, 256);
  
  let waveM1_x1 = p5.map(x+80, x1, x2, 0, 256);
  let waveM1_y1 = p5.map(y-30, y1, y2, 0, 256);
  let waveM1_x2 = p5.map(x+120, x1, x2, 0, 256);
  let waveM1_y2 = p5.map(y, y1, y2, 0, 256);
  
  let waveM1_x3 = p5.map(x+160, x1, x2, 0, 256);
  let waveM1_y3 = p5.map(y+30, y1, y2, 0, 256);
  let waveM1_x4 = p5.map(x+200, x1, x2, 0, 256);
  let waveM1_y4 = p5.map(y, y1, y2, 0, 256);
  
  let waveM1_x5 = p5.map(x+160, x1, x2, 0, 256);
  let waveM1_y5 = p5.map(y+35, y1, y2, 0, 256);
  let waveM1_x6 = p5.map(x+120, x1, x2, 0, 256);
  let waveM1_y6 = p5.map(y+5, y1, y2, 0, 256);
  
  let waveM1_x7 = p5.map(x+80, x1, x2, 0, 256);
  let waveM1_y7 = p5.map(y-25, y1, y2, 0, 256);

  let waveM1_x8 = p5.map(x+40, x1, x2, 0, 256);
  let waveM1_y8 = p5.map(y, y1, y2, 0, 256);
  p5.beginShape(); //ONLINE WAVE HORIZONTAL 1
    p5.vertex(waveM1_x, waveM1_y)
    p5.quadraticVertex(waveM1_x1, waveM1_y1, waveM1_x2, waveM1_y2);
    p5.quadraticVertex(waveM1_x3, waveM1_y3, waveM1_x4, waveM1_y4);
    p5.quadraticVertex(waveM1_x5, waveM1_y5, waveM1_x6, waveM1_y6);
    p5.quadraticVertex(waveM1_x7, waveM1_y7, waveM1_x8, waveM1_y8);
  p5.endShape();

  let waveM2_x = p5.map(x-80, x1, x2, 0, 256);
  let waveM2_y = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM2_x1 = p5.map(x-40, x1, x2, 0, 256);
  let waveM2_y1 = p5.map(y+90, y1, y2, 0, 256);
  let waveM2_x2 = p5.map(x, x1, x2, 0, 256);
  let waveM2_y2 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM2_x3 = p5.map(x+40, x1, x2, 0, 256);
  let waveM2_y3 = p5.map(y+150, y1, y2, 0, 256);
  let waveM2_x4 = p5.map(x+80, x1, x2, 0, 256);
  let waveM2_y4 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM2_x5 = p5.map(x+40, x1, x2, 0, 256);
  let waveM2_y5 = p5.map(y+145, y1, y2, 0, 256);
  let waveM2_x6 = p5.map(x, x1, x2, 0, 256);
  let waveM2_y6 = p5.map(y+115, y1, y2, 0, 256);
  
  let waveM2_x7 = p5.map(x-40, x1, x2, 0, 256);
  let waveM2_y7 = p5.map(y+85, y1, y2, 0, 256);
  let waveM2_x8 = p5.map(x-80, x1, x2, 0, 256);
  let waveM2_y8 = p5.map(y+120, y1, y2, 0, 256);
  p5.beginShape(); //MIDDLE WAVE HORIZONTAL 2
    p5.vertex(waveM2_x, waveM2_y)
    p5.quadraticVertex(waveM2_x1, waveM2_y1, waveM2_x2, waveM2_y2);
    p5.quadraticVertex(waveM2_x3, waveM2_y3, waveM2_x4, waveM2_y4);
    p5.quadraticVertex(waveM2_x5, waveM2_y5, waveM2_x6, waveM2_y6);
    p5.quadraticVertex(waveM2_x7, waveM2_y7, waveM2_x8, waveM2_y8);
  p5.endShape();

  let waveM3_x = p5.map(x+40, x1, x2, 0, 256);
  let waveM3_y = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM3_x1 = p5.map(x+80, x1, x2, 0, 256);
  let waveM3_y1 = p5.map(y+90, y1, y2, 0, 256);
  let waveM3_x2 = p5.map(x+120, x1, x2, 0, 256);
  let waveM3_y2 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM3_x3 = p5.map(x+160, x1, x2, 0, 256);
  let waveM3_y3 = p5.map(y+150, y1, y2, 0, 256);
  let waveM3_x4 = p5.map(x+200, x1, x2, 0, 256);
  let waveM3_y4 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveM3_x5 = p5.map(x+160, x1, x2, 0, 256);
  let waveM3_y5 = p5.map(y+145, y1, y2, 0, 256);
  let waveM3_x6 = p5.map(x+120, x1, x2, 0, 256);
  let waveM3_y6 = p5.map(y+115, y1, y2, 0, 256);
  
  let waveM3_x7 = p5.map(x+80, x1, x2, 0, 256);
  let waveM3_y7 = p5.map(y+85, y1, y2, 0, 256);
  let waveM3_x8 = p5.map(x+40, x1, x2, 0, 256);
  let waveM3_y8 = p5.map(y+120, y1, y2, 0, 256);
  p5.beginShape(); //MIDDLE WAVE HORIZONTAL 3
    p5.vertex(waveM3_x, waveM3_y)
    p5.quadraticVertex(waveM3_x1, waveM3_y1, waveM3_x2, waveM3_y2);
    p5.quadraticVertex(waveM3_x3, waveM3_y3, waveM3_x4, waveM3_y4);
    p5.quadraticVertex(waveM3_x5, waveM3_y5, waveM3_x6, waveM3_y6);
    p5.quadraticVertex(waveM3_x7, waveM3_y7, waveM3_x8, waveM3_y8);
  p5.endShape();

  let waveV_x = p5.map(x, x1, x2, 0, 256);
  let waveV_y = p5.map(y+80, y1, y2, 0, 256);
  
  let waveV_x1 = p5.map(x-30, x1, x2, 0, 256);
  let waveV_y1 = p5.map(y+40, y1, y2, 0, 256);
  let waveV_x2 = p5.map(x, x1, x2, 0, 256);
  let waveV_y2 = p5.map(y, y1, y2, 0, 256);
  
  let waveV_x3 = p5.map(x+30, x1, x2, 0, 256);
  let waveV_y3 = p5.map(y-40, y1, y2, 0, 256);
  let waveV_x4 = p5.map(x, x1, x2, 0, 256);
  let waveV_y4 = p5.map(y-80, y1, y2, 0, 256);
  
  let waveV_x5 = p5.map(x+25, x1, x2, 0, 256);
  let waveV_y5 = p5.map(y-40, y1, y2, 0, 256);
  let waveV_x6 = p5.map(x-5, x1, x2, 0, 256);
  let waveV_y6 = p5.map(y, y1, y2, 0, 256);
  
  let waveV_x7 = p5.map(x-35, x1, x2, 0, 256);
  let waveV_y7 = p5.map(y+40, y1, y2, 0, 256);

  let waveV_x8 = p5.map(x, x1, x2, 0, 256);
  let waveV_y8 = p5.map(y+80, y1, y2, 0, 256);
  p5.beginShape(); //ONLINE WAVE VERTICAL 
    p5.vertex(waveV_x, waveV_y)
    p5.quadraticVertex(waveV_x1, waveV_y1, waveV_x2, waveV_y2);
    p5.quadraticVertex(waveV_x3, waveV_y3, waveV_x4, waveV_y4);
    p5.quadraticVertex(waveV_x5, waveV_y5, waveV_x6, waveV_y6);
    p5.quadraticVertex(waveV_x7, waveV_y7, waveV_x8, waveV_y8);
  p5.endShape();

  let waveV1_x = p5.map(x, x1, x2, 0, 256);
  let waveV1_y = p5.map(y+40, y1, y2, 0, 256);
  
  let waveV1_x1 = p5.map(x+30, x1, x2, 0, 256);
  let waveV1_y1 = p5.map(y+80, y1, y2, 0, 256);
  let waveV1_x2 = p5.map(x, x1, x2, 0, 256);
  let waveV1_y2 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveV1_x3 = p5.map(x-30, x1, x2, 0, 256);
  let waveV1_y3 = p5.map(y+160, y1, y2, 0, 256);
  let waveV1_x4 = p5.map(x, x1, x2, 0, 256);
  let waveV1_y4 = p5.map(y+200, y1, y2, 0, 256);
  
  let waveV1_x5 = p5.map(x-35, x1, x2, 0, 256);
  let waveV1_y5 = p5.map(y+160, y1, y2, 0, 256);
  let waveV1_x6 = p5.map(x-5, x1, x2, 0, 256);
  let waveV1_y6 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveV1_x7 = p5.map(x+25, x1, x2, 0, 256);
  let waveV1_y7 = p5.map(y+80, y1, y2, 0, 256);

  let waveV1_x8 = p5.map(x, x1, x2, 0, 256);
  let waveV1_y8 = p5.map(y+40, y1, y2, 0, 256);
  p5.beginShape(); //ONLINE WAVE VERTICAL 1
    p5.vertex(waveV1_x, waveV1_y)
    p5.quadraticVertex(waveV1_x1, waveV1_y1, waveV1_x2, waveV1_y2);
    p5.quadraticVertex(waveV1_x3, waveV1_y3, waveV1_x4, waveV1_y4);
    p5.quadraticVertex(waveV1_x5, waveV1_y5, waveV1_x6, waveV1_y6);
    p5.quadraticVertex(waveV1_x7, waveV1_y7, waveV1_x8, waveV1_y8);
  p5.endShape();

  let waveV2_x = p5.map(x+120, x1, x2, 0, 256);
  let waveV2_y = p5.map(y+80, y1, y2, 0, 256);
  
  let waveV2_x1 = p5.map(x+90, x1, x2, 0, 256);
  let waveV2_y1 = p5.map(y+40, y1, y2, 0, 256);
  let waveV2_x2 = p5.map(x+120, x1, x2, 0, 256);
  let waveV2_y2 = p5.map(y, y1, y2, 0, 256);
  
  let waveV2_x3 = p5.map(x+150, x1, x2, 0, 256);
  let waveV2_y3 = p5.map(y-40, y1, y2, 0, 256);
  let waveV2_x4 = p5.map(x+120, x1, x2, 0, 256);
  let waveV2_y4 = p5.map(y-80, y1, y2, 0, 256);
  
  let waveV2_x5 = p5.map(x+145, x1, x2, 0, 256);
  let waveV2_y5 = p5.map(y-40, y1, y2, 0, 256);
  let waveV2_x6 = p5.map(x+115, x1, x2, 0, 256);
  let waveV2_y6 = p5.map(y, y1, y2, 0, 256);
  
  let waveV2_x7 = p5.map(x+85, x1, x2, 0, 256);
  let waveV2_y7 = p5.map(y+40, y1, y2, 0, 256);

  let waveV2_x8 = p5.map(x+120, x1, x2, 0, 256);
  let waveV2_y8 = p5.map(y+80, y1, y2, 0, 256);
  p5.beginShape(); //MIDDLE WAVE VERTICAL 
    p5.vertex(waveV2_x, waveV2_y)
    p5.quadraticVertex(waveV2_x1, waveV2_y1, waveV2_x2, waveV2_y2);
    p5.quadraticVertex(waveV2_x3, waveV2_y3, waveV2_x4, waveV2_y4);
    p5.quadraticVertex(waveV2_x5, waveV2_y5, waveV2_x6, waveV2_y6);
    p5.quadraticVertex(waveV2_x7, waveV2_y7, waveV2_x8, waveV2_y8);
  p5.endShape();

  let waveV3_x = p5.map(x+120, x1, x2, 0, 256);
  let waveV3_y = p5.map(y+40, y1, y2, 0, 256);
  
  let waveV3_x1 = p5.map(x+150, x1, x2, 0, 256);
  let waveV3_y1 = p5.map(y+80, y1, y2, 0, 256);
  let waveV3_x2 = p5.map(x+120, x1, x2, 0, 256);
  let waveV3_y2 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveV3_x3 = p5.map(x+90, x1, x2, 0, 256);
  let waveV3_y3 = p5.map(y+160, y1, y2, 0, 256);
  let waveV3_x4 = p5.map(x+120, x1, x2, 0, 256);
  let waveV3_y4 = p5.map(y+200, y1, y2, 0, 256);
  
  let waveV3_x5 = p5.map(x+85, x1, x2, 0, 256);
  let waveV3_y5 = p5.map(y+160, y1, y2, 0, 256);
  let waveV3_x6 = p5.map(x+115, x1, x2, 0, 256);
  let waveV3_y6 = p5.map(y+120, y1, y2, 0, 256);
  
  let waveV3_x7 = p5.map(x+145, x1, x2, 0, 256);
  let waveV3_y7 = p5.map(y+80, y1, y2, 0, 256);

  let waveV3_x8 = p5.map(x+120, x1, x2, 0, 256);
  let waveV3_y8 = p5.map(y+40, y1, y2, 0, 256);
  p5.beginShape(); //MIDDLE WAVE VERTICAL 
    p5.vertex(waveV3_x, waveV3_y)
    p5.quadraticVertex(waveV3_x1, waveV3_y1, waveV3_x2, waveV3_y2);
    p5.quadraticVertex(waveV3_x3, waveV3_y3, waveV3_x4, waveV3_y4);
    p5.quadraticVertex(waveV3_x5, waveV3_y5, waveV3_x6, waveV3_y6);
    p5.quadraticVertex(waveV3_x7, waveV3_y7, waveV3_x8, waveV3_y8);
  p5.endShape();

}

function circleWaves(p5,x ,y , x1, x2, y1, y2) {        
//DRAW CIRCLES
let sineWave = p5.sin(p5.globalFrameCount/12);
      let pulse = p5.map(sineWave, -1, 1, 0, 50);
    
  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_ball_radius = c_pball - c_p00;

  //ONLINE HORIZONTAL CIRCLE WAVES
  let circle1_x = p5.map(x-80, x1, x2, 0, 256);
  let circle1_y = p5.map(y, y1, y2, 0, 256);
  p5.ellipse(circle1_x, circle1_y, (cur_ball_radius/7+pulse/-10));
  
  let circle2_x = p5.map(x-70, x1, x2, 0, 256);
  let circle2_y = p5.map(y-6, y1, y2, 0, 256);
  p5.ellipse(circle2_x, circle2_y, (cur_ball_radius/5+pulse/-8));

  let circle3_x = p5.map(x-60, x1, x2, 0, 256);
  let circle3_y = p5.map(y-10, y1, y2, 0, 256);
  p5.ellipse(circle3_x, circle3_y, (cur_ball_radius/4+pulse/-7));

  let circle4_x = p5.map(x-50, x1, x2, 0, 256);
  let circle4_y = p5.map(y-13, y1, y2, 0, 256);
  p5.ellipse(circle4_x, circle4_y, (cur_ball_radius/3+pulse/-6));

  let circle5_x = p5.map(x-40, x1, x2, 0, 256);
  let circle5_y = p5.map(y-14, y1, y2, 0, 256);
  p5.ellipse(circle5_x, circle5_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circle6_x = p5.map(x-30, x1, x2, 0, 256);
  let circle6_y = p5.map(y-13, y1, y2, 0, 256);
  p5.ellipse(circle6_x, circle6_y, (cur_ball_radius/2+pulse/-5));

  let circle7_x = p5.map(x-20, x1, x2, 0, 256);
  let circle7_y = p5.map(y-10, y1, y2, 0, 256);
  p5.ellipse(circle7_x, circle7_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circle8_x = p5.map(x-10, x1, x2, 0, 256);
  let circle8_y = p5.map(y-6, y1, y2, 0, 256);
  p5.ellipse(circle8_x, circle8_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circle9_x = p5.map(x, x1, x2, 0, 256);
  let circle9_y = p5.map(y, y1, y2, 0, 256);
  p5.ellipse(circle9_x, circle9_y, (cur_ball_radius/1.2+pulse/-4.2));

  let circle10_x = p5.map(x+10, x1, x2, 0, 256);
  let circle10_y = p5.map(y+6, y1, y2, 0, 256);
  p5.ellipse(circle10_x, circle10_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circle11_x = p5.map(x+20, x1, x2, 0, 256);
  let circle11_y = p5.map(y+10, y1, y2, 0, 256);
  p5.ellipse(circle11_x, circle11_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circle12_x = p5.map(x+30, x1, x2, 0, 256);
  let circle12_y = p5.map(y+13, y1, y2, 0, 256);
  p5.ellipse(circle12_x, circle12_y, (cur_ball_radius/2+pulse/-5));

  let circle13_x = p5.map(x+40, x1, x2, 0, 256);
  let circle13_y = p5.map(y+14, y1, y2, 0, 256);
  p5.ellipse(circle13_x, circle13_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circle14_x = p5.map(x+50, x1, x2, 0, 256);
  let circle14_y = p5.map(y+13, y1, y2, 0, 256);
  p5.ellipse(circle14_x, circle14_y, (cur_ball_radius/3+pulse/-6));

  let circle15_x = p5.map(x+60, x1, x2, 0, 256);
  let circle15_y = p5.map(y+10, y1, y2, 0, 256);
  p5.ellipse(circle15_x, circle15_y, (cur_ball_radius/4+pulse/-7));//1.8));

  let circle16_x = p5.map(x+70, x1, x2, 0, 256);
  let circle16_y = p5.map(y+6, y1, y2, 0, 256);
  p5.ellipse(circle16_x, circle16_y, (cur_ball_radius/5+pulse/-8));//1.4));

  let circle17_x = p5.map(x+80, x1, x2, 0, 256);
  let circle17_y = p5.map(y, y1, y2, 0, 256);
  p5.ellipse(circle17_x, circle17_y, (cur_ball_radius/7+pulse/-10));//1.2));


  //ONLINE HORIZONTAL CIRCLE WAVES 2
  let circleA1_x = p5.map(x+40, x1, x2, 0, 256);
  let circleA1_y = p5.map(y, y1, y2, 0, 256);
  p5.ellipse(circleA1_x, circleA1_y, (cur_ball_radius/7+pulse/-10));
  
  let circleA2_x = p5.map(x+50, x1, x2, 0, 256);
  let circleA2_y = p5.map(y-6, y1, y2, 0, 256);
  p5.ellipse(circleA2_x, circleA2_y, (cur_ball_radius/5+pulse/-8));

  let circleA3_x = p5.map(x+60, x1, x2, 0, 256);
  let circleA3_y = p5.map(y-10, y1, y2, 0, 256);
  p5.ellipse(circleA3_x, circleA3_y, (cur_ball_radius/4+pulse/-7));

  let circleA4_x = p5.map(x+70, x1, x2, 0, 256);
  let circleA4_y = p5.map(y-13, y1, y2, 0, 256);
  p5.ellipse(circleA4_x, circleA4_y, (cur_ball_radius/3+pulse/-6));

  let circleA5_x = p5.map(x+80, x1, x2, 0, 256);
  let circleA5_y = p5.map(y-14, y1, y2, 0, 256);
  p5.ellipse(circleA5_x, circleA5_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleA6_x = p5.map(x+90, x1, x2, 0, 256);
  let circleA6_y = p5.map(y-13, y1, y2, 0, 256);
  p5.ellipse(circleA6_x, circleA6_y, (cur_ball_radius/2+pulse/-5));

  let circleA7_x = p5.map(x+100, x1, x2, 0, 256);
  let circleA7_y = p5.map(y-10, y1, y2, 0, 256);
  p5.ellipse(circleA7_x, circleA7_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleA8_x = p5.map(x+110, x1, x2, 0, 256);
  let circleA8_y = p5.map(y-6, y1, y2, 0, 256);
  p5.ellipse(circleA8_x, circleA8_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleA9_x = p5.map(x+120, x1, x2, 0, 256);
  let circleA9_y = p5.map(y, y1, y2, 0, 256);
  p5.ellipse(circleA9_x, circleA9_y, (cur_ball_radius/1.2+pulse/-4.2));

  let circleA10_x = p5.map(x+130, x1, x2, 0, 256);
  let circleA10_y = p5.map(y+6, y1, y2, 0, 256);
  p5.ellipse(circleA10_x, circleA10_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleA11_x = p5.map(x+140, x1, x2, 0, 256);
  let circleA11_y = p5.map(y+10, y1, y2, 0, 256);
  p5.ellipse(circleA11_x, circleA11_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleA12_x = p5.map(x+150, x1, x2, 0, 256);
  let circleA12_y = p5.map(y+13, y1, y2, 0, 256);
  p5.ellipse(circleA12_x, circleA12_y, (cur_ball_radius/2+pulse/-5));

  let circleA13_x = p5.map(x+160, x1, x2, 0, 256);
  let circleA13_y = p5.map(y+14, y1, y2, 0, 256);
  p5.ellipse(circleA13_x, circleA13_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleA14_x = p5.map(x+170, x1, x2, 0, 256);
  let circleA14_y = p5.map(y+13, y1, y2, 0, 256);
  p5.ellipse(circleA14_x, circleA14_y, (cur_ball_radius/3+pulse/-6));

  let circleA15_x = p5.map(x+180, x1, x2, 0, 256);
  let circleA15_y = p5.map(y+10, y1, y2, 0, 256);
  p5.ellipse(circleA15_x, circleA15_y, (cur_ball_radius/4+pulse/-7));

  let circleA16_x = p5.map(x+190, x1, x2, 0, 256);
  let circleA16_y = p5.map(y+6, y1, y2, 0, 256);
  p5.ellipse(circleA16_x, circleA16_y, (cur_ball_radius/5+pulse/-8));

  let circleA17_x = p5.map(x+200, x1, x2, 0, 256);
  let circleA17_y = p5.map(y, y1, y2, 0, 256);
  p5.ellipse(circleA17_x, circleA17_y, (cur_ball_radius/7+pulse/-10));

  // HORIZONTAL CIRCLE WAVES
  let circleB1_x = p5.map(x-80, x1, x2, 0, 256);
  let circleB1_y = p5.map(y+120, y1, y2, 0, 256);
  p5.ellipse(circleB1_x, circleB1_y, (cur_ball_radius/7+pulse/-10));
  
  let circleB2_x = p5.map(x-70, x1, x2, 0, 256);
  let circleB2_y = p5.map(y-143, y1, y2, 0, 256);
  p5.ellipse(circleB2_x, circleB2_y, (cur_ball_radius/5+pulse/-8));

  let circleB3_x = p5.map(x-60, x1, x2, 0, 256);
  let circleB3_y = p5.map(y-149, y1, y2, 0, 256);
  p5.ellipse(circleB3_x, circleB3_y, (cur_ball_radius/4+pulse/-7));

  let circleB4_x = p5.map(x-50, x1, x2, 0, 256);
  let circleB4_y = p5.map(y-153, y1, y2, 0, 256);
  p5.ellipse(circleB4_x, circleB4_y, (cur_ball_radius/3+pulse/-6));

  let circleB5_x = p5.map(x-40, x1, x2, 0, 256);
  let circleB5_y = p5.map(y-154, y1, y2, 0, 256);
  p5.ellipse(circleB5_x, circleB5_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleB6_x = p5.map(x-30, x1, x2, 0, 256);
  let circleB6_y = p5.map(y-153, y1, y2, 0, 256);
  p5.ellipse(circleB6_x, circleB6_y, (cur_ball_radius/2+pulse/-5));

  let circleB7_x = p5.map(x-20, x1, x2, 0, 256);
  let circleB7_y = p5.map(y-149, y1, y2, 0, 256);
  p5.ellipse(circleB7_x, circleB7_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleB8_x = p5.map(x-10, x1, x2, 0, 256);
  let circleB8_y = p5.map(y-143, y1, y2, 0, 256);
  p5.ellipse(circle8_x, circleB8_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleB9_x = p5.map(x, x1, x2, 0, 256);
  let circleB9_y = p5.map(y+120, y1, y2, 0, 256);
  p5.ellipse(circleB9_x, circleB9_y, (cur_ball_radius/1.2+pulse/-4.2));

  let circleB10_x = p5.map(x+10, x1, x2, 0, 256);
  let circleB10_y = p5.map(y+126, y1, y2, 0, 256);
  p5.ellipse(circleB10_x, circleB10_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleB11_x = p5.map(x+20, x1, x2, 0, 256);
  let circleB11_y = p5.map(y+130, y1, y2, 0, 256);
  p5.ellipse(circleB11_x, circleB11_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleB12_x = p5.map(x+30, x1, x2, 0, 256);
  let circleB12_y = p5.map(y+132, y1, y2, 0, 256);
  p5.ellipse(circleB12_x, circleB12_y, (cur_ball_radius/2+pulse/-5));

  let circleB13_x = p5.map(x+40, x1, x2, 0, 256);
  let circleB13_y = p5.map(y+133, y1, y2, 0, 256);
  p5.ellipse(circle13_x, circleB13_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleB14_x = p5.map(x+50, x1, x2, 0, 256);
  let circleB14_y = p5.map(y+132, y1, y2, 0, 256);
  p5.ellipse(circleB14_x, circleB14_y, (cur_ball_radius/3+pulse/-6));

  let circleB15_x = p5.map(x+60, x1, x2, 0, 256);
  let circleB15_y = p5.map(y+130, y1, y2, 0, 256);
  p5.ellipse(circleB15_x, circleB15_y, (cur_ball_radius/4+pulse/-7));

  let circleB16_x = p5.map(x+70, x1, x2, 0, 256);
  let circleB16_y = p5.map(y+126, y1, y2, 0, 256);
  p5.ellipse(circleB16_x, circleB16_y, (cur_ball_radius/5+pulse/-8));

  let circleB17_x = p5.map(x+80, x1, x2, 0, 256);
  let circleB17_y = p5.map(y+120, y1, y2, 0, 256);
  p5.ellipse(circleB17_x, circleB17_y, (cur_ball_radius/7+pulse/-10));

    // HORIZONTAL CIRCLE WAVES 2
  let circleC1_x = p5.map(x+40, x1, x2, 0, 256);
  let circleC1_y = p5.map(y+120, y1, y2, 0, 256);
  p5.ellipse(circleC1_x, circleC1_y, (cur_ball_radius/7+pulse/-10));
  
  let circleC2_x = p5.map(x+50, x1, x2, 0, 256);
  let circleC2_y = p5.map(y-143, y1, y2, 0, 256);
  p5.ellipse(circleC2_x, circleC2_y, (cur_ball_radius/5+pulse/-8));

  let circleC3_x = p5.map(x+60, x1, x2, 0, 256);
  let circleC3_y = p5.map(y-149, y1, y2, 0, 256);
  p5.ellipse(circleC3_x, circleC3_y, (cur_ball_radius/4+pulse/-7));

  let circleC4_x = p5.map(x+70, x1, x2, 0, 256);
  let circleC4_y = p5.map(y-153, y1, y2, 0, 256);
  p5.ellipse(circleC4_x, circleC4_y, (cur_ball_radius/3+pulse/-6));

  let circleC5_x = p5.map(x+80, x1, x2, 0, 256);
  let circleC5_y = p5.map(y-154, y1, y2, 0, 256);
  p5.ellipse(circleC5_x, circleC5_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleC6_x = p5.map(x+90, x1, x2, 0, 256);
  let circleC6_y = p5.map(y-153, y1, y2, 0, 256);
  p5.ellipse(circleC6_x, circleC6_y, (cur_ball_radius/2.5+pulse/-5));

  let circleC7_x = p5.map(x+100, x1, x2, 0, 256);
  let circleC7_y = p5.map(y-149, y1, y2, 0, 256);
  p5.ellipse(circleC7_x, circleC7_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleC8_x = p5.map(x+110, x1, x2, 0, 256);
  let circleC8_y = p5.map(y-143, y1, y2, 0, 256);
  p5.ellipse(circleC8_x, circleC8_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleC9_x = p5.map(x+120, x1, x2, 0, 256);
  let circleC9_y = p5.map(y+120, y1, y2, 0, 256);
  p5.ellipse(circleC9_x, circleC9_y, (cur_ball_radius/1.2+pulse/-4.2));

  let circleC10_x = p5.map(x+130, x1, x2, 0, 256);
  let circleC10_y = p5.map(y+126, y1, y2, 0, 256);
  p5.ellipse(circleC10_x, circleC10_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleC11_x = p5.map(x+140, x1, x2, 0, 256);
  let circleC11_y = p5.map(y+130, y1, y2, 0, 256);
  p5.ellipse(circleC11_x, circleC11_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleC12_x = p5.map(x+150, x1, x2, 0, 256);
  let circleC12_y = p5.map(y+132, y1, y2, 0, 256);
  p5.ellipse(circleC12_x, circleC12_y, (cur_ball_radius/2.5+pulse/-5));

  let circleC13_x = p5.map(x+160, x1, x2, 0, 256);
  let circleC13_y = p5.map(y+133, y1, y2, 0, 256);
  p5.ellipse(circleC13_x, circleC13_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleC14_x = p5.map(x+170, x1, x2, 0, 256);
  let circleC14_y = p5.map(y+132, y1, y2, 0, 256);
  p5.ellipse(circleC14_x, circleC14_y, (cur_ball_radius/3+pulse/-6));

  let circleC15_x = p5.map(x+180, x1, x2, 0, 256);
  let circleC15_y = p5.map(y+130, y1, y2, 0, 256);
  p5.ellipse(circleC15_x, circleC15_y, (cur_ball_radius/4+pulse/-7));

  let circleC16_x = p5.map(x+190, x1, x2, 0, 256);
  let circleC16_y = p5.map(y+126, y1, y2, 0, 256);
  p5.ellipse(circleC16_x, circleC16_y, (cur_ball_radius/5+pulse/-8));

  let circleC17_x = p5.map(x+200, x1, x2, 0, 256);
  let circleC17_y = p5.map(y+120, y1, y2, 0, 256);
  p5.ellipse(circleC17_x, circleC17_y, (cur_ball_radius/7+pulse/-10));


  //VERTICAL CIRCLE WAVES 

  let circleD1_x = p5.map(x+120, x1, x2, 0, 256);
  let circleD1_y = p5.map(y+200, y1, y2, 0, 256);
  p5.ellipse(circleD1_x, circleD1_y, (cur_ball_radius/7+pulse/-10));
  
  let circleD2_x = p5.map(x+113, x1, x2, 0, 256);
  let circleD2_y = p5.map(y+190, y1, y2, 0, 256);
  p5.ellipse(circleD2_x, circleD2_y, (cur_ball_radius/5+pulse/-8));

  let circleD3_x = p5.map(x+107, x1, x2, 0, 256);
  let circleD3_y = p5.map(y+180, y1, y2, 0, 256);
  p5.ellipse(circleD3_x, circleD3_y, (cur_ball_radius/4+pulse/-7));

  let circleD4_x = p5.map(x+104, x1, x2, 0, 256);
  let circleD4_y = p5.map(y+170, y1, y2, 0, 256);
  p5.ellipse(circleD4_x, circleD4_y, (cur_ball_radius/3+pulse/-6));

  let circleD5_x = p5.map(x+103, x1, x2, 0, 256);
  let circleD5_y = p5.map(y+160, y1, y2, 0, 256);
  p5.ellipse(circleD5_x, circleD5_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleD6_x = p5.map(x+104, x1, x2, 0, 256);
  let circleD6_y = p5.map(y+150, y1, y2, 0, 256);
  p5.ellipse(circleD6_x, circleD6_y, (cur_ball_radius/2+pulse/-5));

  let circleD7_x = p5.map(x+107, x1, x2, 0, 256);
  let circleD7_y = p5.map(y+140, y1, y2, 0, 256);
  p5.ellipse(circleD7_x, circleD7_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleD8_x = p5.map(x+113, x1, x2, 0, 256);
  let circleD8_y = p5.map(y+130, y1, y2, 0, 256);
  p5.ellipse(circleD8_x, circleD8_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleD9_x = p5.map(x+120, x1, x2, 0, 256);
  let circleD9_y = p5.map(y+120, y1, y2, 0, 256);
  p5.ellipse(circleD9_x, circleD9_y, (cur_ball_radius/1.2+pulse/-4.2));

  let circleD10_x = p5.map(x+127, x1, x2, 0, 256);
  let circleD10_y = p5.map(y+110, y1, y2, 0, 256);
  p5.ellipse(circleD10_x, circleD10_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleD11_x = p5.map(x+133, x1, x2, 0, 256);
  let circleD11_y = p5.map(y+100, y1, y2, 0, 256);
  p5.ellipse(circleD11_x, circleD11_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleD12_x = p5.map(x+136, x1, x2, 0, 256);
  let circleD12_y = p5.map(y+90, y1, y2, 0, 256);
  p5.ellipse(circleD12_x, circleD12_y, (cur_ball_radius/2+pulse/-5));

  let circleD13_x = p5.map(x+137, x1, x2, 0, 256);
  let circleD13_y = p5.map(y+80, y1, y2, 0, 256);
  p5.ellipse(circleD13_x, circleD13_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleD14_x = p5.map(x+136, x1, x2, 0, 256);
  let circleD14_y = p5.map(y+70, y1, y2, 0, 256);
  p5.ellipse(circleD14_x, circleD14_y, (cur_ball_radius/3+pulse/-6));

  let circleD15_x = p5.map(x+133, x1, x2, 0, 256);
  let circleD15_y = p5.map(y+60, y1, y2, 0, 256);
  p5.ellipse(circleD15_x, circleD15_y, (cur_ball_radius/4+pulse/-7));

  let circleD16_x = p5.map(x+127, x1, x2, 0, 256);
  let circleD16_y = p5.map(y+50, y1, y2, 0, 256);
  p5.ellipse(circleD16_x, circleD16_y, (cur_ball_radius/5+pulse/-8));

  let circleD17_x = p5.map(x+120, x1, x2, 0, 256);
  let circleD17_y = p5.map(y+40, y1, y2, 0, 256);
  p5.ellipse(circleD17_x, circleD17_y, (cur_ball_radius/7+pulse/-10));



  //VERTICAL CIRCLE WAVES 2
  let circleE1_x = p5.map(x+120, x1, x2, 0, 256);
  let circleE1_y = p5.map(y+80, y1, y2, 0, 256);
  p5.ellipse(circleE1_x, circleE1_y, (cur_ball_radius/7+pulse/-10));
  
  let circleE2_x = p5.map(x+113, x1, x2, 0, 256);
  let circleE2_y = p5.map(y+70, y1, y2, 0, 256);
  p5.ellipse(circleE2_x, circleE2_y, (cur_ball_radius/5+pulse/-8));

  let circleE3_x = p5.map(x+107, x1, x2, 0, 256);
  let circleE3_y = p5.map(y+60, y1, y2, 0, 256);
  p5.ellipse(circleE3_x, circleE3_y, (cur_ball_radius/4+pulse/-7));

  let circleE4_x = p5.map(x+104, x1, x2, 0, 256);
  let circleE4_y = p5.map(y+50, y1, y2, 0, 256);
  p5.ellipse(circleE4_x, circleE4_y, (cur_ball_radius/3+pulse/-6));

  let circleE5_x = p5.map(x+103, x1, x2, 0, 256);
  let circleE5_y = p5.map(y+40, y1, y2, 0, 256);
  p5.ellipse(circleE5_x, circleE5_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleE6_x = p5.map(x+104, x1, x2, 0, 256);
  let circleE6_y = p5.map(y+30, y1, y2, 0, 256);
  p5.ellipse(circleE6_x, circleE6_y, (cur_ball_radius/2+pulse/-5));

  let circleE7_x = p5.map(x+107, x1, x2, 0, 256);
  let circleE7_y = p5.map(y+20, y1, y2, 0, 256);
  p5.ellipse(circleE7_x, circleE7_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleE8_x = p5.map(x+113, x1, x2, 0, 256);
  let circleE8_y = p5.map(y+10, y1, y2, 0, 256);
  p5.ellipse(circleE8_x, circleE8_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleE9_x = p5.map(x+120, x1, x2, 0, 256);
  let circleE9_y = p5.map(y, y1, y2, 0, 256);
  p5.ellipse(circleE9_x, circleE9_y, (cur_ball_radius/1.2+pulse/-4.2));

  let circleE10_x = p5.map(x+127, x1, x2, 0, 256);
  let circleE10_y = p5.map(y-10, y1, y2, 0, 256);
  p5.ellipse(circleE10_x, circleE10_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleE11_x = p5.map(x+133, x1, x2, 0, 256);
  let circleE11_y = p5.map(y-20, y1, y2, 0, 256);
  p5.ellipse(circleE11_x, circleE11_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleE12_x = p5.map(x+136, x1, x2, 0, 256);
  let circleE12_y = p5.map(y-30, y1, y2, 0, 256);
  p5.ellipse(circleE12_x, circleE12_y, (cur_ball_radius/2+pulse/-5));

  let circleE13_x = p5.map(x+137, x1, x2, 0, 256);
  let circleE13_y = p5.map(y-40, y1, y2, 0, 256);
  p5.ellipse(circleE13_x, circleE13_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleE14_x = p5.map(x+136, x1, x2, 0, 256);
  let circleE14_y = p5.map(y-50, y1, y2, 0, 256);
  p5.ellipse(circleE14_x, circleE14_y, (cur_ball_radius/3+pulse/-6));

  let circleE15_x = p5.map(x+133, x1, x2, 0, 256);
  let circleE15_y = p5.map(y-60, y1, y2, 0, 256);
  p5.ellipse(circleE15_x, circleE15_y, (cur_ball_radius/4+pulse/-7));

  let circleE16_x = p5.map(x+127, x1, x2, 0, 256);
  let circleE16_y = p5.map(y-70, y1, y2, 0, 256);
  p5.ellipse(circleE16_x, circleE16_y, (cur_ball_radius/5+pulse/-8));

  let circleE17_x = p5.map(x+120, x1, x2, 0, 256);
  let circleE17_y = p5.map(y-80, y1, y2, 0, 256);
  p5.ellipse(circleE17_x, circleE17_y, (cur_ball_radius/7+pulse/-10));

  //VERTICAL CIRCLE WAVES 3
  let circleF1_x = p5.map(x, x1, x2, 0, 256);
  let circleF1_y = p5.map(y+80, y1, y2, 0, 256);
  p5.ellipse(circleF1_x, circleF1_y, (cur_ball_radius/7+pulse/-10));
  
  let circleF2_x = p5.map(x-7, x1, x2, 0, 256);
  let circleF2_y = p5.map(y+70, y1, y2, 0, 256);
  p5.ellipse(circleF2_x, circleF2_y, (cur_ball_radius/5+pulse/-8));

  let circleF3_x = p5.map(x-13, x1, x2, 0, 256);
  let circleF3_y = p5.map(y+60, y1, y2, 0, 256);
  p5.ellipse(circleF3_x, circleF3_y, (cur_ball_radius/4+pulse/-7));

  let circleF4_x = p5.map(x-16, x1, x2, 0, 256);
  let circleF4_y = p5.map(y+50, y1, y2, 0, 256);
  p5.ellipse(circleF4_x, circleF4_y, (cur_ball_radius/3+pulse/-6));

  let circleF5_x = p5.map(x-17, x1, x2, 0, 256);
  let circleF5_y = p5.map(y+40, y1, y2, 0, 256);
  p5.ellipse(circleF5_x, circleF5_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleF6_x = p5.map(x-16, x1, x2, 0, 256);
  let circleF6_y = p5.map(y+30, y1, y2, 0, 256);
  p5.ellipse(circleF6_x, circleF6_y, (cur_ball_radius/2+pulse/-5));

  let circleF7_x = p5.map(x-13, x1, x2, 0, 256);
  let circleF7_y = p5.map(y+20, y1, y2, 0, 256);
  p5.ellipse(circleF7_x, circleF7_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleF8_x = p5.map(x-7, x1, x2, 0, 256);
  let circleF8_y = p5.map(y+10, y1, y2, 0, 256);
  p5.ellipse(circleF8_x, circleF8_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleF9_x = p5.map(x, x1, x2, 0, 256);
  let circleF9_y = p5.map(y, y1, y2, 0, 256);
  p5.ellipse(circleF9_x, circleF9_y, (cur_ball_radius/1.2+pulse/-4.2));

  let circleF10_x = p5.map(x+7, x1, x2, 0, 256);
  let circleF10_y = p5.map(y-10, y1, y2, 0, 256);
  p5.ellipse(circleF10_x, circleF10_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleF11_x = p5.map(x+13, x1, x2, 0, 256);
  let circleF11_y = p5.map(y-20, y1, y2, 0, 256);
  p5.ellipse(circleF11_x, circleF11_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleF12_x = p5.map(x+16, x1, x2, 0, 256);
  let circleF12_y = p5.map(y-30, y1, y2, 0, 256);
  p5.ellipse(circleF12_x, circleF12_y, (cur_ball_radius/2+pulse/-5));

  let circleF13_x = p5.map(x+17, x1, x2, 0, 256);
  let circleF13_y = p5.map(y-40, y1, y2, 0, 256);
  p5.ellipse(circleF13_x, circleF13_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleF14_x = p5.map(x+16, x1, x2, 0, 256);
  let circleF14_y = p5.map(y-50, y1, y2, 0, 256);
  p5.ellipse(circleF14_x, circleF14_y, (cur_ball_radius/3+pulse/-6));

  let circleF15_x = p5.map(x+13, x1, x2, 0, 256);
  let circleF15_y = p5.map(y-60, y1, y2, 0, 256);
  p5.ellipse(circleF15_x, circleF15_y, (cur_ball_radius/4+pulse/-7));

  let circleF16_x = p5.map(x+7, x1, x2, 0, 256);
  let circleF16_y = p5.map(y-70, y1, y2, 0, 256);
  p5.ellipse(circleF16_x, circleF16_y, (cur_ball_radius/5+pulse/-8));

  let circleF17_x = p5.map(x, x1, x2, 0, 256);
  let circleF17_y = p5.map(y-80, y1, y2, 0, 256);
  p5.ellipse(circleF17_x, circleF17_y, (cur_ball_radius/7+pulse/-10));

  //VERTICAL CIRCLE WAVES 4
  let circleG1_x = p5.map(x, x1, x2, 0, 256);
  let circleG1_y = p5.map(y+200, y1, y2, 0, 256);
  p5.ellipse(circleG1_x, circleG1_y, (cur_ball_radius/7+pulse/-10));
  
  let circleG2_x = p5.map(x-7, x1, x2, 0, 256);
  let circleG2_y = p5.map(y+190, y1, y2, 0, 256);
  p5.ellipse(circleG2_x, circleG2_y, (cur_ball_radius/5+pulse/-8));

  let circleG3_x = p5.map(x-13, x1, x2, 0, 256);
  let circleG3_y = p5.map(y+180, y1, y2, 0, 256);
  p5.ellipse(circleG3_x, circleG3_y, (cur_ball_radius/4+pulse/-7));

  let circleG4_x = p5.map(x-16, x1, x2, 0, 256);
  let circleG4_y = p5.map(y+170, y1, y2, 0, 256);
  p5.ellipse(circleG4_x, circleG4_y, (cur_ball_radius/3+pulse/-6));

  let circleG5_x = p5.map(x-17, x1, x2, 0, 256);
  let circleG5_y = p5.map(y+160, y1, y2, 0, 256);
  p5.ellipse(circleG5_x, circleG5_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleG6_x = p5.map(x-16, x1, x2, 0, 256);
  let circleG6_y = p5.map(y+150, y1, y2, 0, 256);
  p5.ellipse(circleG6_x, circleG6_y, (cur_ball_radius/2+pulse/-5));

  let circleG7_x = p5.map(x-13, x1, x2, 0, 256);
  let circleG7_y = p5.map(y+140, y1, y2, 0, 256);
  p5.ellipse(circleG7_x, circleG7_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleG8_x = p5.map(x-7, x1, x2, 0, 256);
  let circleG8_y = p5.map(y+130, y1, y2, 0, 256);
  p5.ellipse(circleG8_x, circleG8_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleG9_x = p5.map(x, x1, x2, 0, 256);
  let circleG9_y = p5.map(y+120, y1, y2, 0, 256);
  p5.ellipse(circleG9_x, circleF9_y, (cur_ball_radius/1.2+pulse/-4.2));

  let circleG10_x = p5.map(x+7, x1, x2, 0, 256);
  let circleG10_y = p5.map(y+110, y1, y2, 0, 256);
  p5.ellipse(circleG10_x, circleG10_y, (cur_ball_radius/1.4+pulse/-4.4));

  let circleG11_x = p5.map(x+13, x1, x2, 0, 256);
  let circleG11_y = p5.map(y+100, y1, y2, 0, 256);
  p5.ellipse(circleG11_x, circleG11_y, (cur_ball_radius/1.8+pulse/-4.8));

  let circleG12_x = p5.map(x+16, x1, x2, 0, 256);
  let circleG12_y = p5.map(y+90, y1, y2, 0, 256);
  p5.ellipse(circleG12_x, circleG12_y, (cur_ball_radius/2+pulse/-5));

  let circleG13_x = p5.map(x+17, x1, x2, 0, 256);
  let circleG13_y = p5.map(y+80, y1, y2, 0, 256);
  p5.ellipse(circleG13_x, circleG13_y, (cur_ball_radius/2.5+pulse/-5.5));

  let circleG14_x = p5.map(x+16, x1, x2, 0, 256);
  let circleG14_y = p5.map(y+70, y1, y2, 0, 256);
  p5.ellipse(circleG14_x, circleG14_y, (cur_ball_radius/3+pulse/-6));

  let circleG15_x = p5.map(x+13, x1, x2, 0, 256);
  let circleG15_y = p5.map(y+60, y1, y2, 0, 256);
  p5.ellipse(circleG15_x, circleG15_y, (cur_ball_radius/4+pulse/-7));

  let circleG16_x = p5.map(x+7, x1, x2, 0, 256);
  let circleG16_y = p5.map(y+50, y1, y2, 0, 256);
  p5.ellipse(circleG16_x, circleG16_y, (cur_ball_radius/5+pulse/-8));

  let circleG17_x = p5.map(x, x1, x2, 0, 256);
  let circleG17_y = p5.map(y+40, y1, y2, 0, 256);
  p5.ellipse(circleG17_x, circleG17_y, (cur_ball_radius/7+pulse/-10));

}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;
    
  p5.background('white');
    
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;
    
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);    
    
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
          
      // p5.stroke('#8ec5fb');
      // p5.fill('#8ec5fb');
      // p5.strokeWeight(2);
      // circleWaves(p5, x,y, x1, x2, y1, y2);

      if (zoom < 3 ) { //>= 4
        // LIGHT BLUE
        p5.stroke('#d2e7fd');
        p5.fill('#d2e7fd');
        p5.strokeWeight(2);
        circleWaves(p5, x-5, y-5, x1, x2, y1, y2);  
        // MID BLUE
        p5.stroke('#aed8fb');
        p5.fill('#aed8fb');
        p5.strokeWeight(2);
        circleWaves(p5, x, y, x1, x2, y1, y2);
        //DARK BLUE
        p5.stroke('#8ec5fb');
        p5.fill('#8ec5fb');
        p5.strokeWeight(2);
        circleWaves(p5, x+5, y+5, x1, x2, y1, y2);
      }
      if (zoom == 3) { //3
        // LIGHT BLUE
        p5.stroke('#d2e7fd');
        p5.fill('#d2e7fd');
        p5.strokeWeight(2);
        circleWaves(p5, x-2, y -2, x1, x2, y1, y2);  
        // MID BLUE
        p5.stroke('#aed8fb');
        p5.fill('#aed8fb');
        p5.strokeWeight(2);
        circleWaves(p5, x, y, x1, x2, y1, y2);
        //DARK BLUE
        p5.stroke('#8ec5fb');
        p5.fill('#8ec5fb');
        p5.strokeWeight(2);
        circleWaves(p5, x+2, y+2, x1, x2, y1, y2);
      }
      if (zoom == 4) { //2
        //LIGHT BLUE
        p5.stroke('#d2e7fd');
        p5.fill('#d2e7fd');
        p5.strokeWeight(2);
        waves(p5, x-2, y-2, x1, x2, y1, y2);
        //MID BLUE
        p5.stroke('#aed8fb');
        p5.fill('#aed8fb');
        p5.strokeWeight(2);
        waves(p5, x, y, x1, x2, y1, y2);
        //DARK BLUE
        p5.stroke('#8ec5fb');
        p5.fill('#8ec5fb');
        p5.strokeWeight(2);
        waves(p5, x+2, y+2, x1, x2, y1, y2);
      }
      if (zoom >= 5) { //< 2
        //DARK BLUE
        p5.stroke('#8ec5fb');
        p5.fill('#8ec5fb');
        p5.strokeWeight(2);
        waves(p5, x-2, y-2, x1, x2, y1, y2);
        waves(p5, x, y, x1, x2, y1, y2);
        waves(p5, x+2, y+2, x1, x2, y1, y2);
      }       
    }
  }

  //debug - show border

  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}
