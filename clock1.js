/*
 * use p5.js to draw a clock on a 960x500 canvas
 */ 

 function draw_clock(obj) {
    angleMode(DEGREES);
    textAlign(CENTER);
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;


     //AlarmISGoing OFF!
     if (alarm == 0){


        
      if(seconds % 2 == 0){
        background(185, 47, 47);
        alarmFace();


      }
      else{
        background(198, 231, 231);
      }
     }
     else{

      tint(255, 126);
      
     }
    
    
     

      
  
      
   if(alarm > 0){
      noFill();
      stroke(185, 47, 47);
      strokeWeight(10);
      let end4 = map(alarm, 0, 20, 0, 360);
        arc(width/2, height/2, 240, 240, 0, end4);
      

 }
}