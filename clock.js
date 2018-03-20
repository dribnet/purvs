/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

const position = [90, 285, 525, 720];
var x = 180;
var y = 180;
var d = 10;

var x_speed = 8;
var y_speed = 3;

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

    strokeWeight(2);
	stroke(0);

	// fill(0,0,255);
	// ellipse(x, y, d, d);

	// x = x+x_speed;
	// y = y+y_speed;

	//   	//bouncing horizontally  	
 //  	 if (x > width || x < 0)  {
 //     	x_speed = -x_speed;
 //  	}
 //  		//bouncing veritcally
 //  	if (y > height || y < 0) {
	//  	y_speed = -y_speed;
 //  	}

	let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    
    background(255,255,200); //  beige
    fill(128,100,100); // dark grey
    
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82); 
    text("X: " + mouseX, 10, 150); 
    text("X: " + mouseY, 10, 170);

    let hourBarWidth   = map(hours, 0, 23, 0, height-100);
    let minuteBarWidth = map(minutes, 0, 59, 0, height-100);
    let secondBarWidth = map(seconds, 0, 59, 0, height-100);
    let millisBarWidth = map(millis, 0, 1000, 0, height-100);

    let minutesWithFraction   = minutes + (seconds / 60.0) + (millis / 60000.0);
    let minutesBarHeightSmooth  = map(minutesWithFraction, 0, 60, 0, height-100);
    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondBarHeightSmooth  = map(secondsWithFraction, 0, 60, 0, height-100);


    fill('#fae');
    rect(465, 160, 30, 30);
    rect(465, 260, 30, 30);
    
    fill(51);
    beginShape();
    	vertex(495, 160);
    	vertex(480, 140);
    	vertex(450, 140);
    	vertex(450, 170);
    	vertex(465, 190);
    	vertex(465, 160);
    endShape(CLOSE);

    beginShape();
    	vertex(495, 260);
    	vertex(480, 240);
    	vertex(450, 240);
    	vertex(450, 270);
    	vertex(465, 290);
    	vertex(465, 260);
    endShape(CLOSE);

    fill(0);
    line(465, 160, 450, 140);
    line(465, 260, 450, 240);


    // noStroke();
    // fill(40);
    // rect(90, height-(50+minutesBarHeightSmooth), 180, minutesBarHeightSmooth);
    // fill(80);
    // rect(285, height-(50+minutesBarHeightSmooth), 180, minutesBarHeightSmooth);
    // fill(80);
    // rect(525, height-(50+secondBarheightSmooth), 180, secondBarheightSmooth);
    // fill(80);
    // rect(720, height-(50+secondBarheightSmooth), 180, secondBarheightSmooth);

	let minutes1 = int(minutes/10);
    let minutes2 = minutes%10;
    let hours1 = int(hours/10);
    let hours2 = hours%10;

    if(hours1==0){
    	draw_zero(minutesBarHeightSmooth, position[0]);
    } else if(hours1==1){
    	draw_one(minutesBarHeightSmooth, position[0]);
    } else if(hours1==2){
    	draw_two(minutesBarHeightSmooth, position[0]);
    }

    if(hours2==0){
    	draw_zero(minutesBarHeightSmooth, position[1]);
    } else if(hours2==1){
    	draw_one(minutesBarHeightSmooth, position[1]);
    } else if(hours2==2){
    	draw_two(minutesBarHeightSmooth, position[1]);
    } else if(hours2==3){
    	draw_three(minutesBarHeightSmooth, position[1]);
    } else if(hours2==4){
    	draw_four(minutesBarHeightSmooth, position[1]);
    } else if(hours2==5){
    	draw_five(minutesBarHeightSmooth, position[1]);
    } else if(hours2==6){
    	draw_six(minutesBarHeightSmooth, position[1]);
    } else if(hours2==7){
    	draw_seven(minutesBarHeightSmooth, position[1]);
    } else if(hours2==8){
    	draw_eight(minutesBarHeightSmooth, position[1]);
    } else if(hours2==9){
    	draw_nine(minutesBarHeightSmooth, position[1]);
    }
    
    if(minutes1==0){
    	draw_zero(secondBarHeightSmooth, position[2]);
    } else if(minutes1==1){
    	draw_one(secondBarHeightSmooth, position[2]);
    } else if(minutes1==2){
    	draw_two(secondBarHeightSmooth, position[2]);
    } else if(minutes1==3){
    	draw_three(secondBarHeightSmooth, position[2]);
    } else if(minutes1==4){
    	draw_four(secondBarHeightSmooth, position[2]);
    } else if(minutes1==5){
    	draw_five(secondBarHeightSmooth, position[2]);
    }

    if(minutes2==0){
    	draw_zero(secondBarHeightSmooth, position[3]);
    } else if(minutes2==1){
    	draw_one(secondBarHeightSmooth, position[3]);
    } else if(minutes2==2){
    	draw_two(secondBarHeightSmooth, position[3]);
    } else if(minutes2==3){
    	draw_three(secondBarHeightSmooth, position[3]);
    } else if(minutes2==4){
    	draw_four(secondBarHeightSmooth, position[3]);
    } else if(minutes2==5){
    	draw_five(secondBarHeightSmooth, position[3]);
    } else if(minutes2==6){
    	draw_six(secondBarHeightSmooth, position[3]);
    } else if(minutes2==7){
    	draw_seven(secondBarHeightSmooth, position[3]);
    } else if(minutes2==8){
    	draw_eight(secondBarHeightSmooth, position[3]);
    } else if(minutes2==9){
    	draw_nine(secondBarHeightSmooth, position[3]);
    }

    fill (0,0,255);
  	ellipse (x, y, d, d);

  	//bouncing horizontally
 	x = x + x_speed;
  	
  	if (x+10 > 960 || x-10 < 0)  {
     	x_speed = -x_speed;
  	}

  	//bouncing veritcally
  	y = y + y_speed;

  	if (y+10 > 500 || y-10 < 0) {
	 	y_speed = -y_speed;
  	}

}

