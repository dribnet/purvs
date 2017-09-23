var curRandomSeed;
var colours;
var inPatternMode = true;


function setup (){
    curRandomSeed = int(focusedRandom(0, 100));
    createCanvas(907, 500);
}

function changeRandomSeed() {
  	curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function draw (){
	background(246, 242, 252);
    resetFocusedRandom(curRandomSeed);
    noiseSeed(curRandomSeed);

    var x = 0;
    var y = 0;
    var x_steps = 1 + Math.floor(width / 38);
  	var y_steps = 1 + Math.floor(height / 28);
    colours = ["255, 240, 112","139, 186, 179"];
    colours = random(colours);

    // save grid locations
	var grid_locations = new Array(x_steps);
		for(var i=0;i<x_steps;i++) {
	    	grid_locations[i] = new Array(y_steps);
	    	for (var j = 0; j < y_steps; j++) {
	      		x_pos = i * 38;
	      		y_pos = j * 28;
	      		if((j % 2) == 0){
	        		x_pos = x_pos + 20;
	    	}
	    grid_locations[i][j] = [x_pos, y_pos];
	  	}
	}

 	if(inPatternMode){
 	// draws the pattern
	// draws lines behind the diamonds
	    strokeWeight(0.5);
	    line(226.5, 0, 226.5, height);
	    line(452.5, 0, 452.5, height);
	    line(678.5, 0, 678.5, height);


		// draws rows
		rotate(radians(-45))
		for (var i = 0; i < 560; i = i+80) { 
		  for (var j = 0; j < 500; j = j+80) {
		    var dimensions = random(100, 150, 50);
		    var dimensionsArc = random(50, 200);
		    var doubleDots = random(50, 100);

		    push();
		    translate(x, y);
		    rotate(radians(90));
		    noFill();
		    stroke(0);
		    strokeWeight(random(0.2, 1));

		    // arcs in the midground
		    push();
		    noStroke();
		    fill(246, 242, 252);
		    arc(x, y, dimensionsArc, dimensionsArc, -0.8, radians(135));
		    pop();


		    // diamonds in the foreground
		    rect(x, y, dimensions, dimensions);

		    // diamonds in the background
		    push();
		    stroke(0);
		    strokeWeight(0.1);
		    rectMode(CENTER);
		    rect(x, y, dimensions, dimensions);
		    pop();

		    noStroke();
		    fill(145, 187, 255);
		    // random dots around the pattern
		    // dots in center of points
		    if(dimensions < 120){
		    ellipseMode(CENTER);
		    ellipse(x, y, 10, 10);
		    }

		    // dots on top verticies of rects
		    if(dimensions > 140){
		    ellipseMode(CENTER);
		    ellipse(x, (y+doubleDots), 7, 7);
		    }

		    if(dimensions > 140){
		    ellipseMode(CENTER);
		    ellipse((x+doubleDots), y, 7, 7);
		    }

		    pop();


		    x += 160;
		    }
		x=0;
		y += 80; 

		}
	}

	else{
		//draws the map
		for(var i=0;i<x_steps-1;i++) {
	      for(var j=0;j<y_steps-1;j++) {
	        // var shade = map(noiseVal, 0, 1, 0, 255)
	        var loc = grid_locations[i][j];
	        var x1 = loc[0];
	        var y1 = loc[1]

	        var x_noise = x1/100.0;
	        var y_noise = y1/100.0;
	        var noiseVal = noise(x_noise, y_noise);

	        //generates a random number for a plot to be drawn
			var randomPlot = random(0, 150);
			noFill();
			if(randomPlot < 50){
				rect(x1+random(5, 20), y1+20, 10, 10);
			}
			if(randomPlot > 51 & randomPlot < 100){
				ellipse(x1+random(5, 20), y1+20, 10, 10);
			}
			if(randomPlot > 100 & randomPlot < 150){
				fill(0);
				ellipse(x1+random(5, 20), y1+20, 10, 10);
			}
	      }
	    }    
	}

}



function keyTyped(){
  if (key == '!') {
    saveBlocksImages();
  }
    else if (key == ' ') {
    inPatternMode = !inPatternMode;
  }
}
