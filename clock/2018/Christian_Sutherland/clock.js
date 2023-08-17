/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
let x = 0
let y = 0



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
    let seconds_until_alarm = obj.seconds_until_alarm;

    
       let hourBarWidth   = map(hours, 0, 23, 0, width);
       let minuteBarWidth = map(minutes, 0, 59, 0, width);
       let secondBarWidth = map(seconds, 0, 59, 0, width);
       



       



// seconds until alarm a red sleeve moving from the right covers the blue background

    fill(75,150)
    strokeWeight(2);
    background(0,145,200); 
push();
noStroke();
    if(seconds_until_alarm > 0) {
    	let anim_start = 20;
    	if(seconds_until_alarm < anim_start) {
    		let pos_x = map(seconds_until_alarm, anim_start, 0, width, 0);
    		fill(100, 0, 0);
	    	rect(pos_x, 0, width, height);    	    		
    	}
    }
    else if(seconds_until_alarm == 0) {
    	fill(175, 0, 0);
    	rect(0, 0, width, height);
    	// fill(0,145,200);
    	// ellipse(width/2,height/2,x,y);
    	// x = x + 2
    	// y = y + 2
    }
pop();
      push();
        fill(75);
        ellipse(secondBarWidth - 8, CANVAS_HEIGHT - CANVAS_HEIGHT/5 - 2, 95, 95); //movers
        ellipse(minuteBarWidth - 9, CANVAS_HEIGHT - CANVAS_HEIGHT/1.8, 55, 55); //movers
        ellipse(hourBarWidth - 21, CANVAS_HEIGHT/6 - 2, 35, 35); //movers
      pop();

              

      ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/5, 175, 175) //bottom ring
      ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/1.8, 125, 125) //middle ring
      ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT/6, 80, 80) //top ring


      push();
      	strokeWeight(2);
      	stroke(secondBarWidth,minuteBarWidth,255 - hourBarWidth)
        ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/5, 175-5, 175-5) //bottom stroke
        ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT - CANVAS_HEIGHT/1.8, 125-5, 125-5) //middle stroke
        ellipse(CANVAS_WIDTH/2,CANVAS_HEIGHT/6, 80-5, 80-5) //top stroke
      pop();
    	
          // push();
          // 	noFill();
          // 	strokeWeight(50)
          // 	ellipse(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 960+105, 960) //black border
          // pop();

 	
    fill(50); // dark grey
    
    push();
      fill(255);
      textSize(75)
      text(""   + seconds, CANVAS_WIDTH/2 - 40, CANVAS_HEIGHT  - CANVAS_HEIGHT/5 + 25);
    pop();                                   //seconds
    push();
      fill(255);
      textSize(40)
      text("" + minutes, CANVAS_WIDTH/2 - 43 + 20, CANVAS_HEIGHT - CANVAS_HEIGHT/1.8 + 15);
    pop();                                    //minutes
    push();
      fill(255);
      textSize(25)
      text("" + hours, CANVAS_WIDTH/2 - 15, CANVAS_HEIGHT/6 + 7);
    pop();                                    //hours
    



function draw_rect(x,y){
	push();    
		noStroke();
		fill(175,50,50)
		rectMode(CENTER);
		rect(CANVAS_WIDTH/2 + seconds_until_alarm,CANVAS_HEIGHT/2,CANVAS_WIDTH,CANVAS_HEIGHT)
	pop();
 }


// if (seconds_until_alarm > 0){
//     	draw_rect(seconds_until_alarm, CANVAS_HEIGHT);
//     }   

}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}