function draw_one(h, p) {

	fill(51);

	beginShape();
		vertex(p+55, 350);
		vertex(p+15, 350);
		vertex(p+15, 390);
		vertex(p+30, 410);
		vertex(p+135, 390);
		vertex(p+150, 370);
		vertex(p+135, 350);
		vertex(p+105, 350);
		vertex(p+110, 80);
		vertex(p+95, 60);
		vertex(p+55, 60);
		vertex(p+15, 90);
		vertex(p+15, 120);
		vertex(p+30, 140);
		vertex(p+55, 120);
	endShape(CLOSE);

	fill(255);

	beginShape();
		vertex(p+70, 370);
		vertex(p+30, 370);
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+110, 370);
		vertex(p+110, 80);
		vertex(p+70, 80);
		vertex(p+30, 110);
		vertex(p+30, 140);
		vertex(p+70, 140);
	endShape(CLOSE);

	fill('#fae');
	let fillHeight = map(h, 0, height-100, 410, 80);

	if(h>0.0 && fillHeight>370.0){
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
	endShape(CLOSE);
	}else if(h>0.0 && fillHeight>140.0){
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+110, 370);
		vertex(p+110, fillHeight);
		vertex(p+70, fillHeight);
		vertex(p+70, 370);
		vertex(p+30, 370);
	endShape(CLOSE);
	}else if(h>0.0 && fillHeight>110.0){
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+110, 370);
		vertex(p+110, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 140);
		vertex(p+70, 140);
		vertex(p+70, 370);
		vertex(p+30, 370);
	endShape(CLOSE);
	}else if(h>0.0 && fillHeight>80.0){
		let dig;
	if(fillHeight>=80.0 && fillHeight<=110.0){
	dig = fillHeight;
	}else{
	dig = -1;
	}
	let diagonalLine = map(dig, 110, 80, p+30, p+70);
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+110, 370);
		vertex(p+110, fillHeight);
		vertex(diagonalLine, fillHeight);
		vertex(p+30, 110);
		vertex(p+30, 140);
		vertex(p+70, 140);
		vertex(p+70, 370);
		vertex(p+30, 370);
	endShape(CLOSE);
	}
	line(p+55, 350, p+70, 370);
	line(p+15, 350, p+30, 370);
	line(p+55, 60, p+70, 80);
	line(p+15, 90, p+30, 110);
} // done

