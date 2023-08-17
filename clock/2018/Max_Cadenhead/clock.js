const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
let X, Y, X1, Y1, X2, Y2, XH, YH, XM, YM, XS, YS;
 X = 0;
 Y = 0;
 X1 = 0;
 Y1 = 0;
 X2 = 0;
 Y2 = 0;
 XH = 0;
 YH = 0;
 XM = 0;
 YM = 0;
 XS = 0;
 YS = 0;

function draw_clock(obj) {
angleMode(DEGREES);

let hr = obj.hours;
let mn = obj.minutes;
let sc = obj.seconds;
let ml = obj.millis; 
let alarm = obj.seconds_until_alarm; 

let bg = map(mouseY, 0, 500,50, 200);
let bg1 = map(mouseY, 0, 500, 100, 200);
let am = map(ml, 0, 999, 0, 5);


let rhr = map(hr, 0, 23, 0, 360); //rotation maps for hr, mn and sc
let rmn = map(mn, 0, 59, 0, 360);
let rsc = map(sc, 0, 59, 0, 360);

//print(alarm); //debugging

if(alarm == 0){ //what the alarm does when time reached
                //The alarm changing the cordinates to bounce up and down
	XH = (XH+ (mouseX - XH)/10.0);
	YH = (YH+ (mouseY - YH)/10.0) + am;

	X1 = (X1+ (mouseX - X1)/17.0);
	Y1 = (Y1+ (mouseY - Y1)/17.0) + am;

	XM = (XM+ (mouseX - XM)/45.0);
	YM = (YM+ (mouseY - YM)/45.0) + am;

	X2 = (X2+ (mouseX - X2)/62.0);
	Y2 = (Y2+ (mouseY - Y2)/62.0) + am;

	XS = (XS+ (mouseX - XS)/77.0);
	YS = (YS+ (mouseY - YS)/77.0)+ am;
	 }

else{ //alarm not on - Natural form of the clock
      //the code making the text follow the mouse smoothly at different speeds
	XH = XH+ (mouseX - XH)/5.0; 
	YH = YH+ (mouseY - YH)/5.0;

	X1 = X1+ (mouseX - X1)/15.0;
	Y1 = Y1+ (mouseY - Y1)/15.0;

	XM = XM+ (mouseX - XM)/25.0;
	YM = YM+ (mouseY - YM)/25.0;

	X2 = X2+ (mouseX - X2)/40.0;
	Y2 = Y2+ (mouseY - Y2)/40.0;

	XS = XS+ (mouseX - XS)/55.0;
	YS = YS+ (mouseY - YS)/55.0;
}

background(bg1, bg, bg, 200);

fill(50, 50, 50, 100); //text formatting
textSize(90);
textAlign(CENTER);
textFont('OCR A STD');

if(hr < 10){ //formats the hours to always be 2 digits
	text('0' + hr, XH, YH);	
}else{
	text(hr, XH, YH);	
}

text(":", X1, Y1)

if(mn < 10){ //formats the minutes to always be 2 digits
	text('0' + mn, XM, YM);	
}else{
	text(mn, XM, YM);	
}

text(":", X2, Y2)

if(sc < 10){ //formats the seconds to always be 2 digits
	text('0' + sc, XS, YS)	
}else{
	text(sc, XS, YS);	
}
 }
