const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  
  

}

// Update this function to draw you own maeda clock
function draw() {

//Parameters:
//obj.hours    Integer from 0 to 23 representing the hour of the day
//obj.minutes  Integer from 0 to 59 representing the hour of the day
//obj.seconds  Integer from 0 to 59 representing the hour of the day
//obj.millis   Integer from 0 to 999 representing the milliseconds that have passed since the reported second
//obj.seconds_until_alarm
             //Float indicating the state of the alarm. The value will be:
              //< 0 if the alarm is not set
              //= 0 if the alarm is going off
              //> 0 if the alarm is set. the float value then represents the number of seconds until the alarm goes off  background(20);
  angleMode(DEGREES);
  translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
  background(20);
  rotate(-90);



  let hr = hour();
  let min = minute();
  let sec = second();
  let mil = millis()

  let x = 1;



 //seconds
 noFill();
 strokeWeight(4);
 stroke(255);
 let end = map(sec, 0, 60, 0, 360);
 arc(0, 0, 490, 490, 0, end);


 //minutes
 noFill();
 stroke(200);
 let end2 = map(min, 0, 60, 0, 360);
 arc(0, 0, 340, 340, 0, end2);


 //hours
 noFill();
 stroke(150);
 let end3 = map(hr%12, 0, 12, 0, 360);
 arc(0, 0, 200, 200, 0, end3);


 let angle = 0
 
 //babies born
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(60, 0, 35, 35);
 push();
 let end4 = map(mil, 0, 14, 0, 360);
 translate(60, 0);
  rotate(90);
 fill(255, 100, 150);
 noStroke();
 textSize(10);
 text('Births', -12, 30);
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 rotate(end4);
 line(0, 0, 13, 0);
 pop();

 //marriges

 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(60, 0, 35, 35);
 push();
 let end5 = map(mil, 0, 75, 0, 360);
 translate(-40, 40);
 textSize(10);
 rotate(90);
 fill(255, 100, 150);
 noStroke();
 text('Marriages', -20, -20);
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(0, 0, 35, 35);
 rotate(end5);
 line(0, 0, 13, 0);
 pop();

 //elderly
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(60, 0, 35, 35);
 push();
 let end6 = map(sec, 0, 16.7, 0, 360);
 translate(-40, -40);
 rotate(90);
 fill(255, 100, 150);
 noStroke();
 textSize(10);
 text('Elderly Deaths', -35, -20);
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(0, 0, 35, 35);
 rotate(end6);
 line(0, 0, 13, 0);
 pop();

 //numbers


 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(90);
 text('XII', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('I', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('II', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('III', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('IV', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('V', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('VI', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('VII', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('VIII', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('IX', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('X', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('XI', -20, -200);




 

  // The rectangle draws on top of the ellipse
  // because it comes after in the code

  
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