function draw_two(h, p) {

	fill(51);

	beginShape();
		vertex(p+15, 390);
		vertex(p+30, 410);
		vertex(p+150, 370);
		vertex(p+135, 350);
		vertex(p+45, 350);
		vertex(p+45, 330);
		vertex(p+135, 130);
		vertex(p+150, 110);
		vertex(p+105, 60);
		vertex(p+45, 60);
		vertex(p+15, 90);
		vertex(p+15, 130);
		vertex(p+30, 150);
		vertex(p+45, 130);
		vertex(p+45, 100);
		vertex(p+55, 90);
		vertex(p+95, 90);
		vertex(p+105, 100);
		vertex(p+105, 130);
		vertex(p+15, 330);
		vertex(p+15, 350);
	endShape(CLOSE);

	fill(255);

	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+60, 370);
		vertex(p+60, 350);
		vertex(p+150, 150);
		vertex(p+150, 110);
		vertex(p+150, 110);
		vertex(p+120, 80);
		vertex(p+60, 80);
		vertex(p+30, 110);
		vertex(p+30, 150);
		vertex(p+60, 150);
		vertex(p+60, 120);
		vertex(p+70, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 150);
		vertex(p+30, 350);
	endShape(CLOSE);

	fill('#fae');
	let fillHeight = map(h, 0, height-100, 410, 80);

	if(h>0.0 && fillHeight>370.0){
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>350){
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+60, 370);
		vertex(p+60, fillHeight);
		vertex(p+30, fillHeight);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>150){
		let dig;
		if(fillHeight>=150.0 && fillHeight<=350.0){
			dig = fillHeight;
		}else{
			dig = -1;
		}
		let diagonalLine1 = map(dig, 350, 150, p+30, p+120);
		let diagonalLine2 = map(dig, 350, 150, p+60, p+150);
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+60, 370);
		vertex(p+60, 350);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
		vertex(p+30, 350);
	endShape(CLOSE);	
	} else if(h>0.0 && fillHeight>120){
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+60, 370);
		vertex(p+60, 350);
		vertex(p+150, 150);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
		vertex(p+120, 150);
		vertex(p+30, 350);
	endShape(CLOSE);
	beginShape();
		vertex(p+30, fillHeight);
		vertex(p+60, fillHeight);
		vertex(p+60, 150);
		vertex(p+30, 150);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>110){
		let dig;
		if(fillHeight>=110.0 && fillHeight<=120.0){
			dig = fillHeight;
		}else{
			dig = -1;
		}
		let diagonalLine1 = map(dig, 120, 110, p+60, p+70);
		let diagonalLine2 = map(dig, 120, 110, p+120, p+110);	
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+60, 370);
		vertex(p+60, 350);
		vertex(p+150, 150);
		vertex(p+150, 120);
		vertex(p+150, fillHeight);
		vertex(diagonalLine2, fillHeight);
		vertex(p+120, 120);
		vertex(p+120, 150);
		vertex(p+30, 350);
	endShape(CLOSE);
	beginShape();
		vertex(p+30, fillHeight);
		vertex(p+30, 150);
		vertex(p+60, 150);
		vertex(p+60, 120);
		vertex(diagonalLine1, fillHeight);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>80){
		let dig;
		if(fillHeight>=80.0 && fillHeight<=110.0){
			dig = fillHeight;
		}else{
			dig = -1;
		}
		let diagonalLine1 = map(dig, 110, 80, p+30, p+60);
		let diagonalLine2 = map(dig, 110, 80, p+150, p+120);	
	beginShape();
		vertex(p+30, 410);
		vertex(p+150, 410);
		vertex(p+150, 370);
		vertex(p+60, 370);
		vertex(p+60, 350);
		vertex(p+150, 150);
		vertex(p+150, 110);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
		vertex(p+30, 110);
		vertex(p+30, 150);
		vertex(p+60, 150);
		vertex(p+60, 120);
		vertex(p+70, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 150);
		vertex(p+30, 350);
	endShape(CLOSE);
	}
} // done

