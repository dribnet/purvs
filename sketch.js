function setup () {
	curRandomSeed = int(focusedRandom(0, 100));
  	createCanvas(960, 500);


function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}


  
}

function draw () {

	background(234, 192, 156);

	resetFocusedRandom(curRandomSeed);
  	noiseSeed(curRandomSeed);

	strokeWeight(3);
	stroke(0, 88, 98);
    noFill();

  		
    for(j = 100; j < height; j = j + 100){
  		for(i = 96; i < width; i = i + 96){

  			var random1 = Math.floor(random(5));

  			var random2 = Math.floor(random(5));


  			var random3 = Math.floor(random(5));;


  		strokeWeight(1);
  		drawShape(i, j, 40, random1);
  		drawShape(i, j, 40, random2);
  		drawShape(i, j, 40, random3);

  	}
  }


  


  
}

function drawShape(x, y, scale, shape){

	if (shape == 0){

		beginShape();
 		vertex(x, y - scale/1.7);
		vertex(x - scale/1.7, y + scale/1.7);
 		vertex(x + scale/1.7, y + scale/1.7);
 		vertex(x, y - scale/1.7);
  		endShape();
  }

  	if (shape == 1){
  		rectMode(CENTER);
		rect(x, y, scale-20, scale-20);
	}

	if (shape == 2){
		ellipse(x , y , scale + 20, scale + 20);
	}

	if (shape == 3){

		beginShape();
		vertex(x - scale/1.5, y);
 		vertex(x - scale/3, y - scale/1.5);
 		vertex(x + scale/3, y - scale/1.5);
 		vertex(x + scale/1.5, y);
 		vertex(x + scale/3, y + scale/1.5);
 		vertex(x - scale/3, y + scale/1.5);
 		vertex(x - scale/1.5, y);
  		endShape();
	}

	if (shape == 4){

		line(x - scale/2, y - scale/2, x + scale/2, y + scale/2);
		line(x - scale/2, y + scale/2, x + scale/2, y - scale/2);
	}

}





function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
