var k = 1;

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


    background(255, 197, 195);
    push();
    translate(-100, -50);
    scale(1.2);
    let hour = obj.hours;
    let minute = obj.minutes;
    let second = obj.seconds;
    let millisecond = obj.millis;
    let smoothSecond = second + (millisecond / 1000);
    let smoothMinute = minute + (second / 60);
    let alarm = obj.seconds_until_alarm;

    angleMode(DEGREES);
    noStroke();

    push();
    rectMode(CENTER)
    noStroke();
    fill(255);
    translate(width/2, height/2 - 25);
    rotate(45);
    rect(0, 0, 20, 20);
    pop();

    push();
    rectMode(CENTER)
    noStroke();
    fill(255);
    translate(width/2, height/2 + 25);
    rotate(45);
    rect(0, 0, 20, 20);
    pop(); //“：”

    push();
    rectMode(CENTER)
    noStroke();
    fill(255, 227, 225);

    rect(190, 190, 20, 100);
    rect(270, 190, 20, 100); //first number top

    rect(330, 190, 20, 100);
    rect(410, 190, 20, 100); //second number top

    rect(550, 190, 20, 100);
    rect(630, 190, 20, 100); //third number top

    rect(690, 190, 20, 100);
    rect(770, 190, 20, 100); //forth number top

    fill(255);
    rect(190, 310, 20, 100);
    rect(270, 310, 20, 100); //first number bottom

    rect(330, 310, 20, 100);
    rect(410, 310, 20, 100); //second number bottom

    rect(550, 310, 20, 100);
    rect(630, 310, 20, 100); //third number bottom

    rect(690, 310, 20, 100);
    rect(770, 310, 20, 100); //forth numberbottom

    rect(230, 130, 60, 20);
    rect(230, 250, 60, 20);
    rect(230, 370, 60, 20);

    rect(370, 130, 60, 20);
    rect(370, 250, 60, 20);
    rect(370, 370, 60, 20);

    rect(590, 130, 60, 20);
    rect(590, 250, 60, 20);
    rect(590, 370, 60, 20);

    rect(730, 130, 60, 20);
    rect(730, 250, 60, 20);
    rect(730, 370, 60, 20);
    pop();

    fill(255);
    let m = map(smoothMinute, 0, 59, 0, 99);
    rect(180, 140, 20, m);
    rect(260, 140, 20, m);

    rect(320, 140, 20, m);
    rect(400, 140, 20, m);

    let s = map(smoothSecond, 0, 59, 0, 99)
    rect(540, 140, 20, s);
    rect(620, 140, 20, s);

    rect(680, 140, 20, s);
    rect(760, 140, 20, s);

    fill(255, 227, 225)
    beginShape();
    vertex(180, 360);
    vertex(200, 360);
    vertex(200, 360 - m);
    vertex(180, 360 - m);
    endShape();

    beginShape();
    vertex(260, 360);
    vertex(280, 360);
    vertex(280, 360 - m);
    vertex(260, 360 - m);
    endShape();

    beginShape();
    vertex(320, 360);
    vertex(340, 360);
    vertex(340, 360 - m);
    vertex(320, 360 - m);
    endShape();

    beginShape();
    vertex(400, 360);
    vertex(420, 360);
    vertex(420, 360 - m);
    vertex(400, 360 - m);
    endShape();

    beginShape();
    vertex(540, 360);
    vertex(560, 360);
    vertex(560, 360 - s);
    vertex(540, 360 - s);
    endShape();

    beginShape();
    vertex(620, 360);
    vertex(640, 360);
    vertex(640, 360 - s);
    vertex(620, 360 - s);
    endShape();

    beginShape();
    vertex(680, 360);
    vertex(700, 360);
    vertex(700, 360 - s);
    vertex(680, 360 - s);
    endShape();

    beginShape();
    vertex(760, 360);
    vertex(780, 360);
    vertex(780, 360 - s);
    vertex(760, 360 - s);
    endShape();

    var t = 255;
    stroke(255, 197, 195);
    strokeWeight(2);
    if(hour == 1){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(320, 140, 20, 100);
      rect(320, 260, 20, 100);

      rect(340, 120, 60, 20);
      rect(340, 240, 60, 20);
      rect(340, 360, 60, 20);
    }else if(hour == 2){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(320, 140, 20, 100);
      rect(400, 260, 20, 100);
    }else if(hour == 3){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(320, 140, 20, 100);
      rect(320, 260, 20, 100);
    }else if (hour == 4) {
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(320, 260, 20, 100);

      rect(340, 120, 60, 20);
      rect(340, 360, 60, 20);
    }else if(hour == 5){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(400, 140, 20, 100);
      rect(320, 260, 20, 100);
    }else if(hour == 6){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(400, 140, 20, 100);
    }else if(hour == 7){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(320, 140, 20, 100);
      rect(320, 260, 20, 100);

      rect(340, 240, 60, 20);
      rect(340, 360, 60, 20);
    }else if(hour == 8){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);
    }else if(hour == 9){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(320, 260, 20, 100);
    }else if(hour == 10){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(340, 240, 60, 20);
    }else if(hour == 11){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(320, 140, 20, 100);
      rect(320, 260, 20, 100);

      rect(340, 120, 60, 20);
      rect(340, 240, 60, 20);
      rect(340, 360, 60, 20);
    }else if(hour == 12){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(320, 140, 20, 100);
      rect(400, 260, 20, 100);
    }else if(hour == 13){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(320, 140, 20, 100);
      rect(320, 260, 20, 100);
    }else if(hour == 14){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(320, 260, 20, 100);

      rect(340, 120, 60, 20);
      rect(340, 360, 60, 20);
    }else if(hour == 15){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(400, 140, 20, 100);
      rect(320, 260, 20, 100);
    }else if(hour == 16){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(400, 140, 20, 100);
    }else if(hour == 17){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(320, 140, 20, 100);
      rect(320, 260, 20, 100);

      rect(340, 240, 60, 20);
      rect(340, 360, 60, 20);
    }else if(hour == 18){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);
    }else if(hour == 19){
      fill(255, 197, 195);
      rect(260, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(200, 120, 60, 20);
      rect(200, 240, 60, 20);
      rect(200, 360, 60, 20);

      rect(320, 260, 20, 100);
    }else if(hour == 20){
      fill(255, 197, 195);
      rect(180, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(340, 240, 60, 20);
    }else if(hour == 21){
      fill(255, 197, 195);
      rect(180, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(320, 140, 20, 100);
      rect(320, 260, 20, 100);

      rect(340, 120, 60, 20);
      rect(340, 240, 60, 20);
      rect(340, 360, 60, 20);
    }else if(hour == 22){
      fill(255, 197, 195);
      rect(180, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(320, 140, 20, 100);
      rect(400, 260, 20, 100);
    }else if(hour == 23){
      fill(255, 197, 195);
      rect(180, 140, 20, 100);
      rect(260, 260, 20, 100);

      rect(320, 140, 20, 100);
      rect(320, 260, 20, 100);
    }else if(hour == 0){
      fill(255, 197, 195);
      rect(200, 240, 60, 20);

      rect(340, 240, 60, 20);
    }

    if(minute == 0){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(700, 240, 60, 20);
    }else if(minute == 1){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 2){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(680, 140, 20, 100);
      rect(760, 260, 20, 100);
    }else if(minute == 3){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 4){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 5){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(760, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 6){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(760, 140, 20, 100);
    }else if(minute == 7){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 8){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);
    }else if(minute == 9){
      fill(255, 197, 195);
      rect(560, 240, 60, 20);

      rect(680, 260, 20, 100);
    }else if(minute == 10){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(700, 240, 60, 20);
    }else if(minute == 11){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(560, 240, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 12){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 140, 20, 100);
      rect(760, 260, 20, 100);
    }else if(minute == 13){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 14){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 15){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(760, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 16){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(760, 140, 20, 100);
    }else if(minute == 17){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 18){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(560, 240, 60, 20);
    }else if(minute == 19){
      fill(255, 197, 195);
      rect(540, 240, 60, 20);

      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 240, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 260, 20, 100);
    }else if(minute == 20){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(700, 240, 60, 20);
    }else if(minute == 21){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 22){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(760, 260, 20, 100);
    }else if(minute == 23){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 24){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 25){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(760, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 26){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(760, 140, 20, 100);
    }else if(minute == 27){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 28){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);
    }else if(minute == 29){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(620, 260, 20, 100);

      rect(680, 260, 20, 100);
    }else if(minute == 30){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(700, 240, 60, 20);
    }else if(minute == 31){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 32){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(760, 260, 20, 100);
    }else if(minute == 33){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 34){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 35){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(760, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 36){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(760, 140, 20, 100);
    }else if(minute == 37){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 38){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);
    }else if(minute == 39){
      fill(255, 197, 195);
      rect(540, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 260, 20, 100);
    }else if(minute == 40){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(700, 240, 60, 20);
    }else if(minute == 41){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 42){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 140, 20, 100);
      rect(760, 260, 20, 100);
    }else if(minute == 43){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 44){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 45){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(760, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 46){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(760, 140, 20, 100);
    }else if(minute == 47){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 48){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);
    }else if(minute == 49){
      fill(255, 197, 195);
      rect(540, 260, 20, 100);

      rect(560, 120, 60, 20);
      rect(560, 360, 60, 20);

      rect(680, 260, 20, 100);
    }else if(minute == 50){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(700, 240, 60, 20);
    }else if(minute == 51){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 52){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(760, 260, 20, 100);
    }else if(minute == 53){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 54){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 260, 20, 100);

      rect(700, 120, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 55){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(760, 140, 20, 100);
      rect(680, 260, 20, 100);
    }else if(minute == 56){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(760, 140, 20, 100);
    }else if(minute == 57){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 140, 20, 100);
      rect(680, 260, 20, 100);

      rect(700, 240, 60, 20);
      rect(700, 360, 60, 20);
    }else if(minute == 58){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);
    }else if(minute == 59){
      fill(255, 197, 195);
      rect(620, 140, 20, 100);
      rect(540, 260, 20, 100);

      rect(680, 260, 20, 100);
    }

    masks(0, 0);
    masks(140, 0);
    masks(360, 0);
    masks(500, 0);
    pop();

    k = k + 10;
    var fade = map(sin(k), - 1, 1, 0, 255);
    let sp = map(smoothSecond,0, 59, 0, 500);

    if(alarm > 0){
      noStroke();

      fill(255, 255, 255, fade);
      for(var p3 = 0; p3 < 10000; p3 = p3 + 30){
    		for(var i3 = 0; i3 < 1000; i3 = i3 + 60){
    		    ellipse(i3, 500 - p3 + sp, 10, 10);
    		}
	    }

  	  for(var p2 = 0; p2 < 10000; p2 = p2 + 30){
        for(var i2 = 0; i2 < 1000; i2 = i2 + 60){
          ellipse(i2 + 30, 500 - p2 + 15 + sp, 10, 10);
        }
     }

  }

}

