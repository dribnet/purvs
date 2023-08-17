/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

let flyBird = false; 
let birdFall = false;
let fallY = 200; 
let tideCount = 1; 
var Sw;


function draw_clock(obj) {

    let hours = obj.hours;  //0-23
    let minutes = obj.minutes; //0-59
    let seconds = obj.seconds; //0-59
    let millis = obj.millis; //0-1000
    let alarm = obj.seconds_until_alarm;
    // 		  < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    let tide = (obj.hours % 6); //hours split into 4
    //let hourBarWidth   = map(hours, 0, 23, 0, width);
    //let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let W = map(millis, 0, 1000, width, 220);
    let millisBird = map(millis, 0, 1000, width, 0.5*width);
    let millisBird2 = map(millis, 0, 1000, 0.5*width, 0);
    let alarmBird = map(millis, 0, 1000, 960, 200);

    noStroke();

    function star(xpos, ypos) {
	
		fill (255, 255, 0, 150);
		ellipse(xpos+10, ypos+10, Sw, Sw);
		Sw = random(17, 19);


		fill (255, 255, 0); //yellow

		beginShape();
		vertex (xpos+5, ypos+10);
		vertex (xpos+10, ypos);
		vertex (xpos+15, ypos+10);
		vertex (xpos+10, ypos+20);
		endShape(CLOSE);

	}

    // day / night
    if ((obj.hours < 7) || (obj.hours > 19)){
        day = false;
    } else {
        day = true;
	}

	if(day == true){
    background(0,191,220);
    fill (255, 255, 0); //lighter yellow
    beginShape();
    vertex(700, 150);//TL
    vertex(680, 200);
    vertex(700, 250);//BL
    vertex(750, 270);
    vertex(800, 250);//BR
    vertex(820, 200);
    vertex(800, 150);//TR
    vertex(750, 170);

    endShape(CLOSE);
    fill (255,225,0);
    beginShape();
    vertex(795, 160);
    vertex(820, 190);
    vertex(800, 210);
    vertex(810, 200);
    vertex(845, 190);
    vertex(780, 180);
    vertex(830, 240);
    vertex(820, 230);
    endShape(CLOSE);

    beginShape();
    vertex(795, 130);
    vertex(720, 150);
    vertex(695, 210);
    vertex(710, 200);
    vertex(745, 190);
    vertex(780, 150);
    vertex(720, 240);
    vertex(710, 230);
    endShape(CLOSE);

    fill (255,205,0); //darker yellow

    beginShape();
    vertex(695, 230);
    vertex(690, 170);
    vertex(730, 200);
    vertex(690, 230);
    vertex(730, 240);
    vertex(710, 250);
    vertex(745, 235);
    vertex(690, 230);
    vertex(730, 230);
    vertex(670, 180);
    endShape(CLOSE);

        beginShape();
    vertex(745, 260);
    vertex(730, 250);
    vertex(770, 220);
    vertex(730, 270);
    vertex(770, 220);
    vertex(750, 260);
    vertex(795, 255);
    vertex(720, 260);
    vertex(760, 250);
    vertex(700, 250);
    endShape(CLOSE);
    

	} else {
	background(25, 25, 112);
	star (200, 100);
	star (180, 142);
	star (600, 400);
	star (620, 380);
	star (50, 10);
	star (750, 200);
	star (800, 70);
	star (900, 13);
	star (450, 300);
	star (400, 400);
	star (90, 100);
	star (40, 120);
	star (300, 160);
	star(460, 120);
	star(400, 290);
	star(650, -4);
	star(900, 285);

	}
   
 	//tide
 	if((hours <= 5) || ((hours >=12) && (hours <= 17))){
 	 SH = map(tide, 0, 5, 450, 300);
    }
    if(((hours >=6) && (hours <= 11)) || (hours >= 18)){
        SH = map(tide, 0, 5, 300, 450);
    }

    //ocean
    fill(0,102,255); //blue
    rect(0, SH, 960, 500); 

    fill(230, 230, 250);
    
    beginShape();
    vertex(400, SH+20);
    vertex(420, SH+22);
    vertex(430, SH+15);
    vertex(480, SH+10);
    vertex(440, SH+10);
    endShape(CLOSE);

    beginShape();
    vertex(640, SH+20);
    vertex(530, SH+22);
    vertex(570, SH+15);
    vertex(530, SH+10);
    vertex(580, SH+25);
    vertex(620, SH+10);
    endShape(CLOSE);


    beginShape();
    vertex(670, SH+40);
    vertex(560, SH+42);
    vertex(615, SH+35);
    vertex(568, SH+50);
    vertex(630, SH+45);
    vertex(680, SH+30);
    endShape(CLOSE);

    beginShape();
    vertex(560, SH+80);
    vertex(450, SH+82);
    vertex(505, SH+75);
    vertex(458, SH+90);
    vertex(520, SH+95);
    vertex(570, SH+60);
    endShape(CLOSE);


    beginShape();
    vertex(350, SH+60);
    vertex(270, SH+62);
    vertex(315, SH+65);
    vertex(258, SH+70);
    vertex(320, SH+75);
    vertex(385, SH+50);
    endShape(CLOSE);

    beginShape();
    vertex(410, SH+90);
    vertex(320, SH+92);
    vertex(435, SH+95);
    vertex(288, SH+110);
    vertex(420, SH+115);
    vertex(485, SH+90);
    endShape(CLOSE);

    beginShape();
    vertex(610, SH+130);
    vertex(520, SH+122);
    vertex(535, SH+115);
    vertex(488, SH+140);
    vertex(520, SH+155);
    vertex(444, SH+130);
    vertex(585, SH+125);
    endShape(CLOSE);

    beginShape();
    vertex(610, SH+160);
    vertex(520, SH+172);
    vertex(635, SH+155);
    vertex(588, SH+170);
    vertex(620, SH+185);
    vertex(544, SH+180);
    vertex(685, SH+175);
    endShape(CLOSE);

    beginShape();
    vertex(910, SH+80);
    vertex(720, SH+72);
    vertex(835, SH+75);
    vertex(888, SH+90);
    vertex(920, SH+85);
    vertex(844, SH+100);
    vertex(985, SH+85);
    endShape(CLOSE);

    beginShape();
    vertex(710, SH+90);
    vertex(620, SH+62);
    vertex(635, SH+85);
    vertex(688, SH+70);
    vertex(720, SH+105);
    vertex(644, SH+100);
    vertex(785, SH+95);
    endShape(CLOSE);


    beginShape();
    vertex(840, SH+30);
    vertex(790, SH+15);
    vertex(730, SH+32);
    vertex(770, SH+15);
    vertex(730, SH+20);
    vertex(780, SH+20);
    vertex(820, SH+18);
    endShape(CLOSE);

    beginShape();
    vertex(870, SH+160);
    vertex(840, SH+140);
    vertex(790, SH+165);
    vertex(720, SH+192);
    vertex(780, SH+165);
    vertex(740, SH+170);
    vertex(760, SH+170);
    vertex(815, SH+130);
    endShape(CLOSE);

    //wave
    fill(0,102,255); //blue

    if((W > 220) && (W < 270)) {
    beginShape();
    vertex(W-30, SH+1); //left bottom
    vertex(W+120, SH+1); //right bottom
    vertex(W+90, SH-66);
    vertex(W+60, SH-90); //top point
    endShape(CLOSE);

    beginShape();
    vertex(W+90, SH-66);
    vertex(W+60, SH-90);
    vertex(W+70, SH-110);
    vertex(W+120, SH-113);
    vertex(W+110, SH-99);
    vertex(W+130, SH-65);
    endShape(CLOSE);

	} else {
    beginShape();
    vertex(W-30, SH+1); //left bottom
    vertex(W+120, SH+1); //right bottom
    vertex(W+90, SH-66);
    vertex(W+60, SH-90); //top point
    vertex(W+25, SH-75);
    vertex(W+15, SH-60);
    vertex(W+20, SH-55);
    vertex(W+25, SH-65);
    vertex(W+45, SH-55);
    vertex(W+30, SH-30);
    endShape(CLOSE);

    fill(230, 230, 250); //white
	beginShape();
	vertex(W-30, SH+1);
	vertex(W+30, SH-30);
	vertex(W+45, SH-55);
	vertex(W+40, SH-30);
	endShape(CLOSE);

	beginShape();
	vertex(W+60, SH-90); //top point
    vertex(W+25, SH-75);
    vertex(W+15, SH-60);
    vertex(W+20, SH-55);
    vertex(W+20, SH-60);
	endShape(CLOSE);

	beginShape();
	vertex(W+90, SH+5);
	vertex(W+65, SH-60);
	vertex(W+80, SH+1);
	endShape(CLOSE);
	}

    //Cliff
    fill(255, 204, 128); //yellow

    beginShape();
    vertex (0, 150);
    vertex (50, 160);
    vertex (120, 145);
    vertex (150, 155);
    vertex (190, 150); //top corner 
    vertex (200, 170);
    vertex (195, 195);
    vertex (200, 250); //inner corner 
    vertex (225, 260);
    vertex (250, 245);
    vertex (300, 250); //outer corner
    vertex (297, 255);
    vertex (300, 280);
    vertex (300, 400);
    vertex (330, 425);
    vertex (325, 450);
    vertex (340, 460);
    vertex (345, 500);
    vertex (0, 500);
    endShape(CLOSE);

    fill (232, 159, 91); // mid yellow
    beginShape();
    vertex (0, 250); 
    vertex (200, 250);
    vertex (225, 260);
    vertex (250, 245);
    vertex (300, 250);
    vertex (260, 300);
    vertex (200, 280);
    endShape(CLOSE);

    beginShape();
    vertex (220, 300); 
    vertex (197, 255);
    vertex (200, 280);
    vertex (200, 400);
    vertex (230, 425);
    vertex (225, 430);
    vertex (140, 440);
    vertex (145, 490);
    vertex (130, 440);
    vertex (115, 430);
    vertex (100, 405);
    vertex (80, 400);
    endShape(CLOSE);

    beginShape();
    vertex(35, 160);
    vertex(85, 205);
    vertex(90, 250);
    vertex(100, 200);
    endShape(CLOSE);

    beginShape();
    vertex(35, 160);
    vertex(45, 205);
    vertex(70, 250);
    vertex(5, 220);
    endShape(CLOSE);

    beginShape();
    vertex();
    endShape(CLOSE);

    fill (241, 122, 54); //dark yellow 

    beginShape();
    vertex (0, 250);
    vertex (80, 252);
    vertex (120, 245);
    vertex (145, 253);
    vertex (200, 250);
    vertex (225, 260);
    vertex (250, 245);
    vertex (300, 250);
    vertex (250, 250);
    vertex (225, 270);
    vertex (200, 250);
    vertex (150, 260);
    vertex (120, 255);
    vertex (100, 258)
    endShape(CLOSE);

    beginShape();
    vertex (150, 155);
    vertex (190, 150); 
    vertex (200, 170);
    vertex (195, 195);
    vertex (200, 250);
    vertex (185, 195);
    vertex (180, 170);
    endShape(CLOSE);

    beginShape();
    vertex (300, 250); //outer corner
    vertex (297, 255);
    vertex (300, 280);
    vertex (300, 400);
    vertex (330, 425);
    vertex (325, 450);
    vertex (340, 460);
    vertex (345, 500);
    vertex (330, 460);
    vertex (315, 450);
    vertex (300, 425);
    vertex (280, 420);
    endShape(CLOSE);

    beginShape();
    vertex (220, 300); 
    vertex (197, 255);
    vertex (200, 280);
    vertex (200, 400);
    vertex (230, 425);
    vertex (225, 430);
    vertex (240, 440);
    vertex (245, 490);
    vertex (230, 440);
    vertex (215, 430);
    vertex (200, 405);
    vertex (180, 400);
    endShape(CLOSE);

    beginShape();
    vertex (275, 330);
    vertex (290, 340);
    vertex (295, 390);
    vertex (280, 340);
    vertex (265, 330);
    vertex (250, 305);
    vertex (230, 300);
    endShape(CLOSE);

    beginShape();
    vertex(50, 300);
    vertex(70, 320);
    vertex(55, 350);
    vertex(80, 380);
    endShape(CLOSE);

    beginShape();
    vertex(160, 295);
    vertex(135, 315);
    vertex(146, 330);
    vertex(95, 400);
    endShape(CLOSE);

    beginShape();
    vertex(95, 400);
    vertex(30, 410);
    vertex(15, 445);
    vertex(40, 500);
    vertex(35, 450);
    endShape(CLOSE);

    beginShape();
    vertex(235, 260);
    vertex(240, 270);
    vertex(235,275);
    vertex(200, 290);
    endShape(CLOSE);

    beginShape();
    vertex(30, 220);
    vertex(35, 160);
    vertex(15, 200);
    vertex(40, 170);
    vertex(35,175);
    vertex(40, 190);
    endShape(CLOSE);


//minute seagull
function seagull() {

	if((millis >= 0) && (millis <= 500)) {
	
	fill(255);

    beginShape();
    vertex(millisBird, 20);
    vertex(millisBird+30, 50);
    vertex(millisBird+60, 20);
    vertex(millisBird+30, 40);
    endShape(CLOSE);
		//ellipse(millisBird, 90, 50, 50);
	} 

	if((millis >= 501) && (millis <= 999)) {

	fill(255);

	beginShape();
    vertex(millisBird, 60);
    vertex(millisBird+30, 50);
    vertex(millisBird+60, 60);
    vertex(millisBird+30, 40);
    endShape(CLOSE);   
		//ellipse(millisBird, 90, 50, 50);
		}
}

function seagull2() {

	if((millis >= 0) && (millis <= 500)) {

	fill(255);

	beginShape();
    vertex(millisBird2, 20);
    vertex(millisBird2+30, 50);
    vertex(millisBird2+60, 20);
    vertex(millisBird2+30, 40);
    endShape(CLOSE);
    	//ellipse(millisBird2, 90, 50, 50);
	}
		
	if((millis >= 501) && (millis <= 999)) {

	fill(255);

	beginShape();
    vertex(millisBird2, 60);
    vertex(millisBird2+30, 50);
    vertex(millisBird2+60, 60);
    vertex(millisBird2+30, 40);
    endShape(CLOSE);   
	}  
}

    if(seconds == 58) {
    seagull();
    } 
    if(seconds == 59) {
    seagull2();
    }

    fill(255);

function alarmGull() {
	if((millis >= 0) && (millis <= 500)) {
		
    beginShape();
    vertex(alarmBird, 200);
    vertex(alarmBird+30, 230);
    vertex(alarmBird+60, 200);
    vertex(alarmBird+30, 220);
    endShape(CLOSE);
		//ellipse(alarmBird, 200, 50, 50);
	}
		
	if((millis >= 501) && (millis <= 999)) {
	
	beginShape();
    vertex(alarmBird, 240);
    vertex(alarmBird+30, 230);
    vertex(alarmBird+60, 240);
    vertex(alarmBird+30, 220);
    endShape(CLOSE);
		//ellipse(alarmBird, 200, 50, 50);
	}  
}
    //alarm 
    if (alarm > 0) {
    fill(0);
    ellipse(961, 200, 1, 1);//marker

    if ((alarm < 1.999) && (alarm > 0.998) && (millis == 0)) {
            flyBird = true;
         }
         if (flyBird == true) {
         	 alarmGull();
         	 
         }
         if (alarmBird <= 230){
         	 flyBird = false;
         	 //birdFall = true; 
         }

   //        if (birdFall == true){
   //       	fill(0);
   //  		beginShape();
		 //    vertex(200, fallY);
		 //    vertex(200+30, fallY+30);
		 //    vertex(200+60, fallY);
		 //    vertex(200+30, fallY+20);
		 //    endShape(CLOSE);
	
			// beginShape();
		 //    vertex(200, fallY+40);
		 //    vertex(200+30, fallY+30);
		 //    vertex(200+60, fallY+40);
		 //    vertex(200+30, fallY+20);
		 //    endShape(CLOSE);
   //       	fallY = fallY + 4;
   //       }
   //       if (fallY >= 400){
   //       	birdFall = false; 
   //  }   
     }

	if(day == false){
	fill(25, 25, 112, 90);
	rect(0, 0, width, height);
	}
}
