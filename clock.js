/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 


function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

function setup() {
  createCanvas(960, 500);
}
    
let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    

    background(0,0,0); //  black
    fill(255,255,255); // white
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    angleMode(DEGREES);

    let SecondFraction = map(seconds, 0, 60, 0, 1);
    let MinuteFraction = map(minutes, 0, 60, 0, 1);
    let SecondAngle = map(seconds+(millis/1000), 0, 60, 0, 360);
    let MinuteAngle = map(minutes+SecondFraction, 0, 60, 0, 360);
    let HourAngle = map(hours+MinuteFraction, 0, 24, 0, 720);
    
    translate(width/2,height/2);
    
    
    push();
    rotate(HourAngle);
    rect(-8,-90, 16, 100);
    pop();
    
    push();
    rotate(MinuteAngle);
    rect(-8,-125, 16, 125);
    pop();
    
    push();
    rotate(SecondAngle);
    rect(-5,-150, 10,150);
    pop();

    ellipse(0.5,0.5,25,25);


 noStroke();
    fill(255);

    rect(-30,-245, 55, 110, 15, 15, 10, 5); //12

    push();
    rotate(30);
       rect(-30,-250, 55, 110, 15, 15, 10, 5); // 1
    pop();

  push();
    rotate(60);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 2
    pop();

   
     push();
    rotate(90);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 3
    pop();

push();
    rotate(120);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 4
    pop();

push();
    rotate(150);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 5
    pop();

    push();
    rotate(180);
      rect(-30,-250, 55, 110, 15, 15, 10, 5); // 6
    pop();

push();
    rotate(210);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 7
    pop();

push();
    rotate(240);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 8
    pop();

    push();
    rotate(270);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 9
    pop();


push();
    rotate(300);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 10
    pop();

    push();
    rotate(330);
      rect(-30,-260, 55, 110, 15, 15, 10, 5); // 11
    pop();





fill(0,0,0);
     ellipse(12,-230, 10,10); //12
     ellipse(12,-200, 10,10);
     ellipse(12,-215, 10,10);
     ellipse(-15,-230, 10,10);
     ellipse(-15,-215, 10,10);
     ellipse(-15,-200, 10,10);
     ellipse(12,-230, 10,10); 

     ellipse(12,-150, 10,10);
     ellipse(12,-165, 10,10);
     ellipse(12,-180, 10,10);
     ellipse(-15,-180, 10,10);
     ellipse(-15,-165, 10,10);
     ellipse(-15,-150, 10,10);

     ellipse(110,-193, 10,10);  //1

ellipse(220,-110, 10,10); //2
ellipse(175,-125, 10,10); 

push();
    rotate(30);
     ellipse(220,-110, 10,10); //3
     ellipse(175,-125, 10,10); 
     ellipse(197,-120, 10,10); 
    pop();

push();
    rotate(60);
ellipse(220,-110, 10,10); //4
ellipse(175,-125, 10,10); 
ellipse(195,-95, 10,10); 
ellipse(200,-140, 10,10);
    pop();

    push();
    rotate(90);
ellipse(220,-110, 10,10); //5
ellipse(175,-125, 10,10); 
ellipse(195,-95, 10,10); 
ellipse(200,-140, 10,10);
ellipse(200,-118, 10,10);
    pop();

ellipse(12,-230, 10,10); //6
     ellipse(-12,200, 10,10);
     ellipse(-12,215, 10,10);
     ellipse(15,230, 10,10);
     ellipse(15,215, 10,10);
     ellipse(15,200, 10,10);
     ellipse(-12,230, 10,10);

     push();
    rotate(30);
     ellipse(-12,215, 10,10); //7
     ellipse(-12,230, 10,10);
     ellipse(15,245, 10,10);
     ellipse(15,215, 10,10);
     ellipse(15,230, 10,10);
     ellipse(-12,245, 10,10); 
    pop();
     push();
    rotate(180);
     ellipse(88,-155, 10,10);
     pop();
   

        push();
    rotate(60);
     ellipse(-12,215, 10,10); //8
     ellipse(-12,230, 10,10);
     ellipse(15,245, 10,10);
     ellipse(15,215, 10,10);
     ellipse(15,230, 10,10);
     ellipse(-12,245, 10,10); 
    pop();
    push();
    rotate(180);
   ellipse(150,-110, 10,10); 
ellipse(150,-75, 10,10);
     pop();

push();
    rotate(90);
     ellipse(-12,215, 10,10); //9
     ellipse(-12,230, 10,10);
     ellipse(15,245, 10,10);
     ellipse(15,215, 10,10);
     ellipse(15,230, 10,10);
     ellipse(-12,245, 10,10); 
    pop();
     push();
    rotate(210);
 ellipse(130,-100, 10,10);
     ellipse(150,-95, 10,10); 
     ellipse(175,-85, 10,10);
     pop();


     push();
     stroke(0,0,0); //12
strokeWeight(3);
line(-30, -190, 23, -190);
pop();


     push();
     rotate(30);
     stroke(0,0,0); //1
strokeWeight(3);
line(-30, -195, 23, -195);
pop();

push();
     rotate(60);
     stroke(0,0,0); //2
strokeWeight(3);
line(-30, -203, 23, -203);
pop();

push();
     rotate(90);
     stroke(0,0,0); //3
strokeWeight(3);
line(-30, -205, 23, -205);
pop();

push();
     rotate(120);
     stroke(0,0,0); //4
strokeWeight(3);
line(-30, -205, 23, -205);
pop();

push();
     rotate(150);
     stroke(0,0,0); //5
strokeWeight(3);
line(-30, -206, 23, -206);
pop();

push();
     rotate(180);
     stroke(0,0,0); //6
strokeWeight(3);
line(-30, -192, 23, -192);
pop();

push();
     rotate(210);
     stroke(0,0,0); //7
strokeWeight(3);
line(-30, -208, 23, -208);
pop();

push();
     rotate(240);
     stroke(0,0,0); //8
strokeWeight(3);
line(-30, -200, 23, -200);
pop();

push();
     rotate(270);
     stroke(0,0,0); //9
strokeWeight(3);
line(-30, -206, 23, -206);
pop();

push();
     rotate(300);
     stroke(0,0,0); //10
strokeWeight(3);
line(-30, -205, 23, -205);
pop();

push();
     rotate(330);
     stroke(0,0,0); //11
strokeWeight(3);
line(-30, -203, 23, -203);
pop();

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


