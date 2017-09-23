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

	this.skyWash(this.border, this.border, this.w-this.border, this.h/3);

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
	this.mountains(this.border, h/5-this.border, this.w-this.border, (h/4)*2);
}

//draws a series of hills
this.mountains = function(xMin, yMin, xMax, yMax){
	this.peakNum = focusedRandom(0,20,2); 
	this.smooth = false
	//a one in five chance the mountains will all be smooth
	if(this.vals.scaleVals(11,1,5,true) ==1){
	this.smooth = true;
}
	this.hill(xMin, yMin, xMax, yMax,focusedRandom(this.peakNum, this.peakNum+6), 30,20, this.smooth);
	stroke(50);
	this.hill(focusedRandom(xMin, xMin+(xMax-xMin)/3), yMin, focusedRandom(xMax, xMax - (xMax-xMin)/3), yMax,this.peakNum, 10,15, this.smooth);
	stroke(0);
	this.hill(focusedRandom(300,xMin+(xMax-xMin)/1.7), yMin, focusedRandom(xMin+(xMax-xMin)/1.5, xMax), yMax, focusedRandom(this.peakNum, this.peakNum+2),0,0, this.smooth);
	stroke(0);
	this.hill(focusedRandom(xMin+(xMax-xMin)/2, xMin+(xMax-xMin)/1.3,), yMin, focusedRandom(xMin+(xMax-xMin)/1.1, xMax), yMax, this.peakNum,0,0, this.smooth);
	stroke(0);
	this.hill(xMin, yMin, focusedRandom(300,xMin+(xMax-xMin)/1.7), yMax, focusedRandom(this.peakNum, this.peakNum+3),0,0, this.smooth);
	
}


this.trees = function(xMin, yMin, xMax, yMax){

}
//peaks is the maximum number of mini peaks and valleys on each side
this.hill = function(xMin, yMin, xMax, yMax, peaks, endRaise1, endRaise2, isSmooth){
	fill(100);
	//calculate the heights of the beginning, end and midpoints of the hill

	this.startY = yMax - endRaise1;
	this.endY = yMax - endRaise2;
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
	this.startX = xMin;
	this.endX = xMax;
	this.hillWidth = this.endX-this.startX;
	this.midX = (this.startX+(this.hillWidth)/2)-focusedRandom(-this.hillWidth/3,this.hillWidth/3);

//draws the hill, calculating mid points for little peaks and valleys along the way
//these points must be calculated because no point can be further left than it's predecessor
//these points may or may not actually be drawn, but they still need to be calculated so that the next point can draw on them
	beginShape();
	//if the hill is to be smooth add a curve vertex as the first handle
	//the rest will automatically draw as if they were curve vertexes
	if(isSmooth){
		curveVertex(this.startX-20,this.startY);
	}
	vertex(this.startX,this.startY);

	this.hillWidth = this.midX-this.startX;
	this.x1= this.startX+(focusedRandom(this.hillWidth/4),this.hillWidth/3);
	vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));
	
	//more peaks and valleys that may or may not happen
	for(this.a = 0; this.a < this.vals.scaleVals(3,peaks/4,peaks,true); this.a++){
		this.hillWidth = this.midX-this.x1;
		this.x1= this.x1+(focusedRandom(this.hillWidth/4),this.hillWidth/2);
		vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));
	}
	vertex(this.midX, this.midY);
	//second half peaks and valleys
	this.hillWidth = this.endX-this.midX;
	this.x1= this.midX+(focusedRandom(this.hillWidth/4),this.hillWidth/3);
	vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));

	//more peaks and valleys that may or may not happen
	for(this.a = 0; this.a < this.vals.scaleVals(4,peaks/4,peaks,true); this.a++){
		this.hillWidth = this.endX - this.x1;
		this.x1= this.x1+(focusedRandom(this.hillWidth/6),this.hillWidth/3);
		vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));
	}




	vertex(this.endX, this.endY);
	//if the hill is to be smooth add a final curve vertex handle
	if(isSmooth){
		curveVertex(this.endX-20,this.endY);
	}
	endShape();
}







}