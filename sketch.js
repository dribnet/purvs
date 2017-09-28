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

  	stroke(0, 88, 98);
    noFill();

  

  		var random1 = Math.floor(random(5));

  		var random2 = Math.floor(random(5));

  		if (random2 == random1){
  		random2 = Math.floor(random(5));
  		}

  		var random3 = Math.floor(random(5));;

  		if (random3 == random1 || random3 == random2){
  		random3 = Math.floor(random(5));
  		}

  			//middle shapes

  		strokeWeight(3);
  		drawShape(width/2, height/2, 200, random1);
  		drawShape(width/2, height/2, 200, random2);
  		drawShape(width/2, height/2, 200, random3);

  		random1 = Math.floor(random(5));

  		random2 = Math.floor(random(5));

  		if (random2 == random1){
  		random2 = Math.floor(random(5));
  		}

  		random3 = Math.floor(random(5));;

  		if (random3 == random1 || random3 == random2){
  		random3 = Math.floor(random(5));
  		}

  			//left shapes1

  		strokeWeight(2);	
  		drawShape(width/4, height/2, 100, random1);
  		drawShape(width/4, height/2, 100, random2);
  		drawShape(width/4, height/2, 100, random3);

  		random1 = Math.floor(random(5));

  		random2 = Math.floor(random(5));

  		if (random2 == random1){
  		random2 = Math.floor(random(5));
  		}

  		random3 = Math.floor(random(5));;

  		if (random3 == random1 || random3 == random2){
  		random3 = Math.floor(random(5));
  		}

  			//right shapes1

  		strokeWeight(2);
  		drawShape(width * 3/4, height/2, 100, random1);
  		drawShape(width * 3/4, height/2, 100, random2);
  		drawShape(width * 3/4, height/2, 100, random3);

  		random1 = Math.floor(random(5));

  		random2 = Math.floor(random(5));

  		if (random2 == random1){
  		random2 = Math.floor(random(5));
  		}

  		random3 = Math.floor(random(5));;

  		if (random3 == random1 || random3 == random2){
  		random3 = Math.floor(random(5));
  		}

  			//left shapes2

  		strokeWeight(0.5);
  		drawShape(width/10, height/2, 30, random1);
  		drawShape(width/10, height/2, 30, random2);
  		drawShape(width/10, height/2, 30, random3);

  		random1 = Math.floor(random(5));

  		random2 = Math.floor(random(5));

  		if (random2 == random1){
  		random2 = Math.floor(random(5));
  		}

  		random3 = Math.floor(random(5));;

  		if (random3 == random1 || random3 == random2){
  		random3 = Math.floor(random(5));
  		}

  			//right shapes2

  		strokeWeight(0.5);
  		drawShape(width * 0.9, height/2, 30, random1);
  		drawShape(width * 0.9, height/2, 30, random2);
  		drawShape(width * 0.9, height/2, 30, random3);

  


  
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
