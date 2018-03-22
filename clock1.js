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

    if (obj.hours >= 12){
        hours = hours - 12;
    }
    //print(obj.hours);

    if ((obj.hours < 7) || (obj.hours > 19)){
        dayTime = false;
    } else {
        dayTime = true;
    }
    print(seconds);

    
    let hourRot   = map(hours, 0, 12, 0, 360);
    let minuteRot = map(minutes, 0, 60, 0, 360);
    let secondRot = map(seconds, 0, 60, 0, 360);
    let millisRot = map(millis, 0, 999, 0, 360);
    
    angleMode(DEGREES);

    if(alarm == 0){
        print("Alarms Happnin");
        if(seconds % 2){
            dayTime = false;
        } else {
            dayTime = true;
        }
    }

    if(dayTime == true){
        background(73, 228, 237);
    } else{
        background(49, 92, 160);
    }   

    noStroke();
    

    fill(0);
    translate(width/2, height/2);


    //Hours Ring
    hourGround();
    push();
    push();
    rotate(-30);
    for(let i = 0; i < hours; i += 1) { //draws trees up to current hour
      rotate(30);
    hourTree(); 
    }
    pop();
    rotate(hourRot); //Rotates Tree Around Centre point
    hourTree();
    pop();

    //Minutes Ring
    minuteGround();
    push();
    push();
    rotate(-6);
    for(let i = 0; i < minutes; i += 1) { //draws trees up to current minute
      rotate(6);
    minuteTree();
    }
    pop();

    rotate(minuteRot); //Rotates Tree Around Centre point
    if (minutes == 0) {
      fill(255);
      ellipse(0, 0, 340, 340)
      fill(0);
    }
    minuteTree();
    pop();

    //Seconds Ring
    secondGround();
    push();
    push();
    rotate(-6);
    for(let i = 0; i < seconds; i += 1) { //draws trees up to current second
      rotate(6);
    secondTree();
    }
    pop();
    
    rotate(secondRot); //Rotates Tree Around Centre point
    if (seconds == 0) {
      secondGround();
    }
    secondTree();
    pop();


    //day night divider
    push();
    translate(-(width/2), -(height/2));
     if(dayTime == false){
        fill(21, 65, 135, 90);
        rect(0, 0, width, height);
    }
    pop();

    //alarm going off code.

}


    


function secondGround() {
	fill(18, 165, 42);//Dark Green
	ellipse(0, 0, 225, 225);
	fill(114, 76, 11); //Brown
	ellipse(0, 0, 160, 160);


    push();
    for(let i = 0; i < 33; i += 1) {
        push();
            translate(0, -74);
            
            stroke(27, 196, 55);
            strokeWeight(2);
            arc(0, 0, 16, 16, -130, -50);       //Createa Wavy Lines
            noFill();
            arc(8, -11, 11, 11, 60, 130);
            noStroke();
        pop();
        rotate(10.9);
    }
    pop();

    push();
    for(let i = 0; i < 45; i += 1) {
        push();
            translate(0, -108);
            noFill();
            stroke(27, 196, 55);
            strokeWeight(2);
            arc(0, 0, 16, 16, -130, -50);       //Createa Wavy Lines
            arc(8, -11, 11, 11, 60, 130);
            noStroke();
        pop();
        rotate(8);
    }
    pop();
    



	fill(89, 58, 7);
	beginShape();
	vertex(43, 5);
	vertex(60, 10);
	vertex(60, 30);
	vertex(45, 35);
	vertex(30, 20);
	endShape(CLOSE);

	push();
	translate(-50, -50);
	beginShape();
	vertex(50, 3);
	vertex(80, 20);
	vertex(60, 40);
	vertex(35, 35);
	vertex(30, 15);
	endShape(CLOSE);
	pop();

	push();
	translate(-70, 20);
	beginShape();
	vertex(50, 3);
	vertex(80, 20);
	vertex(60, 40);
	vertex(35, 35);
	vertex(30, 15);
	endShape(CLOSE);
	pop();


}

function minuteGround() {
	fill(27, 196, 55);
    ellipse(0, 0, 305, 305);
    fill(18, 165, 42);
	ellipse(0, 0, 300, 300);
	

}

function hourGround() {
	fill(27, 196, 55);
    ellipse(0, 0, 350, 350);
    fill(18, 165, 42);
	ellipse(0, 0, 345, 345);
	

}

