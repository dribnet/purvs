/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

let firstTimeSetup = true;
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
	
	if(firstTimeSetup == true){	
	 
		pfont = loadFont('prstart.ttf');
		//Backgrounds
		bg_Day = loadImage('bg_Day.png');
		bg_Night = loadImage('bg_Night.png');
		//Dino
		Dino;
		Dino_Image = loadImage('Dino.png');
		//Clouds
		Cloud_Image = loadImage('Cloud.png');
		Clouds_Array = [];
		//Weather Icons
		currentIcon;
		sun = loadImage('Sun.png');
		moon = loadImage('Moon.png');
	
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
		firstTimeSetup = false;
	}
	
	let h = obj.hours;
	let m = obj.minutes;
	let s = obj.seconds;
	//Change the background depending on the time of day
	for(var i = 0; i < 12; i++){
		if(h >= 12 && h <=23){ //Change numbers to the afternoon/night cycle
		    Clouds_Array[i].hourNumber = i+12;
		}else{ //Keep on day
		    Clouds_Array[i].hourNumber = i;
		}
	}   
	  imageMode(CORNER); 
	  if(h >= 5 && h < 19){
		  background(bg_Day);
	  }else{
		  background(bg_Night);	  
	  }
	  imageMode(CENTER); 
	  //All translations are to be done in relation to this translation
	  translate(width/2,height/2);
		//Draw Hands
	  Draw_Hands(h,m,s);
	  //Draw Icon
	  Draw_Icon(h);
	  //Draw Dino
	  //Get current Cloud
	  if(h >= 12){
		  Dino.changePos(Clouds_Array[h-12].positionX, Clouds_Array[h-12].positionY-30);
	  }else{
		  Dino.changePos(Clouds_Array[h].positionX, Clouds_Array[h].positionY-30);
	  }
	  tint(255, 255);
	  if(obj.seconds_until_alarm == 0){
		  
	  }else{
		   Dino.drawImage();
	  } 
	  //Draw Clouds
	  Draw_Clouds();  	
}

function Draw_Clouds(){
	for(var i = 0; i < 12; i++){
		tint(255, 200);
		Clouds_Array[i].drawImage();
	}
}

function Draw_Hands(h,m,s){
  fill(255);
  //Hours Hand
  rotate(h*30); 
  let hours_Hand = triangle(-10, 0, 0, -80, 10, 0);
  rotate(-(h*30)); 
  //Minutes Hand
  rotate(m*6);
  let minutes_Hand = triangle(-10, 0, 0, -150, 10, 0);
  rotate(-(m*6));  
  //Seconds Hand
  rotate(s*6);  
  let seconds_Hand = triangle(-5, 0, 0, -150, 5, 0);
  rotate(-(s*6));
}

function Draw_Icon(h){
	fill(0);
	ellipse(0, 0, 40, 40);
	if(h >= 5 && h < 19){
	  image(sun, 0, 0);
    }else{
	  image(moon, 0, 0);	  
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


