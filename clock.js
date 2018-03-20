/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
hourSpinSpeed = 0.01;
minSpinSpeed = 0.01;
secSpinSpeed = 0.01;
milSpinSpeed = 0.01;
spinSpeed = 0.01;

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
	// text("Hello", 0, 0);

    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(230);
    stroke(255);
    strokeWeight (5);

    if (obj.seconds_until_alarm != 0 ){
        hourSpinSpeed = 0.01* hours; 
    }

    // let colourHours = map(hours,0,23,0,255);
    // let colourMin = map(minutes,0,59,0,255);
    // let colourSec = map (seconds,0,59,0,255);
    // let colourMillis = map(millis, 0 ,1000,0,255); 

    //Using 3D so translating to make location act like 2D 
	translate(-width/2,-height/2 +60);

	translate (100,150);

    if (obj.seconds_until_alarm == 0){

        alarmCheck();


    } 

    hourss(hours);
    minn(minutes);
    sec(seconds);
    mill(millis);



}

    function hourss (hours){

        let colourHours = map(hours,0,23,0,255);
        fill(colourHours, 255,196,75);

    push(); // BOX 1 
    translate (80,0);
    rotateX (hours * spinSpeed);
    rotateY(hours * spinSpeed);
    box(100);
    pop();

    }


    function minn(minutes) {

        let colourMin = map(minutes,0,59,0,255);
        fill(colourMin, 123,224,75);

    push(); //box2 
    translate (280,0);
    rotateX (minutes * spinSpeed);
    rotateY(minutes * spinSpeed);
    box(100);
    pop();

    }

    function sec (seconds){

        let colourSec = map (seconds,0,59,0,255);
        fill(colourSec,255,0,75);

    push(); // BOX 3
    translate(470,0);
    rotateX (seconds* spinSpeed);
    rotateY(seconds * spinSpeed);
    box(100);
    pop();

    }

   function mill (millis){

    let colourMillis = map(millis, 0 ,1000,0,255); 
    fill(colourMillis, 86,143,75);

    push(); //box4
    translate (680,0);
    rotateX (millis * spinSpeed);
    rotateY(millis * spinSpeed);
    box(100);
    pop();


   }




	
	// push(); //box2 
	// translate (380,0);
	// rotateX (frameCount * 0.01);
	// rotateY(frameCount * 0.01);
	// box(100);
	// pop();
	


function alarmCheck(){

    spinSpeed = 0.1; 




    // obj.seconds_until_alarm
    //          Float indicating the state of the alarm. The value will be:
    //           < 0 if the alarm is not set
    //           = 0 if the alarm is going off
    //           > 0 if the alarm is set. the float value then represents the number of seconds until the alarm goes off


}


