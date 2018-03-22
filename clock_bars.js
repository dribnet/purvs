/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 



function draw_clock(obj) {
    angleMode(DEGREES);
    
 
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


    background(255, 214, 215); //light pink
    noStroke();

    //24 hour time displayed
    let h = hours;
    let m = minutes;
    let s = seconds;

    //adding 0 if time is less than 10
    if(h < 10 && m >=10 && s>=10){
        h = "0" + h
    }
    else if(h < 10 && m < 10 && s>=10){
        h = "0" + h
        m = "0" + m
    }
    else if(h < 10 && m < 10 && s < 10){
        h = "0" + h
        m = "0" + m
        s = "0" + s
    }
    else if(h < 10 && m >= 10 && s < 10){
        h = "0" + h
        s = "0" + s
    }
    else if(h >= 10 && m < 10 && s < 10){
        m = "0" + m
        s = "0" + s
    }
    else if(h >= 10 && m < 10 && s >= 10 ){
        m = "0" + m
    }
    else if(h >= 10 && m >= 10 && s < 10){
        s = "0" + s
    }

    textFont('Avenir Next Condensed');
    text(h + ":" + m + ":" + s, 435, 375);




    translate(450, 220);
    rotate(-90);
    strokeWeight(4);
    stroke(147);
    noFill();


    //the hour arc
    stroke(250, 26, 64);
    fill(255, 214, 215);
    let endhour = map(hours, 0, 12, 0, 360);
    arc(0, 0, 240, 240, 0, endhour); 

    //the minute arc
    stroke(240, 104, 127);
    noFill();
    let endmin = map(minutes, 0, 60, 0, 360);
    arc(0, 0, 220, 220, 0, endmin); 

    //smooth second arc
    noFill();
    stroke(250, 162, 177);
    let endsecfraction = seconds + (millis / 1000.0);
    let endsecsmooth = map (endsecfraction, 0, 60, 0, 360);
    arc(0, 0, 200, 200, 0, endsecsmooth);


    noStroke();
    fill(220, 20, 60);


  // for(var i=0, i<8, i++){
  //   var xPos = (random(-200, 200));
  //   var yPos = (random(-200, 200));
  //   }


    
    push();
    //beating heart movement
    let size = 3;

    if(millis <500 ){
        size += 0.2;
        translate(10, -20);
    }

    if(millis >=500 ){
        size -= 0.2;
    }

//heart shape
    translate(55,-140);
    scale(size);
    rotate(90);

   beginShape();
   vertex(50, 15);
   bezierVertex(50, -5, 90, 5, 50, 40)
   vertex(50, 15);
   bezierVertex(50, -5, 10, 5, 50, 40);
   endShape();
    pop();


}
// push();
//     translate(xPos, yPos);
//     scale(1);
//     beginShape();
//     vertex(50, 15);
//     bezierVertex(50, -5, 90, 5, 50, 40)
//     vertex(50, 15);
//     bezierVertex(50, -5, 10, 5, 50, 40);
//     endShape();
// pop();

  //When the alarm is turned on
  /*      if(obj.seconds_until_alarm > 0){
            
        }

        if(obj.seconds_until_alarm = 0){
            
        }
        */





// function hearts(xPos, yPos){
//     push();
//     if(xPos < 0 && yPos < 0){
//         translate(xPos-=0.001, yPos-=0.001);
//     }
//     else if(xPos >= 0 && yPos >= 0){
//         translate(xPos+=0.001, yPos+=0.001);
//     }
//     else if(xPos >= 0 && yPos < 0){
//     translate(xPos+=0.001, yPos-=0.001);
//     }   
//     else{
//        translate(xPos-=0.001, yPos+=0.001); 
//     }

//     ellipse(xPos, yPos, 20, 20);
    
//     pop();
// }










