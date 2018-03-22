/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
 const CANVAS_WIDTH = 960;
 const CANVAS_HEIGHT = 500;
 const PIXEL_SIZE = 30;
 const START_Y = 100;
 const FIRST_HOUR_START_X = 100;
 const SEC_HOUR_START_X = 300;
 const FIRST_MIN_START_X = 500;
 const SEC_MIN_START_X = 700;
 const GAP = 10;
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
 let seconds;
 let alarmOn;

 function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-1000
  //    obj.seconds_until_alarm is:
  //    < 0 if no alarm is set
  //    = 0 if the alarm is currently going off
  //    > 0 --> the number of seconds until alarm should go off
  
  let hours = obj.hours;
  let minutes = obj.minutes;
  seconds = obj.seconds;
  let minTotal = (hours * 60) + minutes; //total mintues of the day
  let alarm = obj.seconds_until_alarm;
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  background(69,178,157);

  //these tides are for Friday 23 March
  //to continue for any date would just have to read a tide table from a file
  //also assuming you don't check after 10:56pm or before 4:27am
  //low tide: 267
  //high tide: 636
  //low tide: 1012
  //high tide: 1324
  if (minTotal < 636) {
  	tideLevel   = map(minTotal, 267, 636, 0, height);
  }
  if (minTotal >= 636 && minTotal < 1012) {
  	tideLevel   = map(minTotal, 636, 1012, 0, height);
  }
  else if (minTotal >=1012) { //after the second low tide of the day
  	tideLevel   = map(minTotal, 1012, 1376, 0, height);
  }
  
  noStroke();
  fill(51,77,92);
  rect(0, height-tideLevel, width, tideLevel);


  

  //if the alarm is going off
  if (alarm == 0) {
  	alarmOn = true;
  }
  //if the alarm isn't gonig off - show how long untl it does
  //idk why this doesn't work
  let alarmTimer   = map(alarm, 0, 86400, 0, height);
  fill(226,122,63);
  rect(0,height-alarmTimer,20,alarmTimer );
  
  strokeWeight (2);
  stroke(255,255,255);
  noFill();

  //a 2d array of each number storing how to draw it as booleans
  zero = [
  [0,0,1,1,1,1,1,1,1,0,0],
  [0,1,0,0,0,0,0,0,0,1,0],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [0,1,0,0,0,0,0,0,0,1,0],
  [0,0,1,1,1,1,1,1,1,0,0],
  ];
  one = [
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0,1],
  [0,1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,1],
  ];
  two = [
  [0,0,1,1,0,0,0,0,1,1,1],
  [0,1,0,0,0,0,0,1,0,0,1],
  [1,0,0,0,0,0,1,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1],
  [0,1,0,0,1,0,0,0,0,0,1],
  [0,0,1,1,0,0,0,0,0,0,1],
  ];
  three = [
  [0,0,1,1,0,0,0,1,1,0,0],
  [0,1,0,0,0,0,0,0,0,1,0],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1],
  [0,1,0,0,1,0,1,0,0,1,0],
  [0,0,1,1,0,0,0,1,1,0,0],
  ];
  four = [
  [1,1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0],
  ];
  five = [
  [1,1,1,1,1,0,0,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,1,0],
  [1,0,0,0,0,0,1,1,1,0,0],
  ];
  six = [
  [0,0,1,1,1,1,1,1,1,0,0],
  [0,1,0,0,1,0,0,0,0,1,0],
  [1,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,1,0],
  [1,0,0,0,0,0,1,1,1,0,0],
  ];
  seven = [
  [1,0,0,0,0,0,0,0,1,1,1],
  [1,0,0,0,0,0,0,1,0,0,0],
  [1,0,0,0,0,0,1,0,0,0,0],
  [1,0,0,0,0,1,0,0,0,0,0],
  [1,0,0,0,1,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,0,0,0,0],
  ];
  eight = [
  [0,0,1,1,0,0,0,1,1,0,0],
  [0,1,0,0,1,0,1,0,0,1,0],
  [1,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1],
  [0,1,0,0,1,0,1,0,0,1,0],
  [0,0,1,1,0,0,0,1,1,0,0],
  ];
  nine = [
  [0,0,1,1,0,0,0,0,1,0,0],
  [0,1,0,0,1,0,0,0,0,1,0],
  [1,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1],
  [0,1,0,0,0,1,0,0,0,1,0],
  [0,0,1,1,1,1,1,1,1,0,0],
  ];

  //array of all the number arrays
  var numbers = new Array (zero, one, two, three, four, five, six, seven, eight, nine);

  //figure out what number is in the 'tens' place of the seconds
  if (seconds < 10) {
  	secondsTens = 0;
  }
  else if (seconds >=10 && seconds <20) {
  	secondsTens = 10;
  }
  else if (seconds >=20 && seconds <30) {
  	secondsTens = 20;
  }
  else if (seconds >=30 && seconds <40) {
  	secondsTens = 30;
  }
  else if (seconds >=40 && seconds <50) {
  	secondsTens = 40;
  }
  else if (seconds >=50 && seconds <60) {
  	secondsTens = 50;
  }



  if (hours < 10) {
  	var hourFirst = new Number(FIRST_HOUR_START_X, zero, minutesTens);
  	var hourSecond = new Number(SEC_HOUR_START_X, numbers[hours], secondsTens);
  }
  else if (hours >= 10 && hours < 20) {
  	var hourFirst = new Number(FIRST_HOUR_START_X, one, minutesTens);
  	var hourSecond = new Number(SEC_HOUR_START_X, numbers[hours-10], secondsTens);
  }
  else if (hours > 20) {
  	var hourFirst = new Number(FIRST_HOUR_START_X, two);
  	var hourSecond = new Number(SEC_HOUR_START_X, numbers[hours-20], secondsTens);
  }


  if(minutes < 10) {
  	var minFirst = new Number(FIRST_MIN_START_X, zero, secondsTens);
  	var minSecond = new Number(SEC_MIN_START_X, numbers[minutes], secondsTens);
  }
  else if (minutes >=10 && minutes <20) {
  	var minFirst = new Number(FIRST_MIN_START_X, one, secondsTens);
  	var minSecond = new Number(SEC_MIN_START_X, numbers[minutes-10], secondsTens);
  }
  else if (minutes >=20 && minutes <30) {
  	var minFirst = new Number(FIRST_MIN_START_X, two, secondsTens);
  	var minSecond = new Number(SEC_MIN_START_X, numbers[minutes-20], secondsTens);
  }
  else if (minutes >=30 && minutes <40) {
  	var minFirst = new Number(FIRST_MIN_START_X, three, secondsTens);
  	var minSecond = new Number(SEC_MIN_START_X, numbers[minutes-30], secondsTens);
  }
  else if (minutes >=40 && minutes <50) {
  	var minFirst = new Number(FIRST_MIN_START_X, four, secondsTens);
  	var minSecond = new Number(SEC_MIN_START_X, numbers[minutes-40], secondsTens);
  }
  else if (minutes >=50 && minutes <60) {
  	var minFirst = new Number(FIRST_MIN_START_X, five, secondsTens);
  	var minSecond = new Number(SEC_MIN_START_X, numbers[minutes-50], secondsTens);
  }

  //console.log(hours);
  hourFirst.draw();
  hourSecond.draw();
  minFirst.draw();
  minSecond.draw();


}

//elapsed
function Number(startX, number, elapsed) {
	this.x = startX;
	this.array = number; 
	this.done = elapsed;

	this.draw = function() {
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 11; j++) {
				if (this.array[i][j] == true) {
					noFill();
					
					if  ((j-1)*10 >= (secondsTens)*2) {
						fill(255);
					}
					if((j*10 >= (secondsTens)*2) && ((seconds - secondsTens) < 5)) {
						fill(255);
					}
					if (alarmOn == true && (((seconds - secondsTens)%2) == 0)) {
						stroke(239, 201,76);
						fill(223,90,73);
					}
					if (alarmOn == true && (((seconds - secondsTens)%2) != 0)) {
						stroke(223,90,73);
						fill(239, 201,76);
					}
					ellipse(this.x + (i*PIXEL_SIZE), START_Y + (j*PIXEL_SIZE), PIXEL_SIZE - GAP, PIXEL_SIZE - GAP);
				}
			}
		}
	}
}
