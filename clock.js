/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

const position = [90, 285, 525, 720];
var t = 0;
var pink = '#fae';

var R = 255;
var G = 255;
var B = 200;

function draw_clock(obj) {

    strokeWeight(2);
	stroke(0);

	let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;
    

    background(R,G,B); // beige

    let hourBarWidth   = map(hours, 0, 23, 0, height-100);
    let minuteBarWidth = map(minutes, 0, 59, 0, height-100);
    let secondBarWidth = map(seconds, 0, 59, 0, height-100);
    let millisBarWidth = map(millis, 0, 1000, 0, height-100);

    let minutesWithFraction   = minutes + (seconds / 60.0) + (millis / 60000.0);
    let minutesBarHeightSmooth  = map(minutesWithFraction, 0, 60, 0, height-100);
    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondBarHeightSmooth  = map(secondsWithFraction, 0, 60, 0, height-100);

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

    if(alarm<0){
    	fill(pink);
    	draw_dot1();
    	fill(pink);
    	draw_dot2();
	} else if(alarm>0){
		t+=1;
		if(t<60){
			fill(255,0,0);
			draw_dot1();
			fill(255);
			draw_dot2();
		} else if(t<=120){
			fill(255);
			draw_dot1();
			fill(255,0,0);
			draw_dot2();
			if(t==120){
				t=0;
			}
		} else {
			t=0;
		}
	} else if(alarm==0){
		t+=1;
		if(t<20){
			fill(255,0,0);
			draw_dot1();
			fill(255,0,0);
			draw_dot2();
		} else if(t<=40){
			fill(255);
			draw_dot1();
			fill(255);
			draw_dot2();
			if(t==40){
				t=0;
			}
		} else {
			t=0;
		}
	}
}

function draw_dot1() {
    rect(475, 280, 30, 30);
    
    fill(51);
    beginShape();
    	vertex(505, 280);
    	vertex(490, 260);
    	vertex(460, 260);
    	vertex(460, 290);
    	vertex(475, 309);
    	vertex(475, 280);
    endShape(CLOSE);

    fill(0);
    line(475, 280, 460, 260);
}