function secondTree(){
    fill(55, 74, 59); //Dark Green
    rect(-3, -105, 5, 1);
    rect(-4, -104, 7, 1);
    rect(-5, -103, 9, 1);
    rect(-5, -102, 10, 1);
    rect(-5, -101, 10, 1);
    rect(-5, -100, 10, 1);
    rect(-4, -99, 8, 1);
    rect(-3, -98, 6, 1);

    fill(32, 102, 20);//Mid Green
    rect(-1, -105, 1, 1);
    rect(-3, -104, 3, 1);
    rect(-4, -103, 4, 1);
    rect(-4, -102, 6, 1);
    rect(-3, -101, 5, 1);
    rect(0, -100, 2, 1);
    rect(-2, -99, 1, 1);

    fill(54, 170, 34); // Light Green
    rect(0, -104, 2, 1);
    rect(2, -103, 1, 1);
    rect(3, -102, 1, 1);
    rect(2, -101, 2, 1);

    fill(56, 35, 9); //Dark Brown
    rect(-3, -102, 1, 1);
    rect(-2, -101, 1, 2);
    rect(-1, -98, 1, 1);
    rect(-2, -97, 2, 1);
    rect(-3, -96, 1, 1);

    fill(102, 66, 20); //Mid Brown
    rect(-3, -103, 1,1);
    rect(0, -103, 2,1);
    rect(-2, -102, 2,1);
    rect(-1, -101, 1, 1);
    rect(-1, -100, 1, 1);
    rect(-1, -99, 2, 1);
    rect(-2, -96, 3, 1);

    fill(144, 92, 25); //Light Brown
    rect(0, -102, 1, 1);
    rect(2, -102, 1, 1);
    rect(0, -98, 1, 2);
    rect(1, -96, 1, 1);
}

function minuteTree() {
    push();
    translate(0, -140);

    fill(55, 74, 59); //DarkGreen
    rect(0, 1, 4, 1);
    rect(-1, 2, 6, 1);
    rect(-4, 3, 10, 1);
    rect(-6, 4, 12, 1);
    rect(-7, 5, 14, 3);
    rect(7, 6, 1, 1);
    rect(-6, 8, 13, 1);
    rect(-5, 9, 10, 2);
    rect(2, 11, 2, 1);

    fill(32, 102, 20); //Mid Green
    rect(0, 2, 4, 5);
    rect(-1, 4, 1, 2);
    rect(4, 3, 1, 6);
    rect(5, 5, 1, 3);
    rect(1, 7, 3, 3);
    rect(4, 8, 1, 1);

    rect(-4, 5, 2, 1);
    rect(-5, 6, 3, 1);
    rect(-5, 7, 4, 1);

    fill(54, 170, 34); //Light Green
    rect(1, 3, 2, 1);
    rect(2, 4, 2, 1);
    rect(3, 5, 2, 1);
    rect(4, 6, 1, 2); 

    fill(56, 35, 9); //Dark Brown
    rect(-3, 8, 1, 2);
    rect(-2, 10, 1, 3);
    rect(-1, 13, 1, 2);
    rect(-2, 15, 1, 1);

    fill(102, 66, 20); // Mid Brown
    rect(-3, 7, 1, 1);
    rect(2, 7, 1, 1);
    rect(-2, 8, 1, 2);
    rect(1, 8, 2, 1);
    rect(0, 9, 1, 2);
    rect(-1, 11, 2, 2);
    rect(1, 13, 1, 1);
    rect(0, 14, 1, 1);
    rect(-1, 15, 3, 1);       

    fill(144, 92, 25); // Light Brown
    rect(1, 9, 1, 3);
    rect(0, 13, 1, 1);
    rect(1, 14, 1, 1);
    rect(2, 15, 1, 1);
    pop();
}

