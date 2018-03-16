/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

 const CANVAS_WIDTH = 960;
 const CANVAS_HEIGHT = 500;
 const BS = 10;

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
    let pulse = 2;



    background(255,255,200);
    let r= map(minutes, 0, 59, 0, 255);
    let g= map(seconds, 0, 59, 0, 255);
    let b = map(millis, 0, 1000, 0, 255);
    noStroke();

    for (var i = 0; i < (CANVAS_WIDTH/BS); i++) {
    	for (var j = 0; j < (CANVAS_HEIGHT/BS); j++) {
    		fill(r+(i*pulse),g+(j*pulse),b+(i+j)*pulse);
    		rect(i*BS,j*BS,BS,BS);
    	}
    }
    draw_Four();
    draw_Zero();
    draw_Eight();
    draw_Three();
    draw_One();
    draw_Two();
    draw_Five();
}



function draw_Zero() {

  	fill(0);
  	let posX = 6; 
  	let posY = 2.5;
  	let posNo = 8*BS;
  	let xRel = CANVAS_WIDTH/posX+posNo;
  	let yRel = CANVAS_HEIGHT/posY;


	//zero
	rect(xRel,yRel,BS*3 ,BS);
	rect(xRel,yRel+(BS*6),BS*3 ,BS);
	rect(xRel-BS,yRel+BS,BS,BS*5);
	rect(xRel+(BS*3),yRel+BS,BS,BS*5);

}

function draw_One() {
  //the number 4
  fill(0);
  let posX = 6; 
  let posY = 2.5;
  let posNo = 25*BS;
  let xRel = CANVAS_WIDTH/posX+posNo;
  let yRel = CANVAS_HEIGHT/posY;

  let loopNo = 4;

  rect(xRel+(BS*loopNo-BS), yRel, BS, BS*7);
  rect(xRel+(BS*loopNo-BS)-BS, yRel+BS, BS, BS);
}

function draw_Two() {
  //the number 4
  fill(0);
  let posX = 6; 
  let posY = 2.5;
  let posNo = 31*BS;
  let xRel = CANVAS_WIDTH/posX+posNo;
  let yRel = CANVAS_HEIGHT/posY;

  let loopNo = 4;

  rect(xRel+(BS*4),yRel+BS,BS,BS*2);
  rect(xRel+BS,yRel,BS*3 ,BS);
  rect(xRel,yRel+BS,BS,BS);


  rect(xRel, yRel+(BS*loopNo)+BS*2, BS*5, BS);
  for(i=0; i < loopNo; i++){
    j=i+1;
    rect(xRel+(BS*i)+BS, yRel+(BS*loopNo)-(BS*j)+BS*2, BS, BS);
  }
}

  function draw_Three(){
    //eight

    fill(0);
    let posX = 6; 
    let posY = 2.5;
    let posNo = 22*BS;
    let xRel = CANVAS_WIDTH/posX+posNo-BS;
    let yRel = CANVAS_HEIGHT/posY;


    rect(xRel,yRel,BS*3 ,BS);
    rect(xRel,yRel+(BS*3),BS*3 ,BS);
    rect(xRel,yRel+(BS*6),BS*3 ,BS);

    rect(xRel-BS+(BS*4),yRel+BS,BS,BS*2);
    rect(xRel-BS+(BS*4),yRel+(BS*4),BS,BS*2);

  }

function draw_Four() {
  //the number 4
  fill(0);
  let posX = 6; 
  let posY = 2.5;
  let posNo = 0*BS;
  let xRel = CANVAS_WIDTH/posX+posNo;
  let yRel = CANVAS_HEIGHT/posY;

  let loopNo = 4;

  rect(xRel+(BS*loopNo-BS), yRel, BS, BS*7);
  rect(xRel, yRel+(BS*loopNo), BS*5, BS);
  for(i=0; i < loopNo; i++){
    j=i+1;
    rect(xRel+(BS*i), yRel+(BS*loopNo)-(BS*j), BS, BS);  
  }
}

function draw_Five(){

    fill(0);
    let posX = 6; 
    let posY = 2.5;
    let posNo = 38*BS;
    let xRel = CANVAS_WIDTH/posX+posNo;
    let yRel = CANVAS_HEIGHT/posY;

    rect(xRel,yRel,BS*5,BS);
    rect(xRel,yRel+BS,BS,BS);
    rect(xRel,yRel+(BS*2), BS*4, BS); 
    rect(xRel+BS,yRel+(BS*6),BS*3 ,BS);
    rect(xRel,yRel+(BS*5),BS,BS*1);
    rect(xRel+(BS*4),yRel+(BS*3),BS,BS*3);


}


function draw_Eight(){
	  //eight

	  fill(0);
	  let posX = 6; 
	  let posY = 2.5;
	  let posNo = 15*BS;
	  let xRel = CANVAS_WIDTH/posX+posNo;
	  let yRel = CANVAS_HEIGHT/posY;


	  rect(xRel,yRel,BS*3 ,BS);
	  rect(xRel,yRel+(BS*3),BS*3 ,BS);
	  rect(xRel,yRel+(BS*6),BS*3 ,BS);
	  rect(xRel-BS,yRel+BS,BS,BS*2);
	  rect(xRel-BS,yRel+(BS*4),BS,BS*2);
	  rect(xRel-BS+(BS*4),yRel+BS,BS,BS*2);
	  rect(xRel-BS+(BS*4),yRel+(BS*4),BS,BS*2);

	}




