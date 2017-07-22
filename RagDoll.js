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
	//eyes
	this.drawEyes();
	this.canvas.pop();
	return this.canvas;
}

this.drawEyes = function(){
	//the measurements and positions of the eyes and eye embelishments
	this.eyeX = 20;
	this.eyeY = 0;
	this.eyeSize = 20;
	this.i = this.eyeSize/2;
	this.eyeType = this.sliders.scaleSliders(1,0,100,true);

		//normal face and eyes
		if(this.eyeType<52){
			this.canvas.fill(151, 102, 52);
			this.canvas.ellipse(0,0,w/3,w/3);
			this.canvas.fill(255);
		}
		//creepy face and eyes
		else{
this.canvas.fill(this.sliders.scaleSliders(4,50,200,true),this.sliders.scaleSliders(2,0,255,true),this.sliders.scaleSliders(3,0,255,true));
	//face
	this.canvas.ellipse(0,0,w/3,w/3);
			this.canvas.fill(0);}
		//draw the right eye circle and any embelishments
		this.canvas.push();
		this.canvas.translate(this.eyeX, this.eyeY);
		this.canvas.ellipse(0,0,this.eyeSize, this.eyeSize);
		//creepy x dissapeers later than the other eye
		if (this.eyeType>=52 && this.eyeType < 90){
		this.drawX(this.i,this.i);
	}
		this.canvas.pop();


//draw the left eye circle and any embelishments
		this.canvas.push();
		this.canvas.translate(-this.eyeX, -this.eyeY);
		this.canvas.ellipse(0,0,this.eyeSize, this.eyeSize);
		//creepy x
		if (this.eyeType>=52 && this.eyeType < 75){
		this.drawX(this.i,this.i);
	}
		this.canvas.pop();

		
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
}
