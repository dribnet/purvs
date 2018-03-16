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
	// text("Hello", 0, 0);

    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(200);
    strokeWeight (5);

    //Using 3D so translating to make location act like 2D 
	translate(-width/2,-height/2 +60);

	translate (100,150);
    // noStroke ();

    //background(255,186,13); //  beige
    /*
    fill(0); // dark grey
    text("Hour: "   + hours, 20, 22);
    text("Minute: " + minutes, 20, 42);
    text("Second: " + seconds, 20, 62);
    text("Millis: " + millis, 20, 82);

    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, 0, width);
*/

	fill(13,242,255,80);
   /* fill(13,242,255);
    ellipse(hours, 125, 64,64);
    fill (0);
    ellipse (minutes, 225, 64,64);
    fill (20,158,54);
    ellipse (seconds, 325, 64,64);
    fill (163,35,158);
    ellipse (millis, 425, 64, 64);
    */
    /*
    flower (hours, 50, 64,64);
    fill (0);
    flower (minutes, 150, 64,64);
    fill (20,158,54);
    flower (seconds, 250, 64,64);
    fill (163,35,158);
    flower (millis, 350, 64, 64);

	//rotateX (frameCount * 0.01);
	//rotateY(frameCount * 0.01);
	//box (50); 
	*/

	// rotateX(frameCount *0.01);
	// rotateY(frameCount *0.01);
	// box(50);

	push(); // BOX 1 
	translate (80,0);
	rotateX (hours * 0.01);
	rotateY(hours * 0.01);
	box(100);
	pop();

	push(); //box2 
	translate (280,0);
	rotateX (minutes * 0.01);
	rotateY(minutes * 0.01);
	box(100);
	pop();

	push(); // BOX 3
	translate(470,0);
	rotateX (seconds* 0.01);
	rotateY(seconds * 0.01);
	box(100);
	pop();

	push(); //box4
	translate (680,0);
	rotateX (millis * 0.01);
	rotateY(millis * 0.01);
	box(100);
	pop();


	
	// push(); //box2 
	// translate (380,0);
	// rotateX (frameCount * 0.01);
	// rotateY(frameCount * 0.01);
	// box(100);
	// pop();
	
}



/*function flower (x, y) {
  push();
  translate(x, y);
  //stroke(0);
  //strokeWeight(70);
    ellipse (100,100,30,30);
    ellipse (120,120,30,30);
    ellipse (100,120,30,30);
    ellipse (120,100,30,30);
    fill(255,0,0);
    ellipse (110,110,20,20);

  pop();
}
*/

