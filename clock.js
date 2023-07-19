/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
 
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
 

  let Seconds = obj.seconds
  let Minutes = obj.minutes

  let Seconds_Radius = map(Seconds, 0, 59, 1, 150);
  let MinutesY = map(Minutes, 0, 59, 1, 150);

  // noStroke();
  // text("Seconds: " + Seconds, width / 2, 200), 

  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);

  fill(140, 255, 251) // blue
  noStroke();
  ellipse(width / 2, MinutesY, 100); // minutes moving up and down
  
  fill(175, 133, 255); // purple
  noStroke();
  ellipse( width / 3 * 2, 350, Seconds_Radius); //circle expanding

        //plant stalk
        stroke(1, 50, 32); //dark green
        strokeWeight(8);
        line(480, 50, 480, 320);

  //Plant pot
  fill(0,206,209); //dark turquoise
  noStroke();
  //quad(10, 30, 80, 30, 70, 90, 20, 90); //10,30,80,30,70,90,20,90
  quad(405, 350, 555, 350, 535, 450, 425, 450 ); //goes from right to left, x then y...
  rect(395, 320, 170, 30); //collar of plant pot

  stroke(140, 255, 251); //light turquoise
  strokeWeight(5);
  line(395, 350, 565, 350);
 
  //leaves
  fill(18, 181, 121); //light green
  stroke(1, 50, 32); //dark green
  strokeWeight(2);
  beginShape();
  vertex(30, 70); // first point
  bezierVertex(50, 100, 75, 140, 120, 120);  
  endShape(); //bottom half

  beginShape();
  vertex(30,70);
  bezierVertex(50, 80, 75, 20, 120, 120);
  endShape(); //top half
       

  

}
