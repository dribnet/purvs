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
    //        > 0 --> the number of seconds until alarm should go off'
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(40);

    angleMode(RADIANS);

    var boxSize = 80;

    let hourRotate   = map(hours, 0, 23, 0, 90);
    let minuteRotate = map(minutes, 0, 59, 0, 90);
    // if(minutes % 2 == 0){
    //     let secondRotate = map(seconds, 0, 59, 90, 0);
    // }else{
    let secondRotate = map(seconds, 0, 59, 0, 90);
    //}
    //let millisBarWidth = map(millis, 0, 1000, 0, -90);

    fill(255);

    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    angleMode(DEGREES);

    push();
    translate(960/2,400);

    stroke(255);
    line(-960/2,0,960/2,0);

    //hours block
    push();
    translate(-200,0);
    rotate(hourRotate);
    rect(0,0,-boxSize,-boxSize);
    pop();

    //minutes block
    push();
    translate(0,);
    rotate(minuteRotate);
    rect(0,0,-boxSize,-boxSize);
    pop();

    //seconds block
    push();
    translate(200,0);
    rotate(secondRotate);
    rect(0,0,-boxSize,-boxSize);
    pop();

    pop();
}

//     //seconds block
//     push();
//     translate(960/3,250);
//     if(seconds == 59){
//         runRotate();
//     }
//     else{
//         rect(0,0,boxSize,boxSize);
//     }
//     pop();
// }

// function runRotate(){
//     var r = 0;
//     while(r < 90){
//         rotate(r);
//         rect(0,0,boxSize,boxSize);
//         r++;
//     }
//     r =
// }