function draw_three(h, p){

	fill(51);

	beginShape();
		vertex(p+45, 310);
		vertex(p+15, 310);
		vertex(p+15, 360);
		vertex(p+30, 380);
		vertex(p+105, 390);
		vertex(p+135, 360);
		vertex(p+135, 240);
		vertex(p+120, 225);
		vertex(p+135, 210);
		vertex(p+150, 110);
		vertex(p+105, 60);
		vertex(p+45, 60);
		vertex(p+15, 90);
		vertex(p+15, 120);
		vertex(p+30, 140);
		vertex(p+45, 120);
		vertex(p+45, 100);
		vertex(p+55, 90);
		vertex(p+95, 90);
		vertex(p+105, 100);
		vertex(p+105, 200);
		vertex(p+95, 210);
		vertex(p+45, 210);
		vertex(p+45, 240);
		vertex(p+60, 260);
		vertex(p+95, 240);
		vertex(p+105, 250);
		vertex(p+105, 340);
		vertex(p+95, 350);
		vertex(p+55, 350);
		vertex(p+45, 340);
		vertex(p+60, 330);
	endShape(CLOSE);

	fill(255);

	beginShape();
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(p+135, 245);
		vertex(p+150, 230);

		vertex(p+150, 110);
		vertex(p+120, 80);
		vertex(p+60, 80);
		vertex(p+30, 110);
		vertex(p+30, 140);
		vertex(p+60, 140);
		vertex(p+60, 120);
		vertex(p+70, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);

		vertex(p+120, 220);
		vertex(p+110, 230);
		vertex(p+60, 230);
		vertex(p+60, 260);
		vertex(p+110, 260);
		vertex(p+120, 270);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
	endShape(CLOSE);
}

function draw_four(h, p){

	fill(51);
	beginShape();
		vertex(p+105, 390);
		vertex(p+120, 410);
		vertex(p+135, 390);
		vertex(p+150, 80);
		vertex(p+135, 60);
		vertex(p+105, 60);
		vertex(p+105, 250);
		vertex(p+55, 250);
		vertex(p+45, 240);
		vertex(p+60, 80);
		vertex(p+45, 60);
		vertex(p+15, 60);
		vertex(p+15, 250);
		vertex(p+30, 270);
		vertex(p+45, 280);
		vertex(p+105, 280);
	endShape(CLOSE);

	fill(255);
	beginShape();
		vertex(p+120, 410);
		vertex(p+150, 410);
		vertex(p+150, 80);
		vertex(p+120, 80);
		vertex(p+120, 270);
		vertex(p+70, 270);
		vertex(p+60, 260);
		vertex(p+60, 80);
		vertex(p+30, 80);
		vertex(p+30, 270);
		vertex(p+60, 300);
		vertex(p+120, 300);
	endShape(CLOSE);

	fill('#fae');
	let fillHeight = map(h, 0, height-100, 410, 80);

	if(h>0.0 && fillHeight>300.0){
		beginShape();
			vertex(p+120, 410);
			vertex(p+150, 410);
			vertex(p+150, fillHeight);
			vertex(p+120, fillHeight);
		endShape(CLOSE);
	} else if(h>0.0 && fillHeight>270.0){
		let dig;
		if(fillHeight>=270.0 && fillHeight<=300.0){
			dig = fillHeight;
		}else{
			dig = -1;
		}
		let diagonalLine = map(dig, 300, 270, p+60, p+30);
		beginShape();
			vertex(p+120, 410);
			vertex(p+150, 410);
			vertex(p+150, fillHeight);
			vertex(diagonalLine, fillHeight);
			vertex(p+60, 300)
			vertex(p+120, 300);
		endShape(CLOSE);
	} else if(h>0.0 && fillHeight>260.0){
		let dig;
		if(fillHeight>=260.0 && fillHeight<=270.0){
			dig = fillHeight;
		}else{
			dig = -1;
		}
		let diagonalLine = map(dig, 270, 260, p+70, p+60);
		beginShape();
			vertex(p+120, 410);
			vertex(p+150, 410);
			vertex(p+150, fillHeight);
			vertex(p+120, fillHeight);
			vertex(p+120, 270);
			vertex(p+70, 270);
			vertex(diagonalLine, fillHeight);
			vertex(p+30, fillHeight);
			vertex(p+30, 270);
			vertex(p+60, 300)
			vertex(p+120, 300);
		endShape(CLOSE);
	} else if(h>0.0 && fillHeight>80.0){
		beginShape();
			vertex(p+120, 410);
			vertex(p+150, 410);
			vertex(p+150, fillHeight);
			vertex(p+120, fillHeight);
			vertex(p+120, 270);
			vertex(p+70, 270);
			vertex(p+60, 260);
			vertex(p+60, fillHeight);
			vertex(p+30, fillHeight);			
			vertex(p+30, 270);
			vertex(p+60, 300)
			vertex(p+120, 300);
		endShape(CLOSE);
	}
} // done

