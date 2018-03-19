/*
	* us p5.js to draw a clock on a 960x500 canvas
*/ 

let fts = true;
let pfont;
//Backgrounds
let bg_Day;
let bg_Night;
let timePassed =0;
//Dino
let Dino;
let Dino_Image;
//Clouds
let Cloud_Image;
let Clock_Clouds = [];
let bg_Clouds = [];
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
	
	if(fts == true){		 
		firstTimeSetup();
	}
	
	let h = obj.hours;
	let m = obj.minutes;
	let s = obj.seconds;
	
	//Change numbers to the afternoon/night cycle
	for(var i = 0; i < 12; i++){
		if(h >= 12 && h <=23){ 
		    Clock_Clouds[i].hourNumber = i+12;
			}else{ //Keep on day
		    Clock_Clouds[i].hourNumber = i;
		}
	}   	
	imageMode(CORNER); 
	//Change the background depending on the time of day
	if(h >= 5 && h < 19){
		background(bg_Day);
		}else{
		background(bg_Night);	  
	}	
	Draw_BG_Clouds();	
	imageMode(CENTER); 
	//All translations are to be done in relation to this translation
	translate(width/2,height/2);
	//Draw Hands
	tint(255, 255);
	Draw_Hands(h,m,s);
	//Draw Icon
	Draw_Icon(h);
	//Draw Dino
	//Get current Cloud
	if(h >= 12){
		Dino.changePos(Clock_Clouds[h-12].positionX, Clock_Clouds[h-12].positionY-30);
		}else{
		Dino.changePos(Clock_Clouds[h].positionX, Clock_Clouds[h].positionY-30);
	}
	Dino.drawImage(obj.seconds_until_alarm);
	//Draw Clouds
	Draw_Clouds();  	
}

function Draw_Clouds(){
	//Draw Clock Clouds
	for(var i = 0; i < 12; i++){
		Clock_Clouds[i].drawImage();
	}
}

function Draw_Hands(h,m,s){
	fill(200);
	noStroke();
	//Hours Hand
	rotate(h*30); 
	let hours_Hand = triangle(-10, 0, 0, -80, 10, 0);
	rotate(-(h*30)); 
	//Minutes Hand
	rotate(m*6);
	let minutes_Hand = triangle(-7, 0, 0, -150, 7, 0);
	rotate(-(m*6));  
	//Seconds Hand
	rotate(s*6);  
	let seconds_Hand = triangle(-3, 0, 0, -150, 3, 0);
	rotate(-(s*6));
}

function Draw_Icon(h){
	fill(0);
	tint(255,255);
	if(h >= 5 && h < 19){
		image(sun, 0, 0);
		}else{
		image(moon, 0, 0);	  
	}  
}

function Draw_BG_Clouds(){
	//Check if enough time has passed to create another cloud, and if the amount of clouds isn't too high
	if(bg_Clouds.length <= 5 && timePassed + 5000 <= millis()){
		if(random(0,100) >= 65){ //Now randomly decide if a cloud should spawn
			var iWidth = Cloud_Image.width * random(0.75,2.01);
			var iHeight = Cloud_Image.height * random(0.5,1.5);
			bg_Clouds.push(new Cloud(0-iWidth, random(0, height), 0, Cloud_Image, iWidth, iHeight, random(150,200)));			
			timePassed = millis();
		}
		timePassed = millis();
	}
	//Draw the clouds
	for(var i = 0; i < bg_Clouds.length; i++){
		bg_Clouds[i].positionX+=0.9;
		if(bg_Clouds[i].positionX > width){
			bg_Clouds.splice(0,1);
			}else{
			bg_Clouds[i].drawImage();
		}
	}
}

function firstTimeSetup(){
	pfont = loadFont('prstart.ttf');
	//Backgrounds
	bg_Day = loadImage('bg_Day.png');
	bg_Night = loadImage('bg_Night.png');
	//Dino
	Dino;
	Dino_Image = loadImage('Dino.png');
	//Clouds
	Cloud_Image = loadImage('Cloud.png');
	Clock_Clouds = [];
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
		Clock_Clouds[(a/30)] = new Cloud(x, y, a/30, Cloud_Image, 60, 42, 200);
	}
	//Other Setup Changes
	textFont(pfont);
	textAlign(CENTER,CENTER);
	textSize(20);
	angleMode(DEGREES);  
	fts = false;
}


class Cloud {
	constructor(posX, posY, num, img, imgWidth, imgHeight, op) {
		this.positionX = posX;
		this.positionY = posY;
		this.hourNumber = num;
		this.cloudImage = img;
		this.imageWidth = imgWidth
		this.imageHeight = imgHeight
		this.opacity = op;
	}
	
	drawImage(){
		tint(255, this.opacity);
		image(this.cloudImage, this.positionX, this.positionY, this.imageWidth, this.imageHeight);
		text(this.hourNumber,this.positionX,this.positionY);
	}	
}

class DinoChar{
	constructor(posX, posY, img) {
		this.positionX = posX;
		this.positionY = posY;
		this.dinoImage = img;
		//Animations
		this.frameTime = 0;
		this.currentFrame = 0;
		this.animationTime = 0;
		this.animationCoolDown = 0;
		this.currentAnimation = [];		
		this.binkingAnimation = [];
		this.turningAnimation = [];
		this.SleepingAnimation = [];
		
	}
	
	drawImage(obj){
		/*
			if(animationTime <= millis()){ //Check if animation is over
			if(animationTime + 5000 <= millis() && random(0,100) >= 65){ //Check if enough time has passed to play a new animation
			//Pick a new standby animation based off of random number
			var aniNum = random(1,100);
			if(aniNum <= 20){ //Blinking animation
			
			}else if(aniNum < 80 && aniNum >= 60){ //Turning animation
			
			}else if(aniNum >= 80){ //Sleeping animation
			
			}
			//Draw the first frame in animation
			this.currentFrame = 0;
			animate = millis();
			image(this.currentAnimation[(currentFrame % currentAnimation.length)], this.positionX, this.positionY);
			animationTime = millis() + 3000;
			}else{ //Draw standard image
			image(this.dinoImage, this.positionX, this.positionY);
			}
			}else{ //Draw a frame from the current animation
			if(millis() >= this.frameTime + 125){
			this.currentFrame = (this.currentFrame+1) % currentAnimation.length;  // Use % to cycle through frames
			animate = millis();
			}
			image(this.currentAnimation[(currentFrame % currentAnimation.length)], this.positionX, this.positionY);
			}	
		*/		
		image(this.dinoImage, this.positionX, this.positionY);
	}	
	
	changePos(posX, posY){
		this.positionX = posX;
		this.positionY = posY;
	}
	
}
