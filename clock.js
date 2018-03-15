/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
 var j = 0;
 var sw = 0;
 var j2 = 0;
 var sw2 = 0;
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
    angleMode(DEGREES);
    let h = obj.hours;
	let m = obj.minutes;
	let s = obj.seconds;
	let l = obj.millis;
	background(0);
	translate(480,250);
	stroke('white');
	line(0,0,0,-225);
	fill(255,204,0,60);
	stroke(255,204,0);
	strokeWeight(3);
	ellipse(0,0,450,450);
	noFill();
	arc(0,0,370,370,TWO_PI,TWO_PI);
	arc(0,0,290,290,TWO_PI,TWO_PI);
	arc(0,0,289,289,TWO_PI,TWO_PI);
	arc(0,0,210,210,TWO_PI,TWO_PI);
	fill(255,204,0);
	textSize(25);
	push();
	rotate(-30*h);
	for(i=12;i>=1;i--){
		text(i,-15,-115);
		rotate(-30);
	}
	pop();
	push();
	rotate(map(m,0,59,0,-360));
	for(i=0;i<=59;i=i+5){
		text(i,-15,-155);
		rotate(30);
	}
	pop();
	push();
	rotate(map(s,0,59,0,-360));
	for(i=0;i<=59;i=i+5){
		text(i,-15,-200);
		rotate(30);
	}
	pop();
//	line(0,0,0,-500);
}/*
    angleMode(DEGREES);
	let h = obj.hours;
	let m = obj.minutes;
	let s = obj.seconds;
	let l = obj.millis;
	background(0);
	translate(480,250);
	
	stroke('white');
	line(0,0,0,-250);

	let a = map(m-1,0,59,0,-360);
	let b = map(m,0,59,0,-360);
//----------hour
	push();
		if(h<12){
			fill('white');
			if(m==0 && l==0){
				sw2 = 1;
			}
			if(sw2==1){
				if((-30*(h-1)-j2) > (-30*h)){
					push();
					rotate(-30*(h-1)-j2);
					drawhour();
					pop();
					j2++;
				}else{
					j2=0;
					sw2=0;
				}
			}else{
				push();
				rotate(-30*h);
				drawhour();
				pop();
			}
		}else{
			fill('black');
			stroke('white');
			strokeWeight(4);
			if(m==0 && l==0){
				sw2 = 1;
			}
			if(sw2==1){
				if((-30*(h-13)-j2) > (-30*(h-12))){
					push();
					rotate(-30*(h-13)-j2);
					drawhour();
					pop();
					j2++;
				}else{
					j2=0;
					sw2=0;
				}
			}else{
				push();
				rotate(-30*(h-12));
				drawhour();
				pop();
			}
		}
	pop();


//---------minute



	push();
		if(s==0 && l==0){
			sw = 1;
		}
		if(sw==1){
			if(a-j > b){
				push();
				rotate(a-j);
				drawminute();
				pop();
				j++;
			}else{
				j=0;
				sw = 0;
			}
		}else{
			push();
			rotate(b);
			drawminute();
			pop();
		}
			
	pop();
//------------second

	push();
		drawsecond();
	pop();



	fill('white');
	function drawhour(){
		textSize(50);
		push();
			for(i=12;i>=10;i--){
				text(i,-30,-180);
				rotate(-30);
			}
			for(i=9;i>=1;i--){
				text(i,-13,-180);
				rotate(-30);
			}
		pop();
	}
	function drawminute(){
		textSize(40);
		push();
			text('00',-22,-120);
			rotate(30);
			ellipse(0,-130,10,10);
			rotate(30);
			ellipse(0,-130,10,10);
			rotate(30);
			text('15',-22,-120);
			rotate(30);
			ellipse(0,-130,10,10);
			rotate(30);
			ellipse(0,-130,10,10);
			rotate(30);
			text('30',-22,-120);
			rotate(30);
			ellipse(0,-130,10,10);
			rotate(30);
			ellipse(0,-130,10,10);
			rotate(30);
			text('45',-22,-120);
			rotate(30);
			ellipse(0,-130,10,10);
			rotate(30);
			ellipse(0,-130,10,10);
		pop();
	}
	function drawsecond(){
		push();
			stroke('red');
			strokeWeight(2);
			for(i=0;i<s;i++){
				rotate(6);
				line(0,-60,0,-80);
			}
		pop();
	}
}*/