function draw_dot2() {
    rect(475, 180, 30, 30);
    
    fill(51);
    beginShape();
    	vertex(505, 180);
    	vertex(490, 160);
    	vertex(460, 160);
    	vertex(460, 190);
    	vertex(475, 209);
    	vertex(475, 180);
    endShape(CLOSE);

    fill(0);
    line(475, 180, 460, 160);
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

	line(p+30, 110, p+15, 90);
	line(p+60, 80, p+45, 60);
	line(p+120, 80, p+105, 60);
	line(p+30, 350, p+15, 330);

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

	line(p+30, 330, p+15, 310);
	line(p+110, 370, p+95, 350);
	line(p+120, 360, p+105, 340);
	line(p+30, 110, p+15, 90);
	line(p+60, 80, p+45, 60);
	line(p+120, 80, p+105, 60);
	line(p+60, 230, p+45, 210);
	line(p+110, 230, p+95, 210);
	line(p+120, 220, p+105, 200);

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
	} else if(h>0.0 && fillHeight>370.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>360.0){
	let dig;
	if(fillHeight>=360.0 && fillHeight<=370.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine1 = map(dig, 370, 360, p+70, p+60);
	let diagonalLine2 = map(dig, 370, 360, p+110, p+120);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(diagonalLine2, fillHeight);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(diagonalLine1, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>330.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>270.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>260.0){
	let dig;
	if(fillHeight>=260.0 && fillHeight<=270.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine = map(dig, 270, 260, p+120, p+110);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(diagonalLine, fillHeight);
		vertex(p+120, 270);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>245.0){
	let dig;
	if(fillHeight>=245.0 && fillHeight<=260.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine = map(dig, 260, 245, p+150, p+135);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(diagonalLine, fillHeight);
		vertex(p+60, fillHeight);
		vertex(p+60, 260);
		vertex(p+110, 260);
		vertex(p+120, 270);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>230.0){
	let dig;
	if(fillHeight>=230.0 && fillHeight<=245.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine = map(dig, 245, 230, p+135, p+150);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(p+135, 245);
		vertex(diagonalLine, fillHeight);
		vertex(p+60, fillHeight);
		vertex(p+60, 260);
		vertex(p+110, 260);
		vertex(p+120, 270);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>230.0){
	let dig;
	if(fillHeight>=220.0 && fillHeight<=230.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine = map(dig, 230, 220, p+135, p+150);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(p+135, 245);
		vertex(diagonalLine, fillHeight);
		vertex(p+60, fillHeight);
		vertex(p+60, 260);
		vertex(p+110, 260);
		vertex(p+120, 270);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>220.0){
	let dig;
	if(fillHeight>=220.0 && fillHeight<=230.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine = map(dig, 230, 220, p+110, p+120);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(p+135, 245);
		vertex(p+150, 230);
		vertex(p+150, fillHeight);
		vertex(diagonalLine, fillHeight);
		vertex(p+110, 230);
		vertex(p+60, 230);
		vertex(p+60, 260);
		vertex(p+110, 260);
		vertex(p+120, 270);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>140){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(p+135, 245);
		vertex(p+150, 230);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
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
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);	
	} else if(h>0.0 && fillHeight>120){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(p+135, 245);
		vertex(p+150, 230);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
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
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);	
	beginShape();
		vertex(p+30, fillHeight);
		vertex(p+60, fillHeight);
		vertex(p+60, 140);
		vertex(p+30, 140);
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
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(p+135, 245);
		vertex(p+150, 230);
		vertex(p+150, fillHeight);
		vertex(diagonalLine2, fillHeight);
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
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);	
	beginShape();
		vertex(p+30, fillHeight);
		vertex(p+30, 140);
		vertex(p+60, 140);
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
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 260);
		vertex(p+135, 245);
		vertex(p+150, 230);
		vertex(p+150, 110);
		vertex(diagonalLine2, fillHeight);
		vertex(diagonalLine1, fillHeight);
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
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);	
	}
} // done

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

	line(p+30, 80, p+15, 60);
	line(p+120, 80, p+105, 60);
	line(p+120, 270, p+105, 250);

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

	line(p+110, 370, p+95, 350);
	line(p+120, 360, p+105, 340);
	line(p+30, 80, p+15, 60);
	line(p+120, 200, p+105, 180);

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
	} else if(h>0.0 && fillHeight>370.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>360.0){
	let dig;
	if(fillHeight>=360.0 && fillHeight<=370.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine1 = map(dig, 370, 360, p+70, p+60);
	let diagonalLine2 = map(dig, 370, 360, p+110, p+120);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(diagonalLine2, fillHeight);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(diagonalLine1, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>330.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>240.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>230.0){
	let dig;
	if(fillHeight>=230.0 && fillHeight<=240.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine = map(dig, 240, 230, p+120, p+110);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(diagonalLine, fillHeight);
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>200.0){
	let dig;
	if(fillHeight>=200.0 && fillHeight<=230.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine = map(dig, 230, 200, p+150, p+120);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(diagonalLine, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 230);
		vertex(p+110, 230);
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>110.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(p+120, 200);
		vertex(p+60, 200);
		vertex(p+60, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 230);
		vertex(p+110, 230);
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>80.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(p+120, 200);
		vertex(p+60, 200);
		vertex(p+60, 110);
		vertex(p+150, 110);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 230);
		vertex(p+110, 230);
		vertex(p+120, 240);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	}
} // done

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
	} else if(h>0.0 && fillHeight>230.0) {
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);		
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>200.0){
	let dig;
	if(fillHeight>=200.0 && fillHeight<=230.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine2 = map(dig, 230, 200, p+150, p+120);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(diagonalLine2, fillHeight);
		vertex(p+30, fillHeight);		
		vertex(p+30, 230);
		vertex(p+30, 380);
	endShape(CLOSE);		
	} else if(h>0.0 && fillHeight>140.0) {
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(p+120, 200);
		vertex(p+60, 200);
		vertex(p+60, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>120.0) {
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(p+120, 200);
		vertex(p+60, 200);
		vertex(p+60, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	beginShape();
		vertex(p+120, 140);
		vertex(p+150, 140);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>110.0){
	let dig;
	if(fillHeight>=110.0 && fillHeight<=120.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine2 = map(dig, 120, 110, p+60, p+70);
	let diagonalLine1 = map(dig, 120, 110, p+120, p+110);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, 230);
		vertex(p+120, 200);
		vertex(p+60, 200);
		vertex(p+60, 120);
		vertex(diagonalLine2, fillHeight);		
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	beginShape();
		vertex(p+120, 140);
		vertex(p+150, 140);
		vertex(p+150, fillHeight);
		vertex(diagonalLine1, fillHeight);		
		vertex(p+120, 120);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>80.0){
	let dig;
	if(fillHeight>=80.0 && fillHeight<=110.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine2 = map(dig, 110, 80, p+30, p+60);
	let diagonalLine1 = map(dig, 110, 80, p+150, p+120);
	beginShape();
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
		vertex(diagonalLine1, fillHeight);
		vertex(diagonalLine2, fillHeight);		
		vertex(p+30, 110);
		vertex(p+30, 380);
	endShape(CLOSE);
	}


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

	line(p+30, 110, p+15, 90);
	line(p+60, 80, p+45, 60);
	line(p+120, 80, p+105, 60);
	line(p+110, 370, p+95, 350);
	line(p+120, 360, p+105, 340);
	line(p+120, 200, p+105, 180);
} // done

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

	line(p+30, 80, p+15, 60);
	line(p+120, 120, p+107.5, 110);

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

	line(p+30, 110, p+15, 90);
	line(p+60, 80, p+45, 60);
	line(p+120, 80, p+105, 60);
	line(p+110, 370, p+95, 350);
	line(p+120, 360, p+105, 340);
	line(p+110, 180, p+95, 160);
	line(p+120, 170, p+105, 150);
	line(p+30, 220, p+15, 200);
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
	} else if(h>0.0 && fillHeight>370.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>360.0){
	let dig;
	if(fillHeight>=360.0 && fillHeight<=370.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine1 = map(dig, 370, 360, p+70, p+60);
	let diagonalLine2 = map(dig, 370, 360, p+110, p+120);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(diagonalLine2, fillHeight);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(diagonalLine1, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>330.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>270.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+120, fillHeight);
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>240.0){
	let dig;
	if(fillHeight>=240.0 && fillHeight<=270.0){
		dig = fillHeight;
	}else{
		dig = -1;
	}
	let diagonalLine1 = map(dig, 270, 240, p+60, p+30);
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(diagonalLine1, fillHeight);
		vertex(p+60, 270);
		vertex(p+120, 270)
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	} else if(h>0.0 && fillHeight>110.0){
	beginShape();
		vertex(p+60, 410);
		vertex(p+120, 410);
		vertex(p+150, 380);
		vertex(p+150, fillHeight);
		vertex(p+30, fillHeight);
		vertex(p+30, 240);
		vertex(p+60, 270);
		vertex(p+120, 270)
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
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
		vertex(p+30, 240);
		vertex(p+60, 270);
		vertex(p+120, 270)
		vertex(p+120, 360);
		vertex(p+110, 370);
		vertex(p+70, 370);
		vertex(p+60, 360);
		vertex(p+60, 330);
		vertex(p+30, 330);
		vertex(p+30, 380);
	endShape(CLOSE);
	}	

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

	line(p+30, 110, p+15, 90);
	line(p+60, 80, p+45, 60);
	line(p+120, 80, p+105, 60);
	line(p+110, 370, p+95, 350);
	line(p+120, 360, p+105, 340);
	line(p+110, 240, p+95, 220);
	line(p+120, 230, p+105, 210);
	line(p+30, 330, p+15, 310);
} // done

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

	line(p+30, 110, p+15, 90);
	line(p+60, 80, p+45, 60);
	line(p+120, 80, p+105, 60);
	line(p+110, 370, p+95, 350);
	line(p+120, 360, p+105, 340);
} // done