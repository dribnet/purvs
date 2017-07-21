//a rag doll, capable of modifying and drawing itself 
function RagDoll(w, h, sliders){
	//the dimensions of the graphics object to be drawn
this.w = w;
this.h = h;
//the slider object 
this.sliders = sliders;
//the graphics object this image will be drawn to
this.canvas = createGraphics(w,h);

//returns the graphics object with the new face drawn on it
this.drawFace = function(){
	
	this.canvas.clear();
	this.canvas.background(0,0,0);

	this.canvas.ellipseMode(CENTER);

	this.canvas.push();
	this.canvas.translate(w/4,h/4);
	this.canvas.fill(this.sliders.scaleSliders(4,0,255,true),this.sliders.scaleSliders(2,0,255,true),this.sliders.scaleSliders(3,0,255,true));
		var meep = this.sliders.scaleSliders(1,-100,100,false);
	this.canvas.ellipse(meep,meep,w/3,w/3);
	this.canvas.pop();
	


	return this.canvas;
}
}