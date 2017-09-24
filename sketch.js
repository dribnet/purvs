var canvasWidth = 960;
var canvasHeight = 500;

var circles = [];
var sketchMode = 1;
var circle;
var ponds = [];

var modeSelector;


function setup() {
   var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  noiseSeed(random(1000));
  randomSeed(random(1000));

  modeSelector = createSelect();
  modeSelector.option('wallpaper');
  modeSelector.option('landscape');
  modeSelector.parent('selector1Container');

  for (var i = 0; i < 200; i++){
  		var newPond = new Pondset();
  		ponds.push(newPond);
	}

}



function draw() {
	sketchMode = modeSelector.value();

	background(199, 219, 249);
	if(sketchMode =='wallpaper'){
		drawWallpaper();
	}
	else if (sketchMode =='landscape'){
		drawLandscape();
		

	}
	
}

function drawLandscape(){
// draw a pondset at each location
  	var index = 0;
  	var nY = 15;
  	var nX = 13;
  	var spacing = 120;
  	for(var i=nX;i>=0;i--) {
	    for(var j=0;j<nY;j++) {
		    push();
		    translate(0, height/10);
		   
		    if (j%2==1){
		    	translate(ponds[index].shift, 0);
		    }
		   	var pondSize = j/3;
	
		     scale(pondSize);
		     ponds[index].perspective = j/(nY*1.5);
		     
		    ponds[index].display(spacing*i, spacing*(pondSize*ponds[index].perspective));
		  
		
		    index++;
		    pop();
	    }
	    fill(255, 255, 255, 30-(i*2));
		rect(0, 0, canvasWidth, canvasHeight);	
  	}

}


function drawWallpaper(){

// draw a pondset at each location
  	var index = 0;
  	for(var i=0;i<55;i++) {
		ponds[index].perspective = 1;
		ponds[index].flowerMode = 0;
		index++;		
	}

	index = 0;
  	for(var i=0;i<11;i++) {
	    for(var j=0;j<5;j++) {
		    push();


		    if (j%2==1){
		    	translate(ponds[index].shift, 0);
		    }
		    ponds[index].display(120*i, 120*j);

		    index++;
		    pop();
	    }
  	}
}


