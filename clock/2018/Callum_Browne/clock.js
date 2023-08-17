//Global Variables
let fts = true;
//Backgrounds
let bg_Day;
let bg_Night;
let timePassed = 0;
//Dino
let Dino;
let Dino_Image;
let DinosOldX;
let DinosOldY;
//Clouds
let Cloud_Image;
let dCloud;
let Clock_Clouds = [];
let bg_Clouds = [];
//Weather Icons
let sun;
let moon;
let cOpacity;
//Moving Transition
let lh;
let Disappear;
let moving = false;

/**
	Main Draw Loop to consider in this particular program
**/
function draw_clock(obj) {	
	let alarm = obj.seconds_until_alarm;
	let h = obj.hours;
	let m = obj.minutes;
	let s = obj.seconds;
	//Check for first time setup
	if(fts){ firstTimeSetup(h); }
	//Set Image Mode to corner for the background and the background clouds
	imageMode(CORNER); 
	//Change the background depending on the time of day
	if(h >= 5 && h < 19){
		background(bg_Day);
	}else{
		background(bg_Night);	  
	}	
	Draw_BG_Clouds();	
	imageMode(CENTER); 
	//Change numbers to the afternoon/night cycle if the hour has changed and change Dinos position
	if(lh != h){ Cycle_Change(h); }
	//Draw main clock features
	translate(width/2,height/2);
	tint(255, 255);
	Draw_Hands(h,m,s);	
	Draw_Dino(alarm);
	Draw_Clouds();  
	//Update Last Hour
	lh = h;
}

/**
	Function to change numbers on clock face and dinos position	
**/
function Cycle_Change(h){
	moving = true;
	Disappear = millis() + 3000;
	DinosOldX = Dino.positionX;
	DinosOldY = Dino.positionY;
	cOpacity = 45;
	if(h >= 12 && h <=23){ 
		Dino.changePos(Clock_Clouds[h-12]);
	}else{
		Dino.changePos(Clock_Clouds[h]);
	}
	for(var i = 0; i < 12; i++){
		if(h >= 12 && h <=23){ 
			Clock_Clouds[i].hourNumber = i+12;
		}else{ //Keep on day
			Clock_Clouds[i].hourNumber = i;
		}
	} 
}

/**
	Draw Clock face Clouds
**/
function Draw_Clouds(){
	fill(0);	
	for(var i = 0; i < 12; i++){
		Clock_Clouds[i].drawImage();
	}
}

/**
	Function which draws the hands of the clock as well as the icon.
**/
function Draw_Hands(h,m,s){
	fill(200);	
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
	//Draw Icon on top
	if(h >= 5 && h < 19){
		image(sun, 0, 0);
	}else{
		image(moon, 0, 0);	  
	}
}

/**
	Function which draws the animated background clouds
**/
function Draw_BG_Clouds(){
	//Check if enough time has passed to create another cloud, and if the amount of clouds isn't too high
	if(bg_Clouds.length < 5 && timePassed + 7000 <= millis()){		
		var iWidth = Cloud_Image.width * random(0.75,2.01);
		bg_Clouds.push(new Cloud(0-iWidth, random(0, height), '', Cloud_Image, iWidth, Cloud_Image.height * random(0.5,1.5), random(150,200)));			
		timePassed = millis();
	}
	//Draw the clouds
	for(var i = 0; i < bg_Clouds.length; i++){
		bg_Clouds[i].positionX++;
		if(bg_Clouds[i].positionX > width){
			bg_Clouds.splice(0,1);
		}else{
			bg_Clouds[i].drawImage();
		}
	}
}

function Draw_Dino(alarm){
	if(moving){
		if(Disappear <= millis()){
			moving = false;
		}else{	
			tint(255,cOpacity);
			image(dCloud, DinosOldX, DinosOldY, Cloud_Image.width, Cloud_Image.height*2);
			image(dCloud, Dino.positionX, Dino.positionY, Cloud_Image.width, Cloud_Image.height*2);
			if(Disappear-1500 <= millis() && Disappear >= millis()){				
				if(cOpacity != 0){
					cOpacity-=10;
				}
				tint(255,255 - cOpacity);
				Dino.drawImage(alarm);	
			}else{					
				if(cOpacity != 255){
					cOpacity+=10;
				}					
			}				
		}		
	}else{
		Dino.drawImage(alarm);
	}
}

