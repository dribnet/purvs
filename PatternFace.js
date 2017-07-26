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
this.bgC = createGraphics(w*2,h*2);
this.mC = createGraphics(w*2,h*2);

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
//note for some reason the background() function does not work properly on bgC and mC
//instead ellipses  larger than the canvas are used to create the background
this.mainDraw = function(){
	this.mC.translate(w/2, h/2);
	this.bgC.translate(w/2, h/2);
	this.mC.clear();
	this.bgC.fill(200,0,200);
	this.bgC.ellipse(0,0,w,w);
	this.mC.fill(0);
	this.mC.noStroke();
	this.mC.ellipse(0,0,w,w);
	this.mC.fill(255,0,0);

	//the head shape
	this.mC.ellipse(0,-23,100,90);
	this.mC.ellipse(0,-6,100,130);
	this.mC.ellipse(0,0,80,140);
	//this.bgC.background(200,0,200);
	this.basicMask(this.mC,this.bgC);
}

//this function allows you to create any shape you want with any pattern on it, using masking
//bgC the pattern canvas you want the shape made of 
//the bgC canvas must not contain an R value of either 0 or 255. Instead 1 or 254 are the closest allowed
// mC the mask canvas, an image in color(0) and color(255,0,0)
//what is originally black will be clear, and what is red will be the pattern
this.basicMask = function(mC, bgC){

mC.loadPixels(); 

this.mask = color(255, 0, 0);
this.d =pixelDensity();
this.halfImage = 4 * (w*4 * this.d) * (h/2 * this.d);
for (this.i = 0; this.i < this.halfImage; this.i+=4){
if(mC.pixels[this.i] == red(this.mask)) {
	mC.pixels[this.i+3] = 0;
}}

 mC.updatePixels();
 bgC.image(mC,-w/2,-h/2,w, h);
bgC.loadPixels(); 
 for (this.i = 0; this.i < this.halfImage; this.i+=4){
if(bgC.pixels[this.i] ==0) {
	bgC.pixels[this.i+3] = 0;
}}
bgC.updatePixels();
 this.c.image(bgC,-w/2,-h/2,w, h);


}
}