  var slider1, slider2, slider3, slider4, slider5;

function setup () {
	curRandomSeed = int(focusedRandom(0, 100));
  	var main_canvas = createCanvas(960, 500);
 	main_canvas.parent('canvasContainer');


  slider1 = createSlider(1, 5, 3);
  slider2 = createSlider(1, 4, 2);
  slider3 = createSlider(-25, 25, 0);


  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');



function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}


  
}

function draw () {

	var s1 = slider1.value();
 	var s2 = slider2.value();
  	var s3 = slider3.value();

	background(0);

	resetFocusedRandom(curRandomSeed);
  	noiseSeed(curRandomSeed);




    

  	//stars	
    for(j = 10; j < height; j = j + 10 * random(s1)){
  		for(i = 10; i < width; i = i + 10 * random(s1)){

  		noStroke();

  		fill(255, 255, 255, focusedRandom(0, 100));

  		ellipse(i + random(-3, 3), j + random(-3, 3), 3 , 3);

  	}
  }

  var planet = s2;

  if(planet == 1){

  	fill(255 + s3, random(123)+ s3, random(40)+ s3);
  	var scale = random(150, 500);
  	ellipse(random(width), random(height), scale, scale);

  }

  if(planet == 2){

  	fill(255+ s3, random(123)+ s3, random(40)+ s3);

  	var scale = random(150, 500);
  	ellipse(random(width), random(height), scale, scale);

  	fill(random(100)+ s3, random(123)+ s3, 40+ s3);
  	var scale = random(50, 350);
  	ellipse(random(width), random(height), scale, scale);

  }

   if(planet == 3){

  	fill(255+ s3, random(123)+ s3, random(40)+ s3);
  	var scale = random(150, 500);
  	ellipse(random(width), random(height), scale, scale);

  	fill(random(100)+ s3, random(123)+ s3, 40+ s3);
  	var scale = random(50, 350);
  	ellipse(random(width), random(height), scale, scale);

  	fill(random(200)+ s3, random(123)+ s3, random(40)+ s3);
  	var scale = random(20, 200);
  	ellipse(random(width), random(height), scale, scale);

  }

  if(planet == 4){

  	fill(255+ s3, random(123)+ s3, random(40)+ s3);
  	var scale = random(150, 500);
  	ellipse(random(width), random(height), scale, scale);

  	fill(random(100)+ s3, random(123)+ s3, 40+ s3);
  	var scale = random(50, 350);
  	ellipse(random(width), random(height), scale, scale);

  	fill(random(200), random(123), random(40));
  	var scale = random(20, 200);
  	ellipse(random(width), random(height), scale, scale);

  	fill(random(200, 250), random(123), random(40));
  	var scale = random(40, 400);
  	ellipse(random(width), random(height), scale, scale);

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
