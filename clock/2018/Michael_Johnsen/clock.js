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
    let alarm = obj.seconds_until_alarm;

    

    angleMode(DEGREES);

    background(120, 120, 120);

    text("Second: " + seconds, 10, 62);
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Millis: " + millis, 10, 82);
    text("Alarm: " + alarm, 60, 22);

    let secondCircleRadius = map(seconds, 0, 60, 0, 100)
    let hourCircleRadius   = map(hours, 0, 12, 0, 100);
    let minuteCircleRadius = map(minutes, 0, 59, 0, 100);
    let millisCircleRadius = map(millis, 0, 1000, 0, 100);
    
    let secondsWithFraction   = seconds + (millis / 1000.0);

    var secondRadiusSmooth;
    var pathcircle;
    var roundpath;

    if(alarm == 0){
        secondRadiusSmooth  = map(secondsWithFraction, 0, 60, -90, 40000);
        pathcircle = map(secondsWithFraction, 0, 60, -90, 20000);
        roundpath = map(secondsWithFraction, 0, 60, -90, 5000);
    } else {
        secondRadiusSmooth  = map(secondsWithFraction, 0, 60, -90, 270);
        pathcircle = map(minutes, 0, 60, -90, 270);
        roundpath = map(hours, 0, 12, -90, 270);
    }
    

    let col = map(millis, 0, 1000, 0, 255);
    let colo = map(seconds, 0, 60, 0, 255);
    let colour = map(minutes, 0, 60, 0, 255);
    let color = map(hours, 0, 12, 0, 255);
    
    



    noFill();


    //for(i=0; i<12; i++) {
    //    let angle = (360/12)*i;
    //
    //    quad(width/2 + cos(angle)*150, height/2 + sin(angle)*200, width/2, height/2);
    //}
    
    //for (i = 30; i < 360; i++) {
        //push();
        //translate(width/2, height/2);
        //quad(10, 0, 210, -30,220, 0, 210, 30);
        //pop();
    //}

    /////////////////////////////////Right Clock
    fill(212);
    ellipse(800, 400, 300, 300);



    push();
    ellipse(800, 400, 200, 200);
    ellipse(800, 400, 100, 100);
    ellipse(800, 400, 20, 20);

    translate(800, 400);
    strokeWeight(4);
    rotate(secondRadiusSmooth+50);
    fill(180);
    quad(10, 0, 170, -20,180, 0, 170, 20);
    pop();

    push();
    fill(180);
    strokeWeight(4);
    translate(800, 400);
    rotate(pathcircle+50);
    triangle(10, 0, 130, -5, 130, 5);
    pop();

    push();
    fill(180);
    strokeWeight(4);
    translate(800, 400);
    rotate(roundpath+240);
    triangle(10, 0, 80, -5, 80, 5);
    pop();


/////////////////////////////////Back Back Clock
    fill(212);
    strokeWeight(8);
    ellipse(460, 100, 300, 300);



    push();
    ellipse(460, 100, 200, 200);
    ellipse(460, 100, 100, 100);
    ellipse(460, 100, 20, 20);

    strokeWeight(4);

    translate(460, 100);
    rotate(secondRadiusSmooth+50);
    strokeWeight(4);
    fill(180);
    quad(10, 0, 170, -20,180, 0, 170, 20);
    pop();

    push();
    fill(180);
    translate(460, 100);
    strokeWeight(4);
    rotate(pathcircle+50);
    triangle(10, 0, 130, -5, 130, 5);
    pop();

    push();
    fill(180);
    translate(460, 100);
    strokeWeight(4);
    rotate(roundpath+240);
    triangle(10, 0, 80, -5, 80, 5);
    pop();

    //////////////////////////////////////Back Right

    fill(194, 213, 212);
    ellipse(800, 80, 200, 200);

    push();
    
    ellipse(800, 80, 133, 133);
    ellipse(800, 80, 66, 66);
    ellipse(800, 80, 13, 13);

    translate(800, 80);
    strokeWeight(4);
    rotate(secondRadiusSmooth+110);
    fill(180);
    quad(10, 0, 100, -10,110, 0, 100, 10);
    pop();

    push();
    strokeWeight(4);
    fill(180);
    translate(800, 80);
    rotate(pathcircle-150);
    triangle(10, 0, 130, -5, 130, 5);
    pop();

    push();
    strokeWeight(4);
    fill(180);
    translate(800, 80);
    rotate(roundpath-240);
    triangle(10, 0, 80, -5, 80, 5);
    pop();

    


 
    //////////////////////////////////////

    fill(212);
    ellipse(300, 350, 200, 200);

    push();
    
    ellipse(300, 350, 133, 133);
    ellipse(300, 350, 66, 66);
    ellipse(300, 350, 13, 13);

    translate(300, 350);
    strokeWeight(4);
    rotate(secondRadiusSmooth+110);
    fill(180);
    quad(10, 0, 100, -10,110, 0, 100, 10);
    pop();

    push();
    fill(180);
    strokeWeight(4);
    translate(300, 350);
    rotate(pathcircle-150);
    triangle(10, 0, 130, -5, 130, 5);
    pop();

    push();
    fill(180);
    strokeWeight(4);
    translate(300, 350);
    rotate(roundpath-240);
    triangle(10, 0, 80, -5, 80, 5);
    pop();

/////////////////////////////// Left Back Clock
    fill(194, 213, 212);
    ellipse(150, 200, 300, 300);



    push();
    ellipse(150, 200, 200, 200);
    ellipse(150, 200, 100, 100);
    ellipse(150, 200, 20, 20);

    translate(150, 200);
    strokeWeight(4);
    rotate(secondRadiusSmooth-90);
    fill(180);
    quad(10, 0, 170, -20,180, 0, 170, 20);
    pop();

    push();
    fill(180);
    translate(150, 200);
    strokeWeight(4);
    rotate(pathcircle-150);
    triangle(10, 0, 130, -5, 130, 5);
    pop();

    push();
    fill(180);
    translate(150, 200);
    strokeWeight(4);
    rotate(roundpath-240);
    triangle(10, 0, 80, -5, 80, 5);
    pop();



////////////////////////////////////////// Main Clock
    ellipse(550, 300, 400, 400);

    ellipse(550, 300, 240, 240);
    ellipse(550, 300, 140, 140);
    ellipse(550, 300, 20, 20);
    push();
    translate(550, 300);
    strokeWeight(4);
    rotate(secondRadiusSmooth);
    fill(180);
    quad(10, 0, 210, -20,220, 0, 210, 20);
    pop();

    push();
    fill(180);
    strokeWeight(4);
    translate(550, 300);
    rotate(pathcircle);
    triangle(10, 0, 130, -5, 130, 5);
	pop();

    push();
    fill(180);
    strokeWeight(4);
    translate(550, 300);
    rotate(roundpath);
    triangle(10, 0, 80, -5, 80, 5);
    pop();

}
