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
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(204);

    background(255,255,200); //  beige
    fill(128,100,100); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    if (obj.hours >= 12){
        hours = hours - 12;
    }
    
    
	let h = map(hours, 0, 11, 0, 365);
    let mi = map(minutes, 0, 60, 0, 365);
    let s =map(seconds, 0, 60, 0, 365);
    let m = map(millis, 0, 999, 0, 365);
    angleMode(DEGREES);

    
    fill(0);
    translate(width/2, height/2);

//millis
    push();
    
    var i = 0
    stroke(255, 204, 0);

    while( i < millis){
    	rotate(1);
    	line(0,-20 , 0, -50); 
    	i = i + 1;
    }
    pop();

    
//second

    push();

    var i = 0;
    stroke('red');

    strokeWeight(4)
    while( i < s ){
    	rotate(1); 
    	line(0,-90 , 0, -110); 
    	i = i + 1;
    }

    pop();
    
    
    
//minute

	push();

	var i = 0;
	stroke('blue');

    strokeWeight(4)
    
    while(i < mi){
    rotate(1);
    line(0,-120 , 0, -140); 
    
    i = i + 1;
    
    }
    pop();
//hours

    push();
    var i = 0;
	stroke(0);
    strokeWeight(4)

    while(i < h){
    	rotate(1);
    	line(0, -150, 0, -170);
    	i = i + 1;
    }
    
    pop();




}


