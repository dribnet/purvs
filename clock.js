/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
	
	angleMode(DEGREES);
  	background(0); // light gray background
  	translate(320, 170);
  	fill(0,255,0);
  	textAlign(CENTER);
  	textSize(70);
  	rotate(-175.5);
  	var red = 20;
  	var green = 255;
  	var blue = 200;
  	var opacity = 10;
  	for(var i = 15; i <=36; i++)
  	{
  		rotate(8);
  		fill(red, green, blue, opacity);
  		text("2:08:" + i + "PM", 0, 0);
  		translate(-20, 15);
  		red += 12;
  		green -= 7;
  		blue -= 3;
  		opacity +=10;
  	}
  	fill(255);
  	text("2:08:" + 37 + "PM", 0, 0);
}
