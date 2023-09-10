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
    print("w = " + w*2);
    print("h = " + h*2);
this.skinRed = 0;
this.skinGreen = 0;
this.skinBlue = 0;
this.drafdFace = function(){return this.mC;}
//returns the graphics object with the new pattern face drawn on it
this.drawFace = function(){
	//clears off and resets all the masking graphics objects
	
	this.mC.clear();
	this.bgC.clear();
	this.bgC.resetMatrix();

	this.mC.resetMatrix();

	this.bgC.push();
	
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
	//prepares the graphics objects for next time round.
	this.c.pop();
	this.bg1.pop();
	this.bgC.pop();
	this.mC.pop();
	
	//returns the canvas
	return this.c;
}
//note for some reason the background() function does not work properly on bgC and mC
//instead ellipses  larger than the canvas are used to create the background
this.mainDraw = function(){
	
	//setup ready for drawing
	this.mC.translate(w/2, h/2);
	this.bgC.translate(w/2, h/2);
	this.mC.noStroke();
	this.m1.translate(w/2, h/2);
	this.bg1.translate(w/2, h/2);
	this.m1.noStroke();

	//setup for drawing the hair shape
	this.m1.clear();

	

	//mask the hair shape


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

	//mask the head shape
	this.basicMask(this.mC,this.bgC);
}
//draws the face pattern onto bgC
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

	this.bgC.fill(this.skinRed,this.skinGreen,this.skinBlue);
	this.bgC.ellipse(0,0,w,w);
	

	//draws a scattering of flowers accross the face
		for(this.num = 0; this.num < this.sliders.scaleSliders(4,0,45,true); this.num ++){
			this.bgC.push();
			//creates a random shade of the skin tone for the flower
			this.flowerTone = focusedRandom(-70,100);

			this.bgC.fill(this.skinRed + this.flowerTone, this.skinGreen + this.flowerTone, this.skinBlue + this.flowerTone);
			this.bgC.translate(focusedRandom(-50,40),focusedRandom(-30,65));
			this.flower(focusedRandom(2,4), focusedRandom(6,10));

			this.bgC.pop();
		}

		//draws a large black flower on right cheeck
		this.bgC.fill(1);
		this.bgC.noStroke();
		this.bgC.push();
		this.bgC.translate(35,20);
		this.flower(5,13);
		this.bgC.pop();
		//eyes
		//whites
		this.bgC.fill(this.skinRed+150,this.skinGreen+150,this.skinBlue+150);
		this.bgC.push();
		this.bgC.stroke(1);
		this.bgC.translate(-30,-5);
		this.bgC.ellipse(0,0, 30,20);
		this.bgC.fill(this.skinRed-100,this.skinGreen-100,this.skinBlue-100);
		this.bgC.ellipse(0,0,20,20);
		this.bgC.fill(1)
		this.bgC.ellipse(0,0,15,15);
		this.bgC.pop();
		//right eye
		this.bgC.push();
		this.bgC.stroke(1);
		this.bgC.translate(30,-5);
		this.bgC.ellipse(0,0, 30,20);
		this.bgC.fill(this.skinRed-100,this.skinGreen-100,this.skinBlue-100);
		this.bgC.ellipse(0,0,20,20);
		this.bgC.fill(1)
		this.bgC.ellipse(0,0,15,15);
		this.bgC.pop();
	}
	//draws a flower at point 0,0 on bgC
	this.flower = function(petalW, petalGap){
	this.bgC.noStroke();
	this.bgC.ellipse(0,0,petalW,petalW);
	this.bgC.angleMode(DEGREES);
	for(this.count = 0;this.count<5 ; this.count++){
		this.bgC.rotate(360/5);
	this.bgC.ellipse(0,-petalGap,petalW,petalW+(petalW/2));}
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

	//takes 2 canvases a  mask canvas mC
	//a patterned canvas bgC
	//draws the shape of the mask, in the patten, onto the main canvas c

this.basicMask = function(mC, bgC){
	//loads the pixels of the mask and background into arrays
	mC.loadPixels(); 
	bgC.loadPixels();
	//the colour of the mask shape
	this.mask = color(255, 0, 0);
	//calculates the length of the array
	this.d =pixelDensity();
	this.halfImage = 4 * (w*4 * this.d) * (h/2 * this.d);
	//if the pixel is the mask colour, set it to the rgb value of the corresponding patterned pixel
	for (this.i = 0; this.i < this.halfImage; this.i+=4){
		//the red value of the pixel
		this.checkVal = mC.pixels[this.i];
		//check for if the red value matches the mask value
		if( this.checkVal== red(this.mask)) {
			//take the colour values from the pattern array
			//put them in the mask array
			mC.pixels[this.i] = bgC.pixels[this.i];
			mC.pixels[this.i+1] = bgC.pixels[this.i+1];
			mC.pixels[this.i+2] = bgC.pixels[this.i+2];
		}
		//if not one of the mask values being searched for, set the pixel to clear
		else{
			mC.pixels[this.i+3] = 0;
		}
	}
	//draw the patterned shape onto the canvas
	mC.updatePixels();
	 this.c.image(mC,-w/2,-h/2,w, h);

	}
}