function masks(mx, my){
  fill(255, 197, 195);
  triangle(180 + mx, 140, 190 + mx, 140, 180 + mx, 150);
  triangle(190 + mx, 140, 200 + mx, 140, 200 + mx, 150);
  triangle(180 + mx, 230, 180 + mx, 240, 190 + mx, 240);
  triangle(190 + mx, 240, 200 + mx, 240, 200 + mx, 230);

  triangle(180 + mx, 260, 190 + mx, 260, 180 + mx, 270);
  triangle(190 + mx, 260, 200 + mx, 260, 200 + mx, 270);
  triangle(180 + mx, 350, 180 + mx, 360, 190 + mx, 360);
  triangle(190 + mx, 360, 200 + mx, 360, 200 + mx, 350);

  triangle(260 + mx, 140, 270 + mx, 140, 260 + mx, 150);
  triangle(270 + mx, 140, 280 + mx, 140, 280 + mx, 150);
  triangle(260 + mx, 230, 260 + mx, 240, 270 + mx, 240);
  triangle(270 + mx, 240, 280 + mx, 240, 280 + mx, 230);

  triangle(260 + mx, 260, 270 + mx, 260, 260 + mx, 270);
  triangle(270 + mx, 260, 280 + mx, 260, 280 + mx, 270);
  triangle(260 + mx, 350, 260 + mx, 360, 270 + mx, 360);
  triangle(270 + mx, 360, 280 + mx, 360, 280 + mx, 350); // "|"

  triangle(200 + mx, 120, 210 + mx, 120, 200 + mx, 130);
  triangle(250 + mx, 120, 260 + mx, 120, 260 + mx, 130);
  triangle(200 + mx, 130, 200 + mx, 140, 210 + mx, 140);
  triangle(260 + mx, 130, 260 + mx, 140, 250 + mx, 140);

  triangle(200 + mx, 240, 210 + mx, 240, 200 + mx, 250);
  triangle(250 + mx, 240, 260 + mx, 240, 260 + mx, 250);
  triangle(200 + mx, 250, 200 + mx, 260, 210 + mx, 260);
  triangle(260 + mx, 250, 260 + mx, 260, 250 + mx, 260);

  triangle(200 + mx, 360, 210 + mx, 360, 200 + mx, 370);
  triangle(250 + mx, 360, 260 + mx, 360, 260 + mx, 370);
  triangle(200 + mx, 370, 200 + mx, 380, 210 + mx, 380);
  triangle(260 + mx, 370, 260 + mx, 380, 250 + mx, 380); // "-"

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