/**
	Function that is used for the first time the program is run. This should go in setup, loading images would go in preload
**/
function firstTimeSetup(h){
	/** File Loading Section **/
	var pfont = loadFont('prstart.ttf');
	//Backgrounds
	bg_Day = loadImage('bg_Day.png');
	bg_Night = loadImage('bg_Night.png');
	//Clock images	
	Cloud_Image = loadImage('Cloud.png');
	dCloud = loadImage('dCloud.png');
	sun = loadImage('Sun.png');
	moon = loadImage('Moon.png');
	
	//Add Numbered Clouds to Array in a circle
	var secondsRadius = (min(width, height) / 2) * 0.72;	
	for (var a = 0; a < 360; a += 30) {
		var angle = radians(a-90);
		var x = cos(angle) * secondsRadius;
		var y = sin(angle) * secondsRadius;
		var clockNum = a/30;
		if(h >= 12 && h <=23){ clockNum = (a/30)+12; }
		Clock_Clouds[(a/30)] = new Cloud(x, y, clockNum, Cloud_Image, 60, 42, 255);
	}
	
	//Dino setup
	Dino_Image = loadImage('Dino.png');
	if(h >= 12 && h <=23){ 
		Dino = new DinoChar(Clock_Clouds[h-12].positionX, Clock_Clouds[h-12].positionY-40,Dino_Image);
	}else{
		Dino = new DinoChar(Clock_Clouds[h].positionX, Clock_Clouds[h].positionY-40, Dino_Image);
	}
	//Dino Animations
	for(var i = 0; i < 4; i++){
		Dino.alarmAnimation[i] = loadImage('Alarm' + (i+1) + '.png');
		Dino.sleepingAnimation[i] = loadImage('Sleep' + (i+1) + '.png');		
		Dino.turningAnimation[i] = loadImage('Turning.png');
		Dino.blinkingAnimation[i] = loadImage('Blink.png');
	}
	
	//Other Setup Changes
	noStroke();
	textFont(pfont);
	textAlign(CENTER,CENTER);
	textSize(20);
	angleMode(DEGREES);  
	lh = h;
	//Set to false so we never have to do this again
	fts = false;
}

/**
	Class designed for all the clouds shown in the program
**/
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
	
	/**
		Function used to draw the cloud and any number associated with it
	**/
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
		this.blinkingAnimation = [];
		this.turningAnimation = [];
		this.alarmAnimation = [];
		this.sleepingAnimation = [];
		
	}
	
	/**
		Draws Dino on screen including any animations
	**/
	drawImage(alarm){
		//Priority Goes too Alarm animation	
		if(alarm == 0){
			this.currentAnimation = this.alarmAnimation;
			if(millis() >= this.frameTime + 125){
				this.currentFrame = (this.currentFrame+1) % this.currentAnimation.length;  // Use % to cycle through frames
				this.frameTime = millis();				
			}			
			image(this.currentAnimation[this.currentFrame], this.positionX, this.positionY);
			return;
		}
		//Normal Animation stuff
		if(this.animationTime <= millis()){ //Check if animation is over
			if(this.animationTime + 5000 <= millis() && random(0,100) >= 50){ //Check if enough time has passed to play a new animation
			//Pick a new standby animation based off of random number
				var aniNum = random(1,100);
				if(aniNum <= 40){ //Blinking animation
					this.currentAnimation = this.blinkingAnimation;
					this.animationTime = millis() + 1000;
				}else if(aniNum <= 80 && aniNum > 40){ //Turning animation
					this.currentAnimation = this.turningAnimation;
					this.animationTime = millis() + 1000;
				}else if(aniNum > 80){ //Sleeping animation
					this.currentAnimation = this.sleepingAnimation;
					this.animationTime = millis() + 5000;
				}
				//Draw the first frame in animation
				this.currentFrame = 0;				
				image(this.currentAnimation[0], this.positionX, this.positionY);				
				this.frameTime = millis();
				return;
			}		
		}else{ //Draw a frame from the current animation
			if(millis() >= this.frameTime + 125){
				this.currentFrame = (this.currentFrame+1) % this.currentAnimation.length;  // Use % to cycle through frames
				this.frameTime = millis();				
			}		
			image(this.currentAnimation[(this.currentFrame % this.currentAnimation.length)], this.positionX, this.positionY);
			return;
		}
		//Draw standard image
		image(this.dinoImage, this.positionX, this.positionY);
	}	
	
	/**
		Updates Dinos position
	**/
	changePos(Current_Cloud){
		this.positionX = Current_Cloud.positionX;
		this.positionY = Current_Cloud.positionY-40;
	}	
}