/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
let fade = 255; 
var starList = [];
var starLength = 2000;//length of the starList array

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
	let alarm = obj.seconds_until_alarm;
  
	let r = 0;
	let g = 0;
	let b = 0;
	
	let sunrise = 6;
	let sunset = 18;
	let day = 8;
	let night = 19;
	
	if(hours <= 4)
	{
	  b = map(hoursWithFraction, 0, 5, 0, 50);
	  background(0, 0, b);
	}
	else	if(hours <= sunrise)
	{
	  r = map(hoursWithFraction, 5, 7, 0, 255);
	  g = map(hoursWithFraction, 5, 7, 0, 145);
	  b = map(hoursWithFraction, 5, 7, 50, 100);
	  background(r, g, b);
	}
	else	if(hours <= day)
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
	else	if(hours <= sunset)
	{
	  r = map(hoursWithFraction, 18, 19, 20, 255);
	  g = map(hoursWithFraction, 18, 19, 110, 145);
	  b = map(hoursWithFraction, 18, 19, 165, 100);
	  background(r, g, b);
	}
	else	if(hours <= night)
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
	
	if (hours > 6 && hours < 18 && fade > 0)//fade out the stars
	{
		fade = fade - 1;
		fill(255, fade);
	}
	else if (hours > 18 && fade <255)//fade in the stars
	{
		fade = fade + 1;
		fill(255, fade);
	}
	
	if(hours < 7 || hours > 19)//reset the fade
	{
		fade = 255;
	}
		 
	if (hours < day || hours >= night)
	{	
		drawStars();
		
	}
	
	fill(150);
	ellipse(x, y, 55, 55);//moon

	fill(255, 204, 0);

	x = width / 2 + cos(s) * rad;
	y = height / 2 + sin(s) * rad;

	ellipse(x, y, 55, 55);//sun

	textSize(20);
	textFont("Palatino");
	
	if(hours > 7)
	{
		fill(0);
	}
	if(hours < 8 || hours > 18)
	{
		fill(255);
	}
	
	if(hours < 10)
	{
		text("0"+hours+":"+minutes+":"+seconds, width/2-40, height/2);
	}
	else
	{
		text(hours+":"+minutes+":"+seconds, width/2-40, height/2);
	}

	if (alarm == 0)
	{
		background(0);
	}
	else if(alarm > 0)
	{
		background(255);
	}
}

function stars()
{
	for (let i = 0; i < starLength; i++) 
	{	
		let starX = random(width);
		let starY = random(height);
		let newStar = {x: starX, y:starY};
		starList.push(newStar);
	}
	starsMade = true;
}

function drawStars()
{	
	for (let i = 0; i < starLength; i++)
	{
		ellipse(starList[i].x, starList[i].y, 1, 1);
	}
}