/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

 const CANVAS_WIDTH = 960;
 const CANVAS_HEIGHT = 500;
 const BS = 10;
 const posX = 2; 
 const posY = 2.5;

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

    var hours = obj.hours;
    var minutes = obj.minutes;
    var seconds = obj.seconds;
    var millis = obj.millis;
    var pulse = 2;



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
    fill(0);
    draw_Colon();    
    draw_Time(seconds,minutes,hours);
  }

  function draw_Time(seconds,minutes,hours){

    var tenSeconds = seconds.toString()[0];
    Draw_number(tenSeconds,2);
    var singleSeconds = seconds.toString()[1];
    Draw_number(singleSeconds,3);
    var tenMinutes = minutes.toString()[0];
    Draw_number(tenMinutes,1);
    var singleMinutes= minutes.toString()[1];
    Draw_number(singleMinutes,0);
  }

function Draw_number(time,pos){
    if(time==1){
      draw_One(pos)
    }
    else if(time==2){
      draw_Two(pos)
    }
    else if(time==3){
      draw_Three(pos)
    }
    else if(time==4){
      draw_Four(pos)
    }
    else if(time==5){
      draw_Five(pos)
    }
    else if(time==6){
      draw_Six(pos)
    }
    else if(time==7){
      draw_Seven(pos)
    }
    else if(time==8){
      draw_Eight(pos)
    }
    else if(time==9){
      draw_Nine(pos)
    }
    else {
      draw_Zero(pos)
    }

}

  

  function myPosition(space){
    if (space==0){
      MyPos = 14*BS*-1;
    }
    if (space==1){
      MyPos = 7*BS*-1;
    }
    if (space==2){
      MyPos = 3*BS;
    }
    if (space==3){
      MyPos = 10*BS;
    }
    else{
      //MyPos = 0;
    }
    return(MyPos);
  }

  function draw_Colon(space){
    let posNo = 1;
    let xRel = CANVAS_WIDTH/posX+posNo-BS;
    let yRel = CANVAS_HEIGHT/posY;

    rect(xRel,yRel+BS,BS,BS);
    rect(xRel,yRel+BS*4,BS,BS);
  }

  function draw_Zero(space) {
  //the number 0
  let posNo = myPosition(space);
  let xRel = CANVAS_WIDTH/posX+posNo;
  let yRel = CANVAS_HEIGHT/posY;
  rect(xRel,yRel,BS*3 ,BS);
  rect(xRel,yRel+(BS*6),BS*3 ,BS);
  rect(xRel-BS,yRel+BS,BS,BS*5);
  rect(xRel+(BS*3),yRel+BS,BS,BS*5);

}

function draw_One(space) {
  //the number 1
  let posNo = myPosition(space);
  let xRel = CANVAS_WIDTH/posX+posNo;
  let yRel = CANVAS_HEIGHT/posY;

  let loopNo = 4;

  rect(xRel+(BS*loopNo-BS), yRel, BS, BS*7);
  rect(xRel+(BS*loopNo-BS)-BS, yRel+BS, BS, BS);
}

function draw_Two(space) {
  //the number 2
  let posNo = myPosition(space);
  let xRel = CANVAS_WIDTH/posX+posNo-BS;
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

function draw_Three(space){
    //The number 3
    let posNo = myPosition(space);
    let xRel = CANVAS_WIDTH/posX+posNo-BS;
    let yRel = CANVAS_HEIGHT/posY;

    rect(xRel,yRel+BS,BS,BS);
    rect(xRel+BS,yRel,BS*3 ,BS);
    rect(xRel+BS,yRel+(BS*3),BS*3 ,BS);
    rect(xRel+BS,yRel+(BS*6),BS*3 ,BS);

    rect(xRel+(BS*4),yRel+BS,BS,BS*2);
    rect(xRel+(BS*4),yRel+(BS*4),BS,BS*2);
    rect(xRel,yRel+(BS*5),BS,BS);

  }

  function draw_Four(space) {
  //the number 4

  let posNo = myPosition(space);
  let xRel = CANVAS_WIDTH/posX+posNo-BS;
  let yRel = CANVAS_HEIGHT/posY;

  let loopNo = 4;

  rect(xRel+(BS*loopNo-BS), yRel, BS, BS*7);
  rect(xRel, yRel+(BS*loopNo), BS*5, BS);
  for(i=0; i < loopNo; i++){
    j=i+1;
    rect(xRel+(BS*i), yRel+(BS*loopNo)-(BS*j), BS, BS);  
  }
}

function draw_Five(space){

  let posNo = myPosition(space);
  let xRel = CANVAS_WIDTH/posX+posNo;
  let yRel = CANVAS_HEIGHT/posY;

  rect(xRel,yRel,BS*5,BS);
  rect(xRel,yRel+BS,BS,BS);
  rect(xRel,yRel+(BS*2), BS*4, BS); 
  rect(xRel+BS,yRel+(BS*6),BS*3 ,BS);
  rect(xRel,yRel+(BS*5),BS,BS);
  rect(xRel+(BS*4),yRel+(BS*3),BS,BS*3);


}

function draw_Six(space){


  let posNo = myPosition(space);
  let xRel = CANVAS_WIDTH/posX+posNo-BS;
  let yRel = CANVAS_HEIGHT/posY;

  rect(xRel+BS,yRel,BS*3,BS);
  rect(xRel,yRel+BS,BS,BS*5);
  rect(xRel,yRel+(BS*2), BS*4, BS); 
  rect(xRel+BS,yRel+(BS*6),BS*3 ,BS);
  rect(xRel+(BS*4),yRel+(BS*3),BS,BS*3);


}

function draw_Seven(space){

  let posNo = myPosition(space);
  let xRel = CANVAS_WIDTH/posX+posNo-BS;
  let yRel = CANVAS_HEIGHT/posY;

  rect(xRel,yRel,BS*5,BS);
  rect(xRel+BS*4,yRel+BS,BS,BS);
  rect(xRel+BS*2, yRel+(BS*3)+BS*2, BS, BS*2);

  let loopNo = 3;
  for(i=0; i < loopNo; i++){
    j=i+1;
    rect(xRel+(BS*i)+BS*2, yRel+(BS*loopNo)-(BS*j)+BS*2, BS, BS);  
  }
}

function draw_Eight(space){
	  //eight
    let posNo = myPosition(space);  
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

  function draw_Nine(space){

    let posNo = myPosition(space);
    let xRel = CANVAS_WIDTH/posX+posNo-BS;
    let yRel = CANVAS_HEIGHT/posY;

    rect(xRel+BS,yRel,BS*3,BS);
    rect(xRel+BS,yRel+BS*4,BS*3,BS);
    rect(xRel,yRel+BS,BS,BS*3); 
    rect(xRel+BS,yRel+(BS*6),BS*3 ,BS);
    rect(xRel+(BS*4),yRel+(BS),BS,BS*5);

  }  




