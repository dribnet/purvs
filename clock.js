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


    let hourValue   = map(hours, 0, 23, 0, 360);
    let minuteValue = map(minutes, 0, 59, 0, 360);
    let secondValue = map(seconds, 0, 59, 0, 360);
    let millisValue = map(millis, 0, 1000, 0, 360);

    //let f = sin (frameCount/60*TWO_PI);
    //let f2 = sin (secondValue);
    
    let e = map(sin(frameCount/30), -1, 1, 30, 180);
    let r = map(sin(frameCount/60), -1, 1, 30, 200);
    let p = map(sin(frameCount/120), -1, 1, 30, 220);
    let d = map(sin(frameCount/240), -1, 1, 30, 240);

    let e2 = map(sin(frameCount/30), -1, 1, 30, 120)
    let r2 = map(cos(frameCount/60), -1, 1, 30, 140);
    let p2 = map(cos(frameCount/120), -1, 1, 30, 160);
    let d2 = map(cos(frameCount/240), -1, 1, 30, 180);

    let c = map(sin(frameCount/30), -1, 1, 185, 205);
    let c2 = map(sin(frameCount/60), -1, 1, 205, 205);
    let c3 = map(sin(frameCount/120), -1, 1, 200, 220);
    let c4 = map(sin(frameCount/240), -1, 1, 165, 185);    

    background (220, 140, 160);
    print(secondValue);
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);  
    
    translate (width/2, height/2);
    stroke (255);
    noFill();
    
    fill (20, 0, c, 140);
    noStroke ();
    push ();
    rotate (millisValue/60);
    beginShape();
    vertex(0, 0);
    vertex(0, -220);
    vertex (e2, -e);
    vertex(0, 0);
    endShape(CLOSE);
    pop ();
    
    fill (180, 0, c2, 140);
    noStroke ();
    push ();
    rotate (secondValue/60);
    beginShape();
    vertex(0, 0);
    vertex(0, -220);
    vertex (r2, -r);
    vertex(0, 0);
    endShape(CLOSE);
    pop ();
    
    fill (0, c3, 245, 140);
    noStroke ();
    push ();
    rotate (minuteValue/60);
    beginShape();
    vertex(0, 0);
    vertex(0, -240);
    vertex (p2, -p);
    vertex(0, 0);
    endShape(CLOSE);
    pop ();
    
    fill (0, 240, c4, 140);
    noStroke ();
    push ();
    rotate (hourValue/60);
    beginShape();
    vertex(0, 0);
    vertex(0, 240);
    vertex (p2, d);
    vertex(0, 0);
    endShape(CLOSE);
    pop ();

}
    
    //fill(128,100,100); // dark grey

    /*
    noStroke();
    fill(hours, 180, 180);
    ellipse(width/2, height/2, 200, 200);
    fill(minutes, 0, 180);
    ellipse(width/2, height/2, 150, 150);
    fill(seconds, 20, 100);
    ellipse(width/2, height/2, 100, 100);
    fill(millis, 180, 90);
    ellipse(width/2, height/2, 50, 50);
    */

    // Make a bar which *smoothly* interpolates across 1 minute.
    // We calculate a version that goes from 0...60, 
    // but with a fractional remainder:
    //let secondBarWidthChunky  = map(seconds, 0, 60, 0, width);
    //let secondsWithFraction   = seconds + (millis / 1000.0);
    //let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, width);

    //fill(100, 100, 200)
    //rect(0, 350, secondBarWidthChunky, 50);
    //fill(120, 120, 240)
    //rect(0, 400, secondBarWidthSmooth, 50);


