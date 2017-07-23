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
	


	//draws the face
	this.drawWithWeight();
	
	this.c.pop();
	return this.c;
}

this.drawWithWeight = function(){
this.wNum = this.sliders.scaleSliders(1,1,4,true);
	if(this.wNum == 1){
this.c.push();
	this.c.strokeWeight(1);
	this.head();
	this.c.strokeWeight(3);
	this.mouth();
	this.c.strokeWeight(2);
	this.nose();
	this.c.pop();

}
else if (this.wNum == 2){
	this.c.push();
	this.c.strokeWeight(4);
	this.head();
	this.c.strokeWeight(1);
	this.mouth();
	this.c.strokeWeight(2);
	this.nose();
	this.c.pop();
}
else if (this.wNum == 3){
	this.c.push();
	this.c.strokeWeight(1);
	this.head();
	this.c.strokeWeight(3);
	this.mouth();
	this.c.strokeWeight(5);
	this.nose();
	this.c.pop();
}
else if (this.wNum == 4){
	
}
else if (this.wNum == 5){
	
}
}

//translates the canvas based on slider 2
//draws one of the mouths based on the integer mNum

this.mouth = function(){
//works out which mouth to draw
this.mNum = this.sliders.scaleSliders(4,1,6,true);


	//positions the mouth
this.c.push();
this.c.translate(0,sliders.scaleSliders(1, 25, 30, true));
this.c.rotate(this.sliders.scaleSliders(2,-30,30, true));

//draws a mouth depending on the number it has
if(this.mNum == 1){
this.lineMouth();
}
else if (this.mNum == 2){
	this.sadMouth();
}
else if (this.mNum == 3){
	this.curveMouth();
}
else if (this.mNum == 4){
	this.grinMouth();
	
}
else if (this.mNum >= 5){
	this.gapeMouth();
}
this.c.pop();
}

//draws a straight line mouth at position 0,0
this.lineMouth = function(){
	this.mX = this.sliders.scaleSliders(2,10,25,true);

	this.c.line(-this.mX,0,this.mX,0);
}

this.curveMouth = function(){
	this.mX = this.sliders.scaleSliders(2,10,20,true);
	this.c.bezier(-this.mX-(this.mX/6), 0, -this.mX, 20, this.mX, 20, this.mX+(this.mX/6),0);
}

this.sadMouth = function(){
	this.mX = this.sliders.scaleSliders(2,10,20,true);
	this.c.bezier(-this.mX-(this.mX/6), 10, -this.mX, -10, this.mX, -10, this.mX+(this.mX/6),10);
}

this.grinMouth = function(){
	this.mX = this.sliders.scaleSliders(2,10,25,true);
	this.c.line(-this.mX,0,this.mX,0);
	this.c.bezier(-this.mX-(this.mX/6), 0, -this.mX, 20, this.mX, 20, this.mX+(this.mX/6),0);
}

this.gapeMouth = function(){
	this.mX = this.sliders.scaleSliders(2,10,40,true);
	this.mY = this.sliders.scaleSliders(2,10,25,true);
	this.c.ellipse(0,7, this.mX, this.mY);
}



//translates the canvas based on slider 2
//draws one of the mouths based on the integer mNum
this.nose = function(){
	//works out which nose
	this.nNum = this.sliders.scaleSliders(5,1,6,true);
	//positions the nose
this.c.push();
this.c.translate(0,5);
this.c.rotate(this.sliders.scaleSliders(1,-20,20,true));

//draws a nose depending on the number it has
if(this.nNum == 1){
	this.bulbNose();

}
else if (this.nNum == 2){
	
	//circle nose
	this.nX = this.sliders.scaleSliders(2,20,10,true);
	this.c.ellipse(0,0, this.nX, this.nX);
}
else if (this.nNum == 3){
	this.pointyNose();
}
else if (this.nNum == 4){
	
}
else if (this.nNum == 5){
	
}
this.c.pop();
}

this.bulbNose = function(){
	this.c.beginShape();
	this.nX = this.sliders.scaleSliders(2,14,19,true);
	this.c.curveVertex(-10,10);
	this.c.curveVertex(0,5);
	this.c.curveVertex(11,10);
	this.c.curveVertex(this.nX,0);
	this.c.curveVertex(11,-10);
	this.c.curveVertex(0,-5);
	this.c.curveVertex(-10,-10);


	this.c.endShape();
}

this.pointyNose =function(){
	//height of nose
	this.nY = this.sliders.scaleSliders(2,10,4,true);
	//length of nose
	this.nX = this.sliders.scaleSliders(2,15,25,true);
	this.c.beginShape();
	this.c.vertex(0,-this.nY);
	//this tip of the nose
	this.c.vertex(this.nX, 0);
	this.c.vertex(0, this.nY);
	this.c.endShape();
}

this.head = function(){
	//works out which head to draw
	this.hNum = this.sliders.scaleSliders(3,1,6,true);
	this.c.push();
	this.c.rectMode(CENTER);

if(this.hNum == 1){
	//square head
	this.c.rect(0,0,115,115);

}
else if (this.hNum == 2){
	//oval head
	this.c.ellipse(0,0,100,150);

}
else if (this.hNum == 3){
	//circular head
	this.c.ellipse(0,0,115,115);
}
else if (this.hNum == 4){
	//rectangle head
	this.c.rect(0,0,100,150);
}
else if (this.hNum == 5){
	//no head
}
this.c.pop();
}

}
