/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

function setup(){
    heart = loadImage("images/heart.png");
    image(heart, 300, 100, 200, 200);
}

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
    background(255, 214, 215);
    noStroke();
    fill(220, 20, 60); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82); 

    //image(img, 200, 200, 200, 200);

    translate(500, 250);
    rotate(-90);
    strokeWeight(4);
    stroke(147);
    noFill();

    //the stepping seconds arc
   // let endsec = map(seconds, 0, 60, 0, 360);
   // arc(0, 0, 260, 260, 0, endsec);

    //the smooth second arc
    stroke(250, 162, 177);
    let endsecfraction = seconds + (millis / 1000.0);
    let endsecsmooth = map (endsecfraction, 0, 60, 0, 360);
    arc(0, 0, 200, 200, 0, endsecsmooth);

    //smooth minute arc
    // let endminfraction = minutes + (seconds / 1000.0);
    // let endminsmooth = map (endminfraction, 0, 60, 0, 360);
    // arc(0, 0, 280, 280, 0, endminsmooth);

    //the minute arc
    stroke(240, 104, 127);
    noFill();
    let endmin = map(minutes, 0, 60, 0, 360);
    arc(0, 0, 220, 220, 0, endmin); 

    //the hour arc
    stroke(250, 26, 64);
    noFill();
    let endhour = map(hours, 0, 12, 0, 360);
    arc(0, 0, 240, 240, 0, endhour);  


   // let size = map (millis, 0, 1000, 3, 4);

    noStroke();
    fill(220, 20, 60);

    let size = 3;

    if(millis <500 ){
        size += 0.2;
        translate(10, -20);
    }

    if(millis >=500 ){
        size -= 0.2;
    }


//heart shape
push();
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

  

  /* 
    // Make a bar which *smoothly* interpolates across 1 minute.
    // We calculate a version that goes from 0...60, 
    // but with a fractional remainder:
    let secondBarWidthChunky  = map(seconds, 0, 60, 0, width);
    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, width);

    fill(100, 100, 200)
    rect(0, 350, secondBarWidthChunky, 50);
    fill(120, 120, 240)
    rect(0, 400, secondBarWidthSmooth, 50);  */
}
