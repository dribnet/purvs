
function draw_clock(obj) {

	let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarmsecs = obj.seconds_until_alarm
    background(204);

    background(114, 203, 255); 
    fill(50); 
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);
    text("Seconds until alarm: " + alarmsecs, 10, 102);

    angleMode(DEGREES);

    let SecondFraction = map(seconds, 0, 60, 0, 0.9);
    let MinuteFraction = map(minutes, 0, 60, 0, 0.9);


    let RotHour = map(hours+MinuteFraction, 0, 24, 0, -720);
    let RotMinute = map(minutes+SecondFraction, 0, 60, 0, -360);
    let RotSecond = map(seconds+(millis/1000), 0, 60, 0, -360);
    let RotAlarm = map(alarmsecs, 0, 20, 0, -360);
    var a = 0;
    
    translate(width/2,height/2);





   if (alarmsecs == 0){
        a = millis;
   }
   else {
   	a = 0;
   }

fill(250);
ellipse(0,0,480+a,480+a);

fill(114, 203, 255);
ellipse(0,0,420+a,420+a);

fill(250);
ellipse(0,0,370+a,370+a);

fill(114, 203, 255);
ellipse(0,0,320+a,320+a);

fill(250);
ellipse(0,0,260+a,260+a);

fill(114, 203, 255);
ellipse(0,0,225+a,225+a);

fill(250);
ellipse(0,0,165+a,165+a);

noFill();
stroke(255, 119, 0);
strokeWeight(2);
ellipse(0,0,165,165);
ellipse(0,0,225,225);
ellipse(0,0,260,260);
ellipse(0,0,320,320);
ellipse(0,0,370,370);
ellipse(0,0,420,420);
ellipse(0,0,480,480);


fill(0);
    

noStroke();
ellipse(0,0,20,20);
triangle(-10,0,10,0,0,-70);


for(let i=1; i<=12; i=i+1){

  let num = i;
  let deg = 0+(i*30);
  push();
  textSize(15);
  rotate(deg+RotHour);
  text(num, 0, -220+a);

  pop();

}

for(let i=1; i<=60; i=i+1){

  let num = i;
  let deg = 0+(i*6);
  push();
  textSize(10);
  rotate(deg+RotMinute);
  text(num, 0, -170+a);

  pop();

}
 
for(let i=1; i<=60; i=i+1){

  let num = i;
  let deg = 0+(i*6);
  push();
  textSize(5);
  rotate(deg+RotSecond);
  text(num, 0, -120+a);

  pop();

}

for(let i=0; i<=19; i=i+1){
  
  if(alarmsecs > 0){
  let num = i;
  let deg = 0+(i*18);
  push();
  textSize(10);
  rotate(deg+RotAlarm);
  text(num, 0, -70+a);

  pop();

}



}


    
    



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


