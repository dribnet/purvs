//a rag doll, capable of modifying and drawing itself 
function RagDoll(w, h, sliders){
	//the dimensions of the graphics object to be drawn
this.w = w;
this.h = h;
//the slider object 
this.sliders = sliders;
//the graphics object this image will be drawn to
this.canvas = createGraphics(w,h);
//variables for storing the calculated values from a slider
this.scaler = 1;

//returns the graphics object with the new face drawn on it
this.drawFace = function(){
	
	this.canvas.clear();
	//this.canvas.background(0,0,0);
	this.canvas.ellipseMode(CENTER);
	this.canvas.push();
	this.canvas.translate(w/4,h/4);
	//eyes and face
	this.drawEyes();
	//mouth
	this.drawMouth();
	//hair
	this.drawHair();
	this.canvas.pop();
	return this.canvas;
}

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
				this.canvas.fill(151, 102, 52);
			}
			else if(this.eyeType<35){
				this.canvas.fill(165,128,104);

			}
			else{this.canvas.fill(244, 222, 216);}
			
			//face
			this.canvas.ellipse(0,0,w/3,w/3);
			this.cheeks();
			this.canvas.fill(255);
		}
		//creepy face and eyes
		else{
this.canvas.fill(this.sliders.scaleSliders(4,50,200,true),254/2,254/2);
	//face
	this.canvas.ellipse(0,0,w/3,w/3);
			this.canvas.fill(0);}
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
	this.mouthY = this.sliders.scaleSliders(5,30,40,true);
	this.mouthW = this.sliders.scaleSliders(3,35,40,true);
	
	this.smileH = this.sliders.scaleSliders(5,0,30,true);
	this.stitches = this.sliders.scaleSliders(3,1,10,true);
	//adds the value of slider 5 to mouth width as well
	//if the mouth is smiling make it wider
	if(this.stitches>2){
	this.mouthW = this.sliders.scaleSliders(5,this.mouthW,this.mouthW+40,true);
}
	this.canvas.translate(0,this.mouthY);
	this.drawSmile(this.mouthW,this.smileH, this.stitches);
	this.canvas.pop();
}


//draws a mouth at the of the required width and smile, at 0,0
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

this.drawHair = function(){
	this.bowWidth =25;
	this.bowHeight = 15;
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

	//draw the leftside bow
	this.canvas.push();
	this.canvas.translate(-w/5.8,-w/80);
	this.canvas.fill(255,0,0);
	this.bow(this.bowWidth,this.bowHeight);
	this.canvas.pop();

	//draw the rightside bow
	this.canvas.push();
	this.canvas.translate(w/5.8,-w/80);
	this.canvas.rotate(16);
	this.canvas.fill(255,0,0);
	this.bow(this.bowWidth,this.bowHeight);
	this.canvas.pop();



	
}
//draws a bow of the desired width and height at point 0,0
this.bow = function(tW,tH){
this.tX = tW/2;
this.tY = tH/2;
this.canvas.triangle(-this.tX, -this.tY, -this.tX, this.tY, 0,0);
this.canvas.triangle(this.tX, -this.tY, this.tX, this.tY, 0,0);

}

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
