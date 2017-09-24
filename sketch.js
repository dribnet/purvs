var curRandomSeed;

var colours;
var treeColours;
var treeRandomX;

var inPatternMode = true;
var noiseScale;


function setup (){
    curRandomSeed = int(focusedRandom(0, 100));
    createCanvas(907, 500);
    treeRandomX = focusedRandom(10, 30);
    noiseScale = 0.001;
    noiseScaleMid = 0.002;
    noiseScaleBack = 0.003;

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
    var x_steps = 1 + Math.floor((width - 20) / 28);
  	var y_steps = 1 + Math.floor((height - 70) / 38);

    colours = ["255, 240, 112","139, 186, 179"];
    colours = random(colours);

    // save grid locations
	var grid_locations = new Array(x_steps);
		for(var i=0;i<x_steps;i++) {
	    	grid_locations[i] = new Array(y_steps);
	    	for (var j = 0; j < y_steps; j++) {
	      		x_pos = i * 28 - random(0, 20);
	      		y_pos = j * 48 - random(0, 20);
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
		background(175, 224, 222);
		var maxHillHeight = random(0, 100);
		// generates land
		for (var x=0; x < width; x++) {
			strokeWeight(10);
			// back mountain
			var noiseVal = noise((1000+x)*noiseScaleBack, 1000*noiseScaleBack);	
    		stroke(247, 255, 234);
    		line(x, 70-maxHillHeight+noiseVal*100, x, height);
    		// mid mountain
   			var noiseVal = noise((1000+x)*noiseScaleMid, 1000*noiseScaleMid);	
    		stroke(237, 249, 217);
    		line(x, 125-maxHillHeight+noiseVal*100, x, height);
    		// front mountain
    		var noiseVal = noise((1000+x)*noiseScale, 1000*noiseScale);
    		stroke(223, 239, 198);
    		line(x, 165-maxHillHeight+noiseVal*100, x, height);

  		}
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
			var randomPlot = random(0, 200);

			noFill();
			noStroke();
			treeColours = ["#b3d12f", "#d1a630", "#78b53b", "#a1c677", "#d2b9a8", "#d1aaa8"];
    		treeColours = random(treeColours);

			// gap in landscape
			if(randomPlot < 1){
				// ADD RANDOM LAKE
				// HOT AIR BALLOONS IN SKY'
				// houses
				if(y1 > 185){
					fill(100);
					rect(x1+32, y1+43, 1, 10);
					rect(x1+43, y1+43, 1, 10);
					polygon(x1+38, y1+38, 10, 3);
				}
			}

			if(randomPlot > 6 & randomPlot < 20){
				// round trees
				if(y1 > (185 - maxHillHeight)){
					fill(treeColours);
					ellipse(x1+38, y1+38, 20, 20+focusedRandom(0, 10, 1));
					fill(0);
					rect(x1+38, y1+38, 1, 15+focusedRandom(0, 5, 1));
				}
			}
			
			if(randomPlot > 21 & randomPlot < 30){
				if(y1 > (185 - maxHillHeight)){
					fill(0);
					ellipse(x1+38, y1+38, 1.5, 1.5);
				}
			}
			
			if(randomPlot > 41 & randomPlot < 60){
				// 3x triangle trees
				if(y1 > (185 - maxHillHeight)){
					fill(treeColours);
					polygon(x1+38, y1+38, 15, 3);
					polygon(x1+38, y1+29, 10, 3);
					if(randomPlot > 50){
						polygon(x1+38, y1+23, 7, 3);
						fill(0);
						rect(x1+38, y1+38, 1, 7+focusedRandom(0, 5));
					}
					fill(0);
					rect(x1+38, y1+38, 1, 7+focusedRandom(0, 5));
				}
				
			}

			
			if(randomPlot > 61 & randomPlot < 80){
				// stick trees
				if(y1 > (185 - maxHillHeight)){
					fill(0);
					rect(x1+38, y1+38, 1, 7+focusedRandom(0, 15, 7));
						if(randomPlot > 70){
							rect(x1+30+focusedRandom(0, 5), y1+47, 1, 5);
						}
				}	
			}

			
			if(randomPlot > 81 & randomPlot < 100){
				// 2x circle trees
				if(y1 > (185 - maxHillHeight)){
					fill(treeColours);
					ellipse(x1+38, y1+38, 20, 20);
					ellipse(x1+38, y1+29, 20, 20);
					fill(0);
					rect(x1+38, y1+38, 1, 15+focusedRandom(0, 5, 1));
				}
			}

			if(randomPlot > 120){
				if(y1 > (185 - maxHillHeight)){
    				fill(treeColours);
					rect(x1+10+focusedRandom(0, 30), y1+focusedRandom(0, 5), 1, 3+(random(0,5)));
					rect(x1-10-focusedRandom(0, 30), y1+focusedRandom(0, 5), 1, 3+(random(0,5)));
				}		
			}
			
			}
	      }
	      	if(randomPlot < 30){
	        timeOfDayColours = [0, 50, 150, 200];
    		timeOfDayColours = random(timeOfDayColours);
	      	fill(timeOfDayColours, 100, 100, 70);
			rect(0, 0, width, height);
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