function draw_five(h, p){

	fill(51);

	beginShape();
		vertex(p+60, 330);
		vertex(p+45, 310);
		vertex(p+15, 310);
		vertex(p+15, 360);
		vertex(p+30, 380);
		vertex(p+45, 390);
		vertex(p+105, 390);
		vertex(p+135, 360);
		vertex(p+150, 230);
		vertex(p+105, 180);
		vertex(p+45, 180);
		vertex(p+45, 90);
		vertex(p+135, 90);
		vertex(p+150, 80);
		vertex(p+135, 60);
		vertex(p+15, 60);
		vertex(p+15, 210);
		vertex(p+30, 230);
		vertex(p+95, 210);
		vertex(p+105, 220);
		vertex(p+105, 340);
		vertex(p+95, 350);		
		vertex(p+55, 350);
		vertex(p+45, 340);
	endShape(CLOSE);

	fill(255);

	beginShape();
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(p+120, 200);
		vertex(p+60, 200);
		vertex(p+60, 110);
		vertex(p+150, 110);
		vertex(p+150, 80);
		vertex(p+30, 80);
		vertex(p+30, 230);
		vertex(p+110, 230);
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);		
		vertex(p+70, 370);
		vertex(p+60, 360);
	endShape(CLOSE);
}

function draw_six(h, p){

	fill(51);

	beginShape();
		vertex(p+15, 360);
		vertex(p+30, 380);
		vertex(p+45, 390);
		vertex(p+105, 390);
		vertex(p+135, 360);
		vertex(p+150, 230);
		vertex(p+105, 180);
		vertex(p+45, 180);
		vertex(p+45, 100);
		vertex(p+55, 90);
		vertex(p+95, 90);
		vertex(p+105, 100);
		vertex(p+105, 120);
		vertex(p+120, 140);
		vertex(p+135, 120);
		vertex(p+150, 110);
		vertex(p+105, 60);
		vertex(p+45, 60);
		vertex(p+15, 90);
	endShape(CLOSE);

	fill(255);

	beginShape();
		vertex(p+30, 330);
		vertex(p+30, 380);
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(p+120, 200);
		vertex(p+60, 200);
		vertex(p+60, 120);
		vertex(p+70, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 140);
		vertex(p+150, 140);
		vertex(p+150, 110);
		vertex(p+120, 80);
		vertex(p+60, 80);
		vertex(p+30, 110);
	endShape(CLOSE);


	fill(255,255,200);

	beginShape();
		vertex(p+60, 230);
		vertex(p+110, 230);
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);	
		vertex(p+70, 370);
		vertex(p+60, 360);
	endShape(CLOSE);

	fill(51);

	beginShape();
		vertex(p+105, 230);
		vertex(p+110, 230);
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);	
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 350);
		vertex(p+95, 350);
		vertex(p+105, 340);
	endShape(CLOSE);
}

