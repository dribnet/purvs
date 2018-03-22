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
    ellipseMode(CENTER);
    background(25, 25, 60);
    
    fill(0);
    noStroke();
    rect(0, 300, 960, 300);

         stroke(255);
     fill(255,140,0);
     noStroke();
     ellipse(480, 150, 250, 250);

     stroke(25, 25, 60); 
     strokeWeight(2);
     line(0, 100, 960, 100);
     strokeWeight(3);
     line(0, 80, 960, 80);
     strokeWeight(6);
     line(0, 40, 960, 40);
    line(0, 190, 960, 190);
    line(0, 210, 960, 210);
    line(0, 240, 960, 240);


    stroke(255,0,255);
    strokeWeight(2);
    line(0, 300, 960, 300);
    line(0, 305, 960, 305);
    line(0, 315, 960, 315);
    line(0, 325, 960, 325);
    line(0, 340, 960, 340);
    line(0, 360, 960, 360);
    strokeWeight(3);
    line(0, 385, 960, 385);
    line(0, 410, 960, 410);
    line(0, 440, 960, 440);
    strokeWeight(1.5);
    line(480, 500, 480, 300);
    line(350, 500, 400, 300);
    line(220, 500, 320, 300);
    line(90, 500, 240, 300);
    line(0, 460, 160, 300);
    line(0, 380, 80, 300);
    line(610, 500, 560, 300);
    line(740, 500, 640, 300);
    line(870, 500, 720, 300);
    line(960, 460, 800, 300);
    line(960, 380, 880, 300);


    let mill = map(millis, 0, 1000, 0, 360);
    let sec = map(seconds, 0, 60, 0, 360);
    let min = map(minutes, 0, 60, 360);
    let hr = map(hours % 12, 0, 12, 0, 360);

  



     translate(480, 150);
     rotate(-90);


      strokeWeight(10);
     stroke(0, 255, 255);
     noFill();
     let arc1 = map(millis, 0, 1000, 0, 360);
     arc(0, 0, 280, 280, 0, arc1);

     strokeWeight(10);
     stroke(255, 0, 255,);
     noFill();
     let arc2 = map(seconds, 0, 60, 0, 360);
     arc(0, 0, 200, 200, 0, arc2); 

     strokeWeight(3)


     stroke(255);

       push();
    rotate(mill);
    noStroke();
    fill(255);
    ellipse(140, 0, 20, 20);
    pop();

    push();
    rotate(sec);
    fill(255);
    ellipse(100, 0, 30, 30);
    pop();

    rotate(90);
     fill(255);
     textSize(40);
     noStroke();
     text(hours + ':' + minutes + ':' + seconds, -80, 10);


}
