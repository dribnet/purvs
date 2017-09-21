


var rad = 0;


var ponds = [];

function setup() {
  createCanvas(960, 500);

  noiseSeed(random(1000));
  for (var i = 0; i < 4; i++){
  		var newPond = new generatePondSet(i*width/5, height/2);
  		ponds.push(newPond);
	}
}


function draw() {
	background(199, 219, 249);

	for (var i = 0; i < 4; i++){
  		ponds[i].display();
	}
}

function generatePondSet(x, y){
	

	this.xOff = random(1000);
   this.rand = random(25, 35);

  this.lotusX = random(rad-100, rad+100);
  this.lotusY = random(rad-100, rad+100);

	this.leafX = x;
  this.leafY = y;

  this.display = function() {

  	this.generateLeafShape(this.leafX, this.leafY);
  	this.generateLotusShape(this.leafX + this.lotusX, this.leafY + this.lotusY, 10);
  }
  this.generateLeafShape=function(x, y){
	push();
	translate(x, y)
	scale(0.8);
    beginShape();
	fill(69, 91, 52);
	strokeWeight(0.5);
	for (var i = 0; i < 50; i++) {
	    var ang = map(i, 0, 50, 0, TWO_PI);
	    var rad = 200 * noise(i * 0.01+this.xOff, i*0.01);
	    var x = rad * cos(ang);
	    var y = rad * sin(ang);

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
	    rad = 200 * noise(i * 0.01+this.xOff, i*0.01);
	    var x = rad * cos(ang);
	    var y = rad * sin(ang);

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

 
  this.generateLotusShape = function(x, y, s){

  	this.generatePetalShape = function(ang, size){
	  	push();
		rotate(ang);
		scale(size, size);
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
	size = 1;
	for (var i = 0; i < 40; i++){
		if (i >=20){
			size = 0.7;
		} else {
			size = 1;
		}
		this.generatePetalShape(angl, size);
		angl += 15;
	}

	//draw centre

	fill(250, 160, 0);
	noStroke();
	ellipse(0, 0, 15, 15)
	stroke(250, 230, 100, 150);
	
	fill(250, 200, 100, 50);


	radius = 7.5;
	numPoints = 20;
	angle = TWO_PI/numPoints;

	for (var i = 0; i < numPoints; i++){
		push();
		rotate(360/numPoints*i);
		ellipse(radius*sin(angle*i), radius*cos(angle*i), 5, 3);
		radius = 6;
		scale(0.6);
		ellipse(radius*sin(angle*i), radius*cos(angle*i), 5, 3);
		pop();
	}
	pop();
}

//code borrowed from: https://processing.org/discourse/beta/num_1207766233.html 






}




function refreshPattern(){
	ponds = [];
  for (var i = 0; i < 4; i++){

  		var newPond = new generatePondSet(i*width/5, height/2);
  		ponds.push(newPond);
	}

}

function mousePressed(){
  refreshPattern();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


//code based on : http://genekogan.com/code/p5js-perlin-noise/
