

var circles = [];

var circle;

var ponds = [];

function setup() {
  createCanvas(960, 500);

  noiseSeed(random(1000));


  for (var i = 0; i < 4; i++){
  		var newPond = new Pondset(i*width/5, height/2);
  		ponds.push(newPond);
	}


}

//sampling code from https://github.com/CodingTrain/Rainbow-Code/blob/master/Tutorials/P5JS/p5.js/9.5_p5.js_uniform_random_sampling/sketch.js


function draw() {
	background(199, 219, 249);


	for (var i = 0; i < 4; i++){
  		ponds[i].display();
	}
}




function Pondset(x, y){
	

	this.xOff = random(1000);
   this.rand = random(25, 35);
   this.angle = Math.random()*Math.PI*2;



  this.rad = 0;

	this.leafX = x;
  this.leafY = y;
  this.randS =  random(0.5, 0.9);
  this.showLotus = Math.floor(random(0, 2));

  this.lotusScale = random(0.5, 1.2);

  this.display = function() {
  	push();

  	this.generateLeafShape(this.leafX, this.leafY);

  this.lotusX = Math.cos(this.angle)*this.rad;
this.lotusY = Math.sin(this.angle)*this.rad;


  	this.generateLotusShape(this.leafX + this.lotusX, this.leafY + this.lotusY, this.lotusScale, this.showLotus);
  	pop();
  }
  this.generateLeafShape=function(x, y){
	push();
	translate(x, y)
	
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
  	fill(255, 255, 255, 0);
  	ellipse(0, 0, this.rad*2, this.rad*2);

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
  	if (v==1){

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
}
}

//code borrowed from: https://processing.org/discourse/beta/num_1207766233.html 

}




function refreshPattern(){
	ponds = [];
 
  for (var i = 0; i < 4; i++){
  		var newPond = new Pondset(i*width/5, height/2);
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
