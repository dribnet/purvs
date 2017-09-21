var shapeSize = 80; 
var gap = 20;

function setup () {
  createCanvas(960, 500);
  drawShapes();
}

function draw () {
	
}

function mouseClicked(){
	drawShapes();
	shapeSize = random(80,120);
}


function drawShapes(){
	clear();
	noStroke();
	background(55,55,55);

	translate(shapeSize/2, shapeSize/2);

	for(var i = 0; i * (shapeSize+gap) < width; i++){

		for(var j = 0; j * (shapeSize+gap) < height*2; j++){

			shape(0,0, shapeSize);

			translate(shapeSize+gap, 0);
		}

		translate(-(shapeSize+gap)*j, (shapeSize+gap));
	}
}

function shape(x, y, r){
	fill(230,230,230);
	ellipse(x,y,r, r);

	createPatternSpiral(x,y,r);
}

function createPattern(x, y, r){

	fill(55,55,55);

	var amount = random(1, 10);
	beginShape();
	for(var j = 0; j < amount; j++){
		
		for(var i = 0; i < 5; i++){
			
			var xr = random(x-r/2, x+r/2);
			var yr = random(y-r/2, y+r/2);
			var xr2 = random(x-r/2, x+r/2);
			var yr2 = random(y-r/2, y+r/2);
			curveVertex(xr2,yr2);
		}
		
	}
	endShape();
}

function createPatternSpiral(x, y, r){

	fill(55,55,55);
	stroke(55,55,55);
	strokeWeight(4);
	noFill();
	bezier(x-random(0,r), y-r/2, x+r/2, y-r/2, x-r/2, y+r/2, x+random(0,r), y+r/2,);
	push();
	//rotate(45);
	translate(25,0);
	bezier(x-r/2, y-r/2, x+r/2, y-r/2, x-r/2, y+r/2, x+r/2, y+r/2,);

	translate(-50,0);
	bezier(x-r/2, y-r/2, x+r/2, y-r/2, x-r/2, y+r/2, x+r/2, y+r/2,);

	pop();
	

	var amount = random(5, 20);
	var type = random(0, 1);

	for(var j = 0; j < amount; j++){
		push();
		rotate(random(0,360));

		beginShape();
		var xr = random(x-r/2, x+r);
		var yr = random(y-r/2, y+r/2);
	

		if(type > 0.5){
			vertex(x-r/2,y-r/2);
			bezierVertex(xr, y-r/2, xr, y+r/2, x-r/2, y+r/2);
		}
		else{
			vertex(x+r/2,y-r/2);
			bezierVertex(xr, y-r/2, xr, y+r/2, x+r/2, y+r/2);		
		}
		endShape();
		pop();
	}
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}