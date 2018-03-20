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
    
            //setting up time with computer time

            background(191, 216, 190); //  beige
            stroke(1);
            //head
            fill(124, 112, 101);
            rect(450, 100, 50, 50);
            line(465, 100, 465, 80);
            line(465, 80, 455, 80);
            line(455, 80, 455, 50);
            line(450, 100, 475, 125);
            line(475, 125, 500, 100);
            line(475, 125, 475, 150);
           
            line(485, 100, 485, 80);
            line(485, 80, 495, 80);
            line(495, 80, 495, 50);
            //body
            rect(450, 160, 50, 70);
            rect(473, 180, 5, 5);
            rect(473, 200, 5, 5);
            //ass
            fill(84, 75, 67);
            rect(440, 240, 70, 150);
            //asspattern
            line(440, 250, 460, 250);
            line(460, 250, 460, 260);
            line(460, 260, 470, 260);
            line(470, 260, 470, 270);
            line(470, 270, 480, 270);
            line(480, 270, 480, 260);
            line(480, 260, 490, 260);
            line(490, 260, 490, 250);
            line(490, 250, 510, 250);

            line(440, 280, 460, 280);
            line(460, 280, 460, 290);
            line(460, 290, 470, 290);
            line(470, 290, 470, 300);
            line(470, 300, 480, 300);
            line(480, 300, 480, 290);
            line(480, 290, 490, 290);
            line(490, 290, 490, 280);
            line(490, 280, 510, 280);

            line(440, 310, 460, 310);
            line(460, 310, 460, 320);
            line(460, 320, 470, 320);
            line(470, 320, 470, 330);
            line(470, 330, 480, 330);
            line(480, 330, 480, 320);
            line(480, 320, 490, 320);
            line(490, 320, 490, 310);
            line(490, 310, 510, 310);

            line(440, 340, 460, 340);
            line(460, 340, 460, 350);
            line(460, 350, 470, 350);
            line(470, 350, 470, 360);
            line(470, 360, 480, 360);
            line(480, 360, 480, 350);
            line(480, 350, 490, 350);
            line(490, 350, 490, 340);
            line(490, 340, 510, 340);

            line(440, 340, 460, 340);
            line(460, 340, 460, 350);
            line(460, 350, 470, 350);
            line(470, 350, 470, 360);
            line(470, 360, 480, 360);
            line(480, 360, 480, 350);
            line(480, 350, 490, 350);
            line(490, 350, 490, 340);
            line(490, 340, 510, 340);

            line(440, 370, 460, 370);
            line(460, 370, 460, 380);
            line(460, 380, 470, 380);
            line(470, 380, 470, 390);
            line(470, 390, 480, 390);
            line(480, 390, 480, 380);
            line(480, 380, 490, 380);
            line(490, 380, 490, 370);
            line(490, 370, 510, 370);


            //leftwing
            fill(237, 215, 196);
            rect(190, 230, 230, 140);
             fill(214, 177, 145);
            rect(120, 10, 300, 280);
            rect(430, 150, 10, 70);
            
            //rightwing
            fill(237, 215, 196);
            rect(530, 230, 230, 140);
            fill(214, 177, 145);
            rect(510, 151, 10, 70);
            rect(530, 10, 300, 280);

    
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;


    
    


    // A MAP 
    // map(target, minOfTarget,MaxOfTarget,MinNewScale, MaxNewScale)
    // let hourBarWidth   = map(hours, 0, 23, 0, width);
    // let minuteBarWidth = map(minutes, 0, 59, 0, width);
    // let secondBarWidth = map(seconds, 0, 59, 0, width);
    // let millisBarWidth = map(millis, 0, 1000, 0, width);

    // noStroke();
    // fill(68, 162, 186, 150);
    // ellipse(200, 250, hourBarWidth/4);
    // fill(102, 217, 221, 150);
    // ellipse(400, 250, minuteBarWidth/4);
    // fill(134, 239, 208, 150)
    // ellipse(600, 250, secondBarWidth/4);
    // fill(190, 249, 189, 150)
    // ellipse(800, 250, millisBarWidth/4);

      fill(216, 140, 101);
      ellipse(280, 150, 280, 280);
      ellipse(670, 150, 280, 280);

      fill(99, 39, 9);
      // ellipse(215, 130, 190, 190);
      // ellipse(180, 130, 100, 100);
      
      fill(99, 39, 9);
      ellipse(335, 185, 75, 75);
      ellipse(602, 185, 75, 75);

      fill(66, 22, 0);
      ellipse(730, 130, 200, 200);
      ellipse(215, 130, 190, 190);
      
      fill(104, 49, 1);
      ellipse(762, 130, 100, 100);
      ellipse(180, 130, 100, 100);

      fill(255, 200, 153);
      ellipse(590, 185, 50, 50);
      ellipse(347, 185, 50, 50);

      line(120, 290, 173, 240);
      line(373, 45, 420, 10);

      line(530, 10, 575, 45);
      line(777, 240, 830, 290);


      ellipse(220, 340, 50, 50);
      ellipse(730, 340, 50, 50);

      fill(122, 65, 13);
      ellipse(215, 348, 30, 30);
      ellipse(735, 348, 30, 30);

      fill(73, 35, 0)
      ellipse(265, 310, 15, 15);
      ellipse(685, 310, 15, 15);


      fill(240);
      textSize(50);
      textStyle(BOLD); //textSize and textStyle code taken from Jackie Xu at http://bl.ocks.org/Jackie2017vic/b6c6f439167135e38d7818be623f029e/d45cf211b18ff4dbc0ac7562f42e6fdd9717287d
    text(hours, 150, 145);
    textSize(35);
    text(minutes, 328, 195);
    text(seconds, 570, 195);
    textSize(50);
    text(millis, 722, 145);



    // Make a bar which *smoothly* interpolates across 1 minute.
    // We calculate a version that goes from 0...60, 
    // but with a fractional remainder:
    // let secondBarWidthChunky  = map(seconds, 0, 60, 0, width);
    // let secondsWithFraction   = seconds + (millis / 1000.0);
    // let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, width);

    // fill(100, 100, 200)
    // rect(0, 350, secondBarWidthChunky, 50);
    // fill(120, 120, 240)
    // rect(0, 400, secondBarWidthSmooth, 50);
}
