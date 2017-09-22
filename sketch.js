var shapeSize = 80; 
var gap = 20;

function setup () {
  createCanvas(960, 500);
  drawShapes();
}

function mouseClicked(){
	drawShapes();
	shapeSize = random(80,80);
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

	createPattern(x,y,r);
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
	strokeWeight(1);
	noFill();

	var amount = 10;
	var type = random(0, 1);
	var r2 = 0;

	for(var j = 0; j < amount; j++){
		push();
		rotate(random(0,300));

		r2 += random(2, 10);
		var yr = 1 + j * 5
	
		arc(x,y, r2, r2, 0, random(15,360));

		pop();
	}
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}