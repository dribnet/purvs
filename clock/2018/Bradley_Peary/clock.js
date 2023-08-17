/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
var x=0;

let ellipse1 = 400
let ellipse2 = 300
let ellipse3 = 200
let strokeFade1 = 200
let strokeFade2 = 200
let strokeFade3 = 200
let strokeFade4 = 200
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
    let alarm = obj.seconds_until_alarm
    angleMode(DEGREES);

    background(70,40);
    fill(255); // dark grey
    textSize(150)
noStroke()




    noStroke()
    let circleMoveMilli = map(millis, 0, 1000, -90, 270);
    let circleMoveSecond = map(seconds, 0, 59, -90, 270);
    let circleMoveMinute = map(minutes, 0, 59, -90, 270);
    let circleMovehour = map(hours, 0, 23, -90, 270);
        let secondsWithFraction   = seconds + (millis / 1000.0);
        let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, -90, 270);    


    let secondpos = 150


    let colourRotateR = map(seconds,0,59,0,255)
    let colourRotateG = map(hours,0,59,50,255)
    let colourRotateB = map(minutes,0,59,0,255)
    

    push();
        background(70,20);
    translate(width/2, height/2);
    rotate(circleMoveSecond);
    //     stroke(255)
    // strokeWeight(1);
    // line(150, 0, 0 ,0)
    ellipse(150, 0, 20, 20);
    pop();
    // noStroke()
    // fill(72)
    // text(hours, 170, height/2+50);
    // text(minutes, 400, height/2+50);
    // text(seconds, 630, height/2+50);
    // //text(millis, 10, 82);
    // text(":",345,height/2+35)
    // text(":",570,height/2+35)
    // fill(255)
    push();
    translate(width/2, height/2);
    rotate(circleMoveMinute);
    //     stroke(255)
    // strokeWeight(1);
    // line(100, 0, 0 ,0)
    ellipse(100, 0, 20, 20);
    pop();

    push();
    translate(width/2, height/2);
    rotate(circleMovehour);
    // stroke(255)
    // strokeWeight(1);
    // line(50, 0, 0 ,0)
    ellipse(60, 0, 20, 20);
    pop();

push();
    translate(width/2, height/2);
    rotate(circleMoveMilli);
    stroke(colourRotateR,colourRotateG,colourRotateB)
    strokeWeight(0.2)

    if(millis == 0){
    stroke(255,0,0,100)
    
    strokeWeight(1);
    // line(200, 0, 0 ,0)
    }
        if(millis >240 && millis<260){
    stroke(255,255,0,100)
    
    strokeWeight(1);
    // line(200, 0, 0 ,0)
    }
    if(millis >490 && millis<510){
    stroke(0,255,0,100)
    
    strokeWeight(1);
    // line(200, 0, 0 ,0)
    }
    if(millis >740 && millis<760){
    stroke(0,0,255,100)
    
    strokeWeight(1);
    // line(200, 0, 0 ,0)
    }
        line(200,0,0,0)
    ellipse(200, 0, 5, 5);
    
    pop();
    noFill()
    strokeWeight(1)
    stroke(255)
    ellipse(width/2,height/2,200,200)
    ellipse(width/2,height/2,125,125)
    ellipse(width/2,height/2,300,300)
    strokeWeight(0.2)
    ellipse(width/2,height/2,400,400)

        noFill()
        strokeWeight(2)
          if(alarm > 15 && alarm < 20){

        stroke(200,0,0,strokeFade1)
        strokeFade1=strokeFade1-0.65
            ellipse(width/2, height/2, 400, 400);
     }

          if(alarm > 10 && alarm < 15){

        stroke(200,0,0,strokeFade2)
                strokeFade2=strokeFade2-0.65
            ellipse(width/2, height/2, 300, 300);
     }

               if(alarm > 5 && alarm < 10){

        stroke(200,0,0,strokeFade3)
                strokeFade3=strokeFade3-0.65
            ellipse(width/2, height/2, 200, 200);
     }
               if(alarm > 0.0001 && alarm < 5){

        stroke(200,0,0,strokeFade4)
                strokeFade4=strokeFade4-0.65
            ellipse(width/2, height/2, 125, 125);
     }

    if(alarm == 0){
        stroke(255, 79, 121,120)
strokeWeight(0.5)
    ellipse(width/2,height/2,300,ellipse2)
    ellipse(width/2,height/2,ellipse2,300)
stroke(255, 180, 154,120)
    ellipse(width/2,height/2,200,ellipse3)
    ellipse(width/2,height/2,ellipse3,200)
    strokeWeight(0.2)
    stroke(178, 64, 165)
    ellipse(width/2,height/2,400,ellipse1)
    ellipse(width/2,height/2,ellipse1,400)
    ellipse1=ellipse1-1.33
    ellipse2=ellipse2-1
    ellipse3=ellipse3-0.67


     }
     if(alarm == -1){
        ellipse1=400
        ellipse2=300
        ellipse3=200
        strokeFade1=200
        strokeFade2=200
        strokeFade3=200
        strokeFade4=200
     }



}
