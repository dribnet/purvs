/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
 const CANVAS_WIDTH = 960;
 const CANVAS_HEIGHT = 500;
 const PIXEL_SIZE = 30;
 const START_Y = 150;
 const FIRST_START_X = 320;
 const MID_START_X = 420;
 const SEC_START_X = 520;
 const SEC_GAP = 15;
 const MIN_GAP = 10
 const HOUR_GAP = 5;
 let num;
 let zero;
 let one;
 let two;
 let three;
 let four;
 let five;
 let six;
 let seven;
 let eight;
 let nine;
 let tideLevel;
 let minutesTens;
 let secondsTens;

 function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let minTotal = (hours * 60) + minutes; //total mintues of the day
  let alarm = obj.seconds_until_alarm;
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  background(0);
  strokeWeight (2);
  noFill();

  //a 2d array of each number storing how to draw it as booleans
  zero = [
  [0,1,1,1,1,1,0],
  [1,0,0,0,0,0,1],
  [1,0,0,0,0,0,1],
  [1,0,0,0,0,0,1],
  [0,1,1,1,1,1,0],
  ];
  one = [
  [0,1,0,0,0,0,1],
  [1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1],
  [0,0,0,0,0,0,1],
  [0,0,0,0,0,0,1],
  ];
  two = [
  [0,1,0,0,0,0,1],
  [1,0,0,0,0,1,1],
  [1,0,0,0,1,0,1],
  [1,0,0,1,0,0,1],
  [0,1,1,0,0,0,1],
  ];
  three = [
  [0,1,0,0,0,1,0],
  [1,0,0,0,0,0,1],
  [1,0,0,1,0,0,1],
  [1,0,0,1,0,0,1],
  [0,1,1,0,1,1,0],
  ];
  four = [
  [0,0,0,1,1,0,0],
  [0,0,1,0,1,0,0],
  [0,1,0,0,1,0,0],
  [1,1,1,1,1,1,1],
  [0,0,0,0,1,0,0],
  ];
  five = [
  [1,1,1,0,0,1,0],
  [1,0,1,0,0,0,1],
  [1,0,1,0,0,0,1],
  [1,0,1,0,0,0,1],
  [1,0,0,1,1,1,0],
  ];
  six = [
  [0,1,1,1,1,1,0],
  [1,0,0,1,0,0,1],
  [1,0,0,1,0,0,1],
  [1,0,0,1,0,0,1],
  [0,1,0,0,1,1,0],
  ];
  seven = [
  [1,0,0,0,0,0,0],
  [1,0,0,0,0,1,1],
  [1,0,0,0,1,0,0],
  [1,0,0,1,0,0,0],
  [1,1,1,0,0,0,0],
  ];
  eight = [
  [0,1,1,0,1,1,0],
  [1,0,0,1,0,0,1],
  [1,0,0,1,0,0,1],
  [1,0,0,1,0,0,1],
  [0,1,1,0,1,1,0],
  ];
  nine = [
  [0,1,1,0,0,1,0],
  [1,0,0,1,0,0,1],
  [1,0,0,1,0,0,1],
  [1,0,0,1,0,0,1],
  [0,1,1,1,1,1,0],
  ];

  //array of all the number arrays
  var numbers = new Array (zero, one, two, three, four, five, six, seven, eight, nine);

  //figure out what number is in the 'tens' place of the seconds
  if (seconds < 10) {
    var secFirst = new Number(FIRST_START_X, zero, SEC_GAP);
    var secSecond = new Number(SEC_START_X, numbers[seconds], SEC_GAP);
  }
  else if (seconds >=10 && seconds <20) {
    var secFirst = new Number(FIRST_START_X, one, SEC_GAP);
    var secSecond = new Number(SEC_START_X, numbers[seconds-10], SEC_GAP);
  }
  else if (seconds >=20 && seconds <30) {
    var secFirst = new Number(FIRST_START_X, two, SEC_GAP);
    var secSecond = new Number(SEC_START_X, numbers[seconds-20], SEC_GAP);
  }
  else if (seconds >=30 && seconds <40) {
    var secFirst = new Number(FIRST_START_X, three, SEC_GAP);
    var secSecond = new Number(SEC_START_X, numbers[seconds-30], SEC_GAP);
  }
  else if (seconds >=40 && seconds <50) {
    var secFirst = new Number(FIRST_START_X, four, SEC_GAP);
    var secSecond = new Number(SEC_START_X, numbers[seconds-40], SEC_GAP);
  }
  else if (seconds >=50 && seconds <60) {
    var secFirst = new Number(FIRST_START_X, five, SEC_GAP);
    var secSecond = new Number(SEC_START_X, numbers[seconds-50], SEC_GAP);
  }



  if (hours < 10) {
    var hourSecond = new Number(MID_START_X, numbers[hours], HOUR_GAP);
  }
  else if (hours >= 10 && hours < 20) {
    var hourFirst = new Number(FIRST_START_X, one, HOUR_GAP);
    var hourSecond = new Number(SEC_START_X, numbers[hours-10], HOUR_GAP);
    hourFirst.draw();
  }
  else if (hours > 20) {
    var hourFirst = new Number(FIRST_START_X, two, HOUR_GAP);
    var hourSecond = new Number(SEC_START_X, numbers[hours-20], HOUR_GAP);
    hourFirst.draw();
  }


  if(minutes < 10) {
    var minFirst = new Number(FIRST_START_X, zero, MIN_GAP);
    var minSecond = new Number(SEC_START_X, numbers[minutes], MIN_GAP);
  }
  else if (minutes >=10 && minutes <20) {
    var minFirst = new Number(FIRST_START_X, one, MIN_GAP);
    var minSecond = new Number(SEC_START_X, numbers[minutes-10], MIN_GAP);
  }
  else if (minutes >=20 && minutes <30) {
    var minFirst = new Number(FIRST_START_X, two, MIN_GAP);
    var minSecond = new Number(SEC_START_X, numbers[minutes-20], MIN_GAP);
  }
  else if (minutes >=30 && minutes <40) {
    var minFirst = new Number(FIRST_START_X, three, MIN_GAP);
    var minSecond = new Number(SEC_START_X, numbers[minutes-30], MIN_GAP);
  }
  else if (minutes >=40 && minutes <50) {
    var minFirst = new Number(FIRST_START_X, four, MIN_GAP);
    var minSecond = new Number(SEC_START_X, numbers[minutes-40], MIN_GAP);
  }
  else if (minutes >=50 && minutes <60) {
    var minFirst = new Number(FIRST_START_X, five, MIN_GAP);
    var minSecond = new Number(SEC_START_X, numbers[minutes-50], MIN_GAP);
  }

  
  hourSecond.draw();
  minFirst.draw();
  minSecond.draw();
  secFirst.draw();
  secSecond.draw();


}

//elapsed
function Number(startX, number, spacing) {
	this.x = startX;
	this.array = number; 
  	this.gap = spacing;

	this.draw = function() {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 7; j++) {
				if (this.array[i][j] == true) {
            if  (this.gap == SEC_GAP) {
              stroke(0,0,255);
            }
            else if (this.gap == MIN_GAP) {
            	stroke(255,255,0);
            }
            else if (this.gap == HOUR_GAP) {
            	stroke(255,0,0);
            }
					ellipse(this.x + (i*PIXEL_SIZE), START_Y + (j*PIXEL_SIZE), PIXEL_SIZE - this.gap, PIXEL_SIZE - this.gap);
				}
			}
   }
 }
}