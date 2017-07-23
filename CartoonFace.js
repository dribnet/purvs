//slider 1 mixes up line weights
//just map the slider to modes 1 through 5 and have each a different line weight for a different feature
//slider 2 mixes up sizes and positions of facial features
//same principal as the slider
//the other 3 sliders control which features
//slider 3 for different face shape and eyes //eye slant and size slider 2
// slider4 for different hair and mouth //hair lenght slider 2. mouth width, mouth tilt slider 2
//slider 5 for eyebrows and nose // nose size slider 2//  eyebrow width, eyebrow slant slider 2
//each feature has several options, and changes coordinates and the like
//each feature positions the canvas and sets the dimensions and rotation.
//it then calls one of about 5 other functions detailing a specific one of those features based on the position of it's slider

//a rag doll, capable of modifying and drawing itself 
function CartoonFace(w, h, sliders){
	//the dimensions of the graphics object to be drawn
	this.w = w;
	this.h = h;
	//the slider object 
	this.sliders = sliders;
	//the graphics object this image will be drawn to
	this.c = createGraphics(w,h);
	//variables for storing the calculated values from a slider
	this.scaler = 1;

//returns the graphics object with the new face drawn on it
this.drawFace = function(){
	//basic canvas setup
	this.c.clear();
	this.c.ellipseMode(CENTER);
	this.c.push();
	this.c.translate(w/4,h/4);
	//make default for this drawing no fill
	this.c.noFill();
	// rotation in degrees
	this.c.angleMode(DEGREES);
	this.c.ellipse(0,0,100,100);


	//draws the face
	this.mouth(1);
	this.nose(1);
	this.c.pop();
	return this.c;
}

//translates the canvas based on slider 2
//draws one of the mouths based on the integer mNum
this.mouth = function(mNum){
	//positions the mouth
this.c.push();
this.c.translate(0,sliders.scaleSliders(1, 20, 30, true));
this.c.rotate(this.sliders.scaleSliders(2,-30,30, true));

//draws a mouth depending on the number it has
if(mNum == 1){
this.lineMouth();
}
else if (mNum == 2){

}
else if (mNum == 3){
	
}
else if (mNum == 4){
	
}
else if (mNum == 5){
	
}
this.c.pop();
}

//draws a straight line mouth at position 0,0
this.lineMouth = function(){
	this.mX = this.sliders.scaleSliders(2,10,25,true);
	this.c.line(-this.mX,0,this.mX,0);
}




//translates the canvas based on slider 2
//draws one of the mouths based on the integer mNum
this.nose = function(mNum){
	//positions the mouth
this.c.push();
this.c.translate(0,0);
this.c.rotate(0);

//draws a mouth depending on the number it has
if(mNum == 1){

}
else if (mNum == 2){

}
else if (mNum == 3){
	
}
else if (mNum == 4){
	
}
else if (mNum == 5){
	
}
this.c.pop();
}

}
