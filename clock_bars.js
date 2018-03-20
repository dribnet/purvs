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
    let alarm = obj.seconds_until_alarm;
    background(204);
        //print(alarm);
    background(180,184, 179); //  beige
    fill(128,100,100); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    if (obj.hours >= 12){
        hours = hours - 12;
    }

    if (alarm > 0){
       background(0) 
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
    stroke(255);

    while( i < m){
    	rotate(1);
    	line(0,-20 , 0, -50); 
    	i = i + 1;
    }
    pop();

    
//second

    push();

    var i = 0;
    stroke(146, 188, 222);

    strokeWeight(4)
    while( i < s ){
    	rotate(1); 
    	line(0,-65 , 0, -85); 
    	i = i + 1;
    }

    pop();
    
    
    
//minute

	push();

	var i = 0;
	stroke(172, 208, 180);

    strokeWeight(4)
    
    while(i < mi){
    rotate(1);
    line(0,-95 , 0, -115); 
    
    i = i + 1;
    
    }
    pop();
//hours

    push();
    var i = 0;
	stroke(244, 96, 92);
    strokeWeight(4)

    while(i < h){
    	rotate(1);
    	line(0, -125, 0, -145);
    	i = i + 1;
    }
    
    pop();


    while(i < 360){
        stroke(255);
        strokeWeight(2);
        rotate(6);
        line(0, -143, 0, -147);
        i = i + 1;
    }

}

