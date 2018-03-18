/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
    let r = 0.1044;
    let r2 = 0.263;
    let al = 100;
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
    let hr = obj.hours;
    let mn = obj.minutes;
    let sc = obj.seconds;
    let ml = obj.millis;
    // let  backgroundColor = color(56,163,200);
    let c = color(80,113,184);
   //  push()
   //  backgroundColor.setBlue(128 + 128 * sin(map(hr,0,23,0,255)));
  	// background(backgroundColor);
   //  pop()
   
    angleMode(DEGREES);
    // background(c);
    // cob();

    

    for (i = 0; i <= width; i++){
    	let col = color(47,148,199);
    	let col2 = color(108,148,199);
    	let col3 = color(69,95,127);
    	if(hr>=18&&hr<=23){
    		let gc = lerpColor(col2,col3,0.01+map(hr,18,23,0.01,0.9));
    		stroke(gc);
    	}
    	if(hr>=0&&hr<7){
    		let gc2 = lerpColor(col3,col,0.01+map( hr, 0, 7 , 0.01, 0.9));
    		stroke(gc2);

    	}
    	if(hr>=8&&hr<18){
    		let gc3 = lerpColor(col,col2,0.01+map( hr, 8, 18 , 0.01, 0.9));
    		stroke(gc3);

    	}
    	
    	line(i,height,i,0);
    }

    // seconds number
    push();
    textSize(500)
    translate(width/2-290,height/2+160)
    fill(255,30);
    if(sc<10&&sc>=0){
    	text("0"+sc,0,0)
    }
    if(sc>=10&&sc<20){
    	text(sc,100,0)
    }
    if(sc<60&&sc>=20){
    	text(sc,0,0)
    }
    pop();


    push();
    translate(width/2+10,height/2-310);
    rotate(map(mn,0,59,15,1)); //rotate hours.
    // Hours ||
    mk1();

    mk2()
    pop();

//minutes ||
    

    push();
    
    translate(width/2+10,height+100);
    rotate(map(sc,0,59,6,0))

    mk3();
    pop();
    
    push();
    translate(width/2,height/2);
    fill(255);
    scale(1.5);
    
    textSize(15);
  
    noStroke()
// hours number
    for (i = 0; i < 24; i++) {
        v = p5.Vector.fromAngle((i + 1) / 24.0 * TAU-r2*hr-radians(269)-radians(map(mn,0,59,1,15)));
        v.mult(190);
        fill(lerpColor(color(88,124,184,80),color(255),map(abs(i-hr+1),0,5,1,0)))
        text(i + 1, v.x, v.y-200);

    }
    pop();
// minutes number
    push();
    translate(width/2-8,height+100)
    //
    textSize(17);
    noStroke()

    for (i = 0; i < 60; i++) {
        v = p5.Vector.fromAngle((i + 1) / 60.0 * TAU - HALF_PI- r* mn- radians( map( sc, 0, 59, 0, 6)));
        v.mult(250);
        fill(lerpColor(color(88,124,184,80),color(255),map(abs(i-mn+1),0,5,1,0)));
        text(i + 1, v.x+10, v.y);
    }
    pop();


    push()
    translate(width/2-17,140);
    noStroke();
    triangle(15, 0, 28, 20, 41, 0);
    pop();
    push();
    translate(width/2-17,380);
    noStroke();
    triangle(20, 60, 28, 10, 36, 60);
    pop();

   

}

function mk1(){
    push();
    
    for(i=0; i<24; i++){
        rotate(15);  
        stroke(255);
        line(0,260,0,230);  
    }
    pop();

}
function mk2(){

    push();
    
    for(i=0; i<120; i++){
        
        rotate(3);  
        stroke(255,30);
        line(0,250,0,230);  
    }
    pop();
}
function mk3(){
    for(i=0; i<60; i++){
        
        rotate(6);  
        stroke(255,al-2);
        line(0,240,0,220);  
    }
}
function seconds(){
    textSize(100);
  fill(255);
  noStroke()
  for (i = 0; i < 60; i++) {
    v = p5.Vector.fromAngle((i + 1) / 60.0 * TAU - HALF_PI);
    v.mult(1200);
    text(i + 1, v.x, v.y);
  }
}

// function cob(){
// 	pixelDensity(1);
    
//     loadPixels();
//     for(x = 0; x<width; x ++){
//     	for(y = 0; y< height; y++){
//     		let index = (x+y *width)*4;
//     		pixels[index+0] = x;
//     		pixels[index+1] = 150;
//     		pixels[index+2] = y;
//     		pixels[index+3] = 190;
//     	}
//     }
//     updatePixels();
// }