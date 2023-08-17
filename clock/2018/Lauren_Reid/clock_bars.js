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
    let alarmsecs = obj.seconds_until_alarm;
     let heartcol = color('#DC143C');

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
    fill(220, 20, 60);
    textSize(12);
    textFont('Avenir Next Condensed');
    text(h + ":" + m + ":" + s, 430, 375);




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
    fill(heartcol);
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


//alarm


let countX = -4;
let countY = 19;
let heartsX = 0;
let heartsY = 0;
let hx = random(-200, 200);
let hy = random(-200, 200);

    if(alarmsecs > 0){
        fill(255);
        rotate(90);
        textSize(20);
        if(alarmsecs > 9.5){
            countX = -9;
        }
        text(round(alarmsecs), countX, countY);
 
        }

    if(alarmsecs == 0){
        for(i=0; i<2; i++){
        hearts(hx, hy);
        hearts(hx, hy);
}
        }

    if(alarmsecs < 0){
         hx = 0;
         hy = 0;
        }


}

function hearts(heartsX, heartsY){
push();
    rotate(90);
    translate(heartsX, heartsY);
    scale(1);
    beginShape();
    vertex(50, 15);
    bezierVertex(50, -5, 90, 5, 50, 40)
    vertex(50, 15);
    bezierVertex(50, -5, 10, 5, 50, 40);
    endShape();
pop(); 
}












