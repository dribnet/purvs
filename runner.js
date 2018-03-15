var canvasWidth = 960;
var canvasHeight = 500;

var prevSec;
var millisRolloverTime;
var nextAlarm;
var debug_is_on = (typeof DEBUG !== 'undefined');

 /***ADDED FUNCTIONALITY***/

let pfont;
//Backgrounds
let bg_Day;
let bg_Night;
//Dino
let Dino;
let Dino_Image;
//Clouds
let Cloud_Image;
let Clouds_Array = [];
//Weather Icons
let currentIcon;
let sun;
let moon;

//Function activated before setup to make sure that the font is loaded and ready to use in the rest of the program
function preload(){
	pfont = loadFont('prstart.ttf');
	//Load Images
	Cloud_Image = loadImage('Cloud.png');
	Dino_Image = loadImage('Dino.png');
	sun = loadImage('Sun.png');
	moon = loadImage('Moon.png');
	bg_Day = loadImage('bg_Day.png');
	bg_Night = loadImage('bg_Night.png');
}

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // this is true if debug.js is included
  if(debug_is_on) {
    debug_setup();
  }
  turn_off_alarm();
  
  /***ADDED FUNCTIONALITY***/
  
  Dino = new DinoChar(0,0,Dino_Image);
  //Add Clouds to Array
  var secondsRadius = (min(width, height) / 2) * 0.72;
  for (var a = 0; a < 360; a+=30) {
    var angle = radians(a-90);
    var x = cos(angle) * secondsRadius;
    var y = sin(angle) * secondsRadius;
    Clouds_Array[(a/30)] = new Cloud(x, y, a/30, Cloud_Image);
  }
  //Other Setup Changes
  textFont(pfont);
  textAlign(CENTER,CENTER);
  textSize(20);
  angleMode(DEGREES);
  
}

function turn_on_alarm() {
  nextAlarm = millis() + 20000;    
  print("Alarm on: T minus 20 seconds");  
}

function turn_off_alarm() {
  nextAlarm = -1;
  print("Alarm turned off");  
}

function mouseClicked() {
  if (debug_is_on && debugCheckbox.checked()) {
    return;
  }
  if (nextAlarm > 0) {
    turn_off_alarm();
  }
  else {
    turn_on_alarm();
  }
}

// taking ideas from http://cmuems.com/2016/60212/deliverables/deliverables-02/
function draw () {
  var H, M, S, mils, alarm;

  if (debug_is_on && debugCheckbox.checked()) {
    hourSlider.removeAttribute('disabled');
    minSlider.removeAttribute('disabled');
    secSlider.removeAttribute('disabled');
    millisSlider.removeAttribute('disabled');
    alarmCheckbox.removeAttribute('disabled');
    alarmSlider.removeAttribute('disabled');

    H = hourSlider.value();
    M = minSlider.value();
    S = secSlider.value();
    mils = millisSlider.value();
    if (alarmCheckbox.checked()) {
      alarm = alarmSlider.value();
    }
    else {
      alarm = -1;
    }
  }
  else {
    // Fetch the current time
    H = hour();
    M = minute();
    S = second();
    if (nextAlarm > 0) {
      now = millis();
      var millis_offset = nextAlarm - now;
      if (millis_offset < -10000 ){
        // turn off alarm
        nextAlarm = -1;
        alarm = -1;
      }
      else if (millis_offset < 0) {
        alarm = 0;
      }
      else {
        alarm = millis_offset / 1000.0;
      }
    }
    else {
      alarm = -1;
    }

    // Reckon the current millisecond, 
    // particularly if the second has rolled over.
    // Note that this is more correct than using millis()%1000;
    if (prevSec != S) {
      millisRolloverTime = millis();
    }
    prevSec = S;
    mils = floor(millis() - millisRolloverTime);

    if (debug_is_on) {
      hourSlider.attribute('disabled','');
      minSlider.attribute('disabled','');
      secSlider.attribute('disabled','');
      millisSlider.attribute('disabled','');
      alarmCheckbox.attribute('disabled','');
      alarmSlider.attribute('disabled','');

      hourSlider.value(H);
      minSlider.value(M);
      secSlider.value(S);
      millisSlider.value(mils);
      alarmCheckbox.checked(alarm >= 0);
      alarmSlider.value(alarm);
    }
  }

  obj = {};
  obj.hours = H;
  obj.minutes = M;
  obj.seconds = S;
  obj.millis = mils;
  obj.seconds_until_alarm = alarm;
  //Added
  obj.Dino = Dino;
  obj.Clouds_Array = Clouds_Array;
  obj.Sun = sun;
  obj.Moon = moon;
  obj.bg_Day = bg_Day;
  obj.bg_Night = bg_Night;  
  
  draw_clock(obj);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

//ADDED

class Cloud {
	constructor(posX, posY, num, img) {
		this.positionX = posX;
		this.positionY = posY;
		this.hourNumber = num;
		this.cloudImage = img;
	}
	
	drawImage(){
		image(this.cloudImage, this.positionX, this.positionY);
		text(this.hourNumber,this.positionX,this.positionY);
	}	
}

class DinoChar{
	constructor(posX, posY, img) {
		this.positionX = posX;
		this.positionY = posY;
		this.dinoImage = img;
	}
	
	drawImage(){
		image(this.dinoImage, this.positionX, this.positionY);
	}	
	
	changePos(posX, posY){
		this.positionX = posX;
		this.positionY = posY;
	}
	
}
