function Landscape(){

/*
A setup function that means a single landscape object 
can be created before all necessary variables are available
and that a Landscape object can be reset as needed.
*/
this.setupLand = function(values){
this.w = w;
this.h = h;
this.vals = values;
this.border = 30;
}

this.drawLand = function(){
	background(110);
	this.sky();
	this.midground();
}


this.sky = function(){

	this.skyWash(this.border, this.border, this.w-this.border, (this.h/3)-this.border);

}

this.skyWash = function(xMin, yMin, xMax, yMax){
//sets a color with a lerp value based on random number one, and an opacity based on random number two	
noFill();
strokeWeight(6);
//ellipseMode(CORNER);
//ellipse(xMin,yMin, xMax-xMin, yMax-yMin);
for (this.i = 0; this.i<511; this.i++){
	this.col = lerpColor(color(255,0,0,focusedRandom(50,150)),color(0,0,255,focusedRandom(50,150)), focusedRandom(0.01,0.99));
	stroke(this.col);
	beginShape();
	this.randX = focusedRandom(xMin+20, xMax-20,2);
	this.randY = focusedRandom(yMin+5,yMax-5);
	vertex(-15+this.randX+focusedRandom(-20,10),this.randY+focusedRandom(-7,7));
	vertex(this.randX+focusedRandom(-4,3),this.randY+focusedRandom(-7,7));
	vertex(15+this.randX+focusedRandom(-10,20),this.randY+focusedRandom(-7,7));
	endShape();
}
}

this.midground = function(){

	this.trees(this.border, this.border+h/3, this.w-this.border, this.border+(h/3)*2);
	this.hills(this.border, h/4-this.border, this.w-this.border, (h/4)*2);
}
this.trees = function(xMin, yMin, xMax, yMax){

}

this.hills = function(xMin, yMin, xMax, yMax){
	fill(100);
	//calculate the heights of the beginning, end and midpoints of the hill
	this.startY = focusedRandom((yMax)/1.5, yMax);
	this.endY = focusedRandom((yMax)/1.5, yMax)
	//the peak must be higher than both ends
	if(this.startY>this.endY){
		this.midY = focusedRandom(yMin,this.startY-30, 2);
		//the distance between the higher bottom edge and the peak
		this.peakDepth = this.endY - this.midY;
		//the highest the lower peaks are allowed to be
		this.peakHigh = this.midY + this.peakDepth/5;
		//the lowest the valleys are allowed to be
		this.peakLow = this.endY- this.peakDepth/5;
	}
	else{
		this.midY = focusedRandom(yMin,this.endY-30, 2);
		this.peakDepth = this.startY - this.midY;
		//the highest the lower peaks are allowed to be
		this.peakHigh = this.midY + this.peakDepth/5;
		//the lowest the valleys are allowed to be
		this.peakLow = this.startY- this.peakDepth/5;
	}
	//Calculate the x positions of the hill
	this.hillWidth = this.endX-this.startX;
	this.startX = xMin;
	this.midX = (this.startX+(this.hillWidth)/2)-focusedRandom(-this.hillWidth/3,this.hillWidth/3);
	this.endX = xMax/2;

//draws the hill, calculating mid points for little peaks and valleys along the way
//these points must be calculated because no point can be further left than it's predecessor
//these points may or may not actually be drawn, but they still need to be calculated so that the next point can draw on them
	beginShape();
	vertex(this.startX,this.startY);
	this.hillWidth = this.midX-this.startX;
	this.x1= this.startX+(focusedRandom(this.hillWidth/4),this.hillWidth/1.5);
	vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));
	vertex(this.midX, this.midY);
	vertex(this.endX, this.endY);
	endShape();
}







}