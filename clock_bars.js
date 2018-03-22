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
    background(180,184, 179);
    fill(128,100,100); 
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    if (obj.hours > 12) {
        background(41, 96, 143);
    }

    if (obj.hours >= 12){
        hours = hours - 12;
    }

    // if (alarm > 0){
    //    background(0);
    // }

    // if (alarm > 0) {
    //     background(lerpColor(C3, C4, (sin(al/4)+1)/3));
    // }
    
    
	let h = map(hours, 0, 11, 0, 360);
    let mi = map(minutes, 0, 60, 0, 360);
    let s =map(seconds, 0, 60, 0, 360);
    let m = map(millis, 0, 999, 0, 360);
    let a = map(alarm, 20, 0, 360, 0);
    angleMode(DEGREES);
    C1 = color(213, 100, 124);
    C2 = color(231, 161, 176);
    C3 = color(255, 195, 77);
    C4 = color(255, 43, 0);
    colorMode(RGB);

    
    fill(0);
    translate(width/2, height/2);

    if (alarm > 0) {

        background(lerpColor(C3, C4, sin(a)+1));

    }


//millis
    push();

    var i = 0;
    stroke(lerpColor(C1, C2, (sin(m/4)+1)/3));
    

    while(i < 360){
        rotate(1);
        line(0, -20, 0, -50);
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
    line(0,-100 , 0, -125); 
    
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
    	line(0, -135, 0, -165);
    	i = i + 1;
    }

   
    
    pop();

    push();
        var i = 0;
        stroke(255);
        // strokeWeight(2);
        fill(255);

    while(i < 360){
        rotate(60);
        ellipse(0, -165, 5, 5);
        i = i + 1;
    }

    pop();

    

}
