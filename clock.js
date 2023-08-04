/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
let img;
function preload() {
  img = loadImage('Tree.PNG');
  img2 = loadImage('mountains.PNG'); 
  img3 = loadImage('trees.PNG'); 
}

function draw_clock(obj) {

  let seconds = obj.seconds; 
  let minutes = obj.minutes;
  let hours = obj.hours; 
  let millis = obj.millis; 
  let alarm = obj.seconds_until_alarm; 
 
    
    let background_color = 50;
    let text_color = color(107, 161, 121); //green
  
 

    if(alarm > 0 && alarm < 5) {
      background_color = map(alarm, 5, 0, 50, 200)
    }
    else if(alarm == 0) {
      if(millis < 500) {
        background_color = map(millis, 0, 500, 50, 200); 
      }
      else {
        background_color = map(millis, 500, 1000, 200, 50);
      }
    }

    if(alarm > 0 && alarm < 5) {
      text_color = map(alarm, 5, 0, 200, 255);
    }
    else if(alarm == 0) {
        if(millis < 500) {
          text_color = map(millis, 0, 500, 255, 255);
        }
        else {
          text_color = map(millis, 500, 1000, 255, 255);
        }
    }
  
  background(background_color); //  greyblack
  fill(107, 161, 121); //green
  textSize(90);
  textAlign(CENTER, CENTER);
  text (); 
 


  let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase1 = sin(bounce1);
  let y_bounce1 = map(phase1, -1, 1, -5, 5);

  let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  let phase2 = sin(bounce2);
  let y_bounce2 = map(phase2, -1, 1, -5, 5);


  let shift1 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase3 = sin(shift1);
  let x_shift1 = map(phase3, -1, 1, -5, 5);

  let shift2 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase4 = sin(shift2);
  let x_shift2 = map(phase4, -1, 1, 5, -5);

  let shift3 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase5 = sin(shift3);
  let x_shift3 = map(phase5, -1, 1, 10, -10);



  // hidden big time for alarm
  fill (50); //background color
  noStroke();
  textSize(300);
  text(hours, 150, 150);

  ellipse(500, 100, 30, 30);
  ellipse(500, 200, 30, 30);

  textSize(300);
  text(minutes, 790, 150);

  image(img2, 0, 50, 1000, 500); //mountains
  image(img3, 0, 0, 960, 460);

  //ground rectangle
fill(30); //darkgrey
  rect(0, 420, 965, 100);

  noStroke();
  fill(194, 228, 232);
ellipse(750, 150+y_bounce1, 60, 25); //backUFOtop
  fill (148, 172, 195);
  noStroke();
  ellipse(750, 160+y_bounce1, 150, 25); //backgroundUFO 
  

  fill(194, 228, 232);
ellipse(300, 75+y_bounce2, 100, 50); //frontUFOtop
  fill (148, 172, 195); //lightblue
  noStroke();
ellipse(300, 95+y_bounce2, 250, 50); //frontUFO 

stroke(150);
fill (255);
ellipse (300,100+y_bounce2, 100, 15); //inside hole UFO front

noStroke();
  fill (255);
  quad(180+x_shift1, 470, 265, 100, 335, 100, 430+x_shift2, 470);
 
  
  fill (255);
  stroke (200);
  ellipse(305, 470, 248+x_shift3, 30); //round beam bottom FRONT

  stroke(150);
  fill (255);
  ellipse (750,162+y_bounce1, 60, 8); //inside hole UFO BACK

  fill (255);
  noStroke();

  quad(660+x_shift1, 440, 730, 164+y_bounce1, 770, 164+y_bounce1, 830+x_shift2, 440); 
  fill (255);
  stroke (200);
  ellipse(745, 440, 170+x_shift3, 15); //round beam bottom BACK





//text (seconds, );  

let minutes_lift = map(minutes, 0, 59, 440, 140); //make number move up with hour
fill (text_color);

noStroke();
textSize(80);
text(hours, 300, minutes_lift);


let seconds_lift = map(seconds, 0, 59, 425, 175); //make number move up with minutes 



fill (text_color);
noStroke();
textSize(40);
text(minutes, 750, seconds_lift);


image(img3, 0, 0, 960, 500); //trees



}

