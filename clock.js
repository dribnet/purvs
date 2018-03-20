const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

var startX = 0;
var startY = 250;
var finishX = 960;
var pulse;
var r = 0;
var g = 0;
var b = 50;

function draw_clock(obj) {
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let seconds_until_alarm = obj.seconds_until_alarm;

    for(let i = 0; i<5;i++){
        
        background(r,g,b);
        noStroke();
        hourLoci = map(hours,0,23,25,CANVAS_WIDTH-25);   
        minLoci = map(minutes,0,59,25,CANVAS_WIDTH-25);   
        secLoci = map(seconds,0,59,25,CANVAS_WIDTH-25);  
        milLoci = map(millis,0,1000,25,CANVAS_WIDTH-25);    
        r = map(hourLoci,0,960,255,0); //changes from red to blue (day/night)
        pulse = map(milLoci/2,0,960,255,0);
        if(minutes == 47){seconds_until_alarm = 0; }
        if(seconds_until_alarm == 0){ //when the alarms going off do something
        background(pulse,50,pulse);
        }
      

    //note these are ordered like this on purpose to prevent overlapping issues

        //seconds
        fill(255);
        rect(0,startY+112,CANVAS_WIDTH,25);
        rect(secLoci-12,0,25,startY+132);
        fill(255);
        ellipse(secLoci,startY+126,50,50);
        fill(0);
        if(seconds <10){text("0"+seconds,secLoci-7,startY+132);}
        else{text(seconds,secLoci-7,startY+132);}

        //minutes
        fill(255);
        rect(0,startY+50,CANVAS_WIDTH,25);
        rect(minLoci-12,0,25,startY+69);
        fill(255);
        ellipse(minLoci,startY+63,50,50);
        fill(0);
        if(minutes<10)text("0"+minutes,minLoci-7,startY+69);
        else{text(minutes,minLoci-7,startY+69);}

        //hours
        fill(255);
        rect(0,237,CANVAS_WIDTH,25);
        rect(hourLoci-12,0,25,startY);
        ellipse(hourLoci,startY,50,50);
        fill(0);
        if(hours<10)text("0"+hours,hourLoci-6,startY+5);
        else{text(hours,hourLoci-5,startY+5);}
       
        //millis
        fill(255);
        rect(0,startY+175,CANVAS_WIDTH,25);
        if(seconds_until_alarm == 0){fill(pulse,50,pulse); }
        else{fill(r,g,b);}
        rect(0,startY+182,milLoci,10); //this is the rect that follows the ellipse
        fill(255);
        ellipse(milLoci,startY+190,50,50);
        fill(0);
        if(millis<10)text("0"+millis,milLoci-7,startY+195);
        else{text(millis,milLoci-7,startY+195);}



    fill(255); 
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);
    text("Alarm: " + seconds_until_alarm, 10, 102);
      
    }
 
}







