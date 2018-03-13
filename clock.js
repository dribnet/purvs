const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;


var startX = 0;
var startY = 250;
var finishX = 960;
var finishY = 0;

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
    background(r,g,b);

    var r = 0;
    var g = 0;
    var b = 50;

    var ballHour = map(hours,0,960,0,23); 
    var ballMin = map(minutes,0,960,0,59); 
    var ballSec = map(seconds,0,590,960,); 
    var ballMil = map(millis,0,960,0,1000); 

    r = map(startY,0,960,0,255); //changes blue on left to red on right


    fill(255);


    for(var i = 0; i<finishX;i++){
        background(r,g,b);
        //this is for the hours
        fill(255);
        rect(0,237,CANVAS_WIDTH,25);
        ellipse(hours,startY,50,50);
        fill(0);
        text(hours,hours-5,startY+5);


        //this if for the minutes

        fill(255);
        rect(0,300,CANVAS_WIDTH,25);
        ellipse(minutes,startY+63,50,50);
        fill(0);
        text(minutes,minutes-5,startY+67);

        //seconds
        fill(255);
        rect(0,367,CANVAS_WIDTH,25);
        ellipse(seconds,startY+126,50,50);
        fill(0);
        text(seconds,seconds-5,startY+134);




        fill(128,100,100); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

        if(startX>CANVAS_WIDTH){startX = 0;startY = 250;}
        else{startX = startX +0.001;}
    }

}
