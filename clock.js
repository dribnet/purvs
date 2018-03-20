/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
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
	let alarm = obj.seconds_until_alarm;
	var millis = obj.millis;
	var binary_seconds = ToBinary(seconds); 
	var binary_minutes = ToBinary(minutes); 
	var binary_hours = ToBinary(hours);

	//loads backgound image.
	image(bg,0,0); 
	//Runs check on alarm seconds
	alarm_check();	
	//Draw Clock Rows
	draw_led_min();
	draw_led_hour();
	draw_led_sec();

	//Text display of time vs binary and alarm status.
	fill(255);
	translate(400, 400);
	text("Hours: " + binary_hours + "  Hour: " + hours ,20, 22); 
	text("Minutes: " + binary_minutes + "  Min: " + minutes ,20, 37); 
	text("Seconds: " + binary_seconds + "  Sec: " + seconds ,20, 52); 
	text("alarm: " + alarm, 20, 66); 

//Draws and decides if an LED is ON or OFF, depending on each binary bit.
function draw_led_sec() {
  for(let i=0; i<=5; i++) {
    var led_state = binary_seconds.charAt(i);
    let pos_x = 180+(i*95);
    if (led_state == "1") {
      draw_red_led(pos_x, 300);
    }
    else {
      draw_off_led(pos_x, 300);
    }	
  }
}

function draw_led_min() {
  for(let i=0; i<=5; i++) {
    var led_state = binary_minutes.charAt(i);
    let pos_x = 180+(i*95);
    if (led_state == "1"){
      draw_blue_led(pos_x, 200);	
    }
    else{
      draw_off_led(pos_x, 200);
    }
  }
}

function draw_led_hour() {
  for(let i=0; i<=5; i++) {
    var led_state = binary_hours.charAt(i);
    let pos_x = 180+(i*95);
    if (led_state == "1"){
      draw_green_led(pos_x, 100);	
    }
    else{
      draw_off_led(pos_x, 100);
    }
  }
}

function alarm_check() {
	if (alarm > 0) {
	noStroke();
	//TODO Map() to rectangle length
	fill(255, 255, 255, 140);
//	let rect_length = map(alarm, );
	rect(179, 55, 565, 20);
	rect(179, 410, 565, 20);
	}

	if (alarm == 0) {
	//TODO Make flash red, in and out.
	fill(255, 0, 0, 140);
	rect(91, 13, 754, 468);
        }
}


}

//Image path variables.
var red_led, green_led, blue_led, off_led, bg;

//Loading images from their paths
function preload(){
	bg = loadImage('bg.png');
	red_led = loadImage('red_led.png');
	blue_led = loadImage('blue_led.png');
	green_led = loadImage('green_led.png');
	off_led = loadImage('off_led.png');
}

//converts time params to a binary string.
function ToBinary(timeUnit){
	var n = timeUnit.toString(2);//the param '2' converts to a binary string 
	//gets substream length and puts the proper num of '0's on the binary number.
	n = "000000".substr(n.length) + n;
	return n;
}

//Draws the LEDs image and position. the 4 should be combined to one function.
function draw_red_led(x, y){
	image(red_led, x, y);
}

function draw_blue_led(x, y){
	image(blue_led, x, y);
}

function draw_off_led(x, y){
	image(off_led, x, y);
}

function draw_green_led(x, y){
	image(green_led, x, y);
}