function Pondset(){
	this.scale = 0.4;
	this.shift = random(20, 80);
	this.xOff = random(1000);
  	this.rand = random(25, 35);
   	this.angle = Math.random()*Math.PI*2;
  	this.showCheck = Math.floor(random(0, 3));
  	this.rad = 200 * noise(50 * 0.01+this.xOff, 50*0.01);
	this.leafX ;
  	this.leafY;
  	this.randS =  random(0.8*this.scale, 1.1*this.scale);
  	this.showLotus = Math.floor(random(0, 2));
	this.rot = random(TWO_PI);
  	this.lotusScale = random(1*this.scale, 1.8*this.scale);
  	this.perspective = 1;
  	this.flowerMode = 0;

	  this.display = function(x, y) {
	  	if (this.showCheck == 1){
		  	push();
		 
			this.leafX = x;
			this.leafY = y;

		


		  	this.generateLeafShape(this.leafX, this.leafY, this.scale);

		  	this.lotusX = this.leafX + (Math.cos(this.angle)*this.rad)*this.scale;
			this.lotusY = this.leafY + (Math.sin(this.angle)*this.rad)*this.scale*this.perspective;

	
			this.generateLotusShape(this.lotusX, this.lotusY, this.lotusScale, this.showLotus);
		  	pop();
	  	}
	  }


	  this.generateLeafShape=function(x, y){
		push();
		translate(x, y);
	
		scale(this.scale, this.scale*this.perspective);
			rotate(this.rot);
	  	fill(255, 255, 255, 0);

	
		//draw ripples
		ellipse(0, 0.1, this.rad*1.9, this.rad*1.9);
	  	ellipse(0, 0.2, this.rad*2.1, this.rad*2.1);
	  	ellipse(0, 0.3, this.rad*2.2, this.rad*2.3);

	    beginShape();
		fill(69, 91, 52);
		strokeWeight(0.5);

		for (var i = 0; i < 50; i++) {
		    var ang = map(i, 0, 50, 0, TWO_PI);
		    this.rad = 200 * noise(i * 0.01+this.xOff, i*0.01);
		    var x = this.rad * cos(ang);
		    var y = this.rad * sin(ang);
		

		     if (i < 11 && i > 0){
		      x+= this.rand+((i/3)-15);
		    }else if (i==11){
		      y+= 4;
		      x+=2;
		    }
		    else if (i==12){
		      y+= i-9;
		    }else if (i==13){
		      y+= i-11;
		    }else if(i ==49){
		      x-=5;
		    }
	    	curveVertex(x, y);

	  	}

	  	endShape(CLOSE);
 
	  	//lines

	  	stroke(219, 237, 154, 50);

	  	for (var i = 0; i < 50; i++) {
	        var ang = map(i, 0, 50, 0, TWO_PI);
		    this.rad = 200 * noise(i * 0.01+this.xOff, i*0.01);
		    var x = this.rad * cos(ang);
		    var y = this.rad * sin(ang);

	        if (i < 11 && i > 0){
	      		x+= this.rand+((i/3)-15);
	   		}else if (i==11){
	      		y+= 4;
	      		x+=2;
	    	}
	    	else if (i==12){
	     		y+= 1;
	    	}
	    	if (i%2 == 1){
	    		line(45, 0, x, y);
	    	}
		}  
		pop();

	  }

 
	  this.generateLotusShape = function(x, y, s, v){
	  	if (v==1 && this.flowerMode ==0){

		  	this.generatePetalShape = function(ang, s){
			  	push();
				rotate(ang);
				scale(s, s);
				beginShape();
				curveVertex(20, 5);
				curveVertex(0, 0);
				curveVertex(20, -5);
				curveVertex(40, 0);
				curveVertex(20, 5);
				curveVertex(0, 0);
				curveVertex(20, -5);
				endShape();
				pop();
		  	}

			push();

			translate(x, y);
			fill(255, 200, 190);
			strokeWeight(0.5);
			//draw petals
			angl = 0;
			
			
			for (var i = 0; i < 40; i++){
				if (i >=20){
					s= this.randS;
				} 
				this.generatePetalShape(angl, s);
				angl += 15;
			}

			//draw centre

			fill(250, 160, 0);
			noStroke();
			ellipse(0, 0, 15, 15)
			stroke(250, 230, 100, 150);
			fill(250, 200, 100, 50);

			this.radius = 7.5;
			numPoints = 20;
			angle = TWO_PI/numPoints;

			for (var i = 0; i < numPoints; i++){
				push();
				rotate(360/numPoints*i);
				ellipse(this.radius*sin(angle*i), this.radius*cos(angle*i), 5, 3);
				this.radius = 6;
				scale(0.6);
				ellipse(this.radius*sin(angle*i), this.radius*cos(angle*i), 5, 3);
				pop();
			}
			pop();
		} else if (v==1 && this.flowerMode ==1){

		}
	}

	
}




function refreshPattern(){

	ponds = [];
 
  for (var i = 0; i < 200; i++){
  		var newPond = new Pondset();
  		ponds.push(newPond);
	}
	shift = random(20, 80);


}

function mousePressed(){
  refreshPattern();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


//lilypd code based on : http://genekogan.com/code/p5js-perlin-noise/
//code borrowed from: https://processing.org/discourse/beta/num_1207766233.html 
// circle circumference code from: https://stackoverflow.com/questions/9879258/how-can-i-generate-random-points-on-a-circles-circumference-in-javascript
//poisson disc random sampling video: https://www.youtube.com/watch?v=flQgnCUxHlw
