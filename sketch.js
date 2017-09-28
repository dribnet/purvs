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

	background(0);

	resetFocusedRandom(curRandomSeed);
  	noiseSeed(curRandomSeed);




    

  	//stars	
    for(j = 10; j < height; j = j + 10 * random(1.5)){
  		for(i = 10; i < width; i = i + 10 * random(2)){

  		noStroke();

  		fill(255, 255, 255, focusedRandom(0, 100));

  		ellipse(i + random(-3, 3), j + random(-3, 3), 3 , 3);

  	}
  }

  fill(255, 123, 40);
  var scale = random(150, 500);
  ellipse(random(width), random(height), scale, scale);


  
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
