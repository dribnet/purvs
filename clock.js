/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

 const CANVAS_WIDTH = 960;
 const CANVAS_HEIGHT = 500;
 const BLOCK_SIZE = 10;

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
    let pulse = 3;



    background(255,255,200);
    let r= map(minutes, 0, 59, 0, 255);
    let g= map(seconds, 0, 59, 0, 255);
    let b = map(millis, 0, 1000, 0, 255);
    noStroke();

    for (var i = 0; i < (CANVAS_WIDTH/BLOCK_SIZE); i++) {
    	for (var j = 0; j < (CANVAS_HEIGHT/BLOCK_SIZE); j++) {
    		fill(r+(i*pulse),g+(j*pulse),b+(i+j)*pulse);
    		rect(i*BLOCK_SIZE,j*BLOCK_SIZE,BLOCK_SIZE,BLOCK_SIZE);
    	}
    }
    draw_Four();
    draw_Zero();
}

function draw_Four() {
  //the number 4
  fill(0);
  let posX = 6; 
  let posY = 2.5;
  let xRel = CANVAS_WIDTH/posX;
  let yRel = CANVAS_HEIGHT/posY;
  let loopNo = 4;

  rect(xRel+(BLOCK_SIZE*loopNo-BLOCK_SIZE), yRel, BLOCK_SIZE, BLOCK_SIZE*7);
  rect(xRel, yRel+(BLOCK_SIZE*loopNo), BLOCK_SIZE*5, BLOCK_SIZE);
  for(i=0; i < loopNo; i++){
  	j=i+1;
  	rect(xRel+(BLOCK_SIZE*i), yRel+(BLOCK_SIZE*loopNo)-(BLOCK_SIZE*j), BLOCK_SIZE, BLOCK_SIZE);  
  }
}

function draw_Zero() {

  	//grey
  	fill(0);
  	let posX = 6; 
  	let posY = 2.5;
  	let posNo = 7*BLOCK_SIZE;
  	let xRel = CANVAS_WIDTH/posX+posNo;
  	let yRel = CANVAS_HEIGHT/posY;


	//zero
	rect(xRel,yRel,BLOCK_SIZE*3 ,BLOCK_SIZE);
	rect(xRel,yRel+(BLOCK_SIZE*6),BLOCK_SIZE*3 ,BLOCK_SIZE);
	rect(xRel-BLOCK_SIZE,yRel+BLOCK_SIZE,BLOCK_SIZE,BLOCK_SIZE*5);
	rect(xRel+(BLOCK_SIZE*3),yRel+BLOCK_SIZE,BLOCK_SIZE,BLOCK_SIZE*5);

}

