const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;


var startX = 0;
var startY = 250;
var finishX = 960;


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
    

    var r = 0;
    var g = 0;
    var b = 50;


    r = map(seconds,0,960,0,220); //changes blue on left to red on right

    

    for(let i = 0; i<seconds;i++){
     
        background(r,g,b);

        hourLoci = map(hours,0,23,0,CANVAS_WIDTH);   
        minLoci = map(minutes,0,59,0,CANVAS_WIDTH);   
        secLoci = map(seconds,0,59,0,CANVAS_WIDTH);  
        milLoci = map(millis,0,1000,0,CANVAS_WIDTH);    


        //hours
        fill(255);
        rect(0,237,CANVAS_WIDTH,25);
        ellipse(hourLoci,startY,50,50);
        fill(0);
        text(hours,hourLoci-5,startY+5);

        //minutes
        fill(255);
        rect(0,300,CANVAS_WIDTH,25);
        ellipse(minLoci,startY+63,50,50);
        fill(0);
        text(minutes,minLoci-7,startY+69);

        //seconds
        fill(255);
        rect(0,367,CANVAS_WIDTH,25);
        ellipse(secLoci,startY+126,50,50);
        fill(0);
        text(seconds,secLoci-7,startY+132);

       
        //millis
        fill(255);
        rect(0,434,CANVAS_WIDTH,25);
        ellipse(milLoci,startY+200,50,50);
        fill(0);
        text(millis,milLoci-7,startY+200);





    fill(128,100,100); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

        
    }

}
