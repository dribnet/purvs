﻿/* * us p5.js to draw a clock on a 960x500 canvas */ function draw_clock(hour, minute, second, millis, alarm) {//alarmif(alarm < 10){	fill(120,65,47);	ellipse(500,250,map(alarm,10,0,0,1100));if (alarm == 0){	 background(157, 206, 177);}else if(alarm < 0){		background(157, 206, 177);	}}strokeWeight(1); stroke(120,65,47);var size ;fill(187,160,137);minute_arc = map(minute, 0, 59, 0, 360);hour_arc = map(hour, 0, 10, 0, 360);//tree ellipsefor(var i = second; i > 0; i--){	ellipse(500, 250,i * 5);}//arcs to show minutes/hoursfill(187, 160, 137,120);arc(500, 250, 295, 295, radians(minute_arc), PI+QUARTER_PI, PIE);fill(187, 160, 137, 100);arc(500, 250, 450, 450, radians(hour_arc), PI+QUARTER_PI, PIE);console.log(alarm);}