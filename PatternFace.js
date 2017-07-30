//almose everything is masking, with patterns No stroke
//hair blue water
//hair green weed trees
//translate rotate consentric circle lines
//skin vines
//skin circles
//eyes space and deep space
//mouth is one colour red purple black
//a rag doll, capable of modifying and drawing itself 
function PatternFace(w, h, sliders){
	//the dimensions of the graphics object to be drawn
this.w = w;
this.h = h;
//the slider object 
this.sliders = sliders;
//the graphics object this image will be drawn to
this.c = createGraphics(w,h);
//2 more graphics objects for masking
this.c1 = createGraphics(w,h);
this.c2 = createGraphics(w,h);

//returns the graphics object with the new face drawn on it
this.drawFace = function(){
	
	//basic setup for the graphics object c 
	this.c.clear();
	this.c.ellipseMode(CENTER);
	this.c.fill(155);
	this.c.push();
	this.c.translate(w/4,h/4);
	// rotation in degrees
	this.c.angleMode(DEGREES);
	this.mainDraw();
		
	this.c.pop();
	


	return this.c;
}

this.mainDraw = function(){

	this.c.ellipse(0,0,w/2,w/2);
//this.img = loadImage(this.c1,w ,h);
 //this.c.image(this.img,0-w/2,0-h/2,w,h);
}
}