function hourTree() {
    push();
    translate(-20, -200);
    fill(55, 74, 59); //Dark Green
    rect(20, 1, 5, 1);
    rect(18, 2, 13, 1);
    rect(17, 3, 15, 1);
    rect(16, 4, 17, 23);
    rect(15, 5, 1, 3);
    rect(35, 6, 5, 10);
    rect(33, 7, 2, 20);
    rect(40, 7, 1, 8);
    rect(35, 16, 4, 1);
    rect(35, 17, 1, 9);
    rect(36, 17, 1, 7);
    rect(31, 27, 3, 1);
    rect(30, 28, 3, 1);
    rect(7, 12, 5, 1);
    rect(7, 15, 1, 1);
    rect(4, 13, 12, 14);
    rect(3, 14, 1, 12);
    rect(2, 15, 1, 10);
    rect(1, 19, 1, 4);
    rect(6, 27, 11, 1);

    fill(32, 102, 20); //Mid Green
    rect(20, 2, 9, 1);
    rect(19, 3, 11, 1);
    rect(19, 4, 8, 1);
    rect(18, 5, 1, 1);
    rect(20, 5, 8, 1);
    rect(18, 6, 2, 20);
    rect(21, 6, 7, 2);
    rect(20, 8, 1, 6);
    rect(22, 8, 6, 1);
    rect(21, 9, 1, 1);
    rect(23, 9, 5, 3);
    rect(21, 9, 5, 11);
    rect(27, 12, 2, 3);
    rect(29, 13, 1, 4);
    rect(28, 14, 4, 2);
    rect(34, 8, 3, 7);
    rect(33, 9, 5, 5);
    rect(32, 10, 7, 3);
    rect(39, 14, 1, 1);
    rect(30, 15, 4, 11);
    rect(23, 16, 5, 7);
    rect(22, 21, 1, 1);
    rect(16, 14, 2, 2);
    rect(17, 16, 1, 4);
    rect(20, 24, 6, 3);
    rect(25, 23, 2, 1);
    rect(6, 13, 4, 1);
    rect(4, 14, 6, 1);
    rect(5, 15, 6, 2);
    rect(6, 17, 6, 2);
    rect(8, 19, 9, 7);
    rect(3, 15, 1, 7);
    rect(4, 17, 1, 7);
    rect(5, 19, 1, 4);
    rect(6, 20, 2, 6);
    rect(5, 23, 18, 2);
    rect(7, 26, 9, 1);
    rect(20, 22, 1, 1);


    fill(54, 170, 34); //Light Green
    rect(25, 1, 2, 1);
    rect(23, 2, 5, 1);
    rect(27, 3, 2, 2);
    rect(28, 5, 1, 7);
    rect(29, 4, 2, 1);
    rect(29, 5, 1, 6);
    rect(30, 5, 2, 5);
    
    rect(36, 7, 3, 1);
    rect(37, 8, 3, 1);
    rect(38, 9, 3, 1);
    rect(39, 10, 2, 4);
    rect(38, 13, 1, 1);
    rect(37, 14, 2, 1);
    
    rect(34, 16, 1, 9);
    rect(33, 17, 1, 2);
    rect(35, 20, 1, 3);
    rect(33, 24, 1, 3);
    rect(32, 26, 1, 1);

    rect(24, 16, 3, 1);
    rect(26, 17, 2, 1);
    rect(27, 18, 1, 7);
    rect(26, 24, 1, 1);
    rect(25, 25, 2, 1);
    rect(24, 26, 3, 1);
    rect(23, 27, 2, 1);

    rect(14, 23, 1, 1);
    rect(12, 24, 4, 1);
    rect(11, 25, 6, 1);
    rect(10, 26, 5, 1);

    rect(10, 13, 1, 1);
    rect(10, 14, 4, 1);
    rect(12, 15, 3, 2);
    rect(13, 17, 3, 3);
    rect(15, 20, 1, 1);




    fill(102, 66, 20); // Mid Brown
    rect(26, 12, 1, 1);
    rect(25, 13, 1, 1);
    rect(24, 14, 1, 1);
    rect(23, 15, 1, 2);
    rect(21, 19, 2, 1);
    rect(20, 15, 2, 2);
    rect(18, 17, 3, 1);
    rect(19, 20, 1, 1);

    rect(11, 15, 1, 3);
    rect(12, 19, 1, 1);
    rect(11, 20, 4, 2);
    rect(10, 21, 1, 1);
    rect(9, 22, 2, 1);
    rect(15, 21, 4, 3);
    rect(18, 24, 1, 1);
    rect(19, 25, 2, 3);
    rect(21, 26, 1, 2);
    rect(22, 27, 1, 1);

    rect(30, 16, 1, 3);
    rect(28, 19, 2, 9);
    rect(30, 25, 1, 1);

    rect(26, 28, 1, 1);
    rect(19, 29, 1, 1);
    rect(20, 28, 5, 9);
    rect(17, 37, 9, 4);
    rect(26, 40, 5, 1);   

    fill(56, 35, 9); //Dark Brown
    rect(18, 12, 1, 1);
    rect(19, 13, 1, 5);
    rect(20, 14, 1, 1);
    rect(22, 12, 1, 1);
    rect(21, 13, 2, 1);
    rect(18, 18, 1, 3);
    rect(17, 20, 1, 1);

    rect(29, 17, 1, 3);
    rect(28, 19, 1, 7);
    rect(27, 25, 1, 3);
    rect(25, 27, 2, 1);
    rect(24, 28, 2, 1);
    
    rect(14, 21, 1, 2);
    rect(15, 22, 2, 2);
    rect(16, 24, 2, 1);
    rect(17, 25, 2, 1);
    rect(18, 26, 1, 2);
    rect(19, 27, 1, 2);
    rect(20, 29, 1, 3);
    rect(22, 33, 1, 1);
    rect(21, 33, 1, 3);
    rect(20, 34, 1, 3);
    rect(19, 32, 6, 1);
    rect(21, 37, 1, 3);
    rect(17, 37, 2, 2);
    rect(16, 39, 2, 1);
    rect(22, 40, 1, 1);
    rect(15, 40, 2, 1);


    fill(144, 92, 25); // Light Brown
    rect(27, 10, 2, 3);
    rect(26, 13, 1, 1);
    rect(25, 14, 1, 1);
    rect(24, 15, 1, 1);
    rect(22, 16, 1, 1);
    rect(19, 18, 1, 2);
    rect(12, 17, 1, 2);

    rect(31, 16, 1, 1);
    rect(30, 17, 2, 1);
    rect(31, 21, 2, 1);
    rect(30, 22, 2, 1);
    rect(31, 25, 1, 1);
    rect(30, 26, 2, 1);
    rect(29, 27, 2, 1);
    rect(27, 28, 3, 1);
    rect(25, 29, 3, 1);
    rect(25, 30, 1, 1);
   
    rect(22, 29, 1, 2);
    rect(23, 32, 2, 1);
    rect(24, 33, 2, 1);
    rect(24, 36, 1, 1);
    rect(25, 36, 1, 3);
    rect(26, 38, 1, 2);
    rect(27, 39, 1, 2);
    rect(28, 40, 2, 1);
    pop();

}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}