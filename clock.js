
/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
 let fade = 255; 
var starList = [];
var starLength = 1000;//length of the starList array

var starsMade = false;

function draw_clock(obj) 
{	

	if(starsMade == false)
	{
		stars();
	}

	angleMode(DEGREES);
	
	let hours = obj.hours;
  	let minutes = obj.minutes;
  	let seconds = obj.seconds;
  	let millis = obj.millis;
  	let hoursWithFraction = hours + (minutes / 60) + (seconds / 3600);
  
	let r = 0;
	let g = 0;
	let b = 0;
	
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
	else	if(hours <= 18)
	{
	  r = map(hoursWithFraction, 18, 19, 20, 255);
	  g = map(hoursWithFraction, 18, 19, 110, 145);
	  b = map(hoursWithFraction, 18, 19, 165, 100);
	  background(r, g, b);
	}
	else	if(hours <= 19)
	{
	  r = map(hoursWithFraction, 19, 20, 255, 0);
	  g = map(hoursWithFraction, 19, 20, 145, 0);
	  b = map(hoursWithFraction, 19, 20, 100, 50);
	  background(r, g, b);
	}
	else	if(hours <= 24)
	{
	  r = map(hoursWithFraction, 20, 22, 0, 0);
	  g = map(hoursWithFraction, 20, 22, 0, 0);
	  b = map(hoursWithFraction, 20, 22, 50, 0);
	  background(r, g, b);
	}
	else
	{
	  background(0);
	}
  
	let a = map(hoursWithFraction, 0, 24, 0, 360, true);

	noStroke();
	
	let s = a + 90;//where the sun is on the circle
	let m = a + 270;//where the moon is on the circle
  	let rad = 200;//radius of the circle
	let x = width / 2 + cos(m) * rad;
	let y = height / 2 + sin(m) * rad;

    let hourTime   = map(hours, 0, 23, 0, width);
    let minuteTime = map(minutes, 0, 60, 0, width);
    let secondTime = map(seconds, 0, 60, 0, width);
    let millisTime = map(millis, 0, 1000, 0, width);
	 
	if (hours < 8 || hours > 19)
	{
		drawStars();
	}
	

	fill(150);//grey
	ellipse(x, y, 50, 50);//moon

	fill(255, 204, 0);//yellow

	x = width / 2 + cos(s) * rad;
	y = height / 2 + sin(s) * rad;

	ellipse(x, y, 50, 50);//sun

	fill(255);
	textSize(20);

	if(seconds %2 ==0)
	{

	}
	else
	{

	}

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
    
	if (hours > 6 && hours < 20)//fade out the stars
	{
		fade = fade - 1;
		fill(255, fade);
	}
	else if (hours > 19)//fade in the stars
	{
		fade = fade + 1;
		fill(255, fade);
	}
}

function stars()
{
	for (let i = 0; i < starLength; i++) 
	{	
		let starX = random(width);
		let starY = random(height);
		var newStar = {x: starX, y:starY};
		starList.push(newStar);
	}
	starsMade = true;
}

function drawStars()
{	
	for (let i = 0; i < starLength; i++)
	{
		ellipse(starList[i].x, starList[i].y, 2, 2);
	}
}
