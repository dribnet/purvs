/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
 var y = 250;
 var yspeed = 40;

 createCanvas(960, 500);

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
    let alarm = obj.seconds_until_alarm;

    let minuteSun = map(minutes, 0, 59, 75, 885);
    let secondRect = map(seconds, 0, 59, height-35, 0);
    let hourR = map(hours, 0, 23, 155, 80);
    let hourG = map(hours, 0, 23, 193, 117);
    let hourB = map(hours, 0, 23, 255, 175);

   background(hourR, hourG, hourB);
   
   if (alarm > 0){
    background(0);
   }

    //alarm going off
   if (alarm == 0){
    
    y = y + yspeed;

    if(y > 400 || y < 100){
        yspeed = -yspeed;
        
        background(255);

    }
    }else{
        background(hourRD, hourGD, hourBD);
        y = 250;
   }
   //alarm about to go off
   if (alarm > 0){
       }


    noStroke();
    fill(200, 50);
    rect(0, secondRect, width, height);
    textFont('Helvetica');
    
    fill(220);
    textSize(500);

    text(hours, 400, 400);
    fill(255, 255, 153);
   
  
    ellipse(minuteSun, y, 150, 150);
    
    textSize(100);
    fill(220);
    
    text(minutes, minuteSun-60, y+35);

    textSize(50)
    text(seconds, 300, secondRect+35);


    
}

    
    
    