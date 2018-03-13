/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;



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
    





angleMode(RADIANS);

    noFill();
    strokeWeight(2);
    background(0,125,200); 
    ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/5, 175, 175) 
    ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/1.8, 125, 125)
    ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT/6, 80, 80)

    	push(); 
        
    	 fill(255);
    	 strokeWeight(1);
    	 ellipse(CANVAS_WIDTH/2 - 88, CANVAS_HEIGHT  - CANVAS_HEIGHT/5, 15, 15)
    	 ellipse(CANVAS_WIDTH/2 - 62.5, CANVAS_HEIGHT - CANVAS_HEIGHT/1.8, 15, 15)
    	 ellipse(CANVAS_WIDTH/2 - 40, CANVAS_HEIGHT/6, 15, 15)
    	pop();
 	

 pmam();
}
rectMode(CENTER);
function pmam(){
    strokeWeight(5);
rect(CANVAS_WIDTH - CANVAS_WIDTH/4 + 50, CANVAS_HEIGHT/2.2, 100, 75);  
rect(CANVAS_WIDTH - CANVAS_WIDTH/1.2 + 10, CANVAS_HEIGHT/2.2, 100, 75);  
text('word', 10, 30);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

