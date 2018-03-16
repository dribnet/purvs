const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;


var startX = 0;
var startY = 250;
var finishX = 960;
var alarmCol = "#DB7093";

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
    let seconds_until_alarm = obj.seconds_until_alarm;

    var r = 0;
    var g = 0;
    var b = 50;


    for(let i = 0; i<5;i++){

        background(r,g,b);
       noStroke();
        hourLoci = map(hours,0,23,25,CANVAS_WIDTH-25);   
        minLoci = map(minutes,0,59,25,CANVAS_WIDTH-25);   
        secLoci = map(seconds,0,59,25,CANVAS_WIDTH-25);  
        milLoci = map(millis,0,1000,25,CANVAS_WIDTH-25);    
        r = map(hourLoci,0,960,255,0); //changes from red to blue (day/night)

        if(seconds == 59){seconds_until_alarm = 0;}
        if(secLoci == minLoci){background(50);}
        if(seconds_until_alarm == 0){ background(alarmCol);}
    //note these are ordered like this on purpose because of overlapping issues

        //seconds
        fill(255);
        //rect(secLoci-12,startY+126,25,CANVAS_HEIGHT);
        rect(0,startY+112,CANVAS_WIDTH,25);
        rect(secLoci-12,0,25,startY+132);
        ellipse(secLoci,startY+126,50,50);
        fill(0);
        text(seconds,secLoci-7,startY+132);

           //minutes
        fill(255);
       // rect(minLoci-12,startY+63,25,CANVAS_HEIGHT);
        rect(0,startY+50,CANVAS_WIDTH,25);
        rect(minLoci-12,0,25,startY+69);
        ellipse(minLoci,startY+63,50,50);
        fill(0);
        text(minutes,minLoci-7,startY+69);

        //hours
        fill(255);
        rect(0,237,CANVAS_WIDTH,25);
        rect(hourLoci-12,0,25,startY);
        //rect(hourLoci-12,startY,25,CANVAS_HEIGHT);
        ellipse(hourLoci,startY,50,50);
        fill(0);
        text(hours,hourLoci-6,startY+5);

       
        //millis
        fill(255);
        //rect(milLoci-12,startY+200,25,CANVAS_HEIGHT);
        rect(0,startY+187,CANVAS_WIDTH,25);
        //rect(milLoci-12,0,25,CANVAS_HEIGHT);
        ellipse(milLoci,startY+200,50,50);
        fill(0);
        text(millis,milLoci-7,startY+205);


    fill(255); 
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);
    text("Alarm: " + seconds_until_alarm, 10, 102);

        

        
    }

}
