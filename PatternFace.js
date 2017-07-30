//Uses masking to create a face with patterns
//a patterned face, capable of modifying and drawing itself 

//setup
function PatternFace(w, h, sliders){
//the dimensions of the graphics object to be drawn
this.w = w;
this.h = h;
//the slider object 
this.sliders = sliders;
//the graphics object this image will be drawn to
this.c = createGraphics(w,h);
//more graphics objects for masking 
this.bgC = createGraphics(w*2,h*2);
this.mC = createGraphics(w*2,h*2);
this.bg1 = createGraphics(w*2,h*2);
this.m1 = createGraphics(w*2,h*2);
//the individual R,G,B values of the skin colour
this.skinRed = 0;
this.skinGreen = 0;
this.skinBlue = 0;

//returns the graphics object with the new pattern face drawn on it
this.drawFace = function(){
	//clears off and resets all the masking graphics objects
	this.bg1.clear();
	this.m1.clear();
	this.mC.clear();
	this.bgC.clear();
	this.bg1.resetMatrix();
	this.bgC.resetMatrix();
	this.m1.resetMatrix();
	this.mC.resetMatrix();
	this.bg1.push();
	this.bgC.push();
	this.m1.push();
	this.mC.push();

	//basic setup for the graphics object c 
	this.c.clear();
	this.c.ellipseMode(CENTER);
	this.c.fill(155);
	this.c.push();
	this.c.translate(w/4,h/4);
	// rotation in degrees
	this.c.angleMode(DEGREES);

	//does the drawing
	this.mainDraw();
	this.c.fill(254,236,171);
	this.c.rectMode(CENTER);
	this.c.rect(0,-canvasWidth/2.2,canvasWidth, canvasWidth);

	//prepares the graphics objects for next time round.
	this.c.pop();
	this.bg1.pop();
	this.bgC.pop();
	this.mC.pop();
	this.m1.pop();

	//returns the canvas
	return this.c;
}
//note for some reason the background() function does not work properly on bgC and mC
//instead ellipses  larger than the canvas are used to create the background
this.mainDraw = function(){
	//setup the graphics objects ready for drawing
	this.mC.translate(w/2, h/2);
	this.bgC.translate(w/2, h/2);
	this.mC.noStroke();
	this.m1.translate(w/2, h/2);
	this.bg1.translate(w/2, h/2);
	this.m1.noStroke();

	

	
	//setup for drawing the face shape
	this.mC.clear();
	
	//draws the pattern for the face onto bgC
	this.skinPattern();
	this.mC.fill(0);
	this.mC.ellipse(0,0,w,w);
	this.mC.fill(255,0,0);

	//the head shape
	this.mC.ellipse(0,-23,100,90);
	this.mC.ellipse(0,-6,100,130);
	this.mC.ellipse(0,0,80,140);

	//fringe
	//uses a black ellipse, the background mask colour, to cut out the shape of the fringe from the head shape
	this.mC.fill(0);
	this.mC.ellipse(0,-55,110,40);

}
//draws the face pattern onto c
this.skinPattern = function(){
	//selects a skin color based on slider 2
	this.check = this.sliders.scaleSliders(2,1,6,true);
	if(this.check == 1){
		this.skinRed = 167;
		this.skinGreen = 202;
		this.skinBlue = 219;
	}
	else if(this.check == 2){
		this.skinRed = 151;
		this.skinGreen = 102;
		this.skinBlue = 52;
	}
	else if(this.check == 3){
		this.skinRed = 200;
		this.skinGreen = 0;
		this.skinBlue = 200;
	}
	else if(this.check == 4){ 
		this.skinRed = 244;
		this.skinGreen = 222;
		this.skinBlue = 216;
	}
	else{
		this.skinRed = 171;
		this.skinGreen = 225;
		this.skinBlue = 171;
	}

	this.c.background(this.skinRed,this.skinGreen,this.skinBlue);
	
	

	//draws a scattering of flowers accross the face
		for(this.num = 0; this.num < 800; this.num ++){
			this.c.push();
			//creates a random shade of the skin tone for the flower
			this.flowerTone = focusedRandom(-70,100);

			this.c.fill(this.skinRed + this.flowerTone, this.skinGreen + this.flowerTone, this.skinBlue + this.flowerTone);
			this.c.translate(focusedRandom(-canvasWidth/2,canvasWidth/2),focusedRandom(0,canvasHeight/2));
			this.flower(focusedRandom(2,4), focusedRandom(6,10));

			this.c.pop();
		}

	}
	//draws a flower at point 0,0 on bgC
	this.flower = function(petalW, petalGap){
	this.c.noStroke();
	this.c.ellipse(0,0,petalW,petalW);
	this.c.angleMode(DEGREES);
	for(this.count = 0;this.count<5 ; this.count++){
		this.c.rotate(360/5);
	this.c.ellipse(0,-petalGap,petalW,petalW+(petalW/2));}
}

//draws the hair pattern on bg1
this.pattern1 = function(){
	//calculates the hair colour
	this.hairCol= this.sliders.scaleSliders(3, 1,6,true);
	if(this.hairCol ==1){
		this.bg1.fill(155,155,255);}
	else if(this.hairCol == 2){
		this.bg1.fill(179,159,49);
	}
	else if (this.hairCol == 3){
		this.bg1.fill(49,124,236);
	}
	else if (this.hairCol == 4){
		this.bg1.fill(95,64,9);
	}
	else{this.bg1.fill(215,110,47);}
		this.bg1.ellipse(0,0,w,w);

	//randomises the shade of the stroke from black to white
	this.bg1.stroke(focusedRandom(3,254));
	//creates a criss-cross pattern of random straight lines if slider 5 is to the left
	if(this.sliders.scaleSliders(5,1,100,true)<50){
		for(this.count = 0; this.count<this.sliders.scaleSliders(2,40,200,true); this.count++){
			this.bg1.line(focusedRandom(-95,95),focusedRandom(-90,100),focusedRandom(-95,95),focusedRandom(-90,100));
		}
	}
	//creates a pattern of overlapping random curves if slider 5 is to the right
	else{
		for(this.count = 0; this.count<this.sliders.scaleSliders(2,40,200,true); this.count++){
			this.bg1.bezier(focusedRandom(-95,95),focusedRandom(-90,100),focusedRandom(-95,95),focusedRandom(-90,100),focusedRandom(-95,95),focusedRandom(-90,100),focusedRandom(-95,95),focusedRandom(-90,100));}
		}
	}

//this function allows you to create any shape you want with any pattern on it, using masking
//bgC the pattern canvas you want the shape made of 
//the bgC canvas must not contain an R value of either 0 or 255. Instead 1 or 254 are the closest allowed
// mC the mask canvas, an image in color(0) and color(255,0,0)
//what is originally black will be clear, and what is red will be the pattern
this.basicMask = function(mC, bgC){
	//loads the pixels of the mask into an array
	mC.loadPixels(); 
	this.mask = color(255, 0, 0);
	this.d =pixelDensity();
	this.halfImage = 4 * (w*4 * this.d) * (h/2 * this.d);
	//if the pixel is red, set it to clear
	for (this.i = 0; this.i < this.halfImage; this.i+=4){
		if(mC.pixels[this.i] == red(this.mask)) {
			mC.pixels[this.i+3] = 0;
		}
	}
	mC.updatePixels();
	//draw the mask onto the pattern
	bgC.image(mC,-w/2,-h/2,w, h);
	//load the masked pattern into an array
	bgC.loadPixels(); 
	//check each pixel, if it is black, make it clear
	for (this.i = 0; this.i < this.halfImage; this.i+=4){
		if(bgC.pixels[this.i] ==0) {
			bgC.pixels[this.i+3] = 0;
		}
	}
	bgC.updatePixels();
	//draw the cut out pattern onto the main graphics object
	 this.c.image(bgC,-w/2,-h/2,w, h);
	}
}