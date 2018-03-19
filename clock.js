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
	var millis = obj.millis;
	var binary_seconds = ToBinary(seconds); 
	var binary_minutes = ToBinary(minutes); 
	var binary_hours = ToBinary(hours); 

	//loads backgound image.
	image(bg,0,0); 
	//Draw Clock Rows
	draw_led_min();
	draw_led_hour();
	draw_led_sec();

	fill(255);
	translate(400, 400);
	text("Hours: " + binary_hours ,20, 22); 
	text("Minutes: " + binary_minutes,20, 42); 
	text("Seconds: " + binary_seconds ,20, 62); 
	//text("testing: " + binary_seconds.charAt(7) ,20, 76);

function draw_led_sec() {
  for(i=0; i<=5; i++) {
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

function draw_led_min(){
	for(let i=0; i<=5; i++){
	var led_state = binary_minutes.charAt(i);
	let pos_x = 180+(i*95);
	if (led_state == "1"){
	draw_blue_led(pos_x, 200);	
	}else{
	draw_off_led(pos_x, 200);
	}
	}
}

function draw_led_hour(){
	for(let i=0; i<=5; i++){
	var led_state = binary_hours.charAt(i);
	let pos_x = 180+(i*95);
	if (led_state == "1"){
	draw_green_led(pos_x, 100);	
	}else{
	draw_off_led(pos_x, 100);
	}
	}
}


}

var red_led, green_led, blue_led, off_led, bg;

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
	n = "000000".substr(n.length) + n;//gets substream length and puts the proper num of '0's on the binary number.
	return n;
}

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

