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

    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;

    if (obj.hours >= 12){
        hours = hours - 12;
    }
    
    

    let hourRot   = map(hours, 0, 11, -90, 240);
    let minuteRot = map(minutes, 0, 60, -90, 270);
    let secondRot = map(seconds, 0, 60, -90, 270);
    background(255);
    angleMode(DEGREES);
    noStroke();
    



    fill(255);
    ellipse(450, 250, 400, 400);
    fill(0);
    if(hours == 0){    
        ellipse(450, 250, 400, 400);
    } else {
        arc(450, 250, 400, 400, -90, hourRot); //larerg circle
    }


    fill(255);
    ellipse(450, 250, 264, 264);
    if(minutes == 0) {
        ellipse(450, 250, 266, 266);
    } else {
    fill(85);
    arc(450, 250, 266, 266, -90, minuteRot); //middle circle
    }

    fill(255);
    ellipse(450, 250, 131, 131);
    fill(170);    
    if(seconds == 0){
        ellipse(450, 250, 133, 133);
    } else {
    arc(450, 250, 133, 133, -90, secondRot); // smaller circle
    }

}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}