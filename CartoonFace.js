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
this.wNum = this.sliders.scaleSliders(1,1,11,true);
	if(this.wNum == 1){
		this.weighting(1,3,2,1,5);

}
else if (this.wNum == 2){
	this.weighting(4,1,2,3,4);
}
else if (this.wNum == 3){
	this.weighting(1,3,5,2,4);
}
else if (this.wNum == 4){
	this.weighting(15,1,4,6,4);
	
}
else if (this.wNum == 5){
	this.weighting(1,6,1,1,2);
}
else if (this.wNum == 6){
	this.weighting(1,3,3,3,2);
}
else if (this.wNum == 7){
	this.weighting(20,1,7,1,2);
}
else if (this.wNum == 8){
	this.weighting(3,4,2,1,2);
}
else if (this.wNum == 9){
	this.weighting(7,3,1,3,5);
}
else if (this.wNum >=10){
	this.weighting(2,8,5,8,2);
}
}

//takes arguments for line weights 
//draws the facial features at those weights
this.weighting = function(b1,b2,b3,b4,b5){
this.c.push();
	this.c.strokeWeight(b1);
	this.head();
	this.c.strokeWeight(b2);
	this.mouth();
	this.c.strokeWeight(b3);
	this.nose();
	this.c.strokeWeight(b4);
	this.eyes();
	this.c.pop();

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
	this.wigglyNose();
}
else if (this.nNum == 5){
	this.normalNose();
}
this.c.pop();
}
this.normalNose = function(){
	this.c.beginShape();
	this.nX = this.sliders.scaleSliders(2,0,4,true);
	this.c.curveVertex(10,-15);
	this.c.curveVertex(0,-10);
	this.c.curveVertex(0,-5);
	this.c.curveVertex(this.nX,0);
	this.c.curveVertex(8,5);
	this.c.curveVertex(8,10);

	this.c.curveVertex(0,15);

	this.c.curveVertex(-10,15);
	this.c.endShape();
}
this.wigglyNose = function(){
this.c.beginShape();
	this.nX = this.sliders.scaleSliders(2,14,19,true);
	this.c.curveVertex(-10,10);
	this.c.curveVertex(0,5);
	this.c.curveVertex(11,5);
	this.c.curveVertex(this.nX,-6);
	this.c.curveVertex(11,-10);
	this.c.curveVertex(0,-5);
	this.c.curveVertex(-10,-10);
	this.c.endShape();
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




this.eyes = function(){
//works out which eyes to draw
//this number is large so that each set of eyes can be drawn in combination with each different head, on the same slider
this.mNum = this.sliders.scaleSliders(3,1,31,true);
//the higher the eyes get, the closer together they get
this.eyeY = this.sliders.scaleSliders(1,0,-30,false);
this.eyeX = this.sliders.scaleSliders(1,40,15,false);


this.c.push();

//draws eyes depending on the number it has

if(this.mNum == 1 || this.mNum == 7 || this.mNum == 13 ||this.mNum== 19 || this. mNum == 25){
	//round eye with pupil
this.c.ellipse(-this.eyeX,this.eyeY,15,15);
this.c.fill(0);
this.c.ellipse(2-this.eyeX,2+this.eyeY,6,6);
this.c.noFill();
this.c.ellipse(this.eyeX,this.eyeY,15,15);
this.c.fill(0);
this.c.ellipse(2+this.eyeX,2+this.eyeY,6,6);
this.c.noFill();
}
else if (this.mNum == 2 || this.mNum == 8 || this.mNum == 14 ||this.mNum== 20 || this. mNum == 26){
//round eye with pupil
this.c.ellipse(-this.eyeX,this.eyeY,15,22);
this.c.fill(0);
this.c.ellipse(2-this.eyeX,2+this.eyeY,6,6);
this.c.noFill();
this.c.ellipse(this.eyeX,this.eyeY,15,22);
this.c.fill(0);
this.c.ellipse(2+this.eyeX,2+this.eyeY,6,6);
this.c.noFill();

}
else if (this.mNum == 3 || this.mNum == 9 || this.mNum == 15 ||this.mNum== 21 || this. mNum == 27){
	//draws arched eyes with lines under them
	this.mX = this.sliders.scaleSliders(2,10,20,true);
	//left eye line
	this.c.line(-10-this.eyeX,this.eyeY+10,5-this.eyeX,this.eyeY+10);
	//right eye line
	this.c.line(-5+this.eyeX,this.eyeY+10,15+this.eyeX,this.eyeY+10);
	//left eye curve
	this.c.bezier(-this.eyeX-(this.eyeX/6), 10+this.eyeY, -this.eyeX, this.eyeY-10, 9-this.eyeX, this.eyeY-10, 9-this.eyeX-(this.eyeX/6),10+this.eyeY);
	//right eye curve
	this.c.bezier(6+this.eyeX-(this.eyeX/6), 10+this.eyeY, this.eyeX, this.eyeY-10, 9+this.eyeX, this.eyeY-10, 7+this.eyeX+(this.eyeX/6),10+this.eyeY);
//this.c.bezier(-this.eyeX-(this.eyeX/6), 10+this.eyeY, -this.eyeX, this.eyeY-10, this.eyeX, this.eyeY-10, this.eyeX+(this.eyeX/6),10+this.eyeY);
}

else if (this.mNum == 4 || this.mNum == 10 || this.mNum == 16 ||this.mNum== 22 || this. mNum == 28){
	//draws sleeping eyes
	this.c.bezier(-this.eyeX-(this.eyeX/4), this.eyeY-5, -this.eyeX, this.eyeY+5, 9-this.eyeX, this.eyeY+5, 9-this.eyeX+(this.eyeX/4),this.eyeY-5);
	this.c.bezier(this.eyeX-(this.eyeX/4), this.eyeY-5, this.eyeX, this.eyeY+5, 6+this.eyeX, this.eyeY+5, 6+this.eyeX+(this.eyeX/4),this.eyeY-5);	
}
else if (this.mNum == 5 || this.mNum == 11 || this.mNum == 17 ||this.mNum== 23 || this. mNum == 29){
	//left eye
	this.c.line(-5-this.eyeX,this.eyeY,5-this.eyeX,this.eyeY);
	//right eye
	this.c.line(this.eyeX-5,this.eyeY,this.eyeX+5,this.eyeY);
}
else if (this.mNum == 6 || this.mNum == 12 || this.mNum == 18 ||this.mNum== 24 || this. mNum > 29){
	this.c.fill(0);
	this.c.ellipse(this.eyeX,this.eyeY,13,13);
	this.c.ellipse(-this.eyeX,this.eyeY,15,15);
	this.c.noFill();
	}
this.c.pop();
}

}
