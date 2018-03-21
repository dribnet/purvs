/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {

	let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(204);

    background(220); //  beige
    fill(50); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    angleMode(DEGREES);

    let SecondFraction = map(seconds, 0, 60, 0, 0.9);
    let MinuteFraction = map(minutes, 0, 60, 0, 0.9);
    let SecondAngle = map(seconds+(millis/1000), 0, 60, 0, 360);
    let MinuteAngle = map(minutes+SecondFraction, 0, 60, 0, 360);
    let HourAngle = map(hours+MinuteFraction, 0, 24, 0, 720);
    let RotHour = map(hours+MinuteFraction, 0, 24, 0, -720);
    let RotMinute = map(minutes+SecondFraction, 0, 60, 0, -360);
    let RotSecond = map(seconds+(millis/1000), 0, 60, 0, -360);
    
    translate(width/2,height/2);
    

noStroke();
ellipse(0,0,20,20);
triangle(-10,0,10,0,0,-70);

for(let i=1; i<=12; i=i+1){

  let num = i;
  let deg = 0+(i*30);
  push();
  textSize(15);
  rotate(deg+RotHour);
  text(num, 0, -220);

  pop();

}

for(let i=1; i<=60; i=i+1){

  let num = i;
  let deg = 0+(i*6);
  push();
  textSize(10);
  rotate(deg+RotMinute);
  text(num, 0, -170);

  pop();

}
 
for(let i=1; i<=60; i=i+1){

  let num = i;
  let deg = 0+(i*6);
  push();
  textSize(5);
  rotate(deg+RotSecond);
  text(num, 0, -120);

  pop();

}


    
    
    push();
    rotate(HourAngle);
    //rect(-8,-140, 16, 140);
    pop();
    
    push();
    rotate(MinuteAngle);
  //  rect(-8,-200, 16, 200);
    pop();
    
    push();
    rotate(SecondAngle);
   // rect(-5,-200, 10,200);
    pop();

    //fill(200);



      //eye = map(hours+MinuteFraction, 0, 24, 1, 50);



    //ellipse(0,0,300,300);
   // ellipse(-60,0,50,eye);
    //ellipse(60,0,50,eye);






    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off


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


