//a rag doll, capable of modifying and drawing itself 
function RagDoll(w, h, sliders){
	//the dimensions of the graphics object to be drawn
	this.w = w;
	this.h = h;
	//the slider-replacement object 
	this.sliders = sliders;
	//the graphics object this image will be drawn to
	this.canvas = createGraphics(w,h);
	
//returns the graphics object with the new face drawn on it
this.drawFace = function(){
	//basic graphics object setup
	this.canvas.clear();
	this.canvas.ellipseMode(CENTER);
	this.canvas.push();
	this.canvas.translate(w/4,h/5);
	//eyes and face
	this.drawEyes();
	//mouth
	this.drawMouth();
	//hair
	this.drawHair();
	this.canvas.pop();
	//returns the completed drawing
	return this.canvas;
}

//draws the doll's eyes
this.drawEyes = function(){
	//the measurements and positions of the eyes and eye embelishments
	this.eyeX = 20;
	this.eyeY = sliders.scaleSliders(2,0,-15,true);
	this.eyeSize = sliders.scaleSliders(4,30,15,true);
	this.i = this.eyeSize/2;
	this.eyeType = this.sliders.scaleSliders(1,0,100,true);
	//normal face and eyes
	if(this.eyeType<52){

		if (this.eyeType<20){
			//dark skin
			this.canvas.fill(151, 102, 52);
		}
		else if(this.eyeType<35){
			//medium skin
			this.canvas.fill(165,128,104);

		}
		else{
			//light skin
			this.canvas.fill(244, 222, 216);
		}

		//face
		this.canvas.ellipse(0,0,w/3,w/3);
		this.cheeks();
		this.canvas.fill(255);
	}
	//creepy face and eyes
	else{
		//skin colour that ranges from green, through grey, to reddish-grey
		this.canvas.fill(this.sliders.scaleSliders(4,50,200,true),254/2,254/2);
		//face
		this.canvas.ellipse(0,0,w/3,w/3);
		this.canvas.fill(0);
	}

	//draw the right eye circle and any embelishments
	this.canvas.push();
	this.canvas.translate(this.eyeX, this.eyeY);
	this.canvas.ellipse(0,0,this.eyeSize, this.eyeSize);
	
	//normal eyeball
	if(this.eyeType<52){
		this.cuteEye(this.i,this.i);
	}

	//creepy x dissapeers later than the other eye
	if (this.eyeType>=52 && this.eyeType < 90){
		this.drawX(this.i,this.i);
	}
	this.canvas.pop();

	//draw the left eye circle and any embelishments
	this.canvas.push();
	this.canvas.translate(-this.eyeX, this.eyeY);
	this.canvas.ellipse(0,0,this.eyeSize, this.eyeSize);
		//creepy x
		if (this.eyeType>=52 && this.eyeType < 75){
			this.drawX(this.i,this.i);
		}
		if(this.eyeType<52){
			this.cuteEye(this.i,this.i);
		}
		this.canvas.pop();
	}

//controls the drawing of the mouth
this.drawMouth = function(){
	this.canvas.push();
	//gets the variables
	this.mouthY = this.sliders.scaleSliders(5,30,40,true);
	this.mouthW = this.sliders.scaleSliders(3,35,40,true);
	
	this.smileH = this.sliders.scaleSliders(5,0,30,true);
	this.stitches = this.sliders.scaleSliders(3,1,10,true);
	//adds the value of slider 5 to mouth width as well
	//if the mouth has more than two stitches and is smiling make it wider
	if(this.stitches>2){
		this.mouthW = this.sliders.scaleSliders(5,this.mouthW,this.mouthW+40,true);
	}
	//position the mouth
	this.canvas.translate(0,this.mouthY);
	this.mouthType = this.sliders.scaleSliders(1,0,100,true);
	//draw a normal mouth
	if(this.mouthType<52){
		this.normalMouth();
	}
	//draw creepy mouth
	else{
		this.drawSmile(this.mouthW,this.smileH, this.stitches);
	}
	this.canvas.pop();
}

//draws the normal mouth
this.normalMouth = function(){
	this.canvas.push();
	this.canvas.noFill();
	this.canvas.strokeWeight(2);
	//the measurements and position of the mouth
	this.mouthY = this.sliders.scaleSliders(3,10,15,true);
	this.mouthW = this.sliders.scaleSliders(3,35,40,true);
	this.smileH = this.sliders.scaleSliders(5,0,10,true);
	//smile curve
	this.smileC = this.sliders.scaleSliders(5,0,20,true);
	//make the mouth wider if it is smiling
	this.mouthY = this.sliders.scaleSliders(5,this.mouthY,this.mouthY+15,true);
	//this.canvas.bezier(-20+this.smileC-this.mouthX,4,-this.mouthX,0,this.mouthX,0, (20+this.mouthX)-this.smileC,0);
	this.canvas.bezier(-this.mouthY,-this.smileC,-(this.mouthY-10),this.smileH,this.mouthY-10,this.smileH,this.mouthY,-this.smileC);
	this.canvas.pop();
}

//draws the stitches of  the creepy mouth.
//calculates the position of each stitch line based on 
//the width of the mouth, the height distance between the corners and the center of the mouth, 
//and the number of stitches
this.drawSmile = function(mW,mH, stitch){
	if(this.stitch == 1){this.mH = 0;}
	else{this.mH = mH;}

	this.canvas.strokeWeight(2);
	//number of stitches + spaces
	this.stitch = stitch+(stitch-1);
	//width of a stitch
	this.stitchW = mW/this.stitch;
	//half the width of the mouth
	this.mX = mW/2;
	//do we draw a stitch or a space
	this.isStitch = true;
	//stitch count
	this.c = 1;

	//every second time through the loop draw a stitch
	//the x coordinates are calculated using mapping, the number of stitches within the coordinates
	while(this.c <=this.stitch){
		if(this.isStitch){
			//stitch + 1 is the number of x coordinates needed
			//-mX to mX is the left and right coordinates of the edge of the mouth
			this.s1x = map(this.c, 1, this.stitch+1, -this.mX, this.mX);
			this.s2x = map(this.c+1, 1, this.stitch+1, -this.mX, this.mX);
			//is this the first half of the mouth
			if (this.c<this.stitch/2){
				this.s1y = map(this.c, 1, (this.stitch+1)/2, -this.mH, 0);
				this.s2y = map(this.c+1, 1, (this.stitch+1)/2, -this.mH, 0);

			}
			//or the second half
			else{
				this.s1y = map(this.c, (this.stitch+1)/2, this.stitch+1, 0, -this.mH);
				this.s2y = map(this.c+1, (this.stitch+1)/2, this.stitch+1, 0, -this.mH);
			}
		if(this.stitch<4){
			this.s1y=0;
			this.s2y=0;
		}

		this.canvas.line(this.s1x, this.s1y, this.s2x,this.s2y);
		this.isStitch = false;}
		else{
			this.isStitch=true;
		}
		this.c++;
	}
}

//draws a white x with the required dimensions at the current 0,0 point of the canvas
this.drawX = function (w,h){
	this.xX = w/2;
	this.xY = h/2;
	this.canvas.push();
	this.canvas.stroke(255);
	//line top right to bottom left
	this.canvas.line(-this.xX,-this.xY, this.xX,this.xY);
	//line bottom left to top right
	this.canvas.line(-this.xX,this.xY, this.xX,-this.xY);
	this.canvas.pop();
}

//draws the hair and bows
this.drawHair = function(){
	//maps the dimensions of the bows to slider 2
	this.bowWidth =this.sliders.scaleSliders(2,18,30,true);
	this.bowHeight = this.sliders.scaleSliders(2,18,22,true);
	this.canvas.fill(44);
	//left top hair
	this.canvas.push();
	this.canvas.translate(-w/10,-w/10);
	this.canvas.rotate(15);
	this.canvas.ellipse(0,0,80,30);
	this.canvas.pop();

	//right top hair
	this.canvas.push();
	this.canvas.translate(w/10,-w/9);
	this.canvas.rotate(-15);
	this.canvas.ellipse(0,0,87,35);
	this.canvas.pop();

	//randomise the hair length with a number to divide it by
	this.hs = this.sliders.scaleSliders(6,0.6, 1.8,false);

	//draw the left side ponytail
	this.leftPony();
	//draw the right side ponytail
	this.rightPony();

	//draw the left side bow
	this.canvas.push();
	this.canvas.translate(-w/5.8,-w/80);
	this.canvas.fill(255,0,0);
	this.bow(this.bowWidth,this.bowHeight);
	this.canvas.pop();

	//draw the right side bow
	this.canvas.push();
	this.canvas.translate(w/5.8,-w/80);
	this.canvas.rotate(16);
	this.canvas.fill(255,0,0);
	this.bow(this.bowWidth,this.bowHeight);
	this.canvas.pop();
}

//draw the left side ponytail
this.leftPony = function(){
	this.canvas.push();
	this.canvas.translate(-w/5.8,-w/80);
	this.canvas.beginShape();
	this.canvas.curveVertex(5,-10);
	this.canvas.curveVertex(-3,0);
	this.canvas.curveVertex(-12,10/this.hs);
	this.canvas.curveVertex(-15,30/this.hs);
	this.canvas.curveVertex(-10,40/this.hs);
	this.canvas.curveVertex(0,60/this.hs);
	this.canvas.curveVertex(-3,80/this.hs);
	this.canvas.curveVertex(5,100/this.hs);
	this.canvas.curveVertex(8,105/this.hs);
	this.canvas.curveVertex(0,112/this.hs);
	
	//going back up the right side
	this.canvas.curveVertex(9,105/this.hs);
	this.canvas.curveVertex(10,95/this.hs);
	this.canvas.curveVertex(11,85/this.hs);
	this.canvas.curveVertex(16,70/this.hs);
	this.canvas.curveVertex(8,60/this.hs);
	this.canvas.curveVertex(10,40/this.hs);
	this.canvas.curveVertex(0,25/this.hs);
	this.canvas.curveVertex(5,15);
	this.canvas.curveVertex(-3,0);
	this.canvas.endShape();


	//the curvy strand that starts at the right at the top
	this.canvas.beginShape();
	//going down
	this.canvas.curveVertex(-5,-6);
	this.canvas.curveVertex(3,0);
	this.canvas.curveVertex(5,5/this.hs);
	this.canvas.curveVertex(7,15/this.hs);
	this.canvas.curveVertex(14,30/this.hs);
	this.canvas.curveVertex(-10,44/this.hs);
	this.canvas.curveVertex(-20,70/this.hs);
	this.canvas.curveVertex(-15,85/this.hs);
	this.canvas.curveVertex(-20,95/this.hs);
	this.canvas.curveVertex(-18,105/this.hs);
	this.canvas.curveVertex(-11,110/this.hs);
	this.canvas.curveVertex(-5,105/this.hs);

	//going back up
	this.canvas.curveVertex(-5,105/this.hs);
	this.canvas.curveVertex(-9,110/this.hs);
	this.canvas.curveVertex(-10,105/this.hs);
	this.canvas.curveVertex(-10,95/this.hs);
	this.canvas.curveVertex(-4,80/this.hs);
	this.canvas.curveVertex(-5,70/this.hs);
	this.canvas.curveVertex(-3,50/this.hs);
	//the two lines of the shape cross here
	//this is now the left side
	this.canvas.curveVertex(0,34/this.hs);
	this.canvas.curveVertex(5,30/this.hs);
	this.canvas.curveVertex(3,15/this.hs);
	this.canvas.curveVertex(1,5/this.hs);
	this.canvas.curveVertex(-2,0);
	this.canvas.curveVertex(-5,-6);
	this.canvas.endShape();
	this.canvas.pop();
}

//draws the right side ponytail
this.rightPony = function(){
	this.canvas.push();
	this.canvas.translate(w/5.8,-w/80);
	//the curved shape of the right hand ponytail
	this.canvas.beginShape();
	this.canvas.curveVertex(15,-20);
	this.canvas.curveVertex(-5,-0);
	this.canvas.curveVertex(-9,25/this.hs);
	this.canvas.curveVertex(-5,45/this.hs);
	this.canvas.curveVertex(0,60/this.hs);
	this.canvas.curveVertex(10,80/this.hs);
	this.canvas.curveVertex(12,105/this.hs);
	this.canvas.curveVertex(-5,120/this.hs);
	this.canvas.endShape();
	this.canvas.beginShape();
	this.canvas.curveVertex(-15,-20);
	this.canvas.curveVertex(0,-0);
	this.canvas.curveVertex(14,25/this.hs);
	this.canvas.curveVertex(5,45/this.hs);
	this.canvas.curveVertex(0,60/this.hs);
	this.canvas.curveVertex(-4,80/this.hs);
	this.canvas.curveVertex(-12,107/this.hs);
	this.canvas.curveVertex(5,125/this.hs);
	this.canvas.endShape();

	//left strand
	this.canvas.beginShape();
	this.canvas.curveVertex(15,-20);
	this.canvas.curveVertex(0,-0);
	this.canvas.curveVertex(-9,25/this.hs);
	this.canvas.curveVertex(-25,45/this.hs);
	this.canvas.curveVertex(-20,60/this.hs);
	this.canvas.curveVertex(-30,80/this.hs);
	this.canvas.curveVertex(-25,90/this.hs);
	this.canvas.curveVertex(-20,100/this.hs);
	this.canvas.curveVertex(-16,110/this.hs);
	//this.canvas.curveVertex(-33,120/this.hs);
	this.canvas.curveVertex(-20,105/this.hs);
	this.canvas.curveVertex(-15,85/this.hs);
	this.canvas.curveVertex(-12,70/this.hs);
	this.canvas.curveVertex(-15,60/this.hs);
	this.canvas.curveVertex(-10,45/this.hs);
	this.canvas.curveVertex(-9,25/this.hs);
	this.canvas.endShape();
	this.canvas.pop();
}

//draws a bow of the desired width and height at point 0,0
this.bow = function(tW,tH){
	this.tX = tW/2;
	this.tY = tH/2;
	this.canvas.triangle(-this.tX, -this.tY, -this.tX, this.tY, 0,0);
	this.canvas.triangle(this.tX, -this.tY, this.tX, this.tY, 0,0);
}

//draws the red cheek circles 
//opacity specified by slider 3
this.cheeks = function(){
	//set up colours
	this.canvas.push();
	this.cheekBright = this.sliders.scaleSliders(3,0,200,true);
	this.canvas.fill(255,0,0,this.cheekBright);
	this.canvas.noStroke();
	//draw the left cheek
	this.canvas.push();
	this.canvas.translate(-w/10, w/24);
	this.canvas.ellipse(0,0,25,25);
	this.canvas.pop();

	//draw right cheek
	this.canvas.push();
	this.canvas.translate(w/10, w/24);
	this.canvas.ellipse(0,0,25,25);
	this.canvas.pop();
	this.canvas.pop();
}

//draws one normal eyeball at point 0,0
//takes width and height arguments
this.cuteEye = function(eW, eH){
	this.irisS = eW + (eW/1.9);
	this.pupilS = eW - (eW/5);
	this.canvas.push();
	this.canvas.translate(eW/5.7,eW/6);
	this.canvas.fill(111,111,225);
	this.canvas.noStroke();
	this.canvas.ellipse(0,0,this.irisS,this.irisS);
	this.canvas.fill(0);
	this.canvas.ellipse(0,0,this.pupilS,this.pupilS);
	this.canvas.fill(255);
	this.canvas.ellipse(-this.pupilS/5,-this.pupilS/5,this.pupilS/4,this.pupilS/4);
	this.canvas.pop();
}
}
