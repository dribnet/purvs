/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
let secondsx = CANVAS_WIDTH/2 
let minutesx = CANVAS_WIDTH/2
let hoursx = CANVAS_WIDTH/2

let x = 0

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

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
    let seconds_until_alarm = obj.seconds_until_alarm;

    
       let hourBarWidth   = map(hours, 0, 23, 0, width);
       let minuteBarWidth = map(minutes, 0, 59, 0, width);
       let secondBarWidth = map(seconds, 0, 59, 0, width);
       let millisBarWidth = map(millis, 0, 1000, 0, width);



angleMode(RADIANS);

    fill(75)
    strokeWeight(2);
    background(0,100,200); 
    
    ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/5, 175, 175) //bottom ring
    ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/1.8, 125, 125) //middle ring
    ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT/6, 80, 80) //top ring
      push();
      strokeWeight(2);
      stroke(hourBarWidth,minuteBarWidth,secondBarWidth)
        ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/5, 175-5, 175-5) //bottom circle
        ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/1.8, 125-5, 125-5) //middle circle
        ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT/6, 80-5, 80-5) //top circle
      pop();
    	
        
// push();
      
//        fill(255);
//        strokeWeight(1);
//        push();
         
//     	   ellipse(secondsx, CANVAS_HEIGHT  - CANVAS_HEIGHT/5 - 85, 15, 15) //seconds
//        pop();
//     	 ellipse(minutesx, CANVAS_HEIGHT - CANVAS_HEIGHT/1.8 - 60, 15, 15) //minutes
//     	 ellipse(hoursx, CANVAS_HEIGHT/6 - 37, 15, 15) //hours
// pop()
 	
    fill(50); // dark grey
    
    push();
      fill(255);
      textSize(75)
      text(""   + seconds, CANVAS_WIDTH/2 - 40, CANVAS_HEIGHT  - CANVAS_HEIGHT/5 + 25);
    pop();
    push();
      fill(255);
      textSize(40)
      text("" + minutes, CANVAS_WIDTH/2 - 43 + 20, CANVAS_HEIGHT - CANVAS_HEIGHT/1.8 + 15);
    pop();
    push();
      fill(255);
      textSize(25)
      text("" + hours, CANVAS_WIDTH/2 - 15, CANVAS_HEIGHT/6 + 7);
    pop();
    // textSize(20);
    // text("" + millis, CANVAS_WIDTH/2, CANVAS_HEIGHT  - CANVAS_HEIGHT/5 + 55);

              // secondsx = secondsx + obj.seconds
              // if(secondsx > CANVAS_WIDTH/2 + 84){
              //   secondsx = CANVAS_WIDTH/2 - 88
              // }

 // pmam();
}

// function pmam(){
//     strokeWeight(5);
// rect(CANVAS_WIDTH - CANVAS_WIDTH/4 - 10, CANVAS_HEIGHT/2, 100, 75);  
// rect(CANVAS_WIDTH - CANVAS_WIDTH/1.2 - 10, CANVAS_HEIGHT/2, 100, 75);  
//   push();
//     stroke(0,175,100)
//     strokeWeight(2);
//     rect(CANVAS_WIDTH - CANVAS_WIDTH/4 - 10+5.2, CANVAS_HEIGHT/2+5.2, 100-10, 75-10);  //lightblue
//     rect(CANVAS_WIDTH - CANVAS_WIDTH/1.2 - 10+5.2, CANVAS_HEIGHT/2+5.2, 100-10, 75-10);  //lightblue
//   pop();
// }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}



