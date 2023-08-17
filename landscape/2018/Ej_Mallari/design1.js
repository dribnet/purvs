let num_across = 22;
const color_1 = [113, 103, 114];
const color_2 = [82, 81, 99];
const stroke_color1 = [82, 81, 99];

const frameMax = 250;
let recording = false;
let gifRecorder = null;
let buffersPerFrame = 10;


function setup () {
  createCanvas(960, 480);
  background(168, 168, 168);
  angleMode(DEGREES);  
  rectMode(CENTER);
}


function mousePressed() {
  // if(recording == false) {
  //   recording = true;
  //  gifRecorder = new p5recorder(frameMax, "wallpaper.gif", 25, 0, buffersPerFrame);
  //    // gifRecorder = new p5recorder(frameMax, "wallpaper.gif");
  // }
}

function draw () {
 
  let loopLength = frameMax;
  if(recording) {
    loopLength = frameMax * buffersPerFrame;
  }
  let cur_frame = frameCount % loopLength;
  


  // let curMillis = millis();
 // let four_second_loop = curMillis % 8000;
  //let cur_frac = map(four_second_loop, 0, 8000, 0, 1);

  let cur_frac = map(cur_frame, 0, loopLength, 0, 1);

  let cur_frac_color = map(cur_frac, 0, 1, 0, 1);
  let cur_degrees = map(cur_frac, 0, 1, 0, 360);  
  let cur_degrees_color = map(cur_frac_color, 0, 2, 0, 360); 
  let cur_degrees_2 = map(cur_frac, 0, 1, 0, 360);
  let cur_degrees_3 = map(cur_frac, 0, 1, 0, 360);
  let cur_degrees_4 = map(cur_frac, 0, 1, 0, 360);

  let color_value = sin(cur_degrees_color);
  let color_A = color(255, 255, 255);
  let color_B = color(254, 234, 229);
  let bg_color_curl = lerpColor(color_A, color_B, color_value);
  background(bg_color_curl);
  ellipseMode(RADIUS);



//Hue change depending on this section...

  if(cur_degrees > 180) {
    cur_degrees =  360 - cur_degrees;
  }
  cur_degrees =  -180 - cur_degrees;

  if(cur_degrees_2 > 180) {
    cur_degrees_2 = 360 - cur_degrees_2;
  }
  cur_degrees_2 = cur_degrees_2 + 180; 

//cur degrees for outter circle
  if(cur_degrees_3 > 180){
    cur_degrees_3 = cur_degrees_3 - 360;
  }
  cur_degrees_3 = cur_degrees_3 +180;

   if(cur_degrees_4 < 180){
    cur_degrees_4 =  cur_degrees_4 + 360;
  }
  cur_degrees_4 =  180 - cur_degrees_4 ;


  // print(cur_degrees)
  let sin_value = sin(cur_degrees);
  let sin_value_2 = sin(cur_degrees_2);
  let sin_value_3 = sin(cur_degrees_3);
  let sin_value_4 = sin(cur_degrees_4);
  let cos_value = cos(cur_degrees);
  let cos_value_2 = cos(cur_degrees_2);
  let cos_value_3 = cos(cur_degrees_3);
  let cos_value_4 = cos(cur_degrees_4);

  stroke(stroke_color1);
  strokeWeight(3);
  noFill();
  ellipse(480, 290, 130, 130);
  ellipse(480, 290, 160, 160);

  //Shapes
  //outter circles & lines
  noFill();
  stroke(stroke_color1);
  strokeWeight(3);
  ellipse(700, 100, 80, 80);
  ellipse(700, 100, 40, 40);

  ellipse(250, 100, 80, 80);
  ellipse(250, 100, 40, 40);

  ellipse(800, 350, 80, 80);
  ellipse(800, 350, 40, 40);

  ellipse(150, 350, 80, 80);
  ellipse(150, 350, 40, 40);

  ellipse(80, 185, 60, 60);
  ellipse(870, 185, 60, 60);


  line(165, 270, 220, 175);
  line(725, 175, 780, 270);

  line(130, 150, 175, 130);
  line(100, 240, 110, 280);

  line(815, 160, 770, 135);
  line(850, 240, 840, 280);  


  let color_sin_value = sin(cur_degrees);
  let from = color(255, 255, 255);
  let to = color(223, 191, 192);

  //Circle body
  noStroke();
  let cur_color = lerpColor(from, to, color_sin_value);
  fill(cur_color);
  ellipse(480, 290, 100,100);
  stroke(stroke_color1);
  strokeWeight(3);
  ellipse(80, 185, 30, 30);
  ellipse(870, 185, 30, 30);
  fill(color_1);
  ellipse(700, 100, 20, 20);
  ellipse(250, 100, 20, 20);
  ellipse(800, 350, 20, 20);
  ellipse(150, 350, 20, 20);
  noStroke();
  fill(bg_color_curl);
  ellipse(480, 290, 50, 50); 
  

  //Circle Lines
  fill(color_2);
  let radius = 160;
  let radius_2 = 160;
  let radius_3 = 130;
  let radius_4 = 130;
  let radius_5 = 40;
  var rotate = 0;
  noStroke();

  //inner animated circles
  ellipse(480 + radius*sin_value, 290 + radius*cos_value, 10, 10);
  ellipse(480 + radius_2*sin_value_2, 290 + radius_2*cos_value_2, 10, 10);
  ellipse(480 + radius_3*sin_value, 290 + radius_3*cos_value, 10, 10);
  ellipse(480 + radius_4*sin_value_2, 290 + radius_4*cos_value_2, 10, 10);
  //outter animated circles
  ellipse(700 + radius_5*sin_value_3, 100 + radius_5*cos_value_3, 10, 10);
  ellipse(250 + radius_5*sin_value_3, 100 + radius_5*cos_value_3, 10, 10);
  ellipse(800 + radius_5*sin_value_4, 350 + radius_5*cos_value_4, 10, 10);
  ellipse(150 + radius_5*sin_value_4, 350 + radius_5*cos_value_4, 10, 10);


  //Diamond
  fill(cur_color);
  quad(480, 5, 580, 100, 480, 200, 380, 100);
  stroke(bg_color_curl); 
  strokeWeight(7); 
  fill(color_1);
  quad(480, 50, 580, 150, 480, 250, 380, 150);
  fill(bg_color_curl);
  quad(480, 115, 510, 150, 480, 185, 450, 150);  


 
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}