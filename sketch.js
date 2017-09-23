var curRandomSeed;

var colours;
var treeColours;
var treeRandomX;

var inPatternMode = true;

function setup (){
    curRandomSeed = int(focusedRandom(0, 100));
    createCanvas(907, 500);
    treeRandomX = focusedRandom(10, 30);
}

function changeRandomSeed() {
  	curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a+PI/6) * radius;
    var sy = y + sin(a+PI/6) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function draw (){
	background(246, 242, 252);
    resetFocusedRandom(curRandomSeed);
    noiseSeed(curRandomSeed);
    var x = 0;
    var y = 0;
    var x_steps = 1 + Math.floor((width - 20) / 38);
  	var y_steps = 1 + Math.floor((height - 20) / 48);

    colours = ["255, 240, 112","139, 186, 179"];
    colours = random(colours);

    // save grid locations
	var grid_locations = new Array(x_steps);
		for(var i=0;i<x_steps;i++) {
	    	grid_locations[i] = new Array(y_steps);
	    	for (var j = 0; j < y_steps; j++) {
	      		x_pos = i * 38 - random(0, 40);
	      		y_pos = j * 48 - random(0, 40);
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
		// draws the map
		for(var i=0;i<x_steps-1;i++) {
	      for(var j=0;j<y_steps-1;j++) {
	        // var shade = map(noiseVal, 0, 1, 0, 255)
	        var loc = grid_locations[i][j];
	        var x1 = loc[0];
	        var y1 = loc[1]

	        var x_noise = x1/100.0;
	        var y_noise = y1/100.0;
	        var noiseVal = noise(x_noise, y_noise);

	        // generates a random number for a plot to be drawn
			var randomPlot = random(0, 100);

			noFill();
			noStroke();
			treeColours = ["#b3d12f", "#d1a630", "#78b53b"];
    		treeColours = random(treeColours);
    		fill(treeColours);

    		if(randomPlot < 100 & y1 < 100){
				rect(x1+30+focusedRandom(0, 5), y1+47, 1, 5);
				rect(x1-30-focusedRandom(0, 5), y1+47, 1, 5);
			}	

			// gap in landscape
			if(randomPlot < 5){
				//do nothing
			}
			// round trees
			if(randomPlot > 6 & randomPlot < 20 & y1 < 100){
				ellipse(x1+38, y1+38, 20, 20+focusedRandom(0, 10, 1));
				fill(0);
				rect(x1+38, y1+38, 1, 15+focusedRandom(0, 5, 1));
			}
			// traingle trees
			if(randomPlot > 21 & randomPlot < 40 & y1 < 100){
				polygon(x1+38, y1+38, 10+focusedRandom(0, 5, 1), 3);
				fill(0);
				rect(x1+38, y1+38, 1, 7+focusedRandom(0, 5, 1));
				
			}
			// 3x triangle trees
			if(randomPlot > 41 & randomPlot < 60 & y1 < 100){
				// bottom
				polygon(x1+38, y1+38, 15, 3);
				// middle
				polygon(x1+38, y1+29, 10, 3);
				// top
				polygon(x1+38, y1+23, 7, 3);
				fill(0);
				rect(x1+38, y1+38, 1, 7+focusedRandom(0, 5));
				
			}

			// stick trees
			if(randomPlot > 61 & randomPlot < 80 & y1 < 100){
				fill(0);
				rect(x1+38, y1+38, 1, 7+focusedRandom(0, 15, 7));
				if(randomPlot > 70){
					rect(x1+30+focusedRandom(0, 5), y1+47, 1, 5);
				}	
			}

			// 2x circle trees
			if(randomPlot > 81 & randomPlot < 100 & y1 < 100){
				ellipse(x1+38, y1+38, 20, 20);
				ellipse(x1+38, y1+29, 20, 20);
				fill(0);
				rect(x1+38, y1+38, 1, 15+focusedRandom(0, 5, 1));
				
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
