//var a =  0;
//var c = 3.14;
/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
 
function draw_clock(obj) 
{	
	angleMode(DEGREES);

	
	let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let hoursWithFraction = hours + (minutes / 60) + (seconds / 3600);
  
	var r = 0;
	var g = 0;
	var b = 0;
	
	if(hours <= 4)
	{
	  b = map(hoursWithFraction, 0, 5, 0, 50);
	  background(0, 0, b);
	}
	else	if(hours <= 6)
	{
	  r = map(hoursWithFraction, 5, 7, 0, 255);
	  g = map(hoursWithFraction, 5, 7, 0, 145);
	  b = map(hoursWithFraction, 5, 7, 50, 100);
	  background(r, g, b);
	}
	else	if(hours <= 8)
	{
	  r = map(hoursWithFraction, 7, 9, 255, 200);
	  g = map(hoursWithFraction, 7, 9, 145, 222);
	  b = map(hoursWithFraction, 7, 9, 100, 255);
	  background(r, g, b);
	}
	else	if(hours <= 12)
	{
	  r = map(hoursWithFraction, 9, 13, 200, 220);
	  g = map(hoursWithFraction, 9, 13, 222, 242);
	  b = map(hoursWithFraction, 9, 13, 255, 255);
	  background(r, g, b);
	}
	else	if(hours <= 17)
	{
	  r = map(hoursWithFraction, 13, 18, 220, 20);
	  g = map(hoursWithFraction, 13, 18, 242, 110);
	  b = map(hoursWithFraction, 13, 18, 255, 165);
	  background(r, g, b);
	}
	else	if(hours <= 19)
	{
	  r = map(hoursWithFraction, 18, 20, 20, 255);
	  g = map(hoursWithFraction, 18, 20, 110, 145);
	  b = map(hoursWithFraction, 18, 20, 165, 100);
	  background(r, g, b);
	}
	else	if(hours <= 24)
	{
	  r = map(hoursWithFraction, 20, 22, 255, 0);
	  g = map(hoursWithFraction, 20, 22, 145, 0);
	  b = map(hoursWithFraction, 20, 22, 100, 0);
	  background(r, g, b);
	}
	else
	{
	  background(0);
	}
	

  
	var a = map(hoursWithFraction, 0, 24, 0, 360, true);
	
	var c = a + 180;
  var rad = 200;
	var x = width / 2 + cos(a) * rad;
	var y = height / 2 + sin(a) * rad;

    let hourTime   = map(hours, 0, 23, 0, width);
    let minuteTime = map(minutes, 0, 60, 0, width);
    let secondTime = map(seconds, 0, 60, 0, width);
    let millisTime = map(millis, 0, 1000, 0, width);

	noStroke();
	  
	fill(150);//grey
	  
	ellipse(x, y, 50, 50);//moon

	text("a: " + a, 10, 22);

	fill(255, 204, 0);//yellow
	
	x = width / 2 + cos(c) * rad;
	y = height / 2 + sin(c) * rad;

	ellipse(x, y, 50, 50);//sun

fill(255);
	textSize(20);

  text(hours+":"+minutes+":"+seconds, width/2-40, height/2);
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

}
