let starFade = 255;
let cloudFade = 0;

var starList = [];
var starLength =2000;//length of the starList array
var cloudList = [];
var cloudLength = 5;

var starsMade = false;
var cloudsMade = false;

var sunRaysImg;
var cloudImg;

let spin = 0;

var imagesi = [];
var ii = 0;
var imageCount = 13;
var zi = 0;
  
function preload() 
{
	cloudImg = loadImage("cloud.png");
	sunRaysImg = loadImage('sun.png');
  
	while(ii < imageCount)
	{
		// imagesi[ii]=loadImage("frame"+(ii+1)+".png");
		imagesi[ii]=loadImage("sun.png");
		ii =  ii + 1;
	 }
}

function draw_clock(obj) 
{	
	if(starsMade == false)
	{
		stars();
	}
	if(cloudsMade == false)
	{
		clouds();
	}

	angleMode(DEGREES);
	
	let hours = obj.hours;
  	let minutes = obj.minutes;
  	let seconds = obj.seconds;
  	let millis = obj.millis;
  	let hoursWithFraction = hours + (minutes / 60) + (seconds / 3600);
	let alarmSeconds = obj.seconds_until_alarm;
	
	let sunrise = 6;
	let sunset = 18;
	let day = 8;
	let night = 19;
  
	let a = map(hoursWithFraction, 0, 24, 0, 360, true);
	
	let s = a + 90;//where the sun is on the circle
	let m = a + 270;//where the moon is on the circle
  	let rad = 200;//radius of the circle
	let moonX = width / 2 + cos(m) * rad;
	let moonY = height / 2 + sin(m) * rad;

    let hourTime   = map(hours, 0, 23, 0, width);
    let minuteTime = map(minutes, 0, 60, 0, width);
    let secondTime = map(seconds, 0, 60, 0, width);
    let millisTime = map(millis, 0, 1000, 0, width);
		
	drawBackground(hoursWithFraction, hours, sunrise, day, sunset, night)
	
	noStroke();
	fill(255, starFade);
	
	if (hours > sunrise && hours < 18 && starFade > 0)//fade out the stars
	{
		starFade = starFade - 1;
		fill(255, starFade);
	}
	else if (hours > 18 && starFade < 255)//fade in the stars
	{
		starFade = starFade + 1;
		fill(255, starFade);
	}
	
	if (hours < 7 || hours > 19)//reset the fade
	{
		starFade = 255;
	}
		 
	if (hours < day || hours >= night)
	{	
		drawStars();
		
	}

	tint(255, cloudFade);
	
	if (hours > sunrise+1 && cloudFade < 255 && hours < sunset)//fade in the clouds
	{
		cloudFade = cloudFade + 1;
		tint(255, cloudFade);
	}
	else if (hours => sunset && cloudFade > 0)//fade out the clouds
	{
		cloudFade = cloudFade - 1;
		tint(255, cloudFade);
	}
	
	if (hours > day && hours < sunset)//reset the fade
	{
		cloudFade = 255;
	}

	if (hours <= sunrise+1 || hours >= night)
	{
		cloudFade = 0;
	}

	if (hours > sunrise+1 && hours < night)
	{	
		drawClouds(cloudImg);
	}

	fill(150);
	ellipse(moonX, moonY, 60, 60);//moon

	let sunX = width / 2 + cos(s) * rad;
	let sunY = height / 2 + sin(s) * rad;

	tint(255, 255);
	alarm(sunX, sunY, moonX, moonY, sunRaysImg, alarmSeconds);
	
	fill(255, 204, 0);
	ellipse(sunX, sunY, 60, 60);//sun

	textSize(20);
	textFont("Palatino");
	
	if(hours > 7)
	{
		fill(0, 150);
	}
	if(hours < 8 || hours > 18)
	{
		fill(255, 150);
	}
	
	if(hours < 10)
	{
		text("0"+hours+":"+minutes+":"+seconds, width/2-40, height/2);
	}
	else
	{
		text(hours+":"+minutes+":"+seconds, width/2-40, height/2);
	}
}

function drawBackground(hoursWithFraction, hours, sunrise, day, sunset, night)
{
	let r = 0;
	let g = 0;
	let b = 0;
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
}

function alarm(sunX, sunY, moonX, moonY, sunRaysImg, alarmSeconds)
{	
	imageMode(CENTER);
	if (alarmSeconds == 0)
	{
		fill(255, 234, 30);
		
		push();
			spin = spin + 5;
			translate(sunX, sunY);
			rotate(spin);
			image(sunRaysImg, 0, 0);
		pop();
	
	}
	else if(alarmSeconds > 0)
	{
		if (zi >= imageCount-1)
		{
			zi = 1;
		}
		else
		{
			zi = zi+1;
		}
		push();
			translate(moonX, moonY);
			image(imagesi[zi - 1], 0, 0);
		pop();
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

function clouds()
{
	for (let z = 0; z < cloudLength; z++) 
	{
		let cloudX = random(width);
		let cloudY = random(height);
		let newCloud = {x: cloudX, y:cloudY};
		cloudList.push(newCloud);
	}
	cloudsMade = true;
}

function drawClouds(cloudImg)
{	
	for (let i = 0; i < cloudLength; i++)
	{
		image(cloudImg, cloudList[i].x, cloudList[i].y);
	}
}