function draw_seven(h, p){

	fill(51);
	beginShape();
		vertex(p+15, 60);
		vertex(p+135, 60);
		vertex(p+150, 80);
		vertex(p+135, 100);
		vertex(p+45, 390);
		vertex(p+30, 410);
		vertex(p+15, 390);
		vertex(p+105, 100);
		vertex(p+105, 90);
		vertex(p+30, 110);
		vertex(p+15, 90);
	endShape(CLOSE);

	fill(255);
	beginShape();
		vertex(p+30, 80);
		vertex(p+150, 80);
		vertex(p+150, 120);
		vertex(p+60, 410);
		vertex(p+30, 410);
		vertex(p+120, 120);
		vertex(p+120, 110);
		vertex(p+30, 110);
	endShape(CLOSE);

	fill('#fae');
	let fillHeight = map(h, 0, height-100, 410, 80);
	if(h>0.0 && fillHeight>120.0){
		let dig;
	if(fillHeight>=120.0 && fillHeight<=410.0){
	dig = fillHeight;
	}else{
	dig = -1;
	}
	let diagonalLine1 = map(dig, 410, 120, p+30, p+120);
	let diagonalLine2 = map(dig, 410, 120, p+60, p+150);
	beginShape();
		vertex(p+30, 410);
		vertex(p+60, 410);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
	endShape(CLOSE);	
	} else if(h>0.0 && fillHeight>110.0){
	beginShape();
		vertex(p+30, 410);
		vertex(p+60, 410);
		vertex(p+150, 120);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
		vertex(p+120, 120);
	endShape(CLOSE);	
	} else if(h>0.0 && fillHeight>80.0){
	beginShape();
		vertex(p+30, 410);
		vertex(p+60, 410);
		vertex(p+150, 120);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 110);
		vertex(p+120, 110);
		vertex(p+120, 120);
	endShape(CLOSE);	
	}
} // done

function draw_eight(h, p){

	fill(51);
	beginShape();
		vertex(p+15, 310);
		vertex(p+15, 360);
		vertex(p+30, 380);
		vertex(p+45, 390);
		vertex(p+105, 390);
		vertex(p+135, 360);
		vertex(p+135, 200);
		vertex(p+120, 185);
		vertex(p+135, 170);
		vertex(p+150, 110);
		vertex(p+135, 90);
		vertex(p+105, 60);
		vertex(p+45, 60);
		vertex(p+15, 90);
		vertex(p+15, 170);
		vertex(p+30, 185);
		vertex(p+15, 200);
	endShape(CLOSE);

	fill(255);
	beginShape();
		vertex(p+30, 330);
		vertex(p+30, 380);
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 220);
		vertex(p+135, 205);
		vertex(p+150, 190);
		vertex(p+150, 110);
		vertex(p+120, 80);
		vertex(p+60, 80);
		vertex(p+30, 110);
		vertex(p+30, 190);
		vertex(p+45, 205);
		vertex(p+30, 220);
	endShape(CLOSE);

	fill('#fae');
	let fillHeight = map(h, 0, height-100, 410, 80);
	if(h>0.0 && fillHeight>380.0){
		let dig;
	if(fillHeight>=380.0 && fillHeight<=410.0){
	dig = fillHeight;
	}else{
	dig = -1;
	}
	let diagonalLine1 = map(dig, 410, 380, p+60, p+30);
	let diagonalLine2 = map(dig, 410, 380, p+120, p+150);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>220.0) {
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);		
	} else if(h>0.0 && fillHeight>205.0){
		let dig;
	if(fillHeight>=205.0 && fillHeight<=220.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine1 = map(dig, 220, 205, p+30, p+45);
	let diagonalLine2 = map(dig, 220, 205, p+150, p+135);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 220);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
		vertex(p+30, 220);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>190.0){
		let dig;
	if(fillHeight>=190.0 && fillHeight<=205.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine1 = map(dig, 205, 190, p+45, p+30);
	let diagonalLine2 = map(dig, 205, 190, p+135, p+150);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 220);
		vertex(p+135, 205);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
		vertex(p+45, 205);
		vertex(p+30, 220);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>110.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 220);
		vertex(p+135, 205);
		vertex(p+150, 190);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 190);
		vertex(p+45, 205);
		vertex(p+30, 220);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>80.0){
		let dig;
	if(fillHeight>=80.0 && fillHeight<=110.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine1 = map(dig, 110, 80, p+30, p+60);
	let diagonalLine2 = map(dig, 110, 80, p+150, p+120);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 220);
		vertex(p+135, 205);
		vertex(p+150, 190);
		vertex(p+150, 110);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
		vertex(p+30, 110);
		vertex(p+30, 190);
		vertex(p+45, 205);
		vertex(p+30, 220);
		vertex(p+30, 380);
	endShape(CLOSE);
	}

	fill(255,255,200);
	beginShape();
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);	
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 240);
		vertex(p+70, 230);
		vertex(p+110, 230);
	endShape(CLOSE);

	beginShape();
		vertex(p+60, 120);
		vertex(p+70, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 170);
		vertex(p+110, 180);
		vertex(p+70, 180);
		vertex(p+60, 170);
	endShape(CLOSE);

	fill(51);
	beginShape();
		vertex(p+105, 230);
		vertex(p+110, 230);
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);	
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 350);
		vertex(p+95, 350);
		vertex(p+105, 340);
	endShape(CLOSE);

	beginShape();
		vertex(p+105, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 170);
		vertex(p+110, 180);
		vertex(p+70, 180);
		vertex(p+60, 170);
		vertex(p+60, 160);
		vertex(p+95, 160);
		vertex(p+105, 150);
	endShape(CLOSE);
} // done

