/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

//Time variables
var hourNum;
var minTen;
var minRem;
var sec;
var secTen; 
var pm = false;

//Misc variables
const stackStartHeight = 400;
const blockW = 60;
const blockH = 30;

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
    let secsTillAlarm = obj.seconds_until_alarm;

    //Draw in background
    background('#f0f0f0');

    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
  if(secsTillAlarm == 0){
  	if(seconds % 2 == 0){
  		background('#f0f0f0');
  	}else{
  		background('#fff');
  	}
  }

    //HOUR
    if(hours == 0){
      hourNum = 12;
      pm = false;
    }else if(hours == 12){
      pm = true;
    }else if(hours > 12){
      hourNum = hours -12;
      pm = true;
    }else{
      hourNum = hours;
      pm = false;
    }

  //MINUTE
  minRem = minutes % 10;
  minTen = minutes / 10;
  
  //SECOND
  if(seconds <= 10){
    sec = seconds;
  }else if(seconds > 10 && seconds <=20){
    sec= seconds -10;
  }else if(seconds > 20 && seconds <=30){
    sec = seconds -20;
  }else if(seconds > 30 && seconds <=40){
    sec = seconds -30;
  }else if(seconds > 40 && seconds <=50){
    sec = seconds -40;
  }else if(seconds > 50 && seconds <=60){
    sec = seconds -50;
  }
  // sec = map(seconds, 0, 60, 0, 6);

  secTen = seconds / 10;

  //DRAW TIME STACKS
  if(pm){
    stackDraw(310, stackStartHeight, hourNum, '#0f1221', 12);
  }else{
    stackDraw(310, stackStartHeight, hourNum, '#4570b4', 12);
  }

  stackDraw(380, stackStartHeight, minTen, '#ffbf00', 5);
  stackDraw(450, stackStartHeight, minRem, '#ffff00', 9);
  stackDraw(520, stackStartHeight, secTen, '#ffee75', 6);
  stackDraw(590, stackStartHeight, sec, '#ef9b0f', 10);

}


function backgrnd(stkH, xPos){
    var y = stackStartHeight;
    push();
    fill('#FFFFFF');
    noStroke();
    for(var i=0; i<stkH; i++){ 
        rect(xPos,y,blockW,blockH);        
        y = y-blockH-1;
    } 
    pop();
  }

function stackDraw(aX, aY, aAmount, aColor, maxStack){ 
    var y =0;
    var x =0;
    var amount =0;
    var c = color(0);
    
    x = aX;
    y = aY;
    amount = aAmount;
    c = aColor;

    //Draw background of stack (max height stack could be)
    backgrnd(maxStack, x);
    	
    //Draw line underneath stack
    push();
    noStroke();
    fill(c);
    rect(x,y+blockH+3,blockW,3);

    //Draw correct number of time blocks
    for(var i=0; i<amount; i++){ 
      //Create opacity value
      var a = map(693-y, 0, 700, 255, 0);
      //       map(changing value, how quick the fade out is  (lower=quicker), dark, light) 
      //       Can swap last two for light to dark 

      //convert hex value into RGB so opacity can be changed
      hexCon = c.replace('#','');
      r = parseInt(hexCon.substring(0,2), 16);
      g = parseInt(hexCon.substring(2,4), 16);
      b = parseInt(hexCon.substring(4,6), 16);

      fill(r,g,b,a);    
      rect(x,y,blockW,blockH);        
      y = y-blockH-1;
    } 
    pop();
    
  }