function draw_nine(h, p){

	fill(51);

	beginShape();
		vertex(p+60, 330);
		vertex(p+45, 310);
		vertex(p+15, 310);
		vertex(p+15, 360);
		vertex(p+30, 380);
		vertex(p+45, 390);
		vertex(p+105, 390);
		vertex(p+135, 360);
		vertex(p+150, 110);
		vertex(p+135, 90);
		vertex(p+105, 60);
		vertex(p+45, 60);
		vertex(p+15, 90);
		vertex(p+15, 220);
		vertex(p+30, 240);
		vertex(p+45, 250);
		vertex(p+105, 250);
		vertex(p+105, 340);
		vertex(p+95, 350);	
		vertex(p+55, 350);
		vertex(p+45, 340);
	endShape(CLOSE);

	fill(255);

	beginShape();
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 110);
		vertex(p+120, 80);
		vertex(p+60, 80);
		vertex(p+30, 110);
		vertex(p+30, 240);
		vertex(p+60, 270);
		vertex(p+120, 270);
		vertex(p+120, 360);
		vertex(p+110, 370);	
		vertex(p+70, 370);
		vertex(p+60, 360);
	endShape(CLOSE);

	fill(255,255,200);

	beginShape();
		vertex(p+60, 120);
		vertex(p+70, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 230);
		vertex(p+110, 240);
		vertex(p+70, 240);
		vertex(p+60, 230);
	endShape(CLOSE);

	fill(51);

	beginShape();
		vertex(p+105, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 230);
		vertex(p+110, 240);
		vertex(p+70, 240);
		vertex(p+60, 230);
		vertex(p+60, 220);
		vertex(p+95, 220);
		vertex(p+105, 210);
	endShape(CLOSE);
}

function draw_zero(h, p){

	fill(51);
	beginShape();
		vertex(p+15, 360);
		vertex(p+30, 380);
		vertex(p+45, 390);
		vertex(p+105, 390);
		vertex(p+135, 360);
		vertex(p+150, 110);
		vertex(p+135, 90);
		vertex(p+105, 60);
		vertex(p+45, 60);
		vertex(p+15, 90);
	endShape(CLOSE);

	fill(255);
	beginShape();
		vertex(p+30, 380);
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 110);
		vertex(p+120, 80);
		vertex(p+60, 80);
		vertex(p+30, 110);
	endShape(CLOSE);


	fill('#fae');
	let fillHeight = map(h, 0, height-100, 410, 80);
	if(h>0.0 && fillHeight>380.0){
		let dig;
	if(fillHeight>=380.0 && fillHeight<=410.0){
	dig = fillHeight;
	}else{
	dig = -1;
	}
	let diagonalLine1 = map(dig, 410, 380, p+60, p+30);
	let diagonalLine2 = map(dig, 410, 380, p+120, p+150);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>110.0) {
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);		
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>80.0){
	let dig;
	if(fillHeight>=80.0 && fillHeight<=110.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine1 = map(dig, 110, 80, p+30, p+60);
	let diagonalLine2 = map(dig, 110, 80, p+150, p+120);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 110);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);		
		vertex(p+30, 110);
		vertex(p+30, 380);
	endShape(CLOSE);		
	}

	fill(255,255,200);
	beginShape();
		vertex(p+60, 120);
		vertex(p+70, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
	endShape(CLOSE);

	fill(51);

	beginShape();
		vertex(p+105, 110);
		vertex(p+110, 110);
		vertex(p+120, 120);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 350);
		vertex(p+95, 350);
		vertex(p+105, 340);
	endShape(CLOSE);